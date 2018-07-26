var youwinState = {

    preload: function(){
        
        game.load.image('you winpicture.jpg', 'youwinpicture.jpg'); 
        
    },
    create: function() {
        
        var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "left", boundsAlignV: "middle" };

        background = game.add.sprite(0, 0, 'you winpicture.jpg');
        background.scale.setTo(1.1, 1.1)

        text = game.add.text(500, 75, "Congratulations YOU WIN!!", style);
        text = game.add.text(100, 300, "Back To Mainmenu", style);
        
        text.inputEnabled = true;
        text.events.onInputDown.add(function() {
            game.state.start('mainmenu');
        });
    
    }
}

game.state.add('youwin', youwinState);
