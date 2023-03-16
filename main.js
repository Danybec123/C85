var canvas=new fabric.Canvas('myCanvas')
block_image_width=30;
block_image_height=30;
player_x=10;
player_y=10;
var player_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
player_update()
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(block_image_object);
    });


}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    var keypressed=e.keyCode
    console.log(keypressed)
    if(keypressed==38){
      console.log("se moverá hacia arriba")
      up()
    }
    if(keypressed==40){
        console.log("se moverá hacia abajo")
        down()
      }
      if(keypressed==39){
        console.log("se moverá hacia la derecha")
        right()
      }
      if(keypressed==37){
        console.log("se moverá hacia la izquierda")
        left()
      }
      if(keypressed==87){
        console.log("pusistes el bloque  de nube")
        new_image("cloud.jpg")
      }
      if(keypressed==65){
        console.log("pusistes el bloque verde oscuro")
        new_image("dark_green.png")
      }
      if(keypressed==83){
        console.log("pusistes el bloque de pasto")
        new_image("ground.png")
      }
      if(keypressed==68){
        console.log("pusistes el bloque verde")
        new_image("light_green.png")

      }
      if(keypressed==90){
        console.log("pusistes el bloque de netherrack")
        new_image("roof.jpg")
      }
      if(keypressed==88){
        console.log("pusistes el bloque de tronco")
        new_image("trunk.jpg")
      }
      if(keypressed==18){
        console.log("pusistes el bloque de glowstone")
        new_image("unique.png")
      }
      if(keypressed==67){
        console.log("pusistes el bloque de ladrillos")
        new_image("wall.jpg")
      }
      if(keypressed==177){
        console.log("pusistes el bloque de madera")
        new_image("yellow_wall.png")
      }
      if(e.shiftKey && keypressed == '80'){
        console.log("Se presiona p y shift al mismo tiempo");
        block_image_height = block_image_height+10;
        block_image_width = block_image_width+10;
        document.getElementById("current_width").innerHTML=block_image_width
        document.getElementById("current_height").innerHTML=block_image_height
    }
    if(e.shiftKey && keypressed == '77'){
        console.log("Se presiona m y shift al mismo tiempo");
        block_image_height = block_image_height-10;
        block_image_width = block_image_width-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    }
function up(){
  if(player_y>0){
    player_y=player_y-10
    canvas.remove(player_object)
    player_update()
  }
}
function down(){
  if(player_y<500){
    player_y=player_y+10
    canvas.remove(player_object)
    player_update()
  }
}
function right(){
  if(player_x<900){
    player_x=player_x+10
    canvas.remove(player_object)
    player_update()
  }
}
function left(){
  if(player_x>0){
    player_x=player_x-10
    canvas.remove(player_object)
    player_update()
  }
}