import { createApp } from 'vue'
import App from './App.vue'

const Vue = createApp(App);

Vue.directive('texto', {

  //created() é chamado antes que os atributos do elemento ou ouvintes de event(event listeners) sejam aplicados.
  created(el, binding) {

    if(binding.value?.cor) el.style.color = binding.value.cor;
    if(binding.value?.tamanhoFonte) el.style.fontSize = binding.value.tamanhoFonte;
    
    let totalCaracteres = 25;

    if(binding.value?.totalCaracteres) totalCaracteres = binding.value.totalCaracteres;

    let textoOriginal = el.innerText;
    let tamanhoTextoOriginal = textoOriginal.length;
    let textoAjustado = '';

    if(tamanhoTextoOriginal > totalCaracteres) {
      //vamos truncar o texto em 22 caracteres e adicionar '...'
      textoAjustado = textoOriginal.substring(0, (totalCaracteres - 3)) + '...';
    } else {
      //vamos manter o texto original
      textoAjustado = textoOriginal;
    }

    el.innerText = textoAjustado;
  }
})

Vue.directive('posicao', {
  created(el, binding) {
    // console.log(el, binding.arg, binding.value);

    const posicoesPossiveis = ['relative', 'fixed', 'absolute'];

    if(posicoesPossiveis.includes(binding.arg)){
      el.style.position = binding.arg;
      el.style.top = `${binding.value}px`;
    }
  }
})

Vue.directive('informacao', {
  created(el, binding) {

    let funcao = function () {

      //Criando o elemento de Span
      let informacaoSpan = document.createElement('span');
      informacaoSpan.style.position = 'absolute';
      informacaoSpan.style.background = '#ddd';
      informacaoSpan.style.padding = '2px';
      informacaoSpan.innerText =  binding.value;

      el.appendChild(informacaoSpan); //Adicionando ao Span PAI

      //Adicionando no elmento um evento de escuta de click (se clicado, executará a função abaixo)
      informacaoSpan.addEventListener('click', (event) => {
        event.stopPropagation(); //Eventando que o evento de clique do elemento pai se extenda para o elemento filho
        informacaoSpan.remove(); //Remove o elemento html
      })
    }


    if(binding.modifiers['umClickMouse']) {
      el.addEventListener('click', funcao) //Adicionando um evento de click e executando a função criada
    }

    if(binding.modifiers['doisClicksMouse']) {
      el.addEventListener('dblclick', funcao)
    }

  }
})

Vue.mount('#app')
