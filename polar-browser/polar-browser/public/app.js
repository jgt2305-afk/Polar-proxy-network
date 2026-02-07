// Movies Database
const moviesDatabase = [
    {title: "The Polar Express", url: "https://drive.google.com/file/d/0B1j88lrqI04beE5Wa0Y3OVBFMUU/view?resourcekey=0-GszVvGJigG07BTSjUsAWig"},
    {title: "Frosty's Winter Wonderland", url: "https://drive.google.com/file/d/0B1j88lrqI04beVJqY0RmZkZhWG8/view?resourcekey=0-99H-s3a6M3UcuH-rh8MeRA"},
    {title: "The SpongeBob SquarePants Movie (2004)", url: "https://drive.google.com/file/d/11mVla6Y3qLX4pplfnxMavSczJ200_8dl/view"},
    {title: "Hotel Transylvania 3", url: "https://drive.google.com/file/d/1aS3rHee1w5zNTGGmSFM57DSVlC1hSvIs/view"},
    {title: "Garfield & Friends", url: "https://drive.google.com/drive/folders/1u9Pr61UADQ2cTYvkIkqpEjCzJf9bM9Ic", type: "series"},
    {title: "The CupHead Show", url: "https://drive.google.com/drive/folders/1j_K1YV4w_sHAzwEAaUMl-qSk4qjrYSJ_", type: "series"},
    {title: "SpongeBob: Sponge Out of Water", url: "https://drive.google.com/file/d/1YasC1VXzjwNrR-gYL71waDSV8YK7zdTO/view"},
    {title: "Plankton! The Movie", url: "https://drive.google.com/file/d/1lWqkPZ9BmdZhhRnrBz2WwcnAoL3Bn6WI/view"},
    {title: "Saving Bikini Bottom", url: "https://drive.google.com/file/d/17fAM9sipu3BPElFpqFrG3ukYahbUEZQJ/view"},
    {title: "Woody Woodpecker Goes to Camp", url: "https://drive.google.com/file/d/1rbeUdLuf25ywVxfbP42JDQuvFIoHqGkQ/view"},
    {title: "The Smurfs 2", url: "https://drive.google.com/file/d/1FYgtU8rAKF32RjDRgYqODXzOHV0mQuBy/view"},
    {title: "The LEGO Movie", url: "https://drive.google.com/file/d/1-qYoH6b8KPyMpSlTwGKiWQHy4nDb3HoZ/view"},
    {title: "Barnyard", url: "https://drive.google.com/file/d/13vr6oItxZTevki51R9LIiG5bY_2heFSB/view"},
    {title: "Penguins of Madagascar", url: "https://drive.google.com/file/d/1FhmVu6-NhOXoY12O7qbmLfpugGU2GtVR/view"},
    {title: "Alvin and the Chipmunks", url: "https://drive.google.com/file/d/1uCRRJZj1GAaweX996uHbF2zxPoessmGW/view"},
    {title: "Alvin: Squeakuel", url: "https://drive.google.com/file/d/1em55qHTtdrWD4Dox9CXs9r1042TLu_cu/view"},
    {title: "Alvin: Chipwrecked", url: "https://drive.google.com/file/d/1LTKy48IbusfXsl5nSNDTd0M3A8B3aPke/view"},
    {title: "A Goofy Movie", url: "https://drive.google.com/file/d/1ify_EMaQW-ZAn2F0STztn2AGU-jE7aHL/view"},
    {title: "Good Burger", url: "https://drive.google.com/file/d/1jucPocCb8aq23Bh-GFLcniAk-k5UU-wC/view"},
    {title: "Good Burger 2", url: "https://drive.google.com/file/d/1TOjPbqSF5UqnPrn1zFqEWvkUeBNiyMax/view"},
    {title: "Mean Girls", url: "https://drive.google.com/file/d/1Hab49OuPK37MngOtQolLsVIzJ4AK9cNA/view"},
    {title: "Henry Danger: The Movie", url: "https://drive.google.com/file/d/1RKY4IZ77naupHixUf6QTMJiVUeBxeOFO/view"},
    {title: "Ghostbusters II", url: "https://drive.google.com/file/d/1VPN-P5xWjbEHv-VtlzjryjyV-nx7Z_w_/view"},
    {title: "Santa Claus Is Comin' to Town", url: "https://drive.google.com/file/d/1cDy0ctB5vWHQncktpH3lcR0k0HNQXF2A/view"},
    {title: "Diary of a Wimpy Kid: Dog Days", url: "https://docs.google.com/file/d/0B6fv-OkwXRTzZ090UHlWcHY2dkk/preview?resourcekey=0-TgoMzBEyMorySYhDqB9uGA"},
    {title: "Elf", url: "https://drive.google.com/file/d/1-cJP_6uvuboesHkiYPgfIg49eKvsBsF0/view"},
    {title: "Looney Tunes: Back in Action", url: "https://drive.google.com/file/d/1PA5vcjbxZ9114U77pV4canJ_7xNwMhHm/view"},
    {title: "Gremlins 2", url: "https://drive.google.com/file/d/1rrs7I7yn1V2HJdQHooGhnpI-yVwYccj6/view"},
    {title: "Ted", url: "https://drive.google.com/file/d/1L2VeVmHqz7ORuLVsjUgRyxCwxYJUIDK1/view"},
    {title: "Ted 2", url: "https://drive.google.com/file/d/1NUcOKG5lw0wOApPIBMyVAZgsHMti7OfB/view"},
    {title: "Harry Potter and the Sorcerer's Stone", url: "https://drive.google.com/file/d/1bJMKhvzwuVfAYECLheyA_h38T9oYvkgX/view"},
    {title: "Harry Potter and the Chamber of Secrets", url: "https://drive.google.com/file/d/1AC6j5pNVDl6fcvdT3e3hsAUkkBU-o3xD/view"},
    {title: "Harry Potter and the Prisoner of Azkaban", url: "https://drive.google.com/file/d/1Zu15ykGtc1xxKIKfAeUV_L1vAbCt--zO/view"},
    {title: "Harry Potter and the Goblet of Fire", url: "https://drive.google.com/file/d/1yYxqmSv99zFBsJkT0cZYd4C4PTNC9bUU/view"},
    {title: "Harry Potter and the Order of the Phoenix", url: "https://drive.google.com/file/d/1eVK_s8Sp-Gvv1J65ocyLbwyqC7vkuoFK/view"},
    {title: "Harry Potter and the Half-Blood Prince", url: "https://drive.google.com/file/d/1QfAnvJtU3oR7IV2CrN2qRx4vFThjbbe1/view"},
    {title: "Harry Potter and the Deathly Hallows Part 1", url: "https://drive.google.com/file/d/17UlhT2qVX10O8AksEEdWuaUqoVF78-oH/view"},
    {title: "Harry Potter and the Deathly Hallows Part 2", url: "https://drive.google.com/file/d/16jXkeJny6L8MrC_7issz4AtANAzNDJqw/view"},
    {title: "Transformers: Age of Extinction", url: "https://drive.google.com/file/d/1evgnLc_0TRlHQ8_tcMcZYaYY-2_RmKWZ/view"},
    {title: "Stranger Things S1", url: "https://drive.google.com/drive/folders/1ivEnKhKMN0sZzWhp-L6VgT-7PRi1iYFY", type: "series"},
    {title: "Stranger Things S2", url: "https://drive.google.com/drive/folders/1NmYcLFjMT3ZkD8SV_oKmPQbz4AzlG_jy", type: "series"},
    {title: "Stranger Things S3", url: "https://drive.google.com/drive/folders/1BWKjz8w-faHKtWl1qSf0pyaRhreoAXVP", type: "series"},
    {title: "Stranger Things S4", url: "https://drive.google.com/drive/folders/1aO-IcC1Rmr7d-hDsfCVXLg97QkzzBptz", type: "series"},
    {title: "Avengers: Endgame", url: "https://drive.google.com/file/d/1UsxNtlBxGFp955GwEB-s8wYJCA6bXt7e/view"},
    {title: "Back to the Future", url: "https://drive.google.com/file/d/1ZwP0FLdFdAoeskqGvQYX5CwqEeSFWS1G/view"},
    {title: "Finding Nemo", url: "https://drive.google.com/file/d/11CN0fT7CwCHgz__mY4FWjcoT5w_wZD9S/view"},
    {title: "Finding Dory", url: "https://drive.google.com/file/d/1uDOp65KtEnID520JjNC_kMOm91mNfGq6/view"},
    {title: "Spider-Man: Homecoming", url: "https://drive.google.com/file/d/1I9PYrrRLo1m_5Wtfq59L6gHGa3NaUXDv/view"},
    {title: "Spider-Man: Far From Home", url: "https://drive.google.com/file/d/1YFUpSLmxb6xIlbdJXScIkRYvwYxvJ_18/view"},
    {title: "Spider-Man: No Way Home", url: "https://drive.google.com/file/d/1oddQM8w-8UqQIvB-fPpy1h-7xvAbklmA/view"},
    {title: "The Super Mario Bros. Movie", url: "https://drive.google.com/file/d/1OsyF2LKJqjtv0b2Xd9GWOLcYkzny3VZo/view?t=4"},
    {title: "Home Alone", url: "https://drive.google.com/file/d/18YKNCTokG3B7ZWzCE3thunyDJMktLxnm/view"},
    {title: "Home Alone 2", url: "https://drive.google.com/file/d/1Aj4Ys3ofogKhxEAMh6PUncpYF_OHZ_ZK/view"},
    {title: "Moana", url: "https://drive.google.com/file/d/1EsX8k7nfYQrzC6apqJqnyfH7HLAHl31G/view"},
    {title: "Moana 2", url: "https://drive.google.com/file/d/1iVJq1FsNG577gesP7CaTWPLgdqAtnaEg/view"},
    {title: "Five Nights at Freddy's", url: "https://drive.google.com/file/d/1OyO1OdhtfwR883Uvi0QPP5iooGcxTVSY/view"},
    {title: "The Goonies", url: "https://drive.google.com/file/d/18sSKADZamG3w8ZaanP93XU4yHSVKzApM/view?t=4221"},
    {title: "Deadpool", url: "https://drive.google.com/file/d/17QTeEVPc-E4YsWm-tQ4toG-DpLefpx4E/view?t=19"},
    {title: "Despicable Me 4", url: "https://drive.google.com/file/d/1siki1wYP3LpfjFpUT8Z9lJuJzl7MdBhX/view?t=3"},
    {title: "The Garfield Movie", url: "https://drive.google.com/file/d/1W0OfyIS_7f0DKjC6x1bVLI4WBFabZXis/view"},
    {title: "Top Gun: Maverick", url: "https://drive.google.com/file/d/1nmGDHktR96jkaYl2lf-d-XTtNtFh4PTv/view"},
    {title: "Avengers: Infinity War", url: "https://drive.google.com/file/d/1zpl7Dngm7ESW_yLZvcQMm9AhmR1izyus/view?t=2204"},
    {title: "Star Wars Episode IV", url: "https://drive.google.com/file/d/1aiJD6uDyAq9fQN2prN50djHHxmjTwQOC/view"},
    {title: "Murder Drones", url: "https://drive.google.com/drive/folders/1QAiFXO6iG-IB2A2oGModfBP74aVHa6S8?usp=drive_link", type: "series"},
    {title: "Halloween Kills", url: "https://drive.google.com/file/d/1CdhzdqiTQvWMCvmLE_zFLuc2jHvTMqq8/view?t=3"},
    {title: "Halloween Ends", url: "https://drive.google.com/file/d/1Lsjj8VceEJMM4mvav7WOwhAH1X56-woA/view"},
    {title: "TRON", url: "https://drive.google.com/file/d/1hbhWcI11gA5EcXAxXGJkIjzq7VQIpZGp/view"},
    {title: "Bee Movie", url: "https://drive.google.com/file/d/1AiuhAubyrKVmqpu3OfM1sonhRJrzw5v6/view"},
    {title: "A Bug's Life", url: "https://drive.google.com/file/d/1AIq4OqiMWiY9zZSayF5VID7pfTwSH6BM/view"},
    {title: "Inside Out", url: "https://drive.google.com/file/d/1e0OdhlzTKWie6TDXNDOKjKYXbfYfmz6t/view?t=3777"},
    {title: "Avatar", url: "https://drive.google.com/file/d/16tKuEYtxi7EeKtX3yZZR-nXgZ_oGTxXS/view"},
    {title: "Goofy", url: "https://drive.google.com/file/d/1e4NzmeC84qest_9Wzmtvmi80brGPYnsN/view"}
];

// Games Database (sample - you can add actual game URLs)
const gamesDatabase = [
    {title: "Minecraft Classic", url: "https://classic.minecraft.net/", icon: "🧱", description: "Classic block-building game"},
    {title: "2048", url: "https://play2048.co/", icon: "🎯", description: "Addictive puzzle game"},
    {title: "Tetris", url: "https://tetris.com/play-tetris", icon: "🟦", description: "Classic block puzzle"},
    {title: "Chess", url: "https://www.chess.com/play/computer", icon: "♟️", description: "Play chess online"},
    {title: "Cookie Clicker", url: "https://orteil.dashnet.org/cookieclicker/", icon: "🍪", description: "Incremental clicking game"},
    {title: "Slither.io", url: "https://slither.io/", icon: "🐍", description: "Snake multiplayer game"},
    {title: "Agar.io", url: "https://agar.io/", icon: "⚪", description: "Multiplayer cell game"},
    {title: "Run 3", url: "https://www.coolmathgames.com/0-run-3", icon: "🏃", description: "Endless runner in space"},
    {title: "Subway Surfers", url: "https://poki.com/en/g/subway-surfers", icon: "🚇", description: "Run and dodge trains"},
    {title: "Temple Run 2", url: "https://poki.com/en/g/temple-run-2", icon: "🏛️", description: "Run through ancient temple"},
    {title: "Geometry Dash", url: "https://scratch.mit.edu/projects/105500895/", icon: "📐", description: "Rhythm-based platformer"},
    {title: "Crossy Road", url: "https://poki.com/en/g/crossy-road", icon: "🐔", description: "Cross the road arcade"},
    {title: "Flappy Bird", url: "https://flappybird.io/", icon: "🐦", description: "Tap to fly through pipes"},
    {title: "Pac-Man", url: "https://www.google.com/logos/2010/pacman10-i.html", icon: "👾", description: "Classic arcade game"},
    {title: "Snake", url: "https://playsnake.org/", icon: "🐍", description: "Classic snake game"}
];

// Web Apps Database
const webAppsDatabase = [
    {title: "YouTube", url: "https://www.youtube.com", icon: "▶️", description: "Video streaming platform"},
    {title: "GitHub", url: "https://github.com", icon: "🐙", description: "Code hosting platform"},
    {title: "Discord", url: "https://discord.com", icon: "💬", description: "Chat & community"},
    {title: "Reddit", url: "https://reddit.com", icon: "🤖", description: "Social news & discussion"},
    {title: "Spotify", url: "https://open.spotify.com", icon: "🎵", description: "Music streaming"},
    {title: "Twitter", url: "https://twitter.com", icon: "🐦", description: "Social media platform"},
    {title: "Twitch", url: "https://www.twitch.tv", icon: "📺", description: "Live streaming platform"},
    {title: "Netflix", url: "https://www.netflix.com", icon: "🎥", description: "Movie & TV streaming"},
    {title: "Gmail", url: "https://mail.google.com", icon: "📧", description: "Email service"},
    {title: "Google Drive", url: "https://drive.google.com", icon: "💾", description: "Cloud storage"},
    {title: "Canva", url: "https://www.canva.com", icon: "🎨", description: "Graphic design tool"},
    {title: "Figma", url: "https://www.figma.com", icon: "✏️", description: "Design & prototyping"},
    {title: "Notion", url: "https://www.notion.so", icon: "📝", description: "Note-taking & workspace"},
    {title: "Trello", url: "https://trello.com", icon: "📋", description: "Project management"},
    {title: "Slack", url: "https://slack.com", icon: "💼", description: "Team communication"},
    {title: "Zoom", url: "https://zoom.us", icon: "📹", description: "Video conferencing"}
];

// Partners Database
const partnersDatabase = [
    {title: "Google", url: "https://www.google.com", icon: "🔍", description: "Search engine"},
    {title: "Wikipedia", url: "https://www.wikipedia.org", icon: "📚", description: "Free encyclopedia"},
    {title: "Stack Overflow", url: "https://stackoverflow.com", icon: "💻", description: "Developer Q&A"},
    {title: "W3Schools", url: "https://www.w3schools.com", icon: "🎓", description: "Web tutorials"},
    {title: "MDN Web Docs", url: "https://developer.mozilla.org", icon: "🌐", description: "Web documentation"},
    {title: "CodePen", url: "https://codepen.io", icon: "✍️", description: "Code playground"},
    {title: "JSFiddle", url: "https://jsfiddle.net", icon: "🔧", description: "Code testing tool"}
];

// Browser State
let tabs = [];
let activeTabId = 0;
let tabCounter = 1;
let browserHistory = [];
let historyIndex = -1;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeBrowser();
    loadContent();
    setupEventListeners();
    checkServerStatus();
});

function initializeBrowser() {
    // Create initial tab
    tabs.push({
        id: 0,
        title: 'Front Page',
        url: '',
        page: 'frontpage',
        icon: '🏠'
    });
}

function setupEventListeners() {
    // Browser controls
    document.getElementById('backBtn').addEventListener('click', goBack);
    document.getElementById('forwardBtn').addEventListener('click', goForward);
    document.getElementById('refreshBtn').addEventListener('click', refresh);
    document.getElementById('homeBtn').addEventListener('click', goHome);
    document.getElementById('newTabBtn').addEventListener('click', createNewTab);
    
    // Search
    document.getElementById('searchBtn').addEventListener('click', performSearch);
    document.getElementById('urlInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
    
    document.getElementById('mainSearchBtn').addEventListener('click', performMainSearch);
    document.getElementById('mainSearch').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performMainSearch();
    });
    
    // Sidebar navigation
    document.querySelectorAll('.sidebar-btn[data-page]').forEach(btn => {
        btn.addEventListener('click', () => {
            const page = btn.getAttribute('data-page');
            navigateToPage(page);
            updateSidebarActive(btn);
        });
    });
    
    // Quick apps
    document.querySelectorAll('.sidebar-btn[data-app]').forEach(btn => {
        btn.addEventListener('click', () => {
            const app = btn.getAttribute('data-app');
            openApp(app);
        });
    });
    
    // App tiles
    document.querySelectorAll('.app-tile').forEach(tile => {
        tile.addEventListener('click', () => {
            const url = tile.getAttribute('data-url');
            loadProxyPage(url);
        });
    });
    
    // Search filters
    const gameSearch = document.getElementById('gameSearch');
    if (gameSearch) {
        gameSearch.addEventListener('input', (e) => filterGames(e.target.value));
    }
    
    const movieSearch = document.getElementById('movieSearch');
    if (movieSearch) {
        movieSearch.addEventListener('input', (e) => filterMovies(e.target.value));
    }
    
    // Click effects
    document.addEventListener('click', (e) => {
        if (e.target.closest('button, .app-tile, .content-card, .sidebar-btn')) {
            createExplosion(e.clientX, e.clientY);
        }
    });
}

function loadContent() {
    renderGames();
    renderMovies();
    renderApps();
    renderPartners();
}

function renderGames() {
    const gamesList = document.getElementById('gamesList');
    gamesList.innerHTML = gamesDatabase.map(game => `
        <div class="content-card" onclick="loadGame('${game.url}', '${game.title}')">
            <span class="card-icon">${game.icon}</span>
            <div class="card-title">${game.title}</div>
            <div class="card-description">${game.description}</div>
            <span class="card-type">Game</span>
        </div>
    `).join('');
}

function renderMovies() {
    const moviesList = document.getElementById('moviesList');
    moviesList.innerHTML = moviesDatabase.map(movie => `
        <div class="content-card" onclick="loadMovie('${movie.url}', '${movie.title}')">
            <span class="card-icon">🎬</span>
            <div class="card-title">${movie.title}</div>
            <div class="card-description">${movie.type === 'series' ? 'TV Series' : 'Movie'}</div>
            <span class="card-type">${movie.type === 'series' ? 'Series' : 'Movie'}</span>
        </div>
    `).join('');
}

function renderApps() {
    const appsList = document.getElementById('appsList');
    appsList.innerHTML = webAppsDatabase.map(app => `
        <div class="content-card" onclick="loadProxyPage('${app.url}')">
            <span class="card-icon">${app.icon}</span>
            <div class="card-title">${app.title}</div>
            <div class="card-description">${app.description}</div>
            <span class="card-type">Web App</span>
        </div>
    `).join('');
}

function renderPartners() {
    const partnersList = document.getElementById('partnersList');
    partnersList.innerHTML = partnersDatabase.map(partner => `
        <div class="content-card" onclick="loadProxyPage('${partner.url}')">
            <span class="card-icon">${partner.icon}</span>
            <div class="card-title">${partner.title}</div>
            <div class="card-description">${partner.description}</div>
            <span class="card-type">Partner</span>
        </div>
    `).join('');
}

function filterGames(query) {
    const filtered = gamesDatabase.filter(game => 
        game.title.toLowerCase().includes(query.toLowerCase())
    );
    const gamesList = document.getElementById('gamesList');
    gamesList.innerHTML = filtered.map(game => `
        <div class="content-card" onclick="loadGame('${game.url}', '${game.title}')">
            <span class="card-icon">${game.icon}</span>
            <div class="card-title">${game.title}</div>
            <div class="card-description">${game.description}</div>
            <span class="card-type">Game</span>
        </div>
    `).join('');
}

function filterMovies(query) {
    const filtered = moviesDatabase.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase())
    );
    const moviesList = document.getElementById('moviesList');
    moviesList.innerHTML = filtered.map(movie => `
        <div class="content-card" onclick="loadMovie('${movie.url}', '${movie.title}')">
            <span class="card-icon">🎬</span>
            <div class="card-title">${movie.title}</div>
            <div class="card-description">${movie.type === 'series' ? 'TV Series' : 'Movie'}</div>
            <span class="card-type">${movie.type === 'series' ? 'Series' : 'Movie'}</span>
        </div>
    `).join('');
}

function navigateToPage(page) {
    // Hide all pages
    document.querySelectorAll('.page-content').forEach(p => p.classList.add('hidden'));
    
    // Show selected page
    const selectedPage = document.getElementById(page);
    if (selectedPage) {
        selectedPage.classList.remove('hidden');
    }
    
    // Update active tab info
    const currentTab = tabs.find(t => t.id === activeTabId);
    if (currentTab) {
        currentTab.page = page;
        currentTab.title = page.charAt(0).toUpperCase() + page.slice(1);
        updateTabDisplay();
    }
}

function updateSidebarActive(clickedBtn) {
    document.querySelectorAll('.sidebar-btn').forEach(btn => btn.classList.remove('active'));
    clickedBtn.classList.add('active');
}

function openApp(appName) {
    const appUrls = {
        youtube: 'https://www.youtube.com',
        github: 'https://github.com',
        discord: 'https://discord.com',
        reddit: 'https://reddit.com',
        spotify: 'https://open.spotify.com'
    };
    
    const url = appUrls[appName];
    if (url) {
        loadProxyPage(url);
    }
}

function loadGame(url, title) {
    createOrUpdateTab(title, url, '🎮', 'game');
    loadIframe(url);
}

function loadMovie(url, title) {
    createOrUpdateTab(title, url, '🎬', 'movie');
    // Convert Google Drive URL to embeddable format
    const embedUrl = convertToEmbedUrl(url);
    loadIframe(embedUrl);
}

function convertToEmbedUrl(url) {
    // Convert Google Drive view links to embed links
    if (url.includes('drive.google.com/file/d/')) {
        const fileId = url.match(/\/d\/([^/]+)/)[1];
        return `https://drive.google.com/file/d/${fileId}/preview`;
    } else if (url.includes('drive.google.com/drive/folders/')) {
        return url; // Folder links stay as is
    } else if (url.includes('docs.google.com/file/d/')) {
        const fileId = url.match(/\/d\/([^/]+)/)[1];
        return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    return url;
}

function loadIframe(url) {
    const activeContent = document.querySelector('.tab-content-container.active');
    if (activeContent) {
        activeContent.innerHTML = `<iframe src="${url}" class="proxy-frame" frameborder="0" allowfullscreen></iframe>`;
        updateStatus('Loading...', 'loading');
        
        const iframe = activeContent.querySelector('iframe');
        iframe.onload = () => updateStatus('Connected', 'success');
        iframe.onerror = () => updateStatus('Connection Error', 'error');
    }
}

function performSearch() {
    const query = document.getElementById('urlInput').value.trim();
    if (!query) return;
    
    if (isValidURL(query)) {
        loadProxyPage(query);
    } else {
        const searchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        loadProxyPage(searchURL);
    }
}

function performMainSearch() {
    const query = document.getElementById('mainSearch').value.trim();
    if (!query) return;
    
    document.getElementById('urlInput').value = query;
    performSearch();
}

function loadProxyPage(url) {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }
    
    const title = new URL(url).hostname.replace('www.', '');
    createOrUpdateTab(title, url, '🌐', 'webpage');
    
    const proxyUrl = `/proxy/web?url=${encodeURIComponent(url)}`;
    loadIframe(proxyUrl);
    
    document.getElementById('urlInput').value = url;
    addToHistory(url);
}

function isValidURL(string) {
    try {
        if (string.startsWith('http://') || string.startsWith('https://')) {
            new URL(string);
            return true;
        }
        if (string.includes('.') && !string.includes(' ')) {
            new URL('https://' + string);
            return true;
        }
        return false;
    } catch {
        return false;
    }
}

function createNewTab() {
    const tabId = tabCounter++;
    tabs.push({
        id: tabId,
        title: 'New Tab',
        url: '',
        page: 'frontpage',
        icon: '🏠'
    });
    
    // Create tab element
    const tabBar = document.getElementById('tabBar');
    const tabElement = document.createElement('div');
    tabElement.className = 'browser-tab';
    tabElement.setAttribute('data-tab-id', tabId);
    tabElement.innerHTML = `
        <span class="tab-icon">🏠</span>
        <span class="tab-title">New Tab</span>
        <button class="tab-close">×</button>
    `;
    
    tabBar.appendChild(tabElement);
    
    // Create tab content
    const contentArea = document.getElementById('contentArea');
    const contentElement = document.createElement('div');
    contentElement.className = 'tab-content-container';
    contentElement.id = `tabContent${tabId}`;
    contentElement.setAttribute('data-tab-id', tabId);
    contentElement.innerHTML = document.getElementById('tabContent0').innerHTML;
    
    contentArea.appendChild(contentElement);
    
    // Setup tab click handler
    tabElement.addEventListener('click', (e) => {
        if (!e.target.classList.contains('tab-close')) {
            switchTab(tabId);
        }
    });
    
    // Setup close handler
    tabElement.querySelector('.tab-close').addEventListener('click', (e) => {
        e.stopPropagation();
        closeTab(tabId);
    });
    
    switchTab(tabId);
    updateTabCount();
}

function createOrUpdateTab(title, url, icon, type) {
    const currentTab = tabs.find(t => t.id === activeTabId);
    if (currentTab) {
        currentTab.title = title;
        currentTab.url = url;
        currentTab.icon = icon;
        currentTab.type = type;
        updateTabDisplay();
    }
}

function updateTabDisplay() {
    const currentTab = tabs.find(t => t.id === activeTabId);
    if (currentTab) {
        const tabElement = document.querySelector(`.browser-tab[data-tab-id="${activeTabId}"]`);
        if (tabElement) {
            tabElement.querySelector('.tab-icon').textContent = currentTab.icon;
            tabElement.querySelector('.tab-title').textContent = currentTab.title;
        }
    }
}

function switchTab(tabId) {
    activeTabId = tabId;
    
    // Update tab visual
    document.querySelectorAll('.browser-tab').forEach(tab => {
        tab.classList.remove('active');
        if (parseInt(tab.getAttribute('data-tab-id')) === tabId) {
            tab.classList.add('active');
        }
    });
    
    // Update content
    document.querySelectorAll('.tab-content-container').forEach(content => {
        content.classList.remove('active');
        if (parseInt(content.getAttribute('data-tab-id')) === tabId) {
            content.classList.add('active');
        }
    });
    
    // Update URL bar
    const currentTab = tabs.find(t => t.id === tabId);
    if (currentTab && currentTab.url) {
        document.getElementById('urlInput').value = currentTab.url;
    } else {
        document.getElementById('urlInput').value = '';
    }
}

function closeTab(tabId) {
    if (tabs.length === 1) return; // Don't close last tab
    
    // Remove tab from array
    tabs = tabs.filter(t => t.id !== tabId);
    
    // Remove tab element
    const tabElement = document.querySelector(`.browser-tab[data-tab-id="${tabId}"]`);
    if (tabElement) tabElement.remove();
    
    // Remove content element
    const contentElement = document.getElementById(`tabContent${tabId}`);
    if (contentElement) contentElement.remove();
    
    // Switch to another tab if this was active
    if (activeTabId === tabId) {
        const newActiveTab = tabs[tabs.length - 1];
        switchTab(newActiveTab.id);
    }
    
    updateTabCount();
}

function updateTabCount() {
    document.getElementById('tabCount').textContent = `${tabs.length} tab${tabs.length !== 1 ? 's' : ''}`;
}

function goBack() {
    if (historyIndex > 0) {
        historyIndex--;
        loadProxyPage(browserHistory[historyIndex]);
    }
}

function goForward() {
    if (historyIndex < browserHistory.length - 1) {
        historyIndex++;
        loadProxyPage(browserHistory[historyIndex]);
    }
}

function refresh() {
    const activeContent = document.querySelector('.tab-content-container.active iframe');
    if (activeContent) {
        activeContent.src = activeContent.src;
    } else {
        location.reload();
    }
}

function goHome() {
    navigateToPage('frontpage');
    document.getElementById('urlInput').value = '';
}

function addToHistory(url) {
    browserHistory = browserHistory.slice(0, historyIndex + 1);
    browserHistory.push(url);
    historyIndex = browserHistory.length - 1;
}

function updateStatus(message, type) {
    const statusElement = document.getElementById('status');
    statusElement.textContent = message;
    
    if (type === 'success') {
        statusElement.style.color = 'var(--neon-cyan)';
    } else if (type === 'error') {
        statusElement.style.color = '#ff3366';
    } else if (type === 'loading') {
        statusElement.style.color = 'var(--accent-purple)';
    }
}

function createExplosion(x, y) {
    const particleCount = 20;
    const colors = ['#00ffff', '#00cccc', '#0099ff'];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 8 + 4;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = Math.random() * 150 + 80;
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
            boxShadow: `0 0 ${size * 2}px ${color}`,
            animation: `explode 0.8s ease-out forwards`
        });
        
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 800);
    }
    
    // Shockwave
    const shockwave = document.createElement('div');
    Object.assign(shockwave.style, {
        position: 'fixed',
        left: x + 'px',
        top: y + 'px',
        width: '0px',
        height: '0px',
        border: '2px solid #00ffff',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: '99998',
        animation: 'shockwave 0.6s ease-out forwards',
        transform: 'translate(-50%, -50%)'
    });
    
    document.body.appendChild(shockwave);
    setTimeout(() => shockwave.remove(), 600);
}

async function checkServerStatus() {
    try {
        const response = await fetch('/health');
        const data = await response.json();
        if (data.status === 'ok') {
            updateStatus('Ready', 'success');
        }
    } catch (error) {
        updateStatus('Server Offline', 'error');
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 't') {
        e.preventDefault();
        createNewTab();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'w') {
        e.preventDefault();
        if (tabs.length > 1) closeTab(activeTabId);
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
        e.preventDefault();
        document.getElementById('urlInput').focus();
        document.getElementById('urlInput').select();
    }
});

console.log('%c❄️ POLAR BROWSER', 'color: #00ffff; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px #00ffff;');
console.log('%cNext-Level Proxy Browser - Unrestricted Web Access', 'color: #b8c5d6; font-size: 14px;');
