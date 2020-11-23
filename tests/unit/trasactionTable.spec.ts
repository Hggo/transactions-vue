import { mount, shallowMount } from '@vue/test-utils'
import TransactionTable from '@/components/transaction/TransactionTable.vue'
import vue from 'vue'
import store from '@/store/transactions'
import Transaction from '@/typings/transaction'

// Needed because jest is not recognizing this computed property
interface ITransactionTable extends vue {
    openDetail: (transaction: Transaction) => void;
    transactions: Transaction[];
}

describe('Transaction table tests', () => {
  const wrapper = shallowMount<ITransactionTable>(TransactionTable, { store })

  it('Should render the component and trigger the right commits in the store', async () => {
    await wrapper.vm.openDetail({
      amount: '',
      date: '',
      description: '',
      from: '',
      id: '12345',
      status: '',
      title: '',
      to: ''
    })

    expect(wrapper.vm.$store.state.transactionBeingDetailed.id).toBe('12345')
  })

  it('Should be able to get the transactions from the store', () => {
    expect(wrapper.vm.transactions.length).toBe(0)
  })
})
