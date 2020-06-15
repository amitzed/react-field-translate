import React from 'react';

import LanguageContext from '../contexts/LanguageContext';

class Name extends React.Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Name' :
                 this.context ===  'bengali' ? 'নাম' :
                 this.context ===  'botswana' ? 'Leina' :
                 this.context ===  'german' ? 'Name' :
                 this.context ===  'cantonese' ? '提交' :
                                  'Name';

    return (
      <div className="ui field">
        <h4><label>{text}:</label></h4>
        <input style={{width: '100%'}} />
      </div>
    )
  }
}

export default Name;
