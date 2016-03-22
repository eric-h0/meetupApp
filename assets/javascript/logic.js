//Hides Divs
$("#createSection").hide();
$("#eventDiv").hide();
$("#findSection").hide();
$("#createEventForm").hide();

//Makes the RU Going? title a home button.
$("#homeButton").click(function(){
  $("#welcomeCenter").show();
  $("#eventDiv").hide();
  $("#findSection").hide();
  $("#createEventForm").hide();
});

//Find a Hangout! button click.
$("#findButton").click(function(){
  $("#findSection").show();
  $("#welcomeCenter").hide();
    $("#backButton").click(function(){
      $("#findSection").hide();
      $("#welcomeCenter").show();
      $("#eventDiv").hide();
    });
});

//Create a Hangout! button click.
$("#createButton").click(function(){
  $("#createEventForm").show();
  $("#welcomeCenter").hide();
})

//Find event button on modal.
$("#findEvent").click(function(){
  $("#eventDiv").show();
  $("#findSection").modal('hide');
})

//Add event button on modal.
$("#addEvent").click(function(){
  $("#eventDiv").show();
  $("#createSection").modal('hide');
})

//Close Button function.
$(".close").click(function(){
  $("#findSection").hide();
  $("#createSection").hide();
  $("#welcomeCenter").show();
})

// //Create a Hangout! button click.
// $("#createButton").click(function(){
//   $("#createSection").show();
//   $("#welcomeCenter").hide();
//     $("#backButton").click(function(){
//       $("#createSection").hide();
//       $("#welcomeCenter").show();
//       $("#eventDiv").hide();
//     });
// }); yep

//Create Your Own! button click.
$("#createButton").click(function(){
  //Insert create inputs.
});

//Click function for Let's Go Button.
$("#goButton").click(function() {
  console.log(this);

  //Clicking the button hides the input boxes and buttons, it'll show the event divs that will be dynamically created based on input.
  $("#findSection").hide();
  //Shows eventDiv after submit is pressed.
  $("#eventDiv").show();
  //Find a way for specific content to show up based on inputs selected from the dropdown menu.
  //eventDiv = #eventheader / #eventCreator / #eventTime / #eventJoin button.

  $("#backButton").click(function(){
    $("#eventDiv").hide();
    $("#welcomeCenter").hide();
    $("#findSection").show();
  });

  $("#forwardButton").click(function(){
    $("#eventDiv").show();
    $("#findSection").hide();
  });
});

//Click function for join!
$("#eventJoin").click(function(){
  $("#eventDiv").hide();
    //Back button functionality. Have to find a way to make this universal.
    $("#backButton").click(function(){
      $("#welcomeCenter").hide();
      $("#findSection").hide();
      $("#eventDiv").show();
    });
});

//Aaron's awesome weather section
var queryURL = "https://api.wunderground.com/api/c594801c0edbc586/conditions/q/NJ/New_Brunswick.json";

$.ajax({url: queryURL, method: 'GET'})
.done(function(response){

var city    = response.current_observation.display_location.city;
var weather = response.current_observation.weather;
var iconURL = response.current_observation.icon_url;
var temp    = response.current_observation.temp_f;

//append that shit to a div
// $("#weather").append(city + "<br>");
// $("#weather").append(weather + "<br>");
$("#weather").append("<img src='"+iconURL+"'>");
$("#weather").append(temp + "&#8457"+ "<br>");
});

//Leslie's awesome chat section
  var messagesRef  = new Firebase('https://ninthmysterychat.firebaseio.com/');
  var messageField = $('#messageInput');
  var nameField    = $('#nameInput');
  var messageList  = $('#messages');
  
  messageField.keypress(function (e) {
    if (e.keyCode == 13) {
      //FIELD VALUES
      var username = nameField.val().trim();
      var message  = messageField.val().trim();

      //SAVE DATA TO FIREBASE AND EMPTY FIELD
      messagesRef.push({name:username, text:message});
      messageField.val(name);
    } 
   
  });

  messagesRef.limitToLast(10).on('child_added', function (snapshot) {
    //GET DATA
    var data           = snapshot.val();
    var username       = data.name || "anonymous";
    var message        = data.text;
    var messageElement = $("<li>");
    var nameElement    = $("<b class='chat-username'></b>")
    nameElement.text(username);
    messageElement.text(message).prepend(nameElement);

    //ADD MESSAGE
    messageList.append(messageElement)

    //messageList[0].scrollTop = messageList[0].scrollHeight;

  });

 //=========START MARIAH'S PREVIOUS JAVASCRIPT ====== 

// $( document ).ready(function() {
//   var url ='https://rcb-mm-app.firebaseio.com/';
//   // Firebase link
//   var dataRef = new Firebase("rcb-mm-app.firebaseio.com/");
//   // Initial Values
//   var eventName = "";
//   var eventDate = "";
//   var eventTime = 0;
//   var eventDescription = "";
//   var category = "";
//   var location = "";  

//   $('#addEvent').on('click', function (){
//   // alert('hi');

//   // Grabbed values from text boxes
//   eventName = $('.eventName').val().trim();
//   eventDate = $('.eventDate').val().trim();
//   eventTime = $('.eventTime').val().trim();
//   eventDescription = $('.eventDescription').val().trim()
//   category = $('.eventCat').val().trim()
//   location = $('.eventLocation').val().trim();
//   // Code for handling the push

//   dataRef.push({
//     eventName: eventName,
//     eventDate: eventDate,
//     eventTime: eventTime,
//     eventDescription: eventDescription,
//     category: category,
//     location: location
//   })
//   // Don't refresh the page!


//   //clear form data

//   $('.eventName').val("");
//   $('.eventDate').val("");
//   $('.eventTime').val("");
//   $('.eventDescription').val("");
//   $('.category').val("");
//   $('.location').val("");

//   $('#myModal').dialog('close');

//   return false;


//   }); //end click Add Event


// dataRef.on("child_added", function(childSnapshot) {
//   // Log everything that's coming out of snapshot
//   console.log(childSnapshot.val().eventName);
//   console.log(childSnapshot.val().eventDate);
//   console.log(childSnapshot.val().eventTime);
//   console.log(childSnapshot.val().eventDescription);
//   console.log(childSnapshot.val().category);
//   console.log(childSnapshot.val().location)
  
//   // full list of items to the well
    
//     // var newEntry = $('<div>');


//   // $('#testdiv').append("<div class='well'><span id='eventName'>
//   // "+childSnapshot.val().eventName+" </span><span id='eventDate'>
//   // "+childSnapshot.val().eventDate+" </span><span id='eventTime'>
//   // "+childSnapshot.val().eventTime+" </span><span id='eventDescription'>
//   // "+childSnapshot.val().eventDescription+" </span></div>");

//     // $('#testdiv').append(newEntry);

//   $('#testdiv').append("<div class='well'><span id='eventName'> "+childSnapshot.val().eventName+" </span><span id='eventDate'> "+childSnapshot.val().eventDate+" </span><span id='eventTime'> "+childSnapshot.val().eventTime+" </span><span id='eventDescription'> "+childSnapshot.val().eventDescription+" <span id='category'> "+childSnapshot.val().category+" <span id='location'> "+childSnapshot.val().location+"</span></div>")

// // Handle the errors
// }, function(errorObject){
//   //console.log("Errors handled: " + errorObject.code)
// });

// dataRef.orderByChild("dateAdded").on("child_added", function(snapshot){
//   // Change the HTML to reflect
//   $("#namedisplay").html(snapshot.val().name);
//   $("#emaildisplay").html(snapshot.val().email);
//   $("#agedisplay").html(snapshot.val().age);
//   $("#commentdisplay").html(snapshot.val().comment);
// })


// }); //end doc on ready

 
// $('#createEventForm').hide();

//=========END MARIAH'S PREVIOUS JAVASCRIPT ======

//Aaron's pie chart
      // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table, 
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');
      data.addRows([
        ['College Ave.', 88],
        ['Busch', 32],
        ['Cook/Douglass', 12], 
        ['Livingston', 59]
      ]);

      // Set chart options
      var options = {  width: 400,
                        height: 240,
                        // title: 'Where\'s the action?',
                        colors: ['red', '#2f2f2f', 'grey', 'lightgrey'],
                        is3D: true,
                        backgroundColor: 'black',
                        pieSliceText: 'value',
                        titleTextStyle:{ color: 'white',
                                      fontSize: 20,
                                      bold: false,
                                      italic: false},
                        legend: {position: 'right', textStyle: {color: 'white', fontSize: 12}}
                      };

      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
