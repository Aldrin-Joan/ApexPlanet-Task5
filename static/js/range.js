!(function () {
  var e = document.querySelector(".range-slider");
  if (e) {
    var a = e.querySelectorAll("input[type=range]"),
      u = e.querySelectorAll("input[type=number]");
    a.forEach(function (e) {
      e.oninput = function () {
        var e = parseFloat(a[0].value),
          l = parseFloat(a[1].value);
        e > l && ([e, l] = [l, e]), (u[0].value = e), (u[1].value = l);
      };
    }),
      u.forEach(function (e) {
        e.oninput = function () {
          var e = parseFloat(u[0].value),
            l = parseFloat(u[1].value);
          if (e > l) {
            var r = e;
            (u[0].value = l), (u[1].value = r);
          }
          (a[0].value = e), (a[1].value = l);
        };
      });
  }
})();
