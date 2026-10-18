import { getUser } from './store/localstorage.js'
import { saveUser } from './store/localstorage.js';
const form = document.getElementById('form')
export const newUser = document.getElementById('username');
export const newPassword = document.getElementById('password');
const toggleBtn = document.getElementById('toggle-btn');
const confirmPassword = document.getElementById('confirm-password');
const errorMessage = document.getElementById('error-msg');
const popupMsg = document.getElementById('popup-container');

// Signup
form.addEventListener('submit', e => {
    e.preventDefault();

    if (confirmPassword.value !== newPassword.value) {
        errorMessage.style.display = 'flex';
        return;
    } else {
        getUser.push({
            username: newUser.value.trim(),
            password: newPassword.value.trim()
        }); 

        saveUser(getUser);
        
    }
    popupMsg.style.display = 'flex';
});

// Toggle Button
   const passwordVisibility = [
        {
            passwordType: 'text',
            visibility: 'Hide'
        },
        {
            passwordType: 'password',
            visibility: 'Show'
        }
    ];
    toggleBtn.addEventListener('click', () => {
        if (newPassword.type === passwordVisibility[0].passwordType) {
            newPassword.type = passwordVisibility[1].passwordType;
            toggleBtn.textContent = passwordVisibility[1].visibility;
        } else {
            newPassword.type = passwordVisibility[0].passwordType;
            toggleBtn.textContent = passwordVisibility[0].visibility;
        }
    });







