<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container {
  height: 667px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .header {
    flex-basis: 50px;
    background: greenyellow;
  }
  .main{
    flex: 1;
    background: red;
    overflow: auto;
  }
  .footer{
    flex-basis: 50px;
    background: greenyellow;
  }
}
</style>
