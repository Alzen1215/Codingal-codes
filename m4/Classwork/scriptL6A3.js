function validate(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const msgbox = document.getElementById("message");

    let message= '';

    if (email === '') {
        message = 'Please enter an email.';
        msgbox.style.color = 'red';
    } else if (pass === '') {
        message = 'Password must be at least 8 characters';
        msgbox.style.color = 'red';
    } else if (age === '') {
        message = 'Age must be between 12 to 55';
        msgbox.style.color = 'red';
    }
    else {
        message = 'Login successful!';
        msgbox.style.color = 'green';
    }

    msgbox.innerText = message;
}
