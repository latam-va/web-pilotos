import { initAuth0 } from "@auth0/nextjs-auth0";

export default initAuth0({
  secret: process.env.SESSION_COOKIE_SECRET,
  issuerBaseURL: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
  baseURL: "https://pilotos.latamva.com.ar",
  clientID: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  routes: {
    callback:
      "/api/callback",
    postLogoutRedirect:
      "https://pilotos.latamva.com.ar",
  },
  authorizationParams: {
    response_type: "code",
    scope: process.env.NEXT_PUBLIC_AUTH0_SCOPE,
  },
  session: {
    absoluteDuration: 7200,
  },
});
