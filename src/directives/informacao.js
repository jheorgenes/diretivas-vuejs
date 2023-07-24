export default {
  created(el, binding) {
    console.log(el, binding.arg, binding.modifiers, binding.value);

    let funcao = null;

    if(binding.arg == undefined || binding.arg === 'simples'){
      funcao = function () {

        let informacaoSpan = document.createElement('span');
        informacaoSpan.style.position = 'absolute';
        informacaoSpan.style.background = '#ddd';
        informacaoSpan.style.padding = '2px';
        informacaoSpan.innerText =  binding.value;

        el.appendChild(informacaoSpan);

        informacaoSpan.addEventListener('click', (event) => {
          event.stopPropagation(); 
          informacaoSpan.remove(); 
        })

        if(binding.modifiers['sairAutomaticamente']){
          setTimeout(() => {
            informacaoSpan.remove();
          }, 3000)
        }
      }
    }

    if(binding.arg === 'destacado') {
      funcao = function () {
        let informacaoDivContainer = document.createElement('div');
        let informacaoDiv = document.createElement('div');
        informacaoDiv.innerText = binding.value;
  
        informacaoDivContainer.style.width = '100%';
        informacaoDivContainer.style.height = '100%';
        informacaoDivContainer.style.display = 'flex';
        informacaoDivContainer.style.flexDirection = 'row';
        informacaoDivContainer.style.alignItems = 'center';
        informacaoDivContainer.style.justifyContent = 'center';
        informacaoDivContainer.style.background = '#ccc';
        informacaoDivContainer.style.position = 'absolute';
        informacaoDivContainer.style.top = '0';
        informacaoDivContainer.style.zIndex = '10';
  
        informacaoDiv.style.padding = '30px';
        informacaoDiv.style.background = '#fba';
  
        informacaoDivContainer.appendChild(informacaoDiv);
  
        el.appendChild(informacaoDivContainer);

        informacaoDivContainer.addEventListener('click', (event) => {
          event.stopPropagation(); 
          informacaoDivContainer.remove(); 
        })

        if(binding.modifiers['sairAutomaticamente']){
          setTimeout(() => {
            informacaoDivContainer.remove();
          }, 3000)
        }
      }
    }

    if(binding.modifiers['umClickMouse']) {
      el.addEventListener('click', funcao) 
    }

    if(binding.modifiers['doisClicksMouse']) {
      el.addEventListener('dblclick', funcao)
    }

  }
}