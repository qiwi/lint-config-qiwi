import { execSync } from 'child_process'
import { resolve } from 'path'
import {
  copyFileSync,
  readFileSync,
  mkdirSync,
  rmdirSync,
  existsSync,
} from 'fs'

describe('', () => {
  const tmpDir = '../../../../../tmp'
  beforeAll(() => {
    if (existsSync(resolve(__dirname, tmpDir))) {
      rmdirSync(resolve(__dirname, tmpDir), { recursive: true })
    }
    mkdirSync(resolve(__dirname, '../../../../../tmp'))
  })

  it('', async () => {
    const configPath = resolve(__dirname, '../../main/js/index.js')

    const input = resolve(__dirname, '../fixtures/input.ts')
    const output = resolve(__dirname, '../fixtures/output.ts')
    const temp = resolve(__dirname, '../../../../../tmp/index.ts')

    copyFileSync(input, temp)

    execSync(`prettier --config ${configPath} --write ${temp}`)

    expect(readFileSync(temp, 'utf-8')).toBe(readFileSync(output, 'utf-8'))
  })
})
