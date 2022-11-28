import Phaser from "phaser";

// import Config from "../config";

import axios from "axios";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: "Preload" });
    }

    preload() {
        console.log('scene PreloadScene')
        //load image
        this.load.path = "../../assets/";

        // this.load.atlas(
        //     "about",
        //     "images/about/about.png",
        //     "images/about/about.json"
        // );
        // this.load.atlas("background", "images/bg/bg.png", "images/bg/bg.json");

        // //First start background here...
        // this.load.image("logo", "background/playGame-bg.png");

        // this.load.image("bgPreload", "background/bg-blur.png");
        // this.load.image(
        //     "ghost_left",
        //     "background/gameScene/desktop-ghost-left.png"
        // );
        // this.load.image(
        //     "ghost_right",
        //     "background/gameScene/desktop-ghost-right.png"
        // );
        // //this.load.atlas('bgButtons', 'images/buttons/button.png', 'images/buttons/button.json');
        // this.load.image("bgButtons", "background/play-btn.png");

        // this.load.image("background", "background/bg-blur.png");
        // this.load.image("slot_frame", "background/gameScene/Frame_Slot.png");
        // this.load.image("slot_bg", "background/gameScene/Background_Slot.png");
        this.load.image(
            "slot_top_frame",
            "background/gameScene/slot-top-frame.png"
        );
        this.load.image(
            "slot_footer_frame",
            "background/gameScene/slot-footer-frame.png"
        );

        // //load balance page components
        // this.load.image("Balance_bg", "background/money-balance/balance-bg.png");
        // this.load.image(
        //     "Balance_text",
        //     "background/money-balance/ยอดเงินคงเหลือ.png"
        // );
        // this.load.image("Balance_tab", "background/money-balance/balance-tab.png");
        // this.load.image(
        //     "cash_bag_text",
        //     "background/money-balance/กระเป๋าเงินสด.png"
        // );

        // //load bet option page components
        // this.load.image("betOption_bg", "background/bet_option/bet_option-bg.png");
        // this.load.image("betOption_exit", "background/bet_option/icon-exit.png");
        // this.load.image(
        //     "betOption_txt",
        //     "background/bet_option/ตัวเลือกเดิมพัน.png"
        // );
        // this.load.image(
        //     "betOptionColumn_text",
        //     "background/bet_option/betOptionColumn_text.png"
        // );

        // this.load.image("betSelect_bg", "background/bet_option/selected-bg.png");
        // this.load.image("bet_LightLine", "background/bet_option/select-line.png");

        // //load bet number from API  it's can scroll

        // this.load.image("0.40", "background/bet_option/0.40.png");

        // this.load.image("x", "background/bet_option/x.png");

        // this.load.image("1", "background/bet_option/1.png");

        // this.load.image("15", "background/bet_option/15.png");

        // this.load.image("=", "background/bet_option/=.png");

        // this.load.image("6.00", "background/bet_option/6.00_w.png");

        // //load bet num background
        // this.load.image("betNum_bg", "background/bet_option/bet-score-bg.png");
        // this.load.image("betNum_txt", "background/bet_option/จำนวนเดิมพัน.png");
        // this.load.image("6.00_B", "background/bet_option/6.00.png");

        // //load max bet and bet confirm button
        // this.load.image("maxBet_btn", "background/bet_option/max-button.png");
        // this.load.image(
        //     "confirmBet_btn",
        //     "background/bet_option/confirm-button.png"
        // );

        // //load setting button
        // this.load.image("exitLobby_btn", "background/button/icon-exit-lobby.png");
        // this.load.image("exitLobby_txt", "background/button/ออก.png");

        // this.load.image("soundOn_btn", "background/button/icon-sound-on.png");
        // this.load.image("soundMute_btn", "background/button/icon-sound-mute.png");
        // this.load.image("sound_txt", "background/button/เสียงประกอบ.png");
        // this.load.image("payTable_btn", "background/button/icon-pay-table.png");
        // this.load.image("payTable_txt", "background/button/ตารางจ่าย.png");

        // this.load.image("rules_btn", "background/button/icon-rules.png");
        // this.load.image("rules_txt", "background/button/กติกา.png");
        // this.load.image("close_btn", "background/button/icon-close.png");
        // this.load.image("close_txt", "background/button/ปิด.png");

        // //load pay table components
        // this.load.image("payTable_bg", "background/paytable/pay-table-bg.png");
        // this.load.image("payTab", "background/paytable/pay-tab.png");
        // this.load.image("exit_icon", "background/paytable/icon-exit.png");

        // //load Game Rules page components

        // this.load.image("all_rules_bg", "background/game_rules/rule_page_all.png");

        // this.load.image("rules_bg", "background/game_rules/page1/rules_bg.png");
        // this.load.image("rules_tab", "background/game_rules/page1/rules_tab.png");
        // this.load.image(
        //     "creepyguy_txt",
        //     "background/game_rules/page1/creepyguy_txt.png"
        // );
        // this.load.image("rules_bg", "background/game_rules/page1/rules_bg.png");
        // this.load.image("rules_txt1", "background/game_rules/page1/rules_txt1.png");
        // this.load.image("exit-icon", "background/game_rules/page1/exit-icon.png");

        // //load Game Rules - main game page components

        // this.load.image(
        //     "maingame_logo",
        //     "background/game_rules/main_game_page2/เกมหลัก.png"
        // );
        // this.load.image(
        //     "skull_logo",
        //     "background/game_rules/main_game_page2/skull.png"
        // );
        // this.load.image(
        //     "skull_max_logo",
        //     "background/game_rules/main_game_page2/skull_max.png"
        // );

        // //load auto spin component
        // this.load.image("autoSpin-bg", "background/autospin/autospin-bg.png");
        // this.load.image("autoSpin-txt", "background/autospin/การหมุนอัตโนมัติ.png");
        // this.load.image(
        //     "autoSpinNum-bg",
        //     "background/autospin/autospin-number-bg.png"
        // );
        // this.load.image("speedSpin-bg", "background/autospin/speed-spin-bg.png");
        // this.load.image(
        //     "SpinStart-btn1",
        //     "background/autospin/start-spin-btn-1.png"
        // );
        // this.load.image(
        //     "SpinStart-btn2",
        //     "background/autospin/start-spin-btn-2.png"
        // );

        // this.load.image(
        //     "autoSpinNum-icon",
        //     "background/autospin/icon-autospin.png"
        // );
        // this.load.image(
        //     "autoSpinNum-txt",
        //     "background/autospin/จำนวนออโต้สปิน.png"
        // );

        // this.load.image("spinSpeed-icon", "background/autospin/icon-spinspeed.png");
        // this.load.image(
        //     "spinSpeed-txt",
        //     "background/autospin/ความเร็วในการสปิน.png"
        // );

        // this.load.image("normal-btn", "background/autospin/normal_btn.png");
        // this.load.image("turbo-btn", "background/autospin/turbo_btn.png");

        // //load auto spin number 10,30,50,80,100 btn

        // this.load.image("selected_Bg", "background/autospin/select_bg.png");
        // this.load.image("10", "background/autospin/10.png");
        // this.load.image("30", "background/autospin/30.png");
        // this.load.image("50", "background/autospin/50.png");
        // this.load.image("80", "background/autospin/80.png");
        // this.load.image("100", "background/autospin/100.png");
        // this.load.image("10_btn", "background/autospin/10_btn.png");
        // this.load.image("30_btn", "background/autospin/30_btn.png");
        // this.load.image("50_btn", "background/autospin/50_btn.png");
        // this.load.image("80_btn", "background/autospin/80_btn.png");
        // this.load.image("100_btn", "background/autospin/100_btn.png");

        // this.load.image("stopPlay_txt", "background/autospin/หยุดเล่น.png");
        // this.load.image(
        //     "balanceDown_txt",
        //     "background/autospin/ยอดคงเหลือลดลง.png"
        // );
        // this.load.image(
        //     "balanceUp_txt",
        //     "background/autospin/ยอดคงเหลือเพิ่มขึ้น.png"
        // );
        // this.load.image("compare_txt", "background/autospin/เทียบ.png");
        // this.load.image("rewardMoney_txt", "background/autospin/เงินรางวัล.png");

        // this.load.image("config_bg", "background/autospin/config-bg.png");
        // this.load.image("Plus_Btn", "background/autospin/icon-plus.png");
        // this.load.image("Sub_Btn", "background/autospin/icon-sub.png");

        // this.load.image("15.00", "background/autospin/15.00.png");
        // this.load.image("BLsetting_txt", "background/autospin/ตั้งค่า.png");

        // //load Game Wild , Scatter Symbol components

        // this.load.image(
        //     "sp_symbol_bg",
        //     "background/paytable/special_symbol/sp_symbol_bg.png"
        // );
        // this.load.image(
        //     "wild_symbol_tab",
        //     "background/paytable/special_symbol/wild_tab.png"
        // );
        // this.load.image(
        //     "wild_symbol_pic",
        //     "background/paytable/special_symbol/wild_pic.png"
        // );
        // this.load.image(
        //     "wild_txt",
        //     "background/paytable/special_symbol/wild_text.png"
        // );

        // this.load.image(
        //     "scatter_symbol_tab",
        //     "background/paytable/special_symbol/scatter_tab.png"
        // );
        // this.load.image(
        //     "scatter_symbol_pic",
        //     "background/paytable/special_symbol/SCATTER_pic.png"
        // );
        // this.load.image(
        //     "scatter_txt",
        //     "background/paytable/special_symbol/scatter_text.png"
        // );

        // //load Game Free Spin Symbol components
        // this.load.image(
        //     "freeSpin_bg",
        //     "background/paytable/special_symbol/free_spin/free_spin_bg.png"
        // );
        // this.load.image(
        //     "freeSpin_symbol_tab",
        //     "background/paytable/special_symbol/free_spin/free_spin_tab.png"
        // );
        // this.load.image(
        //     "freeSpin_symbol_pic",
        //     "background/paytable/special_symbol/free_spin/collectable_pic.png"
        // );
        // this.load.image(
        //     "freeSpin_txt",
        //     "background/paytable/special_symbol/free_spin/collectable_text.png"
        // );
        // this.load.image(
        //     "freeSpin_exit",
        //     "background/paytable/special_symbol/free_spin/icon-exit.png"
        // );

        this.load.atlas(
            "allSlotFrame",
            "background/sprite_slotFrame/slot-frame.png",
            "background/sprite_slotFrame/slot-frame.json"
        );

        // //load special score items
        // // this.load.atlas(
        // //   "sp-item-collectable",
        // //   "background/items/special-items/Collectable.png"
        // // );
        // // this.load.atlas(
        // //   "sp-item-scatter",
        // //   "background/items/special-items/Scatter.png"
        // // );

        // // load atlas sprite anims for bonus items
        // this.load.atlas(
        //     "wild",
        //     "background/items/special-items/wild-symbol.png",
        //     "background/items/special-items/wild-symbol.json"
        // );
        // this.load.atlas(
        //     "wild_stand",
        //     "background/items/special-items/stand.png",
        //     "background/items/special-items/stand.json"
        // );
        // this.load.atlas(
        //     "wild_walk",
        //     "background/items/special-items/walk.png",
        //     "background/items/special-items/walk.json"
        // );

        // this.load.atlas(
        //     "wild_walk_move",
        //     "background/items/special-items/wild-expanding-walk.png",
        //     "background/items/special-items/wild-expanding-walk.json"
        // );

        // this.load.atlas(
        //     "wild_walk_stand",
        //     "background/items/special-items/wild-expanding-standing.png",
        //     "background/items/special-items/wild-expanding-standing.json"
        // );

        // this.load.atlas(
        //     "wild_walk_frame",
        //     "background/items/special-items/wild-expanding-frame.png",
        //     "background/items/special-items/wild-expanding-frame.json"
        // );

        // this.load.atlas(
        //     "wild_smoke",
        //     "background/items/special-items/smoke-expanding-wild.png",
        //     "background/items/special-items/smoke-expanding-wild.json"
        // );

        // this.load.atlas(
        //     "wild_walk_blur",
        //     "background/items/special-items/wild-walk-blur.png",
        //     "background/items/special-items/wild-walk-blur.json"
        // );

        // this.load.atlas(
        //     "scatter",
        //     "background/items/special-items/scatter-symbol.png",
        //     "background/items/special-items/scatter-symbol.json"
        // );

        // this.load.atlas(
        //     "collectable",
        //     "background/items/special-items/collectable-symbol.png",
        //     "background/items/special-items/collectable-symbol.json"
        // );

        // //add symbol creepy guy
        // this.load.atlas(
        //     "creepySymbols",
        //     "background/symbols/symbols.png",
        //     "background/symbols/symbols_blur.json"
        // );
        // this.load.atlas(
        //     "creepySymbols_Blur",
        //     "background/symbols/symbols_blur.png",
        //     "background/symbols/symbols_blur.json"
        // );

        // //add hover spin button animation
        // this.load.atlas(
        //     "hover_Anims",
        //     "background/effectButton/Spin/button-spin.png",
        //     "background/effectButton/Spin/button-spin.json"
        // );

        // //add sprite for spin effect  on top animations
        // this.load.atlas(
        //     "hoverEffect_Anims",
        //     "background/effectButton/Spin/spin-effect-ontop.png",
        //     "background/effectButton/Spin/spin-effect-ontop.json"
        // );

        // this.load.atlas(
        //     "hoverEffect_BG",
        //     "background/effectButton/Spin/spin-effect-background.png",
        //     "background/effectButton/Spin/spin-effect-background.json"
        // );

        // //add sprite onClick!/Touch spin skull effect
        // this.load.atlas(
        //     "skullSpin_Effect",
        //     "background/effectButton/Spin/spin_skull.png",
        //     "background/effectButton/Spin/spin_skull.json"
        // );

        // //add sprite pay table
        // this.load.atlas(
        //     "payTableItems",
        //     "background/paytable/slot-frame.png",
        //     "background/paytable/slot-frame.json"
        // );

        // //add sprite onClick All
        this.load.atlas(
            "effectOnClick",
            "background/clickEffect/click-effect.png",
            "background/clickEffect/click-effect.json"
        );

        // //add bonus freeSpin circle
        // this.load.atlas(
        //     "circleBonusFreeSpin_1",
        //     "background/circleBonusFreeSpin/circle-green-type1.png",
        //     "background/circleBonusFreeSpin/circle-green-type1.json"
        // );

        // this.load.atlas(
        //     "circleBonusFreeSpin_2",
        //     "background/circleBonusFreeSpin/circle-green-type2.png",
        //     "background/circleBonusFreeSpin/circle-green-type2.json"
        // );

        // //add bonus freeSpin Thunder Effect
        // this.load.atlas(
        //     "thunderEffect",
        //     "background/thunderEffect/thunder.png",
        //     "background/thunderEffect/thunder.json"
        // );

        // //add bonus freeSpin WIN XXX Effect
        // this.load.atlas(
        //     "black_Hole_Effect",
        //     "background/freeSpinEffect/BlackHole/spin-blackhole.png",
        //     "background/freeSpinEffect/BlackHole/spin-blackhole.json"
        // );

        // this.load.atlas(
        //     "blueFlare_Effect",
        //     "background/freeSpinEffect/BlueFlare/blue-flare.png",
        //     "background/freeSpinEffect/BlueFlare/blue-flare.json"
        // );

        // this.load.atlas(
        //     "smokeBg_Effect",
        //     "background/freeSpinEffect/SmokeEffect/smoke-background.png",
        //     "background/freeSpinEffect/SmokeEffect/smoke-background.json"
        // );

        // //others assets for free spin
        // this.load.atlas(
        //     "bonusFreeSpin_Assets",
        //     "background/freeSpinEffect/freeSpinAssets/asset-bonus-free-spin.png",
        //     "background/freeSpinEffect/freeSpinAssets/asset-bonus-free-spin.json"
        // );

        // this.load.image(
        //     "totalWin_logo",
        //     "background/freeSpinEffect/textWin/total_win.png"
        // );

        // this.load.image(
        //     "freeSpin_logo",
        //     "background/freeSpinEffect/textWin/FreeSpin.png"
        // );

        // this.load.image(
        //     "freeSpin_ghost",
        //     "background/freeSpinEffect/textWin/Freespin_Ghost.png"
        // );

        // //load bonus items paytable
        // this.load.image("wild_symbol", "background/paytable/Wild_Symbol.png");
        // this.load.image("wild_pic", "background/paytable/Wild.png");
        // this.load.image("scatter_symbol", "background/paytable/Scatter_Sym.png");
        // // this.load.image("scatter_text", "background/paytable/scatter_text");

        // // Items Animation Win + Background Anims !!
        // this.load.atlas(
        //     "winBg_Effect",
        //     "background/items-anims-win/effect_win_background.png",
        //     "background/items-anims-win/effect_win_background.json"
        // );

        // this.load.image(
        //     "winFrame_Effect",
        //     "background/items-anims-win/frame_win_effect.png"
        // );

        // //Candle Anims
        // this.load.atlas(
        //     "candle_Animations",
        //     "background/items-anims-win/candle.png",
        //     "background/items-anims-win/candle.json"
        // );

        // //DollHead Anims
        // this.load.atlas(
        //     "dollHead_Animations",
        //     "background/items-anims-win/dollhead.png",
        //     "background/items-anims-win/dollhead.json"
        // );

        // //Finger Anims
        // this.load.atlas(
        //     "finger_Animations",
        //     "background/items-anims-win/finger.png",
        //     "background/items-anims-win/finger.json"
        // );

        // //Knife Anims
        // this.load.atlas(
        //     "knife_Animations",
        //     "background/items-anims-win/knife.png",
        //     "background/items-anims-win/knife.json"
        // );

        // //lamplight Anims
        // this.load.atlas(
        //     "brain_Animations",
        //     "background/items-anims-win/lamplight.png",
        //     "background/items-anims-win/lamplight.json"
        // );

        // //tooth Anims
        // this.load.atlas(
        //     "tooth_Animations",
        //     "background/items-anims-win/tooth.png",
        //     "background/items-anims-win/tooth.json"
        // );

        // //Blue Ghost Anims
        // this.load.atlas(
        //     "bluGhost_Animations",
        //     "background/items-anims-win/blue_ghost.png",
        //     "background/items-anims-win/blue_ghost.json"
        // );

        // //Win Bet Line Effect 1-15
        // this.load.atlas(
        //     "winBet_Line",
        //     "background/winBetLine_Effect/line-bet.png",
        //     "background/winBetLine_Effect/line-bet.json"
        // );

        // //--------------------------------------------------------------------------------//

        // this.load.atlas(
        //     "symbols",
        //     "images/symbols/symbols.png",
        //     "images/symbols/symbols.json"
        // );
        // this.load.atlas(
        //     "symbols_blur",
        //     "images/symbols/symbols_blur.png",
        //     "images/symbols/symbols_blur.json"
        // );
        // this.load.atlas("line", "images/lines/line.png", "images/lines/line.json");
        // this.load.atlas(
        //     "sound",
        //     "images/sound/sound.png",
        //     "images/sound/sound.json"
        // );
        // this.load.atlas(
        //     "autoSpin",
        //     "images/autoSpin/auto.png",
        //     "images/autoSpin/auto.json"
        // );
        // this.load.bitmapFont(
        //     "txt_bitmap",
        //     "fonts/bitmap/text_slot_machine.png",
        //     "fonts/bitmap/text_slot_machine.xml"
        // );
        //load audio
        // this.load.audio("backgroundDefault", "audio/Scary Bells.mp3");
        // this.load.audio("reels", "audio/reels.mp3");
        // this.load.audio("reelStop", "audio/reel_stop.mp3");
        // this.load.audio("win", "audio/win.mp3");
        // this.load.audio("main-button", "audio/halloween-impact.mp3");
        // this.load.audio("play-button", "audio/Horror Sound - Scary.mp3");
        // this.load.audio("click-button", "audio/creepyclick.wav");
        // this.load.audio("lose", "audio/lose.mp3");
        // this.load.audio("musicDefault", "audio/music_default.mp3");

        // show progress bar

        // this.progressBar = this.add.graphics();
        // this.progressBox = this.add.graphics();
        // this.progressBox.fillStyle(0x222222, 0.8);
        // this.progressBox.fillRect(
        //   Config.width / 2 - 460,
        //   Config.height / 2 - 90,
        //   900,
        //   50
        // );
        // //load text
        // this.loadingText = this.make.text({
        //   x: Config.width / 2,
        //   y: Config.height / 2 - 5,
        //   text: "0%",
        //   style: {
        //     font: "30px PT Serif",
        //     fill: "#ffffff",
        //   },
        // });
        // this.loadingText.setOrigin(0.5, 0.5);
        // this.load.on("progress", (value) => {
        //   this.progressBar.clear();
        //   this.progressBar.fillStyle(0xff00ff, 1);
        //   this.progressBar.fillRect(
        //     Config.width / 2 - 450,
        //     Config.height / 2 - 80,
        //     880 * value,
        //     30
        //   );
        //   this.loadingText.setText(parseInt(value * 100) + "%");
        // });
        // this.load.on("complete", this.onComplete, this);
        // for (let i = 0; i < 100; i++) {
        //   this.load.atlas(
        //     "background" + i,
        //     "images/bg/bg.png",
        //     "images/bg/bg.json"
        //   );
        // }
    }

    async create() {
        // await this.loadUser();
        // await this.loadSettings();

        this.scene.start("MainScene");
    }

    async loadSettings() {
        await axios
            .get("https://api-creepy.slotify.pro/games/settings")
            .then(function(response) {
                self.axiosExperiment = response.data.message;
                // console.log(response.data, this.axiosExperiment);
                console.log("response", response.data);

                // Config.server_settings = response.data;
            });
    }

    async loadUser() {
        await axios
            .post("https://api-creepy.slotify.pro/users/login", {
                address: "0x9C7F84380A95e227d1a5f3c892536DFEA7653cE8",
                msg: "Some Message",
                signed: "0x396a9b19cf4c75de0f2c91dd0ba99db4edeb7798869cbd3c810c10bce28dc9e3413b06aa090e6922f7bc24d189f4dc76dd410e9623cbe6eb322d0ea0f3c238341b",
            })
            .then(function(response) {
                self.axiosExperiment = response.data.message;
                // console.log(response.data, this.axiosExperiment);
                console.log("response user", response.data);

                // Config.server_settings = response.data;
                // this.response.data.token.saveLocalStorage();
                const token = response.data.token;
                localStorage.setItem("token", token);
            });
    }

    update() {
        // this.add.text(this.axiosExperiment);
    }

    onComplete() {
        // this.progressBar.destroy();
        // this.progressBox.destroy();
        // this.loadingText.destroy();
    }
}