import { matchUser } from "./store/localstorage.js";
const form = document.getElementById('form');
const username = document.getElementById('username');
const userPassword = document.getElementById('password');
const toggleBtn = document.getElementById('toggle-btn');
export const errorMessage = document.getElementById('error-message');
form.addEventListener('submit', e =>{
    e.preventDefault();
    const result = matchUser(username.value, userPassword.value);
    if(result){
        window.location.href = "user.html";
    } else {
        errorMessage.style.display = 'block';
    }
});
const passwordVisibility = [
    {passwordType: 'text', 
        visibility: 'Hide'
    },
    {
        passwordType: 'password',
        visibility: 'Show'
    }
];
toggleBtn.addEventListener('click', ()=> {
    if(userPassword.type === passwordVisibility[0].passwordType){
        userPassword.type = passwordVisibility[1].passwordType;
        toggleBtn.textContent = passwordVisibility[1].visibility;
    } else {
        userPassword.type = passwordVisibility[0].passwordType;
        toggleBtn.textContent = passwordVisibility[0].visibility;
    }
});