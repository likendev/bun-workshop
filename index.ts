import express from 'express'
import morgan from 'morgan'
import { engine } from 'express-handlebars'
import { v4 as uuidv4, v4 } from 'uuid'

// default to 3000 if PORT env is not set
const port  = process.env.PORT || 3000;

// create an instance of the application
const app = express();

// Configure render
app.engine('html', engine({ defaultLayout: false }));
app.set('view engine', 'html');

// Log incoming request
app.use(morgan('combined'));

// POST /chess
app.post('/chess', express.urlencoded({ extended: true }),
    (req, resp) => {
        const gameId = v4().substring(0, 8);
        const orientation = 'white';

        resp.status(200).render('chess', { gameId, orientation });
    }
);

// GET /chess?gameId=<gameId>
app.get('/chess',
    (req, resp) => {
        const gameId = req.query.gameId;
        const orientation = 'black';
        resp.status(200).render('chess', { gameId, orientation });
    }
);

// PATCH /chess/:gameId
app.patch('/chess/:gameId', express.json(),
    (req, resp) => {
        // Get the gameId from the resource
        const gameId = req.params.gameId;
        const move = req.body;

        console.info(`GameId: ${gameId}: `, move);

        resp.status(201).json({ timestamp: (new Date()).getTime() });
    }
)

// Serve files from static
app.use(express.static(__dirname + '/static'));

// Start express
app.listen(port, () => {
    console.info(`Application bound to port ${port} at ${new Date()}`);
});