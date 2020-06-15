import React from 'react';

import LanguageContext from '../contexts/LanguageContext';

class SubmitBtn extends React.Component {
  renderSubmit(value) {
    return value === 'english' ? 'Submit' :
           value === 'bengali' ? 'জমা দিন' :
           value === 'botswana' ? 'Romela' :
           value === 'german' ? 'Einreichen' :
           value === 'cantonese' ? '名稱' :
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
