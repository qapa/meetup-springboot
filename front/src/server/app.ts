import * as express from 'express';

// Create a new express application instance
const app: express.Application = express();

app.use(express.static('dist/client'));
app.use(express.static('src/client'));

app.listen(3000, function () {
    console.log('Listening on port 3000');
});