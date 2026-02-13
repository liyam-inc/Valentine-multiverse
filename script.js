function openMode(mode) {
    document.querySelector(".menu").classList.add("hidden");
    const content = document.getElementById("content");
    content.classList.remove("hidden");

    if (mode === "anti") {
        document.body.style.background = "black";
        content.innerHTML = `
        <h2>Love is overrated.</h2>
        <p>Feelings are distractions.</p>
        <p style="color: hotpink; margin-top:40px;">Except when it's you.</p>
        <button onclick="goBack()">Back</button>
        `;
    }

    if (mode === "mind") {
        content.innerHTML = `
        <h2>Think of our best memory...</h2>
        <button onclick="revealMind()">Reveal</button>
        <button onclick="goBack()">Back</button>
        `;
    }

    if (mode === "parallel") {
        content.innerHTML = `
        <h2>Choose your universe</h2>
        <button onclick="withoutYou()">Without You</button>
        <button onclick="withYou()">With You</button>
        <button onclick="goBack()">Back</button>
        <div id="parallelResult"></div>
        `;
    }

    if (mode === "time") {
        content.innerHTML = `
        <h2>Time Capsule</h2>
        <p>Open this on Valentine's Day 2027.</p>
        <p style="color: hotpink;">I hope we're still choosing each other.</p>
        <button onclick="goBack()">Back</button>
        `;
    }

    if (mode === "boss") {
        content.innerHTML = `
        <h2>Love Boss Battle</h2>
        <div class="health-bar">
            <div id="bossHealth" class="health"></div>
        </div>
        <button onclick="attackBoss()">Fight Together</button>
        <button onclick="goBack()">Back</button>
        `;
    }

    if (mode === "data") {
        content.innerHTML = `
        <h2>Emotional Stats</h2>
        <p>Smiles caused: ∞</p>
        <p>Hugs owed: 9,999</p>
        <p>Arguments survived: 100%</p>
        <p>Heartbeat near you: +200%</p>
        <button onclick="goBack()">Back</button>
        `;
    }
}

function goBack() {
    document.querySelector(".menu").classList.remove("hidden");
    document.getElementById("content").classList.add("hidden");
    document.body.style.background = "black";
}

function revealMind() {
    document.getElementById("content").innerHTML +=
    "<p style='color: hotpink;'>I was thinking about that too.</p>";
}

function withoutYou() {
    document.getElementById("parallelResult").innerHTML =
    "<p>No late night talks. No random laughs. Incomplete.</p>";
}

function withYou() {
    document.getElementById("parallelResult").innerHTML =
    "<p style='color: hotpink;'>Some universes are meant to happen ❤️</p>";
}

let health = 100;

function attackBoss() {
    if (health > 0) {
        health -= 20;
        document.getElementById("bossHealth").style.width = health + "%";
    } else {
        alert("Teamwork wins every time ❤️");
    }
}
