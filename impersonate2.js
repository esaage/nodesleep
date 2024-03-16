const { CurlGenerator } = require('curl-generator');
const { exec } = require('child_process');

const createCurlCommand = (url, method, headers, body) => {
    url = `"${url}"`
    const params = {
        url, 
        method,
        headers
    }
    if (body) params.body = body
    const generateCommand = CurlGenerator(params, { compressed: true })
    return generateCommand.replace('curl', '')
}


const execCommand = (command) => new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
        if (err) {
            reject(err, stderr)
        }

        resolve(stdout)
    });
});



(async () => {
    try {

    const curlImperSonatePattern = 'docker run --rm lwthiker/curl-impersonate:0.5-chrome curl_chrome101';

    const headers = {
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

    const curlGeneratorResult = createCurlCommand(encodeURI(`https://api-ap.fusionist.io/fusionist/v1/getMessage?address=0x8ED691a8b4FeF9E6B85e9d0083d35F8E7A1B1a8C&token=25px1leoe3ksfjy3lagm0d`), 'GET', headers, '');
    const resultCurl = await execCommand(`${curlImperSonatePattern} ${curlGeneratorResult}`)

    console.log(resultCurl)
    } catch (e) {
        console.log(e)
    }

})();