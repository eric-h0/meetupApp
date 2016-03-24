$(document).ready(function() {
    var url = 'https://rcb-mm-app.firebaseio.com/';
    // Firebase link
    var dataRef = new Firebase("rcb-mm-app.firebaseio.com/");
    // Initial Values
    var eventName = "";
    var eventDate = "";
    var eventTime = 0;
    var eventDescription = "";
    var category = "";
    var location = "";
    var eventsRef = dataRef.child("events");
    var ref = new Firebase("https://rcb-mm-app.firebaseio.com/events");

    //when click X to remove a post: doesnt quite work yet.
    $(document).on('click', '#remove', function() {
    	$(this).parent().hide();
        // alert('hi');
        // $(this).attr('id') 

		console.log($(this).parent('div').attr('id'));
		
        var target = $(this).parent('div').attr('id');

        ref.on("value", function(snapshot) {
            
        	// var target = .closest("div").attr("id");
             // snapshot.val();

			// var location = $('.eventLocation').val();
       		// var childNode = snapshot.val();
       		// console.log(childNode.eventName);
        // alert('hi');snapshot.val().eventName
			// snapshot.val().remove();
            eventsRef.child(target).remove();
        }); //end first parameter by location





    });


// TEST AREA ^^^^^^^



    //button to add your own event:
    $('#addEvent').on('click', function() {

        //onload, twitter will not show until you enter queries
        $("#twitter").toggle();

        // Grabbed values from text boxes
        eventName = $('.eventName').val().trim();
        eventDate = $('.eventDate').val().trim();
        eventTime = $('.eventTime').val().trim();
        eventDescription = $('.eventDescription').val().trim()
        category = $('.eventCat').val().trim()
        location = $('.eventLocation').val().trim();
        // newEvent = "newEvent";


        //creates an event child and the event name is whatever the user added as the name
        eventsRef.child(eventName).set({
            eventName: eventName,
            eventDate: eventDate,
            eventTime: eventTime,
            eventDescription: eventDescription,
            category: category,
            location: location
        })


        //clear form data
        $('.eventName').val("");
        $('.eventDate').val("");
        $('.eventTime').val("");
        $('.eventDescription').val("");
        $('.category').val("");
        $('.location').val("");


        // TEST AREA TO ADD POST TO DIV AND OTHERS ASSOCIATED: 

        var category = $('.eventCat').val();
        var location = $('.eventLocation').val();
        // searchEvents(location, category);
        // return false;

        // var ref = new Firebase("https://rcb-mm-app.firebaseio.com/events");
        ref.orderByChild("location").equalTo(location).on("child_added", function(snapshot) {
            // console.log(snapshot.key() + " is located: " + snapshot.val().location + " and is in this category: " +snapshot.val().category);

            var catSort = snapshot.val();

            //this will see if the second parameter category is found within the first query's results
            if (catSort.category == category) {
                $('#testdiv').prepend("<div class='well' id='"+ snapshot.key() +"'><div id='remove'>X</div><div id='eventName'>" + "<h4><strong>" + snapshot.val().eventName + "</strong></h4>" + "</div><div id='eventDate'> " + "Date:&nbsp;&nbsp;" + snapshot.val().eventDate + " </div><div id='eventTime'> " + "Time:&nbsp;&nbsp; " + snapshot.val().eventTime + " </div><div id='eventDescription'> " + "About the event:&nbsp;&nbsp;" + snapshot.val().eventDescription + " <div id='category'> " + "Category:&nbsp;&nbsp;" + snapshot.val().category + " </div><div id='location'> " + "Campus:&nbsp;&nbsp;" + snapshot.val().location + "</div></div>");

                console.log(catSort);


                //this will hide the form when a user clicks 'lets go' so that only the results will show up
                $('#inputSection').hide();
            } //end if statement

        }); //end first parameter by location



        // END TEST AREA ===================


        //closes modal --DONT NEED. 
        // $('#myModal').dialog('close');

        // Don't refresh the page!
        return false;

    }); //end click Add Event


    //whenever change made, console logs a snapshot
    eventsRef.on("child_added", function(childSnapshot) {
        // Log everything that's coming out of snapshot
        console.log(childSnapshot.val().eventName);
        console.log(childSnapshot.val().eventDate);
        console.log(childSnapshot.val().eventTime);
        console.log(childSnapshot.val().eventDescription);
        console.log(childSnapshot.val().category);
        console.log(childSnapshot.val().location)


        // Handle the errors
    }, function(errorObject) {
        // console.log("Errors handled: " + errorObject.code);

    }); //end child added function



    //click on find a hangout button to retrieve info based on two parameters of location/category
    $('#findEvent').on('click', function() {

        //displays twitter
        $("#twitter").toggle();

        var category = $('#selectCategory').val();
        var location = $('#selectLocation').val();
        // searchEvents(location, category);
        // return false;

        // var ref = new Firebase("https://rcb-mm-app.firebaseio.com/events");
        ref.orderByChild("location").equalTo(location).on("child_added", function(snapshot) {
            // console.log(snapshot.key() + " is located: " + snapshot.val().location + " and is in this category: " +snapshot.val().category);

            var catSort = snapshot.val();

            //this will see if the second parameter category is found within the first query's results
            if (catSort.category == category) {
                $('#testdiv').append("<div class='well' id='"+ snapshot.key() +"'><div id='remove'>X</div><div id='eventName'>" + "<h4><strong>" + snapshot.val().eventName + "</strong></h4>" + "</div><div id='eventDate'> " + "Date:&nbsp;&nbsp;" + snapshot.val().eventDate + " </div><div id='eventTime'> " + "Time:&nbsp;&nbsp; " + snapshot.val().eventTime + " </div><div id='eventDescription'> " + "About the event:&nbsp;&nbsp;" + snapshot.val().eventDescription + " <div id='category'> " + "Category:&nbsp;&nbsp;" + snapshot.val().category + " </div><div id='location'> " + "Campus:&nbsp;&nbsp;" + snapshot.val().location + "</div></div>");

                console.log(catSort);


                //this will hide the form when a user clicks 'lets go' so that only the results will show up
                $('#inputSection').hide();
            } //end if statement

        }); //end first parameter by location



    }); //end go button on click



}); //end doc on read