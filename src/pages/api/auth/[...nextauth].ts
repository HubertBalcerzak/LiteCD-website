import NextAuth from 'next-auth'
import KeycloakProvider from 'next-auth/providers/keycloak'

export default NextAuth({
  providers: [
    KeycloakProvider({
      // @ts-ignore must be string
      clientId: process.env.KEYCLOAK_CLIENT_ID,
      // @ts-ignore must be string
      clientSecret: process.env.KEYCLOAK_SECRET,
      issuer: process.env.KEYCLOAK_ISSUER,
    }),
  ],
})
