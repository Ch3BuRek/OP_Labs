function ages(persons) {
  const result = {};
  
  for (const person in persons) {
    if (persons.hasOwnProperty(person)) {
      const born = persons[person].born;
      const died = persons[person].died;
      result[person] = died - born;
    }
  }
  
  return result;
}

const persons = {
  eisenhower: { born: 1890, died: 1969 },
  patton: { born: 1885, died: 1945 },
  montgomery: { born: 1887, died: 1976 },
  zhukov: { born: 1896, died: 1974 },
  rommel: { born: 1891, died: 1944 },
  himmler: { born: 1900, died: 1945 },
};

console.log(ages(persons));