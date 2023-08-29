// play.js

const nodeOtherPick = document.querySelector('.other-pic');
[...Array(4)].forEach(_ => nodeOtherPick.parentNode.insertBefore(nodeOtherPick.cloneNode(true), nodeOtherPick));
const options = ['MOBILE SUIT GUNDAM WITCH from MERCURY', 'Naruto: Shippuuden', 'Kaguya-sama: Love Is War', 'Sorcery Fight', 'Seven Deadly Sins'];
const playerBtn = document.getElementById('player-btn')
const playerAnimeBg = document.getElementById('player-anime-bg')
const playerAnime = document.getElementById('player-anime')


document.querySelectorAll('.other-pic').forEach((n, i) => n.textContent = options[i]);

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

playerBtn.onclick = function () {
  playerAnimeBg.style.display = 'block'
  playerAnime.style.display = 'block'
}

playerAnimeBg.onclick = function () {
  playerAnimeBg.style.display = 'none'
  playerAnime.style.display = 'none'
}

// main.js
