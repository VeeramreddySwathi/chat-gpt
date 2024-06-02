const buttons = document.querySelectorAll(".example_query");
const chatInput = document.querySelector(".chat_input");
const sendButton = document.querySelector(".bi-send");

buttons.forEach(button => {
    button.addEventListener("click", event => {
        const targetElement = event.target;
        if (targetElement.classList.contains("example_query")) {
            event.stopPropagation();
            const buttonText = targetElement.textContent.trim();
            chatInput.value = buttonText;
        }
    });
});

sendButton.addEventListener("click", () => {
    const message = chatInput.value.trim();
    if (message) {
        alert("Message sent: " + message);
        chatInput.value = "";
    } else {
        alert("Please enter a message.");
    }
});
