const models = require('../models')
async function createUser (req, res, next) {
    try {
        const user = await models.User1.create(req.body)
        res.status(200).json({
            user
        })
    } catch (error) {
        res.status(404),json({error})
    }
}
async function updateUser (req, res, next) {
    try {
        const user = await models.User1.update(req.body, {
            where: {
                id: req.params.userId
            }
        })
    } catch (error) {
        next(error)
    }
}
async function getUsers (req, res, next) {
    try{
    const users = await models.User1.findAll({})
    res.status(200).json({
        users
    })
   }catch(error){
       next(error)
   }   
}
async function getUserProject(req,res,next)
{
const query=await models.User1.findAll({
    include:[{
        model:models.Project},
      
    ]
})
res.status(200).json({
    query
})
}


async function getUserDetails (req, res, next) {
    try{
    const user = await models.User1.findOne({
        where: {
            id: req.params.userId
        }
    })
    res.status(200).json({
        user
    })}
    catch(error){
        next(error)
    }
}
async function deleteUser (req, res, next) {
    try{
    const deletedUser = await models.User1.destroy({
        where: {
            id: req.params.userId
        }
    })
    res.status(200).json({
        deletedUser
    })}
    catch(error)
    {
        next(error)
    }
}


async function queryUser (req, res, next) {
    try {
           const user = await models.User1.findAll( {
            include: [
                { model: models.Role,
                    where:{id:req.params.userId}
                }]
            });
            res.status(200).json({
                user
            })

           
    } catch (error) {
        next(error)
    }
}


async function getdelUsers (req, res, next) {
    const users = await models.User1.findAll({where:{deletedUsers:true}})
    res.status(200).json({
        users
    })
}


async function deleteBoolUser (req, res, next) {
    const deletedUser = await models.User1.update({'deletedUsers':true},{
        where: {
            id: req.params.userId
        }
    })
    res.status(200).json({
        deletedUser
    })
}



module.exports = {
    createUser,
    updateUser,
    getUserDetails,
    getUsers,
    deleteUser,
    queryUser,
    getUserProject,
    deleteBoolUser ,
    getdelUsers 
}