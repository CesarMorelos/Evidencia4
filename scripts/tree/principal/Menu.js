/* global game */

var Technotip = {};
 
Technotip.Menu = function(game){
   let fondo_n1;
    let esquina;
    let empezar;
    let estoySobre;
    let intrucciones;
    let intFx;
    let bocina;

};
 
Technotip.Menu.prototype = {
     init:function(datosLink){
      
    },
    preload:function(){  

      
        
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;  

        
        /*Se utilizan para colocar el menu*/
        game.load.image('imgInstrucciones','img/paraArmar/instrucciones.png');
        game.load.image('basico','img/paraArmar/boton-basico.png');
        game.load.image('intermedio','img/paraArmar/Intermedio.png');
        game.load.image('avanzado','img/paraArmar/Avanzado.png');
    },
    create:function(){

      
      this.game.stage.backgroundColor = '#689f38'      

      //fondo_n1 =  game.add.sprite(0,0,'fondo');
      //this.generaFondo(fondo_n1);

      //bocina = game.add.sprite(345,77, 'bocina');
      //bocina.scale.setTo(1.0,1.0)

      instrucciones = game.add.image(500,70, 'imgInstrucciones')      


      boton_basico = game.add.image(600,500, 'basico')
      boton_basico.inputEnabled=true;
      boton_basico.scale.setTo(0.3)
      boton_basico.anchor.setTo(0.5)
      boton_basico.events.onInputOver.add(over, this);
      boton_basico.events.onInputOut.add(out, this);
      boton_basico.input.useHandCursor = true;
      boton_basico.events.onInputDown.add(this.onClickNivel1,this);


      intermedio = game.add.image(900,500, 'intermedio')
      intermedio.inputEnabled=true;
      intermedio.scale.setTo(0.3)
      intermedio.anchor.setTo(0.5)
      intermedio.events.onInputOver.add(over, this);
      intermedio.events.onInputOut.add(out, this);
      intermedio.input.useHandCursor = true;
      intermedio.events.onInputDown.add(this.onClickNivel2,this);


      avanzado = game.add.image(1200,500, 'avanzado')
      avanzado.inputEnabled=true;
      avanzado.scale.setTo(0.3)
      avanzado.anchor.setTo(0.5)
      avanzado.events.onInputOver.add(over, this);
      avanzado.events.onInputOut.add(out, this);
      avanzado.input.useHandCursor = true;
      avanzado.events.onInputDown.add(this.onClickNivel3,this);



        function over(imagen){
           imagen.scale.setTo(0.35);
            
            //console.log(imagen.frameName+' | valor: '+imagen.valor);
            this.estoySobre=imagen;
        }
        function out(imagen){
             //console.log(imagen.frameName);
             imagen.scale.setTo(0.3);
           // this.estoySobre=null;
        }

    },  
    /*Metodo update*/
    update:function(){ 
        
    },

   
     render:function(){

        
    },
       generaFondo:function(imagen){
       //imagen = game.add.sprite(0,0,'fondo');
       imagen.height = game.height;
       imagen.width = game.width;
       imagen.anchor.x=0.5;
       imagen.anchor.y=0.5;
       imagen.x=game.width*0.5;
       imagen.y = game.height * 0.5;
       
    },
      onClickNivel1:function(){
        this.cancelaUpdate=false;
        game.bloque=0;
        this.state.start('basico');
    },
      onClickNivel2:function(){
        this.cancelaUpdate=false;
        game.bloque=0;
        this.state.start('intermedio');
    },
      onClickNivel3:function(){
        this.cancelaUpdate=false;
        game.bloque=0;
        this.state.start('avanzado');
    },
    
};