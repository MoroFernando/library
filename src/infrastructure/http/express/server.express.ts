import express from 'express'
import { router } from './routes/routes.express'

export function runAPI() {
  const api = express()

  api.use(express.json())
  api.use(router)

  const PORT = process.env.PORT || 3000
  api.listen(PORT, () => {
    console.log(`Server running at port ${PORT}\n`)
  })
}
