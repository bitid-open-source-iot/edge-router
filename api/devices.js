const bll = require('../bll/bll');
const router = require('express').Router();

router.use((req, res, next) => {
    next();
});

router.post('/add', (req, res) => {
    var myModule = bll.module();
    myModule.devices.add(req, res);
});

router.post('/get', (req, res) => {
    var myModule = bll.module();
    myModule.devices.get(req, res);
});

router.post('/list', (req, res) => {
    var myModule = bll.module();
    myModule.devices.list(req, res);
});

router.post('/update', (req, res) => {
    var myModule = bll.module();
    myModule.devices.update(req, res);
});

router.post('/delete', (req, res) => {
    var myModule = bll.module();
    myModule.devices.delete(req, res);
});

module.exports = router;