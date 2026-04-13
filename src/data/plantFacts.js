/**
 * Fun facts for species the model can identify.
 * Each entry has an array of { en, de, es } objects so we can pick one at random.
 */
const PLANT_FACTS = {
  'Monstera deliciosa': [
    {
      en: 'In the wild, Monstera can climb trees over 20 metres tall.',
      de: 'In der Natur kann die Monstera Bäume von über 20 Metern erklimmen.',
      es: 'En la naturaleza, la Monstera puede trepar árboles de más de 20 metros.',
    },
    {
      en: 'The holes in its leaves are called fenestrations and help it survive strong winds.',
      de: 'Die Löcher in den Blättern heißen Fenestrationen und helfen ihr, starken Wind zu überstehen.',
      es: 'Los agujeros en sus hojas se llaman fenestraciones y la ayudan a resistir vientos fuertes.',
    },
  ],
  'Epipremnum aureum': [
    {
      en: 'Pothos is almost impossible to kill and can grow in just water.',
      de: 'Pothos ist fast unzerstörbar und kann sogar nur in Wasser wachsen.',
      es: 'El Pothos es casi imposible de matar y puede crecer solo en agua.',
    },
    {
      en: 'NASA listed Pothos as one of the best air-purifying houseplants.',
      de: 'Die NASA listete Pothos als eine der besten luftreinigenden Zimmerpflanzen.',
      es: 'La NASA incluyó al Pothos como una de las mejores plantas purificadoras de aire.',
    },
  ],
  'Spathiphyllum wallisii': [
    {
      en: 'Peace Lilies aren\'t true lilies — they belong to the Araceae family.',
      de: 'Friedenslilien sind keine echten Lilien — sie gehören zur Familie der Araceae.',
      es: 'Los lirios de la paz no son lirios verdaderos — pertenecen a la familia Araceae.',
    },
    {
      en: 'They can bloom even in low-light rooms, which is rare for flowering plants.',
      de: 'Sie können sogar in dunklen Räumen blühen, was bei Blütenpflanzen selten ist.',
      es: 'Pueden florecer incluso en habitaciones con poca luz, algo raro en plantas con flores.',
    },
  ],
  'Sansevieria trifasciata': [
    {
      en: 'Snake Plants release oxygen at night, making them great bedroom plants.',
      de: 'Bogenhanf gibt nachts Sauerstoff ab und ist daher ideal fürs Schlafzimmer.',
      es: 'Las lenguas de suegra liberan oxígeno por la noche, ideales para el dormitorio.',
    },
    {
      en: 'They can survive weeks without water thanks to succulent-like leaves.',
      de: 'Sie können dank sukkulentenartiger Blätter wochenlang ohne Wasser überleben.',
      es: 'Pueden sobrevivir semanas sin agua gracias a sus hojas suculentas.',
    },
  ],
  'Chlorophytum comosum': [
    {
      en: 'Spider Plants produce "babies" on long runners that can be propagated easily.',
      de: 'Grünlilien bilden „Babys" an langen Ausläufern, die leicht vermehrt werden können.',
      es: 'Las cintas producen "bebés" en largos estolones que se propagan fácilmente.',
    },
    {
      en: 'They were among the first plants tested by NASA for air purification.',
      de: 'Sie gehörten zu den ersten Pflanzen, die von der NASA zur Luftreinigung getestet wurden.',
      es: 'Fueron de las primeras plantas probadas por la NASA para purificar el aire.',
    },
  ],
  'Ficus elastica': [
    {
      en: 'Rubber Plants were once tapped for latex used to make natural rubber.',
      de: 'Gummibäume wurden einst zur Gewinnung von Latex für Naturkautschuk angezapft.',
      es: 'Los árboles de caucho se usaban para extraer látex para hacer caucho natural.',
    },
    {
      en: 'In tropical forests, their aerial roots can strangle host trees.',
      de: 'In tropischen Wäldern können ihre Luftwurzeln Wirtsbäume erwürgen.',
      es: 'En bosques tropicales, sus raíces aéreas pueden estrangular árboles huéspedes.',
    },
  ],
  'Ficus benjamina': [
    {
      en: 'Weeping Figs famously drop their leaves when moved to a new spot.',
      de: 'Birkenfeigen verlieren bekanntlich ihre Blätter, wenn sie umgestellt werden.',
      es: 'Los ficus benjamina pierden hojas cuando se cambian de lugar.',
    },
    {
      en: 'In warm climates they can grow into large trees exceeding 30 metres.',
      de: 'In warmen Klimazonen können sie zu über 30 Meter hohen Bäumen heranwachsen.',
      es: 'En climas cálidos pueden crecer como árboles de más de 30 metros.',
    },
  ],
  'Dracaena marginata': [
    {
      en: 'The red edges on Dragon Tree leaves contain a resin called "dragon\'s blood".',
      de: 'Die roten Ränder der Drachenbaum-Blätter enthalten ein Harz namens „Drachenblut".',
      es: 'Los bordes rojos de las hojas del Drácena contienen una resina llamada "sangre de dragón".',
    },
    {
      en: 'They can live for decades and adapt to very low light.',
      de: 'Sie können jahrzehntelang leben und sich an sehr wenig Licht anpassen.',
      es: 'Pueden vivir décadas y adaptarse a muy poca luz.',
    },
  ],
  'Zamioculcas zamiifolia': [
    {
      en: 'ZZ Plants store water in their thick underground rhizomes.',
      de: 'Die Zamioculcas speichert Wasser in ihren dicken unterirdischen Rhizomen.',
      es: 'La planta ZZ almacena agua en sus gruesos rizomas subterráneos.',
    },
    {
      en: 'They were virtually unknown as houseplants until the late 1990s.',
      de: 'Als Zimmerpflanze waren sie bis Ende der 1990er kaum bekannt.',
      es: 'Eran prácticamente desconocidas como planta de interior hasta finales de los 90.',
    },
  ],
  'Dieffenbachia seguine': [
    {
      en: 'Chewing a Dieffenbachia leaf can temporarily make you unable to speak — hence "Dumb Cane".',
      de: 'Das Kauen eines Dieffenbachia-Blatts kann vorübergehend die Sprache rauben — daher „Dumb Cane".',
      es: 'Masticar una hoja de Dieffenbachia puede dejarte temporalmente sin habla — de ahí "Dumb Cane".',
    },
    {
      en: 'It was one of the first tropical plants brought to Europe in the 1800s.',
      de: 'Sie war eine der ersten tropischen Pflanzen, die im 19. Jahrhundert nach Europa gebracht wurden.',
      es: 'Fue una de las primeras plantas tropicales traídas a Europa en el siglo XIX.',
    },
  ],
  'Calathea orbifolia': [
    {
      en: 'Calathea leaves fold up at night like hands in prayer.',
      de: 'Calathea-Blätter falten sich nachts zusammen wie betende Hände.',
      es: 'Las hojas de Calathea se pliegan por la noche como manos en oración.',
    },
    {
      en: 'They are native to the tropical Americas and love high humidity.',
      de: 'Sie stammen aus dem tropischen Amerika und lieben hohe Luftfeuchtigkeit.',
      es: 'Son nativas de las Américas tropicales y aman la alta humedad.',
    },
  ],
  'Maranta leuconeura': [
    {
      en: 'Prayer Plants get their name because leaves fold upward each evening.',
      de: 'Gebetspflanzen heißen so, weil sich ihre Blätter abends nach oben falten.',
      es: 'Las plantas de oración deben su nombre a que sus hojas se pliegan cada noche.',
    },
    {
      en: 'Their striking vein patterns are sometimes compared to herringbone fabric.',
      de: 'Ihre auffälligen Blattadern werden manchmal mit Fischgrätmuster verglichen.',
      es: 'Sus llamativos patrones de nervaduras se comparan a veces con el tejido de espiga.',
    },
  ],
  'Alocasia amazonica': [
    {
      en: 'In some cultures, giant Alocasia leaves are used as natural umbrellas.',
      de: 'In manchen Kulturen werden riesige Alocasia-Blätter als natürliche Regenschirme verwendet.',
      es: 'En algunas culturas, las hojas gigantes de Alocasia se usan como paraguas naturales.',
    },
    {
      en: 'The species name "amazonica" is misleading — it was bred in a Miami nursery.',
      de: 'Der Artname „amazonica" ist irreführend — sie wurde in einer Gärtnerei in Miami gezüchtet.',
      es: 'El nombre "amazonica" es engañoso — fue criada en un vivero de Miami.',
    },
  ],
  'Anthurium andreanum': [
    {
      en: 'The colorful "petal" of an Anthurium is actually a modified leaf called a spathe.',
      de: 'Das farbige „Blütenblatt" eines Anthuriums ist eigentlich ein modifiziertes Blatt, die Spatha.',
      es: 'El "pétalo" colorido del Anturio en realidad es una hoja modificada llamada espata.',
    },
    {
      en: 'They can bloom continuously for months under good conditions.',
      de: 'Unter guten Bedingungen können sie monatelang durchgehend blühen.',
      es: 'Pueden florecer continuamente durante meses en buenas condiciones.',
    },
  ],
  'Philodendron hederaceum': [
    {
      en: 'Heartleaf Philodendrons have been popular houseplants since the Victorian era.',
      de: 'Herzblatt-Philodendren sind seit der viktorianischen Ära beliebte Zimmerpflanzen.',
      es: 'Los filodendros de hoja corazón son plantas de interior populares desde la era victoriana.',
    },
    {
      en: 'They are epiphytes — in the wild they climb other trees for light.',
      de: 'Sie sind Epiphyten — in der Natur klettern sie an Bäumen empor zum Licht.',
      es: 'Son epífitas — en la naturaleza trepan otros árboles buscando luz.',
    },
  ],
  'Tradescantia zebrina': [
    {
      en: 'Tradescantia can root from a single stem cutting placed in water.',
      de: 'Tradescantia kann aus einem einzelnen Steckling im Wasser Wurzeln schlagen.',
      es: 'La Tradescantia puede enraizar con un solo esqueje en agua.',
    },
    {
      en: 'Its purple-striped leaves shimmer with a metallic sheen in sunlight.',
      de: 'Ihre lila gestreiften Blätter schimmern im Sonnenlicht metallisch.',
      es: 'Sus hojas de rayas púrpura brillan con un destello metálico al sol.',
    },
  ],
  'Pilea peperomioides': [
    {
      en: 'The Chinese Money Plant was shared across Scandinavia through cuttings before nurseries sold it.',
      de: 'Die Ufopflanze wurde in Skandinavien über Stecklinge weitergegeben, bevor sie im Handel war.',
      es: 'La planta del dinero china se compartió en Escandinavia a través de esquejes antes de venderse en viveros.',
    },
    {
      en: 'It produces small offsets ("pups") at the base that are easy to share.',
      de: 'Sie bildet kleine Ableger am Fuß, die leicht weitergegeben werden können.',
      es: 'Produce pequeños brotes ("hijuelos") en la base que son fáciles de compartir.',
    },
  ],
  'Peperomia obtusifolia': [
    {
      en: 'There are over 1,500 species of Peperomia worldwide.',
      de: 'Es gibt weltweit über 1.500 Peperomia-Arten.',
      es: 'Hay más de 1.500 especies de Peperomia en el mundo.',
    },
    {
      en: 'Their thick leaves store water, making them semi-succulent.',
      de: 'Ihre dicken Blätter speichern Wasser, was sie zu Halbsukkulenten macht.',
      es: 'Sus hojas gruesas almacenan agua, haciéndolas semi-suculentas.',
    },
  ],
  'Hoya carnosa': [
    {
      en: 'Hoya flowers produce fragrant nectar droplets that are sticky to the touch.',
      de: 'Hoya-Blüten produzieren duftende Nektartropfen, die klebrig sind.',
      es: 'Las flores de Hoya producen gotas de néctar fragante que son pegajosas al tacto.',
    },
    {
      en: 'A single Hoya vine can live for decades and grow several metres long.',
      de: 'Eine einzelne Hoya-Ranke kann jahrzehntelang leben und mehrere Meter lang werden.',
      es: 'Una sola enredadera de Hoya puede vivir décadas y crecer varios metros.',
    },
  ],
  'Aloe vera': [
    {
      en: 'Aloe vera gel has been used medicinally for over 6,000 years.',
      de: 'Aloe-Vera-Gel wird seit über 6.000 Jahren medizinisch verwendet.',
      es: 'El gel de aloe vera se ha usado con fines medicinales durante más de 6.000 años.',
    },
    {
      en: 'Ancient Egyptians called Aloe the "plant of immortality".',
      de: 'Die alten Ägypter nannten Aloe die „Pflanze der Unsterblichkeit".',
      es: 'Los antiguos egipcios llamaban al Aloe la "planta de la inmortalidad".',
    },
  ],
  'Crassula ovata': [
    {
      en: 'In many cultures, Jade Plants are considered symbols of good luck and prosperity.',
      de: 'In vielen Kulturen gelten Geldbaum-Pflanzen als Symbole für Glück und Wohlstand.',
      es: 'En muchas culturas, las plantas de jade se consideran símbolos de buena suerte y prosperidad.',
    },
    {
      en: 'They can live for 50+ years and develop thick, tree-like trunks.',
      de: 'Sie können über 50 Jahre alt werden und dicke, baumartige Stämme entwickeln.',
      es: 'Pueden vivir más de 50 años y desarrollar troncos gruesos como árboles.',
    },
  ],
  'Echeveria elegans': [
    {
      en: 'Echeveria rosettes are polycarpic — they can bloom multiple times in their life.',
      de: 'Echeveria-Rosetten sind polykarp — sie können mehrfach in ihrem Leben blühen.',
      es: 'Las rosetas de Echeveria son policárpicas — pueden florecer varias veces en su vida.',
    },
    {
      en: 'They are native to the semi-desert regions of Central America.',
      de: 'Sie stammen aus den Halbwüsten Mittelamerikas.',
      es: 'Son nativas de las regiones semidesérticas de Centroamérica.',
    },
  ],
  'Beaucarnea recurvata': [
    {
      en: 'Ponytail Palms aren\'t palms at all — they\'re related to agaves.',
      de: 'Flaschenpalmen sind gar keine Palmen — sie sind mit Agaven verwandt.',
      es: 'Las patas de elefante no son palmeras — están emparentadas con los agaves.',
    },
    {
      en: 'Their swollen trunk base stores water for months of drought.',
      de: 'Ihr verdickter Stammfuß speichert Wasser für monatelange Trockenheit.',
      es: 'Su base de tronco hinchada almacena agua para meses de sequía.',
    },
  ],
  'Dypsis lutescens': [
    {
      en: 'Areca Palms can transpire up to a litre of water per day, humidifying a room.',
      de: 'Arecapalmen können bis zu einen Liter Wasser pro Tag verdunsten und so einen Raum befeuchten.',
      es: 'Las palmeras areca pueden transpirar hasta un litro de agua al día, humidificando una habitación.',
    },
    {
      en: 'In the wild they grow in clusters and can reach 12 metres tall.',
      de: 'In der Natur wachsen sie in Gruppen und können 12 Meter hoch werden.',
      es: 'En la naturaleza crecen en grupos y pueden alcanzar los 12 metros.',
    },
  ],
  'Schefflera arboricola': [
    {
      en: 'Dwarf Umbrella Trees are popular bonsai subjects due to their forgiving nature.',
      de: 'Zwergscheffleren sind wegen ihrer Pflegeleichtigkeit beliebte Bonsai-Pflanzen.',
      es: 'Los árboles sombrilla enanos son populares como bonsái por su naturaleza tolerante.',
    },
    {
      en: 'They get their name from the umbrella-like arrangement of their leaflets.',
      de: 'Ihren Namen verdanken sie der schirmartigen Anordnung ihrer Blättchen.',
      es: 'Deben su nombre a la disposición de sus folíolos en forma de paraguas.',
    },
  ],
};

/**
 * Return a random fun fact for a given species, or null if none available.
 * Returns the multilingual object { en, de, es }.
 */
export function getRandomFact(scientificName) {
  const facts = PLANT_FACTS[scientificName];
  if (!facts || facts.length === 0) return null;
  return facts[Math.floor(Math.random() * facts.length)];
}
