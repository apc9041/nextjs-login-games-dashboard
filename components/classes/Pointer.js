export default class Pointer {
    constructor(scene) {
    	this.scene = scene;
    	this.addPointerEffect();
    }

    create() {
    	
    }

    addPointerEffect() {
        this.scene.input.on(
            "pointerdown",
            (pointer) => {
                console.log("Click!");
                var onClickEffect = this.scene.add
                    .sprite(pointer.x, pointer.y, "effectOnClick")
                    .setScale(0.75)
                    .setDepth(11);
                onClickEffect.play("onClick_Effect", 50, true);
            },
            this
        );

        this.scene.anims.create({
            key: "onClick_Effect",
            frames: this.scene.anims.generateFrameNames("effectOnClick", {
                prefix: "Effect Click_",
                suffix: ".png",
                start: 0,
                end: 30,
                zeroPad: 5,
            }),

            frameRate: 60,
            //   duration: -5,
            hideOnComplete: true,
        });
    }
}