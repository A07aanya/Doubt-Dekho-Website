document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    if (response.ok) {
        const data = await response.json();
        if (data.role === 'student') {
            window.location.href = 'student-dashboard.html';
        } else {
            window.location.href = 'teacher-dashboard.html';
        }
    } else {
        alert('Login failed');
    }
});

document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
 'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, role })
    });

    if (response.ok) {
        alert('Sign up successful');
        window.location.href = 'login.html';
    } else {
        alert('Sign up failed');
    }
});
