const {findUsersBy, insertUser, updateUserBy, deleteUserBy} = require('../services/user.service');
const getAllUsers = (req, res) => {
    const result = findUsersBy();
    return res.json({
        msg: 'success',
        data: result
    });
}

const getUsersBy = (req, res) => {
    const {body} = req;
    let result = null;
    if (body) {
        const {filters} = body;
        if (filters) {
            result = findUsersBy({filters});
        }
    }
    return res.json({
        msg: 'success',
        data: result
    });
}

const updateUserById = (req, res) => {
    const { userId } = req.params;
    const { body } = req;
    if (!userId || !body) {
        return res.status(400).json({
            msg: 'fail, invalid request...'
        });
    }
    const { uname, fname, gender } = body;
    if (!uname || !fname || gender === null) {
        return res.status(400).json({
            msg: 'fail, not enough info...'
        });
    }
    const result = updateUserBy(userId, { uname, fname, gender });
    if (!result) {
        return res.status(400).json({
            msg: 'fail, user not found...'
        });
    }
    return res.json({
        msg: 'update successfully!'
    });
};

const deleteUserById = (req, res) => {
    const { userId } = req.params;
    if (!userId) {
        return res.status(400).json({
            msg: 'fail, invalid request...'
        });
    }
    const result = deleteUserBy(userId);
    if (!result) {
        return res.status(400).json({
            msg: 'fail, user not found...'
        });
    }
    return res.json({
        msg: 'delete successfully!'
    });
};
const createAnUser = (req, res) => {
    const {body} = req;
    let result;
    if (body) {
        const {uname, fname, gender} = body;
        if (!uname || !fname || gender === null) {
            return res.status(400).json({
                msg: 'fail, not enough info...'
            })
        }
        result = insertUser({uname, fname, gender});
        if (!result) {
            return res.status(400).json({
                msg: 'fail, user existed!'
            })
        } 
    }
    return res.json({
        msg: 'insert successfully!'
    })
}


const createUsers = (req, res) => {
    const {body} = req;
    let result = {
        success: [],
        fail: []
    }
    if (body) {
        const {users=[]} = body;
        users.map(user => {
            const {uname, fname, gender} = user;
            if (!uname || !fname || gender === null) {
                result.fail.push(user)
                return
            }
            let _result = insertUser({uname, fname, gender});
            if (!_result) {
                result.fail.push(user)
                return
            } 
            result.success.push(user)
        })
    }
    return res.json({
        data: result
    })
}
module.exports = {
    getAllUsers, 
    getUsersBy,
    createAnUser, 
    createUsers,
    updateUserById,
    deleteUserById
}