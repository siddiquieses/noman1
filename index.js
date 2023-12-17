function sign() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value
    var confirmpassword = document.getElementById("Confirmpassword").value;
    if (!email) {
        alert("All feild are empty");
    }
    else if (!password) {
        alert('password feild are empty');
    }
    else if (!confirmpassword) {
        alert('password feild are empty');
    }
    else if (confirmpassword != password) {
        alert('confirm password is incorrect');
    }
    else {
        alert('signin sucessfull');
        window.location.href = "https://www.w3schools.com/";
    }
}
function login() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value
    var confirmpassword = document.getElementById("confirmPassword1").value;
    if (!email) {
        alert("All feild are empty");
    }
    else if (!password) {
        alert('password feild are empty');
    }
    else if (!confirmpassword) {
        alert('password feild are empty');
    }
    else if (confirmpassword != password) {
        alert('confirm password is incorrect');
    }
    else {
        alert('loginin sucessfull');
        window.location.href = "https://www.w3schools.com/";
    }
}
