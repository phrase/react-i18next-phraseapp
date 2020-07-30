# react-i18next-phraseapp

![Build status](https://github.com/phrase/react-i18next-phraseapp/workflows/Test/badge.svg)

This library lets you integrate the [PhraseApp In-Context Editor](https://help.phraseapp.com/translate-website-and-app-content/use-in-context-editor-to-translate/translate-directly-on-your-website) easily with your React apps localized with [react-i18next](https://github.com/i18next/react-i18next).

## Installation

Install the package via npm:

    $ npm install react-i18next-phraseapp

Then, replace all calls to `translate()` with the `translate` function provided by `react-i18next-phraseapp`:

    - import { withNamespaces } from 'react-i18next';
    + import { withNamespaces } from 'react-i18next-phraseapp';

Now, wrap your application with the `PhraseAppProvider`:

```js
import { I18nextProvider } from 'react-i18next';
import { PhraseAppProvider } from 'react-i18next-phraseapp';

ReactDOM.render(
  <I18nextProvider i18n={ i18n }>
    <PhraseAppProvider config={ window.PHRASEAPP_CONFIG }>
      <MyApp />
    </PhraseAppProvider>
  </I18nextProvider>,
  document.getElementById('root')
);
```

As the last step, provide the PhraseApp configuration **before** your app is mounted:

```js
 <div id="root"></div>
 <script>
   window.PHRASEAPP_ENABLED = true;
   window.PHRASEAPP_CONFIG = {
     projectId: "<project-id>",
     prefix: "[[__",
     suffix: "__]]",
     fullReparse: true
   };
 </script>
 <script src="bundle.js"></script>
```

Done.

## Demo

You can find a demo project on [GitHub](https://github.com/phrase/react-i18next-phraseapp-demo).

## Test

Run tests via jest:

    $ npm test

## Build

    $ npm run build

## Acknowledgements

Thank you to [choffmeister](https://github.com/choffmeister) for pointing us in the right direction.
