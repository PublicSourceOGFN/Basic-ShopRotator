const axios = require('axios');
const discordwebhook = 'your_discord_webhook'; // Replace with your actual discord webhook of your server!!!!
const fortniteAPI = 'https://fortnite-api.com/v2/cosmetics/br'; // Correct endpoint for cosmetics don't delete this unless you know what are you doing!

const sendWebhook = async (items) => {
    try {
        const response = await axios.get(fortniteAPI);
        const cosmetics = response.data.data || [];
        const itemNames = await Promise.all(items.map(async (item) => {
            const matchingCosmetic = cosmetics.find(cosmetic => cosmetic.id === item.id);
            const itemName = matchingCosmetic ? matchingCosmetic.name : item.id;

            return { name: itemName, price: item.price };
        }));
        const embed = {
            title: "Shop Update",
            description: "Check out the latest items in the shop!",
            color: 5814783, // Yellow
            fields: itemNames.map(item => ({
                name: item.name,
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
        console.error("Error sending webhook: make sure your webhook is correct or the Fortnite API request failed.");
    }
};

module.exports = { sendWebhook };
