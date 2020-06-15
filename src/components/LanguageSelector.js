import React from 'react';

import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div className="wrapper">
        <h4>Choose Your Language:</h4>
        <i className="flag us" onClick={()=> this.context.onLanguageChange('english')} style={{marginRight: '1.5em', cursor: 'pointer'}} />
        <i className="flag bd" onClick={()=> this.context.onLanguageChange('bengali')} style={{marginRight: '1.5em', cursor: 'pointer'}}  />
        <i className="flag bw" onClick={()=> this.context.onLanguageChange('botswana')} style={{marginRight: '1.5em', cursor: 'pointer'}}  />
        <i className="flag de" onClick={()=> this.context.onLanguageChange('german')} style={{marginRight: '1.5em', cursor: 'pointer'}}  />
        <i className="flag hk" onClick={()=> this.context.onLanguageChange('cantonese')} style={{marginRight: '1.5em', cursor: 'pointer'}}  />
      </div>
    )
  }
}

export default LanguageSelector;
