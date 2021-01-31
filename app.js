let icons = document.getElementById("toogle");
let share = document.getElementById("share");
share.addEventListener("mouseover", function(e) {

    icons.classList.remove("toogle");

    setTimeout(function() {
        icons.classList.add("toogle");
    }, 2000)

})