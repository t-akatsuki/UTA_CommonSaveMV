# UTA_CommonSaveプラグイン

## ■概要 : Overview
各セーブデータ間で共有するセーブデータを作成し、指定したスイッチ・変数の状態をセーブデータ間で共有するRPGツクールMV用プラグインです。  
ローカル版、Web版両方に対応しています。  
セーブ・ロード時に自動的に反映が行われるので、制作者はスクリプトの知識を必要とせず、従来のスイッチ・変数操作のみに注力する事ができます。

ゲームクリア情報やCGの閲覧情報などをスイッチや変数で管理したい場合に有効です。  
スクリプトの知識を必要とせず、従来のスイッチ・変数操作での制作に注力する事ができます。  
また、独自のセーブファイルを利用している為、他のプラグインとの競合が起こりにくいのが特徴です。

本プラグインでは通常のセーブデータとは別に共有セーブデータを作成します。  
local版ではsaveディレクトリ以下に共有セーブデータファイルが作成されます。  
web版ではLocalStorageに共有セーブデータが保存されます。

本プラグインはRPGツクールMV用の為、RPGツクールMZでは動作しません。  
RPGツクールMZで利用したい場合は対応するプラグインを以下のページからダウンロードしてください。

https://www.utakata-no-yume.net/gallery/plugin/tkmv/

## ■利用方法 : Usage
ご自身のプロジェクトにUTA_CommonSave.jsを配置し、プラグインの有効化、共有対象とするスイッチ、変数をプラグインパラメーターに指定してください。

セーブ・ロード時に設定に応じて自動的に処理してくれます。  
プラグインコマンドを利用すると、任意のタイミングで共有セーブデータの操作を行う事ができます。  

共有セーブデータはsaveディレクトリ以下に「common.rpgsave」という名前で保存されます。  
(Web版の場合はLocalStorage内に「RPG Common」をkeyとするオブジェクトとして保存されます)

詳しい利用方法はプラグインのヘルプを参照してください。

## ■プラグインパラメーター : Plugin Parameters
### Target Switches
対象となるスイッチの番号を指定します。  
カンマ区切りで複数指定、ハイフンで範囲指定が可能です。(ver 1.20から)

(例) 1-3,11,12,13,20,21
- スイッチ1,2,3,11,12,13,20,21を共有対象に指定。

### Target Variables
対象となる変数の番号を指定します。  
カンマ区切りで複数指定、ハイフンで範囲指定が可能です。(ver 1.20から)

(例) 1-5,11,12,13,23,24
- 変数1,2,3,4,5,11,12,13,23,24を共有対象に指定。

### Is Auto
セーブ・ロード時に自動的に共通セーブデータのセーブ・ロードを行うかを設定します。

| 指定値 | 説明 |
|:---:|:---|
| true | セーブ・ロード時に自動的に共有セーブデータにデータのセーブ・ロードを行う。 |
| false | 共通セーブデータのセーブ・ロードは自動で行われない。手動で行う場合に利用。 |

### Auto on Gameover
自動セーブ設定がONの時にゲームオーバー時に共有セーブデータの自動セーブを行うかを設定します。

| 指定値 | 説明 |
|:---:|:---|
| true | ゲームオーバー時に自動共有セーブを行う。 |
| false | ゲームオーバー時は自動共有セーブを行わない。 |

### Show Trace
デバッグ用のトレースを出すかを設定します。

| 指定値 | 説明 |
|:---:|:---|
| true | トレースを表示, |
| false | トレースを表示しない。 |

## ■プラグインコマンド : Plugin Commands
### CommonSave load
共有セーブデータからスイッチ・変数を読み込み反映させます。  
任意のタイミングで共有セーブデータのロードを行いたい場合に使用します。

### CommonSave save
共有セーブデータにスイッチ・変数の状態を記録します。  
任意のタイミングで共有セーブデータのセーブを行いたい場合に使用します。

### CommonSave remove
共有セーブデータを削除します。  
共有セーブデータをリセットしたい場合に使用します。

### CommonSave setTrace Enabled
コンソールにトレースを出力するかを設定します。  
ゲーム実行中にトレース状態を切り替えたい場合に使用します。

| 引数 | 型 | 説明 |
|:---:|:---:|:---|
| Enabled | boolean | trueもしくはfalseを与える。 <br> true: コンソールにトレース出力する。 <br> false: コンソールにトレース出力しない。 |

### CommonSave check
共有状態になっているスイッチ・変数番号をコンソールに表示し確認します。

## ■ライセンス/利用規約 : License
本プラグインはMIT Licenseです。

配布、変更、商用利用は可能でありますが、ソフトウェアの著作権表示と、MIT Licenseの全文もしくは全文を掲載したWebページのURLを、ソースコードの中や、ライセンス表示用の別ファイルに掲載して下さい。

これらソフトウェアには何の保障もありません。  
例え、これらのソフトウェアを利用した事で何か問題が起こったとしても、作者は何の責任も負いません。

- 商用/非商用問わずにご利用いただけます。
- 年齢制限のあるコンテンツのご利用についての制限はありません。
- 作品のリリースの際にはご報告いただけると作者が喜びます。(任意です)

## ■更新履歴 : Change Log
### ver 1.30 (2024.12.05)
コアスクリプトセーブ処理に合わせたバックアップ/復旧処理を追加。  
ロード時に共有セーブデータが破損していた場合、バックアップがあれば復旧を試みるように。  
共有対象を後から減らした場合、対象外とした対象もロード時に反映してしまう問題の対処。  
コード内のJSDocコメント追加。可読性の向上。型安全性の強化。  
ヘルプドキュメントの可読性向上。

### ver 1.20 (2016.05.11)
スイッチ・変数の指定の際に「-」を使う事で範囲指定を可能に。  
トレース状態を動的に変えられるように setTrace プラグインコマンドを追加。  
共有対象になっているスイッチ・変数を確認できる check プラグインコマンドを追加。

### ver 1.10 (2016.02.17)
ファイル名をUTA_CommonSave.jsに変更。  
トレース出力の有無をパラメータで設定できるように。

### ver 1.01 (2016.01.14)
変数の共有が上手くできていないバグの修正。

### ver 1.10 (2015.12.31)
日本語版RPGツクールMVの発売に合わせver1.00に。

### ver 0.01 (2015.11.05)
初版。

## ■連絡先 : Contect Information

|  |  |
|:---:|:---|
| Author | 赤月 智平(t-akatsuki) |
| WebSite | https://www.utakata-no-yume.net |
| GitHub | https://github.com/T-Akatsuki |
| X | [@T_Akatsuki](https://x.com/t_akatsuki) |
| Bluesky | [@t-akatsuki.utakata-no-yume.net](https://bsky.app/profile/t-akatsuki.utakata-no-yume.net) |
