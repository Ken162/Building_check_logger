const zone12 = [
    "Building 4",
    "Building 10",
    "Building 11",
    "Building 13",
    "Building 18",
    "Building 19",
    "Building 20E",
    "Building 20W",
    "Building 21",
    "Building 22",
    "Building 32",
    "Building 36",
    "Building 37",
    "Building 38",
    "Building 40",
    "Building 41",
    "Building 44",
    "Building 46",
    "Building 50",
    "Building 51",
    "Building 52",
    "Building 53",
    "Building 58",
    "Building 58A",
    "Building 58C",
    "Building 74",
    "Building 75",
    "Building 76",
    "Building 76A",
    "Building 79",
    "Building 83",
    "Building 84",
    "Heritage Hall",
    "Presidents Hall",
    "Argo Hall",
    "Pace Hall"
];

const zone34 = [
    "Building 43",
    "Building 48",
    "Building 49",
    "Building 54",
    "Building 70",
    "Building 71",
    "Building 72",
    "Building 73",
    "Building 77",
    "Building 78",
    "Building 80",
    "Building 81",
    "Building 82",
    "Building 85",
    "Building 86",
    "Building 88",
    "Building 89",
    "Building 90",
    "Building 91",
    "Building 92",
    "Building 93",
    "Building 94",
    "Building 95",
    "Soccer Trailer",
    "Building 234",
    "Baseball Trailer",
    "Football Trailer",
    "Village West",
    "Village East",
    "Martin Hall",
    "Building 950",
    "Building 960",
    "Argonaut Village",
    "Track",
    "Sports Complex",
    "Tennis Courts",
    "Rec Plex North",
    "Football Field",
    "Racquet Ball Court",
    "Water Tower"
];

let currentZone = zone12;

function generateTable() {
    const tableBody = document.getElementById("building-list");
    tableBody.innerHTML = "";

    const halfLength = Math.ceil(currentZone.length / 2);
    for (let i = 0; i < halfLength; i++) {
        const building1 = currentZone[i];
        const building2 = currentZone[i + halfLength];

        tableBody.innerHTML += `
            <tr>
                <td class="building" onclick="logTime(this)">${building1}</td>
                <td class="time" onclick="editTime(this)"></td>
                ${building2 ? `<td class="building" onclick="logTime(this)">${building2}</td>
                <td class="time" onclick="editTime(this)"></td>` : `<td></td><td></td>`}
            </tr>`;
    }
}

function logTime(buildingCell) {
    const timeCell = buildingCell.nextElementSibling;
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
    timeCell.textContent = timeString;
}

function editTime(timeCell) {
    const currentTime = timeCell.textContent;
    const newTime = prompt("Enter the new time (HH:mm format):", currentTime);

    if (newTime && /^\d{2}:\d{2}$/.test(newTime)) {
        timeCell.textContent = newTime;
    } else {
        alert("Invalid time format. Please enter the time in HH:mm format.");
    }
}

function swapZone() {
    if (currentZone === zone12) {
        currentZone = zone34;
        document.querySelector("button").textContent = "Zone 1/2";
    } else {
        currentZone = zone12;
        document.querySelector("button").textContent = "Zone 3/4";
    }
    generateTable();
}

function setDate() {
    const now = new Date();
    const dateString = now.toLocaleDateString();
    document.getElementById("date").textContent = dateString;
}

window.onload = () => {
    setDate();
    generateTable();
};
function toggleNightMode() {
    document.body.classList.toggle('night-mode');
}
