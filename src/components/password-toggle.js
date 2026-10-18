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