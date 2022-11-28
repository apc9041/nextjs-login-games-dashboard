import Phaser from "phaser";
import MainScene from "../components/MainScene";
import Preload from "../components/Preload";
import { useEffect } from "react";

export default function Index() {
    useEffect(() => {
        loadGame();
        console.log("load game");
    }, []);

    const loadGame = async () => {
        if (typeof window !== "object") {
            return;
        }

        let config = {
            type: Phaser.WEBGL,
            width: 390,
            height: 720,
            // width: window.innerWidth * window.devicePixelRatio,
            // height: window.innerHeight * window.devicePixelRatio,
            backgroundColor: "#27385e",
            physics: {
                default: "arcade",
                arcade: {
                    gravity: { y: 200 },
                },
            },

            parent: "game",
            fps: {
                forceSetTimeOut: true,
                min: 30,
                target: 60
            },

            scale: {
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH,
            },
            scene: [Preload, MainScene],
        };

        let game = new Phaser.Game(config);
        // game.scene.add("main", MainScene);
        // game.scene.start("main");
        return config;
    };

    return null;
}