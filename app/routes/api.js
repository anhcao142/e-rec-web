var express = require('express');
var router = express.Router();
var api = require('./api/index');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/events' , api.events.add);
router.delete('/events/:id', api.events.delById);
router.delete('/events', api.events.del);

router.post('/users', api.users.add);
router.delete('/users/:id', api.users.delById);
router.delete('/users', api.users.del);

router.post('/user_event', api.user_event.add);
router.delete('/user_event', api.user_event.del);

router.get('/rec/:id', api.rec.top10);

module.exports = router;