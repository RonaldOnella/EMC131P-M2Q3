export default class endScene extends Phaser.Scene {
    constructor(){
        super('endScene');
    }

    init(data){
            console.log('init',data),
            this.score = data.score;
    }
    preload(){

    }

    create(){
        this.cameras.main.fadeIn(1000, 0, 0, 0)
        this.add.text(350,400, 'Crystals Collected:' + this.score +'', {fontSize: '40px', fontStyle: 'bold', fill: '#ffffff' })
        this.add.text(240,300, ' Congratulations! ', {fontSize: '70px', fontStyle: 'bold', fill: '#ffffff' });
        let main = this.add.text(280, 500, 'Main Menu', {fontSize: '40px', fill: '#ff0033'});
        main.setInteractive({useHandCursor:true});
        main.on('pointerdown', ()=> this.menuButton());
        let restart = this.add.text(760,500,'Restart', {fontSize:'40px', fill:'#ff0033'});
        restart.setInteractive({useHandCursor:true});
        restart.on('pointerdown',() => this.restartButton());


    }

    menuButton(){
        console.log("Loading Main Menu...");
        this.scene.start('menuScene');
    }

    restartButton(){
        console.log("Restarting...");
        this.scene.start('gameScene');
        
    }
        
    }
