import Tab1Page from '@/views/Tab1Page.vue';
import { mount } from '@vue/test-utils';
import { describe, expect } from 'vitest';

describe('tab1Page.vue', () => {
  it('renders tab 1 Tab1Page', () => {
    const wrapper = mount(Tab1Page);
    expect(wrapper.text()).toMatch('Tab 1 page');
  });
});
