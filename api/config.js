const bll = require('../bll/bll');
const router = require('express').Router();

router.use((req, res, next) => {
    next();
});

router.post('/get', (req, res) => {
    var myModule = bll.module();
    myModule.config.add(req, res);
});

router.post('/import', (req, res) => {
    var myModule = bll.module();
    myModule.config.import(req, res);
});

router.post('/export', (req, res) => {
    var myModule = bll.module();
    myModule.config.export(req, res);
});

router.post('/update', (req, res) => {
    var myModule = bll.module();
    myModule.config.update(req, res);
});

module.exports = router;