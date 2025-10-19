'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  return ip.split('.').map(Number).reduce((res, value) => (res << 8) + value);
}


console.log('127.0.0.1 ->', ipToInt('127.0.0.1'));
console.log('10.0.0.1 ->', ipToInt('10.0.0.1'));
console.log('192.168.1.10 ->', ipToInt('192.168.1.10'));
console.log('165.225.133.150 ->', ipToInt('165.225.133.150'));
console.log('0.0.0.0 ->', ipToInt('0.0.0.0'));
console.log('8.8.8.8 ->', ipToInt('8.8.8.8'));
