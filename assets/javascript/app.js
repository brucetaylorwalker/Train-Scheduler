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

var database = firebase.database();

var trainName = "";
var destination = "";
var firstTrain = "";
var freq = 0;

$("#addTrain").on("click", function (event) {
    event.preventDefault();

    //train input

    trainName = $("#trainName").val().trim();
    destination = $("#destination").val().trim();
    firstTrain = $("#firstTrain").val().trim();
    freq = $("#interval").val().trim();


    //code for push

    database.ref().push({
        trainName: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: freq
    });

$("#trainName").val("");
$("#destination").val("");
$("#firstTrain").val("");
$("#interval").val("");
});

// //firebase watcher
database.ref().on("child_added", function (childSnapshot) {

    var newTrain = childSnapshot.val().trainName;
    var newLocation = childSnapshot.val().destination;
    var newFirstTrain = childSnapshot.val().firstTrain;
    var newFreq = childSnapshot.val().frequency;

    //moment
    var startTimeConverted = moment(newFirstTrain, "hh:mm").subtract(1, "years");
    // var currentTime = moment();
    var diffTime = moment().diff(moment(startTimeConverted), "minutes");
    var tRemainder = diffTime % newFreq;
    var tMinutesTillTrain = newFreq - tRemainder;
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    var catchTrain = moment(nextTrain).format("HH:mm");

    //html

    var newRow = $("<tr>").append(
        $("<td>").text(newTrain),
        $("<td>").text(newLocation),
        $("<td>").text(newFreq),
        $("<td>").text(catchTrain),
        $("<td>").text(tMinutesTillTrain)
    )

    $("#train-display").append(newRow);
   
});




    // //console.log



