import 'dotenv/config'
import IApi from '../Api'
import express from 'express'
import router from './routes/routes.express'

export default class ExpressAPI implements IApi {
  start() {
    const app = express()

    app.use(express.json())
    app.use(router)

    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => {
      console.log(`Express server running at port ${PORT}\n`)
    })
  }
}
