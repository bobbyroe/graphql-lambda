'use strict';

const app = require('./src/app.js');
app.set('port', 1337);
app.listen(app.get('port'), () => {
  const port = app.get('port');
  console.log(`GraphQL Server Running at localhost:${port}`);
});
