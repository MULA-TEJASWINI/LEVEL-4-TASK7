function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Basic validation
  if (username === '' || password === '') {
      alert('Please fill in both fields');
      return;
  }

  // You can add more sophisticated validation or form submission here
  console.log('Username:', username);
  console.log('Password:', password);
  alert('Login successful');
}