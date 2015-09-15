
function User() {
	this.firstname = "jamie";
	this.secondname = "burke";
	this.age = 24;
};

User.prototype.getAge = function() {
	return this.age;
}

User.prototype.getName = function() {
	return this.firstname + " 'The Big Man' " + this.secondname;
}
