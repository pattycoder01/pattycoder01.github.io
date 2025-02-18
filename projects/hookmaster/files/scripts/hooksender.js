const sendButton = document.getElementById("sendMessage");

sendButton.addEventListener('click', async (event) => {
  const messageContent = document.getElementById("messageContent").value;
  const webhookName = document.getElementById("webhookName").value;
  const webhookURL = document.getElementById("webhookURL").value;
  const avatarURL = document.getElementById("avatarURL").value;
  const ttsEnabled = document.getElementById("ttsEnabled").checked;

  const content = {};

  if (!webhookURL) return alert("The URL can't be empty!");
  if (!messageContent) return alert("The message content cant be empty!");

  content.content = messageContent;

  if (webhookName) {
    content.username = webhookName;
  }

  if (avatarURL) {
    content.avatar_url = avatarURL;
  }

  if (ttsEnabled) {
    content.tts = true;
  }

  try {
    const request = await fetch(webhookURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content)
    });
    console.log("message sent successfully");
    document.getElementById("messageContent").value = "";
    document.getElementById("ttsEnabled").checked = false;
  } catch (error) {
    console.warn("error occurred whilst sending message");
    alert("error");
  }
})