<template>
  <div class="home">
    <TransactionTable/>
  </div>
</template>

<script lang="ts">
import vue from 'vue'
import TransactionTable from '@/components/TransactionTable.vue'

export default vue.extend({
  components: {
    TransactionTable
  }
})
</script>
