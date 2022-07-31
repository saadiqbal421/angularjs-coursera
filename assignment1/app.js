var app = angular.module("myapp", []);

app.controller("myctrl", function ($scope) {

  $scope.dishes = "";
  $scope.feedback = "";

  $scope.Check = function () {
  
  
    var array = $scope.dishes.split(",");
    console.log(array);
    console.log("array lenght is :",array.length);
    if (document.getElementById("lunch-menu").value.length == 0){
        console.log("empty")
        $scope.feedback= "Please enter data first"
        let result = $scope.feedback.fontcolor("red");

        result = "<span style='color:red'>" +  $scope.feedback + "</span>";
        document.getElementById("feedback").innerHTML = result;
     
    }else if (array.length<= 3){
        $scope.feedback = "Enjoy";
        let result = $scope.feedback.fontcolor("green");

        result = "<span style='color:green'>" +  $scope.feedback + "</span>";
        document.getElementById("feedback").innerHTML = result;
    }
     else {
   
      $scope.feedback = "Too much!";
      let result = $scope.feedback.fontcolor("green");

      result = "<span style='color:green'>" +  $scope.feedback + "</span>";
      document.getElementById("feedback").innerHTML = result;
    }
  };
});
