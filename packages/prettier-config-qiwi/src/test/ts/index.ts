import {generateSnapshot} from 'stdstream-snapshot'
import { resolve } from 'path'
import { copyFileSync, readFileSync } from 'fs'

describe('', () => {
  it('', async () => {
    const configPath = resolve(__dirname, '../../main/js/index.js')

    const input = resolve(__dirname, '../fixtures/input.ts')
    const output = resolve(__dirname, '../fixtures/output.ts')
    const temp = resolve(__dirname, '../fixtures/temp.ts')

    copyFileSync(input, temp)

    await generateSnapshot({
      cmd: `prettier --config ${configPath} --write ${temp}`
    })

    expect(readFileSync(temp, 'utf-8')).toBe(readFileSync(output, 'utf-8'))
  })
})
