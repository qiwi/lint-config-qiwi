import * as cp from 'node:child_process'
import * as fs from 'node:fs'
import * as path from 'node:path'
import * as prettierConfig from '../../main/js'

const root = path.resolve(__dirname, '../../../../../')
const pkgRoot = path.resolve(root, 'packages/prettier-config-qiwi')
const bin = path.resolve(root, 'node_modules/.bin/prettier')

describe('prettier', () => {
  it('prettierConfig', () => {
    expect(prettierConfig).toBeDefined()
  })

  it('formats as expected', async () => {
    const configPath = path.resolve(pkgRoot, 'src/main/js/index.js')
    const input = path.resolve(pkgRoot, 'src/test/fixtures/input.ts')
    const output = path.resolve(pkgRoot, 'src/test/fixtures/output.ts')

    const result = cp.execSync(`${bin} ${input} --config ${configPath}`).toString()
    expect(result).toBe(fs.readFileSync(output, 'utf-8'))
  })
})
