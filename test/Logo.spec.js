import { mount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader.vue'

describe('App Header', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
