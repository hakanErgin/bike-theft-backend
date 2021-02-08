const { OAuth2Client } = require('google-auth-library');
import getSecrets from './googleSecret';

async function getClient() {
  const DBsecrets = await getSecrets();
  const { CLIENT_ID } = DBsecrets;
  const client = new OAuth2Client(CLIENT_ID);
  return { client, CLIENT_ID };
}

export default async function verify(id_token: any) {
  const { client, CLIENT_ID } = await getClient();
  const ticket = await client.verifyIdToken({
    idToken: id_token,
    audience: CLIENT_ID,
  });
  const payload = ticket.getPayload();
  const userid = payload.sub;
  const username = payload.name;

  return { google_id: userid, google_name: username };
}
