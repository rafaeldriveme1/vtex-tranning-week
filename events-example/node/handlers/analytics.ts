export async function analytics(ctx: Context, next: () => Promise<any>) {
    const {
      clients: { analytics },
    } = ctx
    ctx.status = 200
    ctx.body = await analytics.getLiveUsers()
    ctx.set('Proxy-Authorization', ctx.vtex.authToken)
    ctx.set('cache-control', 'no-cache')
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    await next()
}