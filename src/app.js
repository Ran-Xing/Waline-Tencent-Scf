const { tmpdir } = require('node:os');
const path = require('node:path');
const Application = require('thinkjs');

const app = new Application({
  ROOT_PATH: __dirname,
  APP_PATH: path.join(__dirname, 'node_modules/@waline/vercel/src'),
  VIEW_PATH: path.join(__dirname, 'node_modules/@waline/vercel/view'),
  RUNTIME_PATH: path.join(tmpdir(), 'waline_runtime'),
  proxy: false,
  env: 'production',
});


app.run()
