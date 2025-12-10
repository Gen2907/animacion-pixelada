const magicMessage = `
Desde tiempos donde los juramentos eran eternos,
y las almas se reconocían sin palabras,
mi corazón aprendió tu nombre.

Aquel 7 de septiembre del 2025,
cuando por fin te vi,
supe que no eras destino…
eras elección.

May,
mi meloncito,
te elegiría en cualquier era,
bajo cualquier cielo,
en cualquier vida.

— Con amor eterno ✨
`;

let letterIndex = 0;
const letterSpeed = 40;
const magicText = document.getElementById("magicText");

function writeMagic() {
    if (letterIndex < magicMessage.length) {
        const char = magicMessage.charAt(letterIndex);
        magicText.innerHTML += char;
        
        if (char.trim() !== "") createSparkle();

        letterIndex++;
        setTimeout(writeMagic, letterSpeed);
    }
}

function createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";

    const rect = magicText.getBoundingClientRect();
    sparkle.style.left = rect.right + "px";
    sparkle.style.top = rect.bottom + "px";

    document.body.appendChild(sparkle);
    setTimeout(() => { sparkle.remove() }, 1000);
}

writeMagic();