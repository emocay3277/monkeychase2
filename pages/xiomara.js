function preload() {
    game.load.tilemap('xiomara-map', 'xiomara-monkey-chase-map.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('xiomara-tile', 'owlishmedia_pixel_tiles.png');
    
    game.load.image('sky', 'assets/realbackbroung.png.jpeg');
   
    game.load.image('star', 'assets/star.png');
   game.load.spritesheet('tiger', 'assets/tiger.png', 32, 26);
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
function create() {
     game.world.setBounds(0, 0, 1920, 1920); 
    
    
    //  A simple background for our game
    game.add.sprite(0, 0, 'sky');
    
    //setting up map 
    map = game.add.tilemap('xiomara-map');
    map.addTilesetImage('owlishmedia_pixel_tiles','xiomara-tile');
    blockingLayer = map.createLayer('solid');
    
    map.setCollisionBetween(0,300,true,'solid');
    
    game.add.sprite(20, 20, 'star');
    
    

    
    // computer and its settings
    tiger = game.add.sprite (166, 205, 'tiger');
     tiger.scale.setTo(2, 2);
    
     // Add animations to the computer
    tiger.animations.add('left', [ 4, 5, 6], 10, true);
    tiger.animations.add('right', [ 1, 2, 3,], 10, true); 
      game.physics.arcade.enable(tiger);
    tiger.body.gravity.y = 300;
    
    // The player and its settings
    player = game.add.sprite(32, game.world.height - 360, 'bmonkey');
    game.camera.follow(player);
    
    //  We need to enable physics on the player so that it can move and collide with stuff
    game.physics.arcade.enable(player);
    
    //  Player physics properties.
    player.body.gravity.y = 300;
    
    //  Our controls.
    keys = game.input.keyboard.createCursorKeys();
    
    // Add animations to the player
    player.animations.add('left', [ 1, 2, 3, 4, 5], 10, true);
    player.animations.add('right', [ 7, 9, 7, 9], 10, true);
    

    // Prevent the ledges from moving
    ledge1.body.immovable = true;
    ledge2.body.immovable = true;
}









function update() {
    game.physics.arcade.collide(player,blockingLayer);
    game.physics.arcade.collide(tiger,blockingLayer);
   
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
    
    if (keys.up.isDown) {
        player.body.velocity.y = -350;
    }
}
