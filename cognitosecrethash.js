const AWS = require('aws-sdk');
const CognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();

async function signIn(username, password) {
    const clientId = "";
    const clientSecret = "";
    const secretHash = generateSecretHash(username, clientId, clientSecret);

    const params = {
        AuthFlow: "USER_PASSWORD_AUTH",
        ClientId: clientId,
        AuthParameters: {
            USERNAME: username,
            PASSWORD: password,
            SECRET_HASH: secretHash,
        },
    };

    try {
        const response = await CognitoIdentityServiceProvider.initiateAuth(params).promise();
        console.log("Sign-in successful:", response);
    } catch (error) {
        console.error("Error signing in:", error);
    }
}
