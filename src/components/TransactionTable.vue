<template>
  <div>
    <table class="table">
      <tr class="table-title">
        <th>Título</th>
        <th>Descrição</th>
        <th>Status</th>
        <th>Valor</th>
      </tr>
      <tr v-for="transaction in transactions" v-bind:key="transaction.id" @click="openDetail(transaction)">
        <td>{{ transaction.title }}</td>
        <td>{{ transaction.description }}</td>
        <td>{{ transaction.status }}</td>
        <td>R$ {{ transaction.amount }}</td>
      </tr>
    </table>
    <TransactionDetailModal :show="showDetail" />
  </div>
</template>

<script lang="ts">
import vue from 'vue'
import Transaction from '@/typings/transaction'
import TransactionDetailModal from '@/components/TransactionDetailModal.vue'

export default vue.extend({
  components: { TransactionDetailModal },
  data () {
    return {
      showDetail: false,
      transactions: []
    }
  },
  methods: {
    openDetail (transaction: Transaction) {
      this.showDetail = true
    }
  }
})
</script>

<style lang="less">
.table {
  text-align: left;
  width: 1000px;
  padding: 0px;
  margin: 0px;
  tr {
    &:hover {
      cursor: pointer;
    }
    width: 100%;
    &:nth-child(even) {
      background-color: #eee;
    }
    &:nth-child(odd) {
      background-color: #fff;
    }
    td {
      padding: 5px;
    }
    &.table-title {
      background-color: #cccccc;
    }
  }
}
</style>
