const bll = require('../bll/bll');
const router = require('express').Router();

router.use((req, res, next) => {
    next();
});

router.post('/add', (req, res) => {
    var myModule = bll.module();
    myModule.mapping.add(req, res);
});

router.post('/get', (req, res) => {
    var myModule = bll.module();
    myModule.mapping.get(req, res);
});

router.post('/list', (req, res) => {
    var myModule = bll.module();
    myModule.mapping.list(req, res);
});

router.post('/update', (req, res) => {
    var myModule = bll.module();
    myModule.mapping.update(req, res);
});

router.post('/delete', (req, res) => {
    var myModule = bll.module();
    myModule.mapping.delete(req, res);
});

module.exports = router;