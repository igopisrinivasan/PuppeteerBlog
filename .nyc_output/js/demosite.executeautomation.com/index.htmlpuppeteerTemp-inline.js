
  function JScriptAlert() {
    var x;
    if (confirm("You generated a Javascript alert") == true) {
        alert("You pressed OK!");
    } else {
        alert("You pressed Cancel!");
    }
    document.getElementById("demo").innerHTML = x;
}
