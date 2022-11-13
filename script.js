const button = document.querySelector('.button-3')
console.log(button);

button.addEventListener('click', () => {
    check();
})


confirmPassword = document.getElementById('confirm_password');


function check() {
    if (document.getElementById('password').value != document.getElementById('confirm_password').value) {
        document.getElementById('confirm_password').style.backgroundColor = 'red';
    }
}

