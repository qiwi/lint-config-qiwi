import { execSync } from 'child_process'
import { resolve } from 'path'
import {
  copyFileSync,
  readFileSync,
  mkdirSync,
  rmdirSync,
  existsSync,
} from 'fs'
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

    const input = resolve(__dirname, '../fixtures/input.ts')
    const output = resolve(__dirname, '../fixtures/output.ts')
    const temp = resolve(tmpDir, 'index.ts')

    copyFileSync(input, temp)

    execSync(`prettier --config ${configPath} --write ${temp}`)

    expect(readFileSync(temp, 'utf-8')).toBe(readFileSync(output, 'utf-8'))
  })
})
