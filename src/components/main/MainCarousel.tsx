import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const MainCarousel = () => {
  const Karina_santa = "../../../src/assets/karina.jpeg"
  return (
    <Carousel
      className="h-max"
      autoPlay={true}
      infiniteLoop={true}
      interval={5000}
    >
      <div>
        <img src={Karina_santa} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={Karina_santa} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={Karina_santa} />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  )
}

export default MainCarousel
