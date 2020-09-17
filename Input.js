class Input{
 constructor(){
     this.input = createInput("Title");
 } 
 
  xdisplay(){
  this.input.position(displayWidth/2 - 20, displayHeight/2 - 40);
  
 }
 update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      
    });
  }
 




}