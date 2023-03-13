import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const exclusions = ['@typescript-eslint']
const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '../..')
const config = JSON.parse(fs.readFileSync(path.resolve(root, '../eslint-config-qiwi/src/main/js/eslint-config-qiwi.json')))
const _config = {
  ...config,
  parser: 'espree',
  plugins: config.plugins.filter(item => !exclusions.includes(item)),
  rules: Object.entries(config.rules).reduce((acc, [key, value]) => {
    if (exclusions.every(item => !key.startsWith(item))) {
      acc[key] = value
    }

    return acc
  }, {})
}

fs.writeFileSync(path.resolve(root, 'src/main/js/config.json'), JSON.stringify(_config, null, 2))