let flashText = document.querySelector('#flashText');
let passwordtxt = document.querySelector('#passwordtxt');
let confirmtxt = document.querySelector('#confirmtxt');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm-password');
let btn = document.querySelector('#save');
let showBtn = document.querySelector('#show');


password.addEventListener('keyup', active);
confirmPassword.addEventListener('keyup', active_two);
btn.addEventListener('click', testFunc);

function active() {
    if (password.value.length >= 6) {
        btn.classList.remove('disabled');
        btn.removeAttribute('disabled');
        confirmPassword.removeAttribute('disabled');
    }
    else {
        btn.classList.add('disabled');
        btn.setAttribute('disabled', 'disabled');
        confirmPassword.setAttribute('disabled', 'disabled');
    }
}

function active_two() {
    if (confirmPassword.value != "") {
        showBtn.style.display = 'block';
        showBtn.onclick = function () {
            if (password.type == 'password' && confirmPassword.type == 'password') {
                password.type = 'text';
                confirmPassword.type = 'text'
                showBtn.textContent = 'Hide';
            }
            else {
                password.type = 'password';
                confirmPassword.type = 'password';
                showBtn.textContent = 'show';
            }
        }
    }
    else {
        showBtn.style.display = 'none';
    }
}


function testFunc() {
    if (password.value != confirmPassword.value) {
        flashText.innerText = "Oops! confirm password not match";
        flashText.style.color = "#ff4f81";
    }
    else {
        flashText.innerText = "Congress! confirm password  match";
        flashText.style.color = "#00ff00";
    }
}