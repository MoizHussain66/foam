let signup = document.querySelector('.sign_up');
let signin = document.querySelector('.sign_in');
let Namefield = document.querySelector('.namefield');
let Title = document.querySelector('.title');
let btndisable = document.querySelector('.disable');
let btnenable = document.querySelector('.enable');
let underline = document.querySelector('.underline');
let textchange = document.querySelector(".text_change");
let username = document.getElementById("username")
let useremail = document.getElementById("useremail")
let userpassward = document.getElementById("userpassward");
let container = document.getElementsByClassName("container")[0];
let checksignin = 0;

signin.addEventListener('click', () => {
    Namefield.style.maxHeight = "0";
    Title.innerHTML = `<h1>SIGN IN</h1>`;
    signup.classList.add('disable');
    signin.classList.remove('disable');
    underline.style.transform = "translateX(40px)";
    textchange.innerHTML = "Loss Passward";
    if (checksignin == 0) {
        checksignin = 1;
    } else {

        if (useremail.value && userpassward.value) {
            console.log(`
            your Email Address: ${useremail.value}
            Your Password: ${userpassward.value}`);
            let div = document.createElement('div');
            div.classList.add("popupshow");
            container.appendChild(div);
            div.innerHTML = `
            <img src="./like button.png" alt="hello">
            <h3>Saved Successful</h3>
            `
            setTimeout(() => {
                div.style.display = "none"
            }, 2000);
        } else {
            let div = document.createElement('div');
            div.classList.add("popupshow");
            container.appendChild(div);
            div.innerHTML = `
        <img src="./exclamation.png" alt="hello">
        <h4>Please Enter your Information</h4>
         `
            setTimeout(() => {
                div.style.display = "none"
            }, 2000);

        }
    }
});
// let checksignup = 0;
signup.addEventListener('click', () => {
    Namefield.style.maxHeight = "60px";
    Title.innerHTML = `<h1>SIGN UP</h1>`;
    signup.classList.remove('disable');
    signin.classList.add('disable');
    underline.style.transform = "translateX(0)";
    textchange.innerHTML = "Password Suggestion";

    if (username.value && useremail.value && userpassward.value) {
        console.log(`
            your Name: ${username.value}
            your Email Address: ${useremail.value}
            Your Password: ${userpassward.value}`
        );
        let div = document.createElement('div');
        div.classList.add("popupshow");
        container.appendChild(div);
        div.innerHTML = `
        <img src="./like button.png" alt="hello">
        <h3>Saved Successful</h3>
         `
        setTimeout(() => {
            div.style.display = "none"
        }, 2000);
    } else {
        let div = document.createElement('div');
        div.classList.add("popupshow");
        container.appendChild(div);
        div.innerHTML = `
        <img src="./exclamation.png" alt="hello">
        <h4>Please Enter your Information</h4>
         `
        setTimeout(() => {
            div.style.display = "none"
        }, 2000);

    }

});



