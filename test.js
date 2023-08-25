let heart = document.getElementById("heart")
let message = document.getElementById("message")

const messageElement = document.getElementById("message");
const inputArea = document.getElementById("inputArea");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");

function heartFunction(){
    let heartSpan = document.getElementById("heart--span")
    let currentValue = parseInt(heartSpan.textContent)

        if (heart.style.color === "red") {
            heart.style.color = "black";
            currentValue = currentValue - 1;
          } else {
            heart.style.color = "red";
            currentValue = currentValue + 1;
        }
    heartSpan.textContent = currentValue
}

messageElement.addEventListener("click", () => {
  inputArea.style.display = inputArea.style.display === "none" ? "block" : "none";
});

sendButton.addEventListener("click", () => {
  let messageCount = document.getElementById("message--span")
  let currentMessageCount = parseInt(messageCount.textContent)
  const message = messageInput.value;
  if (message.trim() !== "") {
    alert("Message sent: " + message);

    inputArea.style.display = "none";
    messageInput.value = "";
    currentMessageCount = currentMessageCount + 1;
  } else {
    alert("Please enter a message.");
    currentMessageCount = currentMessageCount
  }
  messageCount.textContent = currentMessageCount
});


heart.addEventListener('click', heartFunction)
