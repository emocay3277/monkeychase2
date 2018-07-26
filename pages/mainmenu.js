var mainmenuState = {

    preload: function(){
        
        game.load.spritesheet('background image', 'cartoon-monkey.png', 700, 394);
    },
    create: function() {

        background = game.add.sprite(0, 0, 'background image');
        background.animations.add('monkeypic', [0, 1, 2, 3, 4], 10, true);
        background.scale.setTo(2.2, 2.2);
        background.animations.play('monkeypic');
        
        var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "left", boundsAlignV: "middle" };
        //
        text = game.add.text(625, 50, "Monkey Chase", style);
        
        // How to play
        text = game.add.text(100, 200, "How to play", style);
        text.inputEnabled = true;
        text.events.onInputDown.add(function() {
            game.state.start('howtoplay')
        });
        
        // Main menu
        text = game.add.text(650, 100, "Main Menu", style);
        
        // Start level 1
        text = game.add.text(50, 200, "Start Level 1", style);
        text.setTextBounds(50, 150, 800, 100);
        text.inputEnabled = true;
        text.events.onInputDown.add(function() {
            game.state.start('court-level');        
        });
        
        //  Start level 2
        text = game.add.text(50, 300, "Start Level 2", style);
        text.setTextBounds(50, 250, 800, 100);
        text.inputEnabled = true;
        text.events.onInputDown.add(function() {
            game.state.start('xiomara-level');
        });
    }        
}

game.state.add('mainmenu', mainmenuState);
