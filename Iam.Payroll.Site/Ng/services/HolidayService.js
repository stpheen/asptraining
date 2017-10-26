app.factory('svcHoliday', ['$http', '$q', function svcHoliday($http, $q) {

    $this = {
        getFilter: function () {
            var filter = JSON.parse(sessionStorage.getItem('holidayFilter'));
            if (filter) {
                return filter
            } else {
                return {
                    searchText: '',
                    CurrentPage: 1,
                    PageSize: 10,
                    orderField: "Id",
                    orderBy: "Asc"
                }
            }
        },
        search: function (filter) {
            sessionStorage.setItem('holidayFilter', JSON.stringify(filter));
            var deferred = $q.defer();
            return $this.GetPaged(filter.searchText != undefined ? filter.searchText : '',
                 filter.CurrentPage, filter.PageSize);
        },

        GetPaged: function (searchText, PageNo, PageSize) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: '/Holidays?SearchText=' + searchText + '&PageNo=' + PageNo + '&PageSize=' + PageSize,
            })
            .success(function (data, status) {
                deferred.resolve(data);
            })
            .error(function (data, status) {
                deferred.reject(data);
            });
            return deferred.promise;
        },

        getAllHolidays: function () {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: '/Holidays/All/'
            })
            .success(function (data, status) {
                deferred.resolve(data);
            })
            .error(function (data, status) {
                deferred.reject(data);
            });
            return deferred.promise;
        },

        getById: function (Id) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: '/Holiday/' + Id
            }).success(function (data, status) {
                deferred.resolve(data);
            }).error(function (data, status) {
                deferred.reject(data);
            });
            return deferred.promise;
        },

        saveHoliday: function (holiday) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: '/Holiday/add',
                data: holiday

            }).success(function (data, status) {
                deferred.resolve(data);
            }).error(function (data, status) {
                deferred.reject(data);
            });
            return deferred.promise;
        }
    }
    return $this;
}])

