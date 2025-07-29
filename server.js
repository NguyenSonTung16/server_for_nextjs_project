const jsonServer = require('json-server');
const path = require('path');
const express = require('express'); // ✅ Thêm express
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// ✅ Phục vụ file tĩnh từ thư mục Images
server.use('/Images', express.static(path.join(__dirname, 'Images')));

// Sử dụng middleware mặc định
server.use(middlewares);

// Gắn router (các route API)
server.use(router);

// Khởi chạy server
server.listen(8000, () => {
  console.log('JSON Server đang chạy tại http://localhost:8000');
});
