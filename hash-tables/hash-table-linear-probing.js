module.exports = (function() {
  var HashEntry = require('../model/hash-entry.model');

  function HashTableMap(cap) {
    var scope = this;
    var AVAILABLE = new HashEntry(null, null),
        n = 0,
        capacity = cap || 1023,
        bucket = new Array(cap),
        scale = Math.floor(Math.random() * Math.floor(capacity-1)) + 1,
        shift = Math.floor(Math.random() * Math.floor(capacity));

    var hashCode = function(key){
      var hash = 0;
      for (var i = 0; i < key.length; i++) {
        var character = key.charCodeAt(i);
        hash = ((hash<<5)-hash)+character;
        hash = hash & hash; // Convert to 32bit integer
      }
      return hash;
    };



    // MAD hash
    this.hashValue = function(key) {
      return Math.abs(hashCode(key) * scale + shift) % capacity;
    };

    var findEntry = function(key) {
      var avail = -1;
      var i = scope.hashValue(key);
      var j = i;
      do {
        var entry = bucket[i];

        if (!entry) {
          if (avail < 0) {
            avail = i;
          }
          break;
        }
        if (key == entry.getKey()) {
          console.log('equals', i, key)
          return i;
        }
        if (entry === AVAILABLE) {
          if (avail < 0){
            avail = i;
          }
        }
        i = (i + 1) % capacity;

      } while (i != j);
      return -(avail + 1);
    };

    this.get = function(key) {
      var i = findEntry(key);
      if (i < 0) return null;
        return bucket[i].getValue();
    };

    this.put = function(key, value) {
      var i = findEntry(key);
      if ( i >= 0) {
        return bucket[i].setValue(value);
      }
      if (n > capacity/2) {
        rehash();
        i = findEntry(key);
      }
      bucket[-i-1] = new HashEntry(key,value);
      n++;
      return null;
    }

    var rehash =function() {
      capacity = capacity * 2;
      var old = bucket;
      bucket = new Array(capacity);
      scale = Math.floor(Math.random() * Math.floor(capacity-1)) + 1;
      shift = Math.floor(Math.random() * Math.floor(capacity));
      for (var i = 0; i < old.length; i++) {
        var e = old[i];
        if (e && (e != AVAILABLE)) {
          var j = -1 - findEntry(e.getKey());
          bucket[j] = e;
        }
      }
    }

    this.remove = function(key) {
      var i = findEntry(key);
      if (i < 0 || !bucket[i]) return null;
      var value = bucket[i].getValue();
      bucket[i] = AVAILABLE;
      n--;
      return value;
    }


    this.size = function() { return n; };
    this.isEmpty = function() { return n === 0; }

    this.keys = function() {
      var keys = [];
      for (var i = 0; i < capacity; i++) {
        if (bucket[i] && (bucket[i] != AVAILABLE)) {
          keys.push(bucket[i]);
        }
      }
      return keys;
    };


  }

  return HashTableMap;

})();