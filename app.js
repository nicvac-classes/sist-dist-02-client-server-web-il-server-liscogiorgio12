const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

// Gestione della richiesta GET per la home page
app.get('/', (req, res) => {
    res.send(`
        <form action="/greet" method="POST">
            <label for="nome">Inserisci il tuo nome:</label>
            <input type="text" id="nome" name="nome">
            <button type="submit">Invia</button>
        </form>
    `);
});

// Gestione della risposta POST
app.post('/greet', (req, res) => {
    const nome = req.body.nome;
    res.send(`<h1>Ciao, ${nome}!</h1>`);
});

// Avvio del server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Il server è in esecuzione su http://localhost:${PORT}`);
});