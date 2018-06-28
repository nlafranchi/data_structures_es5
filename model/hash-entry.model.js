module.exports = (function() {
  function HashEntry(key, value) {
    var key = key;
    var value = value;

    this.getKey = function() {
      return key;
    }

    this.getValue = function() {
      return value;
    }

    this.setValue = function(v) {
      var oldValue = value;
      value = v;
      return oldValue;
    }

    this.equals = function(hashEntry) {
      if (hashEntry instanceof HashEntry) {
        if (hashEntry.getKey() === key && hashEntry.getValue() === value) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }

  return HashEntry;
  
})();