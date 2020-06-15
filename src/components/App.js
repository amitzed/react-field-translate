import React from 'react';

import Client from './Client';

class App extends React.Component {
  state = { language: 'english'};

  onLanguageChange = (language) => {
    this.setState({ language })
  };

  render() {
    return (
      <div className="ui container">
        <div className="wrapper">
          <h4>Choose Your Language:</h4>
          <i className="flag us" onClick={()=> this.onLanguageChange('english')} style={{marginRight: '1.5em'}} />
          <i className="flag bd" onClick={()=> this.onLanguageChange('bengali')} style={{marginRight: '1.5em'}}  />
          <i className="flag bw" onClick={()=> this.onLanguageChange('botswana')} style={{marginRight: '1.5em'}}  />
          <i className="flag de" onClick={()=> this.onLanguageChange('german')} style={{marginRight: '1.5em'}}  />
          <i className="flag hk" onClick={()=> this.onLanguageChange('cantonese')} style={{marginRight: '1.5em'}}  />
        </div>

        <Client />
      </div>
    )
  }
}

export default App;
