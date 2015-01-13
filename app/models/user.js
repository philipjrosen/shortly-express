var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName:'users',
  initialize: function(){
    this.on('saving',function(model, attrs, options){

      model.set({username: model.get('username'), password: model.get('password')});
    });
  }
});

module.exports = User;
