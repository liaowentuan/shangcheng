<template>
  <div>
    <detail :list="list" :wellColor="wellColor" :wellBackgroundColor="shadowColor"></detail>  
  </div>
</template>

<script>
import detail from '@/components/detail.vue'
export default {
  components: {detail},
  data () {
    return {
      list: [
        {
          title: '女士用',
          price: '59.0',
          artilce: '米蓝色陶瓷花瓶',
          detail: '自然清新的意境',
          likeCount: '459'
        },
        {
          title: '女士用',
          price: '59.0',
          artilce: '米蓝色陶瓷花瓶',
          detail: '自然清新的意境',
          likeCount: '459'
        },
        {
          title: '女士用',
          price: '59.0',
          artilce: '米蓝色陶瓷花瓶',
          detail: '自然清新的意境',
          likeCount: '459'
        },
        {
          title: '女士用',
          price: '59.0',
          artilce: '米蓝色陶瓷花瓶',
          detail: '自然清新的意境',
          likeCount: '459'
        },
        {
          title: '女士用',
          price: '59.0',
          artilce: '米蓝色陶瓷花瓶',
          detail: '自然清新的意境',
          likeCount: '459'
        }
      ],
      shadowColor: '#f7fbff',
      deepColor: '#4a90e2'
    }
  }
}
</script>