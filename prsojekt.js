sjekkTilgang();

document.addEventListener('DOMContentLoaded', function() {
const settingsBtn = document.getElementById('settingsBtn');
const settingsMenu = document.getElementById('settingsMenu');
const themeInputs = document.querySelectorAll('input[name="theme"]');
const langSelect = document.getElementById("language-select");

// --- Språkoversettelser ---
const translations = {
    no: {
        hello: "Hei!",
        welcomeTitle: "Velkommen til siden vår.",
        farmDescription1: "Her på gården har vi en hund, to katter, 16 høner og en hane. Vi har også bier.",
        farmDescription2: "Vi er selvforsynte, hvor vi henter egg fra hønene og planter grønsaker og kjøtt fra egne dyr.",
        youtubeLink: "Besøk gjerne YouTube kanalen vår.",
        facebookLink: "Eller så kan du besøke facebook siden",
        instagramLink: "Vi har også en instagram som du kan sjekke",
        h_paragraf1: "",
        dyrKnapp: "Dyrene våre",
        hjemKnapp: "Hjem",
        historieKnapp: "Historien til gården",
        themeSummary: "Tema",
        themeLight: "Lyst tema",
        themeDark: "Mørkt tema",
        languageSummary: "Språk",
        chooseLanguage: "Velg språk:",
        langNo: "Norsk",
        langEn: "English (Engelsk)",
        langDe: "Deutsch (Tysk)",
        langEs: "Español (Spansk)"
    },
    en: {
        hello: "Hello!",
        welcomeTitle: "Welcome to our site.",
        farmDescription1: "Here on the farm we have a dog, two cats, 16 hens and a rooster. We also keep bees.",
        farmDescription2: "We are self-sufficient, getting eggs from the hens, vegetables from the garden, and meat from our own animals.",
        youtubeLink: "Please visit our YouTube channel.",
        facebookLink: "Or you could visit our facebook page",
        instagramLink: "We also have an instagram witch you could visit.",
        dyrKnapp: "Our animales",
        hjemKnapp: "Home",
        historieKnapp: "The histroy of the farm",
        paragraf1: "",
        themeSummary: "Theme",
        themeLight: "Light theme",
        themeDark: "Dark theme",
        languageSummary: "Language",
        chooseLanguage: "Choose language:",
        langNo: "Norsk (Norwegan)",
        langEn: "English",
        langDe: "Deutsch (German)",
        langEs: "Español (Spanish)"
    },
    de: {
        hello: "Hallo!",
        welcomeTitle: "Willkommen auf unserer Seite.",
        farmDescription1: "Auf dem Hof haben wir einen Hund, zwei Katzen, 16 Hühner und einen Hahn. Wir haben auch Bienen.",
        farmDescription2: "Wir sind selbstversorgend, holen Eier von den Hühnern und pflanzen Gemüse und Fleisch von unseren eigenen Tieren.",
        youtubeLink: "Besuchen Sie gerne unseren YouTube-Kanal.",
        facebookLink: "Oder besuchen Sie unsere Facebook-Seite",
        instagramLink: "Wir haben auch ein Instagram, das Sie sich ansehen können",
        dyrKnapp: "Unsere Tiere",
        hjemKnapp: "Homepage",
        historieKnapp: "Die Geschichte des Bauernhofs",
        paragraf1: "",
        themeSummary: "Thema",
        themeLight: "Helles Thema",
        themeDark: "Dunkles Thema",
        languageSummary: "Sprache",
        chooseLanguage: "Sprache wählen:",
        langNo: "Norsk (Norwegisch)",
        langEn: "English (Englisch)",
        langDe: "Deutsch",
        langEs: "Español (Spanisch)"
    },
    es: {
        hello: "¡Hola!",
        welcomeTitle: " Bienvenido a nuestro sitio.",
        farmDescription1: "En la granja tenemos un perro, dos gatos, 16 gallinas y un gallo. También tenemos abejas.",
        farmDescription2: "Somos autosuficientes, recogemos huevos, cultivamos verduras y obtenemos carne de nuestros propios animales",
        youtubeLink: "Por favor, visiten nuestro canal de YouTube",
        facebookLink: " O visita nuestro sitio de Facebook ",
        instagramLink: " También tenemos una cuenta de Instagram que puedes visitar ",
        dyrKnapp: "Nuestros animales",
        hjemKnapp: "Página primera",
        historieKnapp: "La historia de la granja",
        paragraf1: "",
        themeSummary: " Tema",
        themeLight: "Tema claro",
        themeDark: "Tema oscuro",
        languageSummary: "Idiomas",
        chooseLanguage: "Seleccionar idioma:",
        langNo: "Norsk (Noruego)",
        langEn: "English (Inglés)",
        langDe: "Deutsch (Alemán)",
        langEs: "Español"
    }
};

// --- Språkbytte ---
function setLanguage(lang) {
document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    el.innerHTML = translations[lang][key]; // <--- endret fra textContent
});
localStorage.setItem("language", lang);
}


langSelect.addEventListener("change", (e) => {
    setLanguage(e.target.value);
});

// --- Last lagret språk ---
const savedLang = localStorage.getItem("language") || "no";
langSelect.value = savedLang;
setLanguage(savedLang);

// --- Last lagret tema ---
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.add(savedTheme + '-theme');
    document.querySelector(`input[name="theme"][value="${savedTheme}"]`).checked = true;
} else {
    document.body.classList.add('light-theme'); // Default
}

// --- Tema-bytte ---
themeInputs.forEach(function(input) {
    input.addEventListener('change', function() {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(this.value + '-theme');
    localStorage.setItem('theme', this.value);
    });
});

// --- Toggle meny ---
settingsBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    const isOpen = settingsMenu.style.display === 'block';
    settingsMenu.style.display = isOpen ? 'none' : 'block';
    settingsBtn.setAttribute("aria-expanded", !isOpen);
});

// --- Klikk utenfor lukker menyen ---
document.addEventListener('click', function(event) {
    if (!settingsMenu.contains(event.target) && !settingsBtn.contains(event.target)) {
    settingsMenu.style.display = 'none';
    settingsBtn.setAttribute("aria-expanded", false);
    }
});
});
