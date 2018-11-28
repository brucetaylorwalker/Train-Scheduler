//doc ready func

//init firebase
var config = {
    apiKey: "AIzaSyC7WNbavqnzDHGIVCYsbxR-slAxVYB8soE",
    authDomain: "train-scheduler-634f2.firebaseapp.com",
    databaseURL: "https://train-scheduler-634f2.firebaseio.com",
    projectId: "train-scheduler-634f2",
    storageBucket: "train-scheduler-634f2.appspot.com",
    messagingSenderId: "67768613740"
  };
  firebase.initializeApp(config);

$("#addTrain").on("click", function (event) {
    event.preventDefault();

    //train input

    var trainName = $("#trainName").val().trim();
    var destination = $("#destination").val().trim();
    var firstTrain = $("#firstTrain").val().trim();
    var freq = $("#interval").val().trim();





    //code for push

    database.ref().push({
        trainName: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: freq
    };

    // //firebase watcher
    database.ref().on("child_added", function (childSnapshot))
    // //console.log


})