import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
    site: process.env.NEXT_AUTH_URL,
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        Providers.Auth0({
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            domain: process.env.AUTH0_DOMAIN
        })
    ]
}

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> => NextAuth(req, res, options)


//The other method

/* export default (req: NextApiRequest, res: NextApiResponse): Promise<void> => NextAuth(req, res, {

    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
    ],
    debug: process.env.NODE_ENV === 'development'


}); */
