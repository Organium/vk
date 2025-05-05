document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const phoneNumber = document.getElementById('phoneNumber').value;
    try {
        await fetch('/save-phone', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phoneNumber })
        });
        window.location.href = '/success.html';
    } catch (error) {
        alert('Ошибка отправки. Попробуйте еще раз.');
    }
}); 