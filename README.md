# Movie Lattice

A submission for the "Lattice Take Home Exercise" by Jordan Jensen.

## Requirements

- `Node.js v13.1.0`

May work on earlier versions of Node, but was tested using the above version.

## 3 Hour Mark

If you would like to view what the project looked like at approximately 3 hours of work you can checkout the git commit at the time.

```
git checkout 595efe056319566ca99b71801e708ce2888468fa
```

## Running the Project

After cloning the repository we will need to run the server and the client.

### Server:

Before starting the server we will have to configure it.

```
cd server
cp config-template.json config.json
```

Then open `config.json` in your favorite editor and replace "replace" with your apiKey for themoviedb.org API.

Once it is configured, start the Express server on `localhost:3001`

```
npm install
npm start
```

### Client:

Start the React.js frontend on `localhost:3000`
```
cd client
npm install
npm start
```
