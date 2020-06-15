import React from 'react';

import Client from './Client';
import LanguageContext from '../contexts/LanguageContext';

class App extends React.Component {
  state = { language: 'english'};

  onLanguageChange = (language) => {
    this.setState({ language })
  };

  render() {
    return (
      <div className="ui container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5em'}}>
        <div className="wrapper">
          <h4>Choose Your Language:</h4>
          <i className="flag us" onClick={()=> this.onLanguageChange('english')} style={{marginRight: '1.5em', cursor: 'pointer'}} />
          <i className="flag bd" onClick={()=> this.onLanguageChange('bengali')} style={{marginRight: '1.5em', cursor: 'pointer'}}  />
          <i className="flag bw" onClick={()=> this.onLanguageChange('botswana')} style={{marginRight: '1.5em', cursor: 'pointer'}}  />
          <i className="flag de" onClick={()=> this.onLanguageChange('german')} style={{marginRight: '1.5em', cursor: 'pointer'}}  />
          <i className="flag hk" onClick={()=> this.onLanguageChange('cantonese')} style={{marginRight: '1.5em', cursor: 'pointer'}}  />
        </div>

        <LanguageContext.Provider value={this.state.language}>
          <Client />
        </LanguageContext.Provider>
      </div>
    )
  }
}

export default App;
