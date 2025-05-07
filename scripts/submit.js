// Submit
function submitEntries() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let contact1 = document.getElementById("contact1");

    if (!name, !email, !message) { window.alert("All form fields must be filled out. Please try again.") }
    else { contact1.setAttribute("type", "submit"); { window.alert("Your message has been sent. Thank you!"); }
    }
}
