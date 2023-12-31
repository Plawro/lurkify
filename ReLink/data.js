const dataList = [
    {
        categoryName: "Plawro's webs",
        color: 'purple',
        isSpicy: '', //if spicy, type "spicy"
        otherTags: '', //if has some tags, type them here (shows them as string)
        items: [
            ['Soulzone', 'Web for sharing profiles','https://soulzone.maweb.eu'],
            ['Scary web', 'Personal experimental web','https://plawro.jecool.net'],
            ['My Github', 'My personal Github profile','https://github.com/Plawro'],
            ['My GameJolt', 'My personal GameJolt profile','https://gamejolt.com/@Plawro']
        ]
    },
    {
        categoryName: 'Security (antivirus, URL safety,...)',
        color: 'aqua',
        isSpicy: '',
        otherTags: '',
        items: [
            ['Virustotal', 'Online file virus detector','https://virustotal.com'],
            ['URLvoid', 'Check for scam sites','https://www.urlvoid.com']
        ]
    },
    {
        categoryName: '[Pirating] Cracked games',
        color: 'darkred',
        isSpicy: 'spicy',
        otherTags: 'Pirating',
        items: [
            ['IGG', '⭐ Cracked games (no MP)','https://igg-games.com'],
            ['Fitgirl', 'Cracked games (torrent)','https://fitgirl-repacks.site'],
            ['Steamunlocked', 'Cracked games (slow DL)','https://steamunlocked.com']
        ]
    },
    {
        categoryName: '[Pirating] Leaked movies',
        color: 'darkorange',
        isSpicy: 'spicy',
        otherTags: 'Pirating',
        items: [
            ['Bombuj', 'Movies - made for CZ/SK','https://bombuj.si'],
            ['Prehraj.to', '⭐ Movies - made for CZ/SK','https://prehraj.to'],
            ['Sledujte.to', 'Movies - made for CZ/SK','https://sledujte.to'],
            ['Kukaj.to', 'Movies - made for CZ/SK','https://kukaj.to']
        ]
    },
    {
        categoryName: '[Pirating] Leaked series',
        color: 'darkgold',
        isSpicy: 'spicy',
        otherTags: 'Pirating',
        items: [
            ['SledujSerialy', 'Series - made for CZ/SK','https://sledujserialy.io'],
            ['Prehraj.to', 'Movies - made for CZ/SK','https://prehraj.to'],
            ['Sledujte.to', 'Movies - made for CZ/SK','https://sledujte.to'],
            ['SvetSerialu', '⭐ Movies - made for CZ/SK','https://svetserialu.io']
        ]
    },
    {
        categoryName: 'Email providers',
        color: 'orange',
        isSpicy: '',
        otherTags: '',
        items: [
            ['Gmail', 'Email provider my Google','https://mail.google.com'],
            ['Seznam', 'Email provider - made for CZ/SK','https://email.seznam.cz']
        ]
    },
    {
        categoryName: 'Online (no download) games',
        color: 'green',
        isSpicy: '',
        otherTags: '',
        items: [
            ['GeForce Now', 'Gaming on distant servers (good forlow end PCs)','https://play.geforce.now'],
            ['GX games', 'Bunch of online games - w/ leaderboards too','https://gx.games']
        ]
    },
    {
        categoryName: 'Game stores (Free & paid)',
        color: 'gray',
        isSpicy: '',
        otherTags: '',
        items: [
            ['Steam', 'Most popular game store','https://steampowered.com'],
            ['Epic Games', 'Most free games events','https://epicgames.com'],
            ['GOG.com', 'Free game events, mostly known for older games','https://gog.com'],
            ['Itch.io', 'User made indie games (mostly free)','https://itch.io'],
            ['Gamejolt', 'User made indie games','https://gamejolt.com']
        ]
    },
    {
        categoryName: '[Hacking] Game hacks (CS:GO, Minecraft, GTA V online)',
        color: 'green',
        isSpicy: 'spicy',
        otherTags: 'Hacking',
        items: [
            ['Cheater.fun', 'Hacks for CS:GO','https://cheater.fun'],
            ['MCHacks', 'Minecraft clients (hacks)','https://mchacks.net'],
            ['Kiddions menu', 'Best GTA V online hack/troll menu','https://www.kiddionsmodmenu.com'],
            ['V3rmillion', '[BACK IN V2] Hacks for different games','https://v3rmillion.net']
        ]
    },
    {
        categoryName: 'Free 3D models (mostly for printing)',
        color: 'aqua',
        isSpicy: '',
        otherTags: '3D printing',
        items: [
            ['Thingiverse', 'Free 3D models for 3D printing','https://www.thingiverse.com'],
            ['Thangs', 'Free 3D models for 3D printing','https://thangs.com/']
        ]
    },
    {
        categoryName: '3D Modelling tools',
        color: 'orange',
        isSpicy: '',
        otherTags: '3D viewer, 3D viewer online, 3D modelling, 3D print software',
        items: [
            ['Blender', '3D modelling, animation','https://blender.com'],
            ['Creality print', '3D print preparing software - best for their 3D printers tho','https://creality.com'],
            ['3DViewer', 'Online 3D model viewer','https://3dviewer.net'],
            ['ImageToStl', 'Convert images to 3D models','https://imagetostl.com']
        ]
    },
    {
        categoryName: '[AI] AI image generators',
        color: 'pink',
        isSpicy: '',
        otherTags: '',
        items: [
            ['Pretty AI', 'Great free no-signup generator','https://perchance.org/pretty-ai'],
            ['Promptchan AI', 'Good free character generator','https://promptchan.ai']
            
        ]
    },
    {
        categoryName: '[AI] Name/Logo generators',
        color: 'blue',
        isSpicy: '',
        otherTags: '',
        items: [
            ['Looka', 'Great original name generator (dynamic), free','https://looka.com/business-name-generator/'],
            ['Namelix', 'Name generator, free','https://namelix.com'],
            ['Brandcrowd', 'Logo generator, free','https://www.brandcrowd.com/logo-maker'],
            ['Renderforest', 'Name generator, free','https://www.renderforest.com/business-name-suggestions']
            
        ]
    },
    {
        categoryName: '[PIRATING] Free movies / series websites',
        color: 'red',
        isSpicy: 'spicy',
        otherTags: '',
        items: [
            ['Bombuj.si', 'Slovakian movie search website','https://bombuj.si'],
            ['Prehraj.to', 'Movies (or series, but not in playlist)','https://prehraj.to'],
            ['Svetserialu.io', 'Series, easy to watch in a playlist','https://svetserialu.io'],
            ['Sledujserialy.io', 'Similar to svetserialu.io','https://sledujserialy.io']
            
        ]
    }

];