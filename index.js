const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello Kuh!!!</h1>');
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));