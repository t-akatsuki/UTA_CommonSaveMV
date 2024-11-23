/**
 * Configuration for ESLint
 *
 * ESLint
 *   https://eslint.org/
 * ESLint Stylistic
 *   https://eslint.style/
 */
import globals from "globals";
import pluginJs from "@eslint/js";
import stylisticJs from "@stylistic/eslint-plugin-js";


/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  pluginJs.configs.recommended,
  {
    files: [
      "*.js"
    ],
    ignores: [
      "node_modules/**"
    ],
    languageOptions: {
      ecmaVersion: 5,
      sourceType: "script",
      globals: {
        ...globals.browser,
        ...globals.es5,
        ...globals.node,
      },
    },
    plugins: {
      "@stylistic/js": stylisticJs
    },
    rules: {
      /**
       * ESLint rules
       * https://eslint.org/docs/latest/rules/
       */
      // 関数定義の引数括弧の前にスペースを強要しない
      "space-before-function-paren": "off",
      // 特殊booleanキャストを許容する
      "no-extra-boolean-cast": "off",

      /**
       * ESLint Stylistic rules
       * https://eslint.style/packages/ts#rules
       */
      // カンマの前後のスペース規制
      "@stylistic/js/comma-spacing": [
        "error",
        {
          "before": false,
          "after": true,
        }
      ],
      // インデントのスペース数
      "@stylistic/js/indent": ["error", 4],
      // ifなどのキーワードの前後にスペースを入れる
      "@stylistic/js/keyword-spacing": [
        "error",
        {
          "before": true,
          "after": true,
        }
      ],
      // object key前後のスペース制御
      "@stylistic/js/key-spacing": [
        "error",
        {
          "beforeColon": false,
          "afterColon": true,
          "mode": "minimum",
        }
      ],
      // 冗長なセミコロンを禁止
      "@stylistic/js/no-extra-semi": "error",
      // 文字列のクォートを基本ダブルクォートにする
      "@stylistic/js/quotes": [
        "error", "double",
        {
          "avoidEscape": true,
          "allowTemplateLiterals": true,
        }
      ],
      // objectのプロパティ名のクォートを強制する
      "@stylistic/js/quote-props": ["error", "always"],
      // 文末のセミコロンを強制する
      "@stylistic/js/semi": "error",
      // interfaceやenum等のブロックにて名前とブラケットの前にスペースを入れる
      "@stylistic/js/space-before-blocks": "error",
      // 関数の引数括弧の前にスペースを強要しない
      "@stylistic/js/space-before-function-paren": ["error", "never"],
    }
  },
  {
    languageOptions: {
      /**
       * RPGツクールMVコアスクリプトのglobal空間に定義された
       * 変数・オブジェクト参照時にエラーにならないようにする
       */
      globals: {
        /**
         * plugins.js
         */
        "$plugins": false,
        /**
         * rpg_core.js
         */
        "JsExtensions": true,
        "Utils": true,
        "CacheEntry": true,
        "CacheMap": true,
        "ImageCache": true,
        "RequestQueue": true,
        "Point": true,
        "Rectangle": true,
        "Bitmap": true,
        "Graphics": true,
        "Input": true,
        "TouchInput": true,
        "Sprite": true,
        "Tilemap": true,
        "ShaderTilemap": true,
        "TilingSprite": true,
        "ScreenSprite": true,
        "Window": true,
        "WindowLayer": true,
        "Weather": true,
        "ToneFilter": true,
        "ToneSprite": true,
        "Stage": true,
        "WebAudio": true,
        "Html5Audio": true,
        "JsonEx": true,
        "Decrypter": true,
        "ResourceHandler": true,
        /**
         * rpg_manager.js
         */
        "DataManager": true,
        "$dataActors": false,
        "$dataClasses": false,
        "$dataSkills": false,
        "$dataItems": false,
        "$dataWeapons": false,
        "$dataArmors": false,
        "$dataEnemies": false,
        "$dataTroops": false,
        "$dataStates": false,
        "$dataAnimations": false,
        "$dataTilesets": false,
        "$dataCommonEvents": false,
        "$dataSystem": false,
        "$dataMapInfos": false,
        "$dataMap": false,
        "$gameTemp": true,
        "$gameSystem": true,
        "$gameScreen": true,
        "$gameTimer": true,
        "$gameMessage": true,
        "$gameSwitches": true,
        "$gameVariables": true,
        "$gameSelfSwitches": true,
        "$gameActors": true,
        "$gameParty": true,
        "$gameTroop": true,
        "$gameMap": true,
        "$gamePlayer": true,
        "$testEvent": true,
        "ConfigManager": true,
        "StorageManager": true,
        "ImageManager": true,
        "AudioManager": true,
        "SoundManager": true,
        "TextManager": true,
        "SceneManager": true,
        "BattleManager": true,
        "PluginManager": true,
        /**
         * rpg_objects.js
         */
        "Game_Temp": true,
        "Game_System": true,
        "Game_Timer": true,
        "Game_Message": true,
        "Game_Switches": true,
        "Game_Variables": true,
        "Game_SelfSwitches": true,
        "Game_Screen": true,
        "Game_Picture": true,
        "Game_Item": true,
        "Game_Action": true,
        "Game_ActionResult": true,
        "Game_BattlerBase": true,
        "Game_Battler": true,
        "Game_Actor": true,
        "Game_Enemy": true,
        "Game_Actors": true,
        "Game_Unit": true,
        "Game_Party": true,
        "Game_Troop": true,
        "Game_Map": true,
        "Game_CommonEvent": true,
        "Game_CharacterBase": true,
        "Game_Character": true,
        "Game_Player": true,
        "Game_Follower": true,
        "Game_Followers": true,
        "Game_Vehicle": true,
        "Game_Event": true,
        "Game_Interpreter": true,
        /**
         * rpg_scenes.js
         */
        "Scene_Base": true,
        "Scene_Boot": true,
        "Scene_Title": true,
        "Scene_Map": true,
        "Scene_MenuBase": true,
        "Scene_Menu": true,
        "Scene_ItemBase": true,
        "Scene_Item": true,
        "Scene_Skill": true,
        "Scene_Equip": true,
        "Scene_Status": true,
        "Scene_Options": true,
        "Scene_File": true,
        "Scene_Save": true,
        "Scene_Load": true,
        "Scene_GameEnd": true,
        "Scene_Shop": true,
        "Scene_Name": true,
        "Scene_Debug": true,
        "Scene_Battle": true,
        "Scene_Gameover": true,
        /**
         * rpg_sprites.js
         */
        "Sprite_Base": true,
        "Sprite_Button": true,
        "Sprite_Character": true,
        "Sprite_Battler": true,
        "Sprite_Actor": true,
        "Sprite_Enemy": true,
        "Sprite_Animation": true,
        "Sprite_Damage": true,
        "Sprite_StateIcon": true,
        "Sprite_StateOverlay": true,
        "Sprite_Weapon": true,
        "Sprite_Balloon": true,
        "Sprite_Picture": true,
        "Sprite_Timer": true,
        "Sprite_Destination": true,
        "Spriteset_Base": true,
        "Spriteset_Map": true,
        "Spriteset_Battle": true,
        /**
         * rpg_windows.js
         */
        "Window_Base": true,
        "Window_Selectable": true,
        "Window_Command": true,
        "Window_Gold": true,
        "Window_MenuCommand": true,
        "Window_MenuStatus": true,
        "Window_MenuActor": true,
        "Window_ItemCategory": true,
        "Window_ItemList": true,
        "Window_SkillType": true,
        "Window_SkillStatus": true,
        "Window_SkillList": true,
        "Window_EquipStatus": true,
        "Window_EquipCommand": true,
        "Window_EquipSlot": true,
        "Window_EquipItem": true,
        "Window_Status": true,
        "Window_Options": true,
        "Window_SavefileList": true,
        "Window_ShopCommand": true,
        "Window_ShopBuy": true,
        "Window_ShopSell": true,
        "Window_ShopNumber": true,
        "Window_ShopStatus": true,
        "Window_NameEdit": true,
        "Window_NameInput": true,
        "Window_ChoiceList": true,
        "Window_NumberInput": true,
        "Window_EventItem": true,
        "Window_Message": true,
        "Window_ScrollText": true,
        "Window_MapName": true,
        "Window_BattleLog": true,
        "Window_PartyCommand": true,
        "Window_ActorCommand": true,
        "Window_BattleStatus": true,
        "Window_BattleActor": true,
        "Window_BattleEnemy": true,
        "Window_BattleSkill": true,
        "Window_BattleItem": true,
        "Window_TitleCommand": true,
        "Window_GameEnd": true,
        "Window_DebugRange": true,
        "Window_DebugEdit": true,
        /**
         * libs/lz-string.js
         */
        "LZString": true,
      }
    }
  }
];
