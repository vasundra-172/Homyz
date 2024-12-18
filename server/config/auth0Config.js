import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "https://dev-hg8zed6i4nqrkifr.us.auth0.com/api/v2/",
    issuerBaseURL: "https://dev-hg8zed6i4nqrkifr.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck