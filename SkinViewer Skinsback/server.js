const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const skinsbackRoutes = require('./routes/skinsback');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SUA_SENHA',
    database: 'cs2_skins'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL');
});

app.use(bodyParser.json());
app.use('/api/skinsback', skinsbackRoutes);

app.get('/api/skins', (req, res) => {
    const query = 'SELECT * FROM skins';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Erro ao buscar skins:', err);
            res.status(500).send('Erro ao buscar skins');
            return;
        }
        res.json(results);
    });
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
