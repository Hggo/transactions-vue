<template>
  <div class="home">
    <TransactionTable />
  </div>
</template>

<script lang="ts">
import vue from 'vue'
import TransactionTable from '@/components/transaction/TransactionTable.vue'
import { listTransactions } from '@/services/transaction.service'

export default vue.extend({
  components: {
    TransactionTable
  },
  created () {
    listTransactions().then((trasactions) => {
      this.$store.commit('setTransactions', trasactions.data)
    })
  }
})
</script>

<style lang="less">
.home {
  margin: 0 5vw;
  width: auto;
}
</style>
