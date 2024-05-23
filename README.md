<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

This service is part of an OTT platform and is responsible for managing the "My List" feature, allowing users to add and remove items from their personal list of favorite content.

## Installation

# Clone the repository:

```bash
$ git clone https://github.com/Sumitsainits/ott-backend.git
```

# Install dependencies:

```bash
$ yarn install
```

# Add .env file with following keys

```
MONGO_CONNECTION_STRING=mongodb+srv://<username>:<password>@cluster0.ntcgdqa.mongodb.net/
API_KEY=some token
```

# Seed your DB with Dummy Data

```bash
$ yarn run seed
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test
```

### API Endpoints

- **GET /user/:id/my-list**: Get all items in the user's list.
- **POST /user/:id/my-list**: Add a new item to the user's list.
- **DELETE /user/:id/my-list/:itemId**: Remove an item from the user's list.

## License

Nest is [MIT licensed](LICENSE).
