export function saveUser(users) {
    const user = JSON.stringify(users);
    localStorage.setItem('user', user);
};
export const getUser = JSON.parse(localStorage.getItem('user') ?? JSON.stringify([]));

export function matchUser(username, password) {
    return getUser.find(user => {
        return user.username === username && user.password === password;
    })
};

// getUser.find(user => {
//         if (user.username === username && user.password === password) {
//             window.location.href = "user.html";
//         }
//     });

