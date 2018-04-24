module.exports = {
    signUp: async (req, res, next) => {
        //need email & password from user

        console.log('usersController.signUp() called!');
    },

    signIn: async (req, res, next) => {
        //generate token
        console.log('usersController.signIn() called!');
    },

    secret: async (req, res, next) => {
        //no validation in a get request
        console.log('usersController.secret() called!');
    }
}