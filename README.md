## TypeScript Docker サンプルアプリケーション

このプロジェクトは、TypeScriptを使用してExpressで構築されたシンプルなREST APIアプリケーションです。Dockerを使用して開発・実行環境を統一し、APIを操作するためのHTMLインターフェースも提供します。

---

### 目次
- [特徴](#特徴)
- [必要条件](#必要条件)
- [セットアップと開発方法](#セットアップと開発方法)
- [プロジェクト構成](#プロジェクト構成)
- [APIエンドポイント](#apiエンドポイント)
- [開発ルール](#開発ルール)
- [トラブルシューティング](#トラブルシューティング)
- [ライセンス](#ライセンス)
- [作者](#作者)

---

### 特徴

- ExpressとTypeScriptで構築されたREST API。
- `ts-node-dev`によるホットリロード対応。
- API操作用の簡易的なHTMLインターフェースを提供。
- Dockerを使用した一貫した開発・デプロイ環境。

---

### 必要条件

- [Node.js](https://nodejs.org/) (バージョン18以上)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- モダンなウェブブラウザ (Chrome, Firefox など)

---

### セットアップと開発方法

1. **リポジトリをクローン**:
   ```bash
   git clone https://github.com/your-repo/typescript-docker-sample.git
   cd typescript-docker-sample
   ```

2. **依存関係をインストール**:
   Dockerを使用せずローカルで実行する場合：
   ```bash
   npm install
   ```

3. **アプリケーションを起動**:
   - Docker Composeを使用する場合：
     ```bash
     docker-compose up
     ```
   - Dockerを使用せずにローカルで実行する場合：
     ```bash
     npm run dev
     ```

4. **アプリケーションにアクセス**:
   - ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

---

### プロジェクト構成

```plaintext
typescript-docker-sample/
├── src/
│   ├── app.ts                # メインサーバーアプリケーション
│   ├── routes/
│   │   └── items.ts          # アイテム管理用のREST APIルート
│   ├── public/
│   │   ├── index.html        # HTMLインターフェース
│   │   ├── style.css         # インターフェースのスタイル
│   │   └── script.js         # フロントエンドのAPI操作ロジック
│   └── types/
│       └── item.ts           # アイテムのTypeScript型定義
├── Dockerfile                # Docker設定
├── docker-compose.yml        # Docker Compose設定
├── package.json              # Node.js依存関係とスクリプト
├── tsconfig.json             # TypeScript設定
└── .gitignore                # Gitで無視するファイルリスト
```

---

### APIエンドポイント

| メソッド | エンドポイント      | 説明                           |
|----------|---------------------|--------------------------------|
| GET      | `/api/items`        | 全てのアイテムを取得           |
| POST     | `/api/items`        | 新しいアイテムを追加           |
| GET      | `/api/items/:id`    | 指定したIDのアイテムを取得     |
| PUT      | `/api/items/:id`    | 指定したIDのアイテムを更新     |
| DELETE   | `/api/items/:id`    | 指定したIDのアイテムを削除     |

---

### 開発ルール

1. **コードフォーマット**:
   - [Prettier](https://prettier.io/)を使用してコードをフォーマットしてください。
   - 必要に応じて、`npm run lint`を実行して問題を確認します。

2. **コミットメッセージ**:
   - [Conventional Commits](https://www.conventionalcommits.org/)に従って記述してください。
   - 例: `feat: アイテム更新用の新しいAPIエンドポイントを追加`

3. **プルリクエスト**:
   - 提出する変更は必ずテストをパスするようにしてください（今後Jestなどのテストフレームワークを導入する場合）。
   - 変更内容や理由を明確に記載してください。

4. **環境変数**:
   - `.env`ファイルを使用して、APIキーや認証情報を管理してください。
   - 例：
     ```
     PORT=3000
     NODE_ENV=development
     ```

5. **Dockerの利用**:
   - 依存関係を変更した場合は、Dockerイメージを再ビルドしてください：
     ```bash
     docker-compose build
     ```

---

### トラブルシューティング

- **ポートの競合**:
  他のプロセスがポート`3000`を使用している場合は、停止するか`src/app.ts`内のポートを変更してください。

- **依存関係が見つからない**:
  `node_modules/`が正しくインストールされていることを確認してください：
  ```bash
  npm install
  ```

- **TypeScriptのエラー**:
  ログに出力されたエラーを修正してください。よくあるエラーには型定義の不足などがあります。

---

### ライセンス

このプロジェクトはMITライセンスの下で提供されています。詳細は`LICENSE`ファイルをご覧ください。

---

### 作者

Your Name  
[Your GitHub Profile](https://github.com/your-profile)  

---

必要に応じてプロジェクトの詳細に合わせて編集してください！
