# GameAnalytics Frontend candidate evaluation assignment

This is the project skeleton necessary to complete the FE challenge

## How to build

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

You will also see any lint errors in the console.

## API Mock

This project includes a [miragejs](https://miragejs.com/) api mock that starts with the project.

The API mock provides a set of endpoints so you can retrieve the games and currency rate data.

### Routes

Return all games

```
GET "/api/games"
```

Return one specific game

```
GET "/api/games/:gameId"
```

Return all available currency rates

```
GET "/api/rates"
```

Return specific currency rate

```
GET "/api/rates/:currencyCode"
```

To access these endpoint you dont need a authentication, you just need to fetch at the route root.

Example:

```js
window
  .fetch("/api/games")
  .then((response) => response.json())
  .then((games) => {});
```

### Starting point

This project already have some of the necessary components implemented like:

- AppBar
- GameListPage
- CheckoutListPage
- Button

You will need to improve and / or extend the components and the project structure to achieve the task
