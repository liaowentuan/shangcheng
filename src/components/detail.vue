<template>
  <div class="detail" v-if="list.length > 0">
    <div v-for="(item, index) in list" :key="index" class="card" :style="'background:' + wellBackgroundColor">
        <div class="img">

        </div>
        <div class="inner">

        </div>
    </div>
  </div>
  <div v-else  class="detail">
    暂无数据
  </div>
</template>

<script>
export default {
    props: {
    wellColor: {
      type:String,
      required: true
    },
    wellBackgroundColor: {
      type:String,
      required: true
    },
    list: {
      type:Array,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
.detail {
    .card{
        margin: 10px auto 0;
        width: 318px;
        height: 136px;
        border-radius: 3px;
        .img{
            width: 85px;
            height: 85px;
            margin: 26px 0 0 12px;
            float: left;
        }
        .inner{
            float: right;
            width: 220px;
            height: 136px;
        }
    }
}
</style>
