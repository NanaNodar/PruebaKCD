<template>
    <div class="races_container">
        <article
        class="races_padding"
        v-for="(races, index) in races"
        :key="index" 
        >
            <div class="races_answer">
                <h3 class="races_title" @click="toggleAnswer(index)">
                    {{ races.title }}
                    <span class="races_arrow" :class="{ 'races_arrow--rotate': races.show }">
                        <img src="../assets/races.svg" class="races_img" />
                    </span>
                </h3>
                <p class="races_show" v-show="races.show">
                    <span v-html="races.answer"></span> 
                </p>
            </div>
        </article>
    </div>
</template>


<script setup>
import { ref } from 'vue';

const races = ref([
  {
    title: "GRUPO I - Perros Pastores",
    answer: `<style>
              .bold-list {
                font-weight: bold;
              }
           </style>
        <ol class="bold-list">
            <li> Anatolia Carabash - Cobán Kopegi.</li>
            <li> Antiguo Perro de Pastor ingles- Bobtail - Old English Sheepdog.</li>
            <li> Border Collie.</li>
            <li> Boyero de Ardenas - Bouvier des Ardennes.</li>
            <li> Boyero de Berna - Berner Sennenhund.</li>
            <li> Boyero de Flandes - Bouvier de Flandes.</li>
            <li> Collie Barbudo - Bearded Collie.</li>
            <li> Collie de Pelo Corto - Collie Smooth.</li>
            <li> Collie de Pelo Largo - Collie Rough</li>
            <li> Corgi Galés Cárdigan - Kardigan del Corgi Galés.</li>
            <li> Corgi Galés del Pembroke.</li>
            <li> Cuvac Eslobaco - Slovensky Cuvac.</li>
            <li> Gran Perro de Montaña Suiza - Grosser Schweizer Sennenhund.</li>
            <li> Kangal.</li>
            <li> Karst Pastor - Kraški Ovchar.</li>
            <li> Kelpie Australiano.</li>
            <li> Komondor.</li>
            <li> Kuvasz.</li>
            <li> Lankashire Heeler.</li>
            <li> Lapphund Sueco -Suecia Lapphund.</li>
            <li> Lapphund Finlandés - Suomenlapinkoira.</li>
            <li> Mudi.</li>
            <li> Ovejero Gaucho.</li>
            <li> Pastor de Tatra - Polski Owczarek Podhalanski.</li>
            <li> Pastor Australiano de Cola Corta - Stumpy Tail Cattle Dog Australiano.</li>
            <li> Pastor Blanco Suizo Perro.</li>
            <li> Pastor Croata - Hrvatski Ovchar.</li>
            <li> Pastor de Beauce - Beauceron - Berger de Beauc.</li>
            <li> Pastor de Begamasco - Caña de Pastore Bergamasco.</li>
            <li> Pastor de Brie - Berger de Brie.</li>
            <li> Pastor de Picardia - Berger Picard.</li>
            <li> Pastor de Renos de Finlandia - Lapinporokoira.</li>
            <li> Pastor del Pirineo de Pelo Largo - Chien de Berger des Pyrénées à poil largo.</li>
            <li> Pastor del Pirineos de Cara Lisa - Chien de Berger des P. rase una cara.</li>
            <li> Pastor del Sur de Rusia - Youzhnorusskaya Ovtcharka.</li>
            <li> Pastor Holandés - Pelo Duro - Hollandse Herdershond.</li>
            <li> Pastor Holandés - Pelo Largo - Hollandse Herdershond.</li>
            <li> Pastor Holandés- Pelo Corto - Hollandse Herdershond.</li>
            <li> Pastor Polaco de Tierras Bajas - Polski Owczarek Nizinny.</li>
            <li> Pastor Portugués - Cao da Serra de Aires.</li>
            <li> Pastor Rumano Mioritic - Cobanec rumano Mioritic.</li>
            <li> Perro de Castro Laboreiro - Cao de Castro Laboreiro.</li>
            <li> Perro de Montaña de la Sierra de la Estrella o el Pastor de Serra da Estrela - Pegado y Liso - Cao da Serra da Estrela.</li>
            <li> Perro de Montaña de la Sierra de la Estrella o el Pastor de Serra da Estrela - Pelo Largo - Cao da Serra da Estrela.</li>
            <li> Perro de Montaña de los Pirineos - Chien de Montagne des Pyrénées.</li>
            <li> Perro de Montaña del Atlas - Chien de Montagne de l'Atlas Aidi.</li>
            <li> Perro de Montaña Appenzell - Appenzeller Sennenhund.</li>
            <li> Perro de Montaña Entlebucher - Entlebucher Sennenhund.</li>
            <li> Perro de Pastor Catalán - Gos d' Atura Català.</li>
            <li> Perro de pastor de Europa del Este.</li>
            <li> Perro de Pastor Mallorquín - Ka de Bestiar.</li>
            <li> Perro de Pastor Vasco.</li>
            <li> Perro de Pastor Yugoslavo de Charplanina -Sharplaninac.</li>
            <li> Perro Fila de San Miguel - Cao de Fila de Sao Miguel.</li>
            <li> Perro Pastor Alemán - Pelo Corto.</li>
            <li> Perro Pastor Alemán - Pelo Largo.</li>
            <li> Perro Pastor Belga - Groenendael.</li>
            <li> Perro Pastor Belga - Laekenois.</li>
            <li> Perro Pastor Belga - Malinois.</li>
            <li> Perro Pastor Belga - Tervueren.</li>
            <li> Perro Pastor Búlgaro - Bulgarsko Ovtcharsko Kuche.</li>
            <li> Perro Pastor de Asia Central - Sredneaziatskaya Ovtcharka.</li>
            <li> Perro Pastor de Maremma y de los Abruzos - Cane da Pastore Maremma.</li>
            <li> Perro Pastor de Shetland - Shetland Sheepdog.</li>
            <li> Perro Pastor del Cáucaso - Kavkazskaya Ovtcharka.</li>
            <li> Perro Pastor Islandia - Islenskur Fjárhundur.</li>
            <li> Perro Pastor Noruego - Noruego Buhund.</li>
            <li> Puli.</li>
            <li> Pumi.</li>
            <li> Rafeiro do Alentejo.</li>
            <li> Vallhund Sueco - Spitz de los Visigodos - Västgötaspets.</li>
        </ol>`,
    show: false,
  },
  {
    title: "GRUPO II - Perros de Trabajo y Utilidad",
    answer:
    `<style>
              .bold-list {
                font-weight: bold;
              }
           </style>
        <ol class="bold-list">
            <li> Akita Americano.</li>
            <li> Akita Inu.</li>
            <li> Alaskan Malamute.</li>
            <li> Antiguo Bulldog Inglés. (OLD ENGLISH BULLDOG)</li>
            <li> Boerboel.</li>
            <li> Boxer.</li>
            <li> Bulldog Americano.</li>
            <li> Bullmastif.</li>
            <li> Cane Corso.</li>
            <li> Doberman Pincher.</li>
            <li> Dogo de Burdeos.</li>
            <li> Dogo del Tibet - Do-Khi.</li>
            <li> Dogo Mayorquin - Ca de Bou.</li>
            <li> Fila Brasileiro.</li>
            <li> Gran Danes - Dogo Alemán - Deutsche Dogge.</li>
            <li> Holanda Broholmer.</li>
            <li> Leonberger.</li>
            <li> Mastin del Pirineo - Pirenean Mastiff.</li>
            <li> Mastín Español.</li>
            <li> Mastin Ingles.</li>
            <li> Mastin Napolitano - Mastino Napoletano.</li>
            <li> Perro de Canaan - Canaan Dog.</li>
            <li> Perro de Groenlandia - Grønlandshund.</li>
            <li> Perro de Guardia de Granja Hovawarts - Hovawarts.</li>
            <li> Perro de Taiwan.</li>
            <li> Perro Guardián de Moscú - Moskovskaya Storozhevaya.</li>
            <li> Perro Lobo Checoslovaco - Ceskoslovenský Vlcak.</li>
            <li> Perro Lobo de Saarlos - Saarlooswolfhond.</li>
            <li> Pincher Estándar.</li>
            <li> Rottweiler.</li>
            <li> Samoyedo.</li>
            <li> San Bernardo- Pelo Corto - St.Bernhardshund.</li>
            <li> San Bernardo- Pelo Largo - St.Bernhardshund.</li>
            <li> Schnauzer Estandar.</li>
            <li> Schnauzer Gigante - Riesenschnauzer.</li>
            <li> Siberian Husky.</li>
            <li> Terranova.</li>
            <li> Terranova Landseer.</li>
            <li> Terrier Negro Ruso - Ruso Negro Terrier.</li>
            <li> Tosa Inu.</li>`,
    show: false,
  },
  {
    title:
      "GRUPO III - Perros Terrier",
    answer:
    `<style>
              .bold-list {
                font-weight: bold;
              }
           </style>
        <ol class="bold-list">
            <li> Airedale Terrier.</li>
            <li> American Pitbull Terrier - APBT.</li>
            <li> American Staffordshire Terrier.</li>
            <li> Bedlington Terrier.</li>
            <li> Border Terrier.</li>
            <li> Bullterrier Inglés - Estándar.</li>
            <li> Bullterrier Inglés - Miniatura.</li>
            <li> Cairn Terrier.</li>
            <li> Cesky Terrier.</li>
            <li> Dandie Dinmont Terrier.</li>
            <li> Fox Terrier de Pelo Duro - Foxterrier Wire.</li>
            <li> Fox Terrier de Pelo Liso - Foxterrier Smooth.</li>
            <li> Irlandés Glen de Imaal Terrier.</li>
            <li> Jack Russel Terrier.</li>
            <li> Kerry Blue Terrier.</li>
            <li> Lakeland Terrier.</li>
            <li> Manchester Terrier.</li>
            <li> Norfolk Terrier.</li>
            <li> Norwich Terrier.</li>
            <li> Parson Russel Terrier.</li>
            <li> Ratonero Murciano.</li>
            <li> Schnauzer Miniatura.</li>
            <li> Sealyham Terrier.</li>
            <li> Skye Terrier.</li>
            <li> Smoushond Holandes.</li>
            <li> Staffordshire Bullterrier Inglés.</li>
            <li> Terrier Aleman de Caza - Alemania Jagdterrier.</li>
            <li> Terrier Brasileño - Terrier Brasileiro.</li>
            <li> Terrier Chileno.</li>
            <li> Terrier de Pelo Suave de Irlanda - Soft Coated Wheaten.</li>
            <li> Terrier Escoses - Scottish Terrier.</li>
            <li> Terrier Galés.</li>
            <li> Terrier Irlandés.</li>
            <li> West Highland White Terrier.</li>`,
    show: false,
  },
  {
    title:
      "GRUPO IV - Perros de Caza y Perdigueros",
    answer:
    `<style>
              .bold-list {
                font-weight: bold;
              }
           </style>
        <ol class="bold-list">
            <li> Antiguo Perro Puntero Danés - Gammel Dansk-Honsehund.</li>
            <li> Barbet.</li>
            <li> Bracco Italiano.</li>
            <li> Braco Alemán - Deutsch Kurzhaar.</li>
            <li> Braco Alemán de Pelo Cerdoso - Deutsch Stihelhaar.</li>
            <li> Braco Alemán de Pelo Duro - Deutsch Drathaar.</li>
            <li> Braco Alemán de Pelo Largo - Deutsch Langhaar.</li>
            <li> Braco Borbón - Braque de Bourbonnais.</li>
            <li> Braco de Ariége - Braque de l'ariège.</li>
            <li> Braco de Weimar  - Weimaraner</li>
            <li> Braco Francés Tipo Gascuña - Braque Français,Type Gascogne.</li>
            <li> Braco Francés Tipo Pirineos - Braque français, Type Pyrenees.</li>
            <li> Braco Saint Germain - Braque Saint-Germain.</li>
            <li> Chesapeake Bay Retriever.</li>
            <li> Clumber Spaniel. Coated Retriever Curly.</li>
            <li> Cocker Spaniel Americano.</li>
            <li> Cocker Spaniel Inglés.</li>
            <li> Flat Coated Retriever.</li>
            <li> Golden Retriever. Grande Münsterländer - Grosser Münsterländer.</li>
            <li> Griffon de Muestra Bohemio de Pelo Duro - Cesky Fousek.</li>
            <li> Grifón de Muestra Korthals - Griffon d’arrêt à poil Korthals.</li>
            <li> Labrador Retriever. Münsterländer Pequeño - Kleiner Münsterländer.</li>
            <li> Perdigueiro Português.</li>
            <li> Perdiguero de Burgos.</li>
            <li> Perdiguero de Drentse - Drentse Patrijshond.</li>
            <li> Perro de Agua Español.</li>
            <li> Perro de Agua Frisón - Wetterhoun.</li>
            <li> Perro de Agua Irlandés.</li>
            <li> Perro de Aguas Portugués - Cão de Agua Português.</li>
            <li> Perro de Laguna de Romagna - Lagotto Romagnolo.</li>
            <li> Perro de Muestra Eslovaco de Pelo Duro - Slovenský Hrubosrsty Stavac.</li>
            <li> Perro de Muestra Frisón - Stabyhoun.</li>
            <li> Perro de Muestra Italiano de Pelo Duro - Spinone Italiano.</li>
            <li> Perro Pequeño de Aves Acuáticas Holandés - Kooikerhondje.</li>
            <li> Pointer Ingles. Pudelpointer.</li>
            <li> Retriver de Nueva Escocia.</li>
            <li> Setter Gordon.</li>
            <li> Setter Inglés.</li>
            <li> Setter Irlandés Rojo.</li>
            <li> Setter Irlandés Rojo y blanco.</li>
            <li> Spaniel de Caza de Rusia.</li>
            <li> Spaniel Alemán - Deutscher Wachtelhund.</li>
            <li> Spaniel Azul de Picardia - Epagneul bleu de Picardie.</li>
            <li> Spaniel Breton - Epagneul Breton.</li>
            <li> Spaniel de Aguas Americano - American Water Spaniel.</li>
            <li> Spaniel de Campo - Field Spaniel.</li>
            <li> Spaniel de Picardia - Epagneul Picard.</li>
            <li> Spaniel de Pont-Audemer - Epagneul de Pont-Audemer.</li>
            <li> Spaniel Francés - Epagneul Français.</li>
            <li> Springer Spaniel Gales.</li>
            <li> Springer Spaniel Inglés.</li>
            <li> Sussex Spaniel.</li>
            <li> Viszla - Braco Húngaro de Pelo Duro - Magyar Vizsla Drotzörü.</li>
            <li> Viszla - Braco Hungría de Pelo Corto - Magyar Vizsla Rövidszörü.</li>
        </ol>`,
    show: false,
  },
  {
    title:
      "GRUPO V - Perros lebreles, Spitz y Caza de todo tipo",
    answer:
    `<style>
              .bold-list {
                font-weight: bold;
              }
           </style>
        <ol class="bold-list">
            <li> American Foxhound.</li>
            <li> Basset Artesiano de Normandía - Basset Artesien Normand.</li>
            <li> Basset Azul de Gascuña - Basset Bleu de Gascogne.</li>
            <li> Basset Hound.</li>
            <li> Basset Leonado de Bretaña - Basset Fauve de Bretagne.</li>
            <li> Beagle.</li>
            <li> Cimarron Uruguayo.</li>
            <li> Cirneco del Etna - Cirneco dell'Etna.</li>
            <li> Dachshund Estándar Pelo Corto (Teckel Estándar Pelo corto).</li>
            <li> Dachshund Estándar Pelo Duro (Teckel Estándar Pelo Duro).</li>
            <li> Dachshund Estándar Pelo Largo (Teckel Estándar Pelo Largo).</li>
            <li> Dogo Argentino.</li>
            <li> Elkhound Sueco - Jämthund.</li>
            <li> Foxhound Inglés.</li>
            <li> Galgo Afgano - Afghan Hound.</li>
            <li> Galgo Africano - Azawakh.</li>
            <li> Galgo Arabe - Sloughi.</li>
            <li> GALGO BARBUCHO CRIOLLO - Raza Autóctona Argentina -</li>
            <li> Galgo de Escocia - Greyhound of Scotland.</li>
            <li> Galgo de Hungría - Agar Magjar.</li>
            <li> Galgo Español.</li>
            <li> Galgo Ingles - Greyhound.</li>
            <li> Gran Azul de Gasconia - Grand bleu de Gascogne.</li>
            <li> Gran Basset Grifón Vendeano - Gran Basset Griffon Vendeen.</li>
            <li> Gran Gascon Saintongeois.</li>
            <li> Gran Grifon Vendeano - Gran Griffon Vendeen.</li>
            <li> Gran Sabueso Anglo-Francés Blanco y Naranja - Grand anglo-français blanc et naranja.</li>
            <li> Gran Sabueso Anglo-Francés Blanco y Negro - Grand anglo-français blanc et noir.</li>
            <li> Gran Sabueso Anglo-Francés Tricolor - Grand anglo-français tricolor.</li>
            <li> Griffon Nivernai.</li>
            <li> Grifon Azul de Gascuña Griffon Bleu de Gascogne.</li>
            <li> Grifon Leonado de Bretania -Griffon fauve de Bretagne.</li>
            <li> Grifon Vendeano Medio -Briquet Griffon Vendeen.</li>
            <li> Harrier.</li>
            <li> Laika de Siberia Oriental - Zapadno-Sibirskaïa Laïka.</li>
            <li> Laika del Este Siberiano - Vostotchno-Sibirskaïa Laïka.</li>
            <li> Laïka Ruso-Europeo - Russko-Evropeïskaïa Laïka.</li>
            <li> Lebrel Polaco - Polish Greyhound.</li>
            <li> Lebrel Ruso - Borzoi - Russkaya Psovaya Borzaya.</li>
            <li> Lebrero Helénico - Hellinikos Ichnilatis.</li>
            <li> Lobero Irlandes - Wolfhound Irlandés.</li>
            <li> Pequeño Basset Grifón Vendeano - Petit Basset Griffon Vendeen.</li>
            <li> Pequeño Gascon Saintogeois - Petit Gascon Saintongeois.</li>
            <li> Pequeño Sabueso Anglo-Francés de Ariège - Anglo-Français de Petite Vénerie Ariège.</li>
            <li> Pequeño Sabueso Azul de Gascuña - Petit bleu de Gascogne.</li>
            <li> Pequeño Sabueso Suizo - Schweizer Laufhund.</li>
            <li> Pequeño Sabueso Suizo a)Sabueso de Berna - Bernese Hound.</li>
            <li> Pequeño Sabueso Suizo b)Sabueso de las Montañas de Jura - Jura Hound.</li>
            <li> Pequeño Sabueso Suizo c)Sabueso de Lucerna - Schweizer Laufhund.</li>
            <li> Pequeño Sabueso Suizo d)Sabueso de Schwyz.</li>
            <li> Perro Billy.</li>
            <li> Perro Cazador de Alces Noruego Gris - Norsk Elghund Gra.</li>
            <li> Perro Cazador de Alces Noruego Negro - Norsk Ordenar Elghund.</li>
            <li> Perro de Osos de Carelia - Karjalankarhukoira.</li>
            <li> Perro del Alto Poitou - Poitevin.</li>
            <li> Perro del Faraón - Pharaoh Hound.</li>
            <li> Perro Jindo Coreano - Corean Jindo Dog.</li>
            <li> Perro Noruego de Frailecillos - Norsk Lundehund.</li>
            <li> Perro Overo de la Bahía de Rusia - Russkaya Gonchaya.</li>
            <li> Perro Rastreador de Nutrias - Otterhound.</li>
            <li> Perro Rastreador Negro y Fuego - Black y Tan Coonhound.</li>
            <li> Perro Tejonero de Westfalia - Westfälische Dachsbracke.</li>
            <li> Podenco Andaluz.</li>
            <li> Podenco Canario.</li>
            <li> Podenco Ibicenco Pelo Corto.</li>
            <li> Podenco Ibicenco Pelo Largo.</li>
            <li> Podenco Portugués Grande.</li>
            <li> Podenco Portugués Mediano.</li>
            <li> Podenco Portugués Miniatura.</li>
            <li> Porcelana - Porcelaine.</li>
            <li> Rhodesian Ridgeback.</li>
            <li> Sabueso - Bloodhound.</li>
            <li> Sabueso Alemán - Deutsche Bracke.</li>
            <li> Sabueso Anglo-Ruso - Anglo-Russkaya Gonchaya.</li>
            <li> Sabueso Artesiano -Chien d'Artois.</li>
            <li> Sabueso Austriaco Negro y Fuego - Brandlbracke.</li>
            <li> Sabueso Bosnio - Bosanski Ostrodlaki Gonic Barak.</li>
            <li> Sabueso Bulgaro de Ludogorie - Bulgarsko Ludogorsko Gonche.</li>
            <li> Sabueso Bulgaro de Pelo Duro - Bulgarski Barak.</li>
            <li> Sabueso de Baviera Montaña - Bayrischer Gebirgsschweisshund.</li>
            <li> Sabueso de Halden - Haldenstovare.</li>
            <li> Sabueso de Hamilton - Hamiltonstovare.</li>
            <li> Sabueso de Hannover - Hannover'scher Schweisshund.</li>
            <li> Sabueso de Hygen - Hygenhund.</li>
            <li> Sabueso de Istria de Pelo Corto - Istarski Kratkodlaki Gonic.</li>
            <li> Sabueso de Istria de Pelo Duro - Istarski Ostrodlaki Gonic.</li>
            <li> Sabueso de las Montañas de Montenegro - Crnogorski Planinski Gonic.</li>
            <li> Sabueso de Posavaz - Posavski Gonic.</li>
            <li> Sabueso de Rusia - Russkaya Pegaya Gonchaya.</li>
            <li> Sabueso de Schiller - Schillerstovare.</li>
            <li> Sabueso de Småland.</li>
            <li> Sabueso de Transilvania - Erdélyi Kopo.</li>
            <li> Sabueso del Tirol - Tiroler Bracke.</li>
            <li> Sabueso Eslovaco - Slovenský Kopov.</li>
            <li> Sabueso Español.</li>
            <li> Sabueso Estirio de Pelo Duro - Steirische Rauhhaarbracke.</li>
            <li> Sabueso Finlandes - Suomenajokoira.</li>
            <li> Sabueso Francés Blanco y Naranja - Français blanc et naranja.</li>
            <li> Sabueso Francés Blanco y Negro - Français blanc et noir.</li>
            <li> Sabueso Frances Tricolor - French Tricolor Hound - Chien Francais Tricolor.</li>
            <li> Sabueso Italiano Pelo Corto - Segugio Italiano.</li>
            <li> Sabueso Italiano Pelo Duro - Segugio Italiano.</li>
            <li> Sabueso Noruego - Noruega Hound Dunker.</li>
            <li> Sabueso Polaco - Ogro Polski.</li>
            <li> Sabueso Serbio - Srpski Gonic.</li>
            <li> Sabueso Suizo Estándar - Schweizer Laufhund.</li>
            <li> Sabueso Suizo Estándar a)Sabueso de Berna - Bernese Hound.</li>
            <li> Sabueso Suizo Estándar b)Sabueso de las Montañas de Jura - Jura Hound.</li>
            <li> Sabueso Suizo Estándar c)Sabueso de Lucerna - Schweizer Laufhund.</li>
            <li> Sabueso Suizo Estándar d)Sabueso de Schwyz.</li>
            <li> Sabueso Tricolor Servio - Srpski Trobojni Gonic.</li>
            <li> Saluki.</li>
            <li> Saupacker</li>
            <li> Spit Finlandes Laika - Karelo-finskaya Laika.</li>
            <li> Spitz de Norrbotten - Norrbottenspets.</li>
            <li> Spitz Finlandés - Suomenpystykorva.</li>
            <li> Suecia Dachsbracke Drever.</li>
            <li> Tejonero Alpino - Alpenländische Dachsbracke.</li>
            <li> Whippet.</li>
        </ol>`,
    show: false,
  },
  {
    title:
      "GRUPO VI - Perros de Compañia",
    answer:
    `<style>
              .bold-list {
                font-weight: bold;
              }
           </style>
        <ol class="bold-list">
            <li> American Bully.</li>
            <li> Basenji.</li>
            <li> Boston Terrier.</li>
            <li> Bulldog Autraliano.</li>
            <li> Bulldog Inglés.</li>
            <li> Bullterrier.</li>
            <li> Caniche - Poodle - Tamaños, Estándar o Mediano, y Gigante o Grande.</li>
            <li> Chow-Chow.</li>
            <li> Dachshund Miniatura Pelo Corto (Teckel Estándar Pelo corto).</li>
            <li> Dachshund Miniatura Pelo Duro (Teckel Estándar Pelo Duro).</li>
            <li> Dachshund Miniatura Pelo Largo (Teckel Estándar Pelo Largo).</li>
            <li> Dálmata.</li>
            <li> Eurasier.</li>
            <li> Hokkaido.</li>
            <li> Kai.</li>
            <li> Kisu.</li>
            <li> Mittelspitz Alemán</li>
            <li> Perro Sin Pelo del Perú: Estándar, Medio.</li>
            <li> Perro Sin pelo Mexicano: Estándar, Medio.</li>
            <li> Pincher Austriaco de Pelo Corto.</li>
            <li> Pincher Estándar.</li>
            <li> Pincher Pelo Corto de Austria.</li>
            <li> Pit Monster</li>
            <li> Ridgeback Tailandés.</li>
            <li> Shar-Pei.</li>
            <li> Shiba Inu.</li>
            <li> Shipperke.</li>
            <li> Spitz Alemán - Grosse (Grande).</li>
            <li> Spitz Japones - Japanese Spitz.</li>
            <li> Volpino Italiano.</li>
            <li> Wolfspitz Alemán (Keeshond).</li>
        </ol>`,
    show: false,
  },
  {
    title:
      "GRUPO VII - Perros Toy - Menos de 35cm",
    answer:
    `<style>
              .bold-list {
                font-weight: bold;
              }
           </style>
        <ol class="bold-list">
            <li> Affenpinscher.</li>
            <li> Bichon Frise.</li>
            <li> Bichón Habanero.</li>
            <li> Bichón Maltes.</li>
            <li> Bichon Bolognese.</li>
            <li> Biewer.</li>
            <li> Boston Terrier (variedad menos de 15 libras).</li>
            <li> BullDog Frances.</li>
            <li> Caniche Miniatura o Enano - Poodle Miniatura o Enano. (Todos los colores y patrones).</li>
            <li> CanicheToy - Poodle Toy. (Todos los colores y patrones).</li>
            <li> Chihuahua.</li>
            <li> Cotton Toulear.</li>
            <li> Crestado Chino.</li>
            <li> Dachshund Canigen Pelo Corto (Teckel Canigen Pelo corto).</li>
            <li> Dachshund Canigen Pelo Duro (Teckel Canigen Pelo Duro).</li>
            <li> Dachshund Canigen Pelo Largo (Teckel Canigen Pelo Largo).</li>
            <li> Dachshund Caningen Piebald Pelo Corto (Teckel Caningen Piebald).</li>
            <li> Dachshund Caningen Piebald Pelo Duro (Teckel Caningen Piebald).</li>
            <li> Dachshund Caningen Piebald Pelo Largo (Teckel Caningen Piebald).</li>
            <li> Griffon Belga.</li>
            <li> Pequeño Perro León.</li>
            <li> Pila Argentino.</li>
            <li> Pincher Miniatura.</li>
            <li> Russkaya Tzvetnaya Bolonka.</li>
            <li> Silky Terrier.</li>
            <li> Terrier Americano sin Pelo.</li>
            <li> Terrier Australiano.</li>
            <li> Terrier Inglés Toy .</li>
            <li> Terrier Japonés - Nihon Teria.</li>
            <li> Yorkshire Terrier - Classic.</li>
            <li> Yorkshire Terrier Colors.</li>
        </ol>`,
    show: false,
  },
]);


const toggleAnswer = (index) => {
  races.value[index].show = !races.value[index].show;
};
</script>

<style lang="scss" scoped>
.races {
    text-align: center;
}

.races_container {
    display: grid;
    gap: 2em;
    padding: 90px;
    padding-top: 0;
    padding-bottom: 50px;
}

.races_padding {
    // padding: 0;
    transition: padding .3s;
    border: 1px solid #010d23;
    border-radius: 6px;
    animation: moverDesdeIzquierda 1s ease-in-out;
}

@keyframes moverDesdeIzquierda {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}

.races_padding--add {
    padding-bottom: 30px;
}

.races_answer {
    padding: 0 30px 0;
    margin-bottom: 10px;
    overflow: hidden;
}

.races_title {
    text-align: left;
    display: flex;
    font-size: 20px;
    padding: 10px 0 10px;
    margin-bottom: 5px;
    cursor: pointer;
    justify-content: space-between;
}

.races_arrow {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    margin-left: 10px;
    transition: transform .3s ;
}

.races_arrow--rotate {
    transform: rotate(180deg);
}

.races_img {
    display: block;
}

.races_show {
    color: #474747;
    text-align: left;
    font-size: 18px;
    line-height: 35px;
    padding-right: 20px;
    transition: height 3s;
    margin-top: 0;
}
</style>