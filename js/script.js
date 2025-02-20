// Kiểm tra đăng nhập trước khi vào trang chủ
if (!localStorage.getItem("username")) {
    window.location.href = "login.html";
}

function addPost() {
    let postContent = document.getElementById("postContent").value;
    if (postContent.trim() === "") {
        alert("Vui lòng nhập nội dung bài viết!");
        return;
    }

    let postList = document.getElementById("postList");
    let newPost = document.createElement("div");
    newPost.classList.add("post");
    newPost.innerHTML = `<p>${postContent}</p>`;

    postList.prepend(newPost);
    document.getElementById("postContent").value = "";
}

function toggleMenu() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

// Ẩn menu nếu click bên ngoài
window.onclick = function(event) {
    if (!event.target.matches('.menu-button')) {
        let dropdowns = document.getElementsByClassName("dropdown-menu");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
};

// Kiểm tra trạng thái Dark Mode khi tải trang
document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const darkModeIcon = document.getElementById("darkModeIcon");

    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeToggle.checked = true;
        darkModeIcon.textContent = "🌙"; // Mặt trăng khi Dark Mode bật
    } else {
        darkModeIcon.textContent = "☀️"; // Mặt trời khi Light Mode bật
    }
});

// Chuyển đổi Dark Mode
function toggleDarkMode() {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const darkModeIcon = document.getElementById("darkModeIcon");

    if (darkModeToggle.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
        darkModeIcon.textContent = "🌙"; // Đổi sang mặt trăng
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");
        darkModeIcon.textContent = "☀️"; // Đổi sang mặt trời
    }
}

// Xuất hàm để sử dụng trong HTML
window.toggleDarkMode = toggleDarkMode;


