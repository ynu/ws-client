/*
由于防火墙的限制，此测试程序仅在云南大学校内内运行。
 */

import { expect } from 'chai';
import Client from '../src/client';

describe('YNU WS Client', () => {
  const client = new Client({
    username: 'username',
    password: 'password',
  });

  describe('invoke()', () => {
    it('should get error', async () => {
      const result = await client.invoke('8141', 1, 10, [{ key: 'XXMC', value: '云南大学' }]);
      expect(result.returnCode).to.eql('604002');
    });
  });
});
