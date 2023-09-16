# Next.js + Auth.js

- Next.js 13 App Router での Auth.js の使い方
  https://zenn.dev/tfutada/articles/5557b780050574

## 環境構築手順

### 1. 環境変数

.env.template をコピーして .env.local を作成  
ランダムな文字列を生成して `NEXTAUTH_SECRET` に適用

```shell
cp .env.template .env.local
openssl rand -base64 32
```

#### a. Docker を使う場合

```shell
# 起動
docker compose up -d

# 終了
docker compose down
```

#### b. Vercel Postgres を使う場合

`POSTGRES_URL` などは Vercel 管理画面からコピペ  
Quickstart > .env.local タブ > Copy Snippet をクリック

### 2. Prisma 用意

スキーマから Prisma の型ファイルなどを生成

```shell
npm run prisma-generate
```

DB にスキーマ反映

```shell
npx dotenv -e .env.local -- prisma migrate dev --name init
```

ダミーユーザー作成  
すでに DB にレコードがある場合は何も起きない

```shell
npx dotenv -e .env.local -- node ./migrations/create-user.mjs
```
