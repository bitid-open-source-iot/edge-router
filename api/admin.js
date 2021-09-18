const bll = require('../bll/bll');
const router = require('express').Router();

router.use((req, res, next) => {
    next();
});

router.put('/authenticate', (req, res) => {
    var myModule = bll.module();
    myModule.admin.authenticate(req, res);
});

router.post('/change-email', (req, res) => {
    var myModule = bll.module();
    myModule.admin.change.email(req, res);
});

router.post('/change-password', (req, res) => {
    var myModule = bll.module();
    myModule.admin.change.password(req, res);
});

module.exports = router;