var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
    req.session.quizzes = undefined;
    req.session.score = undefined;
    res.render('index');
});

// Pagina de creditos
router.get('/author', function(req, res, next) {
    req.session.quizzes = undefined;
    req.session.score = undefined;
    res.render('author');
});

// Autoload de rutas que usen :quizId
router.param('quizId', quizController.load);


// Definición de rutas de /quizzes
router.get('/quizzes',                     quizController.index);
router.get('/quizzes/:quizId(\\d+)',       quizController.show);
router.get('/quizzes/new',                 quizController.new);
router.post('/quizzes',                    quizController.create);
router.get('/quizzes/:quizId(\\d+)/edit',  quizController.edit);
router.put('/quizzes/:quizId(\\d+)',       quizController.update);
router.delete('/quizzes/:quizId(\\d+)',    quizController.destroy);

router.get('/quizzes/:quizId(\\d+)/play',  quizController.play);
router.get('/quizzes/:quizId(\\d+)/check', quizController.check);

// Preguntas aleatorias
router.get('/quizzes/randomplay',         quizController.randomplay);
router.get('/quizzes/randomcheck/:quizId(\\d+)',         quizController.randomcheck);


// Pagina de ayuda
router.get('/help', function(req, res, next) {
    req.session.quizzes = undefined;
    req.session.score = undefined;
    res.render('help');
});

module.exports = router;