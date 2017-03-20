/**
 * Created by Administrator on 2017/1/20.
 */

export default [
  {
    path: '/message',
    name:'message',
    component: resolve => require(['views/message'], resolve),
  },
  {
    path: '/message/talking/:id',
    name:'message/talking',
    component: resolve => require(['views/message/talking'], resolve),
  },
]
