import * as React from 'react';
import { Component } from 'react';
import { object } from 'prop-types';

export interface PhraseAppInitializerProps { config: Object; }

export default class PhraseAppInitializer extends React.Component<PhraseAppInitializerProps, {}> {
  phraseappConfig: any;
  public static contextTypes: any;

  constructor(props: PhraseAppInitializerProps, context: any) {
    super(props, context);
    this.phraseappConfig = context.phraseappConfig;
  }

  componentDidMount() {
    if ((<any>window).PHRASEAPP_ENABLED) {
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
    return null;
  }
}

PhraseAppInitializer.contextTypes = {
  phraseappConfig: object
}
