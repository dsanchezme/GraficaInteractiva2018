// Primero creo un nuevo objeto "Phaser.Game" y especifico el tamaño (400x680)
var Informacion = new Phaser.Game(430, 680, Phaser.CANVAS , "Infos");
// Ahora declaro todas las variables
// Esta la variable del fondo 
var fondoInformacion;
// estos son las felchas de navegacipon por el mapa 
var prueba1;
var prueba2;
var prueba3;
var prueba4;
// Estas son las imagenes de las cabezas de los animales
var info_leon;
var info_tigre;
var info_jirafa;
var info_aguila;
var info_rinoceronte;
var info_elefante;
var info_gorila;
var info_anaconda;
var info_cebra;
var info_buitre;
var instruc;

// Estas son las imagenes de las informaciones de los animales
var Informa1;
var Informa2;
var Informa3;
var Informa4;
var Informa5;
var Informa6;
var Informa7;
var Informa8;
var Informa9;
var Informa10;
// Estas son las variables de las teclas con las que se navega por el mapa
var pruebaderecha;
var pruebaizquierda;
var pruebaarriba;
var pruebaabajo;
var right = false;
var left = false;
var up = false;
var down = false;
// Aqui defino la variable del Informacion
var jugar = {
	preload: function() {  
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; // Con esto se escala la imagen si se reduce el tamaño de la ventana
        // Ahora cargo todas las imagenes que se apareceran en el mapa
        // Aqui cargo la imagen del fondo del mapa
		Informacion.load.image("fondo1", "Imagenes/fondo_info.jpg"); 
        // Aqui cargo la imagen de los votones de navegacion por el mapa
		Informacion.load.image("prueba1", "Imagenes/pruebader.png");
        Informacion.load.image("prueba2", "Imagenes/pruebaarriba.png");
        // Aqui cargo la imagenes de las cabezas de los animales
        Informacion.load.image("a1", "Imagenes/son_leon.png");
        Informacion.load.image("a2", "Imagenes/son_tigre.png");
        Informacion.load.image("a3", "Imagenes/son_jirafa.png");
        Informacion.load.image("a4", "Imagenes/son_aguila.png");
        Informacion.load.image("a5", "Imagenes/son_rinoceronte.png");
        Informacion.load.image("a6", "Imagenes/son_elefante.png");
        Informacion.load.image("a7", "Imagenes/son_gorila.png");
        Informacion.load.image("a8", "Imagenes/son_anaconda.png");
        Informacion.load.image("a9", "Imagenes/son_cebra.png");
        Informacion.load.image("a10", "Imagenes/son_buitre.png");
        // Aqui cargo las imagenes de las informaciones de los animales
        Informacion.load.image("f1", "Imagenes/info_leon.png");
        Informacion.load.image("f2", "Imagenes/info_tigre.png");
        Informacion.load.image("f3", "Imagenes/info_jirafa.png");
        Informacion.load.image("f4", "Imagenes/info_aguila.png");
        Informacion.load.image("f5", "Imagenes/info_rinoceronte.png");
        Informacion.load.image("f6", "Imagenes/info_elefante.png");
        Informacion.load.image("f7", "Imagenes/info_gorila.png");
        Informacion.load.image("f8", "Imagenes/info_anaconda.png");
        Informacion.load.image("f9", "Imagenes/info_cebra.png");
        Informacion.load.image("f10", "Imagenes/info_buitre.png");
        Informacion.load.image("instruc", "Imagenes/instrucciones.png")
        
	},
	
	create: function() { 
        // Aqui especifico el tamaño del fondo
		fondoInformacion = Informacion.add.tileSprite(0, 0, 430, 680, "fondo1");
        //Aqui fijo una posicion que sera usada como referencia para las coordenas de los demas objetos del mapa
		fondoInformacion.tilePosition.x = 0;
        fondoInformacion.tilePosition.y = 680;

		//Estos son los animales del mapa
        //Especifico que las coordenas del objeto son -40 en x y 250 en y hago referencia a la imagen que cargue previamente
		info_leon = Informacion.add.sprite(65, 40, "a1");
        // Centro las coordenadas en la mitad del objeto, tanto vertical como horizontalmente
		info_leon.anchor.setTo(0.5);	
        // Aqui escalo la imagen a un 50% de su tamaño real
        info_leon.scale.setTo(0.4, 0.4)
        //Esto me permite asignar eventos al objeto
		info_leon.inputEnabled = true;  
        
        //Y hago lo mismo con los demas
        
        info_tigre = Informacion.add.sprite(145, 40 , "a2");
		info_tigre.anchor.setTo(0.5);
        info_tigre.scale.setTo(0.35, 0.35)
		info_tigre.inputEnabled = true;
        
        info_jirafa = Informacion.add.sprite(215, 35, "a3");
		info_jirafa.anchor.setTo(0.5);	                                                 
        info_jirafa.scale.setTo(0.35, 0.35)
		info_jirafa.inputEnabled = true;                                              
        
        info_aguila = Informacion.add.sprite(285, 40, "a4");
		info_aguila.anchor.setTo(0.5);	                                                 
        info_aguila.scale.setTo(0.33, 0.33)
		info_aguila.inputEnabled = true;                                              
        
        info_rinoceronte = Informacion.add.sprite(365, 40, "a5");
		info_rinoceronte.anchor.setTo(0.5);	                                                 
        info_rinoceronte.scale.setTo(0.35, 0.35)
		info_rinoceronte.inputEnabled = true;                                              
        
        info_elefante = Informacion.add.sprite(80, 635, "a6");
		info_elefante.anchor.setTo(0.5);	                                                 
        info_elefante.scale.setTo(0.42, 0.42)
		info_elefante.inputEnabled = true;                                              
        
        info_gorila = Informacion.add.sprite(160, 640, "a7");
		info_gorila.anchor.setTo(0.5);                                                 
        info_gorila.scale.setTo(0.4, 0.4)
		info_gorila.inputEnabled = true;                                              
        
        info_anaconda = Informacion.add.sprite(240, 640, "a8");
		info_anaconda.anchor.setTo(0.5);	                                                 
        info_anaconda.scale.setTo(0.4, 0.4)
		info_anaconda.inputEnabled = true;                                              
        
        info_cebra = Informacion.add.sprite(300, 635, "a9");
		info_cebra.anchor.setTo(0.5);	                                                 
        info_cebra.scale.setTo(0.48, 0.48)
		info_cebra.inputEnabled = true;   
        
        info_buitre = Informacion.add.sprite(365, 638, "a10");
		info_buitre.anchor.setTo(0.5);	                                                 
        info_buitre.scale.setTo(0.18, 0.18)
		info_buitre.inputEnabled = true;        
        
        
        //Textos que tuve que poner vacios, debido a que si los quitaba se dañaban las demás funciones 
        Info1= Informacion.add.text(250, 500, "", style);
        Info1.anchor.setTo(0.5);
        Info1.visible=false;
        Info2= Informacion.add.text(1220, 680, "", style);
        Info2.anchor.setTo(0.5);
        Info2.visible=false;
        Info3= Informacion.add.text(600, 420, "", style);
        Info3.anchor.setTo(0.5);
        Info3.visible=false;
        Info4= Informacion.add.text(680, 100, "", style);
        Info4.anchor.setTo(0.5);
        Info4.visible=false;
        Info5= Informacion.add.text(1250, 440, "", style);
        Info5.anchor.setTo(0.5);
        Info5.visible=false;
        Info6= Informacion.add.text(40, 725, "", style);
        Info6.anchor.setTo(0.5);
        Info6.visible=false;
        Info7= Informacion.add.text(950, 460, "", style);
        Info7.anchor.setTo(0.5);
        Info7.visible=false;
        Info8= Informacion.add.text(1050, 830, "", style);
        Info8.anchor.setTo(0.5);
        Info8.visible=false;
        Info9= Informacion.add.text(490, 590, "", style);
        Info9.anchor.setTo(0.5);
        Info9.visible=false;
        Info10= Informacion.add.text(0, 200, "", style);
        Info10.anchor.setTo(0.5);
        Info10.visible=false;
                          
        
        //Por el mismo motivo de los textos, tuve que poner las flechas, aunque no las muestre.
		
		prueba1 = Informacion.add.button(40, 275, "prueba1", this.izquierda, this);
        prueba1.anchor.setTo(0.5);           
		prueba1.scale.setTo(-0.05, 0.05);
		prueba1.alpha = 0.4;                       
		prueba2 = Informacion.add.button(760, 275, "prueba1", this.derecha, this);
		prueba2.anchor.setTo(0.5);
		prueba2.scale.setTo(0.05, 0.05);
		prueba2.alpha = 0.4;
        prueba3 = Informacion.add.button(400, 40, "prueba2", this.arriba, this);
		prueba3.anchor.setTo(0.5);
		prueba3.scale.setTo(0.05, 0.05);
		prueba3.alpha = 0.4;
        prueba4 = Informacion.add.button(400, 550, "prueba2", this.abajo, this);
		prueba4.anchor.setTo(0.5);
		prueba4.scale.setTo(0.05, -0.05);
		prueba4.alpha = 0.4;
        
        //Aqui activo las teclas arriba, abajo, izquierda y derecha del teclado
		pruebaderecha = Informacion.input.keyboard.addKey(Phaser.Keyboard.RIGHT);  
		pruebaizquierda = Informacion.input.keyboard.addKey(Phaser.Keyboard.LEFT);	
        pruebaarriba = Informacion.input.keyboard.addKey(Phaser.Keyboard.UP);  
        pruebaabajo = Informacion.input.keyboard.addKey(Phaser.Keyboard.DOWN);	
		
        // Aqui defino instancias a las acciones con el botón ( over, out, down, up )
		prueba1.events.onInputOver.add(function(){left=true;});  
        prueba1.events.onInputOut.add(function(){left=false;});
        prueba1.events.onInputDown.add(function(){left=true;});
        prueba1.events.onInputUp.add(function(){left=false;});
		
		prueba2.events.onInputOver.add(function(){right=true;});  
        prueba2.events.onInputOut.add(function(){right=false;});
        prueba2.events.onInputDown.add(function(){right=true;});
        prueba2.events.onInputUp.add(function(){right=false;});
        
        prueba3.events.onInputOver.add(function(){up=true;});  
        prueba3.events.onInputOut.add(function(){up=false;});
        prueba3.events.onInputDown.add(function(){up=true;});
        prueba3.events.onInputUp.add(function(){up=false;});
        
        prueba4.events.onInputOver.add(function(){down=true;});  
        prueba4.events.onInputOut.add(function(){down=false;});
        prueba4.events.onInputDown.add(function(){down=true;});
        prueba4.events.onInputUp.add(function(){down=false;});
        
        //Estas son las imagenes que aparecen al hacer clic en las cabezas de los animales
        //Especifico las coordenas del objeto, que sera en el centro del rectángulo, y la imagen que usare
        Informa1 = Informacion.add.image (220, 330, "f1");
        //Centro las coordnedas
        Informa1.anchor.setTo(0.5); 
        //Cambio la escala de la imagen para que cuadre bien dentro de la pantalla
		Informa1.scale.setTo(0.65, 0.65);  
        Informa1.visible=false;
        Informa1.inputEnabled = true; 
        Informa2 = Informacion.add.image (220, 330, "f2");
        Informa2.anchor.setTo(0.5);           
		Informa2.scale.setTo(0.65, 0.65);  
        Informa2.visible=false;
        Informa2.inputEnabled = true; 
        Informa3 = Informacion.add.image (220, 330, "f3");
        Informa3.anchor.setTo(0.5);           
		Informa3.scale.setTo(0.65, 0.65);  
        Informa3.visible=false;
        Informa3.inputEnabled = true; 
        Informa4 = Informacion.add.image (220, 330, "f4");
        Informa4.anchor.setTo(0.5);           
		Informa4.scale.setTo(0.65, 0.65);  
        Informa4.visible=false;
        Informa4.inputEnabled = true; 
        Informa5 = Informacion.add.image (220, 330, "f5");
        Informa5.anchor.setTo(0.5);           
		Informa5.scale.setTo(0.65, 0.65);  
        Informa5.visible=false;
        Informa5.inputEnabled = true; 
        Informa6 = Informacion.add.image (220, 330, "f6");
        Informa6.anchor.setTo(0.5);           
		Informa6.scale.setTo(0.65, 0.65);  
        Informa6.visible=false;
        Informa6.inputEnabled = true; 
        Informa7 = Informacion.add.image (220, 330, "f7");
        Informa7.anchor.setTo(0.5);           
		Informa7.scale.setTo(0.65, 0.65);  
        Informa7.visible=false;
        Informa7.inputEnabled = true; 
        Informa8 = Informacion.add.image (220, 330, "f8");
        Informa8.anchor.setTo(0.5);           
		Informa8.scale.setTo(0.65, 0.65);  
        Informa8.visible=false;
        Informa8.inputEnabled = true; 
        Informa9 = Informacion.add.image (220, 330, "f9");
        Informa9.anchor.setTo(0.5);           
		Informa9.scale.setTo(0.65, 0.65);  
        Informa9.visible=false;
        Informa9.inputEnabled = true; 
        Informa10 = Informacion.add.image (220, 330, "f10");
        Informa10.anchor.setTo(0.5);           
		Informa10.scale.setTo(0.63, 0.63);  
        Informa10.visible=false;
        Informa10.inputEnabled = true;
        instruc = Informacion.add.image (220, 330, "instruc");
        instruc.anchor.setTo(0.5);           
		instruc.scale.setTo(0.63, 0.63);  
        instruc.visible=true;
        instruc.inputEnabled = true; 
        
        //Aqui asigno las funciones que correran cuando cuando pose el maouse por encima de los iconos, cuando lo quite, cuando les haga click, y cuando los suelte
        info_leon.events.onInputOver.add(this.mostrart1);
        info_leon.events.onInputOut.add(this.ocultart1);
        info_tigre.events.onInputOver.add(this.mostrart2);
        info_tigre.events.onInputOut.add(this.ocultart2);
        info_jirafa.events.onInputOver.add(this.mostrart3);
        info_jirafa.events.onInputOut.add(this.ocultart3); 
        info_aguila.events.onInputOver.add(this.mostrart4);
        info_aguila.events.onInputOut.add(this.ocultart4); 
        info_rinoceronte.events.onInputOver.add(this.mostrart5);
        info_rinoceronte.events.onInputOut.add(this.ocultart5); 
        info_elefante.events.onInputOver.add(this.mostrart6);
        info_elefante.events.onInputOut.add(this.ocultart6); 
        info_gorila.events.onInputOver.add(this.mostrart7);
        info_gorila.events.onInputOut.add(this.ocultart7); 
        info_anaconda.events.onInputOver.add(this.mostrart8);
        info_anaconda.events.onInputOut.add(this.ocultart8); 
        info_cebra.events.onInputOver.add(this.mostrart9);
        info_cebra.events.onInputOut.add(this.ocultart9);
        info_buitre.events.onInputOver.add(this.mostrart10);
        info_buitre.events.onInputOut.add(this.ocultart10);
        
        
        info_leon.events.onInputDown.add(this.mostrarf1);
        Informa1.events.onInputDown.add(this.ocultarf1);
        info_tigre.events.onInputDown.add(this.mostrarf2);
        Informa2.events.onInputDown.add(this.ocultarf2);
        info_jirafa.events.onInputDown.add(this.mostrarf3);
        Informa3.events.onInputDown.add(this.ocultarf3);
        info_aguila.events.onInputDown.add(this.mostrarf4);
        Informa4.events.onInputDown.add(this.ocultarf4);
        info_rinoceronte.events.onInputDown.add(this.mostrarf5);
        Informa5.events.onInputDown.add(this.ocultarf5);
        info_elefante.events.onInputDown.add(this.mostrarf6);
        Informa6.events.onInputDown.add(this.ocultarf6);
        info_gorila.events.onInputDown.add(this.mostrarf7);
        Informa7.events.onInputDown.add(this.ocultarf7);
        info_anaconda.events.onInputDown.add(this.mostrarf8);
        Informa8.events.onInputDown.add(this.ocultarf8);
        info_cebra.events.onInputDown.add(this.mostrarf9);
        Informa9.events.onInputDown.add(this.ocultarf9);
        info_buitre.events.onInputDown.add(this.mostrarf10);
        Informa10.events.onInputDown.add(this.ocultarf10);
        info_leon.events.onInputDown.add(this.ocultarinstruc);
        info_tigre.events.onInputDown.add(this.ocultarinstruc);
        info_jirafa.events.onInputDown.add(this.ocultarinstruc);
        info_aguila.events.onInputDown.add(this.ocultarinstruc);
        info_rinoceronte.events.onInputDown.add(this.ocultarinstruc);
        info_elefante.events.onInputDown.add(this.ocultarinstruc);
        info_gorila.events.onInputDown.add(this.ocultarinstruc);
        info_anaconda.events.onInputDown.add(this.ocultarinstruc);
        info_cebra.events.onInputDown.add(this.ocultarinstruc);
        info_buitre.events.onInputDown.add(this.ocultarinstruc);
        Informa1.events.onInputDown.add(this.mostrarinstruc);
        Informa2.events.onInputDown.add(this.mostrarinstruc);
        Informa3.events.onInputDown.add(this.mostrarinstruc);
        Informa4.events.onInputDown.add(this.mostrarinstruc);
        Informa5.events.onInputDown.add(this.mostrarinstruc);
        Informa6.events.onInputDown.add(this.mostrarinstruc);
        Informa7.events.onInputDown.add(this.mostrarinstruc);
        Informa8.events.onInputDown.add(this.mostrarinstruc);
        Informa9.events.onInputDown.add(this.mostrarinstruc);
        Informa10.events.onInputDown.add(this.mostrarinstruc);

        
	},
	
	update: function(){ 
		//Aqui especifico que cuando respectiva tecla (arriba, abajo, isquierda o derecha) esté oprimida, se ejecuta una funcion (que hace que se mueva)
		if(pruebaizquierda.isDown){
			this.izquierda();
		}
		if(pruebaderecha.isDown){				
			this.derecha();        
		}
        if(pruebaarriba.isDown){
			this.arriba();
		}
		if(pruebaabajo.isDown){				
			this.abajo();
        //Esas mismas funciones se ejecutaran cuando en vez de oprimir las teclas, se ponga el mouse encima de las pruebas de navegacion
        }
		if(right){
			this.derecha();
        //En el caso contrario la opacidad del boton sera de un 40%
		}else {
			prueba2.alpha = 0.4;
		}	
		if(left){
			this.izquierda();	
		} else {
			prueba1.alpha = 0.4;
		}
        if(up){
			this.arriba();
		}else {
			prueba3.alpha = 0.4;
		}	
		if(down){
			this.abajo();	
		} else {
			prueba4.alpha = 0.4;
		}	
        

	},
    
	
        //Esta es la funcion que hace que el Info se haga visible
        mostrart1: function(){
        Info1.visible= true;
        },
        //Esta es la funcion que hace que el Info no sea visible
        ocultart1: function(){
        Info1.visible= false;
        },
        //Se hace lo mismo con las funciones de los demas Infos
        mostrart2: function(){
        Info2.visible= true;
        },
        ocultart2: function(){
        Info2.visible= false;
        },
        mostrart3: function(){
        Info3.visible= true;
        },
        ocultart3: function(){
        Info3.visible= false;
        },
        mostrart4: function(){
        Info4.visible= true;
        },
        ocultart4: function(){
        Info4.visible= false;
        },
        mostrart5: function(){
        Info5.visible= true;
        },
        ocultart5: function(){
        Info5.visible= false;
        },
        mostrart6: function(){
        Info6.visible= true;
        },
        ocultart6: function(){
        Info6.visible= false;
        },
        mostrart7: function(){
        Info7.visible= true;
        },
        ocultart7: function(){
        Info7.visible= false;
        },
        mostrart8: function(){
        Info8.visible= true;
        },
        ocultart8: function(){
        Info8.visible= false;
        },
        mostrart9: function(){
        Info9.visible= true;
        },
        ocultart9: function(){
        Info9.visible= false;
        },
        mostrart10: function(){
        Info10.visible= true;
        },
        ocultart10: function(){
        Info10.visible= false;
        },
    
       
        
        //Estas son las funciones de las imagenes que aparecen al hacer click en los iconos
        //Con esta se muestra la imagen
        mostrarf1: function(){
        Informa1.visible= true;
        },
        //Con esta se oculta la imagen
        ocultarf1: function(){
        Informa1.visible= false;
        },
        //Igualmente con las demas imagenes
        mostrarf2: function(){
        Informa2.visible= true;
        },
        ocultarf2: function(){
        Informa2.visible= false;
        },
        mostrarf3: function(){
        Informa3.visible= true;
        },
        ocultarf3: function(){
        Informa3.visible= false;
        },
        mostrarf4: function(){
        Informa4.visible= true;
        },
        ocultarf4: function(){
        Informa4.visible= false;
        },
        mostrarf5: function(){
        Informa5.visible= true;
        },
        ocultarf5: function(){
        Informa5.visible= false;
        },
        mostrarf6: function(){
        Informa6.visible= true;
        },
        ocultarf6: function(){
        Informa6.visible= false;
        },
        mostrarf7: function(){
        Informa7.visible= true;
        },
        ocultarf7: function(){
        Informa7.visible= false;
        },
        mostrarf8: function(){
        Informa8.visible= true;
        },
        ocultarf8: function(){
        Informa8.visible= false;
        },
        mostrarf9: function(){
        Informa9.visible= true;
        },
        ocultarf9: function(){
        Informa9.visible= false;
        },
        mostrarf10: function(){
        Informa10.visible= true;
        },
        ocultarf10: function(){
        Informa10.visible= false;
        },
        mostrarinstruc: function(){
        instruc.visible= true;
        },
        ocultarinstruc: function(){
        instruc.visible= false;
        },
            
}
   

Informacion.state.add("activo", jugar);
Informacion.state.start("activo");
