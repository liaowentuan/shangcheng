<template>
  <div class="container">
    <div class="header"></div>
    <div class="main">
      <ul class="navUl">
        <li><router-link to="/home/boutique">精选</router-link></li>
        <li><router-link to="/home/gift">礼物</router-link></li>
        <li><router-link to="/home/accessories">配饰</router-link></li>
        <li><router-link to="/home/cosmetics">美妆</router-link></li>
        <li><router-link to="/home/bag">女包</router-link></li>
        <li><router-link to="/home/shoes">女鞋</router-link></li>
      </ul>
        <router-view/>
    </div>
    <sale-footer></sale-footer>
  </div>
</template>
<script>
import saleFooter from '@/components/footer.vue'
export default {
    name: 'index',
    components: {saleFooter}
}
</script>
<style lang="scss" scoped>
.navUl{
  display: flex;
  flex-direction:row;
  justify-content: space-around;
  align-items: center;
  li{
    flex: 1;
    text-align: center;
  }
}
</style>

