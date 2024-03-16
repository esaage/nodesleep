const { CurlGenerator } = require('curl-generator')
const shell = require('shelljs');
const baseProgram = `${process.cwd()}/curl_impersonate -sS`

const createCurlCommand = (url, method, authorization, body) => {
    const params = { url, method,
        headers: {
            authority: 'api-ap.fusionist.io',
            accept: '*/*',
            'accept-language': 'id-ID,id;q=0.9',
            'content-type': 'application/json;charset=UTF-8',
            authorization,
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
    }
    if (body) params.body = body
    const generateCommand = CurlGenerator(params, { silent: true, compressed: true })
    return generateCommand.replace('curl', '')
}

const getLaunchpads = () => new Promise((resolve, reject) => {
    const token = '25px1leoe3ksfjy3lagm0d';
    const address = '0x8ED691a8b4FeF9E6B85e9d0083d35F8E7A1B1a8C';
    const command = createCurlCommand(encodeURI(`https://api-ap.fusionist.io/fusionist/v1/getMessage?address=${address}&token=${token}`), 'GET', token, '');
    const request = shell.exec(`${baseProgram} ${command}`, { async: false, silent: true }).stdout;
    console.log(command);
    console.log(request);
    
    resolve(request)
});
console.log(getLaunchpads())