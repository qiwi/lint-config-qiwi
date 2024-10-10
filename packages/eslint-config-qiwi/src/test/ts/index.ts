import { resolve } from 'node:path'

import { generateSnapshot } from '@qiwi/stdstream-snapshot'

import * as config from '../../main/js/index.js'

describe('eslint-config-qiwi (TypeScript)', () => {
  it('config is exposed as js', () => {
    expect(config).toEqual(expect.any(Object))
  })

  it('config works as expected', async () => {
    const configPath = resolve(__dirname, '../../main/js/index.js')
    const rulesPath = resolve(__dirname, 'rules/*.ts')
    const eslint = resolve(__dirname, '../../../../../node_modules/.bin/eslint')
    const result = await generateSnapshot({
      cmd: `NODE_OPTIONS=--trace-deprecation ${eslint} --config ${configPath} ${rulesPath} --no-ignore`,
    })

    expect(result).toMatchSnapshot()
  })
})
