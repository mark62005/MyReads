# MyReads

This is my implementation of the final assessment project for Udacity's React Fundamentals course. MyReads is a bookshelf app that allows user to select and categorize books they have read, are currently reading, or want to read. 

The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This project can be built with npm.
- npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js. [Download Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

### Installation

1. Clone the GitHub repository

```
git clone https://github.com/mark62005/MyReads.git
cd MyReads
```

2. Install the dependencies.

```
npm install
```

### Start The Application

```
npm start
```

## What You're Getting

```bash
├── README.md 
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with the app.
├── package-lock.json 
├── package.json 
├── .gitignore
├── public
│   ├── favicon.ico
│   └── index.html 
└── src
    ├── index.js
    ├── components
    │   ├── App.js
    │   ├── Book.js
    │   ├── BookDetails.js
    │   ├── BookList.js
    │   ├── Bookshelf.js
    │   ├── Search.js
    │   └── SearchResults.js
    ├── css
    │   ├── App.css
    │   └── index.css
    ├── icons 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── utils
    └── └── BooksAPI.js 
```

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.