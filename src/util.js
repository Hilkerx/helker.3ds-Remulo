export const generateCards = () => {
    const images = [
      'img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png', 'img6.png', 'img7.png', 'img8.png'
    ];
  
    const cards = images
      .concat(images)
      .map((img, index) => ({
        id: index,
        img: `/images/${img}`,
        isFlipped: false,
        isMatched: false
      }));
  
    return cards.sort(() => Math.random() - 0.5);
  };