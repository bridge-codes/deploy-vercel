import { handler, initBridge, method } from 'bridge';
import express from 'express';
const port = 8080;

const app = express();

const helloHandler = handler({
  resolve: () => `Hello you!`
})

const routes = {
  hello: method({ GET: helloHandler })
};

app.use('/api', initBridge({ routes }).expressMiddleware());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
