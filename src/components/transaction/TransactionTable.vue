<template>
  <div >
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
    <Modal :show="showDetail" @close="close">
      <template v-slot:header></template>
      <template v-slot:body>
        <ProgressBar status="processing" />
        <DetailTransaction title="Transferido de" :source="'Banco 1'" :ammout="1000"/>
        <DetailTransaction title="Para" :source="'Banco 1'" :ammout="1000" />
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import vue from 'vue'
import Transaction from '@/typings/transaction'
import Modal from '@/components/shared/Modal.vue'
import ProgressBar from '@/components/transaction/ProgressBar.vue'
import DetailTransaction from '@/components/transaction/DetailTransaction.vue'

export default vue.extend({
  components: { Modal, ProgressBar, DetailTransaction },
  data () {
    return {
      showDetail: false
    }
  },
  methods: {
    openDetail (transaction: Transaction) {
      this.showDetail = true
    },
    close () {
      this.showDetail = false
    }
  },
  computed: {
    transactions (): Transaction[] {
      return this.$store.state.transactions
    }
  }
})
</script>

<style lang="less">
.table {
  text-align: left;
  width: 100%;
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
