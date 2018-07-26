var howtoplayState = {

    preload: function(){
        
    game.load.image('tiles', 'curious-george51.jpg'); 
        
    },
    create: function() {
        
    var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "left", boundsAlignV: "middle" };
    
    text = game.add.text(40, 100, "Left arrow key is to go left", style);
    text = game.add.text(40, 300, "Right arrow key is to go right", style);
    text = game.add.text(40, 500, "Spacebar key is to jump", style);
    
    text.inputEnabled = true;
    
    }
}

game.state.add('howtoplay', howtoplayState);
