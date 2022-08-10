// import functions and grab DOM elements
import { getRoster } from './fetch-utils.js';

async function loadData() {
    const roster = await getRoster();

    console.log(roster);
}

loadData();