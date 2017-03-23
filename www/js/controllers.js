angular.module('starter.controllers', [])
    .controller('signinCtrl', function($scope, myTools, $state) {
        $scope.user = { username: '13212780816', password: '123' };
        //登录界面，输入手机号  运用正则表达式
        $scope.checkUsername = function() {
            //输入正确，调到下一步
            //验证手机号是否合法
            if (/^1[3-9]\d{9}$/.test($scope.user.username)) {
                return true;
            } else {
                //输入错误，弹出警告框  在service 层封装
                myTools.alertError('请输入正确的手机号');
                return false;
            }
        };

        $scope.login = function() {
            //如果用户名正确，且密码不为空，则可以成功登录
            if ($scope.checkUsername() && $scope.user.password != "") {
                // firebase.database().ref('users/' + $scope.user.username).on('value', function(rtn) {
                //     var serverUser = rtn.val();
                //     if (serverUser && serverUser.password == $scope.user.password) {
                $state.go('home.index');
                //     } else {
                //         // myTools.alertError('用户名不存在，请先注册！');
                //         $state.go('signup');
                //     }
                // })
            } else {
                //验证手机号和密码是否合法，如果合法则可以成功登录
                $scope.checkUsername() ? "" : myTools.alertError('用户名不合法');
                $scope.user.password ? "" : myTools.alertError('请输入密码');
            }
        }
    })
    .controller('signupCtrl', function($scope, myTools, $state) {
        $scope.user = { username: '13212780816', password: '123', nickname: '123' };
        $scope.checkUsername = function() {
            if (/^1[3-9]\d{9}$/.test($scope.user.username)) {
                return true;
            } else {
                myTools.alertError('请输入正确的手机号');
                return false;
            }
        };
        $scope.signup = function() {
            if ($scope.checkUsername() && $scope.user.password != "" && $scope.user.nickname != "") {
                myTools.alertError('注册成功！');
                firebase.database().ref('users/' + $scope.user.username).on('value', function(snapshot) {
                    if (!snapshot.val()) {
                        firebase.database().ref('users/' + $scope.user.username).set($scope.user);
                    }

                });
                // $state.go('signin');
            } else if ($scope.user.password == "") {
                myTools.alertError('请输入密码！');
            } else if ($scope.user.nickname == "") {
                myTools.alertError('请输入昵称！');
            } else {
                myTools.alertError('用户名不合法!');
            }
        }
    })
    .controller('forgotPasswordCtrl', function($scope, myTools, $state) {
        $scope.user = { username: '', password: '', newPassword: '' };
        $scope.checkUsername = function() {
            if (/^1[3-9]\d{9}$/.test($scope.user.username)) {
                return true;
            } else {
                myTools.alertError('请输入正确的手机号');
                return false;
            }
        };
        $scope.forgotPassword = function() {
            if ($scope.checkUsername() && $scope.user.password != "" && $scope.user.newPassword != "" && $scope.user.password == $scope.user.newPassword) {
                myTools.alertError('修改成功！');
                $state.go('signin');
            } else if ($scope.user.password == "") {
                myTools.alertError('密码不能为空！');
            } else if ($scope.user.newPassword == "") {
                myTools.alertError('请再次确认密码！');
            } else if ($scope.user.username == $scope.user.newPassword) {
                myTools.alertError('密码重置成功！');
            } else {
                myTools.alertError('密码不一致，请再次输入！');
            }
        }
    })
    .controller('homeCtrl', function($scope, $ionicActionSheet) {
        console.log('欢迎来到home界面！');
        $scope.avatar = "../img/t013bc6eb38a4adc35f.jpg";
        $scope.isEdit = false;
        $scope.nickname = "董小姐";
        $scope.checkNickname = function() {
            console.log('修改名称')
        }
        $scope.modifyAvatar = function(fileInput) {
            var file = fileInput.files[0];
            var reader = new FileReader();
            reader.onload = function(event) {
                var base64 = event.target.result;
                $scope.$apply(function() {
                    $scope.avatar = base64;
                })
            }
            reader.readAsDataURL(file);
        }
        $scope.showActionSheet = function() {

            // 显示操作表
            $ionicActionSheet.show({
                buttons: [
                    { text: '<b>从手机相册选择</b>' },
                    { text: '<b>从空间相册选择</b>' },
                ],
                destructiveText: '拍一张',
                titleText: '更换封面',
                cancelText: '取消',
                buttonClicked: function(index) {
                    switch (index) {
                        case 0:
                            document.querySelector('#chooseImg').click();
                    }
                    return true;
                }
            });

        };
    })
    .controller('indexCtrl', function($scope, $ionicSlideBoxDelegate) {
        console.log('ddfd');
        $scope.myVar = false;
        $scope.toggle = function() {
            $scope.myVar = !$scope.myVar;
        }
        $scope.nextSlide = function() {
            $ionicSlideBoxDelegate.next();
        }
    })
    .controller('cake1Ctrl', function($scope, $ionicHistory) {
        $scope.goBack = function() {
            $ionicHistory.goBack();
        }
    })
    .controller('menu1Ctrl', function($scope, $ionicHistory) {
        $scope.goBack = function() {
            $ionicHistory.goBack();
        }
    })
    .controller('banner1Ctrl', function($scope, $ionicHistory) {
        $scope.goBack = function() {
            $ionicHistory.goBack();
        }
    })
    .controller('banner2Ctrl', function($scope, $ionicHistory) {
        $scope.goBack = function() {
            $ionicHistory.goBack();
        }
    })