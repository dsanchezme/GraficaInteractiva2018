// Primero creo un nuevo objeto "Phaser.Game" y especifico el tamaño (800x600)
var juego = new Phaser.Game(800, 600, Phaser.CANVAS, "animales");
// Ahora declaro todas las variables
// Esta la variable del fondo 
var fondojuego;
// estos son las felchas de navegacipon por el mapa 
var flecha1;
var flecha2;
var flecha3;
var flecha4;
// Estas son las imagenes de las cabezas de los animales
var leon;
var tigre;
var jirafa;
var aguila;
var rinoceronte;
var elefante;
var gorila;
var anaconda;
var cebra;
var buitre;

// Este es el estilo que se aplica a los textos
var style = { font: "25px Comic", fill: "#FFFFFF",};
// Estos son los textos 
var texto1;
var texto2;
var texto3;
var texto4;
var texto5;
var texto6;
var texto7;
var texto8;
var texto9;
var texto10;

// Estas son las imagenes que aparecen al hacerle click o tocar los animales del mapa
var foto1;
var foto2;
var foto3;
var foto4;
var foto5;
var foto6;
var foto7;
var foto8;
var foto9;
var foto10;
// Estas son las variables de las teclas con las que se navega por el mapa
var flechaderecha;
var flechaizquierda;
var flechaarriba;
var flechaabajo;
var right = false;
var left = false;
var up = false;
var down = false;
// Aqui defino la variable del juego
var jugar = {
	preload: function() {  
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; // Con esto se escala la imagen si se reduce el tamaño de la ventana
        // Ahora cargo todas las imagenes que se apareceran en el mapa
        // Aqui cargo la imagen del fondo del mapa
		juego.load.image("fondo", "Imagenes/fondo3.jpg"); 
        // Aqui cargo la imagen de los votones de navegacion por el mapa
		juego.load.image("flecha1", "Imagenes/flechader.png");
        juego.load.image("flecha2", "Imagenes/flechaarriba.png");
        // Aqui cargo la imagenes de los animales
        juego.load.image("a1", "Imagenes/leon_ani.png");
        juego.load.image("a2", "Imagenes/tigre.png");
        juego.load.image("a3", "Imagenes/jirafa.png");
        juego.load.image("a4", "Imagenes/aguila.png");
        juego.load.image("a5", "Imagenes/rino_ico.png");
        juego.load.image("a6", "Imagenes/icoelefante.png");
        juego.load.image("a7", "Imagenes/gorila.png");
        juego.load.image("a8", "Imagenes/anaconda.png");
        juego.load.image("a9", "Imagenes/cebra.png");
        juego.load.image("a10", "Imagenes/buitre.png");
        // Aqui cargo las imagenes que aparecen al hacer click o tocar los animales
        juego.load.image("f1", "Imagenes/leon.jpg");
        juego.load.image("f2", "Imagenes/tigres.jpg");
        juego.load.image("f3", "Imagenes/jirafas.jpg");
        juego.load.image("f4", "Imagenes/aguila.jpg");
        juego.load.image("f5", "Imagenes/rinoceronte.jpg");
        juego.load.image("f6", "Imagenes/elefante.jpg");
        juego.load.image("f7", "Imagenes/gorila.jpg");
        juego.load.image("f8", "Imagenes/img_anaconda.jpg");
        juego.load.image("f9", "Imagenes/cebras.jpg");
        juego.load.image("f10", "Imagenes/buitres.png");
        
	},
	
	create: function() { 
        // Aqui especifico el tamaño del fondo
		fondojuego = juego.add.tileSprite(0, 0, 800, 600, "fondo");
        //Aqui fijo una posicion que sera usada como referencia para las coordenas de los demas objetos del mapa
		fondojuego.tilePosition.x = -250;
        fondojuego.tilePosition.y = -300;

        
        
		//Estos son los animales del mapa
        //Especifico que las coordenas del objeto (300,550) y hago referencia a la imagen que cargué anteriormente
		leon = juego.add.sprite(300, 550, "a1");
        // Centro las coordenadas en la mitad del objeto, tanto vertical como horizontalmente
		leon.anchor.setTo(0.5);	
        // Aqui escalo la imagen a un 50% de su tamaño real
        leon.scale.setTo(0.2, 0.2)
        //Esto me permite asignar eventos al objeto
		leon.inputEnabled = true;  
        
        //Y hago lo mismo con los demas
        
        tigre = juego.add.sprite(1340, 710 , "a2");
		tigre.anchor.setTo(0.5);
        tigre.scale.setTo(0.27, 0.27)
		tigre.inputEnabled = true;
        
        jirafa = juego.add.sprite(650, 500, "a3");
		jirafa.anchor.setTo(0.5);	                                                 
        jirafa.scale.setTo(0.55, 0.55)
		jirafa.inputEnabled = true;                                              
        
        aguila = juego.add.sprite(700, 0, "a4");
		aguila.anchor.setTo(0.5);	                                                 
        aguila.scale.setTo(1, 1)
		aguila.inputEnabled = true;                                              
        
        rinoceronte = juego.add.sprite(1250, 540, "a5");
		rinoceronte.anchor.setTo(0.5);	                                                 
        rinoceronte.scale.setTo(0.35, 0.35)
		rinoceronte.inputEnabled = true;                                              
        
        elefante = juego.add.sprite(-40, 690, "a6");
		elefante.anchor.setTo(0.5);	                                                 
        elefante.scale.setTo(0.7, 0.7)
		elefante.inputEnabled = true;                                              
        
        gorila = juego.add.sprite(960, 550, "a7");
		gorila.anchor.setTo(0.5);                                                 
        gorila.scale.setTo(0.2, 0.2)
		gorila.inputEnabled = true;                                              
        
        anaconda = juego.add.sprite(1050, 750, "a8");
		anaconda.anchor.setTo(0.5);	                                                 
        anaconda.scale.setTo(0.05, 0.05)
		anaconda.inputEnabled = true;                                              
        
        cebra = juego.add.sprite(600, 700, "a9");
		cebra.anchor.setTo(0.5);	                                                 
        cebra.scale.setTo(0.7, 0.7)
		cebra.inputEnabled = true;   
        
        buitre = juego.add.sprite(0, 100, "a10");
		buitre.anchor.setTo(0.5);	                                                 
        buitre.scale.setTo(0.3, 0.3)
		buitre.inputEnabled = true;        
        
        
        //Estos son los textos que aparecen arriba de los Animales. A cada uno le especifico sus coordenada, escribo lo que contien cada uno y le aplico el estilo nombrado anteriormente.
        texto1= juego.add.text(250, 500, "León", style);
        //Las coordenadas iran al centro de los textos
        texto1.anchor.setTo(0.5);
        //Los textos no seran visibles por ahora
        texto1.visible=false;
        texto2= juego.add.text(1220, 680, "Tigre", style);
        texto2.anchor.setTo(0.5);
        texto2.visible=false;
        texto3= juego.add.text(600, 420, "Jirafa", style);
        texto3.anchor.setTo(0.5);
        texto3.visible=false;
        texto4= juego.add.text(680, 100, "Águila", style);
        texto4.anchor.setTo(0.5);
        texto4.visible=false;
        texto5= juego.add.text(1250, 440, "Rinoceronte", style);
        texto5.anchor.setTo(0.5);
        texto5.visible=false;
        texto6= juego.add.text(40, 725, "Elefante", style);
        texto6.anchor.setTo(0.5);
        texto6.visible=false;
        texto7= juego.add.text(950, 460, "Gorila", style);
        texto7.anchor.setTo(0.5);
        texto7.visible=false;
        texto8= juego.add.text(1050, 830, "Anaconda", style);
        texto8.anchor.setTo(0.5);
        texto8.visible=false;
        texto9= juego.add.text(490, 590, "Cebra", style);
        texto9.anchor.setTo(0.5);
        texto9.visible=false;
        texto10= juego.add.text(0, 200, "Buitre", style);
        texto10.anchor.setTo(0.5);
        texto10.visible=false;
                          

		//Aqui creo los botones de navegacion por el mapa usando las imagenes de las flechas que cargué. Especifico las coordenas y le asgno su funcion correspondiente.
		flecha1 = juego.add.button(40, 275, "flecha1", this.izquierda, this);
        //Aqui centro las coordenadas
		flecha1.anchor.setTo(0.5);           
        //Aqui cambio la escala de los botones, ya que su tamaño original es mas grande de lo requerido
		flecha1.scale.setTo(-0.05, 0.05);
        //Aqui especifico que la opacidad del boton es de un 40%
		flecha1.alpha = 0.4;                       
		flecha2 = juego.add.button(760, 275, "flecha1", this.derecha, this);
		flecha2.anchor.setTo(0.5);
		flecha2.scale.setTo(0.05, 0.05);
		flecha2.alpha = 0.4;
        flecha3 = juego.add.button(400, 40, "flecha2", this.arriba, this);
		flecha3.anchor.setTo(0.5);
		flecha3.scale.setTo(0.05, 0.05);
		flecha3.alpha = 0.4;
        flecha4 = juego.add.button(400, 550, "flecha2", this.abajo, this);
		flecha4.anchor.setTo(0.5);
		flecha4.scale.setTo(0.05, -0.05);
		flecha4.alpha = 0.4;
        
        //Aqui activo las teclas arriba, abajo, izquierda y derecha del teclado
		flechaderecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);  
		flechaizquierda = juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);	
        flechaarriba = juego.input.keyboard.addKey(Phaser.Keyboard.UP);  
        flechaabajo = juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);	
		
        // Aqui defino instancias a las acciones con el botón ( over, out, down, up )
		flecha1.events.onInputOver.add(function(){left=true;});  
        flecha1.events.onInputOut.add(function(){left=false;});
        flecha1.events.onInputDown.add(function(){left=true;});
        flecha1.events.onInputUp.add(function(){left=false;});
		
		flecha2.events.onInputOver.add(function(){right=true;});  
        flecha2.events.onInputOut.add(function(){right=false;});
        flecha2.events.onInputDown.add(function(){right=true;});
        flecha2.events.onInputUp.add(function(){right=false;});
        
        flecha3.events.onInputOver.add(function(){up=true;});  
        flecha3.events.onInputOut.add(function(){up=false;});
        flecha3.events.onInputDown.add(function(){up=true;});
        flecha3.events.onInputUp.add(function(){up=false;});
        
        flecha4.events.onInputOver.add(function(){down=true;});  
        flecha4.events.onInputOut.add(function(){down=false;});
        flecha4.events.onInputDown.add(function(){down=true;});
        flecha4.events.onInputUp.add(function(){down=false;});
        
        //Estas son las imagenes que aparecen al hacer clic en los animales
        //Especifico las coordenas del objeto, que sera en el centro de la pantalla, y la imagen que usare
        foto1 = juego.add.image (400, 300, "f1");
        //Centro las coordnedas
        foto1.anchor.setTo(0.5); 
        //Cambio la escala de la imagen para que cuadre bien dentro de la pantalla
		foto1.scale.setTo(0.7, 0.7);  
        foto1.visible=false;
        foto1.inputEnabled = true; 
        foto2 = juego.add.image (400, 300, "f2");
        foto2.anchor.setTo(0.5);           
		foto2.scale.setTo(0.6, 0.6);  
        foto2.visible=false;
        foto2.inputEnabled = true; 
        foto3 = juego.add.image (400, 300, "f3");
        foto3.anchor.setTo(0.5);           
		foto3.scale.setTo(0.45, 0.45);  
        foto3.visible=false;
        foto3.inputEnabled = true; 
        foto4 = juego.add.image (400, 300, "f4");
        foto4.anchor.setTo(0.5);           
		foto4.scale.setTo(0.47, 0.47);  
        foto4.visible=false;
        foto4.inputEnabled = true; 
        foto5 = juego.add.image (400, 300, "f5");
        foto5.anchor.setTo(0.5);           
		foto5.scale.setTo(0.9, 0.9);  
        foto5.visible=false;
        foto5.inputEnabled = true; 
        foto6 = juego.add.image (400, 300, "f6");
        foto6.anchor.setTo(0.5);           
		foto6.scale.setTo(0.73, 0.73);  
        foto6.visible=false;
        foto6.inputEnabled = true; 
        foto7 = juego.add.image (400, 300, "f7");
        foto7.anchor.setTo(0.5);           
		foto7.scale.setTo(1, 1);  
        foto7.visible=false;
        foto7.inputEnabled = true; 
        foto8 = juego.add.image (400, 300, "f8");
        foto8.anchor.setTo(0.5);           
		foto8.scale.setTo(0.6, 0.6);  
        foto8.visible=false;
        foto8.inputEnabled = true; 
        foto9 = juego.add.image (400, 300, "f9");
        foto9.anchor.setTo(0.5);           
		foto9.scale.setTo(0.9, 0.9);  
        foto9.visible=false;
        foto9.inputEnabled = true; 
        foto10 = juego.add.image (400, 300, "f10");
        foto10.anchor.setTo(0.5);           
		foto10.scale.setTo(0.9, 0.9);  
        foto10.visible=false;
        foto10.inputEnabled = true; 
        
        //Aqui asigno las funciones que correran cuando cuando se pase el cursor sobre los animales, cuando lo quite y cuando les haga click.
        leon.events.onInputOver.add(this.mostrart1);
        leon.events.onInputOut.add(this.ocultart1);
        tigre.events.onInputOver.add(this.mostrart2);
        tigre.events.onInputOut.add(this.ocultart2);
        jirafa.events.onInputOver.add(this.mostrart3);
        jirafa.events.onInputOut.add(this.ocultart3); 
        aguila.events.onInputOver.add(this.mostrart4);
        aguila.events.onInputOut.add(this.ocultart4); 
        rinoceronte.events.onInputOver.add(this.mostrart5);
        rinoceronte.events.onInputOut.add(this.ocultart5); 
        elefante.events.onInputOver.add(this.mostrart6);
        elefante.events.onInputOut.add(this.ocultart6); 
        gorila.events.onInputOver.add(this.mostrart7);
        gorila.events.onInputOut.add(this.ocultart7); 
        anaconda.events.onInputOver.add(this.mostrart8);
        anaconda.events.onInputOut.add(this.ocultart8); 
        cebra.events.onInputOver.add(this.mostrart9);
        cebra.events.onInputOut.add(this.ocultart9);
        buitre.events.onInputOver.add(this.mostrart10);
        buitre.events.onInputOut.add(this.ocultart10);
        
        
        leon.events.onInputDown.add(this.mostrarf1);
        foto1.events.onInputDown.add(this.ocultarf1);
        //leon.events.onInputUp.add(this.ocultarf1);
        tigre.events.onInputDown.add(this.mostrarf2);
        //tigre.events.onInputUp.add(this.ocultarf2);
        foto2.events.onInputDown.add(this.ocultarf2);
        jirafa.events.onInputDown.add(this.mostrarf3);
        //jirafa.events.onInputUp.add(this.ocultarf3); 
        foto3.events.onInputDown.add(this.ocultarf3);
        aguila.events.onInputDown.add(this.mostrarf4);
        //aguila.events.onInputUp.add(this.ocultarf4); 
        foto4.events.onInputDown.add(this.ocultarf4);
        rinoceronte.events.onInputDown.add(this.mostrarf5);
        //rinoceronte.events.onInputUp.add(this.ocultarf5); 
        foto5.events.onInputDown.add(this.ocultarf5);
        elefante.events.onInputDown.add(this.mostrarf6);
        //elefante.events.onInputUp.add(this.ocultarf6); 
        foto6.events.onInputDown.add(this.ocultarf6);
        gorila.events.onInputDown.add(this.mostrarf7);
        //gorila.events.onInputUp.add(this.ocultarf7); 
        foto7.events.onInputDown.add(this.ocultarf7);
        anaconda.events.onInputDown.add(this.mostrarf8);
        //anaconda.events.onInputUp.add(this.ocultarf8); 
        foto8.events.onInputDown.add(this.ocultarf8);
        cebra.events.onInputDown.add(this.mostrarf9);
        //cebra.events.onInputUp.add(this.ocultarf9); 
        foto9.events.onInputDown.add(this.ocultarf9);
        buitre.events.onInputDown.add(this.mostrarf10);
        //buitre.events.onInputUp.add(this.ocultarf10); 
        foto10.events.onInputDown.add(this.ocultarf10);
        
	},
	
	update: function(){ 
		//Aqui especifico que cuando respectiva tecla (arriba, abajo, isquierda o derecha) esté oprimida, se ejecuta una funcion (que hace que se mueva)
		if(flechaizquierda.isDown){
			this.izquierda();
		}
		if(flechaderecha.isDown){				
			this.derecha();        
		}
        if(flechaarriba.isDown){
			this.arriba();
		}
		if(flechaabajo.isDown){				
			this.abajo();
        //Esas mismas funciones se ejecutaran cuando en vez de oprimir las teclas, se ponga el mouse encima de las flechas de navegacion
        }
		if(right){
			this.derecha();
        //En el caso contrario la opacidad del boton sera de un 40%
		}else {
			flecha2.alpha = 0.4;
		}	
		if(left){
			this.izquierda();	
		} else {
			flecha1.alpha = 0.4;
		}
        if(up){
			this.arriba();
		}else {
			flecha3.alpha = 0.4;
		}	
		if(down){
			this.abajo();	
		} else {
			flecha4.alpha = 0.4;
		}	
        

	},
//Aqui se plantean las funciones nombradas anteriormente
	 izquierda: function(){  
         //Especifico el limite de desplazamiento del fonto hacia la izquierda
		 if (fondojuego.tilePosition.x < 0){ 
            //Aqui especifico el movimiento del fondo
	        fondojuego.tilePosition.x += 3; 
			//Aqui especifico que todos los animales se muevan igual que se mueve el fondo para que no pierdan su posicion dentro del mapa
            leon.position.x +=3;
            tigre.position.x +=3;
            jirafa.position.x +=3;
            aguila.position.x +=3;
            rinoceronte.position.x +=3;
            elefante.position.x +=3;
            gorila.position.x +=3;
            anaconda.position.x +=3;
            cebra.position.x +=3;
            buitre.position.x +=3;
            
            //igualmente los textos se moveran con el fondo            
            texto1.position.x +=3;
            texto2.position.x +=3;
            texto3.position.x +=3;
            texto4.position.x +=3;
            texto5.position.x +=3;
            texto6.position.x +=3;
            texto7.position.x +=3;
            texto8.position.x +=3;
            texto9.position.x +=3;
            texto10.position.x +=3;
            
            //Cuando se activa la funcion la opacidad del boton es de un 100%
            flecha1.alpha = 1;                      
		 }
     },
	 //Igualmente con las funciones de desplazamiento hacia la derecha, arriba y abajo
    
	 derecha: function(){
         //Este es el limite de desplazamiento del fondo hacia la derecha
		 if (fondojuego.tilePosition.x > -1000){  
	        fondojuego.tilePosition.x -= 3;
            leon.position.x -=3;
            tigre.position.x -=3;
            jirafa.position.x -=3;
            aguila.position.x -=3;
            rinoceronte.position.x -=3;
            elefante.position.x -=3;
            gorila.position.x -=3;
            anaconda.position.x -=3;
            cebra.position.x -=3;
            buitre.position.x -=3;
            
             
            texto1.position.x -=3;
            texto2.position.x -=3;
            texto3.position.x -=3;
            texto4.position.x -=3;
            texto5.position.x -=3;
            texto6.position.x -=3;
            texto7.position.x -=3;
            texto8.position.x -=3;
            texto9.position.x -=3;
            texto10.position.x -=3;
            
			flecha2.alpha = 1;
		 }
	 },
    arriba: function(){  
        //Limite del desplazamiento del fondo hacia arriba
		 if (fondojuego.tilePosition.y < -30){  
	        fondojuego.tilePosition.y += 3;      
            leon.position.y +=3;
            tigre.position.y +=3;
            jirafa.position.y +=3;
            aguila.position.y +=3;
            rinoceronte.position.y +=3;
            elefante.position.y +=3;
            gorila.position.y +=3;
            anaconda.position.y +=3;
            cebra.position.y +=3;
            buitre.position.y +=3;
            
             
            texto1.position.y +=3;
            texto2.position.y +=3;
            texto3.position.y +=3;
            texto4.position.y +=3;
            texto5.position.y +=3;
            texto6.position.y +=3;
            texto7.position.y +=3;
            texto8.position.y +=3;
            texto9.position.y +=3;
            texto10.position.y +=3;
            
			flecha3.alpha = 1;                     
		 }
     },
	 abajo: function(){ 
         //Limite de desplazamiento del fondo hacia abajo
		 if (fondojuego.tilePosition.y > -598){  
	        fondojuego.tilePosition.y -= 3;
            leon.position.y -=3;
            tigre.position.y -=3;
            jirafa.position.y -=3;
            aguila.position.y -=3;
            rinoceronte.position.y -=3;
            elefante.position.y -=3;
            gorila.position.y -=3;
            anaconda.position.y -=3;
            cebra.position.y -=3;
            buitre.position.y -=3;
            
             
            texto1.position.y -=3;
            texto2.position.y -=3;
            texto3.position.y -=3;
            texto4.position.y -=3;
            texto5.position.y -=3;
            texto6.position.y -=3;
            texto7.position.y -=3;
            texto8.position.y -=3;
            texto9.position.y -=3;
            texto10.position.y -=3;
            
			flecha4.alpha = 1;
		 }
	 },
        //Esta es la funcion que hace que el texto se haga visible
        mostrart1: function(){
        texto1.visible= true;
        },
        //Esta es la funcion que hace que el texto no sea visible
        ocultart1: function(){
        texto1.visible= false;
        },
        //Se hace lo mismo con las funciones de los demas textos
        mostrart2: function(){
        texto2.visible= true;
        },
        ocultart2: function(){
        texto2.visible= false;
        },
        mostrart3: function(){
        texto3.visible= true;
        },
        ocultart3: function(){
        texto3.visible= false;
        },
        mostrart4: function(){
        texto4.visible= true;
        },
        ocultart4: function(){
        texto4.visible= false;
        },
        mostrart5: function(){
        texto5.visible= true;
        },
        ocultart5: function(){
        texto5.visible= false;
        },
        mostrart6: function(){
        texto6.visible= true;
        },
        ocultart6: function(){
        texto6.visible= false;
        },
        mostrart7: function(){
        texto7.visible= true;
        },
        ocultart7: function(){
        texto7.visible= false;
        },
        mostrart8: function(){
        texto8.visible= true;
        },
        ocultart8: function(){
        texto8.visible= false;
        },
        mostrart9: function(){
        texto9.visible= true;
        },
        ocultart9: function(){
        texto9.visible= false;
        },
        mostrart10: function(){
        texto10.visible= true;
        },
        ocultart10: function(){
        texto10.visible= false;
        },
    
       
        
        //Estas son las funciones de las imagenes que aparecen al hacer click en los animales
        //Con esta se muestra la imagen
        mostrarf1: function(){
        foto1.visible= true;
        },
        //Con esta se oculta la imagen
        ocultarf1: function(){
        foto1.visible= false;
        },
        //Igualmente con las demas imagenes
        mostrarf2: function(){
        foto2.visible= true;
        },
        ocultarf2: function(){
        foto2.visible= false;
        },
        mostrarf3: function(){
        foto3.visible= true;
        },
        ocultarf3: function(){
        foto3.visible= false;
        },
        mostrarf4: function(){
        foto4.visible= true;
        },
        ocultarf4: function(){
        foto4.visible= false;
        },
        mostrarf5: function(){
        foto5.visible= true;
        },
        ocultarf5: function(){
        foto5.visible= false;
        },
        mostrarf6: function(){
        foto6.visible= true;
        },
        ocultarf6: function(){
        foto6.visible= false;
        },
        mostrarf7: function(){
        foto7.visible= true;
        },
        ocultarf7: function(){
        foto7.visible= false;
        },
        mostrarf8: function(){
        foto8.visible= true;
        },
        ocultarf8: function(){
        foto8.visible= false;
        },
        mostrarf9: function(){
        foto9.visible= true;
        },
        ocultarf9: function(){
        foto9.visible= false;
        },
        mostrarf10: function(){
        foto10.visible= true;
        },
        ocultarf10: function(){
        foto10.visible= false;
        },

}

   

juego.state.add("activo", jugar);
juego.state.start("activo");
