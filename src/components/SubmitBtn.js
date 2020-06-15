import React from 'react';

import LanguageContext from '../contexts/LanguageContext';

class SubmitBtn extends React.Component {
  static contextType = LanguageContext;

  render() {
    // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    const text = this.context === 'english' ? 'Submit' :
                  this.context === 'bengali' ? 'জমা দিন' :
                  this.context === 'botswana' ? 'Romela' :
                  this.context === 'german' ? 'Einreichen' :
                  this.context === 'cantonese' ? '名稱' :
                                  'Submit';
    return (
      <button className="ui button primary">{text}</button>
    )
  }
}

export default SubmitBtn;
