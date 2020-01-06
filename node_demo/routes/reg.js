var express = require('express');
var router = express.Router();
var user = require('../controller/user')

/* GET users listing. */
router.get('/reg', function(req, res, next) {
  // res.send('zhuce');
  let {us,ps}= req.query
  console.log(us,ps)
  user.add(us,ps)
  .then((data)=>{
    console.log(data)
  })
  .catch((err)=>{
    console.log(err)
  })
});

module.exports = router;
