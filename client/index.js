// https://medium.com/beadlist/tutorial-using-loopback-4-together-with-next-js-on-one-heroku-instance-306dd76d02a6
const express = require('express')
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';

module.exports = async function({
  beforeNext = () => {},
  dir = '.'
} = {}) {
  const app = next({ dev, dir });
  const handle = app.getRequestHandler();
  const server = express();

  await app.prepare()
  await beforeNext(server)

  server.use(express.static(`${dir}/static`));

  server.get('/post/:slug', (req, res) => {
    return app.render(req, res, '/post', { slug: req.params.slug });
  });

  server.get('*', handle);

  server.listen(port, err => {
    if (err) {
      throw err;
    }

    console.log(`> Ready on http://localhost:${port}`);
  });
};
