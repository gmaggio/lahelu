/* eslint-disable no-console */
import { networkInterfaces as _networkInterfaces } from 'os';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

// Get the local machine's IP address
const getLocalIp = () => {
  const networkInterfaces = _networkInterfaces();
  let localIp = null;
  Object.entries(networkInterfaces).forEach(([, addresses]) => {
    addresses.forEach((addressInfo) => {
      if (addressInfo.family === 'IPv4' && !addressInfo.internal) {
        localIp = addressInfo.address;
      }
    });
  });
  return localIp;
};

// Get the IP address
const localIp = getLocalIp();
if (!localIp) {
  console.error('Failed to detect local IP address');
  process.exit(1);
}

// Write the IP address to the .env file
const envFilePath = resolve(__dirname, '.env');
const envContent = `API_BASE_URL=http://${localIp}:3001\n`;
writeFileSync(envFilePath, envContent, { encoding: 'utf-8' });

console.log(`Local IP address (${localIp}) written to .env file`);
