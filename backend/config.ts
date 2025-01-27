import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  xClientId: process.env.X_CLIENT_ID,
  apiUrl: process.env.API_URL || 'https://lirifey500.amocrm.ru/api/v4/',
  accessTokenApiUrl:
    process.env.API_ACCESS ||
    'https://app2.gnzs.ru/amocrm/test/oauth/get-token.php',
};

export default config;
