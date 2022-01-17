const https = require('https');

class monkey {
    constructor(client, debug, badlink) {
        this.client = client;
        this.debug = debug;
        this.badlink = badlink;
    }

    async checkLink(message) { // The event that will see is the msg contains a no no link
        https.get('https://jordan2139.me/api/scamlinks.txt', (result) => {
            var body = '';
            result.on('data', (chunk) => {
                body += chunk
            })
            result.on('end', () => {
                body.forEach(async link => {
                    console.log(link)
                    if (message.content.includes(link)) {
                        message.delete().catch(e => {})
                        message.channel.send({ content: `**Your message was deleted because it contained a restricted link:** ||${link}||` })
                    }
                })
            })
        })
    }
}

module.exports = monkey;
