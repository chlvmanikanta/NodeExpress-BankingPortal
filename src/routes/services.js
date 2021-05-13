const express = require("express");

const router = express.Router();
const { accounts, users, writeJSON } = require('../data')


router.get('/transfer', function (req, res) {
    res.render('transfer', { user: users[0] })
});
router.post('/transfer', function (req, res) {
    let { from, to } = req.body;
    let amount = parseInt(req.body.amount);
    console.log(accounts.savings.balance)
    accounts[from].balance -= amount;
    accounts[to].balance += amount;
    writeJSON();
    res.render('transfer', { message: "Transfer Completed" })
});

router.get('/payment', function (req, res) {
    res.render('payment', { account: accounts.credit })
});
router.post('/payment', function (req, res) {
    let amount = parseInt(req.body.amount);
    console.log(accounts.savings.balance)
    accounts.credit.balance -= amount;
    accounts.credit.available += amount;
    writeJSON();
    res.render('transfer', { message: "Transfer Completed" })
});

module.exports =  router 