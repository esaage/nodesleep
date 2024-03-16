const { Wallet, JsonRpcProvider, Contract } = require("ethers");
const ethUtil = require('ethereumjs-util')
const moment = require('moment');
const fetch = require('node-fetch');
const fs = require('fs');
const chalk = require('chalk');
const contract = require('./contract');
const { exit } = require("process");
const { CurlGenerator } = require('curl-generator');
const { exec } = require('child_process');


const cookieHelpers = (arrayCookie) => {
    let newCookie = '';
    for (let index = 0; index < arrayCookie.length; index++) {
        const element = arrayCookie[index];
        if (index < arrayCookie.length - 1) {
            newCookie += element.split(';')[0] + '; ';
        } else {
            newCookie += element.split(';')[0];
        }

    }
    return newCookie
};


function makeid(length) {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const getSignMessageChallenge = (address, token) => new Promise((resolve, reject) => {
    // axios.get(`https://api-ap.fusionist.io/fusionist/v1/getMessage?address=${address}&token=${token}`, {
    //     headers: {
    //         'authority': 'api-ap.fusionist.io',
    //         'accept': '*/*',
    //         'accept-language': 'id-ID,id;q=0.9',
    //         'content-type': 'application/json;charset=UTF-8',
    //         'origin': 'https://ace.fusionist.io',
    //         'referer': 'https://ace.fusionist.io/',
    //         'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
    //         'sec-ch-ua-mobile': '?0',
    //         'sec-ch-ua-platform': '"macOS"',
    //         'sec-fetch-dest': 'empty',
    //         'sec-fetch-mode': 'cors',
    //         'sec-fetch-site': 'same-site',
    //         'token': 'undefined',
    //         'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36'

    //     }
    //     })
    // .then(function (response) {
    //     // handle success
    //     console.log(response);
    // })
    // .catch(function (error) {
    //     // handle error
    //     console.log(error);
    // })
    // .then(function () {
    //     // always executed
    // });
    fetch(`https://api-ap.fusionist.io/fusionist/v1/getMessage?address=${address}&token=${token}`, {
        headers: {
            'authority': 'api-ap.fusionist.io',
            'accept': '*/*',
            'accept-language': 'id-ID,id;q=0.9',
            'content-type': 'application/json;charset=UTF-8',
            'origin': 'https://ace.fusionist.io',
            'referer': 'https://ace.fusionist.io/',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'token': 'undefined',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36'
        }
    })
        .then(res => res.text())
        .then(res => resolve(res))
        .catch(err => reject(err))
});

const getRoleInfo = (address, token, signature) => new Promise((resolve, reject) => {
    fetch('https://api-ap.fusionist.io/fusionist/v1/getRoleInfo', {
        method: 'POST',
        headers: {
            'authority': 'api-ap.fusionist.io',
            'accept': '*/*',
            'accept-language': 'id-ID,id;q=0.9',
            'content-type': 'application/json;charset=UTF-8',
            'origin': 'https://ace.fusionist.io',
            'referer': 'https://ace.fusionist.io/',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'token': token,
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36'
        },
        body: JSON.stringify({
            'address': address,
            'signature': signature,
            'token': token
        })
    })
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(err => reject(err))
});

const getLastFaucet = (address) => new Promise((resolve, reject) => {
    fetch('https://ace.fusionist.io/api/web3/getLastFaucet?address=' + address, {
        headers: {
            'authority': 'ace.fusionist.io',
            'accept': '*/*',
            'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
            'content-type': 'application/json;charset=UTF-8',
            'cookie': '_ga=GA1.1.935206268.1675518340; _ga_TR4LELNJQF=GS1.1.1675576387.3.1.1675576388.59.0.0',
            'if-none-match': 'W/"k0hbgyw9tx7s"',
            'referer': 'https://ace.fusionist.io/account/endurance',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'token': 'undefined',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36'
        }
    })
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(err => reject(err))
});



(async () => {

    console.log(`[ ${moment().format("HH:mm:ss")} ] `, `${chalk.green('Starting....')}`);
    console.log('');
    exit
    const privateKey = '0x97c513e59136c76d91cf38ed0593617af4ac863bdeac746fc13faeb63e6dee7a'; // private key 

    const network = "https://rpc-endurance.fusionist.io";

    const wallet = new Wallet(privateKey, new JsonRpcProvider(network));
    const contractAccess = new Contract('0x1a7BA395fB98eBEB0448314f91a763624f236dd4', contract.contractAbi.endurance, wallet);

    let result = privateKey.includes("0x"); // cek PK nya old/baru (ada 0xnya nggak)
    console.log(result);
    let privateKeyEcc = ''
    
    // jika pknya ada 0x, maka split dlu 0xnya buat diambil angka hexa dibelakangya aja
    if( result == true ) {

        privateKeyEcc = Buffer.from(
            privateKey.split('0x')[1],
            'hex'
        );
    // kalo gada 0xnya, langsung aja gas Buffer buat jadiin hexa
    } else {
        
        privateKeyEcc = Buffer.from(
            privateKey,
            'hex'
        );
    }
    // output dari Buffer.from = 97 c5 13 e5 91 36 c7 6d 91 cf ed 05 93 61 7a f4 ac 86 3b de ac 74 6f c1 3f ae b6 3e 6d ee
    
    
    const token = makeid(22);
    const address = wallet.address;
    console.log(token);
    console.log(address);    
    
    
    console.log(`[ ${moment().format("HH:mm:ss")} ] `, `${chalk.green(`Address : ${address}`)}`);
    console.log(`[ ${moment().format("HH:mm:ss")} ] `, `${chalk.green(`Get Sign Message...`)}`);
    console.log('woooooooooooooooiiiiiiiii');
    const getSignMessageChallengeResult = await getSignMessageChallenge(address, token);
    // const { statusCode, data, headers } = await curly.get(`https://api-ap.fusionist.io/fusionist/v1/getMessage?address=${address}&token=${token}`);
    // const ok = await curly.get(`https://api-ap.fusionist.io/fusionist/v1/getMessage?address=${address}&token=${token}`);
    console.log(getSignMessageChallengeResult);
    console.log(1111);
    
    process.exit()
    
    
    if (getSignMessageChallengeResult.code === 200) {
        console.log(`[ ${moment().format("HH:mm:ss")} ] `, `${chalk.green(`Success getting message.....`)}`);
        const message = getSignMessageChallengeResult.result.message;
        const msgHash = ethUtil.hashPersonalMessage(ethUtil.toBuffer(message));
        const signature = ethUtil.ecsign(msgHash, privateKeyEcc);
        const signatureHex = ethUtil.toRpcSig(signature.v, signature.r, signature.s);
        console.log(`[ ${moment().format("HH:mm:ss")} ] `, `${chalk.green(`Signature: ${signatureHex}`)}`);
        const getRoleInfoResult = await getRoleInfo(address, token, signatureHex);

        if (getRoleInfoResult.code === 200) {
            console.log(`[ ${moment().format("HH:mm:ss")} ] `, `${chalk.green(`Detected account email : ${getRoleInfoResult.result.email}`)}`);
            console.log(`[ ${moment().format("HH:mm:ss")} ] `, `${chalk.green(`Claim Proccess`)}`);

            // try{
            //     const timestamp = Math.floor(Date.now() / 1000);
            //     const responseClaim = await contractAccess.claim(timestamp, signatureHex)
            //     console.log(responseClaim)
            //     console.log(`[ ${moment().format("HH:mm:ss")} ] `, `${chalk.green(`Success To Claim Ace Pump`)}`);
            // }catch(e){
            //     console.log(e)
            //     console.log(`[ ${moment().format("HH:mm:ss")} ] `, `${chalk.red(`Failed To Claim Ace Pump`)}`);
            // }
            
            // const getLastFaucetResult = await getLastFaucet(address);
            // if (getLastFaucetResult[1].hasOwnProperty('Item')) {
            //     console.log(`[ ${moment().format("HH:mm:ss")} ] `, `${chalk.yellow(`Sudah Pernah Claim`)}`);
            //     console.log(`[ ${moment().format("HH:mm:ss")} ] `, `${chalk.green(`Claim berikutnya di : ${moment.unix(getLastFaucetResult[1].Item.lastTimestamp).add(1, 'days').format('YYYY-MM-DD hh:mm:ss')}`)}`);
            // } else {
            //     console.log(`[ ${moment().format("HH:mm:ss")} ] `, `${chalk.green(`Belum Claim Faucet...`)}`);
            // }
        } else {
            console.log(`[ ${moment().format("HH:mm:ss")} ] `, `${chalk.red(`Address Not Registered to endurance...`)}`);
        }
    } else {
        console.log(`[ ${moment().format("HH:mm:ss")} ] `, `${chalk.red(`Failed getting challenge message...`)}`);
    }
    console.log('')

})();
