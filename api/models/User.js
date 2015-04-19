/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    //Relationships
    profiles: {
      collection: 'profile',
      via: 'owner'
    },
    fatherOf: {
      collection: 'user',
      via: 'sonOf',
      dominant: true
    },
    sonOf: {
      collection: 'user',
      via: 'fatherOf'
    },
  }
};

