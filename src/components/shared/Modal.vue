<template>
  <div name="modal" v-if="show">
    <div class="modal-backdrop-container">
      <div class="modal-backdrop">
        <div class="modal-container">
          <div class="modal-header">
            <span class="header">
              <slot name="header"></slot>
            </span>

            <span id="close-button" class="close-button" @click="hide">
              <img src="@/assets/x-mark.svg" alt="Fechar" height="20px" />
            </span>
          </div>

          <div class="modal-body">
            <slot name="body"> </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer"> </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vue from 'vue'

export default vue.extend({
  components: {},
  props: ['show'],
  methods: {
    hide () {
      this.$emit('close')
    }
  }
})
</script>

<style lang="less">
.modal-backdrop-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  .modal-backdrop {
    width: 100%;
    margin: auto;
    margin-top: 5vh;

    .modal-container {
      margin: 0px auto;
      background-color: white;
      width: 500px;
      height: fit-content;

      .modal-header {
        margin: 0px;
        padding: 16px;
        font-size: 1.5em;
        font-weight: 600;
        position: relative;
        .close-button {
          position: absolute;
          right: 16px;
          cursor: pointer;
        }
      }

      .modal-body {
        padding: 40px;
      }
    }
  }
}
</style>
