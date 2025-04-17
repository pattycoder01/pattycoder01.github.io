const sendButton = document.getElementById("sendButton");

sendButton.addEventListener('click', async () => {
  const messageContent = document.getElementById("messageInput").value;
  const webhookName = document.getElementById("webhookName").value;
  const webhookURL = document.getElementById("webhookURL").value;
  const avatarURL = document.getElementById("avatarURL").value;
  const ttsEnabled = document.getElementById("ttsEnabled").checked;
  const fileInput = document.getElementById("file");

  if (!webhookURL) return alert("Die URL darf nicht leer sein!");
  if (!messageContent && !fileInput.files.length) return alert("Die Nachricht oder Datei darf nicht leer sein!");

  const formData = new FormData();
  formData.append("content", messageContent);

  if (webhookName) formData.append("username", webhookName);
  if (avatarURL) formData.append("avatar_url", avatarURL);
  if (ttsEnabled) formData.append("tts", true);

  if (fileInput.files.length) {
    formData.append("file", fileInput.files[0]); // Die erste Datei wird angehängt
  }

  try {
    const request = await fetch(webhookURL, {
      method: "POST",
      body: formData
    });

    if (request.ok) {
      console.log("Nachricht erfolgreich gesendet!");
      document.getElementById("messageInput").value = "";
      fileInput.value = "";
      document.getElementById("ttsEnabled").checked = false;
    } else {
      throw new Error("Fehler beim Senden der Nachricht");
    }
  } catch (error) {
    console.warn("Fehler beim Senden:", error);
    alert("Fehler beim Senden!");
  }
  adjustHeight();
});
