import SpeedTest from '@cloudflare/speedtest';

const message: string = 'Hello from TypeScript and Webpack!';
console.log(message);

const speedTest = new SpeedTest();
speedTest.onFinish = results => console.log(results.getSummary());
speedTest.onError = error => console.error(error);
