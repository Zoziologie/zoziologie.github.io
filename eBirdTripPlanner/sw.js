self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    await self.registration.unregister();
    const windows = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const client of windows) {
      const url = new URL(client.url);
      if (url.pathname.startsWith('/eBirdTripPlanner/')) {
        url.pathname = url.pathname.replace('/eBirdTripPlanner/', '/ebird-trip-planner/');
        await client.navigate(url.href);
      }
    }
  })());
});
