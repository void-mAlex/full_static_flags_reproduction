import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class TestComponent extends Component {
  @tracked itworks = false;
  onEnteringIntersection = () => {
    console.log('intersected');
    this.itworks = true;
  };
  onExitingIntersection = () => {
    console.log('not intersected');
  };
}
