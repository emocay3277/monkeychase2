var xiomaraLevel = {
    preload: preloadXiomara,
    create: createXiomara,
    update: updateXiomara,
};

game.state.add('xiomara-level', xiomaraLevel);

function preloadXiomara() {
    game.load.tilemap('xiomara-map', 'xiomara-monkey-chase-map.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('xiomara-tile', 'owlishmedia_pixel_tiles.png');
    
    game.load.image('sky', 'assets/realbackground.jpeg');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('star', 'assets/star.png');
  
    game.load.spritesheet('bmonkey', 'assets/(1234)monkeyanimation.png', 32, 32);
}

// Any variables that we want to use in both create() and update()
// have to be declared outside of both functions.
var keys;
var player;
var ground;
var platforms;
var map;
var blockingLayer;

function createXiomara() {
    game.world.setBounds(0, 0, 2700, 1120); 

    //  A simple background for our game
    game.add.sprite(0, 0, 'sky');
    
    //setting up map 
    map = game.add.tilemap('xiomara-map');
    map.addTilesetImage('owlishmedia_pixel_tiles','xiomara-tile');
    blockingLayer = map.createLayer('solid');
    map.createLayer('trees/vines');
    map.createLayer('water');
    map.createLayer('background');
    map.createLayer('sand');
    
    map.setCollisionBetween(0,300,true,'solid');
    
    game.add.sprite(20, 20, 'star');
    
    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();
    
    // Here we create the ground.
    ground = platforms.create(0, game.world.height - 64, 'ground');
    
    //  Double the size of the platform (vertically by 2 and horizontally by 2)
    ground.scale.setTo(2, 2);
    
    //  We need to enable physics on the ground so that it can move and collide with stuff
    game.physics.arcade.enable(ground);
    
    //  This stops the ground from falling away when you jump on it
    ground.body.immovable = true;
    
    // The player and its settings
    player = game.add.sprite(32, game.world.height - 660, 'bmonkey');
    game.camera.follow(player);
    
    //  We need to enable physics on the player so that it can move and collide with stuff
    game.physics.arcade.enable(player);
    //  Player physics properties.
    player.body.gravity.y = 300;
    
    //  Our controls.
    keys = game.input.keyboard.createCursorKeys();
    
    this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    
    // Add animations to the player
    player.animations.add('left', [ 1, 2, 3, 4, 5], 10, true);
    player.animations.add('right', [ 7, 9, 7, 9], 10, true);
    
    //  Now let's create two ledges
    var ledge1 = platforms.create(400, 400, 'ground');
    var ledge2 = platforms.create(-150, 250, 'ground');
    
    // Enable physics on the platforms so you can collide with them
    game.physics.arcade.enable(platforms);

    game.world.setBounds(0, 0, 3200, 960);
    game.camera.follow(player);
}

function updateXiomara() {
    
    game.physics.arcade.collide(player,blockingLayer);
    // Check for collisions between the player and the ground
    game.physics.arcade.collide(player, ground);
    
    // Check for collisions between the player and all platforms
    game.physics.arcade.collide(player, platforms);
    
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
