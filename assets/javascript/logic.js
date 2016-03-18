//Hides Divs
$("#eventDiv").hide();
$("#inputSection").hide();

//Makes the RU Going? title a home button.
$("#homeButton").click(function(){
  $("#welcomeCenter").show();
  $("#eventDiv").hide();
  $("#inputSection").hide();
});

//Find a Hangout! button click.
$("#findButton").click(function(){
  $("#inputSection").show();
  $("#welcomeCenter").hide();
    $("#backButton").click(function(){
      $("#inputSection").hide();
      $("#welcomeCenter").show();
    });
});

//Create Your Own! button click.
$("#createButton").click(function(){
  //Insert create inputs.
});

//Click function for Let's Go Button.
$("#goButton").click(function() {
  console.log(this);

  //Clicking the button hides the input boxes and buttons, it'll show the event divs that will be dynamically created based on input.
  $("#inputSection").hide();
  //Shows eventDiv after submit is pressed.
  $("#eventDiv").show();
  //Find a way for specific content to show up based on inputs selected from the dropdown menu.
  //eventDiv = #eventheader / #eventCreator / #eventTime / #eventJoin button.

  $("#backButton").click(function(){
    $("#eventDiv").hide();
    $("#welcomeCenter").hide();
    $("#inputSection").show();
  });

  $("#forwardButton").click(function(){
    $("#eventDiv").show();
    $("#inputSection").hide();
  });
});

//Click function for join!
$("#eventJoin").click(function(){
  $("#eventDiv").hide();
    //Back button functionality. Have to find a way to make this universal.
    $("#backButton").click(function(){
      $("#welcomeCenter").hide();
      $("#inputSection").hide();
      $("#eventDiv").show();
    });
});