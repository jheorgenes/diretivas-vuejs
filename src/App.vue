<template>
  <p>Sem a diretiva</p>
  <p v-texto="{ cor: 'red', tamanhoFonte: '200%', totalCaracteres: 15 }">Minha primeira diretiva customizada</p><!-- Quando quiser usar uma string, deve-se usar as aspas simples, se não vai entender como variavel -->
  <p v-texto="configuracaoTexto">Teste</p>
  <div v-posicao:absolute="75" v-texto="{ cor: 'green', totalCaracteres: 100 }">Olá, eu sou um binding de argumento e valor</div>
  <span>Código A: </span><input type="text"><span v-informacao:simples.umClickMouse.sairAutomaticamente="'Você encontrará o código A na parte frontal do equipamento'"> i </span>
  <br>
  <span>Código B: </span><input type="text"><span v-informacao:destacado.doisClicksMouse.sairAutomaticamente="'Você encontrará o código B na parte traseira do equipamento, abaixo da tampa de proteção.'"> i </span>
  <hr>
  <h1 v-colorir-fundo-texto="'green'">Diretiva Customizada registrada localmente (no componente)</h1>
</template>

<script>
import colorirFundoTexto from '@/directives/colorirFundoTexto';
export default {
  name: 'App',
  directives: {
    colorirFundoTexto: colorirFundoTexto
  },
  data: () => ({
    configuracaoTexto: { cor: 'blue', tamanhoFonte: '300%', totalCaracteres: 4 }
  })
}
</script>

<style>
</style>
