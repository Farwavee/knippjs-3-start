import express from 'express';
import ViteExpress from 'vite-express';
import { createServer } from 'vite';

const app = express();
const port = 3010;

// app.use(express.static('public'));

app.get('/api', (req, res) => {
  res.json({ random: Math.random() });
});

/*
const viteServer = await createServer({
  root: process.cwd(),
  logLevel: 'error',
  server: {
    middlewareMode: true,
    watch: {
      // During tests we edit the files too fast and sometimes chokidar
      // misses change events, so enforce polling for consistency
      usePolling: true,
      interval: 1000,
    },
  },
});

app.use(viteServer.middlewares);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
*/

ViteExpress.listen(app, port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
