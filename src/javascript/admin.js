import { getUser } from './store/localstorage.js'
const boxStatus = document.getElementById('box-status');
const occupancyStatus = document.getElementById('occupance-status');
const totalUser = document.getElementById('total-users');
const packageDescription = document.getElementById('description');
const addNotes = document.getElementById('notes');


function getTotalUser() {
    const result = getUser.length;
    totalUser.textContent = result;
};
getTotalUser();
