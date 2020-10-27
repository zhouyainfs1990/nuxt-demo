export default ({ app }) => {
    // app :应用使用 
    // app.router 实例的 路由实例
    app.router.beforeEach((to, from, next) => {
      console.log('to：',to.path);
      console.log('from', from.path);
    //   console.log(app.store);
      next();    
    })
}