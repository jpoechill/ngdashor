// Routes file
app.service('myService', function () {
  this.sayHello = function (sayThis) {
    alert("Say this: " + sayThis);
  }
})
