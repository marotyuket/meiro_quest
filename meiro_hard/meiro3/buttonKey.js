'use strict';

function right() {
  	
document.dispatchEvent( new KeyboardEvent( "keyup",{key: "ArrowRight" })) ;

}

function left() {
  	
  document.dispatchEvent( new KeyboardEvent( "keyup",{key: "ArrowLeft" })) ;
  
  }

function up() {
	
document.dispatchEvent( new KeyboardEvent( "keyup",{key: "ArrowUp" })) ;
  
  }

function down() {
	
document.dispatchEvent( new KeyboardEvent( "keyup",{key: "ArrowDown" })) ;
    
  }