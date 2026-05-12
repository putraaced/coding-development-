
document.getElementById('loginBtn').addEventListener('click', function() {
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();
    const msgArea = document.getElementById('modalMessage');
    
    const myModal = new bootstrap.Modal(document.getElementById('statusModal'));

    const correctUser = "admin";
    const correctPass = "Admin1234@";

    if (user === "" || pass === "") {
        msgArea.innerHTML = '<p class="text-warning">Please fill in all fields.</p>';
    } else if (user === correctUser && pass === correctPass) {
        msgArea.innerHTML = '<p class="text-success">Login successful. Welcome Admin!</p>';
    } else {
        msgArea.innerHTML = '<p class="text-danger">Incorrect username or password. Please try again.</p>';
    }

    myModal.show();
});