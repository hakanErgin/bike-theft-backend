const { OAuth2Client } = require('google-auth-library');
const { CLIENT_ID } = process.env;

const client = new OAuth2Client(CLIENT_ID);
export default async function verify(id_token: any) {
  const ticket = await client.verifyIdToken({
    idToken: id_token,
    audience: CLIENT_ID,
  });
  const payload = ticket.getPayload();
  const userid = payload.sub;
  const username = payload.name;

  return { google_id: userid, google_name: username };
}
