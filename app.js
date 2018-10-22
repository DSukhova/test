
// Aufgabe 1
console.log("Dina Sukhova", "Anton Kolesnikow", "Julien Buschbacher"); // Gibt Namen aus

// Aufgaben 2, 3
// Konstante und  und lokale Variablen deklarieren

const maxbewertung =10;
let anzahlbewertungen =0;
let aktuellebew =0;
let bewName = [];
let anz = [anzahlbewertungen];
let letztebew = [bewertung];
let letzteErgebnis = 0;

const readline = require('readline'); // => Readline-Modul aktivieren

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fragt einen Benutzer nach seiner Bewertung und gibt Fehlermeldungen aus, fall Bewertungen größer als 10 oder weniger als 0 sind
rl.question('Wie bewerten Sie dieses App? ', (bewertung) => {
    if (bewertung > maxbewertung) {
    console.log("Fehler! Die Bewertung kann maximal 10 Sterne enthalten!");
} else if (bewertung < 0){
    console.log ("Fehler!  Die Bewertung kann mindestens 0 Sterne enthalten!");
}
else {
    anzahlbewertungen++;
    aktuellebew = (bewertung+bewertung) / anzahlbewertungen;
    console.log("\nIhre Bewertung ist: " + bewertung);
}

// Ergebnisausgabe
console.log("Maximale moegliche Bewertung: "+ maxbewertung);
console.log("Aktuelle Anzahl von Bewertungen: " + anzahlbewertungen);
console.log("Letzte Bewertung: "+ bewertung);

console.log(`Vielen Dank für Ihre Bewertung!: ${bewertung}`);

// Aufgaben 4,5.  Berechnet alle Bewertungen 5-man und gibt aktuelle Bewertung aus
const bw = (min,max,bewertung,aktuellebew) => {
    for(let i=0; i<5; i++) {
        var min = 0;
        var max = 10;
        var bewertung = (Math.round(Math.random() * max - min)) + min;
        anzahlbewertungen++;
        aktuellebew = ( bewertung+ bewertung)/anzahlbewertungen;
        console.log("Angegebene Bewertung ist:" + bewertung);
        console.log("Anzahl von Bewertungen: " + anzahlbewertungen);
        console.log("Aktuelle Bewertung ist: " +aktuellebew);

    }
}


// 22.10.2018 Weiterfuernde Aufgaben zu JS

// Aufgabe 1

let bewName = [];
let anz = [anzahlbewertungen];
let letztebew = [bewertung];

console.log("Anzahl der abgegebenen Bewertungen: " +anz.length);
console.log("Zuletzt angetragene Bewertung: " +letztebew[letztebew.length-1]);

// Aufgabe 2

let letzteErgebnis = 0;
let ratings = new Object();
ratings.bewName = "";
ratings.anz = 6;
ratings.letzteErgebnis = 7;

let ratings2 = new Object();
ratings2.bewName = 5;
ratings2.anz = 4;
ratings2.letzteErgebnis =3;

console.log(ratings.bewName);
console.log(ratings2.bewName);

// Aufgabe 3,4  this- und Arrow-Funktion
let ratings3 = {
        bewName: 6,
        anz: 3,
        letzteErgebnis: 7,
        durchschnitt: () => (this.bewName + this.bewName)/ this.anz,


    };
console.log(ratings3.durchschnitt());


// Aufgabe 5 Globale Variable // 2 Variante

// Variante 1
const hello = "hello";

function nameKonkat (){
    const world = "World";
    let concat =  hello + " " + world;
    //console.log(concat());
    console.log(hello + " " + world);
}


function umgekehrt () {
    const  world = "World";
    let concat = world + " " + hello;
    return concat;
    // console.log(concat);
}

const hello = 'hello';


c1 = (p) => {
    const world = 'world';
    return p ? p + world : world;
};
c2 = (p) => p + hello;
console.log(c1(hello));
console.log(c2(c1()));

//Variante 2

const hello = 'hello'; // globale Konstante deklarieren
function myFirstFunc ()
{
    const world = 'world'; // lokale Konstante deklarieren
    console.log (hello + world); // Bildschirmausgabe
}

function mySecondFunc ()
{
    const world = 'world'; // lokale KOnstante deklarieren
    return (world + hello);
}

myFirstFunc (); // ruft die erste Funktion auf

console.log (mySecondFunc ()); //  ruft das Ergebnis der zweiten Funktion auf



rl.close();
});