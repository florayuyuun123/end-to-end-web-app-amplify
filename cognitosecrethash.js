const AWS = require('aws-sdk');
const CognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();

async function signIn(username, password) {
    const clientId = "6i2oc136ttnduoi7uah12uda86";
    const clientSecret = "gp07tb97d9nr9mcns3b7v4k4secib02q3n7tei2irmctueuoeb1";
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
