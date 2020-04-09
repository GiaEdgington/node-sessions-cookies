const User = require('../models/user');

exports.getLogin = (req, res, next) => {
   /* const isLoggedIn = req.get('Cookie')
    .split(';')[0]
    .trim()
    .split('=')[1]; */
    //console.log(req.session);
        res.render('auth/login', {
          path: '/login',
          pageTitle: 'Login',
          isAuthenticated: false
      });
  };

  exports.getSignup = (req, res, next) => {
    res.render('auth/signup', {
      path: '/signup',
      pageTitle: 'Signup',
      isAuthenticated: false
    });
  };

  exports.postLogin = (req, res, next) => {
    User.findById('5e8cafd3676047123c195eb1')
    .then(user => {
        req.session.isLoggedIn = true;
        req.session.user = user;
        //to make sure session has been saved before redirecting
        req.session.save(err => {
            console.log(err);
            res.redirect('/');
        }); 
    })
    .catch(err => console.log(err));
};

exports.postSignup = (req, res, next) => {};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
      console.log(err);
      res.redirect('/');
  });
};