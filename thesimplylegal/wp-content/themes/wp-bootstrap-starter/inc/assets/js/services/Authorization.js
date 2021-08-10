/// <reference path="../lib/angular/angular.min.js" />
        atpApp.factory('AuthService', function ($http, $rootScope, $location, $timeout, $cookies) {
            
              function saveUserSearch() {
                $http({
                    method: 'PATCH',
                    url: 'http://atpapilive.eatdigi.com/api/v1/customers/search/'+$cookies.get('userid'),
                    params: {token: $cookies.get('token'),searchlocationkey:$cookies.get('type')+$cookies.get('key')},
                }).then(function (response) {
                }, function (reason) {
                    console.log('Token refresh was not successful!');
                });
            }
            function refreshToken(callback) {
                $http({
                    method: 'GET',
                    url: 'http://atpapilive.eatdigi.com/api/v1/btoken',
                    params: {btoken: $cookies.get('btoken')},
                }).then(function (response) {
                    if ($cookies.get('token') == null) {
                        if (response.data.data.attempts <= 0 && response.data.data.attempts != '' || response.data.data.btoken == false) {
                            $cookies.remove('btoken')
                            alert('Your 10 free search is over. Please Sign up to search for more properties!')
                            $location.path('/signup');
                        } else {
                            if (!$cookies.get('btoken')) {
                                $cookies.put('btoken', response.data.data.btoken);
                            }
                            callback(response.data.data.btoken);
                        }
                    }else{
                        debugger;
                        saveUserSearch();
                    }
                }, function (reason) {
                    console.log('Token refresh was not successful!');
                });
            }
            return {
                refreshToken: refreshToken,
                login: function (username, password) {
                    $http({
                        method: 'POST',
                        url: 'http://atpapilive.eatdigi.com/api/v1/authenticate',
                        params: {email: username, password: password}
                    }).then(function (response) {
                        $rootScope.token = response.data.token;
                        $cookies.put('token', response.data.token);
                        $cookies.remove('btoken');
                        if ($rootScope.token != '') {
                            $http({
                                method: 'GET',
                                url: 'http://atpapilive.eatdigi.com/api/v1/authenticate/user',
                                params: {token: $rootScope.token},
                            }).then(function (response) {
                                $rootScope.userDataFirst = response.data.user;
                                if ($rootScope.userDataFirst.usertype == "CUSTOMER") {
                                    $cookies.put('redirecturl', 'userprofile');
                                    $location.path('/userprofile');
                                } else if ($rootScope.userDataFirst.usertype == "AGENT") {
                                    $cookies.put('redirecturl', 'agentprofile');
                                    $location.path('/agentprofile');
                                } else {
                                    console.log('User Type Un-Defined(AGENT, CUSTOMER)');
                                }
                            }).catch(function (reason) {
                                console.log(reason.statusText);
                            });
                        }
                    }, function (reason) {
                        $rootScope.loginerror = reason.statusText;
                    });
                },
                logout: function () {
                    $rootScope.token = '';
                    $cookies.remove('token');
                    $cookies.remove('userid')
                    $cookies.remove('username');
                    $cookies.remove('tab');
                    $location.path('/');
                },
                islogin: function () {
                    if (!$cookies.get('token')) {
                        $location.path('/');
                    } else {
                        $rootScope.token = $cookies.get('token');
                    }
                },
                forgot: function () {
                    $http({
                        method: 'GET',
                        url: 'http://atpapilive.eatdigi.com/api/v1/password/email', //,
                        params: {},
                    }).then(function (response) {
                        $(".login-form").hide();
                        $(".header-login-form.forgot-form").show();
                        $(".header-login-form.forgot-form").html(response.data);//'<form><div>Email<input type="email" ng-model="email"></div><div><button type="submit" ng-click="forgot_password()">Send Password Reset Link</button></div></form>');
                        $(".header-login-form.forgot-form button").addClass("btn btn-primary pull-left");
                        $(".header-login-form.forgot-form button").css("margin-top", "5px");
                        var v = $(".header-login-form.forgot-form form").attr("action");
                        $(".header-login-form.forgot-form form").removeAttr('action');
                        $(".header-login-form.forgot-form form").removeAttr('method');
                        var hidinput_value = $('input[name=_token]').val()
                        $('input[name=_token]').next("div").find('input[type=email]').addClass("form-control hasPlaceholder ng-dirty ng-valid-parse ng-valid ng-valid-required ng-touched");
                        $(".header-login-form.forgot-form button").attr("type", "button");
                        $(".header-login-form.forgot-form button").attr("class", "btn btn-primary pull-left");
                        $(".header-login-form.forgot-form button").attr("ng-click", "forgot1()");
                        $(".hidden-xs").click(function () {
                            $(".header-login-form.forgot-form").hide();
                        });
                    }, function (reason) {
                        console.log(reason);
                    });
                },
            };
        });