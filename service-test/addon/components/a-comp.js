import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class ACompComponent extends Component {
  @service('addon-only') addonOnly;
  @service('service-test-addon-only') addonOnlyTest;
  @service('service-test@addon-only') addonOnlyTest2;
  @service('service-test/addon-only') addonOnlyTest3;
  @service('ser1') ser1;
}
