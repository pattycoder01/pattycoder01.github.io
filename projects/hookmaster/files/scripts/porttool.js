const importButton = document.getElementById("importData");
const exportButton = document.getElementById("exportData");

importButton.addEventListener('click', async (event) => {
    const importedDataJSON = prompt("enter data");
    const importedData = JSON.parse(importedDataJSON);
    document.getElementById("webhookName").value = importedData.name;
    document.getElementById("avatarURL").value = importedData.avatar;
    document.getElementById("messageInput").value = importedData.content;
    document.getElementById("ttsEnabled").checked = importedData.tts;
    adjustHeight();
})

exportButton.addEventListener('click', async (event) => {
    const messageInput = document.getElementById("messageInput").value;
    const webhookName = document.getElementById("webhookName").value;
    const avatarURL = document.getElementById("avatarURL").value;
    const ttsEnabled = document.getElementById("ttsEnabled").checked;
    const exportData = {}
    exportData.content = messageInput;
    exportData.name = webhookName;
    exportData.avatar = avatarURL;
    exportData.tts = ttsEnabled;
    alert(JSON.stringify(exportData));
})