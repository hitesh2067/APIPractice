var express = require('express');
var router = express.Router();
var service = require('../services/users');
/* GET users listing. */
router.get('/', async (req, res, next) => {
  console.log('DEBUG:','i am in get');
  var data = await service.getUser();
  return await res.send(data);
});

router.post('/', async (req ,res) => {
  console.log('DEBUG:','i am in post');
  const { name , email , password , phone } = req.body;
  const user = { name, email, password, phone };
  var data  =  await service.postUser(user);
  return await res.send(data);
});

router.delete('/:id', async (req ,res) => {
  console.log('DEBUG:','i am in delete');
  var data  =  await service.deleteUser(req.params.id);
  return await res.send(data);
})

router.put('/:id', async (req ,res) => {
  console.log('DEBUG:','i am in update');
  const { name , email , password , phone } = req.body;
  const user = { name, email, password, phone };
  var data  =  await service.updateUser(req.params.id, user)
  
  return await res.send(data);
})

module.exports = router;
