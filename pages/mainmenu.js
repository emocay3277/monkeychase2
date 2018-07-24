var mainmenuState = {

    preload: function(){
        
        game.load.spritesheet('background image', 'cartoon-monkey.png', 700, 394);
    },
    create: function() {

        background = game.add.sprite(0, 0, 'background image');
 
        var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

        //  The Text is positioned at 0, 100
        text = game.add.text(20, 20, "Start level 1", style);

        //  We'll set the bounds to be from x0, y100 and be 800px wide by 100px high
        text.setTextBounds(0, 100, 800, 100);

        text.inputEnabled = true;

        text = game.add.text(40, 40, "How to play", style);

        text = game.add.text(100, 100, "Main Menu", style);

        background.animations.add('monkeypic', [0, 1, 2, 3, 4], 10, true);
        
        background.scale.setTo(2.2, 2.2)
        
        background.animations.play('monkeypic');

        var startCourtLevel = function() {
            game.state.start('court-level');
        }
        
        text.events.onInputDown.add(startCourtLevel);
    }
}

game.state.add('mainmenu', mainmenuState);
