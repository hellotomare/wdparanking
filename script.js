fetch('http://localhost:3000/api/rankings')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('rankingList');
    data.sort((a, b) => b.score - a.score);
    data.forEach(player => {
      const li = document.createElement('li');
      li.textContent = `${player.name} - ${player.score}`;
      list.appendChild(li);
    });
  });