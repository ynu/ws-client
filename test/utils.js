import { expect } from 'chai';
import { composeData } from '../src/utils';

describe('实用函数', () => {
  it('composeData(data)', () => {
    const data = {
      columns: ['a', 'b', 'c'],
      values: [
        { item: ['a1', 'b1', 'c1'] },
        { item: ['a2', 'b2', 'c2'] },
      ],
    };
    const result = composeData(data);
    expect(result.length).to.eql(2);
    expect(result[0].a).to.eql('a1');
    expect(result[1].c).to.eql('c2');
  });
});
