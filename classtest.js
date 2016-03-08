var expect = require('chai').expect;
var add = function(a,b) {
	return a + b;
}
// = require('./math.js').add;


describe("things should be added or subtracted from each other", function() {
	// beforeEach(function(done) {
	// 	start = 0;
	// })
	describe("this tests my addition function", function() {
		var start = 1;
		// before(function(done) {
		// 	var start = 0;
		// 	after = add(1,2);
		//  executes before all of the it blocks have run
		// 	done();
		// })
		beforeEach(function(done) {
			start += 2;
			done();
			//executes before each it block
		})
		afterEach(function() {
			//delete bitmap file;
			//executes after each it block
		})
		// after(function(done) {
			// execute after all it blocks have run
		// })
		it("should equal 3", function() {
			expect(start).to.eql(3);
			expect(start).to.eql(5);
		})
		it("should equal 5", function() {
			expect(start).to.eql(5);
		});
		it("should equal 7", function() {
			expect(start).to.eql(7);
		});
	})

	// describe("this tests my subtraction function", function() {
	// 	expect(1).to.eql(1);
	// })


	it("should break and not tell me", function() {
		expect(1).to.eql(1);
	});
});