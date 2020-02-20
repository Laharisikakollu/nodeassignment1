const express = require('express');
const router = express.Router(); // initialize router
const {
    createUser,deleteUser,getUserDetails,getUsers,updateUser,queryUser,getUserProject,deleteBoolUser ,
    getdelUsers
} = require('./userHandler')
router.get('/users', getUsers)
router.get('/query/:userId', queryUser)
router.get('/project', getUserProject)
router.get('/users/:userId', getUserDetails)
router.delete('/users/:userId', deleteUser)
router.post('/users', createUser)
router.put('/users/:userId', updateUser)
router.get('/del', getdelUsers)
router.delete('/del/:userId', deleteBoolUser)
//router.delete('/api',deleting);
module.exports = router;
