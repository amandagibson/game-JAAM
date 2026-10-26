const videoGames = [
    {
        q: "Which iconic character is the primary mascot of Nintendo?",
        options: ["Link", "Mario", "Donkey Kong", "Kirby"],
        answer: 1
    },
    {
        q: "What is the highest-selling video game of all time?",
        options: ["Tetris", "Grand Theft Auto V", "Minecraft", "Wii Sports"],
        answer: 2
    },
    {
        q: "Which company created the PlayStation console series?",
        options: ["Sega", "Nintendo", "Sony", "Microsoft"],
        answer: 2
    },
    {
        q: "In 'The Legend of Zelda', what is the name of the protagonist you control?",
        options: ["Zelda", "Ganon", "Link", "Epona"],
        answer: 2
    },
    {
        q: "Which studio developed the critically acclaimed RPG 'The Witcher 3: Wild Hunt'?",
        options: ["Bethesda", "CD Projekt Red", "BioWare", "Square Enix"],
        answer: 1
    },
    {
        q: "What is the name of Master Chief's AI companion in the 'Halo' series?",
        options: ["Cortana", "Yennefer", "GLaDOS", "EDI"],
        answer: 0
    },
    {
        q: "Which popular Battle Royale game features a construction mechanic using wood, stone, and metal?",
        options: ["PUBG", "Apex Legends", "Fortnite", "Call of Duty: Warzone"],
        answer: 2
    },
    {
        q: "In 'Pac-Man', what is the name of the red ghost?",
        options: ["Blinky", "Inky", "Pinky", "Clyde"],
        answer: 0
    },
    {
        q: "Which sandbox game released in 2011 allows players to mine blocks, craft items, and build structures?",
        options: ["Terraria", "Roblox", "Minecraft", "Starbound"],
        answer: 2
    },
    {
        q: "What is the primary setting for the original 'Bioshock' game?",
        options: ["Columbia", "Rapture", "Dunwall", "City 17"],
        answer: 1
    },
    {
        q: "Which game features a blue hedgehog running at high speeds?",
        options: ["Crash Bandicoot", "Sonic the Hedgehog", "Spyro", "Rayman"],
        answer: 1
    },
    {
        q: "What year was the original Nintendo Entertainment System (NES) released in North America?",
        options: ["1983", "1985", "1988", "1990"],
        answer: 1
    },
    {
        q: "Which survival horror franchise features the Umbrella Corporation?",
        options: ["Silent Hill", "Dead Space", "Resident Evil", "Outlast"],
        answer: 2
    },
    {
        q: "What is the name of the main character in the 'Uncharted' series?",
        options: ["Nathan Drake", "Lara Croft", "Sam Fisher", "Arthur Morgan"],
        answer: 0
    },
    {
        q: "Which company developed the classic PC game 'Half-Life'?",
        options: ["Blizzard", "Valve", "id Software", "Epic Games"],
        answer: 1
    },
    {
        q: "In 'Pokémon', which elemental type is Pikachu?",
        options: ["Fire", "Water", "Electric", "Grass"],
        answer: 2
    },
    {
        q: "What is the subtitle of the first 'Halo' game released in 2001?",
        options: ["Combat Evolved", "Custom Edition", "Reach", "Guardians"],
        answer: 0
    },
    {
        q: "Which game franchise includes titles like 'San Andreas', 'Vice City', and 'V'?",
        options: ["Saints Row", "Grand Theft Auto", "Mafia", "Watch Dogs"],
        answer: 1
    },
    {
        q: "Who is the main protagonist of 'Red Dead Redemption 2'?",
        options: ["John Marston", "Dutch van der Linde", "Arthur Morgan", "Sadie Adler"],
        answer: 2
    },
    {
        q: "Which game popularized the phrase 'The cake is a lie'?",
        options: ["Half-Life 2", "Portal", "The Stanley Parable", "BioShock"],
        answer: 1
    },
    {
        q: "What color is Pac-Man?",
        options: ["Red", "Blue", "Yellow", "Green"],
        answer: 2
    },
    {
        q: "Which handheld gaming system was released by Nintendo in 1989?",
        options: ["Game & Watch", "Game Boy", "Game Gear", "WonderSwan"],
        answer: 1
    },
    {
        q: "What is the name of the fictional town where 'Silent Hill' takes place?",
        options: ["Raccoon City", "Silent Hill", "Bright Falls", "Blackwood Pines"],
        answer: 1
    },
    {
        q: "Which game company created 'World of Warcraft'?",
        options: ["Blizzard Entertainment", "Riot Games", "Valve", "Ubisoft"],
        answer: 0
    },
    {
        q: "What is the main weapon used by Gordon Freeman in 'Half-Life'?",
        options: ["Crowbar", "Gravity Gun", "Pistol", "Shotgun"],
        answer: 0
    },
    {
        q: "Which video game series features the assassin Ezio Auditore da Firenze?",
        options: ["Hitman", "Assassin's Creed", "Dishonored", "Prince of Persia"],
        answer: 1
    },
    {
        q: "In 'Mario Kart', which item homes in on the player in first place?",
        options: ["Red Shell", "Blue Shell (Spiny Shell)", "Banana", "Super Star"],
        answer: 1
    },
    {
        q: "Which console was Sega's final home gaming console?",
        options: ["Sega Saturn", "Sega Genesis", "Sega Dreamcast", "Master System"],
        answer: 2
    },
    {
        q: "What is the home kingdom of Princess Peach in the Mario series?",
        options: ["Mushroom Kingdom", "Hyrule", "Dream Land", "Sarasa Land"],
        answer: 0
    },
    {
        q: "Which game franchise features a combat arena mode called 'Summoner's Rift'?",
        options: ["Dota 2", "League of Legends", "Heroes of the Storm", "Smite"],
        answer: 1
    },
    {
        q: "In 'Street Fighter', what is Ryu's signature fireball attack called?",
        options: ["Shoryuken", "Hadouken", "Tatsumaki Senpukyaku", "Kamehameha"],
        answer: 1
    },
    {
        q: "What is the full name of the protagonist in 'Tomb Raider'?",
        options: ["Lara Croft", "Elena Fisher", "Jill Valentine", "Claire Redfield"],
        answer: 0
    },
    {
        q: "Which 2018 game won Game of the Year featuring Kratos and his son Atreus?",
        options: ["God of War", "Red Dead Redemption 2", "Spider-Man", "Celeste"],
        answer: 0
    },
    {
        q: "What block type in 'Minecraft' is required to craft a Nether Portal?",
        options: ["Bedrock", "Obsidian", "Netherrack", "Basalt"],
        answer: 1
    },
    {
        q: "Which indie game developed by ConcernedApe is a farming simulation game?",
        options: ["Terraria", "Stardew Valley", "Animal Crossing", "Slime Rancher"],
        answer: 1
    },
    {
        q: "In 'The Sims', what is the name of the fictional language spoken by characters?",
        options: ["Simlish", "Simsian", "Plumbob", "Simlishian"],
        answer: 0
    },
    {
        q: "Which game studio developed the 'Dark Souls' series and 'Elden Ring'?",
        options: ["FromSoftware", "Capcom", "Bandai Namco", "Team Ninja"],
        answer: 0
    },
    {
        q: "What is the iconic green diamond shape floating above a Sim's head called?",
        options: ["Crystal", "Plumbob", "Diamond", "Sim-Gem"],
        answer: 1
    },
    {
        q: "Which classic arcade game involves firing a laser cannon at descending rows of aliens?",
        options: ["Galaga", "Space Invaders", "Asteroids", "Defender"],
        answer: 1
    },
    {
        q: "What is the name of the main city setting in 'Cyberpunk 2077'?",
        options: ["Night City", "Neo-Tokyo", "Rapture", "Metropolis"],
        answer: 0
    },
    {
        q: "Which Nintendo console featured a revolutionary motion-control remote in 2006?",
        options: ["Nintendo GameCube", "Nintendo Wii", "Nintendo Wii U", "Nintendo Switch"],
        answer: 1
    },
    {
        q: "In 'Final Fantasy VII', what is the name of the main protagonist with the Buster Sword?",
        options: ["Squall Leonhart", "Cloud Strife", "Zack Fair", "Sephiroth"],
        answer: 1
    },
    {
        q: "Which battle royale game was developed by Respawn Entertainment set in the Titanfall universe?",
        options: ["Apex Legends", "PUBG", "Hyper Scape", "Valheim"],
        answer: 0
    },
    {
        q: "What character do you play as in 'The Last of Us Part I' alongside Ellie?",
        options: ["Joel Miller", "Tommy", "Bill", "David"],
        answer: 0
    },
    {
        q: "Which 1980 arcade game features jumping over rolling barrels dropped by a giant ape?",
        options: ["Pitfall!", "Donkey Kong", "Rampage", "Mario Bros."],
        answer: 1
    },
    {
        q: "In 'Overwatch', which character is famous for the catchphrase 'Cheers, love! The cavalry's here!'?",
        options: ["Tracer", "Widowmaker", "D.Va", "Mercy"],
        answer: 0
    },
    {
        q: "What is the main currency used in the 'Roblox' universe?",
        options: ["V-Bucks", "Robux", "Minecoins", "R-Coins"],
        answer: 1
    },
    {
        q: "Which company developed the game engine 'Unreal Engine'?",
        options: ["Unity Technologies", "Epic Games", "Crytek", "EA DICE"],
        answer: 1
    },
    {
        q: "In 'Animal Crossing', what species of animal is the island's mortgage collector Tom Nook?",
        options: ["Racoon / Tanuki", "Bear", "Dog", "Cat"],
        answer: 0
    },
    {
        q: "Which classic game involves fitting falling geometric shapes together to clear lines?",
        options: ["Puyo Puyo", "Tetris", "Columns", "Lumines"],
        answer: 1
    },
    {
        q: "What is the name of the pink puffball character created by Masahiro Sakurai?",
        options: ["Jigglypuff", "Kirby", "Toad", "Waddle Dee"],
        answer: 1
    },
    {
        q: "Which post-apocalyptic game series features Vault Boy as its mascot?",
        options: ["S.T.A.L.K.E.R.", "Fallout", "Metro 2033", "Wasteland"],
        answer: 1
    },
    {
        q: "What is the name of the protagonist in the original 'Metroid' series?",
        options: ["Samus Aran", "Ridley", "Zero Suit", "Phazon"],
        answer: 0
    },
    {
        q: "Which 2020 indie game gained massive popularity during lockdowns as players voted out 'Impostors'?",
        options: ["Fall Guys", "Among Us", "Phasmophobia", "Valheim"],
        answer: 1
    },
    {
        q: "What is the maximum number of players in a standard team during a 'Counter-Strike' match?",
        options: ["4", "5", "6", "8"],
        answer: 1
    },
    {
        q: "In 'Grand Theft Auto V', how many playable main protagonists are there in total?",
        options: ["1", "2", "3", "4"],
        answer: 2
    },
    {
        q: "Which game features a sword known as the 'Master Sword'?",
        options: ["The Legend of Zelda", "Final Fantasy", "Dragon Quest", "Dark Souls"],
        answer: 0
    },
    {
        q: "What is the name of the dragon defeated in the End dimension in 'Minecraft'?",
        options: ["Ender Dragon", "Nether Dragon", "Obsidian Dragon", "Void Dragon"],
        answer: 0
    },
    {
        q: "Which tactical 5v5 shooter was developed and published by Riot Games in 2020?",
        options: ["Overwatch", "Valorant", "Paladins", "Rainbow Six Siege"],
        answer: 1
    },
    {
        q: "Who is the brother of Mario in the Nintendo franchise?",
        options: ["Wario", "Luigi", "Waluigi", "Toad"],
        answer: 1
    },
    {
        q: "What is the name of the island setting in 'Far Cry 3'?",
        options: ["Rook Islands", "Yara", "Hope County", "Isla Nublar"],
        answer: 0
    },
    {
        q: "Which company developed the 'Mass Effect' space opera franchise?",
        options: ["BioWare", "Bethesda", "Obsidian Entertainment", "Bungie"],
        answer: 0
    },
    {
        q: "In 'Portal', what device does the player use to solve puzzles?",
        options: ["Aperture Science Handheld Portal Device", "Gravity Gun", "Time Manipulator", "Plasma Cutter"],
        answer: 0
    },
    {
        q: "Which 2011 game developed by Bethesda features shouts called 'Thu'um' in the land of Skyrim?",
        options: ["Oblivion", "The Elder Scrolls V: Skyrim", "Fallout 4", "Starfield"],
        answer: 1
    },
    {
        q: "What is the name of the yellow electric creature that accompanies Ash Ketchum?",
        options: ["Charmander", "Squirtle", "Pikachu", "Eevee"],
        answer: 2
    },
    {
        q: "In 'Doom' (1993), what is the space marine protagonist commonly referred to as?",
        options: ["Doomguy / Doom Slayer", "B.J. Blazkowicz", "Duke Nukem", "Master Chief"],
        answer: 0
    },
    {
        q: "Which game studio developed 'Horizon Zero Dawn' and 'Horizon Forbidden West'?",
        options: ["Guerrilla Games", "Naughty Dog", "Insomniac Games", "Sucker Punch"],
        answer: 0
    },
    {
        q: "In 'Civilization', which historical figure leads the French civilization in many editions?",
        options: ["Napoleon Bonaparte", "Joan of Arc", "Louis XIV", "Charles de Gaulle"],
        answer: 0
    },
    {
        q: "What is the name of the martial artist protagonist in the 'Yakuza / Like a Dragon' series?",
        options: ["Kazuma Kiryu", "Goro Majima", "Ichiban Kasuga", "Shun Akiyama"],
        answer: 0
    },
    {
        q: "Which game series developed by Capcom features hunting massive monsters with giant weapons?",
        options: ["Monster Hunter", "Dragon's Dogma", "Devil May Cry", "Lost Planet"],
        answer: 0
    },
    {
        q: "In 'God of War' (2018), what weapon replaces Kratos's Blades of Chaos at the start of his journey?",
        options: ["Leviathan Axe", "Mjolnir", "Spear of Olympus", "Blade of Artemis"],
        answer: 0
    },
    {
        q: "Which popular indie game features a silent knight exploring the ruined underground kingdom of Hallownest?",
        options: ["Celeste", "Hollow Knight", "Dead Cells", "Ori and the Blind Forest"],
        answer: 1
    },
    {
        q: "What is the name of the kingdom where 'Super Mario Odyssey' begins?",
        options: ["Cap Kingdom", "Mushroom Kingdom", "Cascade Kingdom", "Metro Kingdom"],
        answer: 0
    },
    {
        q: "Which FPS game series developed by id Software began with 'Castle Wolfenstein' ideas in 1992?",
        options: ["Wolfenstein", "Doom", "Quake", "Rage"],
        answer: 0
    },
    {
        q: "What is the primary currency used in Fortnite to buy cosmetics and battle passes?",
        options: ["V-Bucks", "Fort-Coins", "G-Coins", "Battle Bucks"],
        answer: 0
    },
    {
        q: "In 'Subnautica', what planet does the player crash-land on?",
        options: ["4546B", "Acheron", "Pandora", "Tachyon"],
        answer: 0
    },
    {
        q: "Which horror game developed by Scott Cawthon features surviving night shifts against animatronics?",
        options: ["Five Nights at Freddy's", "Poppy Playtime", "Bendy and the Ink Machine", "Slender"],
        answer: 0
    },
    {
        q: "What is the main character's name in 'Metal Gear Solid'?",
        options: ["Solid Snake", "Big Boss", "Raiden", "Liquid Snake"],
        answer: 0
    },
    {
        q: "Which game developed by Team Cherry is set in the bug-filled world of Hallownest?",
        options: ["Hollow Knight", "Cuphead", "Shovel Knight", "Undertale"],
        answer: 0
    },
    {
        q: "In 'Terraria', what boss must be defeated in the Underworld to unlock Hardmode?",
        options: ["Wall of Flesh", "Eye of Cthulhu", "Eater of Worlds", "Skeletron"],
        answer: 0
    },
    {
        q: "Which strategy game franchise developed by Creative Assembly combines turn-based management with real-time battles?",
        options: ["Total War", "Age of Empires", "Command & Conquer", "Company of Heroes"],
        answer: 0
    },
    {
        q: "What is the title of the original 1996 PlayStation game starring Lara Croft?",
        options: ["Tomb Raider", "Uncharted", "Indiana Jones", "Pitfall"],
        answer: 0
    },
    {
        q: "Which action-adventure game developed by Insomniac Games was released for PS4 in 2018?",
        options: ["Marvel's Spider-Man", "Batman: Arkham Knight", "Infamous", "Prototype"],
        answer: 0
    },
    {
        q: "In 'Dota 2', what is the ultimate goal required to win the match?",
        options: ["Destroy the enemy Ancient", "Capture 5 zones", "Eliminate 50 enemies", "Slay the Roshan"],
        answer: 0
    },
    {
        q: "Which iconic handheld console was released by Sony in 2004?",
        options: ["PlayStation Portable (PSP)", "PlayStation Vita", "Game Boy Advance", "Nintendo DS"],
        answer: 0
    },
    {
        q: "What is the name of the protagonist in 'Kingdom Hearts' who wields a Keyblade?",
        options: ["Sora", "Riku", "Kairi", "Roxas"],
        answer: 0
    },
    {
        q: "Which game features a viral fungal infection known as the Cordyceps brain infection?",
        options: ["The Last of Us", "Days Gone", "Left 4 Dead", "State of Decay"],
        answer: 0
    },
    {
        q: "What is the name of the main antagonist in 'Far Cry 3'?",
        options: ["Vaas Montenegro", "Pagan Min", "Joseph Seed", "Anton Castillo"],
        answer: 0
    },
    {
        q: "In 'Borderlands', what are the vault hunters searching for on the planet Pandora?",
        options: ["The Vault", "Eridium", "The Key", "The Sanctuary"],
        answer: 0
    },
    {
        q: "Which classic RPG franchise created by Yuji Horii features slimes as its mascot monster?",
        options: ["Dragon Quest", "Final Fantasy", "Persona", "Tales of Arise"],
        answer: 0
    },
    {
        q: "What is the name of the main ship in the 'Mass Effect' trilogy commanded by Shepard?",
        options: ["SSV Normandy", "Pillar of Autumn", "The Normandy SR-2", "Endeavor"],
        answer: 0
    },
    {
        q: "Which puzzle-platformer created by Playdead features a young boy traveling through a dark, monochromatic world?",
        options: ["LIMBO", "INSIDE", "Little Nightmares", "Braid"],
        answer: 0
    },
    {
        q: "In 'Fall Guys', how many players typically start in a standard battle royale match?",
        options: ["60", "100", "50", "80"],
        answer: 0
    },
    {
        q: "Which rhythm game uses a plastic guitar controller to hit notes in time with songs?",
        options: ["Guitar Hero", "Rock Band", "Beat Saber", "Dance Dance Revolution"],
        answer: 0
    },
    {
        q: "What is the setting of 'Fallout 4'?",
        options: ["Boston (The Commonwealth)", "Las Vegas", "Washington D.C.", "Appalachia"],
        answer: 0
    },
    {
        q: "Which character is known as the 'Ghost of Tsushima' in the 2020 PS4 game?",
        options: ["Jin Sakai", "Lord Shimura", "Khotun Khan", "Yuna"],
        answer: 0
    },
    {
        q: "In 'Cuphead', what style of animation inspired the game's art direction?",
        options: ["1930s Rubber Hose Animation", "1980s Anime", "Pixel Art", "Claymation"],
        answer: 0
    },
    {
        q: "Which survival game developed by Iron Gate Studio takes place in a Norse-inspired purgatory?",
        options: ["Valheim", "Raft", "Rust", "The Forest"],
        answer: 0
    },
    {
        q: "What is the name of the city setting in 'Grand Theft Auto IV'?",
        options: ["Liberty City", "Los Santos", "Vice City", "San Fierro"],
        answer: 0
    },
    {
        q: "Which Nintendo game series features Captain Olimar controlling tiny plant-like creatures?",
        options: ["Pikmin", "Chibi-Robo!", "Animal Crossing", "Splatoon"],
        answer: 0
    }
];