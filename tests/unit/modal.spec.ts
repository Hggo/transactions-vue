import { shallowMount } from '@vue/test-utils'
import Modal from '@/components/shared/Modal.vue'

describe('Modal component tests', () => {
  it('Should render the component and show, hide it', async () => {
    const wrapper = shallowMount(Modal, {
      propsData: { show: false }
    })
    expect(wrapper.isVisible()).toBe(false)

    await wrapper.setProps({ show: true })
    expect(wrapper.isVisible()).toBe(true)

    await wrapper.find('#close-button').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('close')).toBeTruthy()
  })
})
