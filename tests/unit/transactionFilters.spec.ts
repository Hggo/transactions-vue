import { mount } from '@vue/test-utils'
import TransactionFilters from '@/components/transaction/TransactionFilters.vue'
import vue from 'vue'
import store from '@/store/transactions'

// Needed because jest is not recognizing this computed property
interface ITransactionFilters extends vue {
    titleFilter: string;
    statusFilter: string;
}

describe('Trannsaction filters tests', () => {
  it('Should render the component and trigger the right commits in the store', async (done) => {
    const wrapper = mount<ITransactionFilters>(TransactionFilters, { store })
    await wrapper.setData({ defaultTimeout: 0 })

    wrapper.vm.statusFilter = 'created'
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$store.state.filter.status).toBe('created')

    wrapper.vm.titleFilter = 'test'

    setTimeout(() => {
      expect(wrapper.vm.$store.state.filter.title).toBe('test')
      done()
    }, 1)
  })
})
