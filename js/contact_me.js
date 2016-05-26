$(function() {

  $("input,textarea,select").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var name1 = $("input#name1").val();
      var name2 = $("input#name2").val();
      var email = $("input#email").val();
      var phone = $("input#phone").val();
      var orientationDate = $("select#orientationDate").val();
      var dayArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      var day = dayArray[orientationDate.charAt(0)];
      var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var month;
      if (orientationDate.charAt(2) < 1) {
        month = monthArray[orientationDate.charAt(3) - 1];
      } else {
        month = monthArray[orientationDate.charAt(2) + orientationDate.charAt(3) - 1];
      }
      var date;
      if(orientationDate.charAt(4) < 1) {
        date = orientationDate.charAt(5);
      } else {
        date = orientationDate.charAt(4) + orientationDate.charAt(5);
      }
      if (date == 1 || date == 21 || date == 31) {
        date = date + "st"
      } else if (date == 2 || date == 22) {
        date = date + "nd"
      } else if (date == 3 || date == 23) {
        date = date + "rd"
      } else {
        date = date + "th"
      }
      var lowerMilitary = orientationDate.charAt(9) + orientationDate.charAt(10) + orientationDate.charAt(11) + orientationDate.charAt(12);
      var upperMilitary = orientationDate.charAt(14) + orientationDate.charAt(15) + orientationDate.charAt(16) + orientationDate.charAt(17);
      var lowerHour = lowerMilitary.charAt(0) + lowerMilitary.charAt(1);
      var upperHour = upperMilitary.charAt(0) + upperMilitary.charAt(1);
      var lowerMinutes = lowerMilitary.charAt(2) + lowerMilitary.charAt(3);
      var upperMinutes = upperMilitary.charAt(2) + upperMilitary.charAt(3);
      var lowerAmPm;
      var upperAmPm;
      if (lowerHour.charAt(0) === 0) {
        lowerHour = lowerHour.charAt(1)
      };
      if (upperHour.charAt(0) === 0) {
        upperHour = upperHour.charAt(1)
      };
      if(lowerHour >= 12) {
        lowerAmPm = "PM";
      } else {
        lowerAmPm = "AM";
      };
      if(upperHour >= 12) {
        upperAmPm = "PM";
      } else {
        upperAmPm = "AM";
      };
      if (lowerHour > 12) {
        lowerHour = lowerHour - 12;
      };
      if (upperHour > 12) {
        upperHour = upperHour - 12;
      };
      var lowerSlot = lowerHour + ":" + lowerMinutes + " " + lowerAmPm;
      var upperSlot = upperHour + ":" + upperMinutes + " " + upperAmPm;
      var locationArray = ["JobTrain", "Sequoia Adult School"];
      var location = locationArray[orientationDate.charAt(19)];
      var heardAbout = $("textarea#heardAbout").val();
      var message = $("textarea#message").val();
      // I'll just leave this here :3 alert(day + ", " + month + " " + date + ", " + lowerSlot + " - " upperSlot + " @ " + location);
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }
      $.ajax({
        url: "././mail/registration.php",
        type: "POST",
        data: {
          name1: name1,
          name2: name2,
          email: email,
          phone: phone,
          day: day,
          month: month,
          date: date,
          lowerSlot,
          upperSlot,
          location: location,
          heardAbout: heardAbout,
          message: message
        },
        cache: false,
        success: function() {
          // Success message
          $('#success').html("<div class='alert alert-success'>");
          $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-success')
            .append("<strong>Your form has been submitted.<br>We have sent a confirmation email to " + email + ".<br>Please allow up to 5 minutes for delivery.</strong>");
          $('#success > .alert-success')
            .append('</div>');

          //clear all fields
          $('#contactForm').trigger("reset");
          $('.success').removeClass('success');
        },
        error: function() {
          // Fail message
          $('#success').html("<div class='alert alert-danger'>");
          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
          $('#success > .alert-danger').append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
          $('.success').removeClass('success');
        },
      })
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});
//Set #orientationDate default value to blank

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#success').html('');
});