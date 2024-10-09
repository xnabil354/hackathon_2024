const withPWA = require('@ducanh2912/next-pwa').default({
    dest: 'public',
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNav: true,
    reloadOnOnlineNav: true,
    swcMinify: true,
    register: true,
    skipWaiting: true,
    disable: false,
    workboxOptions: {
      disableDevLogs: true,
    },
  });

const nextConfig = {
    images: {
        domains: ['c.top4top.io', 'placehold.co', 'l.top4top.io', 'j.top4top.io', 'k.top4top.io', 'a.top4top.io', 'g.top4top.io', 'h.top4top.io', 'i.top4top.io', 'f.top4top.io', 'e.top4top.io', 'd.top4top.io']
    }
};

module.exports = withPWA(nextConfig);
