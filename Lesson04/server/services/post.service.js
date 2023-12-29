const postData = require('./../utils/mock/post.mock')

const findPostsBy = (params={}) => {
    const {filters} = params;
    let findPosts = postData ? postData : [];
    if (filters) {
        const {uname, fname, gender} = filters;
        if (uname) {
            findPosts = findPosts.filter((post) => post.uname === uname)
        }
        if (fname) {
            findPosts = findPosts.filter((post) => post.fname === fname)
        }
        if (gender) {
            findPosts = findPosts.filter((post) => post.gender === gender)
        }
    }
    return findPosts;
} 

const insertPost = (params={}) => {
    const {uname, fname, gender} = params;
    const findPost = findPostsBy({
        filters: {uname}
    })
    if (findPost && findPost.length > 0) {
        return 0; // fail (existed)
    }
    postData.push({uname, fname, gender});
    return 1;
}

const updatePostBy = (params, id) => {
    const { uname, fname, gender } = params;
    const findPostIndex = postData.findIndex((post) => post.id === id);
    if (findPostIndex !== -1) {
        postData[findPostIndex] = { id, uname, fname, gender };
        return 1; // success
    } else {
        return 0; // fail (not found)
    }
};

const deletePostBy = (params, id) => {
    const findPostIndex = postData.findIndex((post) => post.id === id);
    if (findPostIndex !== -1) {
        postData.splice(findPostIndex, 1);
        return 1; // success
    } else {
        return 0; // fail (not found)
    }
};


module.exports = {
    insertPost,
    findPostsBy,
    updatePostBy,
    deletePostBy
}