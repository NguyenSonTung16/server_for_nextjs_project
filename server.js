const jsonServer = require('json-server');
const express = require('express');
const path = require('path');

const server = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// ✅ Phục vụ file tĩnh từ thư mục /Images
server.use('/Images', express.static(path.join(__dirname, 'Images')));

// ✅ Middleware mặc định + router
server.use(middlewares);
server.use(router);

// ✅ Lắng nghe tại port 8000
server.listen(8000, () => {
  console.log('JSON Server đang chạy tại http://localhost:8000');
});
