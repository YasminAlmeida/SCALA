function discussion(){
  let fechar = document.querySelector('.middle--discussions--js');
  fechar.style.display = 'none';
  let abrir = document.querySelector('.resume2');
  abrir.style.display = 'grid';
}

function discussion2(){
  let fechar = document.querySelector('.resume2');
  fechar.style.display = 'none';
  let abrir = document.querySelector('.resume3');
  abrir.style.display = 'flex';
  let expandir = document.querySelector('.article--topic-blurry');
  expandir.style.display = 'flex';
}
function discussion3(){
  let fechar = document.querySelector('.resume3');
  fechar.style.display = 'none';
  let abrir = document.querySelector('.middle--discussions--js');
  abrir.style.display = 'flex';
  let expandir = document.querySelector('.article--topic-blurry');
  expandir.style.display = 'none';
}

function leiaMais() {
  const tresPontos = document.getElementById('tresPontos');
  const mostrarMais = document.getElementById('mostrarMais');
  const btnLeiaMais = document.getElementById('btnLeiaMais');

  if (tresPontos.style.display === 'none') {
      tresPontos.style.display = 'inline';
      mostrarMais.style.display = 'none';
      btnLeiaMais.innerHTML = 'ver mais';
  } else {
      tresPontos.style.display = 'none';
      mostrarMais.style.display = 'inline';
      btnLeiaMais.style.display = 'none';
  }

}
function comentarios(){
  let expandir = document.querySelector('.container-answers');
  let pontos = document.getElementById('pontos');
  let mostrarMais = document.getElementById('mais');
  if(expandir.style.display == 'none'){
      expandir.style.display = 'flex';
      pontos.style.display = 'none';
      mostrarMais.style.display = 'inline';
  }
  else{
      expandir.style.display = 'none';
      pontos.style.display = 'inline';
      mostrarMais.style.display = 'none';
  }
}

function menuSuspenso(){
  let expandir = document.querySelector('.menuSuspenso');
  let menu = document.querySelector('li .nav--items-suspenso');
  if(menu.style.display == 'none'){
      expandir.style.display = 'flex';
      menu.style.display = 'flex';
  }
  else{
      menu.style.display = 'none';
  }
}
function loginSuspenso(){
  let expandir = document.querySelector('.loginSuspenso');
  let menu = document.querySelector('li .nav--items-suspenso1');
  if(menu.style.display == 'none'){
      expandir.style.display = 'flex';
      menu.style.display = 'flex';
  }
  else{
      menu.style.display = 'none';
  }
}
