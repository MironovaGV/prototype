import Character from '../character';

test('наносимый урон персонажу с положительным остатком здоровья', () => {
  const person = new Character('1234567890', 'Zombie');
  person.damage(5);
  expect(person).toEqual({
    name: '1234567890',
    type: 'Zombie',
    health: 97,
    attack: 10,
    defence: 40,
  });
});

test('наносимый урон персонажу с отрицательным остатком здоровья', () => {
  const person = new Character('1234567890', 'Zombie');
  person.damage(1000);
  expect(person).toEqual({
    name: '1234567890',
    type: 'Zombie',
    health: 0,
    attack: 10,
    defence: 40,
  });
});

test('наносимый уpoн равен 0', () => {
  const person = new Character('1234567890', 'Zombie');
  person.damage(0);
  expect(person).toEqual({
    name: '1234567890',
    type: 'Zombie',
    health: 100,
    attack: 10,
    defence: 40,
  });
});

test('нанесение двойного урона', () => {
  const person = new Character('1234567890', 'Zombie');
  person.damage(1000);
  person.damage(1000);
  expect(person).toEqual({
    name: '1234567890',
    type: 'Zombie',
    health: 0,
    attack: 10,
    defence: 40,
  });
});
