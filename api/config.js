const bll = require('../bll/bll');
const router = require('express').Router();

router.use((req, res, next) => {
    next();
});

router.post('/get', (req, res) => {
    var myModule = bll.module();
    myModule.config.get(req, res);
});

router.post('/import', (req, res) => {
    var myModule = bll.module();
    myModule.config.import(req, res);
});

router.post('/export', (req, res) => {
    var myModule = bll.module();
    myModule.config.export(req, res);
});

module.exports = router;