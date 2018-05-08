// Heroku link: https://powerful-ravine-40272.herokuapp.com/ (Note that Frida has to update it - use nodemon to test)
const express = require('express');
const passport = require('passport');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.landing);
router.get('/home', controller.home);
router.get('/login', controller.login);
router.get('/create-account', controller.create_account);

router.get('/search/', controller.search);
router.get('/issue/:id', controller.issue);
router.get('/comments/:id', controller.loadContributions); // TODO temporary
router.get('/opportunity/:id', controller.opportunity);

router.get('/opportunities', controller.loadOpportunities);
router.get('/about', controller.loadAbout);
router.get('/random', controller.random);
router.get('/editor-application', controller.editorApplication);

router.get('/new-issue', controller.new_issue); // TODO use .post as per login
router.get('/new-contribution', controller.new_contribution);
router.get('/new-user', controller.new_user);
router.get('/new-opportunity', controller.new_opportunity);

/* Permission based option - only for Editors*/
router.get('/create-article', controller.createArticle);
router.get('/create-opportunity', controller.createOpportunity);

// For use in database setup only
router.get('/reset', controller.resetDB);
/*router.get('/reset-issues', controller.resetIssues);
router.get('/reset-opportunities', controller.resetOpportunities);*/

// TODO Current
router.post('/login', passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login'
    // 'req.user' contains the authenticated user.
}));
router.get('/logout', controller.logout);
// router.post('/logout' redirect to...)

module.exports = router;