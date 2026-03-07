// 1. Initialize Supabase
const SUPABASE_URL = 'https://naogkvryaxnbkzspqakn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hb2drdnJ5YXhuYmt6c3BxYWtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3MDYyODAsImV4cCI6MjA4ODI4MjI4MH0.IHkpF8GMZD4GPawrI0Se73N18E__P7Ys7BmhT8fr29o';

// ✅ ONLY ONE declaration of supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 2. Select DOM Elements
const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');
const errorMessage = document.getElementById('errorMessage');

// 3. Handle Form Submission
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    loginBtn.disabled = true;
    loginBtn.textContent = 'Logging in...';
    errorMessage.style.display = 'none';

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            throw error;
        }

        // 4. Success: Redirect
        window.location.href = 'index.html';

    } catch (error) {
        console.error('Login Error:', error.message);
        errorMessage.textContent = error.message;
        errorMessage.style.display = 'block';
        
        loginBtn.disabled = false;
        loginBtn.textContent = 'Login';
    }
});