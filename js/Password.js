function passwordVisibility() {
    var x = document.getElementById("thePassword");
    var z = document.getElementById("password-visibility");
    if (x.type === "password") {
        x.type = "text";
        z.innerHTML = "visibility_off";
    } else {
        x.type = "password";
        z.innerHTML = "visibility";
    }
}