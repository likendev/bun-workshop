// Access <body>
const body = document.querySelector('body');

// Access the data attribute to retrieve gameId and orientation
const gameId = body.dataset.gameId;
const orientation = body.dataset.orientation;

console.info(`gameId: ${gameId}, orientation: ${orientation}`);

// Handle onDrop
const onDrop = (src, dst,piece) => {
    console.info(`src=${src}, dst=${dst}, piece=${piece}`);

    // Construct the move
    const move = { src, dst, piece };

    // PATCH /chess/:gameId
    fetch(`/chess/${gameId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(move)
    })
    .then(resp => console.info('RESPONSE: ', resp))
    .catch(err => console.error('ERROR: ', err));
}
// Create a chess configuration
const config = {
    draggable: true,
    position: 'start',
    orientation,
    onDrop
};

// Create instance of chess
const chess = Chessboard('chess', config);