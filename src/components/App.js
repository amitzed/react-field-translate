import React from 'react';

class App extends React.Component {
  state = { language: 'english'};

  render() {
    return (
      <div className="ui container">
        <div>
          <i className="flag us" />
          <i className="flag bd" />
          <i className="flag bw" />
          <i className="flag de" />
          <i className="flag hk" />
        </div>
      </div>
    )
  }
}

export default App;
