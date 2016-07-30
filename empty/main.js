// Create our 'main' state that will contain the game

var mainState = {

	preload: function() {
		// Load the bird sprite
		game.load.image('bird', 'assets/bird.png')
	},

	create: function() {
		// Change the background color of the game to blue
		game.state.backgroundColor = '#71c5cf';

		// Set the physics system
		game.physics.startSystem(Phaser,Physics.ARCADE);

		// Display the bird at the position x=100 and y=245
		this.bird = game.add.sprite(100, 245, 'bird');

		// Add physics to the bird 
		// Needed for: movements, gravity, collisions, etc.
		game.physics.arcade.enable(this.bird);

		// Add gravity to the bird to make it fall
		this.bird.body.gravity.y = 1000;
	},

	update: function() {
		// This function is called 60 times per second
		// It contains the game's logic
	},
};

// Initialize Phaser, and create a 400px by 490px game
var game = new Phaser.Game(400, 490);

// Add the 'mainState' and call it 'main'
game.state.add('main', mainState);

// Start the state to actually start the game
game.state.start('main');