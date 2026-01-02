async function testLogin() {
  try {
    const response = await fetch('http://localhost:3001/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'admin@eastlux.com',
        password: 'admin123'
      })
    });

    const data = await response.json();
    console.log('Login response:', data);
  } catch (error) {
    console.error('Login test failed:', error);
  }
}

testLogin();