const nature = [
    {
        q: "Which animal is the largest living creature on Earth?",
        options: ["African Elephant", "Blue Whale", "Colossal Squid", "Giraffe"],
        answer: 1
    },
    {
        q: "What process do green plants use to convert sunlight into chemical energy?",
        options: ["Respiration", "Photosynthesis", "Fermentation", "Transpiration"],
        answer: 1
    },
    {
        q: "Which species of bird is famous for making long-distance migrations between the Arctic and Antarctic?",
        options: ["Arctic Tern", "Albatross", "Swallow", "Osprey"],
        answer: 0
    },
    {
        q: "What is the only species of wild cat native to the British Isles in the 21st century?",
        options: ["Eurasian Lynx", "Scottish Wildcat", "Iberian Lynx", "European Wildcat"],
        answer: 1
    },
    {
        q: "Which gas makes up approximately 78% of Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
        answer: 1
    },
    {
        q: "What is the hardest natural mineral substance found on Earth?",
        options: ["Quartz", "Corundum", "Diamond", "Topaz"],
        answer: 2
    },
    {
        q: "Which tree species, native to California, is considered the tallest tree species in the world?",
        options: ["Giant Sequoia", "Coast Redwood", "Douglas Fir", "Sitka Spruce"],
        answer: 1
    },
    {
        q: "What group of flying mammals are the only mammals capable of true sustained flight?",
        options: ["Bats", "Flying Squirrels", "Sugar Gliders", "Flying Lemurs"],
        answer: 0
    },
    {
        q: "Which large, critically endangered big cat species is native to the Iberian Peninsula?",
        options: ["Eurasian Lynx", "Iberian Lynx", "Snow Leopard", "Caracal"],
        answer: 1
    },
    {
        q: "What is the primary food source of the Giant Panda in the wild?",
        options: ["Eucalyptus leaves", "Bamboo", "Sugar cane", "Pine needles"],
        answer: 1
    },
    {
        q: "Which ocean biome feature is constructed by tiny marine invertebrates secreting calcium carbonate?",
        options: ["Kelp Forest", "Coral Reef", "Hydrothermal Vent", "Continental Shelf"],
        answer: 1
    },
    {
        q: "What is the term for animals that are active primarily during dusk and dawn?",
        options: ["Diurnal", "Nocturnal", "Crepuscular", "Matutinal"],
        answer: 2
    },
    {
        q: "Which European brown bear subspecies inhabits mountain ranges in Northern and Eastern Europe?",
        options: ["Grizzly Bear", "Eurasian Brown Bear", "Kodiak Bear", "Marsican Brown Bear"],
        answer: 1
    },
    {
        q: "Which marine creature has three hearts, blue blood, and can squirt ink for self-defense?",
        options: ["Squid", "Octopus", "Cuttlefish", "Nautilus"],
        answer: 1
    },
    {
        q: "What pigment gives plant leaves their green color and absorbs light for photosynthesis?",
        options: ["Carotenoid", "Chlorophyll", "Anthocyanin", "Xanthophyll"],
        answer: 1
    },
    {
        q: "Which bird species, common across Europe, is known for imitating the songs of other birds and mechanical sounds?",
        options: ["European Starling", "Blackbird", "Nightjar", "Song Thrush"],
        answer: 0
    },
    {
        q: "What is the fast, hot liquid rock called before it reaches the Earth's surface during a volcanic eruption?",
        options: ["Lava", "Magma", "Basalt", "Pumice"],
        answer: 1
    },
    {
        q: "Which flightless bird species native to New Zealand is nocturnal and has nostrils at the end of its beak?",
        options: ["Kiwi", "Kakapo", "Takahe", "Moa"],
        answer: 0
    },
    {
        q: "What group of cold-blooded animals undergoes metamorphosis from an aquatic larva to a terrestrial adult?",
        options: ["Reptiles", "Amphibians", "Annelids", "Crustaceans"],
        answer: 1
    },
    {
        q: "Which large semi-aquatic rodent was successfully reintroduced to rivers across Europe after near extinction?",
        options: ["Nutria", "Eurasian Beaver", "Muskrat", "Capybara"],
        answer: 1
    },
    {
        q: "What natural event causes the luminous green and red displays in the sky near the North Pole?",
        options: ["Aurora Borealis (Northern Lights)", "Aurora Australis", "Zodiacal Light", "St. Elmo's Fire"],
        answer: 0
    },
    {
        q: "Which coniferous tree sheds its needles every autumn, unlike most other conifers?",
        options: ["Scots Pine", "Larch", "Norway Spruce", "Silver Fir"],
        answer: 1
    },
    {
        q: "What insect produces silk to weave its protective cocoon before metamorphosis?",
        options: ["Silkworm (Silkmoth caterpillar)", "Spider", "Honeybee", "Lacewing"],
        answer: 0
    },
    {
        q: "Which large sea mammal species, known for its long spiraled tusk, lives in Arctic waters?",
        options: ["Beluga Whale", "Narwhal", "Walrus", "Bowhead Whale"],
        answer: 1
    },
    {
        q: "What type of rock is formed from the cooling and solidification of molten rock?",
        options: ["Sedimentary", "Igneous", "Metamorphic", "Calcite"],
        answer: 1
    },
    {
        q: "Which small insect-eating mammal in Europe is covered in sharp spines for defense?",
        options: ["Porcupine", "European Hedgehog", "Echidna", "Tenrec"],
        answer: 1
    },
    {
        q: "What microscopic algae and drifting organisms form the primary base of marine food webs?",
        options: ["Phytoplankton", "Kelp", "Seaweed", "Zooplankton"],
        answer: 0
    },
    {
        q: "Which bird species, famous for returning to the same nesting site in Europe, nests on chimneys and rooftops?",
        options: ["White Stork", "Barn Owl", "Peregrine Falcon", "Heron"],
        answer: 0
    },
    {
        q: "What is the only species of deer where both males and females grow antlers?",
        options: ["Red Deer", "Reindeer / Caribou", "Roe Deer", "Fallow Deer"],
        answer: 1
    },
    {
        q: "Which poisonous fungus, common in European pine forests, has a bright red cap with white spots?",
        options: ["Death Cap", "Fly Agaric (Amanita muscaria)", "Destroying Angel", "Chanterelle"],
        answer: 1
    },
    {
        q: "What organ do fish use to extract dissolved oxygen directly from water?",
        options: ["Lungs", "Gills", "Swim bladder", "Spiracles"],
        answer: 1
    },
    {
        q: "Which member of the weasel family in Europe is known for its distinctive black and white striped face and underground sett?",
        options: ["European Badger", "Pine Marten", "Otter", "Stoat"],
        answer: 0
    },
    {
        q: "What natural phenomenon is measured using the Moment Magnitude or Richter Scale?",
        options: ["Hurricanes", "Earthquakes", "Tornadoes", "Tsunamis"],
        answer: 1
    },
    {
        q: "Which bird is the fastest member of the animal kingdom, reaching speeds over 300 km/h in a hunting dive?",
        options: ["Golden Eagle", "Peregrine Falcon", "Swift", "Gyrfalcon"],
        answer: 1
    },
    {
        q: "What type of symbiotic lifeform consists of a fungus living together with an alga or cyanobacterium?",
        options: ["Moss", "Lichen", "Fern", "Liverwort"],
        answer: 1
    },
    {
        q: "Which ocean animal is known as the 'sea wolf' or apex predator, possessing distinct black and white markings?",
        options: ["Great White Shark", "Orca (Killer Whale)", "Leopard Seal", "Barracuda"],
        answer: 1
    },
    {
        q: "What term describes animals that regulate their own internal body temperature regardless of the environment?",
        options: ["Ectothermic", "Endothermic", "Poikilothermic", "Mesothermic"],
        answer: 1
    },
    {
        q: "Which large bovine species, wiped out in the wild in 1927, has been successfully reintroduced to European forests?",
        options: ["Aurochs", "European Bison (Wisent)", "American Bison", "Water Buffalo"],
        answer: 1
    },
    {
        q: "What type of leaf shape is characteristic of Deciduous trees like Oaks and Maples?",
        options: ["Needles", "Broadleaves", "Scales", "Fronds"],
        answer: 1
    },
    {
        q: "Which amphibian species in Europe is known for its bright yellow and black warning coloration?",
        options: ["Fire Salamander", "Common Toad", "Smooth Newt", "Tree Frog"],
        answer: 0
    },
    {
        q: "What layer of Earth's atmosphere contains the ozone layer that protects us from UV radiation?",
        options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
        answer: 1
    },
    {
        q: "Which sea mammal species uses echolocation to navigate and hunt in dark underwater environments?",
        options: ["Dolphin", "Manatee", "Sea Lion", "Walrus"],
        answer: 0
    },
    {
        q: "What sweet liquid produced by flowers attracts pollinators like bees and butterflies?",
        options: ["Pollen", "Nectar", "Resin", "Sap"],
        answer: 1
    },
    {
        q: "Which predatory bird species in Europe was nearly wiped out by DDT pesticide before making a major recovery?",
        options: ["Red Kite", "Osprey", "Sparrowhawk", "Kestrel"],
        answer: 1
    },
    {
        q: "What scientific name is given to the study of insects?",
        options: ["Ornithology", "Entomology", "Herpetology", "Ichthyology"],
        answer: 1
    },
    {
        q: "Which species of seal is the larger of the two native seal species found around European coasts?",
        options: ["Harbour Seal", "Grey Seal", "Ringed Seal", "Monk Seal"],
        answer: 1
    },
    {
        q: "What geological feature forms when water dissolves underground limestone, creating subterranean chambers?",
        options: ["Fjord", "Cave / Cavern", "Geysir", "Caldera"],
        answer: 1
    },
    {
        q: "Which small European songbird with a bright red breast is traditionally associated with winter and Christmas?",
        options: ["European Robin", "Chaffinch", "Bullfinch", "Goldfinch"],
        answer: 0
    },
    {
        q: "What is the primary function of a camel's hump?",
        options: ["Water storage", "Fat storage", "Temperature insulation", "Bone support"],
        answer: 1
    },
    {
        q: "Which member of the crow family is known for its high intelligence and shiny black plumage?",
        options: ["Raven", "Magpie", "Jay", "Jackdaw"],
        answer: 0
    },
    {
        q: "What type of tree retains its green leaves or needles throughout the entire year?",
        options: ["Deciduous", "Evergreen", "Perennial", "Annual"],
        answer: 1
    },
    {
        q: "Which reptile in Northern Europe is the only venomous snake native to Great Britain?",
        options: ["Grass Snake", "Adder (Vipera berus)", "Smooth Snake", "Slow Worm"],
        answer: 1
    },
    {
        q: "What term refers to the natural seasonal movement of animals from one region to another?",
        options: ["Hibernation", "Migration", "Torpor", "Estivation"],
        answer: 1
    },
    {
        q: "Which flower species grows from a bulb and triggered a famous speculative market frenzy in 17th-century Holland?",
        options: ["Daffodil", "Tulip", "Hyacinth", "Crocus"],
        answer: 1
    },
    {
        q: "What part of a plant absorbs water and mineral nutrients directly from the soil?",
        options: ["Stem", "Roots", "Leaves", "Stigma"],
        answer: 1
    },
    {
        q: "Which European wild canine species lives in organized packs led by an alpha pair?",
        options: ["Red Fox", "Eurasian Wolf", "Golden Jackal", "Dingo"],
        answer: 1
    },
    {
        q: "What is the scientific term for animals that eat both plant and animal matter?",
        options: ["Herbivore", "Carnivore", "Omnivore", "Detritivore"],
        answer: 2
    },
    {
        q: "Which coastal tree ecosystem acts as a natural buffer against storm surges in tropical regions?",
        options: ["Kelp forest", "Mangrove", "Boreal forest", "Salt marsh"],
        answer: 1
    },
    {
        q: "What is the small legless lizard native to Europe that is frequently mistaken for a snake?",
        options: ["Slow Worm", "Sand Lizard", "Common Lizard", "Gecko"],
        answer: 0
    },
    {
        q: "Which insect is famously known for its monarch variety migrating thousands of kilometers across North America?",
        options: ["Dragonfly", "Butterfly", "Moth", "Ladybird"],
        answer: 1
    },
    {
        q: "What protective outer shell ingredient forms the exoskeletons of insects and crustaceans?",
        options: ["Keratin", "Chitin", "Cartilage", "Cellulose"],
        answer: 1
    },
    {
        q: "Which owl species in Europe is easily recognized by its heart-shaped white face and silent flight?",
        options: ["Tawny Owl", "Barn Owl", "Eagle Owl", "Little Owl"],
        answer: 1
    },
    {
        q: "What natural event causes coral bleaching in oceans around the world?",
        options: ["Rising water temperatures", "Ocean currents", "Heavy rain", "Deep sea earthquakes"],
        answer: 0
    },
    {
        q: "Which mammal native to Australia lays eggs instead of giving birth to live young?",
        options: ["Kangaroo", "Platypus", "Koala", "Wombat"],
        answer: 1
    },
    {
        q: "What type of wetland ecosystem is characterized by acidic, spongy peaty soil and sphagnum moss?",
        options: ["Marsh", "Bog", "Swamp", "Estuary"],
        answer: 1
    },
    {
        q: "Which species of native European squirrel is threatened by the introduced American Grey Squirrel?",
        options: ["Eurasian Red Squirrel", "Flying Squirrel", "Ground Squirrel", "Chipmunk"],
        answer: 0
    },
    {
        q: "What is the term for a deep, inactive sleep state used by some animals to survive harsh winters?",
        options: ["Estivation", "Hibernation", "Moulting", "Diapause"],
        answer: 1
    },
    {
        q: "Which flower, known for turning its head toward the sun during the day, is harvested for edible seeds and oil?",
        options: ["Marigold", "Sunflower", "Dahlia", "Daisy"],
        answer: 1
    },
    {
        q: "What type of creature is a Chameleon?",
        options: ["Amphibian", "Reptile", "Insect", "Fish"],
        answer: 1
    },
    {
        q: "Which European duck species is the most common wild duck, featuring a green iridescent head on males?",
        options: ["Teal", "Mallard", "Tufted Duck", "Pintail"],
        answer: 1
    },
    {
        q: "What substance in human and animal red blood cells binds oxygen for transport through the body?",
        options: ["Hemoglobin", "Plasma", "Platelet", "Myoglobin"],
        answer: 0
    },
    {
        q: "Which aquatic mammal in Northern oceans uses long tusks to pull itself out of icy water and dig for clams?",
        options: ["Manatee", "Walrus", "Sea Otter", "Elephant Seal"],
        answer: 1
    },
    {
        q: "What is the main component of a rhinoceros horn?",
        options: ["Bone", "Keratin", "Ivory", "Cartilage"],
        answer: 1
    },
    {
        q: "Which bird species in Europe is famous for laying its eggs in the nests of other bird species (brood parasitism)?",
        options: ["Common Cuckoo", "Magpie", "Jay", "Cowbird"],
        answer: 0
    },
    {
        q: "What is the name of the process by which a caterpillar transforms into a butterfly?",
        options: ["Metamorphosis", "Ecdysis", "Germination", "Mitosis"],
        answer: 0
    },
    {
        q: "Which European deer species is the smallest native deer in Western Europe?",
        options: ["Red Deer", "Roe Deer", "Fallow Deer", "Muntjac"],
        answer: 1
    },
    {
        q: "What natural geological spring periodically erupts with hot water and steam?",
        options: ["Fumarole", "Geyser", "Hot Spring", "Sinkhole"],
        answer: 1
    },
    {
        q: "Which insect colony consists of a single queen, thousands of female worker bees, and male drones?",
        options: ["Termites", "Honeybees", "Wasps", "Hornets"],
        answer: 1
    },
    {
        q: "What is the largest flying bird in Europe by wingspan?",
        options: ["Golden Eagle", "Dalmatian Pelican / Cinereous Vulture", "Mute Swan", "White-tailed Eagle"],
        answer: 1
    },
    {
        q: "Which plant species traps insects in hinged leaves to digest them for nitrogen?",
        options: ["Pitcher Plant", "Venus Flytrap", "Sundew", "Bladderwort"],
        answer: 1
    },
    {
        q: "What term describes a river or stream that flows into a larger main river?",
        options: ["Estuary", "Tributary", "Delta", "Distributary"],
        answer: 1
    },
    {
        q: "Which species of wild goat with large curved horns lives in the high Alps of Europe?",
        options: ["Chamois", "Alpine Ibex", "Mouflon", "Markhor"],
        answer: 1
    },
    {
        q: "What type of tree produces acorns as its fruit?",
        options: ["Beech", "Oak", "Chestnut", "Birch"],
        answer: 1
    },
    {
        q: "Which marine creature is technically an echinoderm and can regenerate its arms if cut off?",
        options: ["Jellyfish", "Starfish (Sea Star)", "Sea Anemone", "Crab"],
        answer: 1
    },
    {
        q: "What is the primary food of koalas in Australia?",
        options: ["Bamboo", "Eucalyptus leaves", "Acacia seeds", "Pine bark"],
        answer: 1
    },
    {
        q: "Which bird of prey in Europe has a distinctive deeply forked red tail and reddish-brown plumage?",
        options: ["Buzzard", "Red Kite", "Kestrel", "Harrier"],
        answer: 1
    },
    {
        q: "What form of erosion carved dramatic landscapes like the Grand Canyon over millions of years?",
        options: ["Glacial erosion", "Water / River erosion", "Wind erosion", "Coastal wave erosion"],
        answer: 1
    },
    {
        q: "Which marine species, related to stingrays, has a long snout lined with tooth-like structures?",
        options: ["Sawfish", "Swordfish", "Marlik", "Hammerhead"],
        answer: 0
    },
    {
        q: "What term describes plants that complete their entire life cycle (germination to seed production) in one year?",
        options: ["Perennials", "Annuals", "Biennials", "Ephemerals"],
        answer: 1
    },
    {
        q: "Which aquatic mammal uses stones as tools to crack open sea urchins and shellfish while floating on its back?",
        options: ["Sea Otter", "Beaver", "Seal", "Dolphin"],
        answer: 0
    },
    {
        q: "What type of forest biome, dominated by coniferous trees, covers much of Northern Europe, Russia, and Canada?",
        options: ["Temperate forest", "Taiga (Boreal forest)", "Rainforest", "Chaparral"],
        answer: 1
    },
    {
        q: "Which species of migratory fish in Europe swims up freshwater rivers from the ocean to spawn?",
        options: ["Atlantic Salmon", "Cod", "Herring", "Haddock"],
        answer: 0
    },
    {
        q: "What organic material formed from partially decayed vegetation in waterlogged conditions is harvested as fuel in parts of Europe?",
        options: ["Coal", "Peat", "Shale", "Lignite"],
        answer: 1
    },
    {
        q: "Which mammal species in Europe builds complex twig lodges in lakes and dams across streams?",
        options: ["Otter", "Eurasian Beaver", "Water Vole", "Muskrat"],
        answer: 1
    },
    {
        q: "What is the scientific term for the shedding of skin, feathers, or fur by an animal?",
        options: ["Moulting (Ecdysis)", "Metamorphosis", "Grooming", "Desquamation"],
        answer: 0
    },
    {
        q: "Which small European bird species, yellow-green in color, is known for its beautiful song and namesake Atlantic islands?",
        options: ["Serin", "Atlantic Canary", "Greenfinch", "Siskin"],
        answer: 1
    },
    {
        q: "What feature allows bats and dolphins to navigate and find prey using reflected sound waves?",
        options: ["Infrared vision", "Echolocation", "Lateral line system", "Electroreception"],
        answer: 1
    },
    {
        q: "Which European wild boar is the ancestor of modern domestic pigs?",
        options: ["Eurasian Wild Boar (Sus scrofa)", "Warthog", "Peccary", "Babirusa"],
        answer: 0
    },
    {
        q: "What is the study of weather and atmospheric phenomena called?",
        options: ["Geology", "Meteorology", "Climatology", "Oceanography"],
        answer: 1
    },
    {
        q: "Which European seabird, easily identified by its colorful striped beak during breeding season, nests in burrows on coastal cliffs?",
        options: ["Guillemot", "Atlantic Puffin", "Razorbill", "Fulmar"],
        answer: 1
    }
];