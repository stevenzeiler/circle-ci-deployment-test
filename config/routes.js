
module.exports = function(router, controllers) {

  router.get('/', controllers.home.index)
  router.post('/callbacks', controllers.callbacks.create)
}

