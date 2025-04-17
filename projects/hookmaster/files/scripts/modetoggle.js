const toggleButton = document.getElementById("toggleMode");
let mode = 0;

document.getElementById('style').setAttribute('href', 'files/css/light.css');
document.getElementById('style').setAttribute('href', 'files/css/dark.css');

toggleButton.addEventListener('click', async (event) => {
    if (mode == 0) {
        mode = 1;
        document.getElementById('style').setAttribute('href', 'files/css/light.css');
    } else {
        mode = 0;
        document.getElementById('style').setAttribute('href', 'files/css/dark.css');
    }
})