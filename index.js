import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send("Server is up!");
})

app.listen(PORT, (req, res) => {
    console.log("listening on port number " + PORT);
})