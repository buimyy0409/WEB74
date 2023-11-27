const express = require('express')
const router = express.Router();

const MOCK_DATA = [
    {
        title: 'Cm',
        des: 'Cm'
    },
    {
        title: 'Cm 1',
        des: 'Cm 1'
    }
]

router.get('/all', (req, res) => {
    return res.json(MOCK_DATA)
})


router.post('/create', (req, res) => {
    return res.json('Create cmt')
})

module.exports = router;