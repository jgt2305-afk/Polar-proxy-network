// Tab switching functionality
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const statusElement = document.getElementById('status');

// Cyan Explosion Effect on Click
function createExplosion(x, y) {
    const particleCount = 30;
    const colors = ['#00ffff', '#00cccc', '#0099ff', '#00fff9'];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'explosion-particle';
        
        const size = Math.random() * 10 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = Math.random() * 200 + 100;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        Object.assign(particle.style, {
            position: 'fixed',
            left: x + 'px',
            top: y + 'px',
            width: size + 'px',
            height: size + 'px',
            background: color,
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: '99999',
            boxShadow: `0 0 ${size * 2}px ${color}, 0 0 ${size * 4}px ${color}`,
            animation: `explode 1s ease-out forwards`
        });
        
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 1000);
    }
    
    // Create shockwave
    const shockwave = document.createElement('div');
    shockwave.className = 'shockwave';
    Object.assign(shockwave.style, {
        position: 'fixed',
        left: x + 'px',
        top: y + 'px',
        width: '0px',
        height: '0px',
        border: '3px solid #00ffff',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: '99998',
        animation: 'shockwave 0.8s ease-out forwards',
        transform: 'translate(-50%, -50%)'
    });
    
    document.body.appendChild(shockwave);
    setTimeout(() => shockwave.remove(), 800);
}

// Add click listeners to all clickable elements
document.addEventListener('click', (e) => {
    // Check if clicked element is a button, link, or interactive element
    if (e.target.closest('button, a, .tab, .app-card, .feature-card')) {
        createExplosion(e.clientX, e.clientY);
    }
});

// Switch between tabs
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabName = tab.getAttribute('data-tab');
        switchTab(tabName);
    });
});

function switchTab(tabName) {
    // Remove active class from all tabs and contents
    tabs.forEach(t => t.classList.remove('active'));
    tabContents.forEach(tc => tc.classList.remove('active'));
    
    // Add active class to selected tab and content
    const selectedTab = document.querySelector(`[data-tab="${tabName}"]`);
    const selectedContent = document.getElementById(tabName);
    
    if (selectedTab && selectedContent) {
        selectedTab.classList.add('active');
        selectedContent.classList.add('active');
    }
}

// Search functionality
searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// Quick link buttons
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('quick-link-btn')) {
        const url = e.target.getAttribute('data-url');
        if (url) {
            searchInput.value = url;
            performSearch();
        }
    }
});

function performSearch() {
    const query = searchInput.value.trim();
    
    if (!query) {
        showNotification('Please enter a URL or search query', 'error');
        return;
    }
    
    // Check if it's a URL
    if (isValidURL(query)) {
        loadProxyPage(query);
    } else {
        // Perform Google search
        const searchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        loadProxyPage(searchURL);
    }
}

function isValidURL(string) {
    try {
        // Check if it starts with http:// or https://
        if (string.startsWith('http://') || string.startsWith('https://')) {
            new URL(string);
            return true;
        }
        
        // Check if it's a domain-like string (contains a dot and no spaces)
        if (string.includes('.') && !string.includes(' ')) {
            new URL('https://' + string);
            return true;
        }
        
        return false;
    } catch {
        return false;
    }
}

function loadProxyPage(url) {
    // Ensure URL has protocol
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }
    
    // Switch to search tab and load content
    switchTab('search');
    
    const searchContent = document.getElementById('search');
    searchContent.innerHTML = `
        <iframe src="/proxy/web?url=${encodeURIComponent(url)}" frameborder="0" class="proxy-frame"></iframe>
    `;
    
    updateStatus('Loading...', 'loading');
    
    // Check if iframe loaded successfully
    const iframe = searchContent.querySelector('iframe');
    iframe.onload = () => {
        updateStatus('Connected', 'success');
    };
    
    iframe.onerror = () => {
        updateStatus('Connection Error', 'error');
        showNotification('Failed to load the page. Some sites may block proxy access.', 'error');
    };
}

function updateStatus(message, type) {
    statusElement.textContent = message;
    
    // Remove any existing status classes
    statusElement.className = '';
    
    // Add appropriate class based on type
    if (type === 'success') {
        statusElement.style.color = 'var(--neon-cyan)';
    } else if (type === 'error') {
        statusElement.style.color = '#ff3366';
    } else if (type === 'loading') {
        statusElement.style.color = 'var(--accent-purple)';
    }
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    Object.assign(notification.style, {
        position: 'fixed',
        top: '80px',
        right: '20px',
        padding: '1rem 1.5rem',
        background: type === 'error' ? 'rgba(255, 51, 102, 0.9)' : 'rgba(0, 255, 255, 0.9)',
        color: type === 'error' ? '#fff' : 'var(--dark-bg)',
        borderRadius: '10px',
        fontWeight: 'bold',
        zIndex: '9999',
        boxShadow: type === 'error' ? '0 0 20px rgba(255, 51, 102, 0.5)' : '0 0 20px rgba(0, 255, 255, 0.5)',
        animation: 'slideIn 0.3s ease'
    });
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Check server status on load
async function checkServerStatus() {
    try {
        const response = await fetch('/health');
        const data = await response.json();
        
        if (data.status === 'ok') {
            updateStatus('Connected', 'success');
        }
    } catch (error) {
        updateStatus('Server Offline', 'error');
    }
}

// Initialize
checkServerStatus();

// Periodically check status
setInterval(checkServerStatus, 30000); // Check every 30 seconds

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
    
    // Ctrl/Cmd + 1-8 to switch tabs
    if ((e.ctrlKey || e.metaKey) && e.key >= '1' && e.key <= '8') {
        e.preventDefault();
        const tabIndex = parseInt(e.key) - 1;
        const tabsArray = Array.from(tabs);
        if (tabsArray[tabIndex]) {
            tabsArray[tabIndex].click();
        }
    }
});

// Welcome message
console.log('%c❄️ POLAR PROXY', 'color: #00ffff; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px #00ffff;');
console.log('%cNext-Level Neon Gateway!', 'color: #b8c5d6; font-size: 14px;');

// Cursor Trail Effect
let cursorTrail = [];
const maxTrailLength = 20;

document.addEventListener('mousemove', (e) => {
    // Create trail particle
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    
    Object.assign(trail.style, {
        position: 'fixed',
        left: e.clientX + 'px',
        top: e.clientY + 'px',
        width: '8px',
        height: '8px',
        background: '#00ffff',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: '9997',
        boxShadow: '0 0 10px #00ffff',
        animation: 'fadeTrail 0.5s ease-out forwards'
    });
    
    document.body.appendChild(trail);
    cursorTrail.push(trail);
    
    // Remove old trails
    if (cursorTrail.length > maxTrailLength) {
        const oldTrail = cursorTrail.shift();
        oldTrail.remove();
    }
    
    setTimeout(() => trail.remove(), 500);
});
