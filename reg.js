const name = document.getElementById('name');
const email = document.getElementById('email');
const Password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');

function clickHandler() {

    let user = {
        name: name.value,
        email: email.value,
        password: Password.value,
        confirmPassword: confirmPassword.value
    };

    console.log(user);

    if (user.password === user.confirmPassword) {

        const div = document.createElement('div');

        const h1 = document.createElement('h1');
        h1.innerText = user.name;

        const h2 = document.createElement('h2');
        h2.innerText = user.email;

        div.appendChild(h1);
        div.appendChild(h2);

        document.body.appendChild(div);

    } else {
        console.log("Passwords do not match");
    }
}