import '../style.css';
import React from 'react';

class App extends React.Component {
  state = { language: 'english'};

  onLanguageChange = (language) => {
    this.setState({ language })
  };

  render() {
    return (
      <div className="ui container">
        <div className="wrapper">
          <i className="flag us" onClick={()=> this.onLanguageChange('english')} />
          <i className="flag bd" onClick={()=> this.onLanguageChange('bengali')}  />
          <i className="flag bw" onClick={()=> this.onLanguageChange('botswana')}  />
          <i className="flag de" onClick={()=> this.onLanguageChange('german')}  />
          <i className="flag hk" onClick={()=> this.onLanguageChange('hongkong')}  />
        </div>
      </div>
    )
  }
}

export default App;
