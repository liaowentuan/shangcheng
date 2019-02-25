<template>
  <div class="footer">
    <div id="nav">
      <span><router-link to="/home/boutique"></router-link></span>
      <span><router-link to="/find"></router-link></span>
      <span>
        <div>
          <b>
            +
          </b>
        </div>
      </span>
      <span><router-link to="/message"></router-link></span>
      <span><router-link to="/personal"></router-link></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'saleFooter'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#nav{
  display: flex;
  flex-direction:row;
  justify-content: space-around;
  align-items: center;
  span{
    flex: 1;
    text-align: center;
    line-height: 50px;
    height: 50px;
    a{
      width: 25px;
      height: 25px;
      border: 1px solid #333;
      display: inline-block;
      margin: 12px auto 0;
    }
    >div{
      border: 1px solid #333;

    }
  }
}
</style>
