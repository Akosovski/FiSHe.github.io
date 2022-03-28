function checkUsername(){
    var username = document.getElementById("form-textbox-name").value;
    var warning = document.getElementById("name-warning");
    if (username.length < 8){
        warning.innerHTML = "Name is too short!";
    }else if (username.length > 20) {
        warning.innerHTML = "Name is too long!";
    }else if(username == ""){
        warning.innerHTML = "Name can't be empty!";
    }else {
        warning.innerHTML = "";
    }
}

function checkEmail(){
    var emailValue = document.getElementById("form-textbox-email").value;
    var warning = document.getElementById("email-warning");
    var value = emailValue.split("@");
    if (value.length <= 1){
        warning.innerHTML = "Incorrect email input!";
    }else {
        warning.innerHTML ="";
    }
    value = value[1].split(".");
    if (value.length <= 1) {
        warning.innerHTML = "Incorrect email input!";
    }else {
        warning.innerHTML ="";
    }
}

function checkArea(){
    var areaValue = document.getElementById("message-area").value;
    var warning = document.getElementById("area-warning");
    if (areaValue.length < 3){
        warning.innerHTML = "Message is too short!";
    }else if(areaValue == ""){
        warning.innerHTML = "Message can't be empty!";
    }else {
        warning.innerHTML = "";
    }
}

function checkRadio(){
    var othersTextbox = document.getElementById("form-textbox-other")
    if (document.getElementById("radio-other").checked){
        othersTextbox.style.display = "block";
    }else {
        othersTextbox.style.display = "none";
    }
}