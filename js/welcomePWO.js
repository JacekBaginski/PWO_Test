/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getWelcome() {
    lang = getLanguage();
    if (!lang) {
        lang = 'pl';
    }
    switch (lang) {
        case 'pl':

            if (document.getElementById('welcome'))
                document.getElementById('welcome').innerHTML = pl.welcome;
            document.getElementById('home').innerHTML = pl.home;
            document.getElementById('about').innerHTML = pl.about;
            document.getElementById('T1').innerHTML = pl.T1;
            document.getElementById('T2').innerHTML = pl.T2;
            document.getElementById('T3').innerHTML = pl.T3;
            document.getElementById('contact').innerHTML = pl.contact;
            break;
        default:
            if (document.getElementById('welcome'))
                document.getElementById('welcome').innerHTML = en.welcome;
            document.getElementById('home').innerHTML = en.home;
            document.getElementById('about').innerHTML = en.about;
            document.getElementById('T1').innerHTML = en.T1;
            document.getElementById('T2').innerHTML = en.T2;
            document.getElementById('T3').innerHTML = en.T3;
            document.getElementById('contact').innerHTML = en.contact;
    }
}

function getLanguage() {

    if (navigator.language) {
        lang = navigator.language;
    } else if (navigator.userLanguage) {
        lang = navigator.userLanguage;
    }

    if (lang && lang.length > 2) {
        lang = lang.substring(0, 2);
    }

    return lang;
}
var en = {/* translation table for page */
    welcome: "<h1>Welcome!</h1><p>Application's short description </p>",
    home: "Home",
    about: "About",
    T1: "Tab 1",
    T2: "Tab 2",
    T3: "Tab 3",
    contact: "Contact"
};

var pl = {/* translation table for page */
    welcome: "<h1>Witamy</h1><p>Krótki opis aplikacji</p>",
    home: "Strona główna",
    about: "O programie",
    T1: "Zakładka 1",
    T2: "Zakładka 2",
    T3: "Zakładka 3",
    contact: "Kontakt"
};




