module.exports = (function() {
  function HashEntry(key, value) {
    var key = key;
    var value = value;

    this.getKey = function() {
      return key;
    }

    this.setKey = function(k) {
      key = k;
    }

    this.getValue = function() {
      return value;
    }

    this.setValue = function(v) {
      value = v
    }
  }

  return HashEntry;
})();