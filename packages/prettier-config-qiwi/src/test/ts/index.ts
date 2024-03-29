import { execSync } from 'node:child_process'
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  rmdirSync,
} from 'node:fs'
import { resolve } from 'node:path'

import * as prettierConfig from '../../main/js'

describe('', () => {
  const tmpDir = resolve(__dirname, '../../../../../tmp')

  beforeAll(() => {
    if (existsSync(tmpDir)) {
      rmdirSync(tmpDir, { recursive: true })
    }
    mkdirSync(tmpDir)
  })

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
    const temp = resolve(tmpDir, 'index.ts')

    copyFileSync(input, temp)

    execSync(`${prettier} --config ${configPath} --write ${temp}`)

    expect(readFileSync(temp, 'utf-8')).toBe(readFileSync(output, 'utf-8'))
  })
})
