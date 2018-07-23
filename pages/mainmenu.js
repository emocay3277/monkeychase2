var mainmenuState = {
    create: function() {
        var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

        //  The Text is positioned at 0, 100
        text = game.add.text(0, 0, "Start court level", style);

        //  We'll set the bounds to be from x0, y100 and be 800px wide by 100px high
        text.setTextBounds(0, 100, 800, 100);
        
        text.inputEnabled = true;
        
        var startCourtLevel = function() {
            game.state.start('court-level');
        }
        text.events.onInputDown.add(startCourtLevel);
    }
}

game.state.add('mainmenu', mainmenuState);
