var howtoplayState = {

    preload: function(){
        
        game.load.image('you winpicture.jpg', 'youwinpicture.jpg'); 
        
    },
    create: function() {
        
        var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "left", boundsAlignV: "middle" };

        background = game.add.sprite(0, 0, 'you win');
        background.scale.setTo(1.7, 1.7)

        text = game.add.text(40, 100, "Congratulations YOU WIN!!", style);
        text = game.add.text(40, 300, "Back To Manimenu", style);
        
        text.inputEnabled = true;
        text.events.onInputDown.add(function() {
            game.state.start('mainmenu');
        });
    
    }
}

game.state.add('howtoplay', howtoplayState);
