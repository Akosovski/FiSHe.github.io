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

function checkGender(){
    var genderMale = document.getElementById("radio-male").value;
    var genderFemale = document.getElementById("radio-female").value;
    var warning = document.getElementById("gender-warning");

    if (genderMale.checked == true || genderFemale.checked == true){
        warning.innerHTML = "";
    }else {
        warning.innerHTML = "Gender must be selected";
    }
}

function checkReason(){
    var requestValue = document.getElementById("radio-request").value;
    var businessValue = document.getElementById("radio-business").value;
    var otherValue = document.getElementById("radio-other").value;
    var warning = document.getElementById("reason-warning");

    if (businessValue.checked == true || requestValue.checked == true || otherValue.checked == true){
        warning.innerHTML = "";
    }else {
        warning.innerHTML = "Reason must be selected";
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