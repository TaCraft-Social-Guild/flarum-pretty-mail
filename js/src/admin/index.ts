import app from 'flarum/admin/app';

export { default as extend } from './extend';

app.initializers.add('tacraft-sociality-pretty-mail', () => {
  console.log('[tacraft-sociality/flarum-pretty-mail] Hello, admin!');
});
