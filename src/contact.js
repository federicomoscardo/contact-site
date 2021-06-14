function validation() {
    var alertON = false;
    if (document.getElementById("name").value == "" || 
    document.getElementById("topic").value == "" ||
    document.getElementById("email").value == "" ||
    document.getElementById("textArea").value == "") {
        alertON = true;        
    }
    if (alertON) {
        document.getElementById("alert").style.display = "block";
        setTimeout(function() {
            document.getElementById("alert").style.display = "none";
        }, 3000);
    }
}