const core = require('@actions/core');
const client = require('tiki-client');

const url = 'https://tiki-builder.dalsgaard.now.sh/api';

(async () => {
  try {
    await client.build(url);
  } catch (error) {
    core.setFailed(error.message);
  }
})();
