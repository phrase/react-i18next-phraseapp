import React from 'react';
import PhraseAppInitializer from './initializer';
import renderer from 'react-test-renderer'

test('loads the In-Context Editor JS if PhraseApp is enabled', () => {
  const config = {};

  window.PHRASEAPP_ENABLED = false;
  var component = renderer.create(
    <PhraseAppInitializer phraseappConfig={config} />
  )
  expect(document.getElementsByTagName('script').length).toBe(0);

  window.PHRASEAPP_ENABLED = true;
  component = renderer.create(
    <PhraseAppInitializer phraseappConfig={config} />
  )
  expect(document.getElementsByTagName('script')[0].src)
    .toMatch(/https:\/\/phraseapp.com\/assets\/in-context-editor\/2.0\/app.js\?[\d]/);
})
