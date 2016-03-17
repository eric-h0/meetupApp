//Hides eventDiv, show after submit button is pressed and populate with information. Line 10.
$("#eventDiv").hide();
$("#inputSection").hide();

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

  //Going to have to put this on every page and customize it. 
  $("#backButton").click(function(){
    $("#eventDiv").hide();
    $("#welcomeCenter").hide();
    $("#inputSection").show();
  });
});

$("#eventJoin").click(function(){
  $("#eventDiv").hide();
    //Back button functionality. Have to find a way to make this universal.
    $("#backButton").click(function(){
      $("#welcomeCenter").hide();
      $("#inputSection").hide();
      $("#eventDiv").show();
    });
});