import React, { Component } from 'react';
import Home from 'Home';

class Main extends Component {

  // Set initial state
  constructor(props) {
		super(props);

	}

  render () {
    return (
      <div>
        <div>
          <Home />
        </div>
        {this.props.children}
      </div>
    );
  };
};

export default Main;
