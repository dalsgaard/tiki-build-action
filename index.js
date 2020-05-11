const core = require('@actions/core');
const client = require('tiki-client');

const url = 'https://tiki-builder.dalsgaard.now.sh/api';

(async () => {
  try {
    const fullName = core.getInput('name');
    const name = fullName.split('/').pop();
    await client.build(name, url, '.', './project');
  } catch (error) {
    core.setFailed(error.message);
  }
})();
