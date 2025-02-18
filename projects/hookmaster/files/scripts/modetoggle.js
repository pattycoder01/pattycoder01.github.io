const toggleButton = document.getElementById("toggleMode");
let mode = 0;

document.getElementById('colorscheme').setAttribute('href', 'files/css/scheme_light.css');
document.getElementById('colorscheme').setAttribute('href', 'files/css/scheme_dark.css');

toggleButton.addEventListener('click', async (event) => {
    if (mode == 0) {
        mode = 1;
        document.getElementById('colorscheme').setAttribute('href', 'files/css/scheme_light.css');
    } else {
        mode = 0;
        document.getElementById('colorscheme').setAttribute('href', 'files/css/scheme_dark.css');
    }
})