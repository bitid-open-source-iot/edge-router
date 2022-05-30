const bll = require('../bll/bll');
const router = require('express').Router();

router.use((req, res, next) => {
    next();
});

router.post('/update', (req, res) => {
    var myModule = bll.module();
    myModule.settings.update(req, res);
});

router.post('/list', (req, res) => {
    var myModule = bll.module();
    myModule.settings.list(req, res);
});

router.post('/command', (req, res) => {
    var myModule = bll.module();
    myModule.settings.command(req, res);
});

module.exports = router;