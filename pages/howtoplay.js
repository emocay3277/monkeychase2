var howtoplayState = {

    preload: function(){
        
        game.load.image('how to play image', 'curious-george51.jpg'); 
        
    },
    create: function() {
        
        var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "left", boundsAlignV: "middle" };

        background = game.add.sprite(0, 0, 'how to play image');
        background.scale.setTo(1.7, 1.7)

        text = game.add.text(40, 100, "Left arrow key is to go left", style);
        text = game.add.text(40, 300, "Right arrow key is to go right", style);
        text = game.add.text(40, 500, "Spacebar key is to jump", style);
        text = game.add.text(40, 650, "Back to main menu", style);


        text.inputEnabled = true;
        text.events.onInputDown.add(function() {
            game.state.start('mainmenu');
        });
    
    }
}

game.state.add('howtoplay', howtoplayState);
