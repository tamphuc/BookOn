const express = require('express');


const router = express.Router();

// get la du lieu nam trong duong dan
router.get('/', (req, res) => res.send("Get profile"));

// post la du lieu nam trong goi tin
router.post('/email', (req, res) => res.send("Edit email"));

router.post('/username', (req, res) => res.send("Edit username"));

router.post('/password', (req, res) => res.send("Edit password"));

router.post('/name', (req, res) => res.send("Edit name"));

router.post('/image', (req, res) => res.send("Edit image"));

router.post('/about', (req, res) => res.send("Edit about"));


module.exports = router;