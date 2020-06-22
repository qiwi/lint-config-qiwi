import { execSync } from 'child_process'
import { resolve } from 'path'
import { copyFileSync, readFileSync, mkdirSync } from 'fs'

describe('', () => {
  it('', async () => {
    const configPath = resolve(__dirname, '../../main/js/index.js')

    const input = resolve(__dirname, '../fixtures/input.ts')
    const output = resolve(__dirname, '../fixtures/output.ts')
    const temp = resolve(__dirname, '../tmp/index.ts')

    mkdirSync(resolve(__dirname, '../tmp'))
    copyFileSync(input, temp)

    execSync(`prettier --config ${configPath} --write ${temp}`)

    expect(readFileSync(temp, 'utf-8')).toBe(readFileSync(output, 'utf-8'))
  })
})
