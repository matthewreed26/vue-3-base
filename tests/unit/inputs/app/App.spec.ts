import { shallowMount } from '@vue/test-utils';
import { AppVue } from '@/inputs/app';

describe('App', () => {
  it('Should exists', () => {
    const wrapper = shallowMount(AppVue, {
      global: {
        stubs: ['router-view'],
      },
    });
    expect(wrapper.exists()).toBeTruthy();
  });
});
