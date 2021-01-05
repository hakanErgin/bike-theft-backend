const { OAuth2Client } = require('google-auth-library');
const { ID_TOKEN, CLIENT_ID } = process.env;

const client = new OAuth2Client(CLIENT_ID);
export default async function verify() {
  const ticket = await client.verifyIdToken({
    idToken: ID_TOKEN,
    audience: CLIENT_ID,
  });
  const payload = ticket.getPayload();
  const userid = payload.sub;

  return userid;
}
verify().catch(console.error);
