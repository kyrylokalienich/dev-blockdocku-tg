System.register("chunks:///_virtual/AudioManager.ts", ['cc', './Enum.ts', './DataManager.ts', './ResourceManager.ts'], function (exports) {
  var AudioSource, cclegacy, ENUM_AUDIO_CLIP, DataManager, ResourceManager;
  return {
    setters: [function (module) {
      AudioSource = module.AudioSource;
      cclegacy = module.cclegacy;
    }, function (module) {
      ENUM_AUDIO_CLIP = module.ENUM_AUDIO_CLIP;
    }, function (module) {
      DataManager = module.default;
    }, function (module) {
      ResourceManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ec837HPHdhNmbkWqoAlSNAg", "AudioManager", undefined);
      class AudioManager {
        constructor() {
          this.audioSource = null;
          this.effectsAudioSource = null;
        }
        // Отримання синглтон-екземпляра
        static getInstance() {
          if (this._instance === null) {
            this._instance = new this();
            this._instance.init();
          }
          return this._instance;
        }
        static get instance() {
          return this.getInstance();
        }

        // Ініціалізація джерела аудіо
        init() {
          this.audioSource = new AudioSource();
          this.audioSource.loop = true;
          this.audioSource.volume = 0.3;
          this.effectsAudioSource = new AudioSource();
          this.effectsAudioSource.loop = false;
          this.effectsAudioSource.volume = 0.3;
        }

        // Відтворення фонової музики
        async playMusic() {
          if (!DataManager.instance.isMusicOn) return;
          if (this.audioSource?.clip) {
            this.audioSource.play();
            return;
          }
          const clip = await ResourceManager.instance.getClip(ENUM_AUDIO_CLIP.BGM);
          if (this.audioSource) {
            this.audioSource.clip = clip;
            this.audioSource.play();
          }
        }

        // Зупинка фонової музики
        stopMusic() {
          this.audioSource?.stop();
        }

        // Відтворення звукового ефекту
        async playSound(name, isLoop) {
          if (isLoop === void 0) {
            isLoop = false;
          }
          if (!DataManager.instance.isSoundOn) return;
          const clip = await ResourceManager.instance.getClip(name);
          this.effectsAudioSource.clip = clip;
          this.effectsAudioSource.loop = isLoop;
          return this.effectsAudioSource.play();
          //return audioEngine.playEffect(clip, isLoop);
        }

        // Зупинка звукового ефекту
        stopSound(audioId) {
          this.effectsAudioSource.stop();
          //audioEngine.stopEffect(audioId);
        }
      }

      exports('default', AudioManager);

      /**
       * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
       */
      // // Created by carolsail
      // 
      // import { ENUM_AUDIO_CLIP } from './../Enum';
      // import DataManager from './DataManager';
      // import ResourceManager from "./ResourceManager"
      // 
      // export default class AudioManager {
      //     private audioSource: cc.AudioSource = null
      //     private static _instance: any = null
      // 
      //     static getInstance<T>(): T {
      //         if (this._instance === null) {
      //             this._instance = new this()
      //             this._instance.init()
      //         }
      // 
      //         return this._instance
      //     }
      // 
      //     static get instance() {
      //         return this.getInstance<AudioManager>()
      //     }
      // 
      //     init(){
      //         this.audioSource = new cc.AudioSource()
      //         this.audioSource.loop = true
      //         this.audioSource.volume = 0.3
      //     }
      // 
      //     async playMusic(){
      //         if(!DataManager.instance.isMusicOn) return
      //         if(this.audioSource.clip){
      //             this.audioSource.play()
      //             return
      //         }
      //         const clip = await ResourceManager.instance.getClip(ENUM_AUDIO_CLIP.BGM)
      //         this.audioSource.clip = clip
      //         this.audioSource.play()
      //     }
      // 
      //     stopMusic(){
      //         this.audioSource.stop()
      //     }
      // 
      //     async playSound(name: ENUM_AUDIO_CLIP | string, isLoop: boolean = false){
      //         if(!DataManager.instance.isSoundOn) return
      //         const clip = await ResourceManager.instance.getClip(name)
      //         return cc.audioEngine.playEffect(clip, isLoop)
      //     }
      // 
      //     stopSound(audioId: number){
      //         cc.audioEngine.stopEffect(audioId)
      //     }
      // }
      AudioManager._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Baselayer.ts", ['cc'], function (exports) {
  var cclegacy, Component, Vec3, tween, _decorator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      Vec3 = module.Vec3;
      tween = module.tween;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "85f2bS+gIxJj5wlc4XZ3Qd4", "Baselayer", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let BaseLayer = exports('default', (_dec = ccclass('Baselayer'), _dec(_class = class BaseLayer extends Component {
        show() {
          this.node.active = true;
        }
        hide() {
          this.node.active = false;
        }
        zoomIn(node, scale, speed) {
          if (scale === void 0) {
            scale = 1.5;
          }
          if (speed === void 0) {
            speed = 0.3;
          }
          node.setScale(new Vec3(scale, scale, scale));
          //const act = cc.scaleTo(speed, 1)
          //tween(node).then(act).start()
          tween(node).to(speed, {
            scale: new Vec3(1, 1, 1)
          }).start();
        }
        zoomOut(node, scale, speed) {
          if (scale === void 0) {
            scale = 0.5;
          }
          if (speed === void 0) {
            speed = 0.3;
          }
          node.setScale(new Vec3(scale, scale, scale));
          //const act = cc.scaleTo(speed, 1)
          //tween(node).then(act).start()
          tween(node).to(speed, {
            scale: new Vec3(1, 1, 1)
          }).start();
        }
        flip(node) {
          //const act1 = cc.scaleTo(0.1, 0, 1)
          //const act2 = cc.scaleTo(0.1, 1, 1)
          //const act = cc.sequence(act1, act2)
          //tween(node).then(act).start()

          tween(node).to(0.1, {
            scale: new Vec3(0, 1, 1)
          }).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }).start();
        }
      }) || _class));
      /**
       * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
       */
      // // Created by carolsail
      // 
      // const { ccclass, property } = cc._decorator;
      // 
      // @ccclass
      // export default class BaseLayer extends cc.Component {
      // 
      //     show() {
      //         this.node.active = true;
      //     }
      // 
      //     hide() {
      //         this.node.active = false;
      //     }
      // 
      //     zoomIn(node: cc.Node, scale: number = 1.5, speed: number = 0.3) {
      //         node.setScale(scale)
      //         const act = cc.scaleTo(speed, 1)
      //         cc.tween(node).then(act).start()
      //     }
      // 
      //     zoomOut(node: cc.Node, scale: number = 0.5, speed: number = 0.3) {
      //         node.setScale(scale)
      //         const act = cc.scaleTo(speed, 1)
      //         cc.tween(node).then(act).start()
      //     }
      // 
      //     flip(node: cc.Node) {
      //         const act1 = cc.scaleTo(0.1, 0, 1)
      //         const act2 = cc.scaleTo(0.1, 1, 1)
      //         const act = cc.sequence(act1, act2)
      //         cc.tween(node).then(act).start()
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Block.ts", ['cc', './Enum.ts'], function (exports) {
  var cclegacy, Component, UIOpacity, _decorator, ENUM_BLOCK_STATUS;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      UIOpacity = module.UIOpacity;
      _decorator = module._decorator;
    }, function (module) {
      ENUM_BLOCK_STATUS = module.ENUM_BLOCK_STATUS;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "947a1FWlbVJirc572MBu1AC", "Block", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let Block = exports('default', (_dec = ccclass('Block'), _dec(_class = class Block extends Component {
        constructor() {
          super(...arguments);
          this.x = -1;
          this.y = -1;
          this.index = -1;
          this.status = ENUM_BLOCK_STATUS.HIDE;
          this.isCombine = false;
        }
        init(x, y, index) {
          this.x = x;
          this.y = y;
          this.index = index;
          this.isCombine = false;
          this.setOpacity(ENUM_BLOCK_STATUS.HIDE);
          this.setActive(false);
        }
        setOpacity(status) {
          this.status = status;
          this.node.getComponent(UIOpacity).opacity = status;
        }
        setActive(bool) {
          this.node.getChildByName('active').active = bool;
        }
      }) || _class));
      /**
       * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
       */
      // /*
      //  * @Author: carolsail 
      //  * @Date: 2023-12-07 15:23:11 
      //  * @Last Modified by: carolsail
      //  * @Last Modified time: 2023-12-08 15:30:07
      //  */
      // 
      // import { ENUM_BLOCK_STATUS } from "../Enum";
      // 
      // const { ccclass, property } = cc._decorator;
      // 
      // @ccclass
      // export default class Block extends cc.Component {
      //     x: number = -1
      //     y: number = -1
      //     index: number = -1
      //     status: ENUM_BLOCK_STATUS = ENUM_BLOCK_STATUS.HIDE
      //     isCombine: boolean = false
      // 
      //     init(x: number, y: number, index: number) {
      //         this.x = x
      //         this.y = y
      //         this.index = index
      //         this.isCombine = false
      //         this.setOpacity(ENUM_BLOCK_STATUS.HIDE)
      //         this.setActive(false)
      //     }
      // 
      //     setOpacity(status: ENUM_BLOCK_STATUS) {
      //         this.status = status
      //         this.node.opacity = status
      //     }
      // 
      //     setActive(bool: boolean) {
      //         this.node.getChildByName('active').active = bool
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BlockReady.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Enum.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, _decorator, Component, Vec3, UIOpacity, v2, UITransform, ENUM_RBLOCK_STATUS;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      Vec3 = module.Vec3;
      UIOpacity = module.UIOpacity;
      v2 = module.v2;
      UITransform = module.UITransform;
    }, function (module) {
      ENUM_RBLOCK_STATUS = module.ENUM_RBLOCK_STATUS;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "8e9bfZ344VMy58mUdGQe/uw", "BlockReady", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let BlockReady = exports('default', (_dec = ccclass('BlockReady'), _dec(_class = (_class2 = class BlockReady extends Component {
        constructor() {
          super(...arguments);
          _initializerDefineProperty(this, "basicPos", _descriptor, this);
          this.index = -1;
          this.pos = null;
          this.scale = 0.45;
          this.isActive = false;
          this.currentPos = null;
          this.status = ENUM_RBLOCK_STATUS.SHOW;
        }
        init(index, pos, scale) {
          if (scale === void 0) {
            scale = 0.45;
          }
          this.index = index;
          this.pos = pos;
          this.node.setScale(new Vec3(scale, scale, scale));
          this.node.setPosition(new Vec3(pos.x, pos.y));
          this.setOpacity(ENUM_RBLOCK_STATUS.HIDE);
        }
        setOpacity(status) {
          this.status = status;
          this.node.getComponent(UIOpacity).opacity = status;
        }
        setActive(bool) {
          if (bool === void 0) {
            bool = true;
          }
          this.isActive = bool;
          if (bool) {
            //const {x, y} = this.node

            const x = this.node.position.x;
            const y = this.node.position.y;
            this.currentPos = v2(x, y + 150);
            this.node.setPosition(new Vec3(this.currentPos.x, this.currentPos.y));
            this.node.setScale(new Vec3(1, 1, 1));
            this.node.setSiblingIndex(10);
            //this.node.zIndex = 10
          } else {
            this.node.setPosition(new Vec3(this.pos.x, this.pos.y));
            //this.node.scale = this.scale
            this.node.setScale(new Vec3(this.scale, this.scale, this.scale));
            this.node.setSiblingIndex(1);
            //this.node.zIndex = 1
          }
        }

        setMove(x, y) {
          if (this.currentPos) {
            const mx = this.currentPos.x + x;
            const my = this.currentPos.y + y;
            this.currentPos = v2(mx, my);
            this.node.setPosition(new Vec3(this.currentPos.x, this.currentPos.y));
          }
        }
        getRelPos(node) {
          const wpos = this.node.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(this.basicPos.x, this.basicPos.y));
          const rpos = node.getComponent(UITransform).convertToNodeSpaceAR(wpos);
          return rpos;
        }
      }, _descriptor = _applyDecoratedDescriptor(_class2.prototype, "basicPos", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return v2(0, 0);
        }
      }), _class2)) || _class));
      /**
       * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
       */
      // /*
      //  * @Author: carolsail 
      //  * @Date: 2023-12-06 10:21:53 
      //  * @Last Modified by: carolsail
      //  * @Last Modified time: 2023-12-08 11:05:15
      //  */
      // 
      // import { ENUM_RBLOCK_STATUS } from "../Enum";
      // 
      // const {ccclass, property} = cc._decorator;
      // 
      // @ccclass
      // export default class BlockReady extends cc.Component {
      //     @property
      //     basicPos: cc.Vec2 = cc.v2(0, 0)
      //     index: number = -1
      //     pos: cc.Vec2 = null
      //     scale: number = 0.45
      //     isActive: boolean = false
      //     currentPos: cc.Vec2 = null
      //     status: ENUM_RBLOCK_STATUS = ENUM_RBLOCK_STATUS.SHOW
      // 
      //     init(index: number, pos: cc.Vec2, scale: number = 0.45){
      //         this.index = index
      //         this.pos = pos
      //         this.node.scale = scale
      //         this.node.setPosition(pos)
      //         this.setOpacity(ENUM_RBLOCK_STATUS.HIDE)
      //     }
      // 
      //     setOpacity(status: ENUM_RBLOCK_STATUS) {
      //         this.status = status
      //         this.node.opacity = status
      //     }
      // 
      //     setActive(bool: boolean = true){
      //         this.isActive = bool
      //         if(bool){
      //             const {x, y} = this.node
      //             this.currentPos = cc.v2(x, y + 150)
      //             this.node.setPosition(this.currentPos)
      //             this.node.scale = 1
      //             this.node.zIndex = 10
      //         }else{
      //             this.node.setPosition(this.pos)
      //             this.node.scale = this.scale
      //             this.node.zIndex = 1
      //         }
      //     }
      // 
      //     setMove(x: number, y: number){
      //         if(this.currentPos){
      //             const mx = this.currentPos.x + x
      //             const my = this.currentPos.y + y
      //             this.currentPos = cc.v2(mx, my)
      //             this.node.setPosition(this.currentPos)
      //         }
      //     }
      // 
      //     getRelPos(node: cc.Node){
      //         const wpos = this.node.convertToWorldSpaceAR(this.basicPos)
      //         const rpos = node.convertToNodeSpaceAR(wpos)
      //         return rpos
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DataManager.ts", ['cc', './Enum.ts'], function (exports) {
  var sys, cclegacy, ENUM_GAME_MODE, ENUM_GAME_STATUS;
  return {
    setters: [function (module) {
      sys = module.sys;
      cclegacy = module.cclegacy;
    }, function (module) {
      ENUM_GAME_MODE = module.ENUM_GAME_MODE;
      ENUM_GAME_STATUS = module.ENUM_GAME_STATUS;
    }],
    execute: function () {
      cclegacy._RF.push({}, "730a3DszhpGB4lxakYD51PT", "DataManager", undefined);
      const STORAGE_KEY = 'CC3_TETRIS_CLEARING';
      class DataManager {
        constructor() {
          // Ігровий режим
          this.mode = ENUM_GAME_MODE.SCORE;
          // Стан гри
          this.status = ENUM_GAME_STATUS.UNRUNING;
          // Прогрес завантаження
          this.loadingRate = 0;
          // Увімкнення музики та звуків
          this._isMusicOn = true;
          this._isSoundOn = true;
          // Інші ігри
          this.games = [{
            title: 'Знищення зірок',
            icon: 'xiao2d',
            appid: 'wxefd5a4ddd8e31b44',
            url: 'https://store.cocos.com/app/detail/4183'
          }, {
            title: 'Кубок з футболу',
            icon: 'football',
            appid: 'wx0c16e9d7f9e87dac',
            url: 'https://store.cocos.com/app/detail/4221'
          }, {
            title: 'Сходи догори',
            icon: 'stairway',
            appid: 'wx025bcf3a316bfa27',
            url: 'https://store.cocos.com/app/detail/4314'
          }, {
            title: 'Овечка 3D',
            icon: 'xiao3d',
            appid: 'wx5841e5a26082b380',
            url: 'https://store.cocos.com/app/detail/4148'
          }, {
            title: 'Класичний бабл-шутер',
            icon: 'bubble',
            appid: 'wxcc2f90afdf28ae3b',
            url: 'https://store.cocos.com/app/detail/4370'
          }];
          // Рівні
          this.level = 1;
          this.levelMax = 1;
          // Очки
          this.score = 0;
          this.scoreMax = 0;
          // Історичні дані
          this.historyData = null;
        }
        // Створення синглтону
        static getInstance() {
          if (this._instance === null) {
            this._instance = new this();
          }
          return this._instance;
        }
        static get instance() {
          return this.getInstance();
        }
        // Геттери і сеттери для музики та звуків
        get isMusicOn() {
          return this._isMusicOn;
        }
        set isMusicOn(value) {
          this._isMusicOn = value;
        }
        get isSoundOn() {
          return this._isSoundOn;
        }
        set isSoundOn(value) {
          this._isSoundOn = value;
        }

        // Скидання стану гри
        reset() {
          this.status = ENUM_GAME_STATUS.UNRUNING;
        }

        // Збереження даних
        save() {
          sys.localStorage.setItem(STORAGE_KEY, JSON.stringify({
            isSoundOn: this.isSoundOn,
            isMusicOn: this.isMusicOn,
            level: this.level,
            levelMax: this.levelMax,
            scoreMax: this.scoreMax,
            historyData: this.historyData
          }));
        }

        // Відновлення даних
        restore() {
          const _data = sys.localStorage.getItem(STORAGE_KEY);
          try {
            const data = JSON.parse(_data || '{}');
            this.isMusicOn = data?.isMusicOn !== false;
            this.isSoundOn = data?.isSoundOn !== false;
            this.level = typeof data.level === 'number' ? data.level : 1;
            this.levelMax = typeof data.levelMax === 'number' ? data.levelMax : 1;
            this.scoreMax = typeof data.scoreMax === 'number' ? data.scoreMax : 0;
            this.historyData = data?.historyData || null;
          } catch {
            this.isMusicOn = true;
            this.isSoundOn = true;
            this.level = 1;
            this.levelMax = 1;
            this.scoreMax = 0;
            this.historyData = null;
          }
        }
      }
      exports('default', DataManager);

      /**
       * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
       */
      // // Created by carolsail
      // 
      // import { ENUM_GAME_MODE, ENUM_GAME_STATUS } from '../Enum';
      // 
      // const STORAGE_KEY = 'CC2_TETRIS_CLEARING'
      // 
      // export type ICallBack = {
      //     status: boolean,
      //     data: any,
      //     msg: string
      // }
      // 
      // export type IUser = {
      //     openid: string,
      //     nickname: string,
      //     gender: number,
      //     avatar: string
      // }
      // 
      // export default class DataManager {
      // 
      //     private static _instance: any = null
      // 
      //     static getInstance<T>(): T {
      //         if (this._instance === null) {
      //             this._instance = new this()
      //         }
      // 
      //         return this._instance
      //     }
      // 
      //     static get instance() {
      //         return this.getInstance<DataManager>()
      //     }
      // 
      //     // 游戏模式
      //     mode: ENUM_GAME_MODE = ENUM_GAME_MODE.SCORE
      //     // 游戏状态
      //     status: ENUM_GAME_STATUS = ENUM_GAME_STATUS.UNRUNING
      //     // 加载进度
      //     loadingRate: number = 0
      //     // 声音开启
      //     _isMusicOn: boolean = true
      //     _isSoundOn: boolean = true
      //     // 更多游戏
      //     games: any[] = [
      //         { title: '消灭星星', icon: 'xiao2d', appid: 'wxefd5a4ddd8e31b44', url: 'https://store.cocos.com/app/detail/4183' },
      //         { title: '实况足球杯', icon: 'football', appid: 'wx0c16e9d7f9e87dac', url: 'https://store.cocos.com/app/detail/4221' },
      //         { title: '爬了个爬', icon: 'stairway', appid: 'wx025bcf3a316bfa27', url: 'https://store.cocos.com/app/detail/4314' },
      //         { title: '咩了个咩3D', icon: 'xiao3d', appid: 'wx5841e5a26082b380', url: 'https://store.cocos.com/app/detail/4148' },
      //         { title: '经典泡泡龙', icon: 'bubble', appid: 'wxcc2f90afdf28ae3b', url: 'https://store.cocos.com/app/detail/4370' },
      //     ]
      //     // 关卡
      //     level: number = 1
      //     levelMax: number = 1
      //     // 分数
      //     score: number = 0
      //     scoreMax: number = 0
      //     // 历史数据
      //     historyData: { main: number[], ready: number[], score: number } = null
      // 
      //     get isMusicOn() {
      //         return this._isMusicOn
      //     }
      // 
      //     set isMusicOn(data: boolean) {
      //         this._isMusicOn = data
      //     }
      // 
      //     get isSoundOn() {
      //         return this._isSoundOn
      //     }
      // 
      //     set isSoundOn(data: boolean) {
      //         this._isSoundOn = data
      //     }
      // 
      //     reset() {
      //         this.status = ENUM_GAME_STATUS.UNRUNING
      //     }
      // 
      //     save() {
      //         cc.sys.localStorage.setItem(STORAGE_KEY, JSON.stringify({
      //             isSoundOn: this.isSoundOn,
      //             isMusicOn: this.isMusicOn,
      //             level: this.level,
      //             levelMax: this.levelMax,
      //             scoreMax: this.scoreMax,
      //             historyData: this.historyData
      //         }))
      //     }
      // 
      //     restore() {
      //         const _data = cc.sys.localStorage.getItem(STORAGE_KEY) as any
      //         try {
      //             const data = JSON.parse(_data)
      //             this.isMusicOn = data?.isMusicOn === false ? false : true
      //             this.isSoundOn = data?.isSoundOn === false ? false : true
      //             this.level = typeof data.level == 'number' ? data.level : 1
      //             this.levelMax = typeof data.levelMax == 'number' ? data.levelMax : 1
      //             this.scoreMax = typeof data.scoreMax == 'number' ? data.scoreMax : 0
      //             this.historyData = data?.historyData || null
      //         } catch {
      //             this.isMusicOn = true
      //             this.isSoundOn = true
      //             this.level = 1
      //             this.levelMax = 1
      //             this.scoreMax = 0
      //             this.historyData = null
      //         }
      //     }
      // }
      DataManager._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EffectManager.ts", ['cc', './PoolManager.ts'], function (exports) {
  var Animation, ParticleSystem2D, cclegacy, PoolManager;
  return {
    setters: [function (module) {
      Animation = module.Animation;
      ParticleSystem2D = module.ParticleSystem2D;
      cclegacy = module.cclegacy;
    }, function (module) {
      PoolManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "def54s79C1DBq7aJq3x4CWS", "EffectManager", undefined);
      class EffectManager {
        /**
         * Отримання єдиного екземпляра класу (singleton).
         */
        static get instance() {
          if (this._instance === null) {
            this._instance = new EffectManager();
          }
          return this._instance;
        }

        /**
         * Відтворення ефекту.
         * @param effect - Назва ефекту.
         * @param parent - Батьківський вузол, до якого буде додано ефект.
         * @param options - Додаткові параметри (позиція тощо).
         */
        play(effect, parent, options) {
          // Отримання вузла ефекту з пулу
          const effNode = PoolManager.instance.getNode(effect, parent);
          if (options?.pos) {
            effNode.setPosition(options.pos); // Встановлення позиції, якщо вона задана
          }

          // Якщо вузол має компонент анімації
          if (effNode.getComponent(Animation)) {
            const anim = effNode.getComponent(Animation);
            anim.on(Animation.EventType.FINISHED, () => {
              effNode.removeFromParent(); // Видалення ефекту після завершення
              PoolManager.instance.putNode(effNode); // Повернення до пулу
            });

            anim.play(); // Запуск анімації
          }
          // Якщо вузол має компонент частинок
          else if (effNode.getComponent(ParticleSystem2D)) {
            const particleSystem = effNode.getComponent(ParticleSystem2D);
            particleSystem.resetSystem(); // Перезапуск системи частинок
          }
        }
      }

      exports('default', EffectManager);

      /**
       * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
       */
      // // Created by carolsail 
      // 
      // import PoolManager from "./PoolManager";
      // 
      // export default class EffectManager {
      //     public static _instance: EffectManager = null
      // 
      //     public static get instance() {
      //         if (null == this._instance) {
      //             this._instance = new EffectManager();
      //         }
      //         return this._instance
      //     }
      // 
      //     play(effect: string, parent: cc.Node, options?: any) {
      //         const effNode = PoolManager.instance.getNode(`${effect}`, parent)
      //         if (options) {
      //             options.pos && effNode.setPosition(options.pos)
      //         }
      //         if (effNode.getComponent(cc.Animation)) {
      //             const anim = effNode.getComponent(cc.Animation)
      //             anim.on('finished', () => {
      //                 effNode.removeFromParent()
      //             })
      //             anim.play()
      //         } else if (effNode.getComponent(cc.ParticleSystem)) {
      //             effNode.getComponent(cc.ParticleSystem).resetSystem()
      //         }
      //     }
      // }
      EffectManager._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Enum.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "50f2e0oDptJt4SjWGm8di2L", "Enum", undefined);
      /*
       * @Author: carolsail 
       * @Date: 2023-12-08 09:40:56 
       * @Last Modified by: carolsail
       * @Last Modified time: 2023-12-08 11:04:05
       */

      // модель
      let ENUM_GAME_MODE = exports('ENUM_GAME_MODE', /*#__PURE__*/function (ENUM_GAME_MODE) {
        ENUM_GAME_MODE["SCORE"] = "SCORE";
        ENUM_GAME_MODE["LEVEL"] = "LEVEL";
        return ENUM_GAME_MODE;
      }({}));

      // стан
      let ENUM_GAME_STATUS = exports('ENUM_GAME_STATUS', /*#__PURE__*/function (ENUM_GAME_STATUS) {
        ENUM_GAME_STATUS["UNRUNING"] = "UNRUNING";
        ENUM_GAME_STATUS["RUNING"] = "RUNING";
        return ENUM_GAME_STATUS;
      }({}));

      // звукові ефекти
      let ENUM_AUDIO_CLIP = exports('ENUM_AUDIO_CLIP', /*#__PURE__*/function (ENUM_AUDIO_CLIP) {
        ENUM_AUDIO_CLIP["BGM"] = "bgm";
        ENUM_AUDIO_CLIP["CLICK"] = "click";
        ENUM_AUDIO_CLIP["LOSE"] = "lose";
        ENUM_AUDIO_CLIP["WIN"] = "win";
        ENUM_AUDIO_CLIP["BLOCK_ACTIVE"] = "block_active";
        ENUM_AUDIO_CLIP["BLOCK_UNACTIVE"] = "block_unactive";
        ENUM_AUDIO_CLIP["SKILL_BACK"] = "skill_back";
        ENUM_AUDIO_CLIP["SKILL_BOMB"] = "skill_bomb";
        ENUM_AUDIO_CLIP["SKILL_SHUFFLE"] = "skill_shuffle";
        return ENUM_AUDIO_CLIP;
      }({}));

      // ui layer
      let ENUM_UI_TYPE = exports('ENUM_UI_TYPE', /*#__PURE__*/function (ENUM_UI_TYPE) {
        ENUM_UI_TYPE["MENU"] = "MenuLayer";
        ENUM_UI_TYPE["MAIN"] = "MainLayer";
        ENUM_UI_TYPE["SETTING"] = "SettingLayer";
        ENUM_UI_TYPE["EXIT"] = "ExitLayer";
        ENUM_UI_TYPE["LOSE"] = "LoseLayer";
        ENUM_UI_TYPE["WIN"] = "WinLayer";
        ENUM_UI_TYPE["MORE"] = "MoreLayer";
        return ENUM_UI_TYPE;
      }({}));

      // block status
      let ENUM_BLOCK_STATUS = exports('ENUM_BLOCK_STATUS', /*#__PURE__*/function (ENUM_BLOCK_STATUS) {
        ENUM_BLOCK_STATUS[ENUM_BLOCK_STATUS["SHOW"] = 255] = "SHOW";
        ENUM_BLOCK_STATUS[ENUM_BLOCK_STATUS["TIP"] = 100] = "TIP";
        ENUM_BLOCK_STATUS[ENUM_BLOCK_STATUS["HIDE"] = 0] = "HIDE";
        return ENUM_BLOCK_STATUS;
      }({}));
      let ENUM_RBLOCK_STATUS = exports('ENUM_RBLOCK_STATUS', /*#__PURE__*/function (ENUM_RBLOCK_STATUS) {
        ENUM_RBLOCK_STATUS[ENUM_RBLOCK_STATUS["SHOW"] = 255] = "SHOW";
        ENUM_RBLOCK_STATUS[ENUM_RBLOCK_STATUS["HIDE"] = 100] = "HIDE";
        return ENUM_RBLOCK_STATUS;
      }({}));

      // 资源
      const ENUM_RESOURCE_TYPE = exports('ENUM_RESOURCE_TYPE', [{
        content: cc.AudioClip,
        path: 'audio',
        type: 'audio',
        ratio: 0.4
      }, {
        content: cc.Prefab,
        path: 'prefab',
        type: 'prefab',
        ratio: 0.3
      }, {
        content: cc.SpriteFrame,
        path: 'sprite',
        type: 'sprite',
        ratio: 0.3
      }
      // {content: cc.JsonAsset, path: 'json', type: 'json', ratio: 0.1},
      ]);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventManager.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bcae8q0UKhLAL4D4SoN+gEr", "EventManager", undefined); // Created by carolsail
      class EventManager {
        constructor() {
          this.eventMap = new Map();
        }
        /**
         * Отримання єдиного екземпляра класу (singleton).
         */
        static get instance() {
          if (this._instance === null) {
            this._instance = new EventManager();
          }
          return this._instance;
        }
        /**
         * Підписка на подію.
         * @param name - Назва події.
         * @param event - Функція-обробник події.
         * @param context - Контекст для виклику функції (опціонально).
         */
        on(name, event, context) {
          if (this.eventMap.has(name)) {
            const eventArr = this.eventMap.get(name);
            eventArr.push({
              event,
              context
            });
          } else {
            this.eventMap.set(name, [{
              event,
              context
            }]);
          }
        }

        /**
         * Відписка від події.
         * @param name - Назва події.
         * @param event - Функція-обробник, яку потрібно відписати.
         */
        off(name, event) {
          if (this.eventMap.has(name)) {
            const eventArr = this.eventMap.get(name);
            const index = eventArr.findIndex(item => item.event === event);
            if (index > -1) eventArr.splice(index, 1);
          }
        }

        /**
         * Виклик події.
         * @param name - Назва події.
         * @param params - Параметри, які передаються в функцію-обробник.
         */
        emit(name) {
          for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            params[_key - 1] = arguments[_key];
          }
          if (this.eventMap.has(name)) {
            const eventArr = this.eventMap.get(name);
            eventArr.forEach(_ref => {
              let {
                event,
                context
              } = _ref;
              context ? event.apply(context, params) : event(...params);
            });
          }
        }

        /**
         * Очистка всіх подій.
         */
        clear() {
          this.eventMap.clear();
        }
      }
      exports('default', EventManager);

      /**
       * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
       */
      // // Created by carolsail
      // 
      // interface IEventItem {
      //     event: Function
      //     context: unknown
      // }
      // 
      // export default class EventManager {
      //     private static _instance: any = null
      // 
      //     static getInstance<T>(): T {
      //         if (this._instance === null) {
      //             this._instance = new this()
      //         }
      // 
      //         return this._instance
      //     }
      // 
      //     eventMap: Map<String, Array<IEventItem>> = new Map()
      // 
      //     static get instance() {
      //         return this.getInstance<EventManager>()
      //     }
      // 
      //     on(name: string, event: Function, context?: unknown){
      //         if(this.eventMap.has(name)){
      //             const eventArr = this.eventMap.get(name)
      //             eventArr.push({event, context})
      //         }else{
      //             this.eventMap.set(name, [{event, context}])
      //         }
      //     }
      // 
      //     off(name: string, event: Function){
      //         if(this.eventMap.has(name)){
      //             const eventArr = this.eventMap.get(name)
      //             const index = eventArr.findIndex(item => item.event == event)
      //             if(index > -1) eventArr.splice(index, 1)
      //         }
      //     }
      // 
      //     emit(name: string, ...params: unknown[]){
      //         if(this.eventMap.has(name)){
      //             const eventArr = this.eventMap.get(name)
      //             eventArr.forEach(({event, context}) => {
      //                 context ? event.apply(context, params) : event(params)
      //             })
      //         }
      //     }
      // 
      //     clear(){
      //         this.eventMap.clear()
      //     }
      // }
      EventManager._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ExitLayer.ts", ['cc', './Enum.ts', './StaticInstance.ts', './AudioManager.ts', './Baselayer.ts', './DataManager.ts', './SdkManager.ts'], function (exports) {
  var cclegacy, find, _decorator, ENUM_AUDIO_CLIP, ENUM_UI_TYPE, ENUM_GAME_STATUS, StaticInstance, AudioManager, BaseLayer, DataManager, SdkManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      find = module.find;
      _decorator = module._decorator;
    }, function (module) {
      ENUM_AUDIO_CLIP = module.ENUM_AUDIO_CLIP;
      ENUM_UI_TYPE = module.ENUM_UI_TYPE;
      ENUM_GAME_STATUS = module.ENUM_GAME_STATUS;
    }, function (module) {
      StaticInstance = module.StaticInstance;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      BaseLayer = module.default;
    }, function (module) {
      DataManager = module.default;
    }, function (module) {
      SdkManager = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "30bdbeLI7FCC6dF2SvgX/Hg", "ExitLayer", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let ExitLayer = exports('default', (_dec = ccclass('ExitLayer'), _dec(_class = class ExitLayer extends BaseLayer {
        constructor() {
          super(...arguments);
          this.panel = null;
          this.btnSubmit = null;
          this.btnRestart = null;
          this.btnClose = null;
        }
        onLoad() {
          this.panel = find('style/panel', this.node);
          this.btnSubmit = find('buttons/btn_submit', this.panel);
          this.btnRestart = find('buttons/btn_restart', this.panel);
          this.btnClose = find('btn_close', this.panel);
          this.btnSubmit.on('click', this.onSubmitClick, this);
          this.btnRestart.on('click', this.onRestartClick, this);
          this.btnClose.on('click', this.onCloseClick, this);
        }
        onDestroy() {
          this.btnSubmit.off('click', this.onSubmitClick, this);
          this.btnSubmit.off('click', this.onRestartClick, this);
          this.btnClose.off('click', this.onCloseClick, this);
        }
        onEnable() {
          this.zoomIn(this.panel);
          SdkManager.instance.toggleBannerAd(true);
        }
        onDisable() {
          SdkManager.instance.toggleBannerAd(false);
        }
        onCloseClick() {
          AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK);
          StaticInstance.uiManager.toggle(ENUM_UI_TYPE.EXIT, false);
        }
        onSubmitClick() {
          AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK);
          DataManager.instance.status = ENUM_GAME_STATUS.UNRUNING;
          StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MAIN, false);
          StaticInstance.uiManager.toggle(ENUM_UI_TYPE.EXIT, false);
          StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MENU);
        }
        async onRestartClick() {
          AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK);
          DataManager.instance.historyData = null;
          DataManager.instance.save();
          await StaticInstance.fadeManager.fadeIn();
          StaticInstance.uiManager.toggle(ENUM_UI_TYPE.EXIT, false);
          DataManager.instance.score = 0;
          StaticInstance.gameManager.onGameStart();
        }
      }) || _class));
      /**
       * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
       */
      // // Created by carolsail
      // 
      // import { ENUM_AUDIO_CLIP, ENUM_GAME_STATUS, ENUM_UI_TYPE } from "../Enum";
      // import { StaticInstance } from './../StaticInstance';
      // import AudioManager from "../manager/AudioManager";
      // import BaseLayer from "./Baselayer";
      // import DataManager from "../manager/DataManager";
      // import SdkManager from "../manager/SdkManager";
      // 
      // const { ccclass, property } = cc._decorator;
      // 
      // @ccclass
      // export default class ExitLayer extends BaseLayer {
      // 
      //     panel: cc.Node = null
      //     btnSubmit: cc.Node = null
      //     btnRestart: cc.Node = null
      //     btnClose: cc.Node = null
      // 
      //     onLoad() {
      //         this.panel = cc.find('style/panel', this.node)
      //         this.btnSubmit = cc.find('buttons/btn_submit', this.panel)
      //         this.btnRestart = cc.find('buttons/btn_restart', this.panel)
      //         this.btnClose = cc.find('btn_close', this.panel)
      //         this.btnSubmit.on('click', this.onSubmitClick, this)
      //         this.btnRestart.on('click', this.onRestartClick, this)
      //         this.btnClose.on('click', this.onCloseClick, this)
      //     }
      // 
      //     onDestroy() {
      //         this.btnSubmit.off('click', this.onSubmitClick, this)
      //         this.btnSubmit.off('click', this.onRestartClick, this)
      //         this.btnClose.off('click', this.onCloseClick, this)
      //     }
      // 
      //     onEnable() {
      //         this.zoomIn(this.panel)
      //         SdkManager.instance.toggleBannerAd(true)
      //     }
      // 
      //     onDisable() {
      //         SdkManager.instance.toggleBannerAd(false)
      //     }
      // 
      //     onCloseClick() {
      //         AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
      //         StaticInstance.uiManager.toggle(ENUM_UI_TYPE.EXIT, false)
      //     }
      // 
      //     onSubmitClick() {
      //         AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
      //         DataManager.instance.status = ENUM_GAME_STATUS.UNRUNING
      //         StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MAIN, false)
      //         StaticInstance.uiManager.toggle(ENUM_UI_TYPE.EXIT, false)
      //         StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MENU)
      //     }
      // 
      //     async onRestartClick() {
      //         AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
      //         DataManager.instance.historyData = null
      //         DataManager.instance.save()
      //         await StaticInstance.fadeManager.fadeIn()
      //         StaticInstance.uiManager.toggle(ENUM_UI_TYPE.EXIT, false)
      //         DataManager.instance.score = 0
      //         StaticInstance.gameManager.onGameStart()
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FadeManager.ts", ['cc', './StaticInstance.ts'], function (exports) {
  var cclegacy, Component, UIOpacity, tween, _decorator, StaticInstance;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      _decorator = module._decorator;
    }, function (module) {
      StaticInstance = module.StaticInstance;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "00872TxwjFFprih9XF/Yufu", "FadeManager", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let FadeManager = exports('default', (_dec = ccclass('FadeManager'), _dec(_class = class FadeManager extends Component {
        onLoad() {
          // Вимикаємо вузол під час завантаження
          this.node.active = false;

          // Зберігаємо посилання на цей екземпляр у StaticInstance
          StaticInstance.setFadeManager(this);
        }

        /**
         * Відображення (fade-in) вузла.
         * @param seconds - Тривалість анімації в секундах (за замовчуванням 0.2).
         * @returns Проміс, який завершується після завершення анімації.
         */
        fadeIn(seconds) {
          if (seconds === void 0) {
            seconds = 0.2;
          }
          return new Promise(resolve => {
            this.node.active = true; // Активуємо вузол
            const opacity = this.node.getComponent(UIOpacity);
            opacity.opacity = 0; // Встановлюємо прозорість на 0
            tween(opacity).to(seconds, {
              opacity: 255
            }) // Анімація зміни прозорості до 255
            .call(() => {
              resolve(); // Завершуємо проміс після анімації
            }).start();
          });
        }

        /**
         * Зникнення (fade-out) вузла.
         * @param seconds - Тривалість анімації в секундах (за замовчуванням 0.2).
         * @returns Проміс, який завершується після завершення анімації.
         */
        fadeOut(seconds) {
          if (seconds === void 0) {
            seconds = 0.2;
          }
          return new Promise(resolve => {
            this.node.active = true; // Активуємо вузол перед анімацією
            const opacity = this.node.getComponent(UIOpacity);
            opacity.opacity = 255; // Встановлюємо прозорість на 255
            tween(opacity).to(seconds, {
              opacity: 0
            }) // Анімація зміни прозорості до 0
            .call(() => {
              this.node.active = false; // Вимикаємо вузол після завершення
              resolve(); // Завершуємо проміс після анімації
            }).start();
          });
        }
      }) || _class));
      /**
       * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
       */
      // // Created by carolsail
      // 
      // import { StaticInstance } from "../StaticInstance";
      // 
      // const { ccclass, property } = cc._decorator;
      // 
      // @ccclass
      // export default class FadeManager extends cc.Component {
      //     onLoad() {
      //         this.node.active = false
      //         StaticInstance.setFadeManager(this)
      //     }
      // 
      //     fadeIn(seconds: number = 0.2) {
      //         return new Promise(resolve => {
      //             this.node.active = true
      //             this.node.opacity = 0
      //             cc.tween(this.node).to(seconds, { opacity: 255 }).call(() => {
      //                 resolve(null)
      //             }).start()
      //         })
      //     }
      // 
      //     fadeOut(seconds: number = 0.2) {
      //         return new Promise(resolve => {
      //             this.node.active = true
      //             this.node.opacity = 255
      //             cc.tween(this.node).to(seconds, { opacity: 0 }).call(() => {
      //                 this.node.active = false
      //                 resolve(null)
      //             }).start()
      //         })
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameManager.ts", ['cc', './Enum.ts', './StaticInstance.ts', './Level.ts', './AudioManager.ts', './DataManager.ts', './PoolManager.ts'], function (exports) {
  var cclegacy, Component, find, _decorator, ENUM_GAME_STATUS, ENUM_UI_TYPE, ENUM_GAME_MODE, ENUM_AUDIO_CLIP, StaticInstance, Level, AudioManager, DataManager, PoolManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      find = module.find;
      _decorator = module._decorator;
    }, function (module) {
      ENUM_GAME_STATUS = module.ENUM_GAME_STATUS;
      ENUM_UI_TYPE = module.ENUM_UI_TYPE;
      ENUM_GAME_MODE = module.ENUM_GAME_MODE;
      ENUM_AUDIO_CLIP = module.ENUM_AUDIO_CLIP;
    }, function (module) {
      StaticInstance = module.StaticInstance;
    }, function (module) {
      Level = module.default;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      DataManager = module.default;
    }, function (module) {
      PoolManager = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "8d970VZoPFL/L9/Lg/KHxlp", "GameManager", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let GameManager = exports('default', (_dec = ccclass('GameManager'), _dec(_class = class GameManager extends Component {
        constructor() {
          super(...arguments);
          this.stage = null;
        }
        onLoad() {
          StaticInstance.setGameManager(this);
          this.stage = find('Stage', this.node); // Знаходимо дочірній вузол Stage
        }

        onDestroy() {
          // Можна додати очищення ресурсів, якщо потрібно
        }

        // Почати гру
        onGameStart() {
          DataManager.instance.reset();
          this.initGame();
        }

        // Завершити гру
        onGameOver(ui) {
          DataManager.instance.status = ENUM_GAME_STATUS.UNRUNING;
          if (ui === ENUM_UI_TYPE.LOSE) {
            if (DataManager.instance.mode === ENUM_GAME_MODE.SCORE) {
              DataManager.instance.historyData = null;
              DataManager.instance.save();
            }
            AudioManager.instance.playSound(ENUM_AUDIO_CLIP.LOSE);

            // Використовуємо таймер
            this.scheduleOnce(() => {
              StaticInstance.uiManager.toggle(ENUM_UI_TYPE.LOSE);
            }, 0.3);
          }
        }

        // Ініціалізація гри
        async initGame() {
          DataManager.instance.status = ENUM_GAME_STATUS.UNRUNING;
          if (this.stage) {
            this.stage.removeAllChildren(); // Видаляємо всіх дочірніх вузлів
            const levelScore = PoolManager.instance.getNode('LevelScore', this.stage);
            levelScore.getComponent(Level).init();
          }
          DataManager.instance.status = ENUM_GAME_STATUS.RUNING;
          await StaticInstance.fadeManager.fadeOut(); // Чекаємо завершення анімації
        }
      }) || _class));
      /**
       * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
       */
      // // Created by carolsail
      // const { ccclass, property } = cc._decorator;
      // 
      // import { ENUM_AUDIO_CLIP, ENUM_GAME_MODE, ENUM_GAME_STATUS, ENUM_UI_TYPE } from "../Enum";
      // import { StaticInstance } from "../StaticInstance";
      // import Level from "../game/Level";
      // import AudioManager from "./AudioManager";
      // import DataManager from "./DataManager";
      // import PoolManager from "./PoolManager";
      // 
      // @ccclass
      // export default class GameManager extends cc.Component {
      // 
      //     stage: cc.Node = null;
      // 
      //     onLoad() {
      //         StaticInstance.setGameManager(this);
      //         this.stage = cc.find('Stage', this.node);
      //     }
      // 
      //     onDestroy() { }
      // 
      //     // Почати гру
      //     onGameStart() {
      //         DataManager.instance.reset();
      //         this.initGame();
      //     }
      // 
      //     // Завершити гру
      //     onGameOver(ui: ENUM_UI_TYPE) {
      //         DataManager.instance.status = ENUM_GAME_STATUS.UNRUNING;
      //         if (ui == ENUM_UI_TYPE.LOSE) {
      //             if (DataManager.instance.mode == ENUM_GAME_MODE.SCORE) {
      //                 DataManager.instance.historyData = null;
      //                 DataManager.instance.save();
      //             }
      //             AudioManager.instance.playSound(ENUM_AUDIO_CLIP.LOSE);
      //             this.scheduleOnce(() => {
      //                 StaticInstance.uiManager.toggle(ENUM_UI_TYPE.LOSE);
      //             }, 0.3);
      //         }
      //     }
      // 
      //     // Ініціалізація гри
      //     async initGame() {
      //         DataManager.instance.status = ENUM_GAME_STATUS.UNRUNING;
      //         this.stage.removeAllChildren();
      //         const levelScore = PoolManager.instance.getNode('LevelScore', this.stage);
      //         levelScore.getComponent(Level).init();
      //         DataManager.instance.status = ENUM_GAME_STATUS.RUNING;
      //         await StaticInstance.fadeManager.fadeOut();
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Index.ts", ['cc', './StaticInstance.ts', './Enum.ts', './AudioManager.ts', './DataManager.ts', './ResourceManager.ts', './SdkManager.ts', './telegram-web.ts'], function (exports) {
  var cclegacy, Component, UIOpacity, view, _decorator, StaticInstance, ENUM_RESOURCE_TYPE, ENUM_UI_TYPE, AudioManager, DataManager, ResourceManager, SdkManager, TelegramWebApp;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      UIOpacity = module.UIOpacity;
      view = module.view;
      _decorator = module._decorator;
    }, function (module) {
      StaticInstance = module.StaticInstance;
    }, function (module) {
      ENUM_RESOURCE_TYPE = module.ENUM_RESOURCE_TYPE;
      ENUM_UI_TYPE = module.ENUM_UI_TYPE;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      DataManager = module.default;
    }, function (module) {
      ResourceManager = module.default;
    }, function (module) {
      SdkManager = module.default;
    }, function (module) {
      TelegramWebApp = module.TelegramWebApp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "bd1a12oV81Cu7bBxEAPpr3S", "Index", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let Index = exports('default', (_dec = ccclass('Index'), _dec(_class = class Index extends Component {
        onLoad() {
          this.node.getChildByName('UI').getComponent(UIOpacity).opacity = 255;
          view.setResizeCallback(() => this.responsive());
          this.responsive();
          DataManager.instance.loadingRate = 0;
          TelegramWebApp.Instance.init().then(res => {
            console.log("telegram web app init : ", res.success);
            console.log(TelegramWebApp.Instance.getTelegramInitData());
            var webAppObject = TelegramWebApp.Instance.getTelegramWebApp();

            //webAppObject.requestFullscreen();
          });
        }

        async start() {
          // Завантаження ресурсів
          for (const index in ENUM_RESOURCE_TYPE) {
            const resource = ENUM_RESOURCE_TYPE[index];
            await ResourceManager.instance.loadRes(resource);
          }
          // Завантаження UI
          StaticInstance.uiManager.init();
          // Відновлення даних
          DataManager.instance.restore();
          // Відтворення музики
          AudioManager.instance.playMusic();
          // Ініціалізація SDK
          SdkManager.instance.initAudioEndListener();
          SdkManager.instance.passiveShare();
          SdkManager.instance.getRank();
          SdkManager.instance.initBannerAd();
          //SdkManager.instance.initInterstitialAd()
          SdkManager.instance.initVideoAd();
          SdkManager.instance.initCustomRowAd();
          SdkManager.instance.initCustomColAd();
          // Операції з UI
          StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MENU, true, () => {
            DataManager.instance.loadingRate = 1;
          });
        }

        // Адаптивність екрану
        responsive() {
          const designSize = view.getDesignResolutionSize();
          const viewSize = view.getFrameSize();
          const designRatio = designSize.width / designSize.height;
          const viewRatio = viewSize.width / viewSize.height;
        }
      }) || _class));
      /**
       * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
       */
      // // Created by carolsail
      // 
      // import { StaticInstance } from './StaticInstance';
      // import { ENUM_RESOURCE_TYPE, ENUM_UI_TYPE } from './Enum';
      // import AudioManager from "./manager/AudioManager";
      // import DataManager from './manager/DataManager';
      // import ResourceManager from "./manager/ResourceManager";
      // import SdkManager from './manager/SdkManager';
      // 
      // const { ccclass, property } = cc._decorator;
      // 
      // @ccclass
      // export default class Index extends cc.Component {
      // 
      //     onLoad() {
      //         this.node.getChildByName('UI').opacity = 255
      //         cc.view.setResizeCallback(() => this.responsive())
      //         this.responsive()
      //         DataManager.instance.loadingRate = 0
      //     }
      // 
      //     async start() {
      //         // Завантаження ресурсів
      //         for (const index in ENUM_RESOURCE_TYPE) {
      //             const resource = ENUM_RESOURCE_TYPE[index]
      //             await ResourceManager.instance.loadRes(resource)
      //         }
      //         // Завантаження UI
      //         StaticInstance.uiManager.init()
      //         // Відновлення даних
      //         DataManager.instance.restore()
      //         // Відтворення музики
      //         AudioManager.instance.playMusic()
      //         // Ініціалізація SDK
      //         SdkManager.instance.initAudioEndListener()
      //         SdkManager.instance.passiveShare()
      //         SdkManager.instance.getRank()
      //         SdkManager.instance.initBannerAd()
      //         SdkManager.instance.initInterstitialAd()
      //         SdkManager.instance.initVideoAd()
      //         SdkManager.instance.initCustomRowAd()
      //         SdkManager.instance.initCustomColAd()
      //         // Операції з UI
      //         StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MENU, true, () => {
      //             DataManager.instance.loadingRate = 1
      //         })
      //     }
      // 
      //     // Адаптивність екрану
      //     responsive() {
      //         const designSize = cc.view.getDesignResolutionSize();
      //         const viewSize = cc.view.getFrameSize();
      // 
      //         const setFitWidth = () => {
      //             cc.Canvas.instance.fitHeight = false;
      //             cc.Canvas.instance.fitWidth = true;
      //         }
      // 
      //         const setFitHeight = () => {
      //             cc.Canvas.instance.fitHeight = true;
      //             cc.Canvas.instance.fitWidth = false;
      //         }
      // 
      //         const setFitBoth = () => {
      //             cc.Canvas.instance.fitHeight = true;
      //             cc.Canvas.instance.fitWidth = true;
      //         }
      // 
      //         const designRatio = designSize.width / designSize.height
      //         const viewRatio = viewSize.width / viewSize.height
      //         if (designRatio < 1) {
      //             // console.error('--Гра у вертикальному режимі')
      //             if (viewRatio < 1) {
      //                 if (viewRatio > designRatio) {
      //                     setFitBoth()
      //                 } else {
      //                     setFitWidth()
      //                 }
      //             } else {
      //                 setFitBoth()
      //             }
      //         } else {
      //             // console.error('--Гра у горизонтальному режимі')
      //             if (viewRatio > 1) {
      //                 if (viewRatio < designRatio) {
      //                     setFitBoth()
      //                 } else {
      //                     setFitHeight()
      //                 }
      //             } else {
      //                 setFitBoth()
      //             }
      //         }
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Level.ts", ['cc', './Enum.ts', './StaticInstance.ts', './Utils.ts', './AudioManager.ts', './DataManager.ts', './EffectManager.ts', './PoolManager.ts', './SdkManager.ts', './ToastManager.ts', './Block.ts', './BlockReady.ts'], function (exports) {
  var cclegacy, Component, find, Label, v2, tween, Vec3, UITransform, Vec2, color, _decorator, ENUM_GAME_MODE, ENUM_GAME_STATUS, ENUM_AUDIO_CLIP, ENUM_BLOCK_STATUS, ENUM_RBLOCK_STATUS, ENUM_UI_TYPE, StaticInstance, getDistance, random, AudioManager, DataManager, EffectManager, PoolManager, SdkManager, ToastManager, Block, BlockReady;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      find = module.find;
      Label = module.Label;
      v2 = module.v2;
      tween = module.tween;
      Vec3 = module.Vec3;
      UITransform = module.UITransform;
      Vec2 = module.Vec2;
      color = module.color;
      _decorator = module._decorator;
    }, function (module) {
      ENUM_GAME_MODE = module.ENUM_GAME_MODE;
      ENUM_GAME_STATUS = module.ENUM_GAME_STATUS;
      ENUM_AUDIO_CLIP = module.ENUM_AUDIO_CLIP;
      ENUM_BLOCK_STATUS = module.ENUM_BLOCK_STATUS;
      ENUM_RBLOCK_STATUS = module.ENUM_RBLOCK_STATUS;
      ENUM_UI_TYPE = module.ENUM_UI_TYPE;
    }, function (module) {
      StaticInstance = module.StaticInstance;
    }, function (module) {
      getDistance = module.getDistance;
      random = module.random;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      DataManager = module.default;
    }, function (module) {
      EffectManager = module.default;
    }, function (module) {
      PoolManager = module.default;
    }, function (module) {
      SdkManager = module.default;
    }, function (module) {
      ToastManager = module.default;
    }, function (module) {
      Block = module.default;
    }, function (module) {
      BlockReady = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "bed791tFeFAgZOiFmhB/8SN", "Level", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      const BSIZE = 78;
      const XNUM = 8;
      const RNUM = 3;
      const TNUM = 35;
      let Level = exports('default', (_dec = ccclass('Level'), _dec(_class = class Level extends Component {
        constructor() {
          super(...arguments);
          //    // 技能
          this.skills = null;
          this.skillTip = null;
          //    // 主块
          this.blocks_main = null;
          //    // 效果层
          this.eff = null;
          //    // 连击层
          this.combo = null;
          //    // 备块
          this.slots_ready = null;
          this.blocks_ready = null;
          //    // 分数
          this.score_current_num = null;
          this.score_max_num = null;
          //    // 开关
          this.isInitReadyBlock = false;
          //    // 上一次放置
          this.hasShowTip = false;
          //    // 合并数
          this.combineNum = 0;
          //    // 连击数
          this.comboNum = 0;
          //    // 炸弹
          this.isBomb = false;
        }
        init() {
          this.skills = find('skills', this.node);
          this.skillTip = find('skills/tip', this.node);
          this.slots_ready = find('ready/slots', this.node);
          this.score_current_num = find('header/score_current/num', this.node);
          this.score_max_num = find('header/score_max/num', this.node);
          this.eff = find('main/eff', this.node);
          this.combo = find('combo', this.node);
          this.blocks_main = find('main/blocks', this.node);
          this.initMainBlocks();
          this.blocks_ready = find('ready/blocks', this.node);
          this.initReadyBlocks(true);
          this.score_max_num.getComponent(Label).string = `${DataManager.instance.scoreMax}`;
          this.setTouch(true);
          this.setSkill(true);
        }
        initMainBlocks() {
          for (let i = 0; i < XNUM * XNUM; i++) {
            const block = PoolManager.instance.getNode('Block', this.blocks_main);
            const blockComp = block.getComponent(Block);
            const x = Math.floor(i / XNUM);
            const y = i % XNUM;
            blockComp.init(x, y, i);
          }
          // 历史数据
          if (DataManager.instance.mode == ENUM_GAME_MODE.SCORE && DataManager.instance.historyData) {
            const {
              main,
              score
            } = DataManager.instance.historyData;
            for (let i = 0; i < this.blocks_main.children.length; i++) {
              const block = this.blocks_main.children[i];
              const blockComp = block.getComponent(Block);
              blockComp.setOpacity(main[i]);
            }
            DataManager.instance.score = score;
          }
          this.score_current_num.getComponent(Label).string = `${DataManager.instance.score}`;
        }
        initReadyBlocks(isInit) {
          if (isInit === void 0) {
            isInit = false;
          }
          this.blocks_ready.removeAllChildren();
          this.isInitReadyBlock = true;
          for (let i = 0; i < RNUM; i++) {
            // 历史数据
            if (isInit && DataManager.instance.mode == ENUM_GAME_MODE.SCORE && DataManager.instance.historyData) {
              const {
                ready
              } = DataManager.instance.historyData;
              if (ready[i] >= 0) {
                let index = ready[i];
                const blockReady = PoolManager.instance.getNode(`BlockReady${index}`, this.blocks_ready);
                const slot = this.slots_ready.children[i];
                blockReady.getComponent(BlockReady).init(index, v2(slot.position.x, slot.position.y));
                //blockReady.setScale(new Vec3(0))
              } else {
                continue;
              }
            } else {
              let index = random(1, TNUM);
              // index = 17
              const blockReady = PoolManager.instance.getNode(`BlockReady${index}`, this.blocks_ready);
              const slot = this.slots_ready.children[i];
              blockReady.getComponent(BlockReady).init(index, v2(slot.position.x, slot.position.y));
              //blockReady.setScale(new Vec3(0))
            }
          }
          // 检测转态
          this.checkReadyBlocks();
          // 动画
          for (let j = 0; j < this.blocks_ready.children.length; j++) {
            const blockReady = this.blocks_ready.children[j];
            const blockReadyComp = blockReady.getComponent(BlockReady);
            tween(blockReady).to(0.3, {
              scale: new Vec3(blockReadyComp.scale, blockReadyComp.scale, blockReadyComp.scale)
            }).start();
          }
          this.scheduleOnce(() => {
            this.isInitReadyBlock = false;
          }, 0.3);
        }
        setTouch(bool) {
          if (bool === void 0) {
            bool = true;
          }
          if (bool) {
            this.node.on('touchstart', this.onTouchStart, this);
            this.node.on('touchmove', this.onTouchMove, this);
            this.node.on('touchend', this.onTouchOver, this);
            this.node.on('touchcancel', this.onTouchOver, this);
          } else {
            this.node.off('touchstart', this.onTouchStart, this);
            this.node.off('touchmove', this.onTouchMove, this);
            this.node.off('touchend', this.onTouchOver, this);
            this.node.off('touchcancel', this.onTouchOver, this);
          }
        }
        setSkill(bool) {
          if (bool === void 0) {
            bool = true;
          }
          if (bool) {
            this.skills.getChildByName('skill_bomb').on('click', this.onSkillBomb, this);
            this.skills.getChildByName('skill_shuffle').on('click', this.onSkillShuffle, this);
          } else {
            this.skills.getChildByName('skill_bomb').off('click', this.onSkillBomb, this);
            this.skills.getChildByName('skill_shuffle').off('click', this.onSkillShuffle, this);
          }
        }
        onTouchStart(e) {
          if (DataManager.instance.status == ENUM_GAME_STATUS.UNRUNING && this.isInitReadyBlock) return;
          const location = e.getLocation();
          if (this.isBomb) {
            const point_main = this.blocks_main.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(location.x, location.y));
            let block = null;
            for (let i = 0; i < this.blocks_main.children.length; i++) {
              const b = this.blocks_main.children[i];
              const box = b.getComponent(UITransform).getBoundingBox();
              if (box.contains(new Vec2(point_main.x, point_main.y))) {
                block = b;
                break;
              }
            }
            if (block) {
              const blockComp = block.getComponent(Block);
              const row = Math.floor(blockComp.index / XNUM);
              const index = blockComp.index % 8;
              let indexArr = [blockComp.index];
              // 左
              const lindex = index - 1;
              if (lindex >= 0) {
                indexArr.push(row * XNUM + lindex);
              }
              // 右
              const rindex = index + 1;
              if (rindex < XNUM) {
                indexArr.push(row * XNUM + rindex);
              }
              // 上
              const urow = row + 1;
              if (urow < XNUM) {
                indexArr.push(urow * XNUM + index);
                const lindex = index - 1;
                if (lindex >= 0) {
                  indexArr.push(urow * XNUM + lindex);
                }
                const rindex = index + 1;
                if (rindex < XNUM) {
                  indexArr.push(urow * XNUM + rindex);
                }
              }
              // 下
              const drow = row - 1;
              if (drow >= 0) {
                indexArr.push(drow * XNUM + index);
                const lindex = index - 1;
                if (lindex >= 0) {
                  indexArr.push(drow * XNUM + lindex);
                }
                const rindex = index + 1;
                if (rindex < XNUM) {
                  indexArr.push(drow * XNUM + rindex);
                }
              }
              // 遍历爆炸
              AudioManager.instance.playSound(ENUM_AUDIO_CLIP.SKILL_BOMB);
              for (let i = 0; i < this.blocks_main.children.length; i++) {
                const block = this.blocks_main.children[i];
                const blockComp = block.getComponent(Block);
                if (indexArr.includes(blockComp.index)) {
                  if (blockComp.status == ENUM_BLOCK_STATUS.SHOW) this.setScore();
                  blockComp.setActive(false);
                  blockComp.setOpacity(ENUM_BLOCK_STATUS.HIDE);
                  EffectManager.instance.play('EffCombine', this.eff, {
                    pos: block.getPosition()
                  });
                }
              }
              this.isBomb = false;
              this.skillTip.active = false;
            }
            return;
          }
          const point_ready = this.blocks_ready.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(location.x, location.y));
          for (let i = 0; i < this.blocks_ready.children.length; i++) {
            const blockReady = this.blocks_ready.children[i];
            const blockReadyComp = blockReady.getComponent(BlockReady);
            const box = blockReady.getComponent(UITransform).getBoundingBox();
            if (box.contains(new Vec2(point_ready.x, point_ready.y)) && blockReadyComp.status == ENUM_RBLOCK_STATUS.SHOW) {
              AudioManager.instance.playSound(ENUM_AUDIO_CLIP.BLOCK_ACTIVE);
              blockReadyComp.setActive(true);
            }
          }
        }
        onTouchMove(e) {
          for (let i = 0; i < this.blocks_ready.children.length; i++) {
            const blockReady = this.blocks_ready.children[i];
            const blockReadyComp = blockReady.getComponent(BlockReady);
            if (blockReadyComp.isActive) {
              const delta = e.getDelta();
              blockReadyComp.setMove(delta.x, delta.y);
              // 检测放置
              this.checkPlace();
            }
          }
        }
        onTouchOver(e) {
          for (let i = 0; i < this.blocks_ready.children.length; i++) {
            const blockReady = this.blocks_ready.children[i];
            const blockReadyComp = blockReady.getComponent(BlockReady);
            if (blockReadyComp.isActive) {
              AudioManager.instance.playSound(ENUM_AUDIO_CLIP.BLOCK_UNACTIVE);
              if (this.hasShowTip) {
                this.showPlace();
                // 删除readyblock
                blockReady.removeFromParent();
                // 生成readyblock
                this.createReadyBlock();
              } else {
                blockReadyComp.setActive(false);
              }
            }
          }
          // 合并操作
          this.doCombine();
          // 重新检测转态
          this.checkReadyBlocks();
          // 胜负
          this.checkOver();
          // 储存
          if (DataManager.instance.mode == ENUM_GAME_MODE.SCORE) {
            this.setHistoryData();
          }
        }
        checkPlace() {
          // 选中相对位置
          let rIndex = 0;
          let rPos = null;
          for (let i = 0; i < this.blocks_ready.children.length; i++) {
            const blockReady = this.blocks_ready.children[i];
            const blockReadyComp = blockReady.getComponent(BlockReady);
            if (blockReadyComp.isActive) {
              rIndex = blockReadyComp.index;
              rPos = blockReadyComp.getRelPos(this.blocks_main);
            }
          }
          // 隐藏tip层
          for (let i = 0; i < this.blocks_main.children.length; i++) {
            const block = this.blocks_main.children[i];
            const blockComp = block.getComponent(Block);
            if (blockComp.status == ENUM_BLOCK_STATUS.TIP) blockComp.setOpacity(ENUM_BLOCK_STATUS.HIDE);
          }
          // 检测
          for (let i = 0; i < this.blocks_main.children.length; i++) {
            const block = this.blocks_main.children[i];
            const blockComp = block.getComponent(Block);
            // 两点距离

            const blockPos = block.getPosition();
            const dis = getDistance(new Vec2(blockPos.x, blockPos.y), rPos);
            if (blockComp.status == ENUM_BLOCK_STATUS.HIDE && dis < BSIZE / 2) {
              // 左下索引
              let blockIndexArr = [];
              switch (rIndex) {
                case 1:
                  blockIndexArr = [0];
                  break;
                case 2:
                  if (blockComp.x < 8 && blockComp.y < 6) blockIndexArr = [0, 1, 2];
                  break;
                case 3:
                  if (blockComp.x < 6 && blockComp.y < 8) blockIndexArr = [0, 8, 16];
                  break;
                case 4:
                  // if (blockComp.x < 6 && blockComp.y < 6) blockIndexArr = [1, 8, 9, 10, 17]
                  if (blockComp.x < 6 && blockComp.y < 7 && blockComp.y > 0) blockIndexArr = [0, 7, 8, 9, 16];
                  break;
                case 5:
                  if (blockComp.x < 6 && blockComp.y < 6) blockIndexArr = [0, 8, 16, 17, 18];
                  break;
                case 6:
                  if (blockComp.x < 6 && blockComp.y < 6) blockIndexArr = [0, 1, 2, 10, 18];
                  break;
                case 7:
                  if (blockComp.x < 6 && blockComp.y < 6) blockIndexArr = [0, 1, 2, 8, 9, 10, 16, 17, 18];
                  break;
                case 8:
                  if (blockComp.x < 5 && blockComp.y < 8) blockIndexArr = [0, 8, 16, 24];
                  break;
                case 9:
                  if (blockComp.x < 8 && blockComp.y < 5) blockIndexArr = [0, 1, 2, 3];
                  break;
                case 10:
                  if (blockComp.x < 6 && blockComp.y < 6) blockIndexArr = [0, 9, 18];
                  break;
                case 11:
                  // if (blockComp.x < 6 && blockComp.y < 6) blockIndexArr = [2, 9, 16]
                  if (blockComp.x < 6 && blockComp.y > 1) blockIndexArr = [0, 7, 14];
                  break;
                case 12:
                  if (blockComp.x < 6 && blockComp.y < 6) blockIndexArr = [0, 2, 9, 16, 18];
                  break;
                case 13:
                  if (blockComp.x < 8 && blockComp.y < 7) blockIndexArr = [0, 1];
                  break;
                case 14:
                  if (blockComp.x < 7 && blockComp.y < 8) blockIndexArr = [0, 8];
                  break;
                case 15:
                  if (blockComp.x < 7 && blockComp.y < 7) blockIndexArr = [0, 1, 8];
                  break;
                case 16:
                  // if (blockComp.x < 7 && blockComp.y < 7) blockIndexArr = [1, 8, 9]
                  if (blockComp.x < 7 && blockComp.y < 8 && blockComp.y > 0) blockIndexArr = [0, 7, 8];
                  break;
                case 17:
                  if (blockComp.x < 7 && blockComp.y < 7) blockIndexArr = [0, 1, 8, 9];
                  break;
                case 18:
                  // if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [1, 2, 8, 9]
                  if (blockComp.x < 7 && blockComp.y < 7 && blockComp.y > 0) blockIndexArr = [0, 1, 7, 8];
                  break;
                case 19:
                  // if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [1, 8, 9, 16]
                  if (blockComp.x < 6 && blockComp.y < 8 && blockComp.y > 0) blockIndexArr = [0, 7, 8, 15];
                  break;
                case 20:
                  if (blockComp.x < 7 && blockComp.y < 7) blockIndexArr = [0, 1, 9];
                  break;
                case 21:
                  if (blockComp.x < 7 && blockComp.y < 7) blockIndexArr = [0, 8, 9];
                  break;
                case 22:
                  if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [0, 1, 8, 16];
                  break;
                case 23:
                  if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [0, 8, 9, 10];
                  break;
                case 24:
                  // if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [1, 9, 16, 17]
                  if (blockComp.x < 6 && blockComp.y < 8 && blockComp.y > 0) blockIndexArr = [0, 8, 15, 16];
                  break;
                case 25:
                  if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [0, 1, 2, 10];
                  break;
                case 26:
                  if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [0, 1, 9, 17];
                  break;
                case 27:
                  if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [0, 1, 2, 8];
                  break;
                case 28:
                  if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [0, 8, 16, 17];
                  break;
                case 29:
                  // if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [2, 8, 9, 10]
                  if (blockComp.x < 7 && blockComp.y > 1) blockIndexArr = [0, 6, 7, 8];
                  break;
                case 30:
                  if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [0, 8, 9, 16];
                  break;
                case 31:
                  // if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [1, 8, 9, 10]
                  if (blockComp.x < 7 && blockComp.y < 7 && blockComp.y > 0) blockIndexArr = [0, 7, 8, 9];
                  break;
                case 32:
                  // if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [1, 8, 9, 17]
                  if (blockComp.x < 6 && blockComp.y < 8 && blockComp.y > 0) blockIndexArr = [0, 7, 8, 16];
                  break;
                case 33:
                  if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [0, 1, 2, 9];
                  break;
                case 34:
                  if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [0, 1, 9, 10];
                  break;
                case 35:
                  if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [0, 8, 9, 17];
                  break;
              }
              this.showPlaceTip(blockIndexArr, i);
              break;
            } else {
              this.hasShowTip = false;
            }
          }
          // 判断满足删除
          this.combineNum = this.checkCombine();
        }
        //    // 显示tip层
        showPlaceTip(arr, bIndex) {
          let showCount = 0;
          const blocks = this.blocks_main.children;
          for (let i = 0; i < arr.length; i++) {
            const index = bIndex + arr[i];
            if (index < XNUM * XNUM) {
              const block = blocks[index];
              const blockComp = block.getComponent(Block);
              if (blockComp.status == ENUM_BLOCK_STATUS.HIDE) showCount += 1;
            }
          }
          if (showCount >= arr.length) {
            for (let j = 0; j < arr.length; j++) {
              const index = bIndex + arr[j];
              if (index < XNUM * XNUM) {
                const block = blocks[index];
                const blockComp = block.getComponent(Block);
                blockComp.setOpacity(ENUM_BLOCK_STATUS.TIP);
              }
            }
            this.hasShowTip = true;
          } else {
            this.hasShowTip = false;
          }
        }
        // 显示
        showPlace() {
          for (let i = 0; i < this.blocks_main.children.length; i++) {
            const block = this.blocks_main.children[i];
            const blockComp = block.getComponent(Block);
            if (blockComp.status == ENUM_BLOCK_STATUS.TIP) {
              blockComp.setOpacity(ENUM_BLOCK_STATUS.SHOW);
              // 计分+1
              if (DataManager.instance.mode == ENUM_GAME_MODE.SCORE) {
                this.setScore();
              }
            }
          }
        }
        // 分数累加
        setScore() {
          DataManager.instance.score += 1;
          this.score_current_num.getComponent(Label).string = `${DataManager.instance.score}`;
          if (DataManager.instance.score > DataManager.instance.scoreMax) {
            DataManager.instance.scoreMax = DataManager.instance.score;
            DataManager.instance.save();
          }
        }
        // 检测ready block转态
        checkReadyBlocks() {
          for (let i = 0; i < this.blocks_ready.children.length; i++) {
            const blockReady = this.blocks_ready.children[i];
            const blockReadyComp = blockReady.getComponent(BlockReady);
            const rIndex = blockReadyComp.index;
            let isShow = false;
            for (let j = 0; j < this.blocks_main.children.length; j++) {
              const block = this.blocks_main.children[j];
              const blockComp = block.getComponent(Block);
              let blockIndexArr = [];
              switch (rIndex) {
                case 1:
                  blockIndexArr = [0];
                  break;
                case 2:
                  if (blockComp.x < 8 && blockComp.y < 6) blockIndexArr = [0, 1, 2];
                  break;
                case 3:
                  if (blockComp.x < 6 && blockComp.y < 8) blockIndexArr = [0, 8, 16];
                  break;
                case 4:
                  // if (blockComp.x < 6 && blockComp.y < 6) blockIndexArr = [1, 8, 9, 10, 17]
                  if (blockComp.x < 6 && blockComp.y < 7 && blockComp.y > 0) blockIndexArr = [0, 7, 8, 9, 16];
                  break;
                case 5:
                  if (blockComp.x < 6 && blockComp.y < 6) blockIndexArr = [0, 8, 16, 17, 18];
                  break;
                case 6:
                  if (blockComp.x < 6 && blockComp.y < 6) blockIndexArr = [0, 1, 2, 10, 18];
                  break;
                case 7:
                  if (blockComp.x < 6 && blockComp.y < 6) blockIndexArr = [0, 1, 2, 8, 9, 10, 16, 17, 18];
                  break;
                case 8:
                  if (blockComp.x < 5 && blockComp.y < 8) blockIndexArr = [0, 8, 16, 24];
                  break;
                case 9:
                  if (blockComp.x < 8 && blockComp.y < 5) blockIndexArr = [0, 1, 2, 3];
                  break;
                case 10:
                  if (blockComp.x < 6 && blockComp.y < 6) blockIndexArr = [0, 9, 18];
                  break;
                case 11:
                  // if (blockComp.x < 6 && blockComp.y < 6) blockIndexArr = [2, 9, 16]
                  if (blockComp.x < 6 && blockComp.y > 1) blockIndexArr = [0, 7, 14];
                  break;
                case 12:
                  if (blockComp.x < 6 && blockComp.y < 6) blockIndexArr = [0, 2, 9, 16, 18];
                  break;
                case 13:
                  if (blockComp.x < 8 && blockComp.y < 7) blockIndexArr = [0, 1];
                  break;
                case 14:
                  if (blockComp.x < 7 && blockComp.y < 8) blockIndexArr = [0, 8];
                  break;
                case 15:
                  if (blockComp.x < 7 && blockComp.y < 7) blockIndexArr = [0, 1, 8];
                  break;
                case 16:
                  // if (blockComp.x < 7 && blockComp.y < 7) blockIndexArr = [1, 8, 9]
                  if (blockComp.x < 7 && blockComp.y < 8 && blockComp.y > 0) blockIndexArr = [0, 7, 8];
                  break;
                case 17:
                  if (blockComp.x < 7 && blockComp.y < 7) blockIndexArr = [0, 1, 8, 9];
                  break;
                case 18:
                  // if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [1, 2, 8, 9]
                  if (blockComp.x < 7 && blockComp.y < 7 && blockComp.y > 0) blockIndexArr = [0, 1, 7, 8];
                  break;
                case 19:
                  // if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [1, 8, 9, 16]
                  if (blockComp.x < 6 && blockComp.y < 8 && blockComp.y > 0) blockIndexArr = [0, 7, 8, 15];
                  break;
                case 20:
                  if (blockComp.x < 7 && blockComp.y < 7) blockIndexArr = [0, 1, 9];
                  break;
                case 21:
                  if (blockComp.x < 7 && blockComp.y < 7) blockIndexArr = [0, 8, 9];
                  break;
                case 22:
                  if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [0, 1, 8, 16];
                  break;
                case 23:
                  if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [0, 8, 9, 10];
                  break;
                case 24:
                  // if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [1, 9, 16, 17]
                  if (blockComp.x < 6 && blockComp.y < 8 && blockComp.y > 0) blockIndexArr = [0, 8, 15, 16];
                  break;
                case 25:
                  if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [0, 1, 2, 10];
                  break;
                case 26:
                  if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [0, 1, 9, 17];
                  break;
                case 27:
                  if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [0, 1, 2, 8];
                  break;
                case 28:
                  if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [0, 8, 16, 17];
                  break;
                case 29:
                  // if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [2, 8, 9, 10]
                  if (blockComp.x < 7 && blockComp.y > 1) blockIndexArr = [0, 6, 7, 8];
                  break;
                case 30:
                  if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [0, 8, 9, 16];
                  break;
                case 31:
                  // if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [1, 8, 9, 10]
                  if (blockComp.x < 7 && blockComp.y < 7 && blockComp.y > 0) blockIndexArr = [0, 7, 8, 9];
                  break;
                case 32:
                  // if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [1, 8, 9, 17]
                  if (blockComp.x < 6 && blockComp.y < 8 && blockComp.y > 0) blockIndexArr = [0, 7, 8, 16];
                  break;
                case 33:
                  if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [0, 1, 2, 9];
                  break;
                case 34:
                  if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [0, 1, 9, 10];
                  break;
                case 35:
                  if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [0, 8, 9, 17];
                  break;
              }
              if (blockIndexArr.length) {
                if (this.getReadyBlockStatus(blockIndexArr, j)) isShow = true;
              }
            }
            isShow ? blockReadyComp.setOpacity(ENUM_RBLOCK_STATUS.SHOW) : blockReadyComp.setOpacity(ENUM_RBLOCK_STATUS.HIDE);
          }
        }
        // ready block状态显隐
        getReadyBlockStatus(arr, bIndex) {
          let showCount = 0;
          const blocks = this.blocks_main.children;
          for (let i = 0; i < arr.length; i++) {
            const index = bIndex + arr[i];
            if (index < XNUM * XNUM) {
              const block = blocks[index];
              const blockComp = block.getComponent(Block);
              if (blockComp.status == ENUM_BLOCK_STATUS.HIDE) showCount += 1;
            }
          }
          if (showCount >= arr.length) {
            return true;
          }
          return false;
        }
        // 生成ready block
        createReadyBlock() {
          const len = this.blocks_ready.children.length;
          if (len <= 0) {
            this.initReadyBlocks();
            // 新生成的至少一个可选的
            while (!this.checkReadyStatus()) {
              this.initReadyBlocks();
            }
          }
        }
        // 检查当前ready block状态
        checkReadyStatus() {
          let status = false;
          for (let i = 0; i < this.blocks_ready.children.length; i++) {
            const blockReady = this.blocks_ready.children[i];
            const blockReadyComp = blockReady.getComponent(BlockReady);
            if (blockReadyComp.status == ENUM_RBLOCK_STATUS.SHOW) {
              status = true;
              break;
            }
          }
          return status;
        }
        // 判断是否可合并
        checkCombine() {
          let combineNum = 0;
          const blocks = this.blocks_main.children;
          for (let i = 0; i < blocks.length; i++) {
            const block = blocks[i];
            const blockComp = block.getComponent(Block);
            blockComp.isCombine = false;
          }
          // 横
          for (let i = 0; i < XNUM; i++) {
            let isCombine = true;
            for (let j = 0; j < XNUM; j++) {
              const block = blocks[i * XNUM + j];
              const blockComp = block.getComponent(Block);
              if (blockComp.status == ENUM_BLOCK_STATUS.HIDE) {
                isCombine = false;
              }
            }
            if (isCombine) {
              for (let j = 0; j < XNUM; j++) {
                const block = blocks[i * XNUM + j];
                const blockComp = block.getComponent(Block);
                blockComp.isCombine = true;
              }
            }
          }
          // 纵
          for (let i = 0; i < XNUM; i++) {
            let isCombine = true;
            for (let j = 0; j < XNUM; j++) {
              const block = blocks[i + j * XNUM];
              const blockComp = block.getComponent(Block);
              if (blockComp.status == ENUM_BLOCK_STATUS.HIDE) {
                isCombine = false;
              }
            }
            if (isCombine) {
              for (let j = 0; j < XNUM; j++) {
                const block = blocks[i + j * XNUM];
                const blockComp = block.getComponent(Block);
                blockComp.isCombine = true;
              }
            }
          }
          for (let i = 0; i < blocks.length; i++) {
            const block = blocks[i];
            const blockComp = block.getComponent(Block);
            blockComp.setActive(blockComp.isCombine);
            if (blockComp.isCombine) combineNum += 1;
          }
          return combineNum;
        }
        // 合并操作
        doCombine() {
          if (this.hasShowTip) {
            if (this.combineNum) {
              this.comboNum += 1;
            } else {
              this.comboNum = 0;
            }
          }
          if (this.combineNum) {
            for (let i = 0; i < this.blocks_main.children.length; i++) {
              const block = this.blocks_main.children[i];
              const blockComp = block.getComponent(Block);
              if (blockComp && blockComp.isCombine) {
                blockComp.setActive(false);
                blockComp.setOpacity(ENUM_BLOCK_STATUS.HIDE);
                EffectManager.instance.play('EffCombine', this.eff, {
                  pos: block.getPosition()
                });
                this.setScore();
              }
            }
            // 连击效果
            if (this.comboNum >= 9) this.comboNum = 9;
            this.setCombo(this.comboNum);

            // 音效根据消除数量
            AudioManager.instance.playSound('combine_0');
            const num = Math.floor(this.combineNum / 8);
            if (num == 2) {
              const index = random(1, 2);
              AudioManager.instance.playSound(`combine_${index}`);
            }
            if (num >= 3) {
              const index = random(3, 5);
              AudioManager.instance.playSound(`combine_${index}`);
            }
            // 重置状态
            this.combineNum = 0;
            this.hasShowTip = false;
          }
        }
        // 判断游戏是否结束
        checkOver() {
          const status = this.checkReadyStatus();
          if (!status) {
            StaticInstance.gameManager.onGameOver(ENUM_UI_TYPE.LOSE);
          }
        }
        // 连击
        setCombo(num) {
          if (num < 2) return;
          const layers = this.combo.getChildByName('layers');
          for (let i = 0; i < layers.children.length; i++) {
            const layer = layers.children[i];
            layer.active = parseInt(layer.name) == num - 1;
          }

          // this.combo.stopAllActions()
          // this.combo.x = 750
          // const act1 = cc.moveTo(0.5, 0, this.combo.y)
          // const act2 = cc.delayTime(1)
          // const act3 = cc.moveTo(0.5, -750, this.combo.y)
          // const act = cc.sequence(act1, act2, act3)
          // cc.tween(this.combo).then(act).start()

          this.combo.setPosition(new Vec3(750, this.combo.position.y));
          tween(this.combo).to(0.5, {
            position: new Vec3(0, this.combo.position.y)
          }).delay(1).to(0.5, {
            position: new Vec3(-750, this.combo.position.y)
          }).start();
        }
        // 技能炸弹
        onSkillBomb() {
          if (DataManager.instance.status == ENUM_GAME_STATUS.UNRUNING) return;
          SdkManager.instance.showVideoAd(() => {
            if (!SdkManager.instance.getPlatform()) {
              ToastManager.instance.show('激励模拟发放', {
                gravity: 'TOP',
                bg_color: color(102, 202, 28, 255)
              });
            }
            this.isBomb = true;
            this.skillTip.active = true;
          }, msg => {
            ToastManager.instance.show(msg, {
              gravity: 'TOP',
              bg_color: color(226, 69, 109, 255)
            });
          });
        }
        // 技能洗牌
        onSkillShuffle() {
          if (DataManager.instance.status == ENUM_GAME_STATUS.UNRUNING) return;
          AudioManager.instance.playSound(ENUM_AUDIO_CLIP.SKILL_SHUFFLE);
          SdkManager.instance.showVideoAd(() => {
            if (!SdkManager.instance.getPlatform()) {
              ToastManager.instance.show('激励模拟发放', {
                gravity: 'TOP',
                bg_color: color(102, 202, 28, 255)
              });
            }
            this.initReadyBlocks();
            while (!this.checkReadyStatus()) {
              this.initReadyBlocks();
            }
          }, msg => {
            ToastManager.instance.show(msg, {
              gravity: 'TOP',
              bg_color: color(226, 69, 109, 255)
            });
          });
        }
        setHistoryData() {
          if (DataManager.instance.status == ENUM_GAME_STATUS.UNRUNING) return;
          let blockStatusArr = [];
          for (let i = 0; i < this.blocks_main.children.length; i++) {
            const block = this.blocks_main.children[i];
            const blockComp = block.getComponent(Block);
            blockStatusArr.push(blockComp.status);
          }
          let blockReadyIndexArr = [];
          let tempReadyCompArr = [];
          for (let i = 0; i < this.blocks_ready.children.length; i++) {
            const blockReady = this.blocks_ready.children[i];
            const blockReadyComp = blockReady.getComponent(BlockReady);
            tempReadyCompArr.push(blockReadyComp);
          }
          for (let i = 0; i < RNUM; i++) {
            const slot = this.slots_ready.children[i];
            const index = tempReadyCompArr.findIndex(com => com.pos.x == slot.position.x);
            if (index >= 0) {
              blockReadyIndexArr.push(tempReadyCompArr[index].index);
            } else {
              blockReadyIndexArr.push(-1);
            }
          }
          DataManager.instance.historyData = {
            main: blockStatusArr,
            ready: blockReadyIndexArr,
            score: DataManager.instance.score
          };
          DataManager.instance.save();
        }
      }) || _class));
      /**
       * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
       */
      // /*
      //  * @Author: carolsail 
      //  * @Date: 2023-12-05 16:03:26 
      //  * @Last Modified by: carolsail
      //  * @Last Modified time: 2023-12-08 17:30:35
      //  */
      // 
      // import { ENUM_AUDIO_CLIP, ENUM_BLOCK_STATUS, ENUM_GAME_MODE, ENUM_GAME_STATUS, ENUM_RBLOCK_STATUS, ENUM_UI_TYPE } from "../Enum";
      // import { StaticInstance } from "../StaticInstance";
      // import { getDistance, random } from "../Utils";
      // import AudioManager from "../manager/AudioManager";
      // import DataManager from "../manager/DataManager";
      // import EffectManager from "../manager/EffectManager";
      // import PoolManager from "../manager/PoolManager";
      // import SdkManager from "../manager/SdkManager";
      // import ToastManager from "../manager/ToastManager";
      // import Block from "./Block";
      // import BlockReady from "./BlockReady";
      // 
      // const { ccclass, property } = cc._decorator;
      // 
      // const BSIZE = 78
      // const XNUM = 8
      // const RNUM = 3
      // const TNUM = 35
      // 
      // @ccclass
      // export default class Level extends cc.Component {
      //     // 技能
      //     skills: cc.Node = null
      //     skillTip: cc.Node = null
      //     // 主块
      //     blocks_main: cc.Node = null
      //     // 效果层
      //     eff: cc.Node = null
      //     // 连击层
      //     combo: cc.Node = null
      //     // 备块
      //     slots_ready: cc.Node = null
      //     blocks_ready: cc.Node = null
      //     // 分数
      //     score_current_num: cc.Node = null
      //     score_max_num: cc.Node = null
      //     // 开关
      //     isInitReadyBlock: boolean = false
      //     // 上一次放置
      //     hasShowTip: boolean = false
      //     // 合并数
      //     combineNum: number = 0
      //     // 连击数
      //     comboNum: number = 0
      //     // 炸弹
      //     isBomb: boolean = false
      // 
      //     init() {
      //         this.skills = cc.find('skills', this.node)
      //         this.skillTip = cc.find('skills/tip', this.node)
      //         this.slots_ready = cc.find('ready/slots', this.node)
      //         this.score_current_num = cc.find('header/score_current/num', this.node)
      //         this.score_max_num = cc.find('header/score_max/num', this.node)
      //         this.eff = cc.find('main/eff', this.node)
      //         this.combo = cc.find('combo', this.node)
      // 
      //         this.blocks_main = cc.find('main/blocks', this.node)
      //         this.initMainBlocks()
      // 
      //         this.blocks_ready = cc.find('ready/blocks', this.node)
      //         this.initReadyBlocks(true)
      // 
      //         this.score_max_num.getComponent(cc.Label).string = `${DataManager.instance.scoreMax}`
      // 
      //         this.setTouch(true)
      //         this.setSkill(true)
      // 
      //     }
      // 
      //     initMainBlocks() {
      //         for (let i = 0; i < XNUM * XNUM; i++) {
      //             const block = PoolManager.instance.getNode('Block', this.blocks_main)
      //             const blockComp = block.getComponent(Block)
      //             const x = Math.floor(i / XNUM)
      //             const y = i % XNUM
      //             blockComp.init(x, y, i)
      //         }
      //         // 历史数据
      //         if (DataManager.instance.mode == ENUM_GAME_MODE.SCORE && DataManager.instance.historyData) {
      //             const { main, score } = DataManager.instance.historyData
      //             for (let i = 0; i < this.blocks_main.children.length; i++) {
      //                 const block = this.blocks_main.children[i]
      //                 const blockComp = block.getComponent(Block)
      //                 blockComp.setOpacity(main[i])
      //             }
      //             DataManager.instance.score = score
      //         }
      //         this.score_current_num.getComponent(cc.Label).string = `${DataManager.instance.score}`
      //     }
      // 
      //     initReadyBlocks(isInit: boolean = false) {
      //         this.blocks_ready.removeAllChildren()
      //         this.isInitReadyBlock = true
      //         for (let i = 0; i < RNUM; i++) {
      //             // 历史数据
      //             if (isInit && DataManager.instance.mode == ENUM_GAME_MODE.SCORE && DataManager.instance.historyData) {
      //                 const { ready } = DataManager.instance.historyData
      //                 if (ready[i] >= 0) {
      //                     let index = ready[i]
      //                     const blockReady = PoolManager.instance.getNode(`BlockReady${index}`, this.blocks_ready)
      //                     const slot = this.slots_ready.children[i]
      //                     blockReady.getComponent(BlockReady).init(index, cc.v2(slot.x, slot.y))
      //                     blockReady.scale = 0
      //                 } else {
      //                     continue
      //                 }
      //             } else {
      //                 let index = random(1, TNUM)
      //                 // index = 17
      //                 const blockReady = PoolManager.instance.getNode(`BlockReady${index}`, this.blocks_ready)
      //                 const slot = this.slots_ready.children[i]
      //                 blockReady.getComponent(BlockReady).init(index, cc.v2(slot.x, slot.y))
      //                 blockReady.scale = 0
      //             }
      //         }
      //         // 检测转态
      //         this.checkReadyBlocks()
      //         // 动画
      //         for (let j = 0; j < this.blocks_ready.children.length; j++) {
      //             const blockReady = this.blocks_ready.children[j]
      //             const blockReadyComp = blockReady.getComponent(BlockReady)
      //             cc.tween(blockReady).to(0.3, { scale: blockReadyComp.scale }).start()
      //         }
      //         this.scheduleOnce(() => {
      //             this.isInitReadyBlock = false
      //         }, 0.3)
      //     }
      // 
      //     setTouch(bool: boolean = true) {
      //         if (bool) {
      //             this.node.on('touchstart', this.onTouchStart, this)
      //             this.node.on('touchmove', this.onTouchMove, this)
      //             this.node.on('touchend', this.onTouchOver, this)
      //             this.node.on('touchcancel', this.onTouchOver, this)
      //         } else {
      //             this.node.off('touchstart', this.onTouchStart, this)
      //             this.node.off('touchmove', this.onTouchMove, this)
      //             this.node.off('touchend', this.onTouchOver, this)
      //             this.node.off('touchcancel', this.onTouchOver, this)
      //         }
      //     }
      // 
      //     setSkill(bool: boolean = true) {
      //         if (bool) {
      //             this.skills.getChildByName('skill_bomb').on('click', this.onSkillBomb, this)
      //             this.skills.getChildByName('skill_shuffle').on('click', this.onSkillShuffle, this)
      //         } else {
      //             this.skills.getChildByName('skill_bomb').off('click', this.onSkillBomb, this)
      //             this.skills.getChildByName('skill_shuffle').off('click', this.onSkillShuffle, this)
      //         }
      //     }
      // 
      //     onTouchStart(e: cc.Event.EventTouch) {
      //         if (DataManager.instance.status == ENUM_GAME_STATUS.UNRUNING && this.isInitReadyBlock) return
      //         const location = e.getLocation()
      // 
      //         if (this.isBomb) {
      //             const point_main = this.blocks_main.convertToNodeSpaceAR(location)
      //             let block = null
      //             for (let i = 0; i < this.blocks_main.children.length; i++) {
      //                 const b = this.blocks_main.children[i]
      //                 const box = b.getBoundingBox()
      //                 if (box.contains(point_main)) {
      //                     block = b
      //                     break
      //                 }
      //             }
      //             if (block) {
      //                 const blockComp = block.getComponent(Block)
      //                 const row = Math.floor(blockComp.index / XNUM)
      //                 const index = blockComp.index % 8
      //                 let indexArr = [blockComp.index]
      //                 // 左
      //                 const lindex = index - 1
      //                 if (lindex >= 0) {
      //                     indexArr.push(row * XNUM + lindex)
      //                 }
      //                 // 右
      //                 const rindex = index + 1
      //                 if (rindex < XNUM) {
      //                     indexArr.push(row * XNUM + rindex)
      //                 }
      //                 // 上
      //                 const urow = row + 1
      //                 if (urow < XNUM) {
      //                     indexArr.push(urow * XNUM + index)
      //                     const lindex = index - 1
      //                     if (lindex >= 0) {
      //                         indexArr.push(urow * XNUM + lindex)
      //                     }
      //                     const rindex = index + 1
      //                     if (rindex < XNUM) {
      //                         indexArr.push(urow * XNUM + rindex)
      //                     }
      //                 }
      //                 // 下
      //                 const drow = row - 1
      //                 if (drow >= 0) {
      //                     indexArr.push(drow * XNUM + index)
      //                     const lindex = index - 1
      //                     if (lindex >= 0) {
      //                         indexArr.push(drow * XNUM + lindex)
      //                     }
      //                     const rindex = index + 1
      //                     if (rindex < XNUM) {
      //                         indexArr.push(drow * XNUM + rindex)
      //                     }
      //                 }
      //                 // 遍历爆炸
      //                 AudioManager.instance.playSound(ENUM_AUDIO_CLIP.SKILL_BOMB)
      //                 for (let i = 0; i < this.blocks_main.children.length; i++) {
      //                     const block = this.blocks_main.children[i]
      //                     const blockComp = block.getComponent(Block)
      //                     if (indexArr.includes(blockComp.index)) {
      //                         if (blockComp.status == ENUM_BLOCK_STATUS.SHOW) this.setScore()
      //                         blockComp.setActive(false)
      //                         blockComp.setOpacity(ENUM_BLOCK_STATUS.HIDE)
      //                         EffectManager.instance.play('EffCombine', this.eff, { pos: block.getPosition() })
      //                     }
      //                 }
      //                 this.isBomb = false
      //                 this.skillTip.active = false
      //             }
      //             return
      //         }
      // 
      //         const point_ready = this.blocks_ready.convertToNodeSpaceAR(location)
      //         for (let i = 0; i < this.blocks_ready.children.length; i++) {
      //             const blockReady = this.blocks_ready.children[i]
      //             const blockReadyComp = blockReady.getComponent(BlockReady)
      //             const box = blockReady.getBoundingBox()
      //             if (box.contains(point_ready) && blockReadyComp.status == ENUM_RBLOCK_STATUS.SHOW) {
      //                 AudioManager.instance.playSound(ENUM_AUDIO_CLIP.BLOCK_ACTIVE)
      //                 blockReadyComp.setActive(true)
      //             }
      //         }
      //     }
      // 
      //     onTouchMove(e: cc.Event.EventTouch) {
      //         for (let i = 0; i < this.blocks_ready.children.length; i++) {
      //             const blockReady = this.blocks_ready.children[i]
      //             const blockReadyComp = blockReady.getComponent(BlockReady)
      //             if (blockReadyComp.isActive) {
      //                 const delta = e.getDelta()
      //                 blockReadyComp.setMove(delta.x, delta.y)
      //                 // 检测放置
      //                 this.checkPlace()
      //             }
      //         }
      //     }
      // 
      //     onTouchOver(e: cc.Event.EventTouch) {
      //         for (let i = 0; i < this.blocks_ready.children.length; i++) {
      //             const blockReady = this.blocks_ready.children[i]
      //             const blockReadyComp = blockReady.getComponent(BlockReady)
      //             if (blockReadyComp.isActive) {
      //                 AudioManager.instance.playSound(ENUM_AUDIO_CLIP.BLOCK_UNACTIVE)
      //                 if (this.hasShowTip) {
      //                     this.showPlace()
      //                     // 删除readyblock
      //                     blockReady.removeFromParent()
      //                     // 生成readyblock
      //                     this.createReadyBlock()
      //                 } else {
      //                     blockReadyComp.setActive(false)
      //                 }
      //             }
      //         }
      //         // 合并操作
      //         this.doCombine()
      //         // 重新检测转态
      //         this.checkReadyBlocks()
      //         // 胜负
      //         this.checkOver()
      //         // 储存
      //         if (DataManager.instance.mode == ENUM_GAME_MODE.SCORE) {
      //             this.setHistoryData()
      //         }
      //     }
      // 
      //     checkPlace() {
      //         // 选中相对位置
      //         let rIndex = 0
      //         let rPos = null
      //         for (let i = 0; i < this.blocks_ready.children.length; i++) {
      //             const blockReady = this.blocks_ready.children[i]
      //             const blockReadyComp = blockReady.getComponent(BlockReady)
      //             if (blockReadyComp.isActive) {
      //                 rIndex = blockReadyComp.index
      //                 rPos = blockReadyComp.getRelPos(this.blocks_main)
      //             }
      //         }
      //         // 隐藏tip层
      //         for (let i = 0; i < this.blocks_main.children.length; i++) {
      //             const block = this.blocks_main.children[i]
      //             const blockComp = block.getComponent(Block)
      //             if (blockComp.status == ENUM_BLOCK_STATUS.TIP) blockComp.setOpacity(ENUM_BLOCK_STATUS.HIDE)
      //         }
      //         // 检测
      //         for (let i = 0; i < this.blocks_main.children.length; i++) {
      //             const block = this.blocks_main.children[i]
      //             const blockComp = block.getComponent(Block)
      //             // 两点距离
      //             const dis = getDistance(block.getPosition(), rPos)
      //             if (blockComp.status == ENUM_BLOCK_STATUS.HIDE && dis < BSIZE / 2) {
      //                 // 左下索引
      //                 let blockIndexArr = []
      //                 switch (rIndex) {
      //                     case 1:
      //                         blockIndexArr = [0]
      //                         break
      //                     case 2:
      //                         if (blockComp.x < 8 && blockComp.y < 6) blockIndexArr = [0, 1, 2]
      //                         break
      //                     case 3:
      //                         if (blockComp.x < 6 && blockComp.y < 8) blockIndexArr = [0, 8, 16]
      //                         break
      //                     case 4:
      //                         // if (blockComp.x < 6 && blockComp.y < 6) blockIndexArr = [1, 8, 9, 10, 17]
      //                         if (blockComp.x < 6 && blockComp.y < 7 && blockComp.y > 0) blockIndexArr = [0, 7, 8, 9, 16]
      //                         break
      //                     case 5:
      //                         if (blockComp.x < 6 && blockComp.y < 6) blockIndexArr = [0, 8, 16, 17, 18]
      //                         break
      //                     case 6:
      //                         if (blockComp.x < 6 && blockComp.y < 6) blockIndexArr = [0, 1, 2, 10, 18]
      //                         break
      //                     case 7:
      //                         if (blockComp.x < 6 && blockComp.y < 6) blockIndexArr = [0, 1, 2, 8, 9, 10, 16, 17, 18]
      //                         break
      //                     case 8:
      //                         if (blockComp.x < 5 && blockComp.y < 8) blockIndexArr = [0, 8, 16, 24]
      //                         break
      //                     case 9:
      //                         if (blockComp.x < 8 && blockComp.y < 5) blockIndexArr = [0, 1, 2, 3]
      //                         break
      //                     case 10:
      //                         if (blockComp.x < 6 && blockComp.y < 6) blockIndexArr = [0, 9, 18]
      //                         break
      //                     case 11:
      //                         // if (blockComp.x < 6 && blockComp.y < 6) blockIndexArr = [2, 9, 16]
      //                         if (blockComp.x < 6 && blockComp.y > 1) blockIndexArr = [0, 7, 14]
      //                         break
      //                     case 12:
      //                         if (blockComp.x < 6 && blockComp.y < 6) blockIndexArr = [0, 2, 9, 16, 18]
      //                         break
      //                     case 13:
      //                         if (blockComp.x < 8 && blockComp.y < 7) blockIndexArr = [0, 1]
      //                         break
      //                     case 14:
      //                         if (blockComp.x < 7 && blockComp.y < 8) blockIndexArr = [0, 8]
      //                         break
      //                     case 15:
      //                         if (blockComp.x < 7 && blockComp.y < 7) blockIndexArr = [0, 1, 8]
      //                         break
      //                     case 16:
      //                         // if (blockComp.x < 7 && blockComp.y < 7) blockIndexArr = [1, 8, 9]
      //                         if (blockComp.x < 7 && blockComp.y < 8 && blockComp.y > 0) blockIndexArr = [0, 7, 8]
      //                         break
      //                     case 17:
      //                         if (blockComp.x < 7 && blockComp.y < 7) blockIndexArr = [0, 1, 8, 9]
      //                         break
      //                     case 18:
      //                         // if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [1, 2, 8, 9]
      //                         if (blockComp.x < 7 && blockComp.y < 7 && blockComp.y > 0) blockIndexArr = [0, 1, 7, 8]
      //                         break
      //                     case 19:
      //                         // if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [1, 8, 9, 16]
      //                         if (blockComp.x < 6 && blockComp.y < 8 && blockComp.y > 0) blockIndexArr = [0, 7, 8, 15]
      //                         break
      //                     case 20:
      //                         if (blockComp.x < 7 && blockComp.y < 7) blockIndexArr = [0, 1, 9]
      //                         break
      //                     case 21:
      //                         if (blockComp.x < 7 && blockComp.y < 7) blockIndexArr = [0, 8, 9]
      //                         break
      //                     case 22:
      //                         if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [0, 1, 8, 16]
      //                         break
      //                     case 23:
      //                         if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [0, 8, 9, 10]
      //                         break
      //                     case 24:
      //                         // if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [1, 9, 16, 17]
      //                         if (blockComp.x < 6 && blockComp.y < 8 && blockComp.y > 0) blockIndexArr = [0, 8, 15, 16]
      //                         break
      //                     case 25:
      //                         if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [0, 1, 2, 10]
      //                         break
      //                     case 26:
      //                         if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [0, 1, 9, 17]
      //                         break
      //                     case 27:
      //                         if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [0, 1, 2, 8]
      //                         break
      //                     case 28:
      //                         if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [0, 8, 16, 17]
      //                         break
      //                     case 29:
      //                         // if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [2, 8, 9, 10]
      //                         if (blockComp.x < 7 && blockComp.y > 1) blockIndexArr = [0, 6, 7, 8]
      //                         break
      //                     case 30:
      //                         if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [0, 8, 9, 16]
      //                         break
      //                     case 31:
      //                         // if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [1, 8, 9, 10]
      //                         if (blockComp.x < 7 && blockComp.y < 7 && blockComp.y > 0) blockIndexArr = [0, 7, 8, 9]
      //                         break
      //                     case 32:
      //                         // if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [1, 8, 9, 17]
      //                         if (blockComp.x < 6 && blockComp.y < 8 && blockComp.y > 0) blockIndexArr = [0, 7, 8, 16]
      //                         break
      //                     case 33:
      //                         if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [0, 1, 2, 9]
      //                         break
      //                     case 34:
      //                         if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [0, 1, 9, 10]
      //                         break
      //                     case 35:
      //                         if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [0, 8, 9, 17]
      //                         break
      //                 }
      //                 this.showPlaceTip(blockIndexArr, i)
      //                 break
      //             } else {
      //                 this.hasShowTip = false
      //             }
      //         }
      //         // 判断满足删除
      //         this.combineNum = this.checkCombine()
      //     }
      // 
      //     // 显示tip层
      //     showPlaceTip(arr: number[], bIndex: number) {
      //         let showCount = 0
      //         const blocks = this.blocks_main.children
      //         for (let i = 0; i < arr.length; i++) {
      //             const index = bIndex + arr[i]
      //             if (index < XNUM * XNUM) {
      //                 const block = blocks[index]
      //                 const blockComp = block.getComponent(Block)
      //                 if (blockComp.status == ENUM_BLOCK_STATUS.HIDE) showCount += 1
      //             }
      //         }
      //         if (showCount >= arr.length) {
      //             for (let j = 0; j < arr.length; j++) {
      //                 const index = bIndex + arr[j]
      //                 if (index < XNUM * XNUM) {
      //                     const block = blocks[index]
      //                     const blockComp = block.getComponent(Block)
      //                     blockComp.setOpacity(ENUM_BLOCK_STATUS.TIP)
      //                 }
      //             }
      //             this.hasShowTip = true
      //         } else {
      //             this.hasShowTip = false
      //         }
      //     }
      // 
      //     // 显示
      //     showPlace() {
      //         for (let i = 0; i < this.blocks_main.children.length; i++) {
      //             const block = this.blocks_main.children[i]
      //             const blockComp = block.getComponent(Block)
      //             if (blockComp.status == ENUM_BLOCK_STATUS.TIP) {
      //                 blockComp.setOpacity(ENUM_BLOCK_STATUS.SHOW)
      //                 // 计分+1
      //                 if (DataManager.instance.mode == ENUM_GAME_MODE.SCORE) {
      //                     this.setScore()
      //                 }
      //             }
      //         }
      //     }
      // 
      //     // 分数累加
      //     setScore() {
      //         DataManager.instance.score += 1
      //         this.score_current_num.getComponent(cc.Label).string = `${DataManager.instance.score}`
      //         if (DataManager.instance.score > DataManager.instance.scoreMax) {
      //             DataManager.instance.scoreMax = DataManager.instance.score
      //             DataManager.instance.save()
      //         }
      //     }
      // 
      //     // 检测ready block转态
      //     checkReadyBlocks() {
      //         for (let i = 0; i < this.blocks_ready.children.length; i++) {
      //             const blockReady = this.blocks_ready.children[i]
      //             const blockReadyComp = blockReady.getComponent(BlockReady)
      //             const rIndex = blockReadyComp.index
      //             let isShow = false
      //             for (let j = 0; j < this.blocks_main.children.length; j++) {
      //                 const block = this.blocks_main.children[j]
      //                 const blockComp = block.getComponent(Block)
      //                 let blockIndexArr = []
      //                 switch (rIndex) {
      //                     case 1:
      //                         blockIndexArr = [0]
      //                         break
      //                     case 2:
      //                         if (blockComp.x < 8 && blockComp.y < 6) blockIndexArr = [0, 1, 2]
      //                         break
      //                     case 3:
      //                         if (blockComp.x < 6 && blockComp.y < 8) blockIndexArr = [0, 8, 16]
      //                         break
      //                     case 4:
      //                         // if (blockComp.x < 6 && blockComp.y < 6) blockIndexArr = [1, 8, 9, 10, 17]
      //                         if (blockComp.x < 6 && blockComp.y < 7 && blockComp.y > 0) blockIndexArr = [0, 7, 8, 9, 16]
      //                         break
      //                     case 5:
      //                         if (blockComp.x < 6 && blockComp.y < 6) blockIndexArr = [0, 8, 16, 17, 18]
      //                         break
      //                     case 6:
      //                         if (blockComp.x < 6 && blockComp.y < 6) blockIndexArr = [0, 1, 2, 10, 18]
      //                         break
      //                     case 7:
      //                         if (blockComp.x < 6 && blockComp.y < 6) blockIndexArr = [0, 1, 2, 8, 9, 10, 16, 17, 18]
      //                         break
      //                     case 8:
      //                         if (blockComp.x < 5 && blockComp.y < 8) blockIndexArr = [0, 8, 16, 24]
      //                         break
      //                     case 9:
      //                         if (blockComp.x < 8 && blockComp.y < 5) blockIndexArr = [0, 1, 2, 3]
      //                         break
      //                     case 10:
      //                         if (blockComp.x < 6 && blockComp.y < 6) blockIndexArr = [0, 9, 18]
      //                         break
      //                     case 11:
      //                         // if (blockComp.x < 6 && blockComp.y < 6) blockIndexArr = [2, 9, 16]
      //                         if (blockComp.x < 6 && blockComp.y > 1) blockIndexArr = [0, 7, 14]
      //                         break
      //                     case 12:
      //                         if (blockComp.x < 6 && blockComp.y < 6) blockIndexArr = [0, 2, 9, 16, 18]
      //                         break
      //                     case 13:
      //                         if (blockComp.x < 8 && blockComp.y < 7) blockIndexArr = [0, 1]
      //                         break
      //                     case 14:
      //                         if (blockComp.x < 7 && blockComp.y < 8) blockIndexArr = [0, 8]
      //                         break
      //                     case 15:
      //                         if (blockComp.x < 7 && blockComp.y < 7) blockIndexArr = [0, 1, 8]
      //                         break
      //                     case 16:
      //                         // if (blockComp.x < 7 && blockComp.y < 7) blockIndexArr = [1, 8, 9]
      //                         if (blockComp.x < 7 && blockComp.y < 8 && blockComp.y > 0) blockIndexArr = [0, 7, 8]
      //                         break
      //                     case 17:
      //                         if (blockComp.x < 7 && blockComp.y < 7) blockIndexArr = [0, 1, 8, 9]
      //                         break
      //                     case 18:
      //                         // if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [1, 2, 8, 9]
      //                         if (blockComp.x < 7 && blockComp.y < 7 && blockComp.y > 0) blockIndexArr = [0, 1, 7, 8]
      //                         break
      //                     case 19:
      //                         // if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [1, 8, 9, 16]
      //                         if (blockComp.x < 6 && blockComp.y < 8 && blockComp.y > 0) blockIndexArr = [0, 7, 8, 15]
      //                         break
      //                     case 20:
      //                         if (blockComp.x < 7 && blockComp.y < 7) blockIndexArr = [0, 1, 9]
      //                         break
      //                     case 21:
      //                         if (blockComp.x < 7 && blockComp.y < 7) blockIndexArr = [0, 8, 9]
      //                         break
      //                     case 22:
      //                         if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [0, 1, 8, 16]
      //                         break
      //                     case 23:
      //                         if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [0, 8, 9, 10]
      //                         break
      //                     case 24:
      //                         // if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [1, 9, 16, 17]
      //                         if (blockComp.x < 6 && blockComp.y < 8 && blockComp.y > 0) blockIndexArr = [0, 8, 15, 16]
      //                         break
      //                     case 25:
      //                         if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [0, 1, 2, 10]
      //                         break
      //                     case 26:
      //                         if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [0, 1, 9, 17]
      //                         break
      //                     case 27:
      //                         if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [0, 1, 2, 8]
      //                         break
      //                     case 28:
      //                         if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [0, 8, 16, 17]
      //                         break
      //                     case 29:
      //                         // if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [2, 8, 9, 10]
      //                         if (blockComp.x < 7 && blockComp.y > 1) blockIndexArr = [0, 6, 7, 8]
      //                         break
      //                     case 30:
      //                         if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [0, 8, 9, 16]
      //                         break
      //                     case 31:
      //                         // if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [1, 8, 9, 10]
      //                         if (blockComp.x < 7 && blockComp.y < 7 && blockComp.y > 0) blockIndexArr = [0, 7, 8, 9]
      //                         break
      //                     case 32:
      //                         // if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [1, 8, 9, 17]
      //                         if (blockComp.x < 6 && blockComp.y < 8 && blockComp.y > 0) blockIndexArr = [0, 7, 8, 16]
      //                         break
      //                     case 33:
      //                         if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [0, 1, 2, 9]
      //                         break
      //                     case 34:
      //                         if (blockComp.x < 7 && blockComp.y < 6) blockIndexArr = [0, 1, 9, 10]
      //                         break
      //                     case 35:
      //                         if (blockComp.x < 6 && blockComp.y < 7) blockIndexArr = [0, 8, 9, 17]
      //                         break
      //                 }
      //                 if (blockIndexArr.length) {
      //                     if (this.getReadyBlockStatus(blockIndexArr, j)) isShow = true
      //                 }
      //             }
      //             isShow ? blockReadyComp.setOpacity(ENUM_RBLOCK_STATUS.SHOW) : blockReadyComp.setOpacity(ENUM_RBLOCK_STATUS.HIDE)
      //         }
      //     }
      // 
      //     // ready block状态显隐
      //     getReadyBlockStatus(arr: number[], bIndex: number) {
      //         let showCount = 0
      //         const blocks = this.blocks_main.children
      //         for (let i = 0; i < arr.length; i++) {
      //             const index = bIndex + arr[i]
      //             if (index < XNUM * XNUM) {
      //                 const block = blocks[index]
      //                 const blockComp = block.getComponent(Block)
      //                 if (blockComp.status == ENUM_BLOCK_STATUS.HIDE) showCount += 1
      //             }
      //         }
      //         if (showCount >= arr.length) {
      //             return true
      //         }
      //         return false
      //     }
      // 
      //     // 生成ready block
      //     createReadyBlock() {
      //         const len = this.blocks_ready.children.length
      //         if (len <= 0) {
      //             this.initReadyBlocks()
      //             // 新生成的至少一个可选的
      //             while (!this.checkReadyStatus()) {
      //                 this.initReadyBlocks()
      //             }
      //         }
      //     }
      // 
      //     // 检查当前ready block状态
      //     checkReadyStatus() {
      //         let status = false
      //         for (let i = 0; i < this.blocks_ready.children.length; i++) {
      //             const blockReady = this.blocks_ready.children[i]
      //             const blockReadyComp = blockReady.getComponent(BlockReady)
      //             if (blockReadyComp.status == ENUM_RBLOCK_STATUS.SHOW) {
      //                 status = true
      //                 break
      //             }
      //         }
      //         return status
      //     }
      // 
      //     // 判断是否可合并
      //     checkCombine() {
      //         let combineNum = 0
      //         const blocks = this.blocks_main.children
      //         for (let i = 0; i < blocks.length; i++) {
      //             const block = blocks[i]
      //             const blockComp = block.getComponent(Block)
      //             blockComp.isCombine = false
      //         }
      //         // 横
      //         for (let i = 0; i < XNUM; i++) {
      //             let isCombine = true
      //             for (let j = 0; j < XNUM; j++) {
      //                 const block = blocks[i * XNUM + j]
      //                 const blockComp = block.getComponent(Block)
      //                 if (blockComp.status == ENUM_BLOCK_STATUS.HIDE) {
      //                     isCombine = false
      //                 }
      //             }
      //             if (isCombine) {
      //                 for (let j = 0; j < XNUM; j++) {
      //                     const block = blocks[i * XNUM + j]
      //                     const blockComp = block.getComponent(Block)
      //                     blockComp.isCombine = true
      //                 }
      //             }
      //         }
      //         // 纵
      //         for (let i = 0; i < XNUM; i++) {
      //             let isCombine = true
      //             for (let j = 0; j < XNUM; j++) {
      //                 const block = blocks[i + j * XNUM]
      //                 const blockComp = block.getComponent(Block)
      //                 if (blockComp.status == ENUM_BLOCK_STATUS.HIDE) {
      //                     isCombine = false
      //                 }
      //             }
      //             if (isCombine) {
      //                 for (let j = 0; j < XNUM; j++) {
      //                     const block = blocks[i + j * XNUM]
      //                     const blockComp = block.getComponent(Block)
      //                     blockComp.isCombine = true
      //                 }
      //             }
      //         }
      // 
      //         for (let i = 0; i < blocks.length; i++) {
      //             const block = blocks[i]
      //             const blockComp = block.getComponent(Block)
      //             blockComp.setActive(blockComp.isCombine)
      //             if (blockComp.isCombine) combineNum += 1
      //         }
      //         return combineNum
      //     }
      // 
      //     // 合并操作
      //     doCombine() {
      //         if (this.hasShowTip) {
      //             if (this.combineNum) {
      //                 this.comboNum += 1
      //             } else {
      //                 this.comboNum = 0
      //             }
      //         }
      //         if (this.combineNum) {
      //             for (let i = 0; i < this.blocks_main.children.length; i++) {
      //                 const block = this.blocks_main.children[i]
      //                 const blockComp = block.getComponent(Block)
      //                 if (blockComp && blockComp.isCombine) {
      //                     blockComp.setActive(false)
      //                     blockComp.setOpacity(ENUM_BLOCK_STATUS.HIDE)
      //                     EffectManager.instance.play('EffCombine', this.eff, { pos: block.getPosition() })
      //                     this.setScore()
      //                 }
      //             }
      //             // 连击效果
      //             if (this.comboNum >= 9) this.comboNum = 9
      //             this.setCombo(this.comboNum)
      // 
      //             // 音效根据消除数量
      //             AudioManager.instance.playSound('combine_0')
      //             const num = Math.floor(this.combineNum / 8)
      //             if (num == 2) {
      //                 const index = random(1, 2)
      //                 AudioManager.instance.playSound(`combine_${index}`)
      //             }
      //             if (num >= 3) {
      //                 const index = random(3, 5)
      //                 AudioManager.instance.playSound(`combine_${index}`)
      //             }
      //             // 重置状态
      //             this.combineNum = 0
      //             this.hasShowTip = false
      //         }
      //     }
      // 
      //     // 判断游戏是否结束
      //     checkOver() {
      //         const status = this.checkReadyStatus()
      //         if (!status) {
      //             StaticInstance.gameManager.onGameOver(ENUM_UI_TYPE.LOSE)
      //         }
      //     }
      // 
      //     // 连击
      //     setCombo(num: number) {
      //         if (num < 2) return
      //         const layers = this.combo.getChildByName('layers')
      //         for (let i = 0; i < layers.children.length; i++) {
      //             const layer = layers.children[i]
      //             layer.active = parseInt(layer.name) == num - 1
      //         }
      //         this.combo.stopAllActions()
      //         this.combo.x = 750
      //         const act1 = cc.moveTo(0.5, 0, this.combo.y)
      //         const act2 = cc.delayTime(1)
      //         const act3 = cc.moveTo(0.5, -750, this.combo.y)
      //         const act = cc.sequence(act1, act2, act3)
      //         cc.tween(this.combo).then(act).start()
      //     }
      // 
      //     // 技能炸弹
      //     onSkillBomb() {
      //         if (DataManager.instance.status == ENUM_GAME_STATUS.UNRUNING) return
      //         SdkManager.instance.showVideoAd(() => {
      //             if (!SdkManager.instance.getPlatform()) {
      //                 ToastManager.instance.show('激励模拟发放', { gravity: 'TOP', bg_color: cc.color(102, 202, 28, 255) })
      //             }
      //             this.isBomb = true
      //             this.skillTip.active = true
      //         }, (msg: string) => {
      //             ToastManager.instance.show(msg, { gravity: 'TOP', bg_color: cc.color(226, 69, 109, 255) })
      //         })
      //     }
      // 
      //     // 技能洗牌
      //     onSkillShuffle() {
      //         if (DataManager.instance.status == ENUM_GAME_STATUS.UNRUNING) return
      //         AudioManager.instance.playSound(ENUM_AUDIO_CLIP.SKILL_SHUFFLE)
      //         SdkManager.instance.showVideoAd(() => {
      //             if (!SdkManager.instance.getPlatform()) {
      //                 ToastManager.instance.show('激励模拟发放', { gravity: 'TOP', bg_color: cc.color(102, 202, 28, 255) })
      //             }
      //             this.initReadyBlocks()
      //             while (!this.checkReadyStatus()) {
      //                 this.initReadyBlocks()
      //             }
      //         }, (msg: string) => {
      //             ToastManager.instance.show(msg, { gravity: 'TOP', bg_color: cc.color(226, 69, 109, 255) })
      //         })
      //     }
      // 
      //     setHistoryData() {
      //         if (DataManager.instance.status == ENUM_GAME_STATUS.UNRUNING) return
      //         let blockStatusArr = []
      //         for (let i = 0; i < this.blocks_main.children.length; i++) {
      //             const block = this.blocks_main.children[i]
      //             const blockComp = block.getComponent(Block)
      //             blockStatusArr.push(blockComp.status)
      //         }
      // 
      //         let blockReadyIndexArr = []
      //         let tempReadyCompArr = []
      //         for (let i = 0; i < this.blocks_ready.children.length; i++) {
      //             const blockReady = this.blocks_ready.children[i]
      //             const blockReadyComp = blockReady.getComponent(BlockReady)
      //             tempReadyCompArr.push(blockReadyComp)
      //         }
      //         for (let i = 0; i < RNUM; i++) {
      //             const slot = this.slots_ready.children[i]
      //             const index = tempReadyCompArr.findIndex(com => com.pos.x == slot.x)
      //             if (index >= 0) {
      //                 blockReadyIndexArr.push(tempReadyCompArr[index].index)
      //             } else {
      //                 blockReadyIndexArr.push(-1)
      //             }
      //         }
      //         DataManager.instance.historyData = { main: blockStatusArr, ready: blockReadyIndexArr, score: DataManager.instance.score }
      //         DataManager.instance.save()
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoadingLayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Enum.ts', './DataManager.ts', './Baselayer.ts', './StaticInstance.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Sprite, _decorator, ENUM_UI_TYPE, DataManager, BaseLayer, StaticInstance;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Sprite = module.Sprite;
      _decorator = module._decorator;
    }, function (module) {
      ENUM_UI_TYPE = module.ENUM_UI_TYPE;
    }, function (module) {
      DataManager = module.default;
    }, function (module) {
      BaseLayer = module.default;
    }, function (module) {
      StaticInstance = module.StaticInstance;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "0d076ynxVpJ6Ys/SGfhiZtJ", "LoadingLayer", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let LoadingLayer = exports('default', (_dec = ccclass('LoadingLayer'), _dec2 = property(Sprite), _dec(_class = (_class2 = class LoadingLayer extends BaseLayer {
        constructor() {
          super(...arguments);
          _initializerDefineProperty(this, "loadfill", _descriptor, this);
        }
        onEnable() {}
        onDisable() {}
        update(dt) {
          if (this.loadfill && this.node.active) {
            this.loadfill.fillRange = DataManager.instance.loadingRate;
            if (DataManager.instance.loadingRate >= 1) {
              // menu已加载完毕
              if (StaticInstance.uiManager.isActive(ENUM_UI_TYPE.MENU)) {
                this.hide();
              }
            }
          }
        }
      }, _descriptor = _applyDecoratedDescriptor(_class2.prototype, "loadfill", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _class2)) || _class));
      /**
       * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
       */
      // // Created by carolsail 
      // 
      // import { ENUM_UI_TYPE } from "../Enum";
      // import DataManager from "../manager/DataManager";
      // import BaseLayer from "./Baselayer";
      // import { StaticInstance } from "../StaticInstance";
      // 
      // const {ccclass, property} = cc._decorator;
      // 
      // @ccclass
      // export default class LoadingLayer extends BaseLayer {
      // 
      //     @property(cc.Sprite)
      //     loadfill: cc.Sprite = null
      // 
      //     onEnable(){}
      // 
      //     onDisable(){}
      // 
      //     update(dt: number) {
      //         if(this.loadfill && this.node.active) {
      //             this.loadfill.fillRange = DataManager.instance.loadingRate
      //             if(DataManager.instance.loadingRate >= 1){
      //                 // menu已加载完毕
      //                 if(StaticInstance.uiManager.isActive(ENUM_UI_TYPE.MENU)){
      //                     this.hide()
      //                 }
      //             }
      //         }
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoseLayer.ts", ['cc', './Enum.ts', './StaticInstance.ts', './AudioManager.ts', './Baselayer.ts', './SdkManager.ts', './ToastManager.ts', './DataManager.ts'], function (exports) {
  var cclegacy, find, Label, color, _decorator, ENUM_AUDIO_CLIP, ENUM_UI_TYPE, StaticInstance, AudioManager, BaseLayer, SdkManager, ToastManager, DataManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      find = module.find;
      Label = module.Label;
      color = module.color;
      _decorator = module._decorator;
    }, function (module) {
      ENUM_AUDIO_CLIP = module.ENUM_AUDIO_CLIP;
      ENUM_UI_TYPE = module.ENUM_UI_TYPE;
    }, function (module) {
      StaticInstance = module.StaticInstance;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      BaseLayer = module.default;
    }, function (module) {
      SdkManager = module.default;
    }, function (module) {
      ToastManager = module.default;
    }, function (module) {
      DataManager = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "b601bhCGWNK+ZoaczgoGYv3", "LoseLayer", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let LoseLayer = exports('default', (_dec = ccclass('LoseLayer'), _dec(_class = class LoseLayer extends BaseLayer {
        constructor() {
          super(...arguments);
          this.panel = null;
          this.btnRestart = null;
          this.btnRevive = null;
          this.tip = null;
        }
        onLoad() {
          this.panel = find('style/panel', this.node);
          this.btnRestart = find('buttons/btn_restart', this.panel);
          this.btnRevive = find('buttons/btn_revive', this.panel);
          this.btnRestart.on('click', this.onRestartClick, this);
          this.btnRevive.on('click', this.onReviveClick, this);
          this.tip = find('tip', this.panel);
        }
        onDestroy() {
          this.btnRestart.off('click', this.onRestartClick, this);
          this.btnRevive.off('click', this.onReviveClick, this);
        }
        onEnable() {
          this.zoomIn(this.panel);
          SdkManager.instance.toggleBannerAd(true);
          this.rendor();
        }
        onDisable() {
          SdkManager.instance.toggleBannerAd(false);
        }
        rendor() {
          this.tip.getComponent(Label).string = `本轮得分：${DataManager.instance.score}`;
        }
        async onRestartClick() {
          AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK);
          await StaticInstance.fadeManager.fadeIn();
          StaticInstance.uiManager.toggle(ENUM_UI_TYPE.LOSE, false);
          DataManager.instance.score = 0;
          StaticInstance.gameManager.onGameStart();
        }
        onReviveClick() {
          AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK);
          SdkManager.instance.showVideoAd(async () => {
            if (!SdkManager.instance.getPlatform()) {
              ToastManager.instance.show('激励模拟发放', {
                gravity: 'TOP',
                bg_color: color(102, 202, 28, 255)
              });
            }
            await StaticInstance.fadeManager.fadeIn();
            StaticInstance.uiManager.toggle(ENUM_UI_TYPE.LOSE, false);
            StaticInstance.gameManager.onGameStart();
          }, msg => {
            ToastManager.instance.show(msg, {
              gravity: 'TOP',
              bg_color: color(226, 69, 109, 255)
            });
          });
        }
      }) || _class));
      /**
       * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
       */
      // // Created by carolsail
      // 
      // import { ENUM_AUDIO_CLIP, ENUM_UI_TYPE } from "../Enum";
      // import { StaticInstance } from './../StaticInstance';
      // import AudioManager from "../manager/AudioManager";
      // import BaseLayer from "./Baselayer";
      // import SdkManager from "../manager/SdkManager";
      // import ToastManager from "../manager/ToastManager";
      // import DataManager from "../manager/DataManager";
      // 
      // const { ccclass, property } = cc._decorator;
      // 
      // @ccclass
      // export default class LoseLayer extends BaseLayer {
      // 
      //     panel: cc.Node = null
      //     btnRestart: cc.Node = null
      //     btnRevive: cc.Node = null
      //     tip: cc.Node = null
      // 
      //     onLoad() {
      //         this.panel = cc.find('style/panel', this.node)
      //         this.btnRestart = cc.find('buttons/btn_restart', this.panel)
      //         this.btnRevive = cc.find('buttons/btn_revive', this.panel)
      //         this.btnRestart.on('click', this.onRestartClick, this)
      //         this.btnRevive.on('click', this.onReviveClick, this)
      //         this.tip = cc.find('tip', this.panel)
      //     }
      // 
      //     onDestroy() {
      //         this.btnRestart.off('click', this.onRestartClick, this)
      //         this.btnRevive.off('click', this.onReviveClick, this)
      //     }
      // 
      //     onEnable() {
      //         this.zoomIn(this.panel)
      //         SdkManager.instance.toggleBannerAd(true)
      //         this.rendor()
      //     }
      // 
      //     onDisable() {
      //         SdkManager.instance.toggleBannerAd(false)
      //     }
      // 
      //     rendor() {
      //         this.tip.getComponent(cc.Label).string = `本轮得分：${DataManager.instance.score}`
      //     }
      // 
      //     async onRestartClick() {
      //         AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
      //         await StaticInstance.fadeManager.fadeIn()
      //         StaticInstance.uiManager.toggle(ENUM_UI_TYPE.LOSE, false)
      //         DataManager.instance.score = 0
      //         StaticInstance.gameManager.onGameStart()
      //     }
      // 
      //     onReviveClick() {
      //         AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
      //         SdkManager.instance.showVideoAd(async () => {
      //             if (!SdkManager.instance.getPlatform()) {
      //                 ToastManager.instance.show('激励模拟发放', { gravity: 'TOP', bg_color: cc.color(102, 202, 28, 255) })
      //             }
      //             await StaticInstance.fadeManager.fadeIn()
      //             StaticInstance.uiManager.toggle(ENUM_UI_TYPE.LOSE, false)
      //             StaticInstance.gameManager.onGameStart()
      //         }, (msg: string) => {
      //             ToastManager.instance.show(msg, { gravity: 'TOP', bg_color: cc.color(226, 69, 109, 255) })
      //         })
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./telegram-web.ts', './Enum.ts', './Index.ts', './StaticInstance.ts', './Utils.ts', './Block.ts', './BlockReady.ts', './Level.ts', './Baselayer.ts', './ExitLayer.ts', './LoadingLayer.ts', './LoseLayer.ts', './MainLayer.ts', './MenuLayer.ts', './MoreLayer.ts', './SettingLayer.ts', './WinLayer.ts', './AudioManager.ts', './DataManager.ts', './EffectManager.ts', './EventManager.ts', './FadeManager.ts', './GameManager.ts', './PoolManager.ts', './ResourceManager.ts', './SdkManager.ts', './ToastManager.ts', './UIManager.ts', './UIScrollControl.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MainLayer.ts", ['cc', './Enum.ts', './AudioManager.ts', './StaticInstance.ts', './Baselayer.ts'], function (exports) {
  var cclegacy, find, _decorator, ENUM_AUDIO_CLIP, ENUM_UI_TYPE, AudioManager, StaticInstance, BaseLayer;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      find = module.find;
      _decorator = module._decorator;
    }, function (module) {
      ENUM_AUDIO_CLIP = module.ENUM_AUDIO_CLIP;
      ENUM_UI_TYPE = module.ENUM_UI_TYPE;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      StaticInstance = module.StaticInstance;
    }, function (module) {
      BaseLayer = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "995d75Ra29EXY7A+cLQ/Mrd", "MainLayer", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let MainLayer = exports('default', (_dec = ccclass('MainLayer'), _dec(_class = class MainLayer extends BaseLayer {
        constructor() {
          super(...arguments);
          this.btnPause = null;
        }
        onLoad() {
          this.btnPause = find('btn_pause', this.node);
          this.btnPause.on('click', this.onPauseClick, this);
        }
        onDestroy() {
          this.btnPause.off('click', this.onPauseClick, this);
        }
        onEnable() {}
        onDisable() {}
        onPauseClick() {
          //console.log("TTTT")
          AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK);
          StaticInstance.uiManager.toggle(ENUM_UI_TYPE.EXIT);
        }
      }) || _class));
      /**
       * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
       */
      // // Created by carolsail
      // 
      // import { ENUM_AUDIO_CLIP, ENUM_GAME_STATUS, ENUM_UI_TYPE } from "../Enum";
      // import AudioManager from "../manager/AudioManager";
      // import DataManager from "../manager/DataManager";
      // import { StaticInstance } from "../StaticInstance";
      // import BaseLayer from "./Baselayer";
      // 
      // const { ccclass, property } = cc._decorator;
      // 
      // @ccclass
      // export default class MainLayer extends BaseLayer {
      // 
      //     btnPause: cc.Node = null
      // 
      //     onLoad() {
      //         this.btnPause = cc.find('btn_pause', this.node)
      //         this.btnPause.on('click', this.onPauseClick, this)
      //     }
      // 
      //     onDestroy() {
      //         this.btnPause.off('click', this.onPauseClick, this)
      //     }
      // 
      //     onEnable() { }
      // 
      //     onDisable() { }
      // 
      //     onPauseClick() {
      //         AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
      //         StaticInstance.uiManager.toggle(ENUM_UI_TYPE.EXIT)
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MenuLayer.ts", ['cc', './Enum.ts', './StaticInstance.ts', './AudioManager.ts', './Baselayer.ts', './SdkManager.ts', './ToastManager.ts', './DataManager.ts'], function (exports) {
  var cclegacy, log, find, color, _decorator, ENUM_AUDIO_CLIP, ENUM_GAME_MODE, ENUM_UI_TYPE, StaticInstance, AudioManager, BaseLayer, SdkManager, ToastManager, DataManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      log = module.log;
      find = module.find;
      color = module.color;
      _decorator = module._decorator;
    }, function (module) {
      ENUM_AUDIO_CLIP = module.ENUM_AUDIO_CLIP;
      ENUM_GAME_MODE = module.ENUM_GAME_MODE;
      ENUM_UI_TYPE = module.ENUM_UI_TYPE;
    }, function (module) {
      StaticInstance = module.StaticInstance;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      BaseLayer = module.default;
    }, function (module) {
      SdkManager = module.default;
    }, function (module) {
      ToastManager = module.default;
    }, function (module) {
      DataManager = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "94d9eW2z5xN9KXMq6SiqvtZ", "MenuLayer", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let MenuLayer = exports('default', (_dec = ccclass('MenuLayer'), _dec(_class = class MenuLayer extends BaseLayer {
        constructor() {
          super(...arguments);
          this.btnStart = null;
          this.btnSetting = null;
          this.btnGames = null;
          this.btnShare = null;
        }
        onLoad() {
          log("onLoad");
          this.btnStart = find('main/btn_start', this.node);
          log(this.btnStart === null);
          this.btnSetting = find('bottom/btn_setting', this.node);
          this.btnGames = find('bottom/btn_games', this.node);
          this.btnShare = find('bottom/btn_share', this.node);
          this.btnStart.on('click', this.onStartClick, this);
          this.btnSetting.on('click', this.onSettingClick, this);
          this.btnGames.on('click', this.onGamesClick, this);
          this.btnShare.on('click', this.onShareClick, this);
        }
        onDestroy() {
          this.btnStart.off('click', this.onStartClick, this);
          this.btnSetting.off('click', this.onSettingClick, this);
          this.btnGames.off('click', this.onGamesClick, this);
          this.btnShare.off('click', this.onShareClick, this);
        }
        onEnable() {}
        onDisable() {}
        async onStartClick() {
          log("onStartClick");
          AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK);
          DataManager.instance.mode = ENUM_GAME_MODE.SCORE;
          await StaticInstance.fadeManager.fadeIn();
          StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MENU, false);
          StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MAIN);
          DataManager.instance.score = 0;
          StaticInstance.gameManager.onGameStart();
        }
        onSettingClick() {
          AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK);
          StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MENU, false);
          StaticInstance.uiManager.toggle(ENUM_UI_TYPE.SETTING);
        }
        onGamesClick() {
          AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK);
          StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MENU, false);
          StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MORE);
        }
        onShareClick() {
          AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK);
          if (SdkManager.instance.getPlatform()) {
            SdkManager.instance.activeShare();
          } else {
            ToastManager.instance.show('Підтримує лише невеликі ігрові платформи', {
              gravity: 'TOP',
              bg_color: color(226, 69, 109, 255)
            });
          }
        }
      }) || _class));
      /**
       * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
       */
      // // Created by carolsail
      // 
      // import { ENUM_AUDIO_CLIP, ENUM_GAME_MODE, ENUM_UI_TYPE } from "../Enum";
      // import { StaticInstance } from './../StaticInstance';
      // import AudioManager from "../manager/AudioManager";
      // import BaseLayer from "./Baselayer";
      // import SdkManager from "../manager/SdkManager";
      // import ToastManager from "../manager/ToastManager";
      // import DataManager from "../manager/DataManager";
      // 
      // const { ccclass, property } = cc._decorator;
      // 
      // @ccclass
      // export default class MenuLayer extends BaseLayer {
      // 
      //     btnStart: cc.Node = null
      //     btnSetting: cc.Node = null
      //     btnGames: cc.Node = null
      //     btnShare: cc.Node = null
      // 
      //     onLoad() {
      //         this.btnStart = cc.find('main/btn_start', this.node)
      //         this.btnSetting = cc.find('bottom/btn_setting', this.node)
      //         this.btnGames = cc.find('bottom/btn_games', this.node)
      //         this.btnShare = cc.find('bottom/btn_share', this.node)
      //         this.btnStart.on('click', this.onStartClick, this)
      //         this.btnSetting.on('click', this.onSettingClick, this)
      //         this.btnGames.on('click', this.onGamesClick, this)
      //         this.btnShare.on('click', this.onShareClick, this)
      //     }
      // 
      //     onDestroy() {
      //         this.btnStart.off('click', this.onStartClick, this)
      //         this.btnSetting.off('click', this.onSettingClick, this)
      //         this.btnGames.off('click', this.onGamesClick, this)
      //         this.btnShare.off('click', this.onShareClick, this)
      //     }
      // 
      //     onEnable() { }
      // 
      //     onDisable() { }
      // 
      //     async onStartClick() {
      //         AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
      //         DataManager.instance.mode = ENUM_GAME_MODE.SCORE
      //         await StaticInstance.fadeManager.fadeIn()
      //         StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MENU, false)
      //         StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MAIN)
      //         DataManager.instance.score = 0
      //         StaticInstance.gameManager.onGameStart()
      //     }
      // 
      //     onSettingClick() {
      //         AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
      //         StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MENU, false)
      //         StaticInstance.uiManager.toggle(ENUM_UI_TYPE.SETTING)
      //     }
      // 
      //     onGamesClick() {
      //         AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
      //         StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MENU, false)
      //         StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MORE)
      //     }
      // 
      //     onShareClick() {
      //         AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
      //         if (SdkManager.instance.getPlatform()) {
      //             SdkManager.instance.activeShare()
      //         } else {
      //             ToastManager.instance.show('仅支持小游戏平台', { gravity: 'TOP', bg_color: cc.color(226, 69, 109, 255) })
      //         }
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MoreLayer.ts", ['cc', './Enum.ts', './StaticInstance.ts', './AudioManager.ts', './Baselayer.ts', './DataManager.ts', './PoolManager.ts', './UIScrollControl.ts', './ResourceManager.ts', './SdkManager.ts'], function (exports) {
  var cclegacy, find, size, ScrollView, Sprite, Label, _decorator, ENUM_AUDIO_CLIP, ENUM_UI_TYPE, StaticInstance, AudioManager, BaseLayer, DataManager, PoolManager, UIScrollControl, ResourceManager, SdkManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      find = module.find;
      size = module.size;
      ScrollView = module.ScrollView;
      Sprite = module.Sprite;
      Label = module.Label;
      _decorator = module._decorator;
    }, function (module) {
      ENUM_AUDIO_CLIP = module.ENUM_AUDIO_CLIP;
      ENUM_UI_TYPE = module.ENUM_UI_TYPE;
    }, function (module) {
      StaticInstance = module.StaticInstance;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      BaseLayer = module.default;
    }, function (module) {
      DataManager = module.default;
    }, function (module) {
      PoolManager = module.default;
    }, function (module) {
      UIScrollControl = module.default;
    }, function (module) {
      ResourceManager = module.default;
    }, function (module) {
      SdkManager = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "9152a3E4wFB0JCSs+5/fMuT", "MoreLayer", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let MoreLayer = exports('default', (_dec = ccclass('MoreLayer'), _dec(_class = class MoreLayer extends BaseLayer {
        constructor() {
          super(...arguments);
          this.panel = null;
          this.btnClose = null;
          this.scrollNode = null;
          this.scrollItem = null;
        }
        onLoad() {
          this.panel = find('style/panel', this.node);
          this.btnClose = find('btn_close', this.panel);
          this.scrollNode = find('scroll', this.panel);
          this.scrollItem = PoolManager.instance.getNode('MoreItem');
          this.btnClose.on('click', this.onCloseClick, this);
        }
        onDestroy() {
          this.btnClose.off('click', this.onCloseClick, this);
        }
        onEnable() {
          this.zoomIn(this.panel);
          this.rendor();
          SdkManager.instance.toggleCustomRowAd(true);
        }
        onDisable() {
          SdkManager.instance.toggleCustomRowAd(false);
        }
        rendor() {
          const games = DataManager.instance.games;
          let isScrollToTop = false;
          this.scrollNode.getComponent(UIScrollControl).init(this.scrollItem, games.length, size(500, 110), 0, (node, index) => {
            if (!isScrollToTop) {
              isScrollToTop = true;
              this.scrollNode.getComponent(ScrollView).scrollToTop();
            }
            const game = games[index];
            node.getChildByName('icon').getComponent(Sprite).spriteFrame = ResourceManager.instance.getSprite(`${game.icon}`);
            node.getChildByName('title').getComponent(Label).string = `${game.title}`;
            if (!node.hasEventListener('click')) {
              node.on('click', () => {
                this.onItemClick(game);
              }, this);
            } else {
              node.off('click');
              node.on('click', () => {
                this.onItemClick(game);
              }, this);
            }
          }, scroll => {
            // scroll.scrollToOffset(cc.v2(0, maxLevel * 110 - (scroll.node.height / 2)), 0.05)
            scroll.scrollToTop();
          });
        }
        onItemClick(item) {
          let url = '';
          if (typeof window['wx'] == 'undefined') {
            url = item.url;
          } else {
            AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK);
            url = item.appid;
          }
          if (url) SdkManager.instance.turnToApp(url);
        }
        onCloseClick() {
          AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK);
          StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MORE, false);
          StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MENU);
        }
      }) || _class));
      /**
       * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
       */
      // // Created by carolsail
      // 
      // import { ENUM_AUDIO_CLIP, ENUM_UI_TYPE } from "../Enum";
      // import { StaticInstance } from './../StaticInstance';
      // import AudioManager from "../manager/AudioManager";
      // import BaseLayer from "./Baselayer";
      // import DataManager from "../manager/DataManager";
      // import PoolManager from "../manager/PoolManager";
      // import UIScrollControl from "../plugins/UIScrollControl";
      // import ResourceManager from "../manager/ResourceManager";
      // import SdkManager from "../manager/SdkManager";
      // 
      // const { ccclass, property } = cc._decorator;
      // 
      // @ccclass
      // export default class MoreLayer extends BaseLayer {
      // 
      //     panel: cc.Node = null
      //     btnClose: cc.Node = null
      //     scrollNode: cc.Node = null
      //     scrollItem: cc.Node = null
      // 
      //     onLoad() {
      //         this.panel = cc.find('style/panel', this.node)
      //         this.btnClose = cc.find('btn_close', this.panel)
      //         this.scrollNode = cc.find('scroll', this.panel)
      //         this.scrollItem = PoolManager.instance.getNode('MoreItem')
      //         this.btnClose.on('click', this.onCloseClick, this)
      //     }
      // 
      //     onDestroy() {
      //         this.btnClose.off('click', this.onCloseClick, this)
      //     }
      // 
      //     onEnable() {
      //         this.zoomIn(this.panel)
      //         this.rendor()
      //         SdkManager.instance.toggleCustomRowAd(true)
      //     }
      // 
      //     onDisable() {
      //         SdkManager.instance.toggleCustomRowAd(false)
      //     }
      // 
      //     rendor() {
      //         const games = DataManager.instance.games
      //         let isScrollToTop = false
      //         this.scrollNode.getComponent(UIScrollControl).init(this.scrollItem, games.length, cc.size(500, 110), 0, (node: cc.Node, index: number) => {
      //             if (!isScrollToTop) {
      //                 isScrollToTop = true
      //                 this.scrollNode.getComponent(cc.ScrollView).scrollToTop()
      //             }
      //             const game = games[index]
      //             node.getChildByName('icon').getComponent(cc.Sprite).spriteFrame = ResourceManager.instance.getSprite(`${game.icon}`)
      //             node.getChildByName('title').getComponent(cc.Label).string = `${game.title}`
      //             if (!node.hasEventListener('click')) {
      //                 node.on('click', () => { this.onItemClick(game) }, this)
      //             } else {
      //                 node.off('click')
      //                 node.on('click', () => { this.onItemClick(game) }, this)
      //             }
      //         }, (scroll: cc.ScrollView) => {
      //             // scroll.scrollToOffset(cc.v2(0, maxLevel * 110 - (scroll.node.height / 2)), 0.05)
      //             scroll.scrollToTop()
      //         })
      //     }
      // 
      //     onItemClick(item: any) {
      //         let url: string = ''
      //         if (typeof window['wx'] == 'undefined') {
      //             url = item.url
      //         } else {
      //             AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
      //             url = item.appid
      //         }
      //         if (url) SdkManager.instance.turnToApp(url)
      //     }
      // 
      //     onCloseClick() {
      //         AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
      //         StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MORE, false)
      //         StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MENU)
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PoolManager.ts", ['cc'], function (exports) {
  var instantiate, NodePool, cclegacy;
  return {
    setters: [function (module) {
      instantiate = module.instantiate;
      NodePool = module.NodePool;
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a46f4A6CpBE04BZI8Amk1vE", "PoolManager", undefined);
      class PoolManager {
        constructor() {
          this._dictPool = {};
          // Словник для об'єктів у пулі
          this._dictPrefab = {};
        }
        static getInstance() {
          if (this._instance === null) {
            this._instance = new this();
          }
          return this._instance;
        }
        static get instance() {
          return this.getInstance();
        }
        // Словник для префабів
        /**
         * Копіювання вузла.
         * @param copynode - Вузол для копіювання.
         * @param parent - Батьківський вузол для копії.
         * @returns Скопійований вузол.
         */
        copyNode(copynode, parent) {
          const name = copynode.name;
          this._dictPrefab[name] = copynode;
          let node = null;
          if (this._dictPool.hasOwnProperty(name)) {
            const pool = this._dictPool[name];
            node = pool.size() > 0 ? pool.get() : instantiate(copynode);
          } else {
            const pool = new NodePool();
            this._dictPool[name] = pool;
            node = instantiate(copynode);
          }
          if (parent) {
            node.setParent(parent);
            node.active = true;
          }
          return node;
        }

        /**
         * Витяг вузла з пулу.
         * @param prefab - Префаб або назва префабу.
         * @param parent - Батьківський вузол (опціонально).
         * @param pos - Позиція для нового вузла (опціонально).
         * @returns Вузол.
         */
        getNode(prefab, parent, pos) {
          let tempPre;
          let name;
          if (typeof prefab === 'string') {
            tempPre = this._dictPrefab[prefab];
            name = prefab;
            if (!tempPre) {
              console.log("Помилка: Невірна назва префабу =", name);
              return null;
            }
          } else {
            tempPre = prefab;
            name = prefab.data.name;
          }
          let node = null;
          if (this._dictPool.hasOwnProperty(name)) {
            const pool = this._dictPool[name];
            node = pool.size() > 0 ? pool.get() : instantiate(tempPre);
          } else {
            const pool = new NodePool();
            this._dictPool[name] = pool;
            node = instantiate(tempPre);
          }
          if (parent) {
            node.setParent(parent);
            node.active = true;
            if (pos) node.setPosition(pos);
          }
          return node;
        }

        /**
         * Повернення вузла у пул.
         * @param node - Вузол для повернення.
         * @param isActive - Чи має вузол залишатися активним (за замовчуванням - false).
         */
        putNode(node, isActive) {
          if (isActive === void 0) {
            isActive = false;
          }
          if (!node) return;
          const name = node.name;
          let pool;
          if (this._dictPool.hasOwnProperty(name)) {
            pool = this._dictPool[name];
          } else {
            pool = new NodePool();
            this._dictPool[name] = pool;
          }
          node.active = isActive;
          pool.put(node);
        }

        /**
         * Очистити пул за назвою.
         * @param name - Назва пулу.
         */
        clearPool(name) {
          if (this._dictPool.hasOwnProperty(name)) {
            const pool = this._dictPool[name];
            pool.clear();
          }
        }

        /**
         * Додати префаб до словника.
         * @param name - Назва префабу.
         * @param prefab - Префаб для додавання.
         */
        setPrefab(name, prefab) {
          this._dictPrefab[name] = prefab;
        }

        /**
         * Отримати префаб за назвою.
         * @param name - Назва префабу.
         * @returns Префаб.
         */
        getPrefab(name) {
          return this._dictPrefab[name];
        }
      }
      exports('default', PoolManager);

      /**
       * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
       */
      // // Created by carolsail
      // 
      // export default class PoolManager{
      // 
      //     private static _instance: any = null
      // 
      //     static getInstance<T>(): T {
      //         if (this._instance === null) {
      //             this._instance = new this()
      //         }
      // 
      //         return this._instance
      //     }
      // 
      //     static get instance() {
      //         return this.getInstance<PoolManager>()
      //     }
      // 
      //     private _dictPool: any = {}
      //     private _dictPrefab: any = {}
      // 
      //     // 复制节点
      //     public copyNode(copynode: cc.Node, parent: cc.Node | null): cc.Node {
      //         let name = copynode.name;
      //         this._dictPrefab[name] = copynode;
      //         let node = null;
      //         if (this._dictPool.hasOwnProperty(name)) {
      //             let pool = this._dictPool[name];
      //             if (pool.size() > 0) {
      //                 node = pool.get();
      //             } else {
      //                 node = cc.instantiate(copynode);
      //             }
      //         } else {
      // 
      //             let pool = new cc.NodePool();
      //             this._dictPool[name] = pool;
      // 
      //             node = cc.instantiate(copynode);
      //         }
      //         if (parent) {
      //             node.parent = parent;
      //             node.active = true;
      //         }
      //         return node;
      //     }
      // 
      //     // 从池子取出节点
      //     public getNode(prefab: cc.Prefab | string, parent?: cc.Node, pos?: cc.Vec3): cc.Node {
      //         let tempPre: any;
      //         let name: any;
      //         if (typeof prefab === 'string') {
      //             tempPre = this._dictPrefab[prefab];
      //             name = prefab;
      //             if (!tempPre) {
      //                 console.log("Pool invalid prefab name = ", name);
      //                 return null;
      //             }
      //         }
      //         else {
      //             tempPre = prefab;
      //             name = prefab.data.name;
      //         }
      // 
      //         let node = null;
      //         if (this._dictPool.hasOwnProperty(name)) {
      //             //已有对应的对象池
      //             let pool = this._dictPool[name];
      //             if (pool.size() > 0) {
      //                 node = pool.get();
      //             } else {
      //                 node = cc.instantiate(tempPre);
      //             }
      //         } else {
      //             //没有对应对象池，创建他！
      //             let pool = new cc.NodePool();
      //             this._dictPool[name] = pool;
      // 
      //             node = cc.instantiate(tempPre);
      //         }
      // 
      //         if (parent) {
      //             node.parent = parent;
      //             node.active = true;
      //             if (pos) node.position = pos;
      //         }
      //         return node;
      //     }
      // 
      //     // 节点放进池子
      //     public putNode(node: cc.Node | null, isActive = false) {
      //         if (!node) {
      //             return;
      //         }
      // 
      //         //console.log("回收信息",node.name,node)
      //         let name = node.name;
      //         let pool = null;
      //         // node.active = isActive
      //         if (this._dictPool.hasOwnProperty(name)) {
      //             //已有对应的对象池
      //             pool = this._dictPool[name];
      //         } else {
      //             //没有对应对象池，创建他！
      //             pool = new cc.NodePool();
      //             this._dictPool[name] = pool;
      //         }
      // 
      //         pool.put(node);
      //     }
      // 
      //     // 根据名字清池
      //     public clearPool(name: string) {
      //         if (this._dictPool.hasOwnProperty(name)) {
      //             let pool = this._dictPool[name];
      //             pool.clear();
      //         }
      //     }
      // 
      //     // 添加预制体
      //     public setPrefab(name: string, prefab: cc.Prefab): void {
      //         this._dictPrefab[name] = prefab;
      //     }
      // 
      //     // 取预制体
      //     public getPrefab(name: string): cc.Prefab {
      //         return this._dictPrefab[name];
      //     }
      // }
      PoolManager._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResourceManager.ts", ['cc', './DataManager.ts', './PoolManager.ts'], function (exports) {
  var resources, cclegacy, DataManager, PoolManager;
  return {
    setters: [function (module) {
      resources = module.resources;
      cclegacy = module.cclegacy;
    }, function (module) {
      DataManager = module.default;
    }, function (module) {
      PoolManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ab2a6CEvxhMQ77c3CMn4zMe", "ResourceManager", undefined);
      class ResourceManager {
        constructor() {
          this.clipMap = {};
          // Мапа для аудіокліпів
          this.spriteMap = {};
          // Мапа для спрайтів
          this.jsonMap = {};
        }
        // Отримання синглтон-екземпляра
        static getInstance() {
          if (this._instance === null) {
            this._instance = new this();
          }
          return this._instance;
        }
        static get instance() {
          return this.getInstance();
        }

        /**
         * Завантаження ресурсу.
         * @param resource - Об'єкт із шляхом, типом та контентом ресурсу.
         * @param ratio - Відношення для розрахунку прогресу завантаження.
         */
        async loadRes(resource, ratio) {
          return new Promise((resolve, reject) => {
            const rate = DataManager.instance.loadingRate;

            // Завантаження всіх ресурсів у директорії
            resources.loadDir(resource.path, resource.content, (finished, total) => {
              // Оновлення прогресу завантаження
              if (resource.ratio > 0) {
                const loadingRate = Math.floor((rate + resource.ratio * finished / total) * 100) / 100;
                DataManager.instance.loadingRate = Math.max(loadingRate, DataManager.instance.loadingRate);
              }
            }, (err, assets) => {
              if (err) {
                reject && reject(err);
                return;
              }

              // Розподіл ресурсів за типами
              for (const asset of assets) {
                switch (resource.type) {
                  case 'audio':
                    if (!this.clipMap[asset.name]) {
                      this.clipMap[asset.name] = asset;
                    }
                    break;
                  case 'prefab':
                    const prefab = asset;
                    PoolManager.instance.setPrefab(prefab.data.name, prefab);
                    break;
                  case 'sprite':
                    if (!this.spriteMap[asset.name]) {
                      this.spriteMap[asset.name] = asset;
                    }
                    break;
                  case 'json':
                    const jsonAsset = asset;
                    if (!this.jsonMap[jsonAsset.name]) {
                      this.jsonMap[jsonAsset.name] = jsonAsset.json;
                    }
                    break;
                }
              }
              resolve && resolve();
            });
          });
        }

        /**
         * Отримати аудіокліп за ім'ям.
         * @param name - Ім'я кліпу.
         * @returns Аудіокліп.
         */
        getClip(name) {
          return this.clipMap[name];
        }

        /**
         * Отримати спрайт за ім'ям.
         * @param name - Ім'я спрайта.
         * @returns Спрайт.
         */
        getSprite(name) {
          return this.spriteMap[name];
        }

        /**
         * Отримати JSON за ім'ям.
         * @param name - Ім'я JSON-ресурсу.
         * @returns Об'єкт JSON.
         */
        getJson(name) {
          return this.jsonMap[name];
        }
      }
      exports('default', ResourceManager);

      /**
       * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
       */
      // // Created by carolsail
      // import DataManager from './DataManager';
      // import PoolManager from './PoolManager';
      // 
      // export default class ResourceManager {
      // 
      //     public clipMap = {}
      // 
      //     public spriteMap = {}
      // 
      //     public jsonMap = {}
      // 
      //     private static _instance: any = null
      // 
      //     static getInstance<T>(): T {
      //         if (this._instance === null) {
      //             this._instance = new this()
      //         }
      // 
      //         return this._instance
      //     }
      // 
      //     static get instance() {
      //         return this.getInstance<ResourceManager>()
      //     }
      // 
      //     public async loadRes(resource: any, ratio: number = 0) {
      //         return new Promise<void>((resolve, reject) => {
      //             const rate = DataManager.instance.loadingRate
      //             cc.resources.loadDir(resource.path, resource.content, (finished: number, total: number) => {
      //                 // 资源加载进度
      //                 if (resource.ratio > 0) {
      //                     // 保留两位小数
      //                     const loadingRate = Math.floor((rate + resource.ratio * finished / total) * 100) / 100
      //                     DataManager.instance.loadingRate = Math.max(loadingRate, DataManager.instance.loadingRate)
      //                 }
      //             }, (err, assets: any) => {
      //                 if (err) reject && reject()
      //                 let asset: any
      //                 if (resource.type == 'audio') {
      //                     for (let i = 0; i < assets.length; i++) {
      //                         asset = assets[i];
      //                         if (!this.clipMap[asset.name]) this.clipMap[asset.name] = asset
      //                     }
      //                 }
      //                 if (resource.type == 'prefab') {
      //                     for (let i = 0; i < assets.length; i++) {
      //                         asset = assets[i];
      //                         PoolManager.instance.setPrefab(asset.data.name, asset)
      //                     }
      //                 }
      //                 if (resource.type == 'sprite') {
      //                     for (let i = 0; i < assets.length; i++) {
      //                         asset = assets[i];
      //                         if (!this.spriteMap[asset.name]) this.spriteMap[asset.name] = asset
      //                     }
      //                 }
      //                 if (resource.type == 'json') {
      //                     for (let i = 0; i < assets.length; i++) {
      //                         asset = assets[i];
      //                         if (!this.jsonMap[asset.name]) this.jsonMap[asset.name] = asset.json
      //                     }
      //                 }
      //                 resolve && resolve()
      //             })
      //         })
      //     }
      // 
      //     public getClip(name: string) {
      //         return this.clipMap[name]
      //     }
      // 
      //     public getSprite(name: string) {
      //         return this.spriteMap[name]
      //     }
      // 
      //     public getJson(name: string) {
      //         return this.jsonMap[name];
      //     }
      // }
      // Мапа для JSON
      ResourceManager._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SdkManager.ts", ['cc', './AudioManager.ts', './Utils.ts'], function (exports) {
  var sys, cclegacy, AudioManager, uuid;
  return {
    setters: [function (module) {
      sys = module.sys;
      cclegacy = module.cclegacy;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      uuid = module.uuid;
    }],
    execute: function () {
      cclegacy._RF.push({}, "63001T9hINHxKQXF9QDpdaI", "SdkManager", undefined);
      class SdkManager {
        constructor() {
          this.shareTitle = 'Спробуй цю цікаву гру, ти приймеш виклик?';
          this.shareImg = '';
          this.videoId = '';
          // ID відеореклами
          this.videoAd = null;
          // Об'єкт для відеореклами
          this.interstitialId = '';
          // ID міжсторінкової реклами
          this.interstitialAd = null;
          // Об'єкт міжсторінкової реклами
          this.bannerId = '';
          // ID банерної реклами
          this.bannerAd = null;
          // Об'єкт банерної реклами
          this.customRowId = '';
          // ID горизонтальних рекламних блоків
          this.customRowAd = null;
          // Об'єкт горизонтальної реклами
          this.customColId = '';
          // ID вертикальних рекламних блоків
          this.customColAd = null;
          // Об'єкт вертикальної реклами
          this.videoRecorder = null;
          // Рекордер відео
          this.videoRecordState = 0;
          // Стан запису
          this.videoStartTime = null;
          // Час початку запису
          this.videoRecordTime = 120;
          // Тривалість запису
          this.videoPath = null;
          // Шлях до записаного відео
          this.videoIsExist = 0;
          // Чи існує відео
          this.videoTopics = [];
        }
        static get instance() {
          if (!this._instance) {
            this._instance = new SdkManager();
          }
          return this._instance;
        }
        // Теми для відео
        // Отримати платформу
        getPlatform() {
          if (sys.platform === sys.Platform.WECHAT_GAME) {
            return window['wx'];
          } else if (sys.platform === sys.Platform.BYTEDANCE_MINI_GAME) {
            return window['tt'];
          }
          return null;
        }

        // Активне поширення
        activeShare(options) {
          if (options === void 0) {
            options = {};
          }
          const platform = this.getPlatform();
          if (!platform) {
            console.log('【Активне поширення】Підтримується лише на платформах міні-ігор!');
            return;
          }
          options.title = options.title || this.shareTitle;
          options.imageUrl = options.imageUrl || this.shareImg;
          platform.shareAppMessage(options);
        }

        // Пасивне поширення
        passiveShare(options) {
          if (options === void 0) {
            options = {};
          }
          const platform = this.getPlatform();
          if (!platform) {
            console.log('【Пасивне поширення】Підтримується лише на платформах міні-ігор!');
            return;
          }
          platform.showShareMenu({
            success: () => console.log('Меню поширення показано.'),
            fail: () => console.log('Не вдалося показати меню поширення.')
          });
          options.title = options.title || this.shareTitle;
          options.imageUrl = options.imageUrl || this.shareImg;
          platform.onShareAppMessage(() => options);
        }

        // Отримати параметри поширення
        getShareQuery(key) {
          const platform = this.getPlatform();
          if (!platform) {
            console.log('【Отримання параметрів поширення】Підтримується лише на платформах міні-ігор!');
            return null;
          }
          const options = platform.getLaunchOptionsSync();
          return options.query ? options.query[key] : null;
        }

        // Перехід до іншого додатку
        turnToApp(appId) {
          if (!appId) return;
          const platform = this.getPlatform();
          if (!platform) {
            this.turnToBrowser(appId);
            return;
          }
          platform.navigateToMiniProgram({
            appId
          });
        }

        // Перехід у браузері
        turnToBrowser(url) {
          window.open(url);
        }

        // 监听音频中断（微信）
        initAudioEndListener() {
          if (typeof window['wx'] === 'undefined') {
            console.log('【音频中断监听】仅支持微信平台!');
            return;
          }
          window['wx'].onAudioInterruptionEnd(() => {
            console.log('音频中断，恢复播放');
            AudioManager.instance.playMusic();
          });
        }

        // Ініціалізація банера
        initBannerAd() {
          const platform = this.getPlatform();
          if (!platform) {
            console.log('【Ініціалізація банера】Підтримується лише на платформах міні-ігор!');
            return;
          }
          if (!this.bannerId) {
            console.log('【Банерна реклама】Будь ласка, вкажіть ID банера.');
            return;
          }
          const systemInfo = platform.getSystemInfoSync();
          this.bannerAd = platform.createBannerAd({
            adUnitId: this.bannerId,
            style: {
              top: systemInfo.screenHeight - 80,
              left: 0,
              width: systemInfo.screenWidth
            }
          });
          this.bannerAd.onError(err => {
            console.error('Помилка ініціалізації банера:', err);
          });
        }

        // Показ/приховування банера
        toggleBannerAd(isShow) {
          if (this.bannerAd) {
            isShow ? this.bannerAd.show() : this.bannerAd.hide();
          }
        }

        // 插屏展示
        showInterstitialAd() {
          const platform = this.getPlatform();
          if (!platform) {
            console.log('【流量主插屏】仅支持小游戏平台!');
            return;
          }
          if (this.interstitialAd) {
            this.interstitialAd.show().catch(err => {
              console.error('【流量主插屏】加载失败');
            });
          }
        }

        // Ініціалізація відеореклами
        initVideoAd() {
          const platform = this.getPlatform();
          if (!platform || !this.videoId) return;
          this.videoAd = platform.createRewardedVideoAd({
            adUnitId: this.videoId
          });
          this.videoAd.onError(err => console.error('Помилка ініціалізації відео:', err));
        }

        // Відтворення відеореклами
        showVideoAd(success, fail) {
          const platform = this.getPlatform();
          if (!platform) {
            // console.log('激励模拟成功')
            return success && success('模拟成功，激励奖励已发放');
          }
          if (this.videoAd) {
            this.videoAd.offClose();
            this.videoAd.onClose(res => {
              this.videoAd.offClose();
              if (res && res.isEnded || res === undefined) {
                return success && success('激励奖励已发放');
              } else {
                return fail && fail('视频播放中断');
              }
            });
            this.videoAd.show().catch(() => {
              this.videoAd.load().then(() => this.videoAd.show()).catch(err => {
                console.log('广告展示失败');
              });
            });
          } else {
            // console.log('激励模拟成功')
            return fail && fail('该功能尚未开放');
          }
        }
        // showVideoAd(onSuccess: () => void, onFail?: () => string) {
        //     if (!this.videoAd) return;
        //     this.videoAd.show()
        //         .then(() => onSuccess())
        //         .catch(() => {
        //             this.videoAd.load()
        //                 .then(() => this.videoAd.show())
        //                 .catch(() => onFail && onFail());
        //         });
        // }

        // Інші методи (для міжсторінкової реклами, запису відео тощо) додаються за аналогією
        //todo

        // 初始化横向格子
        initCustomRowAd() {
          const platform = this.getPlatform();
          if (!platform) {
            console.log('【横向格子初始化】仅支持小游戏平台!');
            return;
          }
          if (this.customRowId == '') {
            console.log('【流量主】请配置横向格子广告ID');
            return;
          }
          let winSize = platform.getSystemInfoSync();
          if (this.customRowAd == null) {
            this.customRowAd = platform.createCustomAd({
              adUnitId: this.customRowId,
              adIntervals: 30,
              style: {
                width: 320,
                left: (winSize.screenWidth - 320) / 2,
                top: winSize.screenHeight - 100,
                fixed: 0
              }
            });
            this.customRowAd.onError(err => {
              console.error('【流量主横向格子】初始化有误');
            });
          }
        }

        // 横向格子广告展示
        toggleCustomRowAd(isShow) {
          if (isShow === void 0) {
            isShow = true;
          }
          const platform = this.getPlatform();
          if (!platform) {
            console.log(`【流量主横向格子:${isShow}】仅支持小游戏平台!`);
            return;
          }
          if (this.customRowAd) isShow ? this.customRowAd.show() : this.customRowAd.hide();
        }

        // 初始化纵向格子
        initCustomColAd() {
          const platform = this.getPlatform();
          if (!platform) {
            console.log('【纵向格子初始化】仅支持小游戏平台!');
            return;
          }
          if (this.customColId == '') {
            console.log('【流量主】请配置纵向格子广告ID');
            return;
          }
          let winSize = platform.getSystemInfoSync();
          if (this.customColAd == null) {
            this.customColAd = platform.createCustomAd({
              adUnitId: this.customColId,
              adIntervals: 30,
              style: {
                width: 80,
                left: winSize.screenWidth - 60,
                top: 20,
                fixed: 0
              }
            });
            this.customColAd.onError(err => {
              console.error('【流量主纵向格子】初始化有误');
            });
          }
        }

        // 横向格子广告展示
        toggleCustomColAd(isShow) {
          if (isShow === void 0) {
            isShow = true;
          }
          const platform = this.getPlatform();
          if (!platform) {
            console.log(`【流量主纵向格子:${isShow}】仅支持小游戏平台!`);
            return;
          }
          if (this.customColAd) isShow ? this.customColAd.show() : this.customColAd.hide();
        }
        // 获取排行榜
        getRank() {
          if (typeof window['wx'] === 'undefined') {
            console.log('【获取排名】仅支持微信平台!');
            return;
          }
          window['wx'].postMessage({
            event: 'getRank'
          });
        }
        /**
         * 设置排名
         * @param data 关卡数
         */
        setRank(data) {
          if (typeof window['wx'] === 'undefined') {
            console.log('【设置排名】仅支持微信平台!', data);
            return;
          }
          window['wx'].postMessage({
            event: 'setRank',
            data: data
          });
        }
        // 录制视频开始
        recordingVideoStart() {
          if (typeof window['tt'] === 'undefined') {
            console.log('【录屏功能】仅支持抖音平台!');
            return;
          }
          this.videoRecorder = window['tt'].getGameRecorderManager();
          this.videoRecordState = 1;
          this.videoIsExist = 0;
          this.videoStartTime = Date.parse(new Date().toString());
          // 开始回调
          this.videoRecorder.onStart(res => {
            //console.log('录屏开始');
            //console.log(res);
          });
          // 开始
          this.videoRecorder.start({
            duration: this.videoRecordTime // 录制时长
          });
          // 录制结束回调
          this.videoRecorder.onStop(res => {
            this.videoRecordState = 2;
            this.videoPath = res.videoPath;
            //console.log('录屏结束', this.videoPath)
          });
          // 录制错误回调
          this.videoRecorder.onError(res => {
            //console.log("录屏error", res)
          });
        }
        //    // 录制视频结束
        recordingVideoEnd() {
          if (typeof window['tt'] === 'undefined') {
            console.log('【录屏功能】仅支持抖音平台!');
            return;
          }
          if (this.videoRecorder) {
            const endTime = Date.parse(new Date().toString());
            if ((endTime - this.videoStartTime) / 1000 <= 5) {
              this.videoIsExist = 1;
            } else {
              this.videoIsExist = 0;
            }
            this.videoRecorder.stop();
          }
        }
        /**
        * 录制视频分享
        * 参数1 成功回调
        * 参数2 失败回调
        */
        recordingVideoShare(suss, fail) {
          // if (typeof window['tt'] === 'undefined') {
          // console.log('【录屏功能】仅支持抖音平台!')
          // return
          // }
          // if (this.videoIsExist == 1) {
          // console.log('录制时间过短')
          // return;
          // }
          // this.videoRecordState = 3;
          // window['tt'].shareAppMessage({
          // channel: 'video',
          // title: '',
          // imageUrl: '',
          // query: '',
          // extra: {
          // videoPath: this.videoPath, // 可用录屏得到的视频地址
          // videoTopics: this.videoTopics,
          // createChallenge: true
          // },
          // success() {
          // success && success()
          // },
          // fail(err: any) {
          // fail && fail()
          // }
          // })
        }
        // 录屏是否存在
        isVideoExist() {
          return this.videoIsExist;
        }
        // 获取登录code（后续服务器兑换openid）
        getLoginCode(callback) {
          const obj = {
            status: false,
            data: null,
            msg: '服务器异常'
          };
          window['wx'].login({
            success(res) {
              if (res.code) {
                obj.status = true;
                obj.data = res.code;
                obj.msg = '成功获取code';
                callback && callback(obj);
              } else {
                callback && callback(obj);
              }
            },
            fail() {
              callback && callback(obj);
            }
          });
        }
        // 获取授权信息
        getLoginInfo(callback) {
          if (typeof window['wx'] === 'undefined') {
            console.log('【授权登录】仅支持微信平台!');
            return;
          }
          const obj = {
            status: false,
            data: null,
            msg: '服务器异常'
          };
          window['wx'].getSetting({
            success(res) {
              if (res.authSetting["scope.userInfo"]) {
                window['wx'].getUserInfo({
                  success(res) {
                    const info = res.userInfo;
                    const user = {
                      openid: uuid(),
                      nickname: info.nickName,
                      gender: info.gender,
                      avatar: info.avatarUrl
                    };
                    obj.status = true;
                    obj.data = user;
                    obj.msg = '已授权';
                    callback && callback(obj);
                  },
                  fail() {
                    callback && callback(obj);
                  }
                });
              } else {
                const sys = window['wx'].getSystemInfoSync();
                const width = sys.screenWidth;
                const height = sys.screenHeight;
                let button = window['wx'].createUserInfoButton({
                  type: 'text',
                  text: '',
                  style: {
                    left: 0,
                    top: 0,
                    width: width,
                    height: height,
                    backgroundColor: '#00000000',
                    color: '#ffffff',
                    fontSize: 20,
                    textAlign: 'center',
                    lineHeight: height
                  }
                });
                const tapEvent = function (res) {
                  button.destroy();
                  if (res.userInfo) {
                    const info = res.userInfo;
                    const user = {
                      openid: uuid(),
                      nickname: info.nickName,
                      gender: info.gender,
                      avatar: info.avatarUrl
                    };
                    obj.status = true;
                    obj.data = user;
                    obj.msg = '接受授权';
                    callback && callback(obj);
                  } else {
                    obj.msg = '拒绝授权';
                    callback && callback(obj);
                  }
                };
                button.onTap(tapEvent);
              }
            },
            fail() {
              callback && callback(obj);
            }
          });
        }
        // 不经过授权生成登录信息
        getLoginInfoLocal(callback) {
          const obj = {
            status: true,
            data: null,
            msg: '模拟用户数据'
          };
          // 截取时间戳后4位作为用户名
          const time = new Date().getTime();
          let nickname = `${time}`;
          nickname = 'NO.' + nickname.substring(nickname.length - 4);
          const user = {
            openid: uuid(),
            nickname: nickname,
            gender: 0,
            avatar: ''
          };
          obj.data = user;
          callback && callback(obj);
        }
      }
      exports('default', SdkManager);

      /**
       * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
       */
      // import { uuid } from "../Utils";
      // import AudioManager from "./AudioManager";
      // import { ICallBack, IUser } from "./DataManager";
      //
      // export default class SdkManager {
      //     public static _instance: SdkManager = null
      //
      //     public static get instance() {
      //         if (null == this._instance) {
      //             this._instance = new SdkManager();
      //         }
      //         return this._instance
      //     }
      //
      //     shareTitle: string = '好玩上头的游戏，你敢接受挑战吗？'
      //     shareImg: string = ''
      //     // 激励视频
      //     videoId: string = ''
      //     private videoAd = null
      //     // 插屏
      //     interstitialId: string = ''
      //     private interstitialAd = null
      //     // 横幅
      //     bannerId: string = ''
      //     private bannerAd = null
      //     // 原生格子: 横向（默认后台90%多格子）
      //     customRowId: string = ''
      //     private customRowAd = null
      //     // 原生格子: 纵向（默认后台80%单个子）
      //     customColId: string = ''
      //     private customColAd = null
      //     // 抖音录屏
      //     videoRecorder: any = null; // 录制器
      //     videoRecordState: number = 0; // 录制状态
      //     videoStartTime: number = null; // 录制起始时间
      //     videoRecordTime: number = 120; // 视频录制时长
      //     videoPath: string = null; // 录制所得视频地址
      //     videoIsExist: number = 0; // 视频是否存在, 默认存在
      //     videoTopics: string[] = []
      //
      //     // 获取平台
      //     getPlatform() {
      //         let platform = null
      //         if (cc.sys.platform == cc.sys.WECHAT_GAME) {
      //             platform = window['wx']
      //         } else if (cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
      //             platform = window['tt']
      //         }
      //         return platform
      //     }
      //
      //     // 主动分享
      //     // query: string (eg: key1=val1&key2=val2)
      //     activeShare(options: { title?: string, imageUrl?: string, query?: string } = { title: '', imageUrl: '', query: '' }) {
      //         const platform = this.getPlatform()
      //         if (!platform) {
      //             console.log('【主动分享】仅支持小游戏平台!')
      //             return
      //         }
      //         options.title = options.title || this.shareTitle
      //         options.imageUrl = options.imageUrl || this.shareImg
      //         platform.shareAppMessage(options);
      //     }
      //
      //     // 被动分享
      //     passiveShare(options: { title?: string, imageUrl?: string, query?: string } = { title: '', imageUrl: '', query: '' }) {
      //         const platform = this.getPlatform()
      //         if (!platform) {
      //             console.log('【被动分享】仅支持小游戏平台!')
      //             return
      //         }
      //         platform.showShareMenu({
      //             success: (res: any) => { },
      //             fail: (res: any) => { }
      //         });
      //         options.title = options.title || this.shareTitle
      //         options.imageUrl = options.imageUrl || this.shareImg
      //         platform.onShareAppMessage(() => {
      //             return options
      //         });
      //     }
      //
      //     // 获取分享参数
      //     getShareQuery(key: string) {
      //         const platform = this.getPlatform()
      //         if (!platform) {
      //             console.log('【分享参数获取】仅支持小游戏平台!')
      //             return
      //         }
      //         const options = platform.getLaunchOptionsSync()
      //         const query = options.query
      //         let data = null
      //         if (query && query[key]) {
      //             data = query[key]
      //         }
      //         return data
      //     }
      //
      //     // 跳转
      //     turnToApp(appId: string) {
      //         if (appId == '') return
      //         const platform = this.getPlatform()
      //         if (!platform) {
      //             this.turnToBrowser(appId)
      //             return
      //         }
      //         platform.navigateToMiniProgram({
      //             appId: appId
      //         });
      //     }
      //
      //     // 浏览器跳转
      //     turnToBrowser(url: string) {
      //         window.open(url)
      //     }
      //
      //     // 监听音频中断（微信）
      //     initAudioEndListener() {
      //         if (typeof window['wx'] === 'undefined') {
      //             console.log('【音频中断监听】仅支持微信平台!')
      //             return
      //         }
      //         window['wx'].onAudioInterruptionEnd(() => {
      //             console.log('音频中断，恢复播放')
      //             AudioManager.instance.playMusic()
      //         })
      //     }
      //
      //     // 初始化横幅
      //     initBannerAd() {
      //         const platform = this.getPlatform()
      //         if (!platform) {
      //             console.log('【流量主横幅初始化】仅支持小游戏平台!')
      //             return
      //         }
      //         if (this.bannerId == '') {
      //             console.log('【流量主】请配置横幅广告ID')
      //             return
      //         }
      //         let winSize = platform.getSystemInfoSync();
      //         if (this.bannerAd == null) {
      //             this.bannerAd = platform.createBannerAd({
      //                 adUnitId: this.bannerId,
      //                 adIntervals: 30,
      //                 style: {
      //                     height: winSize.windowHeight - 80,
      //                     left: 0,
      //                     top: 500,
      //                     width: winSize.windowWidth
      //                 }
      //             });
      //             this.bannerAd.onResize((res: any) => {
      //                 this.bannerAd.style.top = winSize.windowHeight - this.bannerAd.style.realHeight;
      //                 this.bannerAd.style.left = winSize.windowWidth / 2 - this.bannerAd.style.realWidth / 2;
      //             });
      //             this.bannerAd.onError((err: any) => {
      //                 console.error('【流量主横幅】初始化有误')
      //             });
      //         }
      //     }
      //
      //     // 横幅展示
      //     toggleBannerAd(isShow: boolean) {
      //         const platform = this.getPlatform()
      //         if (!platform) {
      //             console.log(`【流量主横幅:${isShow}】仅支持小游戏平台!`)
      //             return
      //         }
      //         if (this.bannerAd) {
      //             isShow ? this.bannerAd.show() : this.bannerAd.hide();
      //         }
      //     }
      //
      //     // 初始化插屏
      //     initInterstitialAd() {
      //         const platform = this.getPlatform()
      //         if (!platform) {
      //             console.log('【流量主插屏初始化】仅支持小游戏平台!')
      //             return
      //         }
      //         if (this.interstitialId == '') {
      //             console.log('【流量主】请配置插屏广告ID')
      //             return
      //         }
      //         if (this.interstitialAd == null) {
      //             this.interstitialAd = platform.createInterstitialAd({
      //                 adUnitId: this.interstitialId
      //             });
      //             this.interstitialAd.onError((err: any) => {
      //                 console.error('【流量主插屏】初始化有误')
      //             });
      //         }
      //     }
      //
      //     // 插屏展示
      //     showInterstitialAd() {
      //         const platform = this.getPlatform()
      //         if (!platform) {
      //             console.log('【流量主插屏】仅支持小游戏平台!')
      //             return
      //         }
      //         if (this.interstitialAd) {
      //             this.interstitialAd.show().catch((err: any) => {
      //                 console.error('【流量主插屏】加载失败')
      //             });
      //         }
      //     }
      //
      //     // 初始化激励
      //     initVideoAd() {
      //         const platform = this.getPlatform()
      //         if (!platform) {
      //             console.log('【流量主激励初始化】仅支持小游戏平台!')
      //             return
      //         }
      //         if (this.videoId == '') {
      //             console.log('【流量主】请配置激励视频广告ID')
      //             return
      //         }
      //         if (this.videoAd == null) {
      //             this.videoAd = platform.createRewardedVideoAd({
      //                 adUnitId: this.videoId
      //             });
      //             this.videoAd.onError((err: any) => {
      //                 console.error('【流量主激励】初始化有误')
      //             });
      //         }
      //     }
      //
      //     // 激励展示
      //     showVideoAd(success: any, fail?: any) {
      //         const platform = this.getPlatform()
      //         if (!platform) {
      //             // console.log('激励模拟成功')
      //             return success && success('模拟成功，激励奖励已发放')
      //         }
      //         if (this.videoAd) {
      //             this.videoAd.offClose();
      //             this.videoAd.onClose((res: any) => {
      //                 this.videoAd.offClose();
      //                 if (res && res.isEnded || res === undefined) {
      //                     return success && success('激励奖励已发放')
      //                 } else {
      //                     return fail && fail('视频播放中断')
      //                 }
      //             });
      //             this.videoAd.show().catch(() => {
      //                 this.videoAd.load()
      //                     .then(() => this.videoAd.show())
      //                     .catch((err: any) => {
      //                         console.log('广告展示失败')
      //                     })
      //             });
      //         } else {
      //             // console.log('激励模拟成功')
      //             return fail && fail('该功能尚未开放')
      //         }
      //     }
      //
      //     // 初始化横向格子
      //     initCustomRowAd() {
      //         const platform = this.getPlatform()
      //         if (!platform) {
      //             console.log('【横向格子初始化】仅支持小游戏平台!')
      //             return
      //         }
      //         if (this.customRowId == '') {
      //             console.log('【流量主】请配置横向格子广告ID')
      //             return
      //         }
      //         let winSize = platform.getSystemInfoSync();
      //         if (this.customRowAd == null) {
      //             this.customRowAd = platform.createCustomAd({
      //                 adUnitId: this.customRowId,
      //                 adIntervals: 30,
      //                 style: {
      //                     width: 320,
      //                     left: (winSize.screenWidth - 320) / 2,
      //                     top: winSize.screenHeight - 100,
      //                     fixed: 0
      //                 }
      //             })
      //             this.customRowAd.onError((err: any) => {
      //                 console.error('【流量主横向格子】初始化有误')
      //             });
      //         }
      //     }
      //
      //     // 横向格子广告展示
      //     toggleCustomRowAd(isShow: boolean = true) {
      //         const platform = this.getPlatform()
      //         if (!platform) {
      //             console.log(`【流量主横向格子:${isShow}】仅支持小游戏平台!`)
      //             return
      //         }
      //         if (this.customRowAd) isShow ? this.customRowAd.show() : this.customRowAd.hide();
      //     }
      //
      //     // 初始化纵向格子
      //     initCustomColAd() {
      //         const platform = this.getPlatform()
      //         if (!platform) {
      //             console.log('【纵向格子初始化】仅支持小游戏平台!')
      //             return
      //         }
      //         if (this.customColId == '') {
      //             console.log('【流量主】请配置纵向格子广告ID')
      //             return
      //         }
      //         let winSize = platform.getSystemInfoSync();
      //         if (this.customColAd == null) {
      //             this.customColAd = platform.createCustomAd({
      //                 adUnitId: this.customColId,
      //                 adIntervals: 30,
      //                 style: {
      //                     width: 80,
      //                     left: winSize.screenWidth - 60,
      //                     top: 20,
      //                     fixed: 0
      //                 }
      //             })
      //             this.customColAd.onError((err: any) => {
      //                 console.error('【流量主纵向格子】初始化有误')
      //             });
      //         }
      //     }
      //
      //     // 横向格子广告展示
      //     toggleCustomColAd(isShow: boolean = true) {
      //         const platform = this.getPlatform()
      //         if (!platform) {
      //             console.log(`【流量主纵向格子:${isShow}】仅支持小游戏平台!`)
      //             return
      //         }
      //         if (this.customColAd) isShow ? this.customColAd.show() : this.customColAd.hide();
      //     }
      //
      //     // 获取排行榜
      //     getRank() {
      //         if (typeof window['wx'] === 'undefined') {
      //             console.log('【获取排名】仅支持微信平台!')
      //             return
      //         }
      //         window['wx'].postMessage({
      //             event: 'getRank'
      //         })
      //     }
      //
      //     /**
      //      * 设置排名
      //      * @param data 关卡数
      //      */
      //     setRank(data: number) {
      //         if (typeof window['wx'] === 'undefined') {
      //             console.log('【设置排名】仅支持微信平台!', data)
      //             return
      //         }
      //         window['wx'].postMessage({
      //             event: 'setRank',
      //             data: data
      //         })
      //     }
      //
      //     // 录制视频开始
      //     recordingVideoStart() {
      //         if (typeof window['tt'] === 'undefined') {
      //             console.log('【录屏功能】仅支持抖音平台!')
      //             return
      //         }
      //         this.videoRecorder = window['tt'].getGameRecorderManager();
      //         this.videoRecordState = 1;
      //         this.videoIsExist = 0;
      //         this.videoStartTime = Date.parse(new Date().toString())
      //         // 开始回调
      //         this.videoRecorder.onStart((res: any) => {
      //             //console.log('录屏开始');
      //             //console.log(res);
      //         });
      //         // 开始
      //         this.videoRecorder.start({
      //             duration: this.videoRecordTime, // 录制时长
      //         });
      //         // 录制结束回调
      //         this.videoRecorder.onStop((res: any) => {
      //             this.videoRecordState = 2;
      //             this.videoPath = res.videoPath;
      //             //console.log('录屏结束', this.videoPath)
      //         });
      //         // 录制错误回调
      //         this.videoRecorder.onError((res: any) => {
      //             //console.log("录屏error", res)
      //         });
      //     }
      //
      //     // 录制视频结束
      //     recordingVideoEnd() {
      //         if (typeof window['tt'] === 'undefined') {
      //             console.log('【录屏功能】仅支持抖音平台!')
      //             return
      //         }
      //         if (this.videoRecorder) {
      //             const endTime = Date.parse(new Date().toString())
      //             if ((endTime - this.videoStartTime) / 1000 <= 5) {
      //                 this.videoIsExist = 1;
      //             } else {
      //                 this.videoIsExist = 0;
      //             }
      //             this.videoRecorder.stop();
      //         }
      //     }
      //
      //     /**
      //     * 录制视频分享
      //     * 参数1 成功回调
      //     * 参数2 失败回调
      //     */
      //     recordingVideoShare(success: any, fail?: any) {
      //         if (typeof window['tt'] === 'undefined') {
      //             console.log('【录屏功能】仅支持抖音平台!')
      //             return
      //         }
      //         if (this.videoIsExist == 1) {
      //             console.log('录制时间过短')
      //             return;
      //         }
      //         this.videoRecordState = 3;
      //         window['tt'].shareAppMessage({
      //             channel: 'video',
      //             title: '',
      //             imageUrl: '',
      //             query: '',
      //             extra: {
      //                 videoPath: this.videoPath, // 可用录屏得到的视频地址
      //                 videoTopics: this.videoTopics,
      //                 createChallenge: true
      //             },
      //             success() {
      //                 success && success()
      //             },
      //             fail(err: any) {
      //                 fail && fail()
      //             }
      //         })
      //     }
      //
      //     // 录屏是否存在
      //     isVideoExist() {
      //         return this.videoIsExist
      //     }
      //
      //     // 获取登录code（后续服务器兑换openid）
      //     getLoginCode(callback?: (param: ICallBack) => void) {
      //         const obj: ICallBack = { status: false, data: null, msg: '服务器异常' }
      //         window['wx'].login({
      //             success(res: any) {
      //                 if (res.code) {
      //                     obj.status = true
      //                     obj.data = res.code
      //                     obj.msg = '成功获取code'
      //                     callback && callback(obj)
      //                 } else {
      //                     callback && callback(obj)
      //                 }
      //             },
      //             fail() {
      //                 callback && callback(obj)
      //             }
      //         })
      //     }
      //
      //     // 获取授权信息
      //     getLoginInfo(callback?: (param: ICallBack) => void) {
      //         if (typeof window['wx'] === 'undefined') {
      //             console.log('【授权登录】仅支持微信平台!')
      //             return
      //         }
      //         const obj: ICallBack = { status: false, data: null, msg: '服务器异常' }
      //         window['wx'].getSetting({
      //             success(res: any) {
      //                 if (res.authSetting["scope.userInfo"]) {
      //                     window['wx'].getUserInfo({
      //                         success(res: any) {
      //                             const info = res.userInfo
      //                             const user: IUser = { openid: uuid(), nickname: info.nickName, gender: info.gender, avatar: info.avatarUrl }
      //                             obj.status = true
      //                             obj.data = user
      //                             obj.msg = '已授权'
      //                             callback && callback(obj)
      //                         },
      //                         fail() {
      //                             callback && callback(obj)
      //                         }
      //                     })
      //                 } else {
      //                     const sys = window['wx'].getSystemInfoSync()
      //                     const width = sys.screenWidth
      //                     const height = sys.screenHeight
      //                     let button = window['wx'].createUserInfoButton({
      //                         type: 'text',
      //                         text: '',
      //                         style: {
      //                             left: 0,
      //                             top: 0,
      //                             width: width,
      //                             height: height,
      //                             backgroundColor: '#00000000',
      //                             color: '#ffffff',
      //                             fontSize: 20,
      //                             textAlign: 'center',
      //                             lineHeight: height,
      //                         }
      //                     })
      //                     const tapEvent = function (res: any) {
      //                         button.destroy()
      //                         if (res.userInfo) {
      //                             const info = res.userInfo
      //                             const user: IUser = { openid: uuid(), nickname: info.nickName, gender: info.gender, avatar: info.avatarUrl }
      //                             obj.status = true
      //                             obj.data = user
      //                             obj.msg = '接受授权'
      //                             callback && callback(obj)
      //                         } else {
      //                             obj.msg = '拒绝授权'
      //                             callback && callback(obj)
      //                         }
      //                     }
      //                     button.onTap(tapEvent)
      //                 }
      //             },
      //             fail() {
      //                 callback && callback(obj)
      //             }
      //         })
      //     }
      //
      //     // 不经过授权生成登录信息
      //     getLoginInfoLocal(callback?: (param: ICallBack) => void) {
      //         const obj: ICallBack = { status: true, data: null, msg: '模拟用户数据' }
      //         // 截取时间戳后4位作为用户名
      //         const time = new Date().getTime()
      //         let nickname = `${time}`
      //         nickname = 'NO.' + nickname.substring(nickname.length - 4)
      //         const user: IUser = { openid: uuid(), nickname: nickname, gender: 0, avatar: '' }
      //         obj.data = user
      //         callback && callback(obj)
      //     }
      // }
      SdkManager._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SettingLayer.ts", ['cc', './Enum.ts', './StaticInstance.ts', './AudioManager.ts', './Baselayer.ts', './DataManager.ts', './SdkManager.ts'], function (exports) {
  var cclegacy, find, _decorator, ENUM_AUDIO_CLIP, ENUM_UI_TYPE, StaticInstance, AudioManager, BaseLayer, DataManager, SdkManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      find = module.find;
      _decorator = module._decorator;
    }, function (module) {
      ENUM_AUDIO_CLIP = module.ENUM_AUDIO_CLIP;
      ENUM_UI_TYPE = module.ENUM_UI_TYPE;
    }, function (module) {
      StaticInstance = module.StaticInstance;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      BaseLayer = module.default;
    }, function (module) {
      DataManager = module.default;
    }, function (module) {
      SdkManager = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "1a0aacxZX5NJqNTuBy0vbq5", "SettingLayer", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let SettingLayer = exports('default', (_dec = ccclass('SettingLayer'), _dec(_class = class SettingLayer extends BaseLayer {
        constructor() {
          super(...arguments);
          this.panel = null;
          this.btnMusic = null;
          this.btnSound = null;
          this.btnClose = null;
        }
        onLoad() {
          this.panel = find('style/panel', this.node);
          this.btnMusic = find('buttons/btn_music', this.panel);
          this.btnSound = find('buttons/btn_sound', this.panel);
          this.btnClose = find('btn_close', this.panel);
          this.btnMusic.on('click', this.onMusicClick, this);
          this.btnSound.on('click', this.onSoundClick, this);
          this.btnClose.on('click', this.onCloseClick, this);
        }
        onDestroy() {
          this.btnMusic.off('click', this.onMusicClick, this);
          this.btnSound.off('click', this.onSoundClick, this);
          this.btnClose.off('click', this.onCloseClick, this);
        }
        onEnable() {
          this.zoomIn(this.panel);
          this.rendorMusic();
          this.rendorSound();
          SdkManager.instance.showInterstitialAd();
        }
        onDisable() {}
        onCloseClick() {
          AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK);
          StaticInstance.uiManager.toggle(ENUM_UI_TYPE.SETTING, false);
          StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MENU);
        }
        onSoundClick() {
          AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK);
          DataManager.instance.isSoundOn = !DataManager.instance.isSoundOn;
          DataManager.instance.save();
          this.rendorSound();
        }
        onMusicClick() {
          AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK);
          DataManager.instance.isMusicOn = !DataManager.instance.isMusicOn;
          DataManager.instance.save();
          if (DataManager.instance.isMusicOn) {
            AudioManager.instance.playMusic();
          } else {
            AudioManager.instance.stopMusic();
          }
          this.rendorMusic();
        }
        rendorMusic() {
          this.btnMusic.getChildByName('on').active = DataManager.instance.isMusicOn;
          this.btnMusic.getChildByName('off').active = !DataManager.instance.isMusicOn;
        }
        rendorSound() {
          this.btnSound.getChildByName('on').active = DataManager.instance.isSoundOn;
          this.btnSound.getChildByName('off').active = !DataManager.instance.isSoundOn;
        }
      }) || _class));
      /**
       * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
       */
      // // Created by carolsail
      // 
      // import { ENUM_AUDIO_CLIP, ENUM_GAME_STATUS, ENUM_UI_TYPE } from "../Enum";
      // import { StaticInstance } from './../StaticInstance';
      // import AudioManager from "../manager/AudioManager";
      // import BaseLayer from "./Baselayer";
      // import DataManager from "../manager/DataManager";
      // import SdkManager from "../manager/SdkManager";
      // 
      // const { ccclass, property } = cc._decorator;
      // 
      // @ccclass
      // export default class SettingLayer extends BaseLayer {
      // 
      //     panel: cc.Node = null
      //     btnMusic: cc.Node = null
      //     btnSound: cc.Node = null
      //     btnClose: cc.Node = null
      // 
      //     onLoad() {
      //         this.panel = cc.find('style/panel', this.node)
      //         this.btnMusic = cc.find('buttons/btn_music', this.panel)
      //         this.btnSound = cc.find('buttons/btn_sound', this.panel)
      //         this.btnClose = cc.find('btn_close', this.panel)
      //         this.btnMusic.on('click', this.onMusicClick, this)
      //         this.btnSound.on('click', this.onSoundClick, this)
      //         this.btnClose.on('click', this.onCloseClick, this)
      //     }
      // 
      //     onDestroy() {
      //         this.btnMusic.off('click', this.onMusicClick, this)
      //         this.btnSound.off('click', this.onSoundClick, this)
      //         this.btnClose.off('click', this.onCloseClick, this)
      //     }
      // 
      //     onEnable() {
      //         this.zoomIn(this.panel)
      //         this.rendorMusic()
      //         this.rendorSound()
      //         SdkManager.instance.showInterstitialAd()
      //     }
      // 
      //     onDisable() { }
      // 
      //     onCloseClick() {
      //         AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
      //         StaticInstance.uiManager.toggle(ENUM_UI_TYPE.SETTING, false)
      //         StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MENU)
      //     }
      // 
      //     onSoundClick() {
      //         AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
      //         DataManager.instance.isSoundOn = !DataManager.instance.isSoundOn
      //         DataManager.instance.save()
      //         this.rendorSound()
      //     }
      // 
      //     onMusicClick() {
      //         AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
      //         DataManager.instance.isMusicOn = !DataManager.instance.isMusicOn
      //         DataManager.instance.save()
      //         if (DataManager.instance.isMusicOn) {
      //             AudioManager.instance.playMusic()
      //         } else {
      //             AudioManager.instance.stopMusic()
      //         }
      //         this.rendorMusic()
      //     }
      // 
      //     rendorMusic() {
      //         this.btnMusic.getChildByName('on').active = DataManager.instance.isMusicOn
      //         this.btnMusic.getChildByName('off').active = !DataManager.instance.isMusicOn
      //     }
      // 
      //     rendorSound() {
      //         this.btnSound.getChildByName('on').active = DataManager.instance.isSoundOn
      //         this.btnSound.getChildByName('off').active = !DataManager.instance.isSoundOn
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StaticInstance.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "93f9fIyowFCpoTxHvXyssyM", "StaticInstance", undefined); // // Created by carolsail
      class StaticInstance {
        static setUIManager(context) {
          StaticInstance.uiManager = context;
        }
        static setGameManager(context) {
          StaticInstance.gameManager = context;
        }
        static setFadeManager(context) {
          StaticInstance.fadeManager = context;
        }
      }
      exports('StaticInstance', StaticInstance);

      /**
       * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
       */
      // // Created by carolsail
      // 
      // import GameManager from "./manager/GameManager";
      // import UIManager from "./manager/UIManager";
      // import FadeManager from "./manager/FadeManager";
      // 
      // export class StaticInstance {
      //     static uiManager: UIManager | undefined = undefined;
      //     static gameManager: GameManager | undefined = undefined;
      //     static fadeManager: FadeManager | undefined = undefined;
      // 
      //     static setUIManager(context: UIManager) {
      //         StaticInstance.uiManager = context;
      //     }
      // 
      //     static setGameManager(context: GameManager) {
      //         StaticInstance.gameManager = context
      //     }
      // 
      //     static setFadeManager(context: FadeManager) {
      //         StaticInstance.fadeManager = context
      //     }
      // }
      StaticInstance.uiManager = undefined;
      StaticInstance.gameManager = undefined;
      StaticInstance.fadeManager = undefined;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/telegram-web.ts", ['cc'], function (exports) {
  var cclegacy, sys, _decorator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "3cf7cs29khAz6sxeWXEOc+d", "telegram-web", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      const tgLoadPromise = new Promise((resolve, reject) => {
        if (sys.platform === sys.Platform.MOBILE_BROWSER || sys.platform === sys.Platform.DESKTOP_BROWSER) {
          const script = document.createElement("script");
          script.src = "https://telegram.org/js/telegram-web-app.js";
          script.async = true;
          script.onload = () => {
            const intervalId = setInterval(() => {
              if (window.Telegram && window.Telegram.WebApp) {
                resolve(window.Telegram.WebApp);
                clearInterval(intervalId);
              }
            }, 100);
          };
          script.onerror = () => reject(new Error("Unable to load TelegramWebApp SDK, please check logs."));
          document.head.appendChild(script);
        }
      });
      let TelegramWebApp = exports('TelegramWebApp', (_dec = ccclass('TelegramWebApp'), _dec(_class = (_class2 = class TelegramWebApp {
        constructor() {
          this._tgWebAppJS = null;
        }
        static get Instance() {
          if (!TelegramWebApp._instance) {
            TelegramWebApp._instance = new TelegramWebApp();
          }
          return TelegramWebApp._instance;
        }
        async init() {
          this._tgWebAppJS = await tgLoadPromise;
          if (this._tgWebAppJS) {
            return Promise.resolve({
              success: true
            });
          } else {
            return Promise.resolve({
              success: false
            });
          }
        }
        openTelegramLink(url) {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return;
          }
          this._tgWebAppJS.openTelegramLink(url);
        }
        share(url, text) {
          const shareUrl = 'https://t.me/share/url?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(text || '');
          this.openTelegramLink(shareUrl);
        }
        shareToStory(media_url, shareText, widget_link_url, widget_link_name) {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return;
          }
          const widget_link = {
            text: shareText,
            widget_link: {
              url: widget_link_url,
              name: widget_link_name
            }
          };
          this._tgWebAppJS.shareToStory(media_url, widget_link);
        }

        //This method can directly return the TelegramWebApp object, making it convenient to use other capabilities. 
        //For specific methods, please refer to the official documentation: 
        //https://core.telegram.org/bots/webapps#initializing-mini-apps
        getTelegramWebApp() {
          return this._tgWebAppJS;
        }
        getTelegramWebAppInitData() {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return null;
          }
          return this._tgWebAppJS.initDataUnsafe;
        }
        getTelegramUser() {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return null;
          }
          return this._tgWebAppJS.initDataUnsafe.user;
        }
        getTelegramInitData() {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return null;
          }
          return this._tgWebAppJS.initData;
        }
        openInvoice(url, callback) {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return null;
          }
          this._tgWebAppJS.openInvoice(url, callback);
        }
        alert(message) {
          this._tgWebAppJS.showAlert(message);
        }
      }, _class2._instance = void 0, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ToastManager.ts", ['cc'], function (exports) {
  var color, director, Canvas, UITransform, Node, UIOpacity, Label, Graphics, tween, Vec3, cclegacy;
  return {
    setters: [function (module) {
      color = module.color;
      director = module.director;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      Node = module.Node;
      UIOpacity = module.UIOpacity;
      Label = module.Label;
      Graphics = module.Graphics;
      tween = module.tween;
      Vec3 = module.Vec3;
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "65526wGEY1OtL0HXs6ylAE2", "ToastManager", undefined);
      class ToastManager {
        static getInstance() {
          if (this._instance === null) {
            this._instance = new this();
          }
          return this._instance;
        }
        static get instance() {
          return this.getInstance();
        }
        show(text, _temp) {
          if (text === void 0) {
            text = '';
          }
          let {
            gravity = 'CENTER',
            duration = 1,
            bg_color = color(102, 102, 102, 200)
          } = _temp === void 0 ? {} : _temp;
          // canvas
          let canvas = director.getScene().getComponentInChildren(Canvas);
          let uiTransform = canvas.node.getComponent(UITransform);
          let width = uiTransform.width;
          let height = uiTransform.height;

          // 节点
          let bgNode = new Node();
          let bgOpacity = bgNode.addComponent(UIOpacity);
          //bgNode.group = 'ui'
          bgNode.layer = 1 << 1; //'ui'

          // Lable文本格式设置
          let textNode = new Node();
          let textLabel = textNode.addComponent(Label);
          let textTransform = textNode.getComponent(UITransform);
          textLabel.horizontalAlign = Label.HorizontalAlign.CENTER;
          textLabel.verticalAlign = Label.VerticalAlign.CENTER;
          textLabel.fontSize = 30;
          textLabel.string = text;

          // 当文本宽度过长时，设置为自动换行格式
          if (text.length * textLabel.fontSize > width * 3 / 5) {
            textTransform.width = width * 3 / 5;
            textLabel.overflow = Label.Overflow.RESIZE_HEIGHT;
          } else {
            textTransform.width = text.length * textLabel.fontSize;
          }
          let lineCount = ~~(text.length * textLabel.fontSize / (width * 3 / 5)) + 1;
          textTransform.height = textLabel.fontSize * lineCount;

          // 背景设置
          let ctx = bgNode.addComponent(Graphics);
          ctx.arc(-textTransform.width / 2, 0, textTransform.height / 2 + 20, 0.5 * Math.PI, 1.5 * Math.PI, true);
          ctx.lineTo(textTransform.width / 2, -(textTransform.height / 2 + 20));
          ctx.arc(textTransform.width / 2, 0, textTransform.height / 2 + 20, 1.5 * Math.PI, 0.5 * Math.PI, true);
          ctx.lineTo(-textTransform.width / 2, textTransform.height / 2 + 20);
          ctx.fillColor = bg_color;
          ctx.fill();
          bgNode.addChild(textNode);

          // gravity 设置Toast显示的位置
          if (gravity === "CENTER") {
            //bgNode.y = 0;
            //bgNode.x = 0;
            bgNode.setPosition(0, 0);
          } else if (gravity === "TOP") {
            //bgNode.y = bgNode.y + (height / 5) * 2;
            bgNode.setPosition(0, bgNode.position.y + height / 5 * 2);
          } else if (gravity === "BOTTOM") {
            //bgNode.y = bgNode.y - (height / 5) * 2;
            bgNode.setPosition(0, bgNode.position.y - height / 5 * 2);
          }
          canvas.node.addChild(bgNode);

          //tween

          // 执行动画
          // let finished = tween.call(function () {
          // 	bgNode.destroy();
          // });
          // let action = cc.sequence(
          // 	cc.moveBy(duration, v2(0, 0)),
          // 	cc.fadeOut(0.3),
          // 	finished
          // );
          // bgNode.runAction(action); 
          //tween(bgNode).then(action).start()

          tween(bgNode).target(bgNode).by(duration, {
            position: new Vec3(0, 0, 0)
          }).target(bgOpacity).by(duration, {
            opacity: 0.3
          }).call(function () {
            bgNode.destroy();
          });
        }
      }
      exports('default', ToastManager);

      /**
       * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
       */
      // // Created by carolsail
      // 
      // export default class ToastManager {
      // 
      //     private static _instance: any = null
      // 
      //     static getInstance<T>(): T {
      //         if (this._instance === null) {
      //             this._instance = new this()
      //         }
      // 
      //         return this._instance
      //     }
      // 
      //     static get instance() {
      //         return this.getInstance<ToastManager>()
      //     }
      // 
      //     show(text: string = '', {gravity = 'CENTER', duration = 1, bg_color = cc.color(102, 102, 102, 200)} = {}){
      //         // canvas
      //         let canvas = cc.director.getScene().getComponentInChildren(cc.Canvas);
      //         let width = canvas.node.width;
      //         let height = canvas.node.height;
      // 
      //         // 节点
      //         let bgNode = new cc.Node();
      //         bgNode.group = 'ui'
      // 
      //         // Lable文本格式设置
      //         let textNode = new cc.Node();
      //         let textLabel = textNode.addComponent(cc.Label);
      //         textLabel.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
      //         textLabel.verticalAlign = cc.Label.VerticalAlign.CENTER;
      //         textLabel.fontSize = 30;
      //         textLabel.string = text;
      // 
      //         // 当文本宽度过长时，设置为自动换行格式
      //         if (text.length * textLabel.fontSize > (width * 3) / 5) {
      //             textNode.width = (width * 3) / 5;
      //             textLabel.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
      //         } else {
      //             textNode.width = text.length * textLabel.fontSize;
      //         }
      //         let lineCount =
      //             ~~((text.length * textLabel.fontSize) / ((width * 3) / 5)) + 1;
      //         textNode.height = textLabel.fontSize * lineCount;
      // 
      //         // 背景设置
      //         let ctx = bgNode.addComponent(cc.Graphics);
      //         ctx.arc(
      //             -textNode.width / 2,
      //             0,
      //             textNode.height / 2 + 20,
      //             0.5 * Math.PI,
      //             1.5 * Math.PI,
      //             true
      //         );
      //         ctx.lineTo(textNode.width / 2, -(textNode.height / 2 + 20));
      //         ctx.arc(
      //             textNode.width / 2,
      //             0,
      //             textNode.height / 2 + 20,
      //             1.5 * Math.PI,
      //             0.5 * Math.PI,
      //             true
      //         );
      //         ctx.lineTo(-textNode.width / 2, textNode.height / 2 + 20);
      //         ctx.fillColor = bg_color;
      //         ctx.fill();
      // 
      //         bgNode.addChild(textNode);
      // 
      //         // gravity 设置Toast显示的位置
      //         if (gravity === "CENTER") {
      //             bgNode.y = 0;
      //             bgNode.x = 0;
      //         } else if (gravity === "TOP") {
      //             bgNode.y = bgNode.y + (height / 5) * 2;
      //         } else if (gravity === "BOTTOM") {
      //             bgNode.y = bgNode.y - (height / 5) * 2;
      //         }
      // 
      //         canvas.node.addChild(bgNode);
      //         // 执行动画
      //         let finished = cc.callFunc(function() {
      //             bgNode.destroy();
      //         });
      //         let action = cc.sequence(
      //             cc.moveBy(duration, cc.v2(0, 0)),
      //             cc.fadeOut(0.3),
      //             finished
      //         );
      //         // bgNode.runAction(action); 
      //         cc.tween(bgNode).then(action).start()
      //     }
      // }
      ToastManager._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIManager.ts", ['cc', './Enum.ts', './StaticInstance.ts', './PoolManager.ts'], function (exports) {
  var cclegacy, Component, _decorator, ENUM_UI_TYPE, StaticInstance, PoolManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      _decorator = module._decorator;
    }, function (module) {
      ENUM_UI_TYPE = module.ENUM_UI_TYPE;
    }, function (module) {
      StaticInstance = module.StaticInstance;
    }, function (module) {
      PoolManager = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "d8b44067ShG7IzfSj2CqGMD", "UIManager", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let UIManager = exports('default', (_dec = ccclass('UIManager'), _dec(_class = class UIManager extends Component {
        constructor() {
          super(...arguments);
          this.uiMap = new Map();
        }
        onLoad() {
          StaticInstance.setUIManager(this);
        }
        init() {
          for (let type in ENUM_UI_TYPE) {
            const node = PoolManager.instance.getNode(ENUM_UI_TYPE[type], this.node);
            if (node && !this.uiMap.has(ENUM_UI_TYPE[type])) {
              node.active = false;
              node.addComponent(ENUM_UI_TYPE[type]);
              this.uiMap.set(ENUM_UI_TYPE[type], node.getComponent(ENUM_UI_TYPE[type]));
            }
          }
        }
        toggle(key, status, callback) {
          if (status === void 0) {
            status = true;
          }
          if (this.uiMap.has(key)) {
            const layer = this.uiMap.get(key);
            status ? layer.show() : layer.hide();
            callback && callback();
          }
        }
        isActive(key) {
          if (this.uiMap.has(key)) {
            return this.uiMap.get(key).node.active;
          }
          return false;
        }
        getActiveTypes() {
          const types = [];
          this.uiMap.forEach((layer, type) => {
            if (this.isActive(type)) types.push(type);
          });
          return types;
        }

        // setSettingStyle(index: number = 0){
        //     const layer: SettingLayer = this.uiMap.get(ENUM_UI_TYPE.SETTING) as SettingLayer
        //     layer?.setStyle(index)
        // }
      }) || _class));
      /**
       * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
       */
      // // Created by carolsail
      // 
      // import { ENUM_UI_TYPE } from './../Enum';
      // import { StaticInstance } from './../StaticInstance';
      // import BaseLayer from '../layer/Baselayer';
      // import PoolManager from './PoolManager';
      // 
      // const {ccclass, property} = cc._decorator;
      // 
      // @ccclass
      // export default class UIManager extends cc.Component {
      // 
      //     private uiMap = new Map<ENUM_UI_TYPE, BaseLayer>()
      // 
      //     protected onLoad(): void {
      //         StaticInstance.setUIManager(this)
      //     }
      // 
      //     init(){
      //         for(let type in ENUM_UI_TYPE){
      //             const node: cc.Node = PoolManager.instance.getNode(ENUM_UI_TYPE[type], this.node)
      //             if(node && !this.uiMap.has(ENUM_UI_TYPE[type])) {
      //                 node.active = false
      //                 node.addComponent(ENUM_UI_TYPE[type])
      //                 this.uiMap.set(ENUM_UI_TYPE[type], node.getComponent(ENUM_UI_TYPE[type]))
      //             }
      //         }
      //     }
      // 
      //     toggle(key: ENUM_UI_TYPE, status: boolean = true, callback?: () => void) {
      //         if(this.uiMap.has(key)){
      //            const layer = this.uiMap.get(key)
      //            status ? layer.show() : layer.hide()
      //            callback && callback()
      //         }
      //     }
      // 
      //     isActive(key: ENUM_UI_TYPE){
      //         if(this.uiMap.has(key)){
      //             return this.uiMap.get(key).node.active
      //         }
      //         return false
      //     }
      // 
      //     getActiveTypes(){
      //         const types: ENUM_UI_TYPE[] = []
      //         this.uiMap.forEach((layer: BaseLayer, type: ENUM_UI_TYPE)=>{
      //             if(this.isActive(type)) types.push(type)
      //         })
      //         return types
      //     }
      // 
      //     // setSettingStyle(index: number = 0){
      //     //     const layer: SettingLayer = this.uiMap.get(ENUM_UI_TYPE.SETTING) as SettingLayer
      //     //     layer?.setStyle(index)
      //     // }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIScrollControl.ts", ['cc'], function (exports) {
  var cclegacy, Component, _decorator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "e6235MOwRpI+bzS2hVblkfN", "UIScrollControl", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let ENUM_SCROLL_DIR = exports('ENUM_SCROLL_DIR', /*#__PURE__*/function (ENUM_SCROLL_DIR) {
        ENUM_SCROLL_DIR[ENUM_SCROLL_DIR["V"] = 0] = "V";
        ENUM_SCROLL_DIR[ENUM_SCROLL_DIR["H"] = 1] = "H";
        return ENUM_SCROLL_DIR;
      }({}));
      let UIScrollControl = exports('default', (_dec = ccclass('UIScrollControl'), _dec(_class = class UIScrollControl extends Component {
        constructor() {
          super(...arguments);
          this.scrollView = null;
          this.contentSize = null;
          this.scrollDirection = ENUM_SCROLL_DIR.V;
          this.totalCount = 0;
          this.itemCount = 0;
          this.childrenList = [];
          this.itemDistance = 0;
          this.contentSizeStart = null;
          this.isStartFlag = false;
          this.theMaxID = 0;
          this.refreshCB = null;
        }
        init(_tempNode, _totalCount, _size, _dir, callBack, scrollTo) {
          // if (callBack) this.refreshCB = callBack

          // if (this.isStartFlag == false) {
          // this.scrollView = this.node.getComponent(cc.ScrollView);
          // if (this.scrollView == null || this.scrollView.content == null) return

          // this.scrollView.content.parent.setAnchorPoint(cc.v2(0.5, 0.5))
          // let _maskWidget: cc.Widget = this.scrollView.content.parent.getComponent(cc.Widget)

          // if (_maskWidget == null) _maskWidget = this.scrollView.content.parent.addComponent(cc.Widget)

          // _maskWidget.isAlignLeft = true
          // _maskWidget.left = 0

          // _maskWidget.isAlignRight = true
          // _maskWidget.right = 0

          // _maskWidget.isAlignTop = true
          // _maskWidget.top = 0

          // _maskWidget.isAlignBottom = true
          // _maskWidget.bottom = 0

          // this.contentSize = new cc.Size(this.scrollView.node.getContentSize())
          // this.scrollView.content.setContentSize(this.contentSize)
          // this.contentSizeStart = this.scrollView.content.getContentSize();
          // }

          // if (_tempNode == null) return

          // this.scrollView.content.setContentSize(this.contentSizeStart)

          // this.clear()

          // this.totalCount = _totalCount
          // this.scrollDirection = _dir as ENUM_SCROLL_DIR

          // if (_dir == ENUM_SCROLL_DIR.V) {
          // this.scrollView.content.setAnchorPoint(cc.v2(0.5, 1))

          // this.scrollView.content.setContentSize(cc.size(this.contentSizeStart.width, this.totalCount * _size.height))

          // this.scrollView.content.setPosition(cc.v2(0, -this.totalCount * _size.height / 2))

          // let _tempCount: number = Math.floor(this.contentSizeStart.height / _size.height)

          // this.itemCount = _tempCount + 2

          // if (this.totalCount <= this.itemCount) this.itemCount = this.totalCount

          // this.itemDistance = _size.height
          // }
          // else if (_dir == ENUM_SCROLL_DIR.H) {
          // this.scrollView.content.setAnchorPoint(cc.v2(0, 0.5))
          // this.scrollView.content.setContentSize(cc.size(this.totalCount * _size.width, this.contentSizeStart.height))

          // this.scrollView.content.setPosition(cc.v2(this.totalCount * _size.width / 2, 0))
          // let _tempCount: number = Math.floor(this.contentSizeStart.width / _size.width)

          // this.itemCount = _tempCount + 2

          // if (this.totalCount <= this.itemCount) {
          // this.itemCount = this.totalCount
          // }

          // this.itemDistance = _size.width
          // }

          // if (this.scrollView.scrollEvents.length <= 0) {
          // let eventHandler = new cc.Component.EventHandler();
          // eventHandler.target = this.node;
          // eventHandler.component = "UIScrollControl";
          // eventHandler.handler = "OnScroll";
          // this.scrollView.scrollEvents.push(eventHandler);
          // }

          // this.isStartFlag == true
          // this.theMaxID = 0

          // this.initShowAreaItems(_tempNode, scrollTo)
        }
        clear() {
          // this.scrollView.content.removeAllChildren()
          // this.childrenList = []
        }
        //    /** Ініціалізація видимих елементів */
        initShowAreaItems(_temp_node, scrollTo) {
          // for (let i = 0; i < this.itemCount; i++) {
          //            //cc.log(" i = " + i)
          // let curPos: cc.Vec2 = cc.v2(0, 0)
          // let node: cc.Node = cc.instantiate(_temp_node)
          // this.scrollView.content.addChild(node)
          // node.active = true
          // node.opacity = 255

          // if (this.scrollDirection == ENUM_SCROLL_DIR.V) {
          // curPos.y = -this.itemDistance / 2 - this.itemDistance * i
          // }
          // else if (this.scrollDirection == ENUM_SCROLL_DIR.H) {
          // curPos.x = this.itemDistance / 2 + this.itemDistance * i
          // }

          // node.name = `cell_${i}`
          // node.setAnchorPoint(cc.v2(0.5, 0.5))
          // node.setPosition(curPos)

          // this.onRefresh(node, i, i)

          // this.childrenList.push(node)
          // }
          //        // this.scrollView.scrollToTop()
          // scrollTo && scrollTo(this.scrollView)
        }
        //    /** Подія прокрутки */
        OnScroll() {
          //           // Отримання поточного зсуву прокрутки відносно лівого верхнього кута
          // let scrollOffset: cc.Vec2 = this.scrollView.getScrollOffset();
          // let offset: number = 0;

          // if (this.scrollDirection == ENUM_SCROLL_DIR.V) {
          // offset = scrollOffset.y
          // }
          // else if (this.scrollDirection == ENUM_SCROLL_DIR.H) {
          //            // Горизонтальний offset є від’ємним, чому було зроблено таке дивне рішення, 
          //            // перетворюємо його на додатне значення для уніфікації з вертикальним напрямком
          // offset = -scrollOffset.x
          // }
          // this.refreshLayout(offset)
        }
        //    /** Примусове оновлення компонування */
        refreshLayout(_curOffset) {
          // let offset: number = _curOffset

          //        // Максимальна висота, якщо перевищено, оновлення не відбувається
          // let _max_rect_size: number = this.totalCount * this.itemDistance

          // if (offset < 0 || offset + this.contentSize.height >= _max_rect_size) return

          // let _index: number = 0 // Починаємо з 0
          // let _min_index: number = Math.floor(offset / this.itemDistance);

          //         // Від miniIdx до theMaxID всі елементи будуть оновлені
          // for (let i = 0; i < this.itemCount; i++) {
          // let node: cc.Node = this.childrenList[i];
          // _index = _min_index + i;
          // this.refreshItem(_index, i, node);
          // }
          // this.theMaxID = _min_index + this.itemCount
        }
        //    /**
        //     * 
        //     * @param _index UI Індекс елемента, який потрібно оновити
        //     * @param _node_index 
        //     * @param node 
        //     */
        refreshItem(_index, _node_index, node) {
          // if (_index < 0 || _index >= this.totalCount) {
          //            // cc.log("Індекс за межами діапазону, _index = " + _index + ", this.total_count = " + this.total_count)
          // return;
          // }

          // if (node == null) {
          //            // cc.log("node == null");
          // return;
          // }

          // let curPosition: cc.Vec2 = cc.Vec2.ZERO

          // if (this.scrollDirection == ENUM_SCROLL_DIR.H) {
          // curPosition.x = this.itemDistance / 2 + this.itemDistance * _index;
          // }
          // else if (this.scrollDirection == ENUM_SCROLL_DIR.V) {
          // curPosition.y = - this.itemDistance / 2 - this.itemDistance * _index;
          // }

          // node.setPosition(curPosition)
          // this.onRefresh(node, _index, _node_index);
        }
        //    /**
        //     * 
        //     * @param node 
        //     * @param _index 
        //     * @param nodeIndex 
        //     */
        onRefresh(node, _index, nodeIndex) {
          //        //cc.log("--------------- _index = " + _index)
          // if (this.refreshCB != null) {
          // this.refreshCB(node, _index, nodeIndex)
          // }
        }
      }) || _class));
      /**
       * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
       */
      // const { ccclass, property } = cc._decorator;
      // 
      // export enum ENUM_SCROLL_DIR { V, H }
      // 
      // @ccclass
      // export default class UIScrollControl extends cc.Component {
      //     private scrollView: cc.ScrollView = null
      //     private contentSize: cc.Size = null
      //     private scrollDirection: ENUM_SCROLL_DIR = ENUM_SCROLL_DIR.V
      //     private totalCount: number = 0
      //     private itemCount: number = 0
      //     private childrenList: cc.Node[] = []
      //     private itemDistance: number = 0
      //     private contentSizeStart: cc.Size = null
      //     private isStartFlag: boolean = false
      //     private theMaxID: number = 0
      //     private refreshCB: Function = null
      // 
      // 
      //     init(_tempNode: cc.Node, _totalCount: number, _size: cc.Size, _dir: ENUM_SCROLL_DIR, callBack: Function, scrollTo?: Function): void {
      //         if (callBack) this.refreshCB = callBack
      // 
      //         if (this.isStartFlag == false) {
      //             this.scrollView = this.node.getComponent(cc.ScrollView);
      //             if (this.scrollView == null || this.scrollView.content == null) return
      // 
      //             this.scrollView.content.parent.setAnchorPoint(cc.v2(0.5, 0.5))
      //             let _maskWidget: cc.Widget = this.scrollView.content.parent.getComponent(cc.Widget)
      // 
      //             if (_maskWidget == null) _maskWidget = this.scrollView.content.parent.addComponent(cc.Widget)
      // 
      //             _maskWidget.isAlignLeft = true
      //             _maskWidget.left = 0
      // 
      //             _maskWidget.isAlignRight = true
      //             _maskWidget.right = 0
      // 
      //             _maskWidget.isAlignTop = true
      //             _maskWidget.top = 0
      // 
      //             _maskWidget.isAlignBottom = true
      //             _maskWidget.bottom = 0
      // 
      //             this.contentSize = new cc.Size(this.scrollView.node.getContentSize())
      //             this.scrollView.content.setContentSize(this.contentSize)
      //             this.contentSizeStart = this.scrollView.content.getContentSize();
      //         }
      // 
      //         if (_tempNode == null) return
      // 
      //         this.scrollView.content.setContentSize(this.contentSizeStart)
      // 
      //         this.clear()
      // 
      //         this.totalCount = _totalCount
      //         this.scrollDirection = _dir as ENUM_SCROLL_DIR
      // 
      //         if (_dir == ENUM_SCROLL_DIR.V) {
      //             this.scrollView.content.setAnchorPoint(cc.v2(0.5, 1))
      // 
      //             this.scrollView.content.setContentSize(cc.size(this.contentSizeStart.width, this.totalCount * _size.height))
      // 
      //             this.scrollView.content.setPosition(cc.v2(0, -this.totalCount * _size.height / 2))
      // 
      //             let _tempCount: number = Math.floor(this.contentSizeStart.height / _size.height)
      // 
      //             this.itemCount = _tempCount + 2
      // 
      //             if (this.totalCount <= this.itemCount) this.itemCount = this.totalCount
      // 
      //             this.itemDistance = _size.height
      //         }
      //         else if (_dir == ENUM_SCROLL_DIR.H) {
      //             this.scrollView.content.setAnchorPoint(cc.v2(0, 0.5))
      //             this.scrollView.content.setContentSize(cc.size(this.totalCount * _size.width, this.contentSizeStart.height))
      // 
      //             this.scrollView.content.setPosition(cc.v2(this.totalCount * _size.width / 2, 0))
      //             let _tempCount: number = Math.floor(this.contentSizeStart.width / _size.width)
      // 
      //             this.itemCount = _tempCount + 2
      // 
      //             if (this.totalCount <= this.itemCount) {
      //                 this.itemCount = this.totalCount
      //             }
      // 
      //             this.itemDistance = _size.width
      //         }
      // 
      //         if (this.scrollView.scrollEvents.length <= 0) {
      //             let eventHandler = new cc.Component.EventHandler();
      //             eventHandler.target = this.node;
      //             eventHandler.component = "UIScrollControl";
      //             eventHandler.handler = "OnScroll";
      //             this.scrollView.scrollEvents.push(eventHandler);
      //         }
      // 
      //         this.isStartFlag == true
      //         this.theMaxID = 0
      // 
      //         this.initShowAreaItems(_tempNode, scrollTo)
      //     }
      // 
      //     private clear() {
      //         this.scrollView.content.removeAllChildren()
      //         this.childrenList = []
      //     }
      // 
      //     /** Ініціалізація видимих елементів */
      //     private initShowAreaItems(_temp_node: cc.Node, scrollTo: Function) {
      //         for (let i = 0; i < this.itemCount; i++) {
      //             //cc.log(" i = " + i)
      //             let curPos: cc.Vec2 = cc.v2(0, 0)
      //             let node: cc.Node = cc.instantiate(_temp_node)
      //             this.scrollView.content.addChild(node)
      //             node.active = true
      //             node.opacity = 255
      // 
      //             if (this.scrollDirection == ENUM_SCROLL_DIR.V) {
      //                 curPos.y = -this.itemDistance / 2 - this.itemDistance * i
      //             }
      //             else if (this.scrollDirection == ENUM_SCROLL_DIR.H) {
      //                 curPos.x = this.itemDistance / 2 + this.itemDistance * i
      //             }
      // 
      //             node.name = `cell_${i}`
      //             node.setAnchorPoint(cc.v2(0.5, 0.5))
      //             node.setPosition(curPos)
      // 
      //             this.onRefresh(node, i, i)
      // 
      //             this.childrenList.push(node)
      //         }
      //         // this.scrollView.scrollToTop()
      //         scrollTo && scrollTo(this.scrollView)
      //     }
      // 
      //     /** Подія прокрутки */
      //     private OnScroll() {
      //            // Отримання поточного зсуву прокрутки відносно лівого верхнього кута
      //         let scrollOffset: cc.Vec2 = this.scrollView.getScrollOffset();
      //         let offset: number = 0;
      // 
      //         if (this.scrollDirection == ENUM_SCROLL_DIR.V) {
      //             offset = scrollOffset.y
      //         }
      //         else if (this.scrollDirection == ENUM_SCROLL_DIR.H) {
      //             // Горизонтальний offset є від’ємним, чому було зроблено таке дивне рішення, 
      //             // перетворюємо його на додатне значення для уніфікації з вертикальним напрямком
      //             offset = -scrollOffset.x
      //         }
      //         this.refreshLayout(offset)
      //     }
      // 
      //     /** Примусове оновлення компонування */
      //     private refreshLayout(_curOffset: number) {
      //         let offset: number = _curOffset
      // 
      //         // Максимальна висота, якщо перевищено, оновлення не відбувається
      //         let _max_rect_size: number = this.totalCount * this.itemDistance
      // 
      //         if (offset < 0 || offset + this.contentSize.height >= _max_rect_size) return
      // 
      //         let _index: number = 0 // Починаємо з 0
      //         let _min_index: number = Math.floor(offset / this.itemDistance);
      // 
      //          // Від miniIdx до theMaxID всі елементи будуть оновлені
      //         for (let i = 0; i < this.itemCount; i++) {
      //             let node: cc.Node = this.childrenList[i];
      //             _index = _min_index + i;
      //             this.refreshItem(_index, i, node);
      //         }
      //         this.theMaxID = _min_index + this.itemCount
      //     }
      // 
      //     /**
      //      * 
      //      * @param _index UI Індекс елемента, який потрібно оновити
      //      * @param _node_index 
      //      * @param node 
      //      */
      //     refreshItem(_index: number, _node_index: number, node: cc.Node) {
      //         if (_index < 0 || _index >= this.totalCount) {
      //             // cc.log("Індекс за межами діапазону, _index = " + _index + ", this.total_count = " + this.total_count)
      //             return;
      //         }
      // 
      //         if (node == null) {
      //             // cc.log("node == null");
      //             return;
      //         }
      // 
      //         let curPosition: cc.Vec2 = cc.Vec2.ZERO
      // 
      //         if (this.scrollDirection == ENUM_SCROLL_DIR.H) {
      //             curPosition.x = this.itemDistance / 2 + this.itemDistance * _index;
      //         }
      //         else if (this.scrollDirection == ENUM_SCROLL_DIR.V) {
      //             curPosition.y = - this.itemDistance / 2 - this.itemDistance * _index;
      //         }
      // 
      //         node.setPosition(curPosition)
      //         this.onRefresh(node, _index, _node_index);
      //     }
      // 
      //     /**
      //      * 
      //      * @param node 
      //      * @param _index 
      //      * @param nodeIndex 
      //      */
      //     private onRefresh(node: cc.Node, _index: number, nodeIndex: number) {
      //         //cc.log("--------------- _index = " + _index)
      //         if (this.refreshCB != null) {
      //             this.refreshCB(node, _index, nodeIndex)
      //         }
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Utils.ts", ['cc'], function (exports) {
  var cclegacy, v2, UITransform, Vec3, loader, sys;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      v2 = module.v2;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      loader = module.loader;
      sys = module.sys;
    }],
    execute: function () {
      exports({
        OpenURLByCurTab: OpenURLByCurTab,
        OpenURLByNewTab: OpenURLByNewTab,
        formatSeconds: formatSeconds,
        getAngle: getAngle,
        getDistance: getDistance,
        getLocationUrlParam: getLocationUrlParam,
        getTimeStamp: getTimeStamp,
        getTimeStampSecond: getTimeStampSecond,
        getUrlParam1: getUrlParam1,
        getUrlParam2: getUrlParam2,
        getUrlParam3: getUrlParam3,
        random: random,
        rollBoolArray: rollBoolArray,
        shuffle: shuffle,
        sort: sort,
        sortSpriteNameByNum: sortSpriteNameByNum,
        toXY: toXY,
        uuid: uuid,
        wxAvatar: wxAvatar
      });
      cclegacy._RF.push({}, "1ccc3Pa3fdGUJUnDiya6JDg", "Utils", undefined);

      // Випадкове ціле число
      function random(lower, upper) {
        return Math.floor(Math.random() * (upper - lower + 1)) + lower;
      }

      // Перемішування масиву
      function shuffle(arr) {
        let length = arr.length,
          randomIndex,
          temp;
        while (length) {
          randomIndex = Math.floor(Math.random() * length--);
          temp = arr[randomIndex];
          arr[randomIndex] = arr[length];
          arr[length] = temp;
        }
        return arr;
      }

      // Сортування об'єктів у масиві
      function sort(arr, key, flag) {
        if (flag === void 0) {
          flag = true;
        }
        if (arr instanceof Array) {
          return arr.sort((a, b) => {
            if (a[key] > b[key]) {
              return flag ? 1 : -1;
            } else if (a[key] < b[key]) {
              return flag ? -1 : 1;
            } else {
              return 0;
            }
          });
        }
      }

      // Сортування рядків, що містять числа, на основі числових значень
      function sortSpriteNameByNum(frames) {
        const getNumberInSpriteName = name => {
          const reg = /\d+/g;
          return parseInt(name.match(reg)[0] || '0');
        };
        return frames.sort((a, b) => getNumberInSpriteName(a.name) - getNumberInSpriteName(b.name));
      }

      // Перетворення секунд
      function formatSeconds(seconds, dateFormat) {
        if (dateFormat === void 0) {
          dateFormat = 'h:i:s';
        }
        seconds = Number(seconds);
        let obj = {};
        obj.h = Number.parseInt(String(seconds / 3600));
        obj.i = Number.parseInt(String((seconds - obj.h * 3600) / 60));
        obj.s = Number.parseInt(String(seconds - obj.h * 3600 - obj.i * 60));
        if (obj.h < 10) obj.h = '0' + obj.h;
        if (obj.i < 10) obj.i = '0' + obj.i;
        if (obj.s < 10) obj.s = '0' + obj.s;
        // Парсинг
        var rs = dateFormat.replace('h', obj.h).replace('i', obj.i).replace('s', obj.s);
        return rs;
      }

      // Відстань між двома точками
      function getDistance(start, end) {
        const pos = v2(start.x - end.x, start.y - end.y);
        const dis = Math.sqrt(pos.x * pos.x + pos.y * pos.y);
        return dis;
      }

      // Кут між двома точками
      function getAngle(start, end) {
        // Обчислення напряму
        const dx = end.x - start.x;
        const dy = end.y - start.y;
        const dir = v2(dx, dy);
        // Обчислення кута в радіанах
        const angle = dir.signAngle(v2(1, 0));
        // Конвертація радіанів у градуси
        const degree = angle / Math.PI * 180;
        return -degree;
      }

      // Перетворення координат вузла 1 у вузол 2
      function toXY(node1, node2) {
        const wpos = node1.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0, 0)); // Отримуємо світові координати вузла 1
        const pos = node2.getComponent(UITransform).convertToNodeSpaceAR(wpos);
        return pos;
      }

      // Генерація посилання на аватар WeChat
      function wxAvatar(avatarUrl, isCached) {
        if (isCached === void 0) {
          isCached = true;
        }
        if (isCached) {
          avatarUrl += `?sail.jpg`;
        } else {
          const time = new Date().getTime();
          avatarUrl += `?sail=${time}.jpg`;
        }
        return new Promise((resolve, reject) => {
          loader.load(avatarUrl, function (err, texture) {
            if (err) reject && reject();
            resolve && resolve(texture);
          });
        });
      }

      // Генерація UUID
      function uuid() {
        let d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          let r = (d + Math.random() * 16) % 16 | 0;
          d = Math.floor(d / 16);
          return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
        });
        return uuid;
      }
      function rollBoolArray(arr, rollCnt1, rollCnt2) {
        let len = arr.length;
        for (let i = 0; i < rollCnt1 && i < len; ++i) {
          let r = Math.floor(Math.random() * len);
          let a = arr[i];
          arr[i] = arr[r];
          arr[r] = a;
        }
        for (let i = 0; i < rollCnt2; ++i) {
          let r1 = Math.floor(Math.random() * len);
          let r2 = Math.floor(Math.random() * len);
          let a = arr[r1];
          arr[r1] = arr[r2];
          arr[r2] = a;
        }
      }
      function OpenURLByNewTab(url) {
        sys.openURL(url);
      }
      function OpenURLByCurTab(url) {
        window.location.href = url;
      }
      function getTimeStamp() {
        // var timestamp = Date.parse(new Date().toString());
        let timestamp = Date.now();
        return timestamp;
      }
      function getTimeStampSecond() {
        return Math.floor(this.getTimeStamp() / 1000);
      }
      function getLocationUrlParam(urlKey) {
        const paramsStr = window.location.search;
        const params = new URLSearchParams(paramsStr);
        return params.get(urlKey);
      }
      function getUrlParam1(urlStr, urlKey) {
        const url = new URL(urlStr);
        const paramsStr = url.search.slice(1);
        const params = new URLSearchParams(paramsStr);
        return params.get(urlKey); // list
      }

      function getUrlParam2(urlStr, urlKey) {
        const url = new URL(urlStr); // 字符串转换成url格式
        const paramsStr = url.search.slice(1); // 获取'?'后面的参数字符串
        const paramsArr = paramsStr.split('&'); // 分割'&'字符 获得参数数组
        for (let i = 0; i < paramsArr.length; i++) {
          const tempArr = paramsArr[i].split('=');
          if (tempArr[0] === urlKey) {
            return tempArr[1];
          }
        }
        return '';
      }
      function getUrlParam3(urlStr, urlKey) {
        const url = new URL(urlStr);
        var reg = new RegExp('[\?\&]' + urlKey + '=([^\&]*)(\&?)', 'i');
        var r = url.search.match(reg);
        return r ? r[1] : '';
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WinLayer.ts", ['cc', './Enum.ts', './StaticInstance.ts', './AudioManager.ts', './Baselayer.ts', './SdkManager.ts', './ToastManager.ts'], function (exports) {
  var cclegacy, find, color, _decorator, ENUM_AUDIO_CLIP, ENUM_UI_TYPE, StaticInstance, AudioManager, BaseLayer, SdkManager, ToastManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      find = module.find;
      color = module.color;
      _decorator = module._decorator;
    }, function (module) {
      ENUM_AUDIO_CLIP = module.ENUM_AUDIO_CLIP;
      ENUM_UI_TYPE = module.ENUM_UI_TYPE;
    }, function (module) {
      StaticInstance = module.StaticInstance;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      BaseLayer = module.default;
    }, function (module) {
      SdkManager = module.default;
    }, function (module) {
      ToastManager = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "38aca0oW05L14APgJWH0shJ", "WinLayer", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let WinLayer = exports('default', (_dec = ccclass('WinLayer'), _dec(_class = class WinLayer extends BaseLayer {
        constructor() {
          super(...arguments);
          this.panel = null;
          this.btnNext = null;
          this.btnShare = null;
        }
        onLoad() {
          this.panel = find('style/panel', this.node);
          this.btnNext = find('buttons/btn_next', this.panel);
          this.btnShare = find('buttons/btn_share', this.panel);
          this.btnNext.on('click', this.onNextClick, this);
          this.btnShare.on('click', this.onShareClick, this);
        }
        onDestroy() {
          this.btnNext.off('click', this.onNextClick, this);
          this.btnShare.off('click', this.onShareClick, this);
        }
        onEnable() {
          this.zoomIn(this.panel);
          SdkManager.instance.toggleBannerAd(true);
        }
        onDisable() {
          SdkManager.instance.toggleBannerAd(false);
        }
        async onNextClick() {
          AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK);
          await StaticInstance.fadeManager.fadeIn();
          StaticInstance.uiManager.toggle(ENUM_UI_TYPE.WIN, false);
          StaticInstance.gameManager.onGameStart();
        }
        onShareClick() {
          AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK);
          if (SdkManager.instance.getPlatform()) {
            SdkManager.instance.activeShare();
          } else {
            ToastManager.instance.show('仅支持小游戏平台', {
              gravity: 'TOP',
              bg_color: color(226, 69, 109, 255)
            });
          }
        }
      }) || _class));
      /**
       * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
       */
      // // Created by carolsail
      // 
      // import { ENUM_AUDIO_CLIP, ENUM_UI_TYPE } from "../Enum";
      // import { StaticInstance } from './../StaticInstance';
      // import AudioManager from "../manager/AudioManager";
      // import BaseLayer from "./Baselayer";
      // import SdkManager from "../manager/SdkManager";
      // import ToastManager from "../manager/ToastManager";
      // 
      // const { ccclass, property } = cc._decorator;
      // 
      // @ccclass
      // export default class WinLayer extends BaseLayer {
      // 
      //     panel: cc.Node = null
      //     btnNext: cc.Node = null
      //     btnShare: cc.Node = null
      // 
      //     onLoad() {
      //         this.panel = cc.find('style/panel', this.node)
      //         this.btnNext = cc.find('buttons/btn_next', this.panel)
      //         this.btnShare = cc.find('buttons/btn_share', this.panel)
      //         this.btnNext.on('click', this.onNextClick, this)
      //         this.btnShare.on('click', this.onShareClick, this)
      //     }
      // 
      //     onDestroy() {
      //         this.btnNext.off('click', this.onNextClick, this)
      //         this.btnShare.off('click', this.onShareClick, this)
      //     }
      // 
      //     onEnable() {
      //         this.zoomIn(this.panel)
      //         SdkManager.instance.toggleBannerAd(true)
      //     }
      // 
      //     onDisable() {
      //         SdkManager.instance.toggleBannerAd(false)
      //     }
      // 
      //     async onNextClick() {
      //         AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
      //         await StaticInstance.fadeManager.fadeIn()
      //         StaticInstance.uiManager.toggle(ENUM_UI_TYPE.WIN, false)
      //         StaticInstance.gameManager.onGameStart()
      //     }
      // 
      //     onShareClick() {
      //         AudioManager.instance.playSound(ENUM_AUDIO_CLIP.CLICK)
      //         if (SdkManager.instance.getPlatform()) {
      //             SdkManager.instance.activeShare()
      //         } else {
      //             ToastManager.instance.show('仅支持小游戏平台', { gravity: 'TOP', bg_color: cc.color(226, 69, 109, 255) })
      //         }
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});