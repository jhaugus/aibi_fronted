export default [
  { path: '/user', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  { path: '/', redirect: '/add_chart' },
  { path: '/add_chart', name: '智能分析（同步）', icon: 'barChart', component: './AddChart' },
  { path: '/add_chart_async', name: '智能分析（线程池）', icon: 'barChart', component: './AddChartAsync' },
  { path: '/add_chart_mq', name: '智能分析（RabbitMQ）', icon: 'barChart', component: './AddChartMq' },
  { path: '/my_chart', name: '我的图表', icon: 'pieChart', component: './MyChart' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
