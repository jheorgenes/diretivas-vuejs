import { createApp } from 'vue'
import App from './App.vue'

const Vue = createApp(App);

Vue.directive('texto', {

  //created() é chamado antes que os atributos do elemento ou ouvintes de event(event listeners) sejam aplicados.
  created(el) {
    // console.log(el); //Parametro el guarda a referência da diretiva (que nesse caso é uma tag p com um texto dentro)
    console.log(el.style); 
    el.style.color = 'red';
    el.style.fontSize = '150%' // Alteração de estilização em diretivas só utiliza o CamelCase para os atributos do css.

    let textoOriginal = el.innerText;
    let tamanhoTextoOriginal = textoOriginal.length;
    let textoAjustado = '';

    if(tamanhoTextoOriginal > 25) {
      //vamos truncar o texto em 22 caracteres e adicionar '...'
      textoAjustado = textoOriginal.substring(0, 22) + '...';
    } else {
      //vamos manter o texto original
      textoAjustado = textoOriginal;
    }

    el.innerText = textoAjustado;
    console.log('A diretiva foi aplicada com sucesso.');
  }
})

Vue.mount('#app')
