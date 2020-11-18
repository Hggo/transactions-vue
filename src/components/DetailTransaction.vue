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
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {},
  props: ['title', 'source', 'ammout']
})
export default class DetailTransaction extends Vue {}
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
