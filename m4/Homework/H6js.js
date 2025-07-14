function validate(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const marks = document.getElementById("marks").value;
    const email = document.getElementById("email").value;
    const college = document.getElementById("college").value;
    const msgbox = document.getElementById("message");

    let message = '';

    if (name === '') {
        message = 'Please enter your name!';
        msgbox.style.color = 'red';
    } else if (age === '') {
        message = 'Age must be between 14 to 60!';
        msgbox.style.color = 'red';
    } else if (marks === '') {
        message = 'Enter your correct marks';
        msgbox.style.color ='red';
    } else if (email === '') {
        message = 'Please enter your email properly!';
        msgbox.style.color = 'red';
    } else if (college === '') {
        message = 'Enter the name of college!';
        msgbox.style.color = 'red';
    }
    else {
        message = 'Login Successful!';
        msgbox.style.color = 'green';
    }

    msgbox.innerText = message;
}