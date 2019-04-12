import Router from 'koa-router'
import axios from './utils/axios'

const router = new Router({ prefix: '/geo' })

const sign = '6fe542b840d3ab14ca5ac3ab95b6ab27'

router.get('/getPosition', async (ctx) => {
  let { status, data: { province, city } } = await axios.get(`http://cp-tools.cn/geo/getPosition?sign=${sign}`)
  if (status === 200) {
    ctx.body = { province, city }
  } else {
    ctx.body = {
      province: '',
      city: ''
    }
  }
})

export default router
