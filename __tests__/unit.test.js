// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('should return true for a valid phone number with area code', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('should return true for a valid phone number with dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('should return false for a phone number with no dashes', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});
test('should return false for a phone number with incorrect formatting', () => {
  expect(isPhoneNumber('123-456-789')).toBe(false);
});

// isEmail
test('should return true for a valid email', () => {
  expect(isEmail('test@example.com')).toBe(true);
});
test('should return true for an email with underscore', () => {
  expect(isEmail('test_user@example.com')).toBe(true);
});
test('should return false for an email without @ symbol', () => {
  expect(isEmail('testexample.com')).toBe(false);
});
test('should return false for an email with no domain', () => {
  expect(isEmail('test@.com')).toBe(false);
});

// isStrongPassword
test('should return true for a valid strong password', () => {
  expect(isStrongPassword('aPassword123')).toBe(true);
});
test('should return true for a password with underscore', () => {
  expect(isStrongPassword('Password_1')).toBe(true);
});
test('should return false for a password that is too short', () => {
  expect(isStrongPassword('a1_')).toBe(false);
});
test('should return false for a password that starts with a number', () => {
  expect(isStrongPassword('1password')).toBe(false);
});

// isDate
test('should return true for a valid date format', () => {
  expect(isDate('01/01/2023')).toBe(true);
});
test('should return true for a date with single digit month/day', () => {
  expect(isDate('1/1/2023')).toBe(true);
});
test('should return false for a date with a two-digit year', () => {
  expect(isDate('01/01/23')).toBe(false);
});
test('should return false for a date with dashes instead of slashes', () => {
  expect(isDate('01-01-2023')).toBe(false);
});

// isHexColor
test('should return true for a 6-digit hex color', () => {
  expect(isHexColor('#aFaFaf')).toBe(true);
});
test('should return true for a 3-digit hex color without hash', () => {
  expect(isHexColor('f00')).toBe(true);
});
test('should return false for an invalid hex character', () => {
  expect(isHexColor('#f0g')).toBe(false);
});
test('should return false for a hex color that is too long', () => {
  expect(isHexColor('#1234567')).toBe(false);
});
