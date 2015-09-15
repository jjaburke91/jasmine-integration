describe("User can", function() {
	it("create a new user", function() {
		var newUser = new User();
		expect(newUser.firstname).toEqual("Jamie");
	});

	it("can return a full name", function() {
		var newUser = new User();
		expect(newUser).toBeDefined();
	});
});
