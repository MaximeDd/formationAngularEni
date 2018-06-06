import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizePipe();
    expect(pipe).toBeTruthy();
  });

  it('test CapitalizePipe', () => {
    const pipe = new CapitalizePipe();
    const result = pipe.transform('jeAn-MArc');
    expect(result).toBe('Jean-Marc');
  });
});
