const name = 'projects/119764587873/secrets/backend-env/versions/3';

const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');

export default async function getSecrets() {
  const client = new SecretManagerServiceClient();
  const [version] = await client.accessSecretVersion({
    name: name,
  });

  // Extract the payload as a string.
  const payload = version.payload.data.toString();

  const [
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
    DB_HOST,
    CLIENT_ID,
    JWT_SECRET,
  ] = payload.split('\r\n').map((val: any) => val.split('=')[1]);

  return { DB_USER, DB_PASSWORD, DB_DATABASE, DB_HOST, CLIENT_ID, JWT_SECRET };
}
