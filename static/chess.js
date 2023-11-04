// Access <body>
const body = document.querySelector('body');

// Access the data attribute to retrieve gameId and orientation
const gameId = body.dataset.gameId;
const orientation = body.dataset.orientation;

console.info(`gameId: ${gameId}, orientation: ${orientation}`);

// Handle onDrop
const onDrop = (src, dst,piece) => {
    console.info(`src=${src}, dst=${dst}, piece=${piece}`);
}
// Create a chess configuration
const config = {
    draggable: true,
    position: 'start',
    orientation,
    onDrop
}

// Create instance of chess
const chess = Chessboard('chess', config)