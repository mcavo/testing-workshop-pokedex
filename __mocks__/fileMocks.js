const path = require('path');

// Mocks every media file to return its filename to test that
// the correct images are loaded for components
module.exports = {
  process: (_, filename) => `module.exports = '${JSON.stringify(path.basename(filename))}';`
};
