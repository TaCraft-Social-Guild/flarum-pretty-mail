import app from 'flarum/forum/app';

export { default as extend } from './extend';

app.initializers.add('tacraft-sociality-pretty-mail', () => {
  console.log('[tacraft-sociality/flarum-pretty-mail] Hello, forum!');
});
