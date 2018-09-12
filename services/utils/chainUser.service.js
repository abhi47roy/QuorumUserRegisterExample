var Q = require('q');
var config = require('config.json')
var web3 = require('web3PoolUtils');

web3.connectToQuorumNode();
web3 = web3.getWeb3();

var service = {};

//service.getUser = getUser;
service.registerUser = registerUser;

async function registerUser(username,password){
    console.log("Register User Called ",username, password)
    var deferred = Q.defer();
    var adminUserPubKey = config.QuorumAdminKey;
    web3.eth.defaultAccount = adminUserPubKey;
    
    try{accountDetails = await web3.eth.personal.newAccount(password);
       deferred.resolve(accountDetails);
    }
    catch(error){
        console.log("Error while creating the account ",error);
        throw error;
    }
    console.log("Second ",accountDetails);
    return deferred.promise;

}


module.exports = service