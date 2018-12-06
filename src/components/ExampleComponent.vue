<template>
  <div> 
    <h1>Dane od rodzica: {{ dataFromParent }}</h1>
    <h1>Dane komponentu: {{ dataFromParent }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'exampleComponent',
    props: ['dataFromParent'],
    data() {
      return {
        thisComponentData: 'value'
      }
    },
    computed: {},
    mounted() {},
    created() {},
    methods: {}
  }
</script>


<style scoped>

</style>