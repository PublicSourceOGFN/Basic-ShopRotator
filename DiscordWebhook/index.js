const axios = require('axios');
const discordwebhook = 'your_discord_webhook'; // Replace with your actual discord webhook of your server!!!!

const sendWebhook = async (items) => {
    try {
        const embed = {
            title: "Shop Update",
            description: "Check out the latest items in the shop!",
            color: 5814783, 
            fields: items.map(item => ({
                name: `${item.id}`,
                value: `Price: ${item.price}`,
                inline: true
            })),
            timestamp: new Date(),
        };

        const data = {
            embeds: [embed]
        };
        await axios.post(discordwebhook, data);
        console.log(`\x1b[38;5;32m[Discord]\x1b[0m Webhook sent to Discord!`);

    } catch (error) {
        console.error("Error sending webhook: make sure your webhook is correct or the if you haven't added the webhook yet!");
    }
};

module.exports = { sendWebhook };
