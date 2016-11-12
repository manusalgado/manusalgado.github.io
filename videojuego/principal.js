var fondoJuego;
var juego = new Phaser.Game(1200,700, Phaser.CANVAS, 'zonajuego');
var guerrero;

var estadoPrincipal = {
	preload: function(){
		juego.load.image('fondo', 'imagenes/5.jpg');
		juego.load.spritesheet('guerreros', 'imagenes/6.png',228,450);

	}, 
	create: function(){
		fondoJuego = juego.add.tileSprite(0,0, 1200,700, 'fondo');
		guerrero = juego.add.sprite(100,400, 'guerreros');
		guerrero.frame=1;
		guerrero.animations.add('aplastar', [0,1,2], 2, true);
		guerrero.scale.setTo(0.5,0.5);
	}, 
	update: function(){
		fondoJuego.tilePosition.x-=1;
		guerrero.animations.play('aplastar');
		

	}
};

juego.state.add('principal', estadoPrincipal);
juego.state.start('principal');



