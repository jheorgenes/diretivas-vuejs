<template>
  <p>Sem a diretiva</p>
  <p v-texto="{ cor: 'red', tamanhoFonte: '200%', totalCaracteres: 15 }">Minha primeira diretiva customizada</p><!-- Quando quiser usar uma string, deve-se usar as aspas simples, se não vai entender como variavel -->
  <p v-texto="configuracaoTexto">Teste</p>
  <div v-posicao:absolute="75" v-texto="{ cor: 'green', totalCaracteres: 100 }">Olá, eu sou um binding de argumento e valor</div>
  <span>Código A: </span><input type="text"><span v-informacao:simples.umClickMouse="'Você encontrará o código A na parte frontal do equipamento'"> i </span>
  <span>Código B: </span><input type="text"><span v-informacao:simples.doisClicksMouse="'Você encontrará o código B na parte traseira do equipamento, abaixo da tampa de proteção.'"> i </span>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    configuracaoTexto: { cor: 'blue', tamanhoFonte: '300%', totalCaracteres: 4 }
  })
}
</script>

<style>
</style>
