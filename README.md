# Learning_2
## ■学習内容
- Laravel
- Vue.js
- Deck.gl

## ■環境設定
- Laravelインストール（composer.json ⇒ vendor）
`$composer install`

- Vue.js + Deck.glインストール（package.json ⇒ node_module）
`$npm install`

- その他
`$cp .env.example .env`<br>
`$php artisan key generate`<br>
`$php artisan:storage link`

## ■Webサイト起動
- サーバー起動
`$php artisan serve`<br>
サイトURL：http://127.0.0.1:8000

- module起動（vite, vue.js, decl.gl）
`$npm run dev`