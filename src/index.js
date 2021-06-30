const messages = [
    "María",
    "Paula",
    "Lalo",
    "Mauricio",
    "Ana",
    "Diego",
    "Laura",
    "José"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };