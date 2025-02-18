// NitroModLoader for HookMaster
// Made by PattyCoder
const mods = [
  ""
];

function loadMod(mod) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `files/mods/modfiles/${mod}.js`;
    script.onload = () => {
      resolve(mod);
    };
    script.onerror = () => {
      console.error(`Failed to load mod: ${mod}`);
      reject(mod);
    };
    document.head.appendChild(script);
    console.log(`Added mod to the loading queue: ${mod}`);
  });
}

function loadMods() {
  console.log('Adding mods to the loading queue...');
  const totalMods = mods.length;

  if (totalMods === 0) {
    console.log("No mods found");
    return;
  }

  const startTime = performance.now();

  Promise.allSettled(mods.map(loadMod))
    .then(results => {
      const endTime = performance.now();
      console.log(`All mods loaded in ${(endTime - startTime).toFixed(2)}ms`);
    });
}

window.addEventListener('load', loadMods);
