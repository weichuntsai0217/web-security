origin = 'authToken=1qaz2wsx;'

var getCookieData = function(key) {
      var ary = origin.split(';');
      var target = null;
      for (var i=0;i<ary.length;i++) {
        if (ary[i].indexOf(key) !== -1) {
          target = ary[i].split('=')[1]
          break;
        }
      }
      return target;
    }
var authToken = getCookieData('authToken');
console.log(authToken);