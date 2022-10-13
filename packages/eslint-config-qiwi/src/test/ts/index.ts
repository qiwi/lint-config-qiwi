import {generateSnapshot} from '@qiwi/stdstream-snapshot'
import {resolve} from 'path'
import * as config from '../../main/js/eslint-config-qiwi.js'

describe('eslint-config-qiwi (TypeScript)', () => {
  it('config is exposed as js', () => {
    expect(config).toEqual(expect.any(Object))
  })

  it('config works as expected', async () => {
    const configPath = resolve(__dirname, '../../main/js/eslint-config-qiwi.js')
    const rulesPath = resolve(__dirname, 'rules/*.ts')
    const eslint = resolve(__dirname, '../../../../../node_modules/.bin/eslint')
    const result = await generateSnapshot({
      cmd: `${eslint} --config ${configPath} ${rulesPath}`
    })

    expect(result).toMatchSnapshot()
  })
})
