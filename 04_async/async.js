const button = document.querySelector("button");
const div = document.querySelector("div");

const setText = (text) => {
    div.textContent = text
}

const checkAuth = () => {
    return new Promise((resolve, reject) => {
        setText('Checking Auth...')
        setTimeout(() => {
            resolve(true)
        }, 2000)
    })
}

const fetchUser = () => {
    return new Promise((resolve, reject) => {
        setText('Fetching User...')
        setTimeout(() => {
            resolve({ name: "Max" });
        }, 2000)
    })
}

button.addEventListener("click", async () => {
    const isAuth = await checkAuth()
    let user = null;
    if (isAuth) {
        user = await fetchUser()
    }
    setText(user.name)
});
