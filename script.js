const canvas = document.getElementById("drawCanvas");
const ctx = canvas.getContext("2d");

let drawing = false;

canvas.addEventListener("mousedown", () => drawing = true);
canvas.addEventListener("mouseup", () => drawing = false);
canvas.addEventListener("mouseout", () => drawing = false);

canvas.addEventListener("mousemove", draw);

function draw(event) {
    if (!drawing) return;

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(
        event.offsetX,
        event.offsetY,
        8,
        0,
        Math.PI * 2
    );
    ctx.fill();
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("output").classList.add("hidden");
}

function predictCharacter() {
    // ----- Simulated CNN Prediction -----
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const predictedChar = characters[Math.floor(Math.random() * characters.length)];
    const confidence = (Math.random() * 30 + 70).toFixed(2);

    // Simulated softmax probabilities
    let probs = {};
    for (let i = 0; i < 5; i++) {
        const char = characters[Math.floor(Math.random() * characters.length)];
        probs[char] = (Math.random() * 0.2).toFixed(2);
    }
    probs[predictedChar] = (Math.random() * 0.5 + 0.5).toFixed(2);

    document.getElementById("output").classList.remove("hidden");
    document.getElementById("character").innerText =
        `Predicted Character: ${predictedChar}`;
    document.getElementById("confidence").innerText =
        `Confidence: ${confidence}%`;

    document.getElementById("probabilities").innerText =
        JSON.stringify(probs, null, 2);
}
