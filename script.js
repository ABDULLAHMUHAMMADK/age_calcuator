function age() {
  let dy = document.getElementById("day").value;
  let mn = document.getElementById("month").value;
  let yr = document.getElementById("year").value;
  let rs = document.getElementById("out");
  let x = new Date("11-26-2000");
  let y = new Date();
  let z = y - x;
  let as=Math.floor(z / (1000 * 60 * 60 * 24 * 365))
  if (dy > 31 || mn > 12) {
    rs.value = "Enter proper date";
  } else if (dy === "" || mn === "" || yr === "") {
    rs.value = "enter complete date";
  } else {
    rs.value = `Your age is: ${as}` ;
  }
}
function clr() {
  let rs = document.getElementById("out").value='';
}
