// Sample Input 1
// 135

// Sample Output 1
// 2hrs 15mins

let minutes = 135;

HumanReadableTime(minutes);

function HumanReadableTime(minutes) {
  var hrs = Math.floor(minutes / 60);
  var min = minutes - 60 * hrs;
  if (min == 0) {
    min = "00";
  }
  if (hrs > 1) {
    console.log(hrs + "hrs" + " " + min + "mins");
  } else {
    console.log(hrs + "hr" + " " + min + "mins");
  }
}
