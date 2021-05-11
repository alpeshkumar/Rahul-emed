atpApp.factory('CommonService', function ($http, $rootScope, $location, AuthService, $timeout, $cookies, Socialshare) {
//    var count = 0;
//    function getimg(arr, i) {
//        debugger;
//       
//        var server_id = arr[i].propertyagents[0].propertyimages[0].server_id;
//        var image_name = arr[i].propertyagents[0].propertyimages[0].image_name;
//        var agent_id = arr[i].propertyagents[0].propertyimages[0].agent_id;
//        var directory = arr[i].propertyagents[0].propertyimages[0].directory;
//        $http({
//            method: 'GET',
//            url: 'http://atpapi.eatdigi.com/api/v1/getpropertyimageurl?server_id=' + server_id + '&image_name=' + image_name + '&agent_id=' + agent_id + '&directory=' + directory,
//        }).then(function (response) {
//            arr[i]['imageurl'] = response.data
//            i++;
//            if (i < arr.length) {
//                getimg(arr, i);
//            }
//        }).catch(function (reason) {
//            alert(reason.data.error.message);
//        }).finally(function () {
//            //  $rootScope.loadingmsp = false;
//        });
//    }
    return {
        cms: function () {
            if (window.location.hostname == '120.72.91.51') {
                var url = "http://" + window.location.hostname + "/php-projects/angular_js_and_wp_sites_php/wordpress/api/get_page_index/";
            } else {
                var url = "http://" + window.location.hostname + "/live_projects/angular_js_and_wp_sites_php/wordpress/api/get_page_index/";
            }
            $http({
                method: 'GET',
                url: url,
                params: {},
            }).then(function (response) {
                $rootScope.cmspages = response.data.pages;
            }).catch(function (reason) {
                console.log(reason);
            });
        },
        displaycms: function (page) {
            $('#content').html('');
            $('#content').html('<br><div class="home-news-block clearfix"><h2 align="center">' + page.title + '</h2></div><br>');
            $('#content').css('padding-left', '50px');
            $('#content').css('padding-bottom', '50px');
            $('#content').append(page.content);
        },
        subscribeToNewsLetters: function (email) {
            if (!email) {
                alert('Please enter valid email...!');
            } else {
                $http({
                    method: 'POST',
                    url: 'http://atpapilive.eatdigi.com/api/v1/newsletters',
                    params: {token: $rootScope.token, name: 'test', email: email},
                }).then(function (response) {
                    $rootScope.email = '';
                    alert(response.data.message);
                }, function (reason) {
                    alert(reason.data.error.message);
                });
            }
        },
        unsubscribeToNewsletters: function (email) {
            $http({
                method: 'POST',
                url: 'http://atpapilive.eatdigi.com/api/v1/newsletters/unsubscribe',
                params: {token: $rootScope.token, email: email},
            }).then(function (response) {
                $scope.email = '';
            }, function (reason) {
                console.log(reason.error);
            });
        },
        uploadFileToUrl: function (file, uploadUrl) {
            var fd = new FormData();
            fd.append('file', file);
            $http.post(uploadUrl, fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            })
                    .success(function () {
                    })

                    .error(function () {
                    });
        },
        sharebutton: function (url) {
            var url = window.location.hostname + '/php-projects/angular_js_and_wp_sites_php/properties/#/propertydetails/' + url;
            $(".share").attr("socialshare-url", url);
        },
        findposttown: function (id) {
            if (!id) {
                alert('Please enter Posttown ID');
            } else {
                $http({
                    method: 'GET',
                    url: 'http://atpapilive.eatdigi.com/api/v1/posttown/' + id,
                    params: {token: $rootScope.token},
                }).then(function (response) {
                    if (response.data.data.length > 0) {
                        $rootScope.location = "T" + id;
                        $rootScope.town = response.data.data[0].town.town;
                        $rootScope.postcode = response.data.data[0].postcode;
                    } else {
                        alert('Enter valid posttown id');
                    }
                }, function (reason) {
                    alert(reason.data.error.message);
                });
            }
        },
        for_sale: function () {
            $rootScope.type = 1;
            $location.path('/');
            window.setTimeout(function () {
                $("#aFindAgents").removeClass("active");
                $("#aToRent").removeClass("active");
                $("#aForSale").addClass("active");
                $("html, body").animate({scrollTop: 450}, "slow");
            }, 1000);
        },
        to_rent: function () {
            $rootScope.type = 2;
            $location.path('/');
            window.setTimeout(function () {
                $("#aFindAgents").removeClass("active");
                $("#aForSale").removeClass("active");
                $("#aToRent").addClass("active");
                $("html, body").animate({scrollTop: 450}, "slow");
            }, 1000);
        },
        agent: function () {
            $location.path('/');
            window.setTimeout(function () {
                var Header = $('#header');
                $("html, body").animate({scrollTop: 0}, "slow");
                Header.toggleClass("menu-open");
                $(".header-login").removeClass("active").find(".dropdown-menu").slideUp();
                if ($(".js-dropdown-menu").is(":visible")) {
                    $(".main-menu").find(".js-dropdown-menu").slideUp();
                    $(".direct-filter").find(".prop-sub-filter.js-dropdown-menu").slideUp();
                }
                window.setTimeout(function () {
                    var dropHeight = $('#agent').next(".product-toolbar .prop-main-filter").innerHeight();
                    var dropHeight1 = $('#agent').next(".product-toolbar .prop-sub-filter").innerHeight() + $(this).closest(".page-dropdown .prop-main-filter").innerHeight();
                    var totalHeight = dropHeight + dropHeight1;
                    $(".product-toolbar .js-nav-menu").css('margin-bottom', totalHeight + 'px');
                    $(".active").not($('#agent').parents('li')).removeClass('active');
                    $('#agent').closest('li').toggleClass('active').children(".js-dropdown-menu").stop("true", "true").slideToggle(500);
                    $('#agent').closest('li').siblings().find(".js-dropdown-menu").stop("true", "true").slideUp();
                    $('#agent').closest('li').children().find(".js-dropdown-menu").stop("true", "true").slideUp();
                }, 1000);
            }, 500);
        },
        getDateString: function (dateStr, updatedatestr) {
            if (updatedatestr != '0000-00-00 00:00:00') {
                var date = new Date(updatedatestr);
                var day = date.getDate();
                var month = date.getMonth() + 1;
                var year = date.getFullYear();
                return "updated on "+day + "/" + month + "/" + year;
            } else {
                var date = new Date(dateStr);
                var day = date.getDate();
                var month = date.getMonth() + 1;
                var year = date.getFullYear();
                return "added on "+day + "/" + month + "/" + year;
            }
        },
        getredirecturl: function () {
            return $cookies.get('redirecturl');
        },
        saveproperty: function (propid) {
            var userid = $cookies.get('userid');
            if (!userid) {
                alert('Please login to save your properties!');
            } else {
                $rootScope.loading = true;
                $http({
                    method: 'POST',
                    url: 'http://atpapilive.eatdigi.com/api/v1/customers/' + userid + '/dreamstreet',
                    params: {token: $rootScope.token, customerid: userid, propertyid: propid},
                }).then(function (response) {
                    alert('Save success');
                }).catch(function (reason) {
                    alert(reason.data.error.message);
                }).finally(function () {
                    $rootScope.loading = false;
                });
            }
        },
        removedreamstreet: function (propid) {
            var userid = $cookies.get('userid');
            if (!userid) {
                alert('Login required for this action');
            } else {
                $rootScope.loadingmsp = true;
                $http({
                    method: 'DELETE',
                    url: 'http://atpapilive.eatdigi.com/api/v1/customers/' + userid + '/dreamstreet',
                    params: {token: $rootScope.token, customerid: userid, propertyid: propid},
                }).then(function (response) {
                    alert('Remove success');
                }).catch(function (reason) {
                    alert(reason.data.error.message);
                }).finally(function () {
                    $rootScope.loadingmsp = false;
                    $rootScope.properties = $rootScope.properties.filter(function (obj) {
                        return obj.id != propid
                    })
                });
            }
        }
//        imageurl: function (arr, i) {
//            var i =0;
//            getimg(arr, i);
//        },
    };
});