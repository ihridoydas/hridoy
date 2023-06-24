

$(document).ready(function (){
    $('#download').click(function (){
        $('#container-main').printThis();
    });

    var toggleDarkTheme = document.getElementById("profile-pic")

    toggleDarkTheme.onclick = function () {
        console.log("clicked")
        document.body.classList.toggle("theme-dark")
    }
});