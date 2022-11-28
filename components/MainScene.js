import Phaser from "phaser";
import Time from "./classes/Time";
import Pointer from "./classes/Pointer";

export default class MainScene extends Phaser.Scene {
    delayText = null;
    constructor() {

        super({ key: "MainScene" });
    }

    preload() {
        console.log('scene MainScene')
    }

    create() {
        this.theWidth = 390;
        this.theHeight = 720;

        this.times = new Time(this);
        this.pointer = new Pointer(this);
        this.delayText = this.add.text(10, 10, 'test', { fill: '#eee' }).setDepth(4);

        this.createGameFrame();
    }

    update(time, delta) {
        // console.log('time delta', time, delta)
        var loop = this.sys.game.loop;

        var fpsMetervalue = Math.floor(loop.actualFps);
        this.delayText.setText([
            `fps: ${fpsMetervalue} fps`,
        ]);
    }

    createGameFrame() {
        var cx = this.theWidth / 2;
        var cy = this.theHeight / 2;

        //add sprite slot frame

        this.frameTop = this.add
            .sprite(cx, cy - 275, "allSlotFrame", "background-top.png")
            .setDepth(3);

        this.slotBg = this.add
            .sprite(cx, cy + 18, "allSlotFrame", "in-frame-background.png")
            .setScale(0.9)
            .setDepth(1);

        this.frameCrop = this.add
            .sprite(cx, cy + 18, "allSlotFrame", "frame-crop.png")
            .setScale(0.9)
            .setDepth(3);

        this.frame = this.add
            .sprite(cx, cy + 7, "allSlotFrame", "frame.png")
            .setScale(0.9)
            .setDepth(3);

        this.frameBottom = this.add
            .sprite(cx, cy + 285, "allSlotFrame", "background-down.png")
            // .setScale(0.9)
            .setDepth(3);

        this.scoreBoard = this.add
            .sprite(cx, cy - 140, "allSlotFrame", "scoreboard.png")
            .setDepth(5);

        this.winTxt = this.add
            .sprite(cx, cy - 175, "allSlotFrame", "text-win.png")
            .setScale(0.9)
            .setDepth(5);
    }


}