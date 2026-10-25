const science = [
  {
    q: 'What is the chemical symbol for the element Gold?',
    options: ['Ag', 'Au', 'Fe', 'Hg'],
    answer: 1,
  },
  {
    q: "Which planet in our solar system is known as the 'Red Planet'?",
    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    answer: 1,
  },
  {
    q: "What is the primary gas found in the Earth's atmosphere?",
    options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
    answer: 1,
  },
  {
    q: 'What is the speed of light in a vacuum approximately equal to?',
    options: ['150,000 km/s', '300,000 km/s', '450,000 km/s', '600,000 km/s'],
    answer: 1,
  },
  {
    q: 'Which power house organelle is responsible for generating cellular ATP energy?',
    options: [
      'Ribosome',
      'Mitochondrion',
      'Golgi apparatus',
      'Endoplasmic reticulum',
    ],
    answer: 1,
  },
  {
    q: 'What fundamental force holds atomic nuclei together against electrical repulsion?',
    options: [
      'Gravity',
      'Strong nuclear force',
      'Weak nuclear force',
      'Electromagnetism',
    ],
    answer: 1,
  },
  {
    q: 'What type of star is our Sun classified as?',
    options: ['Red Giant', 'Yellow Dwarf', 'White Dwarf', 'Blue Supergiant'],
    answer: 1,
  },
  {
    q: 'What is the pH value of pure water at room temperature?',
    options: ['0', '7', '14', '5'],
    answer: 1,
  },
  {
    q: 'Which scientist developed the general theory of relativity?',
    options: [
      'Isaac Newton',
      'Albert Einstein',
      'Niels Bohr',
      'Galileo Galilei',
    ],
    answer: 1,
  },
  {
    q: 'What process do plants use to convert light energy into chemical energy?',
    options: ['Respiration', 'Photosynthesis', 'Fermentation', 'Transpiration'],
    answer: 1,
  },
  {
    q: 'What is the hardest naturally occurring substance on Earth?',
    options: ['Titanium', 'Diamond', 'Quartz', 'Graphene'],
    answer: 1,
  },
  {
    q: 'How many chromosomes are in a standard human diploid cell?',
    options: ['23', '46', '48', '52'],
    answer: 1,
  },
  {
    q: 'Which element has the atomic number 1?',
    options: ['Helium', 'Hydrogen', 'Lithium', 'Carbon'],
    answer: 1,
  },
  {
    q: 'What is the SI unit of electric current?',
    options: ['Volt', 'Ampere', 'Ohm', 'Watt'],
    answer: 1,
  },
  {
    q: 'Which layer of the atmosphere contains the protective ozone layer?',
    options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'],
    answer: 1,
  },
  {
    q: 'What is the main structural component of plant cell walls?',
    options: ['Chitin', 'Cellulose', 'Keratin', 'Peptidoglycan'],
    answer: 1,
  },
  {
    q: 'Which subatomic particle carries a negative electrical charge?',
    options: ['Proton', 'Electron', 'Neutron', 'Positron'],
    answer: 1,
  },
  {
    q: 'What phenomenon causes light rays to bend when entering a different medium?',
    options: ['Reflection', 'Refraction', 'Diffraction', 'Dispersion'],
    answer: 1,
  },
  {
    q: 'What is the largest organ in the human body?',
    options: ['Liver', 'Skin', 'Brain', 'Lungs'],
    answer: 1,
  },
  {
    q: 'Which gas is released by humans during exhalation as a product of cellular respiration?',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Methane'],
    answer: 1,
  },
  {
    q: 'What is absolute zero in degrees Celsius?',
    options: ['0 °C', '-273.15 °C', '-100 °C', '-459.67 °C'],
    answer: 1,
  },
  {
    q: 'Which bone is the longest and strongest in the human body?',
    options: ['Tibia', 'Femur', 'Humerus', 'Fibula'],
    answer: 1,
  },
  {
    q: 'What type of chemical bond involves the sharing of electron pairs between atoms?',
    options: ['Ionic bond', 'Covalent bond', 'Metallic bond', 'Hydrogen bond'],
    answer: 1,
  },
  {
    q: 'Which ocean trench is the deepest known point on Earth?',
    options: [
      'Puerto Rico Trench',
      'Mariana Trench',
      'Java Trench',
      'Tonga Trench',
    ],
    answer: 1,
  },
  {
    q: 'What component in red blood cells binds to oxygen and gives blood its color?',
    options: ['Myoglobin', 'Hemoglobin', 'Fibrinogen', 'Albumin'],
    answer: 1,
  },
  {
    q: 'What type of lens is thicker at the edges than in the middle and diverges light?',
    options: [
      'Convex lens',
      'Concave lens',
      'Biconvex lens',
      'Cylindrical lens',
    ],
    answer: 1,
  },
  {
    q: 'Which scientist discovered penicillin in 1928?',
    options: [
      'Louis Pasteur',
      'Alexander Fleming',
      'Robert Koch',
      'Edward Jenner',
    ],
    answer: 1,
  },
  {
    q: 'What state of matter consists of an ionized gas with free electrons?',
    options: ['Solid', 'Plasma', 'Liquid', 'Gas'],
    answer: 1,
  },
  {
    q: 'What scale is used to measure the intensity of earthquakes based on seismic energy?',
    options: ['Beaufort scale', 'Richter scale', 'Mohs scale', 'Kelvin scale'],
    answer: 1,
  },
  {
    q: 'Which blood type is considered the universal red blood cell donor?',
    options: ['AB positive', 'O negative', 'A positive', 'O positive'],
    answer: 1,
  },
  {
    q: 'What part of the brain controls balance, coordination, and fine motor skills?',
    options: ['Cerebrum', 'Cerebellum', 'Brainstem', 'Thalamus'],
    answer: 1,
  },
  {
    q: 'What law of motion states that for every action there is an equal and opposite reaction?',
    options: [
      "Newton's First Law",
      "Newton's Third Law",
      "Newton's Second Law",
      'Law of Gravitation',
    ],
    answer: 1,
  },
  {
    q: 'Which metal is liquid at room temperature?',
    options: ['Gallium', 'Mercury', 'Bromine', 'Cesium'],
    answer: 1,
  },
  {
    q: 'What is the study of fossils called?',
    options: ['Archaeology', 'Paleontology', 'Geology', 'Anthropology'],
    answer: 1,
  },
  {
    q: 'What subatomic particle has zero electric charge?',
    options: ['Proton', 'Neutron', 'Electron', 'Neutrino'],
    answer: 1,
  },
  {
    q: 'Which organ stores and concentrates bile produced by the liver?',
    options: ['Pancreas', 'Gallbladder', 'Spleen', 'Kidney'],
    answer: 1,
  },
  {
    q: 'What metric unit measures force?',
    options: ['Joule', 'Newton', 'Pascal', 'Watt'],
    answer: 1,
  },
  {
    q: 'What is the common name for sodium chloride?',
    options: ['Baking soda', 'Table salt', 'Bleach', 'Lime'],
    answer: 1,
  },
  {
    q: 'Which dwarf planet is located in the asteroid belt between Mars and Jupiter?',
    options: ['Pluto', 'Ceres', 'Eris', 'Makemake'],
    answer: 1,
  },
  {
    q: 'What structure in a cell contains its genetic material in eukaryotes?',
    options: ['Cytoplasm', 'Nucleus', 'Vacuole', 'Lysosome'],
    answer: 1,
  },
  {
    q: 'What process converts a liquid into a gas below its boiling point?',
    options: ['Condensation', 'Evaporation', 'Sublimation', 'Deposition'],
    answer: 1,
  },
  {
    q: 'Which radioactive element is commonly used as fuel in nuclear power reactors?',
    options: ['Thorium', 'Uranium-235', 'Plutonium-239', 'Radium'],
    answer: 1,
  },
  {
    q: 'Which plant hormone triggers fruit ripening?',
    options: ['Auxin', 'Ethylene', 'Gibberellin', 'Cytokinin'],
    answer: 1,
  },
  {
    q: 'What is the law of conservation of energy also known as in thermodynamics?',
    options: [
      'Zeroth Law',
      'First Law of Thermodynamics',
      'Second Law',
      'Third Law',
    ],
    answer: 1,
  },
  {
    q: 'Which organ filters metabolic waste from blood to form urine?',
    options: ['Liver', 'Kidney', 'Bladder', 'Pancreas'],
    answer: 1,
  },
  {
    q: 'What distance unit is equal to approximately 3.26 light-years?',
    options: ['Astronomical Unit', 'Parsec', 'Kiloparsec', 'Gigameter'],
    answer: 1,
  },
  {
    q: 'Which enzyme in saliva breaks down starches into simpler sugars?',
    options: ['Pepsin', 'Amylase', 'Lipase', 'Trypsin'],
    answer: 1,
  },
  {
    q: 'What type of rock forms from cooling magma or lava?',
    options: ['Sedimentary', 'Igneous', 'Metamorphic', 'Fossiliferous'],
    answer: 1,
  },
  {
    q: "What fundamental physical constant is denoted by 'G' in gravitational force equations?",
    options: [
      'Planck constant',
      'Gravitational constant',
      'Boltzmann constant',
      'Avogadro constant',
    ],
    answer: 1,
  },
  {
    q: 'Which biological macromolecule carries genetic instructions in living organisms?',
    options: [
      'Lipid',
      'Deoxyribonucleic Acid (DNA)',
      'Carbohydrate',
      'Protein',
    ],
    answer: 1,
  },
  {
    q: 'What gas gives urine its distinctive smell after decomposing?',
    options: ['Methane', 'Ammonia', 'Sulfur dioxide', 'Chlorine'],
    answer: 1,
  },
  {
    q: 'What is the boundary surrounding a black hole from which nothing can escape called?',
    options: [
      'Singularity',
      'Event Horizon',
      'Accretion Disk',
      'Photon Sphere',
    ],
    answer: 1,
  },
  {
    q: 'Which fundamental particle carries the electromagnetic force?',
    options: ['Gluon', 'Photon', 'W Boson', 'Graviton'],
    answer: 1,
  },
  {
    q: 'What is the SI unit of frequency?',
    options: ['Second', 'Hertz', 'Radian', 'Decibel'],
    answer: 1,
  },
  {
    q: 'Which human gland regulates body metabolism by producing hormones like T3 and T4?',
    options: ['Adrenal gland', 'Thyroid gland', 'Pituitary gland', 'Pancreas'],
    answer: 1,
  },
  {
    q: 'What branch of chemistry focuses specifically on carbon-containing compounds?',
    options: [
      'Inorganic Chemistry',
      'Organic Chemistry',
      'Physical Chemistry',
      'Analytical Chemistry',
    ],
    answer: 1,
  },
  {
    q: 'Which planet has the highest surface temperature in our solar system?',
    options: ['Mercury', 'Venus', 'Mars', 'Jupiter'],
    answer: 1,
  },
  {
    q: 'What form of heat transfer occurs through fluid movement?',
    options: ['Conduction', 'Convection', 'Radiation', 'Advection'],
    answer: 1,
  },
  {
    q: 'What chemical element is essential for organic life and forms four covalent bonds?',
    options: ['Nitrogen', 'Carbon', 'Silicon', 'Phosphorus'],
    answer: 1,
  },
  {
    q: 'What is the approximate age of the Universe according to modern cosmology?',
    options: [
      '4.5 billion years',
      '13.8 billion years',
      '20 billion years',
      '100 billion years',
    ],
    answer: 1,
  },
  {
    q: 'Which component in human blood is responsible for clotting?',
    options: [
      'Red blood cells',
      'Platelets (Thrombocytes)',
      'White blood cells',
      'Plasma',
    ],
    answer: 1,
  },
  {
    q: 'What type of acid is found in vinegar?',
    options: ['Citric acid', 'Acetic acid', 'Lactic acid', 'Sulfuric acid'],
    answer: 1,
  },
  {
    q: 'What is the scientific term for cold-blooded animals?',
    options: ['Endothermic', 'Ectothermic', 'Homeothermic', 'Mesothermic'],
    answer: 1,
  },
  {
    q: 'Which scale measures mineral hardness from 1 (talc) to 10 (diamond)?',
    options: ['Vickers scale', 'Mohs scale', 'Brinell scale', 'Rockwell scale'],
    answer: 1,
  },
  {
    q: 'What is the term for a solution that resists changes in pH when acid or base is added?',
    options: ['Saturated solution', 'Buffer solution', 'Colloid', 'Suspension'],
    answer: 1,
  },
  {
    q: 'Which moon orbiting Jupiter is the largest moon in our solar system?',
    options: ['Europa', 'Ganymede', 'Io', 'Callisto'],
    answer: 1,
  },
  {
    q: 'What SI unit measures electrical resistance?',
    options: ['Volt', 'Ohm', 'Siemens', 'Tesla'],
    answer: 1,
  },
  {
    q: 'What type of cell division produces four haploid daughter cells for reproduction?',
    options: ['Mitosis', 'Meiosis', 'Binary fission', 'Budding'],
    answer: 1,
  },
  {
    q: 'What is the light-sensitive inner lining at the back of the human eye called?',
    options: ['Cornea', 'Retina', 'Iris', 'Lens'],
    answer: 1,
  },
  {
    q: 'Which element is a halogen and exists as a dark purple solid that sublimates easily?',
    options: ['Chlorine', 'Iodine', 'Bromine', 'Fluorine'],
    answer: 1,
  },
  {
    q: 'What scientific instrument is used to measure atmospheric pressure?',
    options: ['Thermometer', 'Barometer', 'Hygrometer', 'Anemometer'],
    answer: 1,
  },
  {
    q: 'Which part of a flower receives pollen during fertilization?',
    options: ['Anther', 'Stigma', 'Style', 'Filament'],
    answer: 1,
  },
  {
    q: 'What is the name for a subatomic particle made up of three quarks, such as a proton or neutron?',
    options: ['Meson', 'Baryon', 'Lepton', 'Boson'],
    answer: 1,
  },
  {
    q: 'Which law describes the relationship between pressure and volume of a gas at constant temperature?',
    options: [
      "Charles's Law",
      "Boyle's Law",
      "Gay-Lussac's Law",
      "Avogadro's Law",
    ],
    answer: 1,
  },
  {
    q: 'What type of symbiotic relationship benefits one organism while leaving the other unaffected?',
    options: ['Mutualism', 'Commensalism', 'Parasitism', 'Amensalism'],
    answer: 1,
  },
  {
    q: 'What is the name of the brightest star visible in our night sky?',
    options: ['Betelgeuse', 'Sirius', 'Polaris', 'Alpha Centauri'],
    answer: 1,
  },
  {
    q: 'Which metal is the best conductor of electricity at room temperature?',
    options: ['Copper', 'Silver', 'Gold', 'Aluminum'],
    answer: 1,
  },
  {
    q: 'What organelle contains digestive enzymes to break down waste inside animal cells?',
    options: ['Peroxisome', 'Lysosome', 'Vacuole', 'Ribosome'],
    answer: 1,
  },
  {
    q: 'What phenomenon occurs when a moving source shifts sound or light wave frequencies?',
    options: [
      'Tyndall effect',
      'Doppler effect',
      'Photoelectric effect',
      'Compton effect',
    ],
    answer: 1,
  },
  {
    q: 'Which group of noble gases sits in Group 18 of the periodic table?',
    options: [
      'Alkali metals',
      'Inert / Noble gases',
      'Halogens',
      'Transition metals',
    ],
    answer: 1,
  },
  {
    q: 'What polymer compound forms the exoskeleton of arthropods and insects?',
    options: ['Cellulose', 'Chitin', 'Keratin', 'Lignin'],
    answer: 1,
  },
  {
    q: 'Which planet has a giant storm system known as the Great Red Spot?',
    options: ['Saturn', 'Jupiter', 'Neptune', 'Uranus'],
    answer: 1,
  },
  {
    q: 'What SI unit measures energy, work, or heat?',
    options: ['Watt', 'Joule', 'Pascal', 'Newton'],
    answer: 1,
  },
  {
    q: 'Which structure connects bones to other bones at a joint?',
    options: ['Tendon', 'Ligament', 'Cartilage', 'Fascia'],
    answer: 1,
  },
  {
    q: 'What is the heaviest naturally occurring element by atomic mass on Earth?',
    options: ['Plutonium', 'Uranium', 'Thorium', 'Lead'],
    answer: 1,
  },
  {
    q: 'Which atmospheric layer lies directly above the troposphere?',
    options: ['Mesosphere', 'Stratosphere', 'Thermosphere', 'Exosphere'],
    answer: 1,
  },
  {
    q: 'What is the term for animals that eat both plants and animals?',
    options: ['Herbivore', 'Omnivore', 'Carnivore', 'Detritivore'],
    answer: 1,
  },
  {
    q: 'Which property of a wave describes the height from its crest to its middle position?',
    options: ['Wavelength', 'Amplitude', 'Frequency', 'Period'],
    answer: 1,
  },
  {
    q: 'What acid is found in the stomach to assist in food digestion?',
    options: [
      'Nitric acid',
      'Hydrochloric acid',
      'Acetic acid',
      'Phosphoric acid',
    ],
    answer: 1,
  },
  {
    q: 'What is the name of the cloud of gas and dust from which solar systems form?',
    options: ['Galaxy', 'Nebula', 'Quasar', 'Pulsar'],
    answer: 1,
  },
  {
    q: 'Which blood vessel type carries blood back toward the heart under lower pressure?',
    options: ['Artery', 'Vein', 'Capillary', 'Arteriole'],
    answer: 1,
  },
  {
    q: 'What is the loss of electrons in a chemical reaction called?',
    options: ['Reduction', 'Oxidation', 'Hydrolysis', 'Neutralization'],
    answer: 1,
  },
  {
    q: 'Which part of the cell is responsible for protein synthesis?',
    options: ['Nucleolus', 'Ribosome', 'Golgi Body', 'Mitochondrion'],
    answer: 1,
  },
  {
    q: 'What natural event causes an oceanic tsunamis in most cases?',
    options: [
      'Hurricanes',
      'Undersea Earthquakes',
      'Volcanic ash',
      'Tidal cycles',
    ],
    answer: 1,
  },
  {
    q: "What constant value represents Avogadro's number approximately?",
    options: ['3.00 × 10^8', '6.022 × 10^23', '1.602 × 10^-19', '9.81'],
    answer: 1,
  },
  {
    q: 'Which layer of Earth lies directly below the crust?',
    options: ['Outer Core', 'Mantle', 'Inner Core', 'Lithosphere'],
    answer: 1,
  },
  {
    q: 'What form of energy is stored in an object due to its position or height?',
    options: [
      'Kinetic energy',
      'Potential energy',
      'Thermal energy',
      'Chemical energy',
    ],
    answer: 1,
  },
  {
    q: "Which fundamental constant is denoted by 'h' in quantum mechanics?",
    options: [
      'Rydberg constant',
      'Planck constant',
      'Speed of light',
      'Faraday constant',
    ],
    answer: 1,
  },
  {
    q: 'What is the medical term for high blood pressure?',
    options: ['Hypotension', 'Hypertension', 'Arrhythmia', 'Ischemia'],
    answer: 1,
  },
  {
    q: 'Which gas turns limewater milky when bubbled through it?',
    options: ['Oxygen', 'Carbon Dioxide', 'Hydrogen', 'Nitrogen dioxide'],
    answer: 1,
  },
];
