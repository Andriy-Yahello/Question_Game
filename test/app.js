var app = angular.module("QuestionApp", []);

app.controller("QuestionCtrl", function ($scope) {

    $scope.Show = function () {
        $scope.answer1 = "Answer 1";
        $scope.answer2 = "Answer 2";
        $scope.answer3 = "Answer 3";
        $scope.answer4 = "Answer 4";
        $scope.answer5 = "Answer 5";

        $scope.star0 = $scope.questions[0].answer;
        $scope.star1 = $scope.questions[1].answer;
        $scope.star2 = $scope.questions[2].answer;
        $scope.star3 = $scope.questions[3].answer;
        $scope.star4 = $scope.questions[4].answer;
    };

    $scope.quest = {
        name: '0'
    };

    $scope.choice = {
        a: 'no',
        b: 'no',
        c: 'no',
        d: 'no',
        e: 'no'
    };

    $scope.options = [{ a1: "Sydney", a2: "Melbourne", a3: "Canberra", a4: "Brisbane" },
       { a1: "1901", a2: "1912", a3: "1930", a4: "1945" },
       { a1: "Pacific Ocean", a2: "Arctic Ocean", a3: "Indian Ocean", a4: "Southern Ocean" },
       { a1: "March 10, 1888", a2: "April 26, 1900", a3: "January 30, 1920", a4: "July 8, 1889" },
       { a1: "Geneva", a2: "Hong Kong", a3: "Singapore", a4: "Shanghai" },
    ];

    $scope.questions = [{ display: "Which city is the capital of Australia?", answer: "Canberra" },
    { display: "When BMW was established?", answer: "1912" },
    { display: "What is the deepest ocean in the world?", answer: "Pacific Ocean" },
    { display: "When The Wall Street Journal was published for the first time?", answer: "July 8, 1889" },
    { display: "Which city is the most expensive city in the world in which to live?", answer: "Hong Kong" }
    ];
});