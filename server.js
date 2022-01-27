const express = require('express')
const app = express()
const port = 3000
const dir = `${__dirname}/zeta_native`

const createRoute = (path) => {
  app.get(`/${path}`, (_req, _res) => {
    res.sendFile(`${dir}/${path}`);
  });
};

app.get('/', (req, res) => {
  res.sendFile(`${dir}/index.html`);
});

app.get('/zeta_loader.js', (req, res) =>  {
  res.sendFile(`${dir}/zeta_loader.js`);
});

app.get('/zeta_native.js', (req, res) =>  {
  res.sendFile(`${dir}/zeta_native.js`);
});

app.get('/zeta_native.wasm', (req, res) =>  {
  res.sendFile(`${dir}/zeta_native.wasm`);
});

app.get('/uzip.min.js', (req, res) =>  {
  res.sendFile(`${dir}/uzip.min.js`);
});

app.get('/zeta.min.js', (req, res) =>  {
  res.sendFile(`${dir}/zeta.min.js`);
});

app.get('/ZZT.zip', (req, res) =>  {
  res.sendFile(`${dir}/ZZT.zip`);
});

app.get('/burgerj.zip', (req, res) => {
  res.sendFile(`${dir}/burgerj.zip`);
});

app.get('/loading.png', (req, res) =>  {
  res.sendFile(`${dir}/loading.png`);
});

//createRoute('zeta_loader.js');
//createRoute('uzip.min.js');

app.listen(port, () => {
  console.log(`zeta server listening on port ${port}`);
})
