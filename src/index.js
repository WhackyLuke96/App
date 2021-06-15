import  {hello}  from "./greet";
import {aws_config} from './aws_export';

import {
	CognitoUserPool,
	CognitoUserAttribute,
	CognitoUser,
} from 'amazon-cognito-identity-js';

const userPool = new CognitoUserPool({
    UserPoolId: aws_config.userPoolId,
    ClientId: aws_config.clientId,
});

const register = (registerRequest) => {
    userPool.signUp('193618', '123qwe', [], null, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
    })
};

const foo = 'boo';
const registerBtn = document.querySelector('button.register');

registerBtn.addEventListener('click', () => {
    register({"name": "Eniu", "xyz": "foo"});
});
 
(() => {
    hello("Eniu");
})();