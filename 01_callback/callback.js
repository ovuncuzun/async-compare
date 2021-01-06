const button = document.querySelector("button");
const div = document.querySelector("div");

const setText = (text) => {
    div.textContent = text
}

const checkAuth = myCallback => {
    setText('Checking Auth...')
    setTimeout(() => {
        myCallback(true);
    }, 2000);
};

const fetchUser = myCallback => {
    setText('Fetching User...')
    setTimeout(() => {
        myCallback({ name: "Max" });
    }, 2000);
};

button.addEventListener("click", () => {
    checkAuth(auth => {
        if (auth) {
            fetchUser(user => {
                setText(user.name)
            });
        }
    });
});
