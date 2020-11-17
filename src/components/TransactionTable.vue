<template>
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
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Transaction from '@/typings/transaction'

@Component({
  components: {},
  data () {
    return {
      transactions: []
    }
  },
  methods: {
    openDetail (transaction: Transaction) {
      console.log(transaction) // Will open modal
    }
  }
})
export default class TransactionTable extends Vue {
}
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
        background-color:#fff;
      }
      td {
        padding: 5px;
      }
      &.table-title {
        background-color:#cccccc;
      }
    }
  }
</style>
