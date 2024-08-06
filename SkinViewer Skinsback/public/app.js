const fetchSkins = async () => {
    try {
        const response = await fetch('/api/skins');
        const skins = await response.json();
        return skins;
    } catch (error) {
        console.error('Erro ao buscar skins:', error);
    }
};

const loadSkins = (skins) => {
    const container = document.getElementById('skins-container');
    skins.forEach(skin => {
        const div = document.createElement('div');
        div.className = 'skin-item';
        div.style.backgroundImage = `url(${skin.image_url})`;
        div.onclick = () => processPayment(skin);
        container.appendChild(div);
    });
};

const processPayment = async (skin) => {
    try {
        const response = await fetch('/api/skinsback/process-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: 'USER_ID', skinId: skin.skin_id })
        });
        const result = await response.json();
        alert('Pagamento processado com sucesso!');
    } catch (error) {
        console.error('Erro ao processar pagamento:', error);
        alert('Erro ao processar pagamento');
    }
};

fetchSkins().then(skins => {
    loadSkins(skins);
});
