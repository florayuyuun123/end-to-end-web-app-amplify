const crypto = require('crypto');

function generateSecretHash(username, clientId, clientSecret) {
    const message = username + clientId;
    const key = clientSecret;
    return crypto.createHmac('SHA256', key).update(message).digest('base64');
}
