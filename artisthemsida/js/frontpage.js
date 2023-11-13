/* Toggle between showing and hiding the navigation menu links when 
the user clicks on the hamburger menu / bar icon */
function menuFunction() {
    var x = document.getElementById("menuLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function artistFunction() {
    var x = document.getElementById("artistLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }