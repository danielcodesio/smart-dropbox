import { getUser } from './store/localstorage.js'
const deliveryForm = document.getElementById('delivery-form');
const accountList = document.getElementById('user-accounts');
const recipientName = document.getElementById('recipient');


deliveryForm.addEventListener('submit', e => {
    e.preventDefault();
});
recipientName.addEventListener('input', () => {
    accountList.replaceChildren();
    getUser.forEach(user => {
        if (user.username.includes(recipientName.value)) {
            const option = document.createElement('option');
            accountList.append(option);
            option.value = user.username;
        };
    });
});