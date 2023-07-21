<template>
  <p>Sem a diretiva</p>
  <p v-texto="{ cor: 'red', tamanhoFonte: '200%', totalCaracteres: 15 }">Minha primeira diretiva customizada</p><!-- Quando quiser usar uma string, deve-se usar as aspas simples, se não vai entender como variavel -->
  <p v-texto="{ cor: 'blue', tamanhoFonte: '300%', totalCaracteres: 4 }">Teste</p>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
</style>
