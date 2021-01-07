import {generateSnapshot} from 'stdstream-snapshot'
import {resolve} from 'path'
import * as config from '../../main/js/tslint-config-qiwi.js'

describe('tslint-config-qiwi', () => {
  it('config is exposed as js', () => {
    expect(config).toEqual(expect.any(Object))
  })

  it('config works as expected', async() => {
    const configPath = resolve(__dirname, '../../main/js/tslint-config-qiwi.js')
    const rulesPath = resolve(__dirname, 'rules/*.ts')
    const tsconfigPath = resolve(__dirname, 'tsconfig.json')
    const tslint = require.resolve('tslint/bin/tslint')
    const cmd = `node ${tslint} --config ${configPath} --project ${tsconfigPath} ${rulesPath}`

    const result = await generateSnapshot({
      cmd,
    })

    expect(result).toMatchSnapshot()
  })
})
