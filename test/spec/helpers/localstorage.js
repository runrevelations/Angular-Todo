
(function(self) {


  // Data store for holding objects
  var localStoreDb = {};

  // Mock localStorage for interaction with localStoreDb
  var fakeLocalStorage = {

    getItem: function(key) {
      return localStoreDb[key];
    },
    setItem: function(key, value) {
      localStoreDb[key] = val+'';
    },
    removeItem: function(key) {
      delete localStoreDb[key];
    },
    clear: function() {
      localStoreDb = {};
    }
  };


});  