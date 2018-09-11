import fetch from './fetch.js'
export const city = params => fetch('/api/index.php?r=config/index', { ...params })

