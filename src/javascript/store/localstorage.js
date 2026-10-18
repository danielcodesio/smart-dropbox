// Save the user data in localStorage
export function saveUser(users) {
    const user = JSON.stringify(users);
    localStorage.setItem('user', user);
};
// Retrieve the data from localStorage
export const getUser = JSON.parse(localStorage.getItem('user') ?? JSON.stringify([]));


// Validating user input
export function verifyUser(username, password) {
    return getUser.find(user => {
        return user.username === username && user.password === password;
    })
};

export function saveAdmin(adminAcc){
    const admin = JSON.stringify(adminAcc);
    localStorage.setItem('admin', admin);
};
export const getAdmin = JSON.parse(localStorage.getItem('admin') ?? JSON.stringify([]));

export function verifyAdmin(username, password){
    return getAdmin.find(admin => {
        return admin.username === username && admin.password === password;
    });
};