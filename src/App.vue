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
ul,ol{
  list-style: none;
}
.container {
  height: 667px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .header {
    flex-basis: 50px;
    border-bottom: 1px solid #333;
  }
  .main{
    flex: 1;
    overflow: auto;
  }
  .footer{
    flex-basis: 50px;
    border-top: 1px solid #333;
  }
}
</style>
