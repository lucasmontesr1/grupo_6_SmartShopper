var form;
var errors = [];
var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
var passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

window.addEventListener("load", function () {
    console.log('Window event listener')
    form = document.getElementById('form');
    form.addEventListener('submit', function (event) {
        registerValidations(event)
    });
})

function registerValidations(event) {
    let {
        email,
        password
    } = form.elements;

    if (email.value == '') {
        errors.push("The field can't be empty");
        email.classList.add('is-invalid');
    } else {
        email.classList.add('is-valid')
    }
    if (!emailRegEx.test(email.value)) {
        errors.push('Invalid Email');
        email.classList.add('is-invalid');
    } else {
        email.classList.add('is-valid')
    }

    if (password.value == '') {
        errors.push("Password can't be empty");
        password.classList.add('is-invalid');
    } else {
        email.classList.add('is-valid');
    }

    console.log('Validations finished');
    console.log(errors);

    if (errors.length > 0) {
        event.preventDefault()
    }
}