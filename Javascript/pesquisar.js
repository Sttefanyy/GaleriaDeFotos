function pesquisarImagens() {
    const searchInput = document.getElementById('pesquisar').value.toLowerCase();
    const gridItems = document.getElementsByClassName('grid-item');

    for (let i = 0; i < gridItems.length; i++) {
      const title = gridItems[i].getElementsByClassName('item-title')[0].innerText.toLowerCase();
      if (title.includes(searchInput)) {
        gridItems[i].style.display = '';
      } else {
        gridItems[i].style.display = 'none';
      }
    }
  }

