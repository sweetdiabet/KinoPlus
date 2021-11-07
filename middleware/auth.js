export default function (context) {
  const userSession = context.app.$cookies.get('usr_session')

  if (!userSession) return context.redirect('/account/login')

  if (context.route) {
    const groupIds = context.route.meta.find((entry) => {
      if (entry.groupId) return entry.groupId
      else return null
    })
    if (groupIds && groupIds.groupId) {
      if (!groupIds.groupId.includes(userSession.groupId)) {
        return context.redirect({
          path: '/error/permissions',
          query: { cause: 'noPermissions', groupId: userSession.groupId }
        })
      }
    }
  }
}
