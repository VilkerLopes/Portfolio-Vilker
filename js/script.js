// Adiciona a classe 'active' ao botão para ativar a animação
document.querySelector('.menu-btn.animated').addEventListener('click', function() {
    this.classList.toggle('active');
    let bo = document.getElementById("meuBotao")
    bo.addEventListener('click', function() {
        // Este código será executado quando o botão for clicado
        alert('Você clicou no botão!');
      });
    
  });
  