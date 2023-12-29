const {findPostsBy, insertPost, updatePostBy, deletePostBy} = require('../services/post.service');
const getAllPosts = (req, res) => {
    const result = findPostsBy();
    return res.json({
        msg: 'success',
        data: result
    });
}

const getPostsBy = (req, res) => {
    const {body} = req;
    let result = null;
    if (body) {
        const {filters} = body;
        if (filters) {
            result = findPostsBy({filters});
        }
    }
    return res.json({
        msg: 'success',
        data: result
    });
}

const updatePostById = (req, res) => {
    const { postId } = req.params;
    const { body } = req;
    if (!postId || !body) {
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
    const result = updatePostBy(postId, { uname, fname, gender });
    if (!result) {
        return res.status(400).json({
            msg: 'fail, post not found...'
        });
    }
    return res.json({
        msg: 'update successfully!'
    });
};

const deletePostById = (req, res) => {
    const { postId } = req.params;
    if (!postId) {
        return res.status(400).json({
            msg: 'fail, invalid request...'
        });
    }
    const result = deletePostBy(postId);
    if (!result) {
        return res.status(400).json({
            msg: 'fail, post not found...'
        });
    }
    return res.json({
        msg: 'delete successfully!'
    });
};
const createAPost = (req, res) => {
    const {body} = req;
    let result;
    if (body) {
        const {uname, fname, gender} = body;
        if (!uname || !fname || gender === null) {
            return res.status(400).json({
                msg: 'fail, not enough info...'
            })
        }
        result = insertPost({uname, fname, gender});
        if (!result) {
            return res.status(400).json({
                msg: 'fail, post existed!'
            })
        } 
    }
    return res.json({
        msg: 'insert successfully!'
    })
}


const createPosts = (req, res) => {
    const {body} = req;
    let result = {
        success: [],
        fail: []
    }
    if (body) {
        const {posts=[]} = body;
        posts.map(post => {
            const {uname, fname, gender} = post;
            if (!uname || !fname || gender === null) {
                result.fail.push(post)
                return
            }
            let _result = insertPost({uname, fname, gender});
            if (!_result) {
                result.fail.push(post)
                return
            } 
            result.success.push(post)
        })
    }
    return res.json({
        data: result
    })
}
module.exports = {
    getAllPosts, 
    getPostsBy,
    createAPost, 
    createPosts,
    updatePostById,
    deletePostById
}