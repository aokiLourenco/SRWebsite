const express = require('express');
const axios = require('axios');
const router = express.Router();

const SKINSBACK_API_KEY = '36cfa059-2fa2-4eb3-9673-a31cf36a47a8'; // Substituir pela chave API

// Endpoint para obter skins do user
router.get('/user/:userId/skins', async (req, res) => {
    const { userId } = req.params;
    try {
        const response = await axios.get(`https://api.skinsback.com/user/${userId}/skins`, {
            headers: { 'Authorization': `Bearer ${SKINSBACK_API_KEY}` }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao obter skins:', error);
        res.status(500).send('Erro ao obter skins');
    }
});

// Endpoint para processar pagamentos com skins
router.post('/process-payment', async (req, res) => {
    const { userId, skinId } = req.body;
    try {
        const response = await axios.post('https://api.skinsback.com/payment', {
            userId,
            skinId
        }, {
            headers: { 'Authorization': `Bearer ${SKINSBACK_API_KEY}` }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao processar pagamento:', error);
        res.status(500).send('Erro ao processar pagamento');
    }
});

module.exports = router;
