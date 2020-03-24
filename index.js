const fs = require('fs');
const core = require('@actions/core');

try {
  const data = fs.readFileSync('foo.json', { encoding: 'utf8' });
  console.log(data);
} catch (error) {
  core.setFailed(error.message);
}
