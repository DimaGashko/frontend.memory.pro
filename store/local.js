export const state = () => ({
  trainingTypes: [
    {
      name: 'Numbers',
      path: '/train/numbers',
      description: 'Memorize random numbers',
      image: '/img/numbers-preview.png',
      disabled: false
    },
    {
      name: 'Words',
      path: '/train/words',
      description: 'Memorize random words',
      image: '/img/words-preview.png',
      disabled: false
    },
    {
      name: 'Images',
      path: '/train/images',
      description: 'Memorize random images',
      image: '/img/images-preview.png',
      disabled: false
    },
    {
      name: 'Cards',
      path: '/train/cards',
      description: 'Memorize playing cards',
      image: '/img/cards-preview.png',
      disabled: true
    },
    {
      name: 'Names',
      path: '/train/names',
      description: "Memorize people's names",
      image: '/img/names-preview.png',
      disabled: true
    }
  ]
});
