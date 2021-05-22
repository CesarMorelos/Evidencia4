Technotip.Avanzado = function(game){
    var sprite;
    var group;
    var group2;
    var cursors;
    
    var checkboxOp1;
    var checkboxOp2;
    var checkboxOp3;

    var tipoBasura;
    var tipoBasura2;
    this._spawnCandyTimer = 0;
    var candy;
    
    var agarrarFx;
    var noagarradoFx;
    var tadaFx;   
    var instruccionesFx;   
     //---------variables timer
     var textoPuntos;
     var puntos;
     var textoTimer;
     var grupoMarcador;
     
     var tiempoAgotado;
     var fondo;
     var esquina;
     var intrucciones;
     var bocina;
     var contadorBasura;
     var basuras;
     let caminarX;
     let caminarY;

     let contadorPregunta;
     let contadorBuenas;
     let textContadorBuenas;


    var puntosXimagen;
    var puntos;
    var puntosAcumulados=0;
    var puntosAcumulado=0;
};

Technotip.Avanzado.prototype= {
    // aquí se agregan los metodos
    init:function(datosLink=null){ 
        this.puntos=0;
        this.contadorBasura = 0
        caminarX = 800;
        caminarY = 750;
        contadorPregunta =0;
        contadorBuenas = 0;
    },
    
    preload:function(){    
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        
        /*Audios*/
        game.load.audio('tada', 'audio/muybien.mp3');        
        game.load.audio('agarrar', 'audio/correct.mp3');
        game.load.audio('noagarrado', 'audio/incorrect.mp3'); 
        

        /*Imagenes para el juego para Armar*/
        game.load.image('fondo','img/paraArmar/fondo.png');
        game.load.image('phaser', 'img/paraArmar/agente.png');

     
        

        game.load.image('bien', 'img/paraArmar/bien.png')
        game.load.image('mal', 'img/paraArmar/mal.png')

        game.load.image('felicidades','img/paraArmar/felicidades.png')
        game.load.image('intentalo','img/paraArmar/intentalo.png')
        /*Se cargan las imagenes del nivel*/
        game.load.image('interfaz','img/paraArmar/Nivel_avanzado/interfaz-nivel2.png')        
        game.load.image('pienza1','img/paraArmar/Nivel_avanzado/pieza1.png')
        game.load.image('pienza2','img/paraArmar/Nivel_avanzado/pieza2.png')
        game.load.image('pienza3','img/paraArmar/Nivel_avanzado/pieza3.png')
        game.load.image('pienza4','img/paraArmar/Nivel_avanzado/pieza4.png')
        game.load.image('pienza5','img/paraArmar/Nivel_avanzado/pieza5.png')
        game.load.image('pienza6','img/paraArmar/Nivel_avanzado/pieza6.png')
        game.load.image('pienza7','img/paraArmar/Nivel_avanzado/pieza7.png')
        game.load.image('pienza8','img/paraArmar/Nivel_avanzado/pieza8.png')


        /*-----------------------------*/

        
        //game.load.image('jimmy', 'img/SMARTIC3-OA-0201-112.png')        
  
        
    },
    create:function(){

        this.game.stage.backgroundColor = '#689f38';

        this.agarrarFx = this.add.audio('agarrar',1,false);
       this.noagarradoFx = this.add.audio('noagarrado',1,false);
        this.tadaFx = this.add.audio('tada',1,false);
            

        /*Codigo para el fondo*/
        fondo = game.add.sprite(800,0,'fondo');       
        fondo.height = game.height;
        fondo.width = game.width*0.5;       
        
        /*Se coloca la interfaz*/
        interfaz = game.add.image(20,0, 'interfaz')
        interfaz.scale.setTo(1.2)
        /*Se inicializa  physics*/
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        /*Se declara el jugador*/
        this.sprite = game.add.sprite(caminarX,caminarY, 'phaser');
        game.physics.arcade.enable(this.sprite);        
        this.sprite.body.collideWorldBounds = true;

        /*Se colocan las piezas en la parte de abajo*/
       
        pieza1 = game.add.image(350,620, 'pienza1');
        pieza1.scale.setTo(1.2)
        pieza1.anchor.setTo(0.5)

        pieza2 = game.add.image(270,670, 'pienza2');
        pieza2.scale.setTo(1.2)
        pieza2.anchor.setTo(0.5)

        pieza3 = game.add.image(160,720, 'pienza3');
        pieza3.scale.setTo(1.2)
        pieza3.anchor.setTo(0.5)

        pieza4 = game.add.image(420,720, 'pienza4');
        pieza4.scale.setTo(1.2)
        pieza4.anchor.setTo(0.5)

        pieza5 = game.add.image(570,670, 'pienza5');
        pieza5.scale.setTo(1.2)
        pieza5.anchor.setTo(0.5)

        pieza6 = game.add.image(580,720, 'pienza6');
        pieza6.scale.setTo(1.2)
        pieza6.anchor.setTo(0.5)

        pieza7 = game.add.image(650,670, 'pienza7');
        pieza7.scale.setTo(1.2)
        pieza7.anchor.setTo(0.5)

        pieza8 = game.add.image(700,740, 'pienza8');
        pieza8.scale.setTo(1.2)
        pieza8.anchor.setTo(0.5)

        /*Comienzan las zonas*/
        zona1 = game.add.image(365,35,'pienza1');
        zona1.anchor.setTo(0.5,0.5)
        zona1.scale.setTo(1.2,1.2)
        zona1.alpha=0

        zona2 = game.add.image(648,35,'pienza2');
        zona2.anchor.setTo(0.5,0.5)
        zona2.scale.setTo(1.2,1.2)
        zona2.alpha=0

        zona3 = game.add.image(253.5,35,'pienza3');
        zona3.anchor.setTo(0.5,0.5)
        zona3.scale.setTo(1.2,1.2)
        zona3.alpha=0

        zona4 = game.add.image(561,35,'pienza4');
        zona4.anchor.setTo(0.5,0.5)
        zona4.scale.setTo(1.2,1.2)
        zona4.alpha=0

        zona5 = game.add.image(134,35,'pienza5');
        zona5.anchor.setTo(0.5,0.5)
        zona5.scale.setTo(1.2,1.2)
        zona5.alpha=0

        zona6 = game.add.image(190.5,35,'pienza6');
        zona6.anchor.setTo(0.5,0.5)
        zona6.scale.setTo(1.2,1.2)
        zona6.alpha=0

        zona7 = game.add.image(464,35,'pienza7');
        zona7.anchor.setTo(0.5,0.5)
        zona7.scale.setTo(1.2,1.2)
        zona7.alpha=0

        zona8 = game.add.image(512.5,35,'pienza8');
        zona8.anchor.setTo(0.5,0.5)
        zona8.scale.setTo(1.2,1.2)
        zona8.alpha=0

        a1 = this.makeDragObj(pieza1,zona1,true,15, false,false);   
        a2 = this.makeDragObj(pieza2,zona2,true,15, false,false);       
        a3 = this.makeDragObj(pieza3,zona3,true,15, false,false);       
        a4 = this.makeDragObj(pieza4,zona4,true,15, false,false);       
        a5 = this.makeDragObj(pieza5,zona5,true,15, false,false);       
        a6 = this.makeDragObj(pieza6,zona6,true,15, false,false);       
        a7 = this.makeDragObj(pieza7,zona7,true,15, false,false);       
        a8 = this.makeDragObj(pieza8,zona8,true,15, false,false);       

        this.puntosXimagen=8;        
        this.puntosAcumulados=0;

        
        
        
        
        },  
        /*Metodo update*/
        update:function(){ 
            
         
      
         
           

        
    },
     render:function(){
       
        
    },
  

    onClickIncorrecta: function(){
      contadorPregunta = contadorPregunta +1;
      let icono;      
      icono = game.add.sprite(0,0,'mal');
      icono.x= 500;
      icono.y =400;
      icono.scale.setTo(0.5)
      var tween = game.add.tween(icono).to( {alpha:0, y:120 },1000, "Linear", true);
      tween.onComplete.add(borraIcono, this);
      function borraIcono(){
        icono.destroy();
      } 

      if(contadorPregunta == 1){this.pregunta2()}
      if(contadorPregunta == 2){this.pregunta3()} 
      if(contadorPregunta == 3){this.pregunta4()}
      if(contadorPregunta == 4){this.pregunta5()}
      if(contadorPregunta == 5){this.pregunta6()}
      if(contadorPregunta == 6){
             intrucciones.kill()
      this.checkboxOp1.kill()
      this.checkboxOp2.kill()
        if(sprite.x == 1001){
          setTimeout(function(){   felicidades = game.add.sprite(100,50,'felicidades');
          felicidades.scale.setTo(1.5)},2000)
       
        }
        else{
          setTimeout(function(){   intentalo = game.add.sprite(100,50,'intentalo'); 
         intentalo.scale.setTo(1.5)},2000)
         
        }

      }
      

      console.log("si entra aqui")
    },

    onClickCorrecta: function(){
      contadorPregunta = contadorPregunta +1;
      contadorBuenas = contadorBuenas +1;
      this.textContadorBuenas.text = contadorBuenas;
      
      let icono;      
      icono = game.add.sprite(0,0,'bien');
      icono.x= 500;
      icono.y =400;
      icono.scale.setTo(0.5)
      var tween = game.add.tween(icono).to( {alpha:0, y:120 },1000, "Linear", true);
      tween.onComplete.add(borraIcono, this);
      function borraIcono(){
        icono.destroy();
      } 
      caminarX = caminarX + 146;
      caminarY =caminarY - 116;
      sprite.x = caminarX;
      sprite.y= caminarY;

      if(contadorPregunta == 1){this.pregunta2()}
      if(contadorPregunta == 2){this.pregunta3()} 
      if(contadorPregunta == 3){this.pregunta4()}
      if(contadorPregunta == 4){this.pregunta5()}
      if(contadorPregunta == 5){this.pregunta6()}
      if(contadorPregunta == 6){
         intrucciones.kill()
      this.checkboxOp1.kill()
      this.checkboxOp2.kill()
        if(sprite.x == 1001){
          setTimeout(function(){   felicidades = game.add.sprite(100,50,'felicidades');
          felicidades.scale.setTo(1.5)},2000)
        }
        else{
          setTimeout(function(){   intentalo = game.add.sprite(100,50,'intentalo'); 
         intentalo.scale.setTo(1.5)},2000)
        }

      }
      

    },


   
    generaFondo:function(imagen){
       //imagen = game.add.sprite(0,0,'fondo');
       imagen.height = game.height+100;
       imagen.width = game.width+100;
       imagen.anchor.x=0.5;
       imagen.anchor.y=0.5;
       imagen.x=game.width*0.5;
       imagen.y = game.height * 0.5;
    },
     numeroAleatorio3:function(de){
        return Math.floor((Math.random() * de) );
    },
    numeroAleatorio:function(min, max) {
    return Math.round(Math.random() * (max - min) + min);
    },
   
     
   lanzaEstrella:function(){
   
          var delay = 1500;
          
            
          if (this.sprite.x== 1448){
                this.felicidades = game.add.sprite(game.width *0.5,game.height*0.5,'felicidades');
                this.ajustaImagen2(this.felicidades);
                this.felicidades.scale.setTo(0, 0);
                
                var miTween=game.add.tween(this.felicidades.scale).to({x:1.5,y:1.5},1000,Phaser.Easing.Bounce.Out,true,delay);
                setTimeout(this.onClickRepetir,5000)
          
          }

          else{
            this.intentalo = game.add.sprite(game.width *0.5,game.height*0.5,'intentalo');
                this.ajustaImagen2(this.intentalo);
                this.intentalo.scale.setTo(0, 0);
               
                var miTween=game.add.tween(this.intentalo.scale).to({x:1.5,y:1.5},1000,Phaser.Easing.Bounce.Out,true,delay);
                setTimeout(this.onClickRepetir,5000)

          }
          
        
     
            
           
     },
     
    onStart:function(){
         
       this.tadaFx.play(); 
    },
  
     ajustaImagen: function(imagen){
       imagen.width = imagen.width *3;
       imagen.heiht = imagen.height * 3;
       imagen.scale.setTo(1,1);
       imagen.anchor.setTo(0.5, 0.5);// anchor x y;
    },
     ajustaImagen2: function(imagen){
       imagen.width = imagen.width *3;
       imagen.heiht = imagen.height * 3;
       imagen.scale.setTo(1,1);
       imagen.anchor.setTo(0.5, 0.5);// anchor x y;
    },
     ajustaImagen3: function(imagen){
       imagen.width = imagen.width ;
       imagen.heiht = imagen.height;
       imagen.scale.setTo(1,1);
       imagen.anchor.setTo(0.5, 0.5);// anchor x y;
    },
    onClickRepetir:function(){
        this.cancelaUpdate=false;
        game.bloque=0;
        window.location = 'index.html';
    },
    

    /*Comienza el drag y drop*/
     //-----------metodo drag-------------------------------
    makeDragObj:function(objeto,zonaDestino,muestraRetro,sensibilidad,textFont,multiObjecInZone){
        
        
        if(zonaDestino.constructor === Array){
           
           }else{
              zonaDestino.anchor.setTo(0.5,0.5); 
           }
        
        objeto.inputEnabled = true;
        //objeto.input.useHandCursor = true;
        if(!textFont){
            
                 objeto.input.enableDrag(false,true,true);//<---el segundo parametro indica si quieres mover al frente el   
               
           
           }else{
               objeto.input.enableDrag();
           }
       
        objeto.events.onDragStart.add(onDragStart, this);
        objeto.events.onDragStop.add(onDragStop, this);
        
        function onDragStart(sprite,pointer){
           
        };
        
       function onDragStop(sprite,pointer){
           if(zonaDestino.constructor === Array){
               var resultadoTestHit=[];
               resultadoTestHit =objDraggable.compruebaHitenZonas(zonaDestino);
               if(resultadoTestHit[0]==true){
                   objDraggable.colocaObjeto(resultadoTestHit[1]);
                   
                  }else{
                       objDraggable.regresaAlOrigen();
                    
                  }
               
               }else{
                   //------------
                if(objDraggable.proximidadCentros()<numProximidad ){
                  /*Se entra a este if, si laimagen esta ubbicada*/

                  let icono;      
                  icono = game.add.sprite(0,0,'bien');
                  icono.x= 500;
                  icono.y =400;
                  icono.scale.setTo(0.5)
                  var tween = game.add.tween(icono).to( {alpha:0, y:120 },1000, "Linear", true);
                  tween.onComplete.add(borraIcono, this);
                  function borraIcono(){
                    icono.destroy();
                  } 

                  caminarX = caminarX+81;
                  caminarY = caminarY-93.75
                  
                  this.sprite.x = caminarX;
                  this.sprite.y= caminarY;

                  var punto = objDraggable.colocaObjeto();
                  console.log(this.puntosXimagen);
                  console.log(this.puntosAcumulados);
                  this.puntosAcumulados = this.puntosAcumulados+punto;
                  console.log(this.puntosAcumulados);
                   
                  if(this.puntosXimagen==this.puntosAcumulados){
                    this.lanzaEstrella();
                  }

                    

                   }else{
                    let icono;      
                          icono = game.add.sprite(0,0,'mal');
                          icono.x= 500;
                          icono.y =400;
                          icono.scale.setTo(0.5)
                          var tween = game.add.tween(icono).to( {alpha:0, y:120 },1000, "Linear", true);
                          tween.onComplete.add(borraIcono, this);
                          function borraIcono(){
                            icono.destroy();
                          } 
                    objDraggable.regresaAlOrigen();
                     

                }
                
                //-------------
                   
               }
            
        };
      
        var objeto;
        var zonaDestino;
        var muestraRetro;
        var origenx=objeto.x;
        var origeny=objeto.y;
        var cancelaRevision=false;
        var numProximidad=sensibilidad;//a mayor el numero permite mayor margen de error
        var imagenColocada=false;
        var objDraggable={
            objeto:objeto,
            zonaDestino:zonaDestino,
            muestraRetro:muestraRetro,
            origenx:origenx,
            origeny:origeny,
            cancelaRevision:cancelaRevision,
            imagenColocada:imagenColocada,
            
            regresaAlOrigen:function(){
                //console.log('estoy regresandoo al origen');
                 if(muestraRetro){
                   this.califica('mal');
                   }
                
                var tween = game.add.tween(objeto).to( { x:origenx,y:origeny },200, "Linear", true);
            },
            
            setPosition:function(valX,valY){
                origenx=valX;
                origeny=valY;
            },
            
            proximidadCentros:function(){
                var distancia= Phaser.Math.distance(objeto.x , objeto.y , zonaDestino.x , zonaDestino.y);
                //console.log(distancia);
                return distancia;
            },
            compruebaHitenZonas:function(arrayZonas){
                for(var a=0; a<arrayZonas.length; a++){
                    if(this.checkOverlap(objeto,arrayZonas[a])){
                        objeto.x= arrayZonas[a].x;
                        objeto.y = arrayZonas[a].y;
                       return [true,arrayZonas[a]];
                       }
                }
                    return [false,null];
            },
             checkOverlap:function(spriteA, spriteB) {

                var boundsA = spriteA.getBounds();
                var boundsB = spriteB.getBounds();

                return Phaser.Rectangle.intersects(boundsA, boundsB);

            },
            colocaObjeto:function(zona=null){
                var puntos=0;    
                if(zona!=null){
                      objeto.x=zona.x;
                      objeto.y =zona.y;
                      zona.y=-4000;// ese desplaza la zona para que solo puedan poner un elemento en ella
                      //zona.destroy();// si se elimina la zona pmanda mensaje de error
                   }else{
                       objeto.x=zonaDestino.x;
                      objeto.y = zonaDestino.y;
                   }
                //console.log("me colocaron en pos correcta")
              
              //console.log(objeto.frameName);    
               //if(objeto.frameName=='cuerda' || objeto.frameName=='raqueta' || objeto.frameName=='regla'){objeto.angle=-90;};
                
              cancelaRevision= true;
              objeto.inputEnabled = false;
              objeto.input.useHandCursor = false;
                if(muestraRetro){
                     puntos =1;
                    
                   }
               return puntos;
            },
            
            
            actualiza:function(){
                
            },
            califica:function(tipo){
                
                switch(tipo){
                    case 'bien':
                        
                        this.imagenColocada=true;
                    
                        break;
                    case 'mal':
                        
                        this.imagenColocada=false;
                        break;

                       }
              
            }

        };

        return objDraggable;
    },
    
    
   
   
};


