// React components
import React from 'react';

class Test extends React.Component {
  render() {
    return(
      <div>This is a good test</div>
    )
  }
}

React.render(
  <Test />
  , document.body
);