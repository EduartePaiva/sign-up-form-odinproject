const confirm_password = document.querySelector("#confirm_password");
const password = document.querySelector("#password");
const error_msg = document.querySelector("#error")

confirm_password.addEventListener('change', () => {
    if (confirm_password.value === password.value) {
        confirm_password.classList.remove('error');
        password.classList.remove('error');
        error_msg.style["display"] = "none"
    } else {
        confirm_password.classList.add('error');
        password.classList.add('error');
        error_msg.style["display"] = "block"
    }
})
