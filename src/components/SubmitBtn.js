import React from 'react';

import LanguageContext from '../contexts/LanguageContext';

class SubmitBtn extends React.Component {
  renderSubmit(language) {
    return language === 'english' ? 'Submit' :
           language === 'bengali' ? 'জমা দিন' :
           language === 'botswana' ? 'Romela' :
           language === 'german' ? 'Einreichen' :
           language === 'cantonese' ? '名稱' :
           'Submit'
  }

  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          { ({ language }) => this.renderSubmit(language) }
        </LanguageContext.Consumer>
      </button>
    )
  }
}

export default SubmitBtn;
