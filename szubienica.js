const hasla = new Array(17);
hasla[0] = "JAKA PRACA TAKA PŁACA";
hasla[1] = "CIĘZKA PRACA POPŁACA";
hasla[2] = "APETYT ROŚNIE W MIARĘ JEDZENIA";
hasla[3] = "CISZA JAK MAKIEM ZASIAŁ";
hasla[4] = "CO DWIE GŁOWY TO NIE JEDNA";
hasla[5] = "CO KRAJ TO OBYCZAJ";
hasla[6] = "CO MA PIERNIK DO WIATRAKA";
hasla[7] = "CO SIĘ ODWLECZE TO NIE UCIECZE";
hasla[8] = "DO WESELA SIĘ ZAGOI";
hasla[9] = "CO ZA DUŻO TO NIE ZDROWO";
hasla[10] = "JAK KAMIEŃ W WODĘ";
hasla[11] = "KLĄĆ JAK SZEWC";
hasla[12] = "KŁAMSTWO MA KRÓTKIE NOGI";
hasla[14] = "KTO PIERWSZY TEN LEPSZY";
hasla[15] = "KTO PYTA NIE BŁĄDZI";
hasla[16] = "KTO SIĘ CZUBI TEN SIĘ LUBI";
hasla[17] = "KUJ ŻELAZO PÓKI GORĄCE";


const losowe = hasla[Math.floor(Math.random() * hasla.length)];
const haslo = losowe;
const dlugosc = haslo.length;
let ile_skuch = 0;

const yes = new Audio("yes.wav");
const no = new Audio("no.wav");
const win = new Audio("win.mp3");
const loss = new Audio("loss.mp3");

let haslo1 = "";

for (i = 0; i < dlugosc; i++) {
    if (haslo.charAt(i) == " ") haslo1 = haslo1 + " ";
    else haslo1 = haslo1 + "-";
}

function wypisz_haslo() {
    document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;



const litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";

function start() {
    let tresc_diva = "";

    for (i = 0; i < 35; i++) {
        var element = "lit" + i;
        tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz(' + i + ')" id="' + element + '">' + litery[i] + '</div>';
        if ((i + 1) % 7 == 0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
    }

    document.getElementById("alfabet").innerHTML = tresc_diva;


    wypisz_haslo();
}

String.prototype.ustawZnak = function (miejsce, znak) {
    if (miejsce > this.length - 1) return this.toString();
    else return this.substr(0, miejsce) + znak + this.substr(miejsce + 1);
}

function sprawdz(nr) {

    let trafiona = false;

    for (i = 0; i < dlugosc; i++) {
        if (haslo.charAt(i) == litery[nr]) {
            haslo1 = haslo1.ustawZnak(i, litery[nr]);
            trafiona = true;
        }
    }

    if (trafiona == true) {
        yes.play();
        let element = "lit" + nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";

        wypisz_haslo();
    } else {
        no.play();
        let element = "lit" + nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick", ";");

        //skucha
        ile_skuch++;
        let obraz = "img/s" + ile_skuch + ".jpg";
        document.getElementById("szubienica").innerHTML = '<img src="' + obraz + '">';
    }

    //wygrana
    if (haslo == haslo1) {
        document.getElementById("alfabet").innerHTML = "Tak jest! Podano prawidłowe hasło: " + haslo + '<br><br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
        win.play();
    }

    //przegrana
    if (ile_skuch >= 9) {
        document.getElementById("alfabet").innerHTML = "Przegrana! Prawidłowe hasło: " + haslo + '<br><br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
        loss.play();
    }
}