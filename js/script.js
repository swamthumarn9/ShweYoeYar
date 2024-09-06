//https://phrase.com/blog/posts/step-step-guide-javascript-localization/

// The locale our app first shows
const cookieName = "lang";

var langFromCookie = getCookie(cookieName);

const defaultLocale = langFromCookie ?? "en";
let locale;

let translations = {};

window.addEventListener("DOMContentLoaded", function () {
  loadNavbar();
  loadFooter();
});

// When the page content is ready...
//document.addEventListener("readystatechange", () => {
window.onload = function () {
  setLocale(defaultLocale);
  bindLocaleSwitcher(defaultLocale);
};

function loadNavbar() {
  $('#navbar-section').load('navbar.html');   
}

function loadFooter(){
  $('#footer').load('footer.html');
}

async function setLocale(newLocale) {
  if (newLocale === locale) return;
  const newTranslations =
    await fetchTranslationsFor(newLocale);
  //locale = newLocale;
  translations = newTranslations;
  translatePage();

}

async function fetchTranslationsFor(newLocale) {
  const response = await fetch(`/lang/${newLocale}.json`);
  return await response.json();
}

function translatePage() {

  document

    .querySelectorAll("[data-i18n-key]")

    .forEach(translateElement);
}

function translateElement(element) {

  const key = element.getAttribute("data-i18n-key");

  const translation = translations[key];

  element.innerText = translation;

}

function bindLocaleSwitcher(clickedValue) {
  const selectBox = $("#navbar #locale-switcher");
  const localeValue = $(selectBox).data('locale')
  console.log(localeValue);
  if (clickedValue !== localeValue) {
    changeFlag(clickedValue);
    $("#navbar #locale-switcher").data('locale', clickedValue)
    setLocale(clickedValue);
    setCookie(cookieName, clickedValue, 5)
  }
}

function clickOnLocaleSwitcher(locale) {
  bindLocaleSwitcher(locale);
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

function changeFlag(localeValue) {
  const dropDown = $("#navbar #locale-switcher");
  $(dropDown).data('locale', localeValue);
  if (localeValue === "en") {
    $(dropDown).html(' <span class="flag-icon flag-icon-us"></span> English')
  } else {
    $(dropDown).html(' <span class="flag-icon flag-icon-mm"></span> Myanmar')
  }
}