import React from 'react';

import LanguageContext from '../contexts/LanguageContext';

class Name extends React.Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context.language === 'english' ? 'Name' :
                 this.context.language ===  'bengali' ? 'নাম' :
                 this.context.language ===  'botswana' ? 'Leina' :
                 this.context.language ===  'german' ? 'Name' :
                 this.context.language ===  'cantonese' ? '提交' :
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
