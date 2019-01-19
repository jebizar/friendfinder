var friends = require('../data/friends.js');

module.exports = function (app) {

	app.get('/api/friends', function (req, res) {
		res.json(friends);
	});
	app.post("/api/friends", function (req, res) {
		var newFriend = req.body;
		var newFriendScore = newFriend.scores
		var array = [];

		for (var i = 0; i < friends.length; i++) {
			array.push(parseInt(friends[i].scores));
		}
		console.log(array);
		var closest = array.reduce(function (prev, curr) {
			return (Math.abs(curr - newFriendScore) < Math.abs(prev - newFriendScore) ? curr : prev);
		});

		console.log(array.indexOf(closest));
		var bestMatch = friends[array.indexOf(closest)];

		friends.push(newFriend);
		res.json(bestMatch);
	})
}