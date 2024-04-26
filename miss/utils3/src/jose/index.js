/*
jose is JavaScript module for JSON Object Signing 
and Encryption, providing support for JSON Web Tokens 
(JWT), JSON Web Signature (JWS), JSON Web Encryption (JWE), 
JSON Web Key (JWK), JSON Web Key Set (JWKS)
*/

const jose = require('jose')

const secret = new TextEncoder().encode(
    'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
  )
  const jwt =
    'eyJhbGciOiJIUzI1NiJ9.eyJ1cm46ZXhhbXBsZTpjbGFpbSI6dHJ1ZSwiaWF0IjoxNjY5MDU2MjMxLCJpc3MiOiJ1cm46ZXhhbXBsZTppc3N1ZXIiLCJhdWQiOiJ1cm46ZXhhbXBsZTphdWRpZW5jZSJ9.C4iSlLfAUMBq--wnC6VqD9gEOhwpRZpoRarE0m7KEnI'
  
  const { payload, protectedHeader } = await jose.jwtVerify(jwt, secret, {
    issuer: 'urn:example:issuer',
    audience: 'urn:example:audience',
  })
  
  console.log(protectedHeader)
  console.log(payload)