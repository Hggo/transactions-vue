<template>
  <div>
    <div class="bar">
      <div class="bar-progress" :style="{ width: width + '%' }">
        <div class="circle" :style="{ 'margin-left': width * 2 + '%' }"></div>
      </div>
    </div>
    <div class="bar-label">
      <span>Solicitada</span>
      <span>Processada</span>
      <span>Concluída</span>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {},
  props: ['status'],
  data () {
    return {}
  },
  computed: {
    width () {
      return this.status === 'created' ? 0 : this.status === 'processing' ? 50 : 100
    }
  }
})
export default class ProgressBar extends Vue {}
</script>

<style lang="less">
.bar {
  width: 100%;
  border-color: black;
  border: 2px solid;
  height: 15px;
  .bar-progress {
    background-color: rgb(80, 221, 232);
    height: 100%;
    .circle {
      border-radius: 15px;
      height: 15px;
      width: 15px;
      background-color: black;
      transform: translate(-50%);
    }
  }
}
.bar-label {
  padding-top: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
