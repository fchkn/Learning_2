# Learning_2
## ■学習内容
- Laravel
- Vue.js
- Deck.gl

## ■環境設定
- PHPインストール<br>
https://www.php.net/

- MariaDBインストール<br>
https://mariadb.org/download/<br>

- Composerインストール
https://getcomposer.org/

- 任意のディレクトリ配下でgitHubからソースをclone<br>
`$git clone git@github.com:fchkn/Learning_2.git`

- Laravelインストール（composer.json ⇒ vendor）<br>
`$composer install`

- Vue.js + Deck.glインストール（package.json ⇒ node_module）<br>
`$npm install`

- マイグレーション実行<br>
`$php artisan migrate`

- その他<br>
`$cp .env.example .env`<br>
`$php artisan key generate`<br>
`$php artisan:storage link`

## ■Webサイト起動
- サーバー起動<br>
`$php artisan serve`<br>
サイトURL：http://127.0.0.1:8000

- module起動（vite, vue.js, decl.gl）<br>
`$npm run dev`

- MariaDb起動
MariaDBサーバーに接続<br>
`$mariadb -u root -p`<br>
DB指定<br>
`$use learning_2_db;`<br>
テーブル一覧表示<br>
`$show tables;`<br>
テーブル構成表示<br>
`$DESC テーブル名;`<br>
テーブル中身表示<br>
`SELECT * FROM テーブル名;`