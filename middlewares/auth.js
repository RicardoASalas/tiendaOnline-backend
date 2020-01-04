const { User } = require('../models');

const {
  decodeJWT,
} = require('../services/authorization');

async function authorizationMiddleware(req, res, next) {
  try {
    const jwt = req.headers.authorization.replace('Bearer ','');
    const user = await User.findOne({where: {token: jwt}});

    if(!user) throw new Error('no user found');

    req.user = await decodeJWT(jwt);
    req.token = jwt;
    next()


  } catch (error) {
      console.log(error);


        res.status(401).json({message: 'invalid jwt'})
  }
}

module.exports = {
  authorizationMiddleware,
};
