function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username.trim() === "" || password.trim() === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // Lưu user vào localStorage (chỉ demo, không bảo mật)
    localStorage.setItem("username", username);
    window.location.href = "index.html";
}

// Kiểm tra nếu đã đăng nhập thì không cần vào trang login
if (localStorage.getItem("username") && window.location.pathname.includes("login.html")) {
    window.location.href = "index.html";
}

function logout() {
    localStorage.removeItem("username");
    window.location.href = "login.html";
}

// Xuất hàm ra global scope để dùng trong HTML
window.logout = logout;

// Kiểm tra trạng thái Dark Mode khi tải trang
document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("darkModeToggle");
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeToggle.checked = true;
    }
});

// Chuyển đổi Dark Mode
function toggleDarkMode() {
    const darkModeToggle = document.getElementById("darkModeToggle");

    if (darkModeToggle.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");
    }
}

// Xuất hàm để sử dụng trong HTML
window.toggleDarkMode = toggleDarkMode;
