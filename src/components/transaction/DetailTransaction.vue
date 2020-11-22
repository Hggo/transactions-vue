<template>
  <div class="detail">
    <h3 class="title">{{title}}</h3>
    <hr class="divider" />
    <div class="detail-data">
      <span>{{ source }}</span>
      <span>R$ {{ ammout }}</span>
    </div>
  </div>
</template>

<script>
import vue from 'vue'

export default vue.extend({
  components: {},
  props: ['title', 'source', 'ammout']
})
</script>

<style lang="less">
.detail {
  text-align: left;
  margin: 30px 0px;
}
.title {
  margin: 10px 0px;
}
.divider {
  width: 100%;
  height: 1px;
  background-color: #2c3e50;
}
.detail-data {
  display: flex;
  justify-content: space-between;
}
</style>
