import Daemon from '../daemon';

test('damage getter and setter work correctly', () => {
  const daemon = new Daemon('Ilya');
  daemon.damage = 2;
  const result = daemon.damage;
  expect(result).toBe(90);
});

test('stoned getter and setter work correctly', () => {
  const daemon = new Daemon('Ilya');
  daemon.stoned = 2;
  const result = daemon.stoned;
  expect(result).toBe(85);
});

test('distance greater than 5 cells', () => {
  const daemon = new Daemon('Ilya');
  daemon.damage = 6;
  const result = daemon.damage;
  expect(result).toBe(60);
});

test('minimum distance', () => {
  const daemon = new Daemon('Ilya');
  daemon.damage = 1;
  const result = daemon.damage;
  expect(result).toBe(100);
});

test('wrong data', () => {
  const daemon = new Daemon('Ilya');
  expect(() => { daemon.damage = 0; }).toThrow();
});
