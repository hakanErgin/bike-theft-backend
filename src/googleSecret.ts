const name = 'projects/119764587873/secrets/backend-env/versions/1';
// const name = 'projects/my-project/secrets/my-secret/versions/latest';

const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');

const client = new SecretManagerServiceClient();

export default async function getSecrets() {
  const [version] = await client.accessSecretVersion({
    name: name,
  });

  // Extract the payload as a string.
  const payload = version.payload.data.toString();

  const [DB_USER, DB_PASSWORD, DB_DATABASE, DB_HOST, CLIENT_ID] = payload
    .split('\r\n')
    .map((val: any) => val.split('=')[1]);

  return { DB_USER, DB_PASSWORD, DB_DATABASE, DB_HOST, CLIENT_ID };
}
