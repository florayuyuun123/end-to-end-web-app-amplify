const AWS = require('aws-sdk');
const CognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();

async function signIn(username, password) {
    const clientId = "2pfm174o7dqtdoep5796l8ch4";
    const clientSecret = "pms1fo0ek2pufsokmt7ir5f1pp1mg1v7cep7sspqom970h3h2k2";
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
