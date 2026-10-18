import { saveAdmin } from './store/localstorage.js';
import { getAdmin } from './store/localstorage.js';

const form = document.getElementById('form');
const adminName = document.getElementById('username');
const adminPassword = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const toggleBtn = document.getElementById('toggle-btn')
const errorMessage = document.getElementById('error-msg');

form.addEventListener('submit', e => {
    e.preventDefault();

    function saveAccount(){
        if(confirmPassword.value !== adminPassword.value){
            errorMessage.style.display = 'flex';
        } else {
            getAdmin.push({
            username: adminName.value,
            password: adminPassword.value
        })
        saveAdmin(getAdmin);
        errorMessage.style.display = 'none';
        }
    }
    saveAccount();
})
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
    if(adminPassword.type === passwordVisibility[0].passwordType){
        adminPassword.type = passwordVisibility[1].passwordType;
        toggleBtn.textContent = passwordVisibility[1].visibility;
    } else {
        adminPassword.type = passwordVisibility[0].passwordType;
        toggleBtn.textContent = passwordVisibility[0].visibility;
    }
});