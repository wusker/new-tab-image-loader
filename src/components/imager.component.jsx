import React from 'react';
import Image from './Image.component';
import { getRandomImage, fetchLargeImage, initializeImage } from '../helpers/util';

const chosenImage = getRandomImage();
initializeImage(chosenImage);

window.onresize = () =>
setTimeout(() => {
  try {
    fetchLargeImage(chosenImage);
  } catch (error) {
    console.log(error);
  }
}, 400);

class Imager extends React.Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Imager;