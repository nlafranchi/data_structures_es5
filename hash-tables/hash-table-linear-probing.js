module.exports = (function() {
  var HashEntry = require('../model/hash-entry.model');

  function HashTableMap(cap) {
    var AVAILABLE = new HashEntry(null, null),
        n = 0,
        capacity = cap || 1023,
        bucket = [],
        scale = Math.floor(Math.random() * Math.floor(capacity-1)) + 1,
        shift = Math.floor(Math.random() * Math.floor(capacity));

    var checkKey = function(k) {
      if (k) {
        return true;
      } else {
        return false;
      }
    };

    var hashCode = function(key){
      var hash = 0;
      for (var i = 0; i < key.length; i++) {
        var character = key.charCodeAt(i);
        hash = ((hash<<5)-hash)+character;
        hash = hash & hash; // Convert to 32bit integer
      }
      return hash;
    }

    // MAD hash
    this.hashValue = function(key) {
      return Math.abs(hashCode(key) * scale + shift) % capacity;
    };
  }
  return HashTableMap;
})();