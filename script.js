document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            window.location.href = '/success.html';
        } else {
            alert('Неверное имя пользователя или пароль');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Произошла ошибка при входе');
    }
}); 