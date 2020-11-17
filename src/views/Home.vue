<template>
  <div class="home">
    <TransactionTable/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TransactionTable from '@/components/TransactionTable.vue'

@Component({
  components: {
    TransactionTable
  }
})
export default class Home extends Vue {}
</script>
