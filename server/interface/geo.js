import Router from 'koa-router'
// import Province from '../dbs/models/province'
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

router.get('/menu', async (ctx) => {
  // const result = await Menu.findOne()
  // ctx.body = {
  //   menu: result.menu
  // }
  let { status, data: { menu } } = await axios.get(`http://cp-tools.cn/geo/menu?sign=${sign}`)
  if (status === 200) {
    ctx.body = { menu }
  }
})

router.get('/province', async (ctx) => {
  // let province = await Province.find()
  // ctx.body = {
  //   province: province.map((item) => {
  //     return {
  //       id: item.id,
  //       name: item.value[0]
  //     }
  //   })
  // }
  let { status, data: { province } } = await axios.get(`http://cp-tools.cn/geo/province?sign=${sign}`)
  ctx.body = {
    province: status === 200 ? province : []
  }
})

router.get('/city', async (ctx) => {
  // let city = []
  // let result = await city.find()
  // result.forEach((item) => {
  //   city = city.concat(item.value)
  // })
  // ctx.body = {
  //   code: 0,
  //   city: city.map(item => {
  //     return {
  //       province: item.province,
  //       id: item.id,
  //       name: item.name === '市辖区' || item.name === '省直辖县级行政区划' ? item.province : item.name
  //     }
  //   })
  // }
  let { status, data: { city } } = await axios.get(`http://cp-tools.cn/geo/city?sign=${sign}`)
  ctx.body = {
    province: status === 200 ? city : []
  }
})

export default router
