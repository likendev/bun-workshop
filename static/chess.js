// Access <body>
const body = document.querySelector('body');

// Access the data attribute to retrieve gameId and orientation
const gameId = body.dataset.gameId;
const orientation = body.dataset.orientation;

console.info(`gameId: ${gameId}, orientation: ${orientation}`);