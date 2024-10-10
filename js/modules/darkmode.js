function initDarkMode() {
    let checkbox = document.querySelector("#darkmode-id")
    if(checkbox.checked === true) {
        document.getElementById("label").style.backgroundColor = "#000"
    }
    else{
        document.getElementById("label").style.backgroundColor = "#fff"
    }
}