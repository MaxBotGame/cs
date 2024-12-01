function getLanguageFromUrl() {
    if (window.location.search) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('lang');
    }
    return "en";
}

const language = getLanguageFromUrl();

function updateLinksLanguage() {
    const links = document.querySelectorAll('a[href]');
    
    links.forEach(link => {
        link.href = `${link.href}?lang=${language}`;
    });
}

updateLinksLanguage();


let tg = window.Telegram.WebApp;
tg.expand();
