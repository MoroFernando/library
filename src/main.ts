import 'reflect-metadata'
import './infrastructure/container/container'
import ExpressAPI from './infrastructure/api/express/express.api'

const api = new ExpressAPI()

api.start()
