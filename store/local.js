export const state = () => ({
  trainingTypes: [
    {
      name: 'Numbers',
      path: '/train/numbers',
      description: 'Memorize random numbers',
      image: '/img/train-preview/numbers.png',
      available: true
    },
    {
      name: 'Words',
      path: '/train/words',
      description: 'Memorize random words',
      image: '/img/train-preview/words.png',
      available: true
    },
    {
      name: 'Images',
      path: '/train/images',
      description: 'Memorize random images',
      image: '/img/train-preview/images.jpg',
      available: true
    },
    {
      name: 'Cards',
      path: '/train/cards',
      description: 'Memorize playing cards',
      image: '/img/train-preview/cards.png',
      available: false
    },
    {
      name: 'Names',
      path: '/train/names',
      description: "Memorize people's names",
      image: '/img/train-preview/names.png',
      available: false
    },
    {
      name: 'Binary digits',
      path: '/train/binary',
      description: 'Memorize binary numbers',
      image: '/img/train-preview/binary.jpg',
      available: false
    },
    {
      name: 'Spoken numbers',
      path: '/train/spoken-numbers',
      description: 'Memorize spoken numbers',
      image: '/img/train-preview/spoken-numbers.jpg',
      available: false
    },
    {
      name: 'Abstract images',
      path: '/train/abstract-images',
      description: 'Memorize abstract images',
      image: '/img/train-preview/abstract-images.jpg',
      available: false
    }
  ]
});
