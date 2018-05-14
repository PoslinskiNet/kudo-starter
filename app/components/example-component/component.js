import ReactComponent from 'kudo-starter/components/base/react-component';

const Greeter = ({name}) => <h2>Hello from {name}!!!</h2>;

export default ReactComponent.extend({
  didInsertElement() {
    this._super(...arguments);
    this.reactRender(<Greeter name="React"/>);
  }
});
