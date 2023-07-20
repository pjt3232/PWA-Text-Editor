const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// Click event handler on the `butInstall` element
butInstall.addEventListener('click', async (event) => {
    window.deferredPrompt = event;
    if (deferredPrompt) {
        deferredPrompt.prompt();
        window.deferredPrompt = null;
        butInstall.classList.toggle('hidden', true);
    }
});

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = event;
    window.deferredPrompt = null;
    console.log('App installed!');
});