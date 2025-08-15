export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'homme' | 'femme' | 'unisexe';
  description: string;
  longDescription: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Eau de Rose',
    brand: 'Maison Lumière',
    price: 89,
    originalPrice: 120,
    image: 'https://fimgs.net/mdimg/secundar/o.69110.jpg',
    category: 'femme',
    description: 'Un parfum floral délicat aux notes de rose de Bulgarie',
    longDescription: 'Eau de Rose de Maison Lumière capture l\'essence pure de la rose de Bulgarie dans une composition raffinée. Ce parfum iconique révèle la beauté intemporelle de la reine des fleurs, sublimée par des notes poudrées et une touche de musc blanc.',
    notes: {
      top: ['Rose de Bulgarie', 'Bergamote', 'Cassis'],
      heart: ['Pivoine', 'Jasmin', 'Muguet'],
      base: ['Musc blanc', 'Cèdre', 'Ambre']
    },
    featured: true
  },
  {
    id: '9',
    name: 'My Way',
    brand: 'Armani',
    price: 119,
    originalPrice: 120,
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMFYJWIbtrM551TY_tbngRhc0Wi0gVW1uYRi8TbPfhILifNJJpVPRvEBZ0Gku7TmCHhdbJayxP0BTda2-s5-Q1d9VaHDuUarmXYeWRnE6VOYN5X_9ybbecxRfFRRjo1JUgv7ffQYQXJfCugAKxgIJ8j_YaGPFkVFgYplZ9KEWDvXEN2wY_SZa9cuJJTA/s1342/ARMANI%20MY%20WAY%20LE%20PARFUM.jpg',
    category: 'femme',
    description: 'Un parfum féminin lumineux et floral',
    longDescription: 'Eau de Rose de Maison Lumière capture l\'essence pure de la rose de Bulgarie dans une composition raffinée. Ce parfum iconique révèle la beauté intemporelle de la reine des fleurs, sublimée par des notes poudrées et une touche de musc blanc.',
    notes: {
      top: ['Rose de Bulgarie', 'Bergamote', 'Cassis'],
      heart: ['Pivoine', 'Jasmin', 'Muguet'],
      base: ['Musc blanc', 'Cèdre', 'Ambre']
    },
    featured: true
  },
  {
    id: '2',
    name: 'Noir Intense',
    brand: 'Royal Collection',
    price: 145,
    image: 'https://media.takealot.com/covers_images/c5f67cb8a8cd4db19b003d7109e45391/s-zoom.file',
    category: 'homme',
    description: 'Une fragrance masculine puissante et mystérieuse',
    longDescription: 'Noir Intense est une création audacieuse qui incarne la sophistication masculine. Cette fragrance envoûtante mélange des épices orientales avec des bois précieux pour créer une signature olfactive inoubliable.',
    notes: {
      top: ['Poivre noir', 'Cardamome', 'Bergamote'],
      heart: ['Oud', 'Rose noire', 'Géranium'],
      base: ['Santal', 'Patchouli', 'Ambre gris']
    },
    featured: true
  },
  {
    id: '3',
    name: 'Soleil Doré',
    brand: 'Essence Pure',
    price: 75,
    image: 'https://fraguru.com/mdimg/secundar/o.110048.jpg',
    category: 'unisexe',
    description: 'Une création unisexe aux accents méditerranéens',
    longDescription: 'Soleil Doré évoque l\'art de vivre méditerranéen. Cette fragrance unisexe capture la chaleur du soleil sur la peau et l\'ivresse des nuits d\'été. Une composition lumineuse et addictive.',
    notes: {
      top: ['Citron', 'Orange sanguine', 'Basilic'],
      heart: ['Lavande', 'Thym', 'Romarin'],
      base: ['Bois flotté', 'Sel marin', 'Muscs']
    }
  },
  {
    id: '10',
    name: 'Tom Ford Noir',
    brand: 'Essence Pure',
    price: 85,
    image: 'https://img.fragrancex.com/images/blog/unisex-fragrance.jpeg',
    category: 'unisexe',
    description: 'Parfums raffinés et audacieux',
    longDescription: 'des parfums raffinés et audacieux, conçus pour hommes et femmes, mêlant notes boisées, épicées et florales pour une élégance moderne et intemporelle.',
    notes: {
      top: ['Citron', 'Orange sanguine', 'Basilic'],
      heart: ['Lavande', 'Thym', 'Romarin'],
      base: ['Bois flotté', 'Sel marin', 'Muscs']
    }
  },
  
{
    id: '11',
    name: 'Guerlain Cuir',
    brand: 'Essence Pure',
    price: 65,
    image: 'https://www.lamode.tn/20933-large_default/eau-de-parfum-unisexe-guerlain-cuir-intense.jpg',
    category: 'unisexe',
    description: 'Parfum intense et sophistiqué',
    longDescription: 'Un parfum intense et sophistiqué, où la chaleur du cuir se mêle à des notes fumées et boisées pour une élégance puissante et sensuelle.',
    notes: {
      top: ['Citron', 'Orange sanguine', 'Basilic'],
      heart: ['Lavande', 'Thym', 'Romarin'],
      base: ['Bois flotté', 'Sel marin', 'Muscs']
    }
  },
  
  {
    id: '12',
    name: 'Khamrah',
    brand: 'oriental gourmand',
    price: 55,
    image: 'https://hiddensamples.com/cdn/shop/files/lattafa-khamrah-open-bottle-perspective.jpg?crop=center&height=1000&v=1750260976&width=1000',
    category: 'unisexe',
    description: 'une expérience sensorielle riche et chaleureuse',
    longDescription: 'Khamrah est une fragrance orientale gourmande qui évoque la chaleur et la richesse des épices. Ce parfum unisexe offre une expérience sensorielle enveloppante, mêlant des notes sucrées et épicées pour une signature olfactive unique.',
    notes: {
      top: ['Citron', 'Orange sanguine', 'Basilic'],
      heart: ['Lavande', 'Thym', 'Romarin'],
      base: ['Bois flotté', 'Sel marin', 'Muscs']
    }
  },
  {
    id: '4',
    name: 'Velours Rouge',
    brand: 'Maison Lumière',
    price: 110,
    image: 'https://fimgs.net/himg/o.k8ElxlleEPE.jpg',
    category: 'femme',
    description: 'Un parfum sensuel aux notes gourmandes',
    longDescription: 'Velours Rouge est une invitation à la sensualité. Cette création gourmande révèle des facettes sucrées et épicées, enveloppées dans un écrin de vanille et de musc sensuel.',
    notes: {
      top: ['Fraise', 'Poivre rose', 'Mandarine'],
      heart: ['Praline', 'Jasmin sambac', 'Héliotrope'],
      base: ['Vanille', 'Musc', 'Bois de cachemire']
    },
    featured: true
  },
  {
    id: '5',
    name: 'Bois Sauvage',
    brand: 'Royal Collection',
    price: 95,
    image: 'https://piimages.parfumo.de/6/0/208119_c17c6b5b0ad502dc1365ae1da7215856_bois-sauvage.jpg',
    category: 'homme',
    description: 'Une fragrance boisée pour l\'homme moderne',
    longDescription: 'Bois Sauvage exprime la force de la nature sauvage. Cette composition masculine allie la fraîcheur des agrumes à la puissance des bois nobles, créant une fragrance moderne et intemporelle.',
    notes: {
      top: ['Pamplemousse', 'Poivre', 'Gingembre'],
      heart: ['Vétiver', 'Géranium', 'Coriandre'],
      base: ['Santal', 'Cèdre', 'Musc']
    }
  },
  {
    id: '6',
    name: 'Fleur de Lune',
    brand: 'Essence Pure',
    price: 85,
    image: 'https://www.graindorge-editions.fr/wp-content/uploads/2022/04/Fleur-de-Lune-1.png',
    category: 'femme',
    description: 'Une composition florale mystérieuse',
    longDescription: 'Fleur de Lune révèle la beauté nocturne des jardins secrets. Cette fragrance féminine dévoile des fleurs blanches nacrées, sublimées par une touche poudrée et une base musquée.',
    notes: {
      top: ['Néroli', 'Freesia', 'Cassis blanc'],
      heart: ['Jasmin', 'Lily', 'Iris'],
      base: ['Musc blanc', 'Santal', 'Ambre']
    }
  },
  {
    id: '7',
    name: ' Sauvage',
    brand: 'Royal Collection',
    price: 195,
    image: 'https://fimgs.net/mdimg/secundar/o.51827.jpg',
    category: 'homme',
    description: 'Un parfum frais et puissant',
    longDescription: 'Sauvage de Dior est un parfum masculin frais et puissant, mêlant des notes éclatantes de bergamote de Calabre à la profondeur boisée et épicée de l’ambroxan et du poivre de Sichuan. Inspiré par les grands espaces et la liberté, il dégage une énergie brute et élégante à la fois.',
    notes: {
      top: ['Pamplemousse', 'Poivre', 'Gingembre'],
      heart: ['Vétiver', 'Géranium', 'Coriandre'],
      base: ['Santal', 'Cèdre', 'Musc']
    }
  },
  {
    id: '8',
    name: ' Terre d’Hermès',
    brand: 'Royal Collection',
    price: 120,
    image: 'https://fraguru.com/mdimg/secundar/o.78865.jpg',
    category: 'homme',
    description: 'Un parfum élégant et chaleureux',
    longDescription: ' Terre d’Hermès est un parfum masculin raffiné, alliant fraîcheur d’agrumes, chaleur épicée et profondeur boisée, évoquant la force et l’harmonie de la nature.',
    notes: {
      top: ['Pamplemousse', 'Poivre', 'Gingembre'],
      heart: ['Vétiver', 'Géranium', 'Coriandre'],
      base: ['Santal', 'Cèdre', 'Musc']
    }
  },
  
];