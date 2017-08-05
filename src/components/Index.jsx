// React components
import React from 'react';

class Test extends React.Component {
  render() {

    var test = {
      a: 1,
      b: 2,
      c: 3
    };

    var newTest = {
      ...test
    };

    console.log(newTest)

    return(
      <div>This is a good test</div>
    )
  }
}

export default Test;