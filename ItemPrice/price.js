const getPrice = (type, rarity) => {
    const seriesPriceMap = {
        marvel: 1500,
        dc: 1500,
        starwars: 1500,
        icon: 1500,
        dark: 1200,
        lava: 1200,
        frozen: 1200,
        shadow: 1200,
        slurp: 800,
        gaminglegends: 1500
    };

    const defaultPrice = (legendary, epic, rare, uncommon, common = 0) => ({
        legendary, epic, rare, uncommon, common
    });

    const priceTables = {
        AthenaCharacter: defaultPrice(2000, 1500, 1200, 800),
        AthenaPickaxe: defaultPrice(1500, 1200, 800, 500),
        AthenaPickaxeDual: defaultPrice(1600, 1200, 800, 500),
        AthenaGlider: defaultPrice(1500, 1200, 800, 500),
        AthenaBackpack: defaultPrice(1000, 800, 500, 200),
        AthenaDance: defaultPrice(0, 800, 500, 200),
        AthenaItemWrap: defaultPrice(0, 700, 500, 300),
        AthenaContrail: defaultPrice(0, 400, 200, 0),
        AthenaLoadingScreen: defaultPrice(0, 0, 0, 0),
        AthenaEmoji: defaultPrice(0, 0, 0, 0),
        AthenaSpray: defaultPrice(0, 0, 0, 0),
        AthenaMusicPack: defaultPrice(0, 500, 200, 0),
        AthenaEmoteToy: defaultPrice(0, 500, 300, 200),
        AthenaEmoticon: defaultPrice(0, 200, 0, 0)
    };

    rarity = rarity.toLowerCase();
    type = type.toString();

    if (seriesPriceMap[rarity]) {
        switch (type) {
            case 'AthenaCharacter':
            case 'AthenaPickaxe':
            case 'AthenaPickaxeDual':
            case 'AthenaGlider':
            case 'AthenaBackpack':
            case 'AthenaItemWrap':
                return seriesPriceMap[rarity];
            case 'AthenaDance':
            case 'AthenaMusicPack':
            case 'AthenaEmoteToy':
                return 500;
            default:
                return 0;
        }
    }

    const table = priceTables[type];
    if (!table) return 0;

    return table[rarity] ?? 0;
};

module.exports = { getPrice };
