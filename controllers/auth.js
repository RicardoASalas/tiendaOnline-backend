const { User } = require('../models');
const { isValidPassword } = require('../services/validations');
const {
  hashPassword,
  comparePassword,
  createJWT
} = require('../services/authorization');

async function registerController(req, res, next) {
  try {
    console.log(req.body)

    isValidPassword(req.body.password);
    req.body.password = await hashPassword(req.body.password);
    const user = await User.create(req.body);
    res.status(200).json({
      message: 'register done',
      user: user,
    });
  } catch (error) {
    console.log(error);

    if (error.message === 'invalidPasswordError') {
      console.log("invalid password")
      return res.status(400).json({
        message: 'invalid password',
        error: error,
      });
    }
    if (error.name === 'SequelizeUniqueConstraintError') {
      console.log("name already exists")
      return res.status(400).json({
        message: 'register invalid',
        error: error.errors[0].message,
      });
    }
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({
        message: 'register invalid',
        error: error.errors[0].message,
      });
    }
    res.status(500).json({
      message: 'register not done',
      error: error,
    });
  }
}

async function loginController(req, res, next) {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
    });
    if (!user) throw new Error('no user');
    const isValidPassword = await comparePassword(
      req.body.password,
      user.password,
    );
    if (!isValidPassword) throw new Error('no valid password');

    const data = {
      username: user.username,
      email: user.email,
      id: user.id,
    };
    user.token = await createJWT(data);
    await  user.save();


    res.json({
      message: 'valid login',
      user: data,
      token: user.token
    });
  } catch (error) {
      console.error(error);

    res.status(401).json({
      message: 'login invalid',
    });
  }
}

async function logoutController(req, res, next) {
  try {
       const user = await User.findByPk(req.user.id);
        user.token = null;
       await user.save();
       res.json({message:'logout done'});
  } catch (error) {
      console.log('error', error)
      res.status(500).json({message: 'ups'})
  }
}

async function profileController(req, res, next) {
  try {
 
    const user = await User.findByPk(req.user.id);

    res.status(200).send(user);
} catch (err) {
    console.log(err);

}
}

module.exports = {
  registerController,
  loginController,
  logoutController,
  profileController
};
