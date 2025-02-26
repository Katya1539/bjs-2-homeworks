function parseCount(value) {
  const parsedValue = Number.parseFloat(value);

  if (Number.isNaN(parsedValue)) {
    throw new Error('Невалидное значение');
  }

  return parsedValue;
  
}

const parsedValue = parseCount('42.2');
console.log(typeof parsedValue);

function validateCount(value) {
  try {
    const parsedValue = parseCount(value);

    return parsedValue;
  } catch (error) {

    return error;
  }
}

const invalidValue = validateCount('string');
console.log(invalidValue.message);﻿
