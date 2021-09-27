const text = 'Hello World';
const fruits = ['Apples', 'Cantaloupe', 'Banana'];

test('Debe contener un texto', () => {
  expect(text).toMatch(/World/);
});

test('Do We have a Banana?', () => {
  expect(fruits).toContain('Banana');
});

test('Greater than', () => {
  expect(10).toBeGreaterThan(9)
});

test('Verdadero', () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
  callback ( (str).split('').reverse().join('') ); 
};

test('Probar un Callback', () => {
  reverseString('OSO', (str) => {
    expect(str).toBe('OSO');
  });
});

const reverseString2 = str => {
  return new Promise((resolve, reject) => {
    if ( !str )
      reject(Error('Error'));
    
    resolve( str.split('').reverse().join('') );
  });
};

test('Test promise', () => {
  return reverseString2('Hello')
    .then(string => {
      expect(string).toBe('olleH');
    });
});

test('Testing Async / Await', async () => {
  const string = await reverseString2('Hello');

  expect(string).toBe('olleH');
});

// afterEach(() => console.log('After each Test'));
// afterAll(() => console.log('After All Tests'));

// beforeEach(() => console.log('Before each Test'));
// beforeAll(() => console.log('Before All Tests'));
