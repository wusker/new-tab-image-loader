const getRandomImage = () => {
    const imageChoices = [
      '7t4vnneIJ8Q',
    ];
    return imageChoices[Math.floor(Math.random() * imageChoices.length)];
  };
  
  const fetchLargeImage = chosenImage =>
    new Promise((resolve, reject) => {
      const image = [...document.images][0];
      const resolution = `${window.innerWidth}x${window.innerHeight}`;
      image.src = `https://source.unsplash.com/${chosenImage}/${resolution}`;
      image.classList.remove('blur');
      image.onload = resolve;
      image.onerror = reject;
    });
  
  const initializeImage = chosenImage => {
    const image = new Image();
    image.src = `https://source.unsplash.com/${chosenImage}/128x72`;
    image.classList.add('blur');
    document.body.appendChild(image);
  
    window.onload = () => {
      try {
        fetchLargeImage(chosenImage);
      } catch (error) {
        console.log(error);
      }
    };
  };

export {
    getRandomImage,
    fetchLargeImage,
    initializeImage
}