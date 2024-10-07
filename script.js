let participants = [];

function addParticipant() {
    const name = document.getElementById("participantInput").value;
    if (name) {
        participants.push(name);
        const li = document.createElement("li");
        li.textContent = name;
        document.getElementById("participantList").append(li);
        document.getElementById("participantInput").value = '';
    }
    else {
        alert("Insert a valid name!")
    }
}

function pickWinner() {
    if (participants.length >= 2) {
        const winner = participants[Math.floor(Math.random() * participants.length)];
        document.getElementById("result").textContent = `The lucky winner is: ${winner}!`;
    }
    else {
        alert("Add at least 2 participants");
    }
}
