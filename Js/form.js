const form = document.querySelector('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const createPw = document.getElementById('create_pw');
const confirmPw = document.getElementById('confirm_pw');
const createPwShow = document.querySelector(".createShow")
const confirmPwShow = document.querySelector(".confirmShow")

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInputs();
});

createPwShow.addEventListener("click", () => {
    if((createPw.type === "password")) {
      createPw.type = "text";
      createPwShow.classList.replace("fa-eye-slash","fa-eye");
    }
    else {
      createPw.type = "password";
      createPwShow.classList.replace("fa-eye","fa-eye-slash");
    }
});

confirmPwShow.addEventListener("click", () => {
    if((confirmPw.type === "password")) {
        confirmPw.type = "text";
        confirmPwShow.classList.replace("fa-eye-slash","fa-eye");
    }
    else {
        confirmPw.type = "password";
        confirmPwShow.classList.replace("fa-eye","fa-eye-slash");
    }
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const createPwValue = createPw.value.trim();
    const confirmPwValue = confirmPw.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(createPwValue === '') {
        setError(createPw, 'Password is required');
    } else if (createPwValue.length < 8 ) {
        setError(createPw, 'Password must be at least 8 character.')
    } else {
        setSuccess(createPw);
    }

    if(confirmPwValue === '') {
        setError(confirmPw, 'Please confirm your password');
    } else if (confirmPwValue !== passwordValue) {
        setError(confirmPw, "Passwords doesn't match");
    } else {
        setSuccess(confirmPw);
    }

};
