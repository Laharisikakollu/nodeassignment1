const Create = require('../models/user');

const createUser = async (req, res) => {
    try {
        const user = await Create.query().insert({
           
            firstName:req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName,
            phno: req.body.phno,
            rollid: req.body.rollid,
        });
        res.json({
            success: true,
            user,
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = exports = createUser;