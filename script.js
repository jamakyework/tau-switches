console.log('sourced');

// greet user w/ day specific greeting
var greetMe = function() {
  var dayOfWeek = document.getElementById('dayOfWeek').value;
  console.log('input value is = ', dayOfWeek);

  switch (dayOfWeek) {
    case 'Monday':
      console.log(dayOfWeek + " is the worst day of the week");
      break;
    case 'Tuesday':
      console.log("Taco " + dayOfWeek);
      break;
    case 'Wednesday':
      console.log("Hump Day is "+ dayOfWeek);
      break;
    case 'Saturday':
    // -- fall through --
    case 'Sunday':
      console.log('Happy Weekend!');
      break;
    default:
      console.log("Happy " + dayOfWeek);
  }
};

var tripleEquals = function() {
  var expressionNum = 3;

  switch (expressionNum) {
    case '3':
      console.log('Matched string three');
      break;
    default:
      console.log('Didn\'t match');
    }
};
