const userData = require('./../utils/mock/user.mock')

const findUsersBy = (params={}) => {
    const {filters} = params;
    let findUsers = userData ? userData : [];
    if (filters) {
        const {uname, fname, gender} = filters;
       
    }
    return findUsers;
} 

const insertUser = (params={}) => {
    const {uname, fname, gender} = params;
    
    return 1;
}

const updateUserBy = (params, id) => {

}

const deleteUserBy = (params, id) => {

}


module.exports = {
    insertUser,
    findUsersBy,
    updateUserBy,
    deleteUserBy
}