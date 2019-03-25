import { writeFile, readFile } from 'fs'
import { exec } from 'child_process'
import { join } from 'path'
import * as config from '../../main/js/tslint-config-qiwi.js'

const OUT_FILENAME = join(__dirname, 'rules.out')
const TSLINT_BIN = require.resolve('tslint/bin/tslint')
const TSLINT_CMD = `node ${TSLINT_BIN} --config ../../main/js/tslint-config-qiwi.js --project tsconfig.json "rules/**/*.ts"`

/**
 * Remove all absolute paths when persisting.
 */
const relatify =  (stdout, dirname) => {
  let index

  while ((index = stdout.indexOf(dirname)) > -1) {
    stdout = stdout.substr(0, index) + stdout.substr(index + dirname.length)
  }

  return stdout
}

describe('tslint-config-qiwi', () => {
  it('config is exposed as js', () => {
    expect(config).toEqual(expect.any(Object))
  })

  it('config works as expected', (done) => {
    exec(TSLINT_CMD, { cwd: __dirname }, (err, stdout, stderr) => {
      const out = relatify(stdout, __dirname).trim()

      if (process.env.GENERATE_ASSETS) {
        return writeFile(OUT_FILENAME, out, (err) => {
          done()
        })

      } else {
        readFile(OUT_FILENAME, 'utf8', (err, result) => {
          expect(out.trim()).toEqual(result.trim())
          expect(stderr).toEqual('')

          done()
        })
      }
    })
  })
})

