
   function acao(iniciar) {
    let modal = iniciar.parentElement.querySelector('.modal');
    modal.style.display = 'block';
  }

  function fechar(Fechar) {
    let modal = Fechar.closest('.modal');
    modal.style.display = 'none';
  }