import SpeedTest from '@cloudflare/speedtest';

const message: string = 'Hello from TypeScript and Webpack!';
console.log(message);

new SpeedTest().onFinish = results => console.log(results.getSummary());