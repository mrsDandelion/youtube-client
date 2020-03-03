import { SortPipe } from './sort.pipe';

describe('PipeSortPipe', () => {
  it('create an instance', () => {
    const pipe: SortPipe = new SortPipe();
    expect(pipe).toBeTruthy();
  });
});
