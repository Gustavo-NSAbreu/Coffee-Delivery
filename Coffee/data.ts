export type Tag = 'TRADICIONAL' | 'GELADO' | 'COM LEITE' | 'ESPECIAL' | 'ALCOÓLICO';

export interface Coffee {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  tags: Tag[];
}

export const coffees: Coffee[] = [
  {
    id: '97a75125-b17f-5298-aa4b-5d12a308a64d',
    image: '../src/assets/expressoTradicional.svg',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos.',
    price: 9.90,
    tags: ['TRADICIONAL'],
  },
  {
    id: '8880d7a2-7e51-5594-9c7b-ca33916bd514',
    image: '../src/assets/expressoAmericano.svg',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.90,
    tags: ['TRADICIONAL'],
  },
  {
    id: 'dc9c7a09-7967-5bf0-8444-dd8b1d6b5a4c',
    image: '../src/assets/expressoCremoso.svg',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.90,
    tags: ['TRADICIONAL'],
  },
  {
    id: '47af3915-b88b-515a-94fa-8d63bb25f41d',
    image: '../src/assets/expressoGelado.svg',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.90,
    tags: ['TRADICIONAL', 'GELADO'],
  },
  {
    id: 'a25c973b-0cf5-5f13-8d32-1d78f83c4114',
    image: '../src/assets/cafeComLeite.svg',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.90,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: '54fd7b93-a9f6-5380-aa64-da7e1c9769df',
    image: '../src/assets/latte.svg',
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.90,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: '4c3858ca-180a-513c-9bd5-d615158a37cf',
    image: '../src/assets/capuccino.svg',
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.90,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 'e612af37-308d-5b14-8005-46c7f3763c4b',
    image: '../src/assets/macchiato.svg',
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.90,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 'c56b6354-2a2b-5576-bf7b-b1af3c4a84a3',
    image: '../src/assets/mocaccino.svg',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.90,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: '601a2364-ed25-507f-a141-913319603247',
    image: '../src/assets/chocolateQuente.svg',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.90,
    tags: ['ESPECIAL', 'COM LEITE'],
  },
  {
    id: '461cbe04-cab7-5a29-9d7c-112fb5cdd611',
    image: '../src/assets/cubano.svg',
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.90,
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
  },
  {
    id: 'f7abfff3-2b2b-53f0-9d19-2c0bf8998851',
    image: '../src/assets/havaiano.svg',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.90,
    tags: ['ESPECIAL'],
  },
  {
    id: '6d2a81fa-6efe-5c51-8863-e04e8ca84c89',
    image: '../src/assets/arabe.svg',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.90,
    tags: ['ESPECIAL'],
  },
  {
    id: '10c2b2b0-235d-5a27-b653-675513d93040',
    image: '../src/assets/irlandes.svg',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.90,
    tags: ['ESPECIAL', 'ALCOÓLICO'],
  },
]