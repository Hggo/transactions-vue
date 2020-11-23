import { shallowMount } from '@vue/test-utils'
import ProgressBar from '@/components/transaction/ProgressBar.vue'
import vue from 'vue'

// Needed because jest is not recognizing this computed property
interface IProgressBar extends vue {
    width: () => number
}

describe('Progress bar component tests', () => {
  it('Should return the right widths to the status values', async () => {
    const wrapper = shallowMount<IProgressBar>(ProgressBar, {
      propsData: { status: 'created' }
    })
    expect(wrapper.vm.width).toBe(0)

    await wrapper.setProps({status: 'processing'})
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.width).toBe(50)

    await wrapper.setProps({status: 'processed'})
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.width).toBe(100)
  })
})
