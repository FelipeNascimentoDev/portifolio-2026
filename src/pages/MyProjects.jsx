import { useState } from 'react'

function MyProjects() {

  const [carouselIndex,setCarouselIndex] = useState(0)


  return (
    <div className="bg-[linear-gradient(to_bottom,black,black,black,gray,gray)] h-full w-full
    text-center -mt-1 pt-16 pb-96">
      <h1 className="sm:text-8xl text-6xl font-bold">. PROJECTS . SECTION .</h1>
    </div>
  )
}

export default MyProjects