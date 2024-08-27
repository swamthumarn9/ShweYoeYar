//https://phrase.com/blog/posts/step-step-guide-javascript-localization/

// The locale our app first shows
const cookieName = "lang";

var langFromCookie = getCookie(cookieName);

const defaultLocale = langFromCookie ?? "en";
let locale;

let translations = {};

// When the page content is ready...
document.addEventListener("readystatechange", () => {
  setLocale(defaultLocale);
  bindLocaleSwitcher(defaultLocale);
}, false);

async function setLocale(newLocale) {
  if (newLocale === locale) return;
  const newTranslations =
    await fetchTranslationsFor(newLocale);
  //locale = newLocale;
  translations = newTranslations;
  translatePage();

}

// Retrieve translations JSON object for the given

// locale over the network

async function fetchTranslationsFor(newLocale) {
  const response = await fetch(`/lang/${newLocale}.json`);
  return await response.json();
}

// Replace the inner text of each element that has a

// data-i18n-key attribute with the translation corresponding

// to its data-i18n-key

function translatePage() {

  document

    .querySelectorAll("[data-i18n-key]")

    .forEach(translateElement);

}

// Replace the inner text of the given HTML element

// with the translation in the active locale,

// corresponding to the element's data-i18n-key

function translateElement(element) {

  const key = element.getAttribute("data-i18n-key");

  const translation = translations[key];

  element.innerText = translation;

}

function bindLocaleSwitcher(initialValue) {
  const switcher =
    document.querySelector("[data-i18n-switcher]");
  switcher.value = initialValue;
  switcher.onchange = (e) => {
    // Set the locale to the selected option[value]
    setLocale(e.target.value);
    setCookie(cookieName, e.target.value, 5)
  };
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}