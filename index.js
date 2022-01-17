const https = require('https');

class monkey {
    constructor(client, debug) {
        this.client = client;
        this.debug = debug;
    }

    async checkLink(message) { // The event that will see is the msg contains a no no link
        https.get('https://jordan2139.me/api/scamlinks.txt', (result) => {
            var body = '';
            result.on('data', (chunk) => {
                body += chunk
            })
            result.on('end', () => {
                var response = JSON.parse(body)
                response.forEach(async link => {
                    if (message.content.includes(link)) {
                        message.delete().catch(e => { if (this.debug) { console.log(e.stack) } })
                        message.channel.send({ content: `**Your message was deleted because it contained a restricted link:** ||${link}||` })
                    }
                })
            })
        })
    }
}

module.exports = monkey;
