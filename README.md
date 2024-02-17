## 🎉 Installation

```bash
$ npm install
```

## ⚡ Running the app

### 💻 Setting up local environment

```dotenv
# .env.local
API_VERSION=1.0.0
NYTIMES_BOOKS_API_BASEURL=https://api.nytimes.com/svc/books/v3
NYTIMES_BOOKS_API_KEY=
GOOGLE_BOOKS_API_BASEURL=https://www.googleapis.com/books/v1
GOOGLE_BOOKS_API_KEY=
ALLOWED_API_KEYS=key1,key2,key3
EXPOSED_API_PORT=

```

### 🚀 Running the API

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## 🧪 Test

### 🧬 Running tests
```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 📝 Commit Emoji Convention
This project follows the Gitmoji commit convention. Each commit message is prefixed with an emoji that represents the nature of the change. For example:

🐛 `:bug:` for bug fixes\
✅ `:white_check_mark:` for tests\
✨ `:sparkles:` for new features

For a complete list of available emojis and their meanings, refer to the [Gitmoji](https://gitmoji.dev/) website.
