<template>
  <div class="container">
    <div class="header"></div>
    <div class="main">
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
