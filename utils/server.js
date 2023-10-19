const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const authMiddleware = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://your-auth0-domain/.well-known/jwks.json', // Replace with your Auth0 JWKS URL
  }),
  audience: 'your-audience', // Replace with your Auth0 audience
  issuer: 'https://your-auth0-domain/',
  algorithms: ['RS256'],
});

// Use authMiddleware in your routes to secure them
