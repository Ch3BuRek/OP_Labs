'use strict';

const phoneBook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Gaius Julius', phone: '+380667778899' },
  { name: 'Lucius Annaeus', phone: '+380501234567' },
];

const findPhoneByName1 = (name) => {
  for (const entry of phoneBook) {
    if (entry.name === name) {
      return entry.phone;
    }
  }
  return 'Контакт не найден';
}

console.log(findPhoneByName1('Gaius Julius'));

const phoneBookHash = {
  'Marcus Aurelius': '+380445554433',
  'Gaius Julius': '+380667778899',
  'Lucius Annaeus': '+380501234567',
};

const findPhoneByName2 = (name) => {
  return phoneBookHash[name] || 'Контакт не найден';
}

console.log(findPhoneByName2('Marcus Aurelius'));
