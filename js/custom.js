$(document).ready(function() {
  if ($(window).width() >= 768) {
   $('.page-scroll').removeAttr('data-toggle');
   $('.page-scroll').removeAttr('data-target');
  };
  $('#phone').focus(function() {
    $(this).keydown(function(e) {
      if ($(this).val().length === 3 && $(this).val().charAt(0) != "(" && e.keyCode != 8) {
        var areaCode = $(this).val();
        areaCode = '(' + areaCode + ')' + " ";
        $('#phone').val(areaCode);
      } else if ($(this).val().length === 4 && $(this).val().charAt(0) == "(" && e.keyCode != 8) {
        var areaCode = $(this).val();
        areaCode = areaCode + ") ";
        $('#phone').val(areaCode);
      } else if ($(this).val().substr($(this).val().length - 1) == ")" && e.keyCode != 8) {
        var areaCode = $(this).val();
        areaCode = areaCode + " ";
        $('#phone').val(areaCode);
      }
      if ($(this).val().length === 9 && e.keyCode != 8) {
        var firstSet = $(this).val()
        firstSet = firstSet + "-";
        $('#phone').val(firstSet);
      };
      if (e.keyCode == 32) {
        return false;
      }
    });
  });
  // Lets just make an arrow out of this block for no reason.
  $('html').on('keydown mousedown', function() {
    if ($('#phone').val().length === 10 && $('#phone').val().charAt(0) != '(') {
      var index0 = $('#phone').val().charAt(0);
      var index1 = $('#phone').val().charAt(1);
      var index2 = $('#phone').val().charAt(2);
      var index3 = $('#phone').val().charAt(3);
      var index4 = $('#phone').val().charAt(4);
      var index5 = $('#phone').val().charAt(5);
      var index6 = $('#phone').val().charAt(6);
      var index7 = $('#phone').val().charAt(7);
      var index8 = $('#phone').val().charAt(8);
      var index9 = $('#phone').val().charAt(9);
      var phoneNum = "(" + index0 + index1 + index2 + ")" + " " + index3 + index4 + index5 + "-" + index6 + index7 + index8 + index9;
      $('#phone').val(phoneNum);
    };
  });

  if (!navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
    $('#name1, #name2').on('keydown', function(event) {
      if (this.selectionStart == 0 && event.keyCode >= 65 && event.keyCode <= 90 && !(event.shiftKey) && !(event.ctrlKey) && !(event.metaKey) && !(event.altKey)) {
        var $t = $(this);
        event.preventDefault();
        var char = String.fromCharCode(event.keyCode);
        $t.val(char + $t.val().slice(this.selectionEnd));
        this.setSelectionRange(1, 1);
      };
    });
  };
  $('#email').focus(function() {
    if ($(this).val() < 1) {
      $('#fixed').addClass('fixed');
    };
  });

  $('#email').focus(function() {
    $(this).keyup(function() {
      if ($('#email').val().length < 1) {
        $('#fixed').addClass('fixed');
      } else {
        $('#fixed').removeClass('fixed');
        $('#fixedWarning').removeClass('fixedWarning');
      }
    });
    $('#submitBtn').click(function() {
      if ($('#email').val().length < 1 && $('#emailMatch').val().length < 1) {
        $('#emailMatch').removeClass('fixed');
      };
    });
  });
  // Get current date and time.
  var d = new Date();
  var month = d.getMonth() + 1;
  var day = d.getDate();
  var year = d.getYear();
  var timeOfDay;
  var hour = d.getHours();
  if (d.getHours() < 12) {
    timeOfDay = "AM"
  } else {
    timeOfDay = "PM"
  }
  if (hour > 12) {
    hour = hour - 12;
  }
  var minutes = d.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  };
  // Date and time from #orientationDate options.

  var o1 = $('#o1').val();
  var o2 = $('#o2').val();
  var o3 = $('#o3').val();
  var o4 = $('#o4').val();
  var o5 = $('#o5').val();
  var o6 = $('#o6').val();

  if (year != "1" + o1.charAt(6) + o1.charAt(7)) {
    $('#o1').css('color', '#fa6d81');
    $('#o1').attr('disabled', 'disabled');
  };

  if (year != "1" + o2.charAt(6) + o2.charAt(7)) {
    $('#o2').css('color', '#fa6d81');
    $('#o2').attr('disabled', 'disabled');
  };

  if (year != "1" + o3.charAt(6) + o3.charAt(7)) {
    $('#o3').css('color', '#fa6d81');
    $('#o3').attr('disabled', 'disabled');
  };

  if (year != "1" + o4.charAt(6) + o4.charAt(7)) {
    $('#o4').css('color', '#fa6d81');
    $('#o4').attr('disabled', 'disabled');
  };

  if (year != "1" + o5.charAt(6) + o5.charAt(7)) {
    $('#o5').css('color', '#fa6d81');
    $('#o5').attr('disabled', 'disabled');
  };

  if (year != "1" + o6.charAt(6) + o6.charAt(7)) {
    $('#o6').css('color', '#fa6d81');
    $('#o6').attr('disabled', 'disabled');
  };

  if (o1.charAt(2) == 0) {
    if (month > o1.charAt(3)) {
      $('#o1').css('color', '#fa6d81');
      $('#o1').attr('disabled', 'disabled');
    } else if (month == o1.charAt(3)) {
      if (day > o1.charAt(4) + o1.charAt(5)) {
        $('#o1').css('color', '#fa6d81');
        $('#o1').attr('disabled', 'disabled');
      };
    };
  };
  if (o1.charAt(2) != 0) {
    if (month > o1.charAt(2) + o1.charAt(3)) {
      $('#o1').css('color', '#fa6d81');
      $('#o1').attr('disabled', 'disabled');
    } else if (month == o1.charAt(2) + o1.charAt(3)) {
      if (day > o1.charAt(4) + o1.charAt(5)) {
        $('#o1').css('color', '#fa6d81');
        $('#o1').attr('disabled', 'disabled');
      };
    };
  };
  if (o2.charAt(2) == 0) {
    if (month > o2.charAt(3)) {
      $('#o2').css('color', '#fa6d81');
      $('#o2').attr('disabled', 'disabled');
    } else if (month == o2.charAt(3)) {
      if (day > o2.charAt(4) + o2.charAt(5)) {
        $('#o2').css('color', '#fa6d81');
        $('#o2').attr('disabled', 'disabled');
      };
    };
  };
  if (o2.charAt(2) != 0) {
    if (month > o2.charAt(2) + o2.charAt(3)) {
      $('#o2').css('color', '#fa6d81');
      $('#o2').attr('disabled', 'disabled');
    } else if (month == o2.charAt(2) + o2.charAt(3)) {
      if (day > o2.charAt(4) + o2.charAt(5)) {
        $('#o2').css('color', '#fa6d81');
        $('#o2').attr('disabled', 'disabled');
      };
    };
  };
  if (o3.charAt(2) == 0) {
    if (month > o3.charAt(3)) {
      $('#o3').css('color', '#fa6d81');
      $('#o3').attr('disabled', 'disabled');
    } else if (month == o3.charAt(3)) {
      if (day > o3.charAt(4) + o3.charAt(5)) {
        $('#o3').css('color', '#fa6d81');
        $('#o3').attr('disabled', 'disabled');
      };
    };
  };
  if (o3.charAt(2) != 0) {
    if (month > o3.charAt(2) + o3.charAt(3)) {
      $('#o3').css('color', '#fa6d81');
      $('#o3').attr('disabled', 'disabled');
    } else if (month == o3.charAt(2) + o3.charAt(3)) {
      if (day > o3.charAt(4) + o3.charAt(5)) {
        $('#o3').css('color', '#fa6d81');
        $('#o3').attr('disabled', 'disabled');
      };
    };
  };
  if (o4.charAt(2) == 0) {
    if (month > o4.charAt(3)) {
      $('#o4').css('color', '#fa6d81');
      $('#o4').attr('disabled', 'disabled');
    } else if (month == o4.charAt(3)) {
      if (day > o4.charAt(4) + o4.charAt(5)) {
        $('#o4').css('color', '#fa6d81');
        $('#o4').attr('disabled', 'disabled');
      };
    };
  };
  if (o4.charAt(2) != 0) {
    if (month > o4.charAt(2) + o4.charAt(3)) {
      $('#o4').css('color', '#fa6d81');
      $('#o4').attr('disabled', 'disabled');
    } else if (month == o4.charAt(2) + o4.charAt(3)) {
      if (day > o4.charAt(4) + o4.charAt(5)) {
        $('#o4').css('color', '#fa6d81');
        $('#o4').attr('disabled', 'disabled');
      };
    };
  };
  if (o5.charAt(2) == 0) {
    if (month > o5.charAt(3)) {
      $('#o5').css('color', '#fa6d81');
      $('#o5').attr('disabled', 'disabled');
    } else if (month == o5.charAt(3)) {
      if (day > o5.charAt(4) + o5.charAt(5)) {
        $('#o5').css('color', '#fa6d81');
        $('#o5').attr('disabled', 'disabled');
      };
    };
  };
  if (o5.charAt(2) != 0) {
    if (month > o5.charAt(2) + o5.charAt(3)) {
      $('#o5').css('color', '#fa6d81');
      $('#o5').attr('disabled', 'disabled');
    } else if (month == o5.charAt(2) + o5.charAt(3)) {
      if (day > o5.charAt(4) + o5.charAt(5)) {
        $('#o5').css('color', '#fa6d81');
        $('#o5').attr('disabled', 'disabled');
      };
    };
  };
  if (o6.charAt(2) == 0) {
    if (month > o6.charAt(3)) {
      $('#o6').css('color', '#fa6d81');
      $('#o6').attr('disabled', 'disabled');
    } else if (month == o6.charAt(3)) {
      if (day > o6.charAt(4) + o6.charAt(5)) {
        $('#o6').css('color', '#fa6d81');
        $('#o6').attr('disabled', 'disabled');
      };
    };
  };
  if (o6.charAt(2) != 0) {
    if (month > o6.charAt(2) + o6.charAt(3)) {
      $('#o6').css('color', '#fa6d81');
      $('#o6').attr('disabled', 'disabled');
    } else if (month == o6.charAt(2) + o6.charAt(3)) {
      if (day > o6.charAt(4) + o6.charAt(5)) {
        $('#o6').css('color', '#fa6d81');
        $('#o6').attr('disabled', 'disabled');
      };
    };
  };
});

// Get IE or Edge browser version
var version = detectIE();

if (version === false) {

} else if (version >= 12) {
  
} else {
  window.location = "404/404.html";
}

// add details to debug result
document.getElementById('details').innerHTML = window.navigator.userAgent;

/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
  var ua = window.navigator.userAgent;

  // Test values; Uncomment to check result …

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
  
  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
  
  // Edge 12 (Spartan)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
  
  // Edge 13
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}