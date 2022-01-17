# antiraid
A simple node module to help prevent discord scam links from being spammed in your chat

---

## Support

* [Discord](https://jordan2139.me/discord)

* [Website](https://jordan2139.me)

---

## Installation

`npm i antiraid@latest`

---

## Constructor

Base customization for the module.

| Entry        | Type | Definition | 
|----------------|---------------|---------------|
| #1   | CLIENT  | Your client variable
| #2   | BOOLEAN  | Whether or not to toggle debug mode and error logs

---

## Code Example

```js
const Discord = require('discord.js')
const client = new Discord.Client({ partials: ['CHANNEL', 'MESSAGE', 'GUILD_MEMBER', 'USER'] })
const badlink = require('antiraid');
const checklink = badlink(client, true)

client.on('message', async message => {
    await checklink(message)
});

client.login('YOUR_BOT_TOKEN')
```

