import React from "react";

class Lifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "Jordan Belfort",
    };
    console.log("In Constructor");
  }

  //   return a Boolean value that specifies whether React should continue with the rendering or not.
  shouldComponentUpdate() {
    return true;
  }

  getData() {
    setTimeout(() => {
      console.log("Our data is fetched");
      this.setState({
        data: "Hello WallStreet",
      });
    }, 1000);
  }

  //   this method is called right before rendering the element(s) in the DOM.
  //   This is the first method that is called when a component gets updated.
  //   static getDerivedStateFromProps(props, state) {
  //     console.log("getDerivedStateFromProps");
  //     return { data: props.favcolor };
  //   }

  //   after all the elements of the page is rendered correctly, this method is called
  componentDidMount() {
    console.log("In ComponentDidMount");
    this.getData();
  }

  //   Use this method to find out what the state object looked like before the update
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("In getSnapshotBeforeUpdate");
    return <div>{prevState.favoritecolor}</div>;
  }
  //   This method is called after the component is updated in the DOM.
  componentDidUpdate() {
    console.log("In componentDidUpdate");
    return <div>{this.state.data}</div>;
  }

  //   The componentWillUnmount method is called when the component is about to be removed from the DOM.
  delHeader = () => {
    this.setState({ show: false });
  };

  //   the method that actually outputs the HTML to the DOM.
  render() {
    console.log("In Render ", this.state.data);
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    }
    return (
      <div>
        {this.state.data}
        {myheader}
        <br />
        <button type="button" onClick={this.delHeader}>
          Delete Header
        </button>
      </div>
    );
  }
}

class Child extends React.Component {
  //   The componentWillUnmount method is called when the component is about to be removed from the DOM.
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return <h1>Hello World!</h1>;
  }
}

export default Lifecycle;
