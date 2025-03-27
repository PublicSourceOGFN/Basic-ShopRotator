// if you want you can change the prices of the items here
const getPrice = (type, rarity) => {
    if (type === 'AthenaCharacter') {
        switch (rarity) {
            case 'legendary':
                return 2000;
            case 'epic':
                return 1500;
            case 'rare':
                return 1200;
            case 'uncommon':
                return 800;
            case 'common':
                return 0;
            case 'slurp':
                return 1500;
            case 'dark':
                return 800; 
            case 'marvel':
                return 800; 
            case 'starwars':
                return 1500; 
            default:
                return 0;
        }
    }

    if (type === 'AthenaPickaxe') {
        switch (rarity) {
            case 'legendary':
                return 1500;
            case 'epic':
                return 1200;
            case 'rare':
                return 800;
            case 'uncommon':
                return 500;
            case 'common':
                return 0;
            case 'slurp':
                return 800; 
            case 'dark':
                return 1200;
            case 'marvel':
                return 800;
            case 'starwars':
                return 800;
            default:
                return 0;
        }
    }

    if (type === 'AthenaGlider') {
        switch (rarity) {
            case 'legendary':
                return 1500;
            case 'epic':
                return 1200;
            case 'rare':
                return 800;
            case 'uncommon':
                return 500;
            case 'common':
                return 0;
            case 'slurp':
                return 0; 
            case 'dark':
                return 500; 
            case 'marvel':
                return 1500; 
            case 'starwars':
                return 800; 
            default:
                return 0;
        }
    }

    if (type === 'AthenaEmoji') {
        switch (rarity) {
            case 'legendary':
                return 0;
            case 'epic':
                return 0;
            case 'rare':
                return 0;
            case 'uncommon':
                return 0;
            case 'common':
                return 0;
            case 'slurp':
                return 0; 
            case 'dark':
                return 0; 
            case 'marvel':
                return 0; 
            case 'starwars':
                return 0; 
            default:
                return 0;
        }
    }

    if (type === 'AthenaLoadingScreen') {
        switch (rarity) {
            case 'legendary':
                return 0;
            case 'epic':
                return 0;
            case 'rare':
                return 0;
            case 'uncommon':
                return 0;
            case 'common':
                return 0;
            case 'slurp':
                return 0; 
            case 'dark':
                return 0;
            case 'marvel':
                return 0; 
            case 'starwars':
                return 0; 
            default:
                return 0;
        }
    }

    if (type === 'AthenaDance') {
        switch (rarity) {
            case 'legendary':
                return 0; 
            case 'epic':
                return 800;
            case 'rare':
                return 500;
            case 'uncommon':
                return 200;
            case 'common':
                return 0;
            case 'marvel':
                return 200; 
            case 'starwars':
                return 200; 
            default:
                return 0;
        }
    }

    if (type === 'AthenaItemWrap') {
        switch (rarity) {
            case 'slurp':
                return 500; 
            case 'legendary':
                return 0;
            case 'epic':
                return 700;
            case 'rare':
                return 500;
            case 'uncommon':
                return 300;
            case 'common':
                return 0;
            case 'dark':
                return 0; 
            case 'marvel':
                return 500;
            case 'starwars':
                return 300; 
            default:
                return 0;
        }
    }

    if (type === 'AthenaSpray') {
        switch (rarity) {
            case 'slurp':
                return 0; 
            case 'legendary':
                return 0;
            case 'epic':
                return 0;
            case 'rare':
                return 0;
            case 'uncommon':
                return 0;
            case 'common':
                return 0;
            case 'dark':
                return 0; 
            case 'marvel':
                return 0;
            case 'starwars':
                return 0; 
            default:
                return 0;
        }
    }

    if (type === 'AthenaBackpack') {
        switch (rarity) {
            case 'slurp':
                return 400; 
            case 'legendary':
                return 1000;
            case 'epic':
                return 800;
            case 'rare':
                return 500;
            case 'uncommon':
                return 200;
            case 'common':
                return 0;
            case 'dark':
                return 1200; 
            case 'marvel':
                return 800;
            case 'starwars':
                return 800; 
            default:
                return 0;
        }
    }

    return 0; 
};

module.exports = { getPrice };
