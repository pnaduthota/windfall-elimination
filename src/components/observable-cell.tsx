import React from "react";
import { ObservableContext } from "./observable-runtime";

export default class ObservableCell extends React.Component {
  /* Parent-Child context-sharing relationship between this and observable-runtime */
  static contextType = ObservableContext;

  constructor(props, context) {
    super(props, context);
    this.defaultRef = React.createRef();
  }

  componentDidMount() {
    var main = this.context.main
    console.log(main['_scope'])
    //Gatsby API, imports the observable cell from the observable module namepsace passes it to Inspector to place in DOM
    if (this.props.customObserver) {
      main.variable(this.props.customObserver()).define([this.props.cellname], widget => widget)
    } else {
      main.variable(this.context.observer(this.defaultRef.current)).define([this.props.cellname], widget => widget)
    }
  }

  componentWillUnmount() {
    this.context.resetHTML(this.props.cellname, this.defaultRef.current);
  }

  render() {
    return <div id={this.props.cellname} ref={this.defaultRef} />;
  }
}
