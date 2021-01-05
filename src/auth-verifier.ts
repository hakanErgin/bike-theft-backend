const { OAuth2Client } = require('google-auth-library');
const { ID_TOKEN, CLIENT_ID } = process.env;

const client = new OAuth2Client(CLIENT_ID);
export default async function verify() {
  const ticket = await client.verifyIdToken({
    idToken: ID_TOKEN,
    audience: CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
    // Or, if multiple clients access the backend:
    //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
  // If request specified a G Suite domain:
  // const domain = payload['hd'];
  return userid;
}
verify().catch(console.error);
