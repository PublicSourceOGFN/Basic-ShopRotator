const fastify = require('fastify')({ logger: true });
const fs = require('fs');
const { getPrice } = require('./ItemPrice/price.js'); 
const { sendWebhook } = require('./DiscordWebhook/index.js'); 

const shop_rotation = 24 * 60 * 60 * 1000; // 24 hours fyi you can still change it lol

const loadJSON = (path) => {
    try {
        return JSON.parse(fs.readFileSync(path, 'utf8'));
    } catch (error) {
        console.error("Error loading JSON file:", path, error);
        throw error;
    }
};

const saveJSON = (path, data) => {
    try {
        fs.writeFileSync(path, JSON.stringify(data, null, 4), 'utf8');
    } catch (error) {
        console.error("Error saving JSON file:", path, error);
        throw error;
    }
};

const updateShop = () => {
    const items = loadJSON('item.json'); // better you don't touch this unless you know what you're doing lmfaoooo
    const catalogPath = 'D:\\path\\to\\your\\Config\\catalog_config.json'; // Change this to your backend path where the catalog_config.json is located yes yes yes

    if (!fs.existsSync(catalogPath)) {
        console.error("File not found:", catalogPath);
        return;
    }

    let randomItems = items.sort(() => 0.5 - Math.random()).slice(0, 8);
    let catalog = loadJSON(catalogPath);

    const shopItems = [];

    catalog.daily1.itemGrants = [`${randomItems[0].type}:${randomItems[0].id}`];
    catalog.daily1.price = getPrice(randomItems[0].type, randomItems[0].rarity);
    shopItems.push({ type: randomItems[0].type, id: randomItems[0].id, price: catalog.daily1.price });

    catalog.daily2.itemGrants = [`${randomItems[1].type}:${randomItems[1].id}`];
    catalog.daily2.price = getPrice(randomItems[1].type, randomItems[1].rarity);
    shopItems.push({ type: randomItems[1].type, id: randomItems[1].id, price: catalog.daily2.price });

    catalog.daily3.itemGrants = [`${randomItems[2].type}:${randomItems[2].id}`];
    catalog.daily3.price = getPrice(randomItems[2].type, randomItems[2].rarity);
    shopItems.push({ type: randomItems[2].type, id: randomItems[2].id, price: catalog.daily3.price });

    catalog.daily4.itemGrants = [`${randomItems[3].type}:${randomItems[3].id}`];
    catalog.daily4.price = getPrice(randomItems[3].type, randomItems[3].rarity);
    shopItems.push({ type: randomItems[3].type, id: randomItems[3].id, price: catalog.daily4.price });

    catalog.daily5.itemGrants = [`${randomItems[4].type}:${randomItems[4].id}`];
    catalog.daily5.price = getPrice(randomItems[4].type, randomItems[4].rarity);
    shopItems.push({ type: randomItems[4].type, id: randomItems[4].id, price: catalog.daily5.price });

    catalog.daily6.itemGrants = [`${randomItems[5].type}:${randomItems[5].id}`];
    catalog.daily6.price = getPrice(randomItems[5].type, randomItems[5].rarity);
    shopItems.push({ type: randomItems[5].type, id: randomItems[5].id, price: catalog.daily6.price });

    catalog.featured1.itemGrants = [`${randomItems[6].type}:${randomItems[6].id}`];
    catalog.featured1.price = getPrice(randomItems[6].type, randomItems[6].rarity);
    shopItems.push({ type: randomItems[6].type, id: randomItems[6].id, price: catalog.featured1.price });

    catalog.featured2.itemGrants = [`${randomItems[7].type}:${randomItems[7].id}`];
    catalog.featured2.price = getPrice(randomItems[7].type, randomItems[7].rarity);
    shopItems.push({ type: randomItems[7].type, id: randomItems[7].id, price: catalog.featured2.price });

    saveJSON(catalogPath, catalog);

    sendWebhook(shopItems);

    console.log(`\x1b[33m[Shop]\x1b[0m Shop updated successfully!`);
};

setInterval(updateShop, shop_rotation);

fastify.get('/shop', async (request, reply) => {
    const catalogPath = 'D:\\path\\to\\your\\Config\\catalog_config.json'; // Change this to your backend path where the catalog_config.json is located yes yes and yes
    
    if (!fs.existsSync(catalogPath)) {
        console.error("File not found:", catalogPath);
        reply.status(500).send("Catalog file not found!");
        return;
    }

    const currentShop = loadJSON(catalogPath); 
    reply.send(currentShop);
});

const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
        console.log(`\x1b[33m[Shop]\x1b[0m Shop Rotator running on http://localhost:3000/shop`);
        updateShop(); 
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

start();
