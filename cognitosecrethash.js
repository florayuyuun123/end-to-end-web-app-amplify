const AWS = require('aws-sdk');
const CognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();

async function signIn(username, password) {
    const clientId = "1b9pva5go6tivi20f27suaabe3";
    const clientSecret = "1c6omp8kvs07af354ub42btmeb69p3ejiqsbb5vtprou6rd7f4a8";
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
