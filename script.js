const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {
    if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸ stop";
    } else {
    audio.pause();
    playBtn.textContent = "▶ play";
    }
});
const currentLine = document.getElementById("currentLine");

const lyrics = [
    { time: 9, line: "No me llames, no me llames" },
    { time: 13, line: "No me llames, no me llames, brujita (estás aquí dentro)" },
    { time: 18, line: "No me llames, no me llames" },
    { time: 21, line: "Ella no se quita, me mira a lo' ojito'" },
    { time: 26, line: "Me parece muy linda, dice que soy bonito" },
    { time: 31, line: "Pienso hasta en la madrugada" },
    { time: 33, line: "Tú eres mi bruja favorita, bruja favorita" },
    { time: 36, line: "Bruja favorita, bruja favorita, bruja favorita" },
    { time: 41, line: "Dice que es una santa-ah-ah" },
    { time: 43, line: "Que todo lo que toca-ah-ah" },
    { time: 46, line: "Se cambia y se hace oro-oh-oh" },
    { time: 49, line: "¿Qué tiene esa boca-ah-ah?" },
    { time: 51, line: "Me hizo escribir uno para el otro" },
    { time: 54, line: "Pero hay mucho sol y está roto" },
    { time: 57, line: "Tengo el vidrio polarizado" },
    { time: 59, line: "Sé un hechizo y te lo disparo" },
    { time: 62, line: "Después tú y yo" },
    { time: 64, line: "No' encontró otro" },
    { time: 67, line: "Necronomicón" },
    { time: 70, line: "Una distracción" },
    { time: 73, line: "Ya no quiero saber nada" },
    { time: 76, line: "Tú eres mi bruja favorita, bruja favorita" },
    { time: 79, line: "Ya no quiero saber nada" },
    { time: 81, line: "Tú eres mi bruja favorita, bruja favorita" },
    { time: 83, line: "Tú estás perdi-i-i-i-da" },
    { time: 85, line: "Con esto me pi-i-i-i-ro" },
    { time: 88, line: "A hacer magia negra" },
    { time: 90, line: "Cuando eres tan linda (bruja favorita)" },
    { time: 95, line: "Tu eres mi bruja favorita" },
    { time: 98, line: "Tu eres mi bruja favorita" },
    { time: 101, line: "Ya no quiero que estés (no me llames, no me llames)" },
    { time: 106, line: "Tú eres mi bruja favorita (no me llames, no me llames)" },
    { time: 116, line: "Ya no quiero saber nada" },
    { time: 118, line: "Tú eres mi bruja favorita, bruja favorita" },
    { time: 121, line: "Bruja favorita, bruja favorita (ya no quiero que estés)" },
    { time: 125, line: "Aunque tenga prisa, ella se queda un ratito" },
    { time: 131, line: "Me parece muy linda, dice que soy bonito" },
    { time: 138, line: "Pienso hasta en la madrugada" },
    { time: 141, line: "Tú eres mi bruja favorita, bruja favorita" },
    { time: 144, line: "Bruja favorita, bruja favorita, bruja favorita, bruja favorita" }
];

let currentIndex = 0;

audio.addEventListener("timeupdate", () => {
    if (currentIndex < lyrics.length && audio.currentTime >= lyrics[currentIndex].time) {
    currentLine.textContent = lyrics[currentIndex].line;
    currentIndex++;
    }
});