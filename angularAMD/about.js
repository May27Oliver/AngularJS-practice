define(['UserRepository'],function(){
    //controller
    return ["$scope","UserRepository",function($scope,UserRepository){//在這裡要跟angular說這支程式要引用Service-UserRepository,angular才會產生依賴注入
        $scope.title = "This is about page";
        $scope.user = UserRepository.getUserByName("Clark");
    }];
})