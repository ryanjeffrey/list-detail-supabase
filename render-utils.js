export function renderPlayerCard(player) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const nameEl = document.createElement('p');
    const positionEl = document.createElement('p');
    
    div.classList.add('player-card');
    nameEl.classList.add('player-name');

    a.href = `./detail/?id=${player.id}`;
    img.src = `./assets/${player.first_name}-${player.last_name}.png`;
    nameEl.textContent = `${player.first_name} ${player.last_name}`;
    positionEl.textContent = player.position;

    div.append(img, nameEl, positionEl);

    a.append(div);
    
    return a;
}

export function renderPlayerDetail(player) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const nameEl = document.createElement('p');

    const columnContainerEl = document.createElement('div');

    const leftColumnEl = document.createElement('div');
    const positionEl = document.createElement('p');
    const ageEl = document.createElement('p');
    const experienceEl = document.createElement('p');

    const rightColumnEl = document.createElement('div');
    const numberEl = document.createElement('p');
    const heightEl = document.createElement('p');
    const weightEl = document.createElement('p');

    const collegeEl = document.createElement('p');
    const bioEl = document.createElement('p');

    div.classList.add('player-details');

    img.src = `../assets/${player.first_name}-${player.last_name}.png`;

    nameEl.textContent = `${player.first_name} ${player.last_name}`;
    nameEl.classList.add('player-detail-name');

    numberEl.textContent = `#${player.number}`;
    positionEl.textContent = player.position;
    ageEl.textContent = `Age: ${player.age}`;
    experienceEl.textContent = `Experience: ${player.experience} years`;
    heightEl.textContent = `Height: ${player.height}`;
    weightEl.textContent = `Weight: ${player.weight} lbs.`;
    collegeEl.textContent = `College: ${player.college}`;
    bioEl.textContent = player.bio;


    columnContainerEl.classList.add('column-container');
    leftColumnEl.classList.add('left-column');
    rightColumnEl.classList.add('right-column');

    bioEl.classList.add('bio');

    leftColumnEl.append(positionEl, ageEl, experienceEl);
    rightColumnEl.append(numberEl, heightEl, weightEl);
    columnContainerEl.append(leftColumnEl, rightColumnEl);

    div.append(img, nameEl, columnContainerEl, collegeEl, bioEl);

    return div;
}