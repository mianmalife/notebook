import path from 'path'
import findUp from 'find-up'

export type PackageManager = 'pnpm' | 'yarn' | 'npm'

const LOCKS: Record<string, PackageManager> = {
  'pnpm-lock.yaml': 'pnpm',
  'yarn.lock': 'yarn',
  'package-lock.json': 'npm',
}

export async function detectPackageManager(cwd = process.cwd()) {
  // 探测当前目录的锁文件 确定是pnpm 还是yarn or npm
  const result = await findUp(Object.keys(LOCKS), { cwd })
  const agent = (result ? LOCKS[path.basename(result)] : null)
  return agent
}
