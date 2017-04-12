import React, { Component, PropTypes } from 'react';

class PhraseAppInitializer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.phraseappConfig = context.phraseappConfig;
  }

  componentDidMount() {
    if (window.PHRASEAPP_ENABLED) {
      const phraseapp = document.createElement('script');
      phraseapp.type = 'text/javascript';
      phraseapp.async = true;
      phraseapp.src = ['https://', 'phraseapp.com/assets/in-context-editor/2.0/app.js?', new Date().getTime()].join('');
      var s = document.getElementsByTagName('script')[0];
      if (s != undefined) {
        s.parentNode.insertBefore(phraseapp, s);
      } else {
        document.insertBefore(phraseapp, null);
      }
    }
  }

  render() {
    return false;
  }
}

PhraseAppInitializer.contextTypes = {
  phraseappConfig: PropTypes.object
};

export default PhraseAppInitializer;
