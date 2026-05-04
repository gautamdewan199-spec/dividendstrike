// ============================================
// DIVIDENDSTRIKE — SHARED UTILITIES
// ============================================

// Toast notification
function showToast(message, type = 'info') {
    let container = document.getElementById('toastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        container.style.cssText = 'position:fixed;top:20px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:8px;';
        document.body.appendChild(container);
    }
    const colors = { success: '#22c55e', info: '#3b82f6', warning: '#eab308', error: '#ef4444' };
    const toast = document.createElement('div');
    toast.style.cssText = `background:${colors[type]};color:white;padding:12px 20px;border-radius:12px;font-size:13px;font-weight:500;box-shadow:0 10px 30px rgba(0,0,0,0.3);animation:fadeUp 0.3s ease-out;`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

// Format currency
function formatCurrency(n) {
    if (Math.abs(n) >= 10000000) return `₹${(n/10000000).toFixed(2)} Cr`;
    if (Math.abs(n) >= 100000) return `₹${(n/100000).toFixed(2)} L`;
    return `₹${n.toFixed(2)}`;
}

// Blog posts from localStorage
function getBlogPosts() {
    try {
        const posts = localStorage.getItem('dividendstrike_blog_posts');
        return posts ? JSON.parse(posts) : [];
    } catch(e) { return []; }
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Scroll button
function handleScrollButton() {
    const btn = document.getElementById('scrollToTopBtn');
    if (!btn) return;
    btn.classList.toggle('show', window.scrollY > 400);
}
window.addEventListener('scroll', handleScrollButton, { passive: true });

// Active nav highlighting
function setActiveNav() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === page) link.classList.add('active');
    });
}

// Initialize Lucide icons
function initIcons() {
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// On page load
document.addEventListener('DOMContentLoaded', () => {
    setActiveNav();
    handleScrollButton();
    initIcons();
});
