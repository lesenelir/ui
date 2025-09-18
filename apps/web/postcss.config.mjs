import path from 'node:path'
import { fileURLToPath } from 'node:url'

/**
 * import.meta.url is file URL of the current module.  xxx/ui/apps/web/postcss.config.mjs
 * fileURLToPath converts the file URL to a path.
 * path.dirname gets the directory name of the path.   xxx/ui/apps/web
 */

const dirname = path.dirname(fileURLToPath(import.meta.url))

const config = {
	plugins: {
		'@tailwindcss/postcss': {
			base: path.join(dirname, '..', '..'),
		},
	},
}

export default config
