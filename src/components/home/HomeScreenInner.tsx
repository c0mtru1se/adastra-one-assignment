import React from 'react';
import { LoadingBookBox } from '../loading/LoadingComponents';
import { BookCarousel } from './carousel/BookCarousel';

const data = [
  {
    id: 1,
    title: 'I must sugar my.',
    author: 'Fernando Jaskolski',
    genre: 'Nesciunt',
    description:
      "Mock Turtle, and to hear it say, as it lasted.) 'Then the words came very queer indeed:-- ''Tis the voice of thunder, and people began running about in the back. At last the Gryphon said to a mouse.",
    isbn: '9784867714027',
    image: 'https://placeimg.com/480/640/any',
    published: '1985-05-18',
    publisher: 'Veritatis Est',
  },
  {
    id: 2,
    title: 'Alice very humbly.',
    author: 'Dameon Auer',
    genre: 'Voluptatem',
    description:
      "Gryphon, 'you first form into a small passage, not much larger than a pig, and she thought there was silence for some time without interrupting it. 'They must go back and finish your story!' Alice.",
    isbn: '9785780770503',
    image: 'https://placeimg.com/480/640/any',
    published: '1992-06-20',
    publisher: 'Explicabo Nobis',
  },
  {
    id: 3,
    title: "Hatter: 'I'm on.",
    author: 'Herminio Nicolas',
    genre: 'Dolor',
    description:
      "Alice had never been so much already, that it made Alice quite jumped; but she heard it muttering to itself 'The Duchess! The Duchess! Oh my fur and whiskers! She'll get me executed, as sure as.",
    isbn: '9786449772616',
    image: 'https://placeimg.com/480/640/any',
    published: '1989-01-11',
    publisher: 'Molestiae Pariatur',
  },
  {
    id: 4,
    title: 'And how odd the.',
    author: 'Carmen Kuhn',
    genre: 'Et',
    description:
      "Duchess! Oh! won't she be savage if I've kept her waiting!' Alice felt a violent blow underneath her chin: it had entirely disappeared; so the King said, for about the twentieth time that day. 'No.",
    isbn: '9798357547927',
    image: 'https://placeimg.com/480/640/any',
    published: '2007-10-18',
    publisher: 'Asperiores Quia',
  },
  {
    id: 5,
    title: 'Alice could not.',
    author: 'Sandrine Goyette',
    genre: 'Sequi',
    description:
      "But the insolence of his tail. 'As if it makes me grow larger, I can kick a little!' She drew her foot slipped, and in despair she put them into a conversation. 'You don't know one,' said Alice.",
    isbn: '9788817023481',
    image: 'https://placeimg.com/480/640/any',
    published: '2014-08-08',
    publisher: 'Accusamus Non',
  },
];

export const HomeScreenInner = () => {
  return (
    <>
      <LoadingBookBox />
      <BookCarousel data={data} />
    </>
  );
};
