async function purchaseVIP(amount, description) {
    const apiKey = '36cfa059-2fa2-4eb3-9673-a31cf36a47a8'; // chave da API SkinsBack
    const apiUrl = 'https://api.skinsback.com/payments'; // URL da API de pagamentos

    const paymentData = {
        amount: amount,
        description: description,
        // documentação da API
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(paymentData)
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        // Lidar com a resposta da API (redirecionar para página de pagamento, etc.)
        console.log('Payment data:', data);
        window.location.href = 'success.html';
    } catch (error) {
        console.error('Error processing payment:', error);
        window.location.href = 'fail.html';
    }
}
