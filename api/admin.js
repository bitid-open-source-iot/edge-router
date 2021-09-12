const bll = require('../bll/bll');
const router = require('express').Router();

router.use((req, res, next) => {
    next();
});

router.put('/authenticate', (req, res) => {
    var myModule = bll.module();
    myModule.admin.authenticate(req, res);
});

module.exports = router;