import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

import * as prettierConfig from '../../main/js'

describe('', () => {
  it('prettierConfig', () => {
    expect(prettierConfig).toBeDefined()
  })

  it('formats as expected', async () => {
    const configPath = resolve(__dirname, '../../main/js/index.js')

    const prettier = resolve(
      __dirname,
      '../../../../../node_modules/.bin/prettier',
    )
    const input = resolve(__dirname, '../fixtures/input.ts')
    const output = resolve(__dirname, '../fixtures/output.ts')

    const result = execSync(
      `${prettier} --config ${configPath} ${input}`,
    ).toString()

    expect(result).toBe(readFileSync(output, 'utf-8'))
  })
})
