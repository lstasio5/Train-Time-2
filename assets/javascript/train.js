//Initialize firebase
var config = {
   apiKey: "AIzaSyBL9AV2Q2EnEpjm4lOge9lUjmmi0NNZPvI",
   authDomain: "traintime3-842d8.firebaseapp.com",
   databaseURL: "https://traintime3-842d8.firebaseio.com",
   projectId: "traintime3-842d8",
   storageBucket: "traintime3-842d8.appspot.com",
   messagingSenderId: "647516214157"
 };

firebase.initializeApp(config);

var database = firebase.database();
var currentTime = moment(currentTime).format("hh:mm")


$( document ).ready(function() {
  var displayDate = function () {
    document.querySelector("#timenow").innerHTML = "Current Time: " + currentTime;
 
  }
  console.log(currentTime);

  displayDate();

});

//To find next train time and minutes away using moment

//Psuedo Code- Having issues with this

// Need to find difference in minutes between current time and next train time
// Need to find the next train arrival time

// Need to display that in the table on the top


//To display next arrival times and minutes away in html
const freq = [45, 60, 74]


// const endTime = moment(startTime, 'HH:mm:ss').add(freq, 'minutes').format('HH:mm');
// const endTime2 = moment(startTime, 'HH:mm:ss').add(freq2, 'minutes').format('HH:mm');
// const endTime3 = moment(startTime, 'HH:mm:ss').add(freq3, 'minutes').format('HH:mm');

// console.log (endTime);
// console.log (endTime2);
// console.log (endTime3);


//initial values

var name = "";
var destination = "";
var firstTime = "";
var frequency = "";

//When a user submits a new train-

$("#submit").on("click", function(event) {
    event.preventDefault();
    // Get the input values
    var name = $("#train-name").val().trim();
    var destination = $("#destination").val().trim();
    var firstTime = $("#firstTime").val().trim();
    var frequency = $("#frequency").val().trim();
  
    // Log the new train data
    console.log(name);
    console.log(destination);
    console.log(firstTime);
    console.log(frequency);


database.ref().push({
   name: name,
   destination: destination,
   firstTime: firstTime,
   frequency: frequency,
   dateAdded: firebase.database.ServerValue.TIMESTAMP
 });

});

// This is correctly populating in FireBase

// Need to work on displaying new train schedule in top table






