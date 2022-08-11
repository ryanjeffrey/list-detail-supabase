// import functions and grab DOM elements
import { getRoster } from './fetch-utils.js';
import { renderPlayerCard } from './render-utils.js';

const playerListEl = document.getElementById('player-list');

async function loadData() {
    const roster = await getRoster();

    for (let player of roster) {
        const playerEl = renderPlayerCard(player);
        playerListEl.append(playerEl);
    }
}

loadData();