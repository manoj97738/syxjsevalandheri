x = 10;
console.log("sdasdx", x)

module.exports = (function () {
    var name = "manoj"
    return {
        a: 10,
        b: 50,
        garmi: function () {
            return this.a;
        }
    }
})()

module.exports = {
    a: 10,
    b: 50,
    garmi: function () {
        return this.a;
    }
}

function user() {
    this.a = 10;
    this.b = 50,
        this.garmi = function () {
            return this.a;
        }
}
module.exports = new user();
// exports