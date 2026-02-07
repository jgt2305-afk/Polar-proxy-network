const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.static('public'));

// Proxy configurations for different services
const proxyConfigs = {
  google: {
    target: 'https://www.google.com',
    changeOrigin: true,
    pathRewrite: { '^/proxy/google': '' }
  },
  youtube: {
    target: 'https://www.youtube.com',
    changeOrigin: true,
    pathRewrite: { '^/proxy/youtube': '' }
  },
  github: {
    target: 'https://github.com',
    changeOrigin: true,
    pathRewrite: { '^/proxy/github': '' }
  },
  discord: {
    target: 'https://discord.com',
    changeOrigin: true,
    pathRewrite: { '^/proxy/discord': '' }
  },
  spotify: {
    target: 'https://open.spotify.com',
    changeOrigin: true,
    pathRewrite: { '^/proxy/spotify': '' }
  }
};

// Setup proxy routes
Object.keys(proxyConfigs).forEach(service => {
  app.use(`/proxy/${service}`, createProxyMiddleware(proxyConfigs[service]));
});

// Generic web proxy
app.use('/proxy/web', createProxyMiddleware({
  target: '',
  changeOrigin: true,
  router: (req) => {
    const url = req.query.url || req.headers['x-target-url'];
    return url;
  },
  pathRewrite: { '^/proxy/web': '' },
  onProxyReq: (proxyReq, req, res) => {
    proxyReq.setHeader('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
  }
}));

// Serve main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`❄️  Polar Proxy running on port ${PORT}`);
  console.log(`🔗 Access at: http://localhost:${PORT}`);
});
