import { mount, createLocalVue } from '@vue/test-utils';
import Start from '@/components/Start.vue';
import Vuetify from 'vuetify';

describe('Start.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuetify);

  const msg = 'new message';
  const wrapper = mount(Start, {
    localVue,
    propsData: { msg },
  });
  it('renders props.msg when passed', () => {
    expect(wrapper.text()).toMatch(msg);
  });
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true);
  });
});
