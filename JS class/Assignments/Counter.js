function createConuter(init) {
    var count = init ? init : 0



    return {
        incrementFunc: function increment() {this.count += 1},
        decrementFunc: function decrement() { this.count-- },
        resetFunc: function reset() { this.count = init },
        count
    }
}
counter1 = createConuter(3)
console.log(counter1.count)
counter1.incrementFunc()
counter1.incrementFunc()
counter1.incrementFunc()
console.log(counter1.count)
counter1.decrementFunc()
console.log(counter1.count)
counter1.resetFunc()
console.log(counter1.count)
