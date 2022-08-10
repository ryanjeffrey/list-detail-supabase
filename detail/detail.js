import { getPlayer } from '../fetch-utils.js';
import { renderPlayerDetail } from '../render-utils.js';

const playerDetailsEl = document.getElementById('player-details');

const params = new URLSearchParams(window.location.search);

// on load
async function loadData() {
    // get the id from URL
    const playerId = params.get('id');
    // use the id to fetch the player
    const player = await getPlayer(playerId);
    // render and append this player's details to the container
    const playerDetail = renderPlayerDetail(player);
    playerDetailsEl.append(playerDetail);
}

loadData();
