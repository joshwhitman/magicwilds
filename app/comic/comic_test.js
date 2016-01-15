'use strict';

describe('myApp.comic module', function() {

  beforeEach(module('myApp.comic'));

  describe('comic controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var comicCtrl = $controller('ComicCtrl');
      expect(comicCtrl).toBeDefined();
    }));

  });
});
