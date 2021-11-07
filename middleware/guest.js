export default function (context) {
  const userSession = context.app.$cookies.get('usr_session');

  // if (userSession) return context.redirect({ path: '/error/permissions', query: { cause: "isAuthorized" }})
  if (userSession) return context.redirect({ path: '/'})
}
