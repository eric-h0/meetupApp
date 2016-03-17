//Hides eventDiv, show after submit button is pressed and populate with information. Line 10.
$("#eventDiv").hide();

//Click function for Let's Go Button.
$("#goButton").click(function() {
  console.log(this);

  //Clicking the button hides the input boxes and buttons, it'll show the event divs that will be dynamically created based on input.
  $("#inputSection").hide();

  //Shows eventDiv after submit is pressed.
  $("#eventDiv").show();
  //Find a way for specific content to show up based on inputs selected from the dropdown menu.
});

$("#eventJoin").click(function(){
  $("#eventDiv").hide();
});