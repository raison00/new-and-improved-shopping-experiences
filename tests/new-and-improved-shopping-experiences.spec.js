import DefaultClass from '../src/new-and-improved-shopping-experiences';

describe('new-and-improved-shopping-experiences', () => {
  let data;

  beforeEach(() => {
    loadFixtures('main.html'); // fixtures/html/main.html becomes your DOM
    data = getJSONFixture('new-and-improved-shopping-experiences.json');
  });

  it('should have tests', () => {
    expect(data).toEqual({ foo: 'bar', abc: 'xyz' });
  });

  it('might have async tests', (done) => {
    Promise.resolve('foobar').then((result) => {
      expect(result).toBe('foobar');
      done();
    });
  });

  it('should test constructor', () => {
    const foo = new DefaultClass();
    expect(foo.example).toEqual('example');
  });
  it('should test init', () => {
    const foo = new DefaultClass();
    expect(foo.example).toEqual('example');
    foo.init();
    expect(foo.example).toEqual('initialized');
  });
});
