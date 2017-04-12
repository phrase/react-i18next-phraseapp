import hoistStatics from 'hoist-non-react-statics'
import React, {PropTypes} from 'react'
import {translate as translateI18next} from 'react-i18next'

export default function translate(...args) {
  if (!window.PHRASEAPP_ENABLED) {
    return translateI18next(...args)
  } else {
    return function (WrappedComponent) {
      class TranslateWithPhraseApp extends React.Component {
        constructor(props, context) {
          super(props, context);
          this.phraseappConfig = context.phraseappConfig;
        }

        decoratedKeyName(key) {
          var prefix = this.phraseappConfig.prefix ? this.phraseappConfig.prefix : "[[__";
          var suffix = this.phraseappConfig.suffix ? this.phraseappConfig.suffix : "__]]";

          return `${prefix}phrase_${key}${suffix}`
        }

        render () {
          return (
            <WrappedComponent {...this.props} t={(key) => this.decoratedKeyName(key)}/>
          )
        }
      }

      TranslateWithPhraseApp.contextTypes = {
        phraseappConfig: PropTypes.object.isRequired
      };

      return hoistStatics(TranslateWithPhraseApp, WrappedComponent)
    }
  }
}
