var courtLevel = {
    preload: preloadCourt,
    create: createCourt,
    update: updateCourt
};

game.state.add('court-level', courtLevel);

function preloadCourt() {

    game.load.tilemap('courtmap', 'court-Monkeychase-map.json',null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'owlishmedia_pixel_tiles.png'); 
    game.load.image('sky', 'assets/realbackground.jpeg');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('star', 'assets/star.png');
    game.load.image('babymonkey', 'assets/motionlessmonkey.gif');
    game.load.spritesheet('bmonkey', 'assets/(1234)monkeyanimation.png', 32, 32);
    game.load.spritesheet('tiger', 'assets/tiger.png', 32, 26);
    game.load.image('mamamonkey', 'assets/mamamonkey.png');
}

// Any variables that we want to use in both create() and update()
// have to be declared outside of both functions.
var keys;
var player;
var ground;
var platforms;
var map; 
var mainlayer;
var mamamonkey; 
function createCourt() {

    //  A simple background for our game
    game.add.sprite(0, 0, 'sky');
<<<<<<< HEAD
    
    mamamonkey = game.add.sprite(925, 520, 'mamamonkey');
    game.physics.arcade.enable(mamamonkey);
=======
     game.add.sprite(925, 539, 'mamamonkey');
>>>>>>> e17aab95da8ec720b35479e2e539dee1a0a83d39
    
    map = game.add.tilemap('courtmap');
    
    map.addTilesetImage('owlishmedia_pixel_tiles','tiles')
    
    mainlayer = map.createLayer('court.object.layer')
    map.createLayer('water');
    
    game.add.sprite(20, 20, 'star');
    
    game.add.sprite(20, -100, 'babymonkey');
    
    var tigerNumberOne = game.add.sprite(434, 210, 'tiger');
    tigerNumberOne.scale.setTo(2, 2);
    
    
     var tigerNumbertwo = game.add.sprite(, 257, 'tiger');
    tigerNumberOne.scale.setTo(2, 2);
    
     var tigerNumberthree = game.add.sprite(775, 210, 'tiger');
    tigerNumberOne.scale.setTo(2, 2);
    
     var tigerNumberfour = game.add.sprite(304, 210, 'tiger');
    tigerNumberOne.scale.setTo(2, 2);
    
     var tigerNumberfive = game.add.sprite(1061, 210, 'tiger');
    tigerNumberOne.scale.setTo(2, 2);
    
     var tigerNumbersix = game.add.sprite(345, 210, 'tiger');
    tigerNumberOne.scale.setTo(2, 2);
    
     var tigerNumberseven = game.add.sprite(1015, 548, 'tiger');
    tigerNumberOne.scale.setTo(2, 2);
    
    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group(); 
    
    // Here we create the ground.
    //ground = platforms.create(0, game.world.height - 64, 'ground');
    
    //  Double the size of the platform (vertically by 2 and horizontally by 2)
    //ground.scale.setTo(2, 2);
    
    //  We need to enable physics on the ground so that it can move and collide with stuff
    //game.physics.arcade.enable(ground);
    
    //  This stops the ground from falling away when you jump on it
    //ground.body.immovable = true;
    
    // The player and its settings
    player = game.add.sprite(0,0, 'bmonkey');
    
    //  We need to enable physics on the player so that it can move and collide with stuff
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds=true;
    
    //  Player physics properties.
    player.body.gravity.y = 300;
    
    //  Our controls.
    keys = game.input.keyboard.createCursorKeys();
    
    this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    
    // Add animations to the player
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right',[7,9],10,true);
    
    map.setCollisionBetween(0, 300, true, 'court.object.layer');
    
    //  Now let's create two ledges
    
    // Enable physics on the platforms so you can collide with them
    game.physics.arcade.enable(platforms);
    
    // Prevent the ledges from moving
    
    game.world.setBounds(0, 0, 3200, 1260);
    game.camera.follow(player);
}

function updateCourt() {
    // Check for collisions between the player and the ground
    //game.physics.arcade.collide(player, ground);
    
    // Check for collisions between the player and all platforms
    game.physics.arcade.collide(player, platforms);
    
    game.physics.arcade.collide(player, mainlayer);
    
    game.physics.arcade.overlap(mamamonkey, player, function() {
        game.state.start('youwin')
    });
    
    if (keys.left.isDown) {
        //  Move to the left
        player.body.velocity.x = -150;
        player.animations.play('left');
    }
    else if (keys.right.isDown) {
        //  Move to the right
        player.body.velocity.x = 150;
        player.animations.play('right');
    }
    else {
        //  Stop
        player.body.velocity.x = 0;
        
        //  Stand still
        player.animations.stop();
        
        // Reset animation frame
        player.frame = 6;
    }
    
    if (this.spaceKey.isDown) {
        player.body.velocity.y = -250;
    }
}