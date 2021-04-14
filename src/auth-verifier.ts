const { OAuth2Client } = require('google-auth-library');
import getSecrets from './googleSecret';

async function getClient(CLIENT_ID: string) {
  const client = new OAuth2Client(CLIENT_ID);
  return client;
}

type GoogleUser = { google_id: string; google_name: string; token?: string };

export default async function verify(id_token: string, CLIENT_ID: string) {
  const client = await getClient(CLIENT_ID);
  const ticket = await client.verifyIdToken({
    idToken: id_token,
    audience: CLIENT_ID,
  });
  const payload = ticket.getPayload();
  const userid = payload.sub;
  const username = payload.name;
  const googleUser: GoogleUser = { google_id: userid, google_name: username };
  return googleUser;
}
