import Router from 'koa-router'
import Poi from '../dbs/models/poi'
import axios from './utils/axios'

const router = new Router({ prefix: '/search' })

const sign = '6fe542b840d3ab14ca5ac3ab95b6ab27'

router.get('/top', async (ctx) => {
  let { status, data: { top } } = await axios.get(`http://cp-tools.cn/search/top`, {
    params: {
      input: ctx.query.input,
      city: ctx.query.city,
      sign
    }
  })
  ctx.body = {
    top: status === 200 ? top : []
  }
})

router.get('/hotplace', async (ctx) => {
  let city = ctx.store ? ctx.store.geo.position.city : ctx.query.city
  let { status, data: { result } } = await axios.get(`http://cp-tools.cn/search/hotPlace`, {
    params: {
      sign,
      city
    }
  })
  ctx.body = {
    result: status === 200 ? result : []
  }
})

export default router
