export function renderPlayerCard(player) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const pName = document.createElement('p');
    const pPosition = document.createElement('p');
    
    div.classList.add('player-card');
    pName.classList.add('player-name');

    a.href = `./detail/?id=${player.id}`;
    img.src = `./assets/${player.first_name}-${player.last_name}.png`;
    pName.textContent = `${player.first_name} ${player.last_name}`;
    pPosition.textContent = player.position;

    div.append(img, pName, pPosition);

    a.append(div);
    
    return a;
}

export function renderPlayerDetail(player) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const nameEl = document.createElement('p');
    const numberEl = document.createElement('p');
    const ageEl = document.createElement('p');
    const experienceEl = document.createElement('p');
    const heightEl = document.createElement('p');
    const weightEl = document.createElement('p');
    const collegeEl = document.createElement('p');
    const bioEl = document.createElement('p');

    img.src = `../assets/${player.first_name}-${player.last_name}.png`;

    nameEl.textContent = `${player.first_name} ${player.last_name}`;
    numberEl.textContent = `#${player.number}`;
    ageEl.textContent = `Age: ${player.age}`;
    experienceEl.textContent = `Experience: ${player.experience} years`;
    heightEl.textContent = `Height: ${player.height}`;
    weightEl.textContent = `Weight: ${player.weight} lbs.`;
    collegeEl.textContent = `College: ${player.college}`;
    bioEl.textContent = player.bio;

    div.append(img, nameEl, numberEl, ageEl, experienceEl, heightEl, weightEl, collegeEl, bioEl);

    return div;
}