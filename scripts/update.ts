import { writeFile } from 'node:fs/promises'
import { consola } from 'consola'
import { resolve } from './utils'

async function fetchIconifySetNames(
  repo = 'iconify/icon-sets',
  subPath = 'json',
): Promise<string[]> {
  const result: string[] = []
  try {
    const res = await fetch(
      `https://api.github.com/repos/${repo}/contents/${subPath}`,
    )
    const data = (await res.json()) as Array<{
      name: string
      type: 'file' | 'dir'
    }>
    for (const item of Array.from(data)) {
      if (item.type === 'file' && item.name.endsWith('.json')) {
        result.push(item.name.replace(/\.json$/, ''))
      }
    }
    return result
  } catch (err) {
    consola.error(err)
    return result
  }
}

async function updateIconifySetNames() {
  consola.info('Updating Iconify set names')
  const iconNames = await fetchIconifySetNames()
  await writeFile(
    resolve('src/iconify.json'),
    JSON.stringify(iconNames, null, 2),
  )
  consola.success('Iconify set names updated')
}

updateIconifySetNames()
