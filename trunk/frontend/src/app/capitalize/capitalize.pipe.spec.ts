import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizePipe();
    expect(pipe).toBeTruthy();
  });

  it('test transform', () => {
    const pipe = new CapitalizePipe();
    expect(pipe.transform('jAMES')).toBe('James');
  });
});
