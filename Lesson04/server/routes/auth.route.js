const express = require('express')
const userData = require('../utils/mock/user.mock')
const router = express.Router();

// sign up

// uname: 'vivt',
// fname: 'Vo Tuong Vi',
// gender: 0,
// rode:'admin',
// pwd: '123'

router.post('/signup', (req,res) => {
    const {uname, fname, gender=0, role='guest', pwd} = rep.body || {};
    //1. validation request body
    if (!uname || !fname ||!pwd){
        return res.status(400).json({
            msg: 'Missing required keys'
        })
    }
    //2. check duplication username
    const existingUser = userData.find( u => u.uname === uname)
    if (existingUser){
        return res.status(400).json({
            msg:'Username is already taken'
        })
    }
    //3. create new user
    const newUser = {uname, fname, gender, role, pwd}
})
module.exports = router;