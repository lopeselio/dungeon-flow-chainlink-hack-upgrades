import Phaser from 'phaser'
import Level1 from './MyGame'
import Heart from './heart'
import Coin from './coins'
import LevelTwo from './LevelTwo/index'

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1100,
    height: 650,
    scene: [Level1, Heart, Coin],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 0 }
        }
    },
    scale: {
        zoom: 1,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
    backgroundColor: "#000000",
    // scale: {
    //     zoom: 2
    // },
};

export default new Phaser.Game(config)