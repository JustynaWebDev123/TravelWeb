function activeNav(){
    var nav =document.getElementById("activeNav");
    if (nav.style.display === "block"){
       nav.style.display = "none";
    } else {
    nav.style.display="block" ;
    }
    
    return

    }
    
    var expanded = false;



function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
      checkboxes.style.display = "block";
      expanded = true;
    } else {
      checkboxes.style.display = "none";
      expanded = false;
    }
  }