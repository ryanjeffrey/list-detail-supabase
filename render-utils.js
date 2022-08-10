export function renderPlayerCard(player) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const pName = document.createElement('p');
    const pPosition = document.createElement('p');

    a.href = '';
    img.src = `./assets/${player.first_name}-${player.last_name}.png`;
    pName.textContent = `${player.first_name} ${player.last_name}`;
    pPosition.textContent = player.position;

    div.append(img, pName, pPosition);

    a.append(div);
    
    return a;
}