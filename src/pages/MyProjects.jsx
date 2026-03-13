import { useState } from 'react'
import { carouselData } from '../data/carouselContent.js'

function MyProjects() {

  const gitHubLogoLink = "https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/b8860b/external-github-community-for-software-building-and-testing-online-logo-bold-tal-revivo.png"
  const cetificateImgLink = "https://img.icons8.com/external-aficons-studio-glyph-aficons-studio/68/b8860b/external-certificate-online-learning-aficons-studio-glyph-aficons-studio.png"


  const [carouselIndex,setCarouselIndex] = useState(1)

  const next = () => {
        if (carouselIndex < carouselData.length) {
      setCarouselIndex(carouselIndex => carouselIndex + 1)
    }
    else {
      setCarouselIndex(1)
    }
  }

  const previous = () => {
    if (carouselIndex > 1) {
      setCarouselIndex(carouselIndex => carouselIndex - 1)
    }
    else {
      setCarouselIndex(carouselData.length)
    }
  }


  return (
    <div className="bg-neutral-800 h-full w-full
    text-center -mt-1">

      <h1 className="xl:text-8xl lg:text-7xl text-5xl font-bold sm:py-20 pt-24 pb-14 mx-10">
        Projects I've worked on...
      </h1>

      <div className='flex flex-col w-full justify-center pt-4 pb-10'>


        <div className='flex  place-items-center sm:gap-5 sm:px-4 py-1
        self-center xl:w-[800px] md:w-[700px] sm:w-[600px] w-full justify-between'>
          <button className='sm:font-semibold text-6xl pb-3 pr-3 pl-2 rounded-full
          hover:drop-shadow-[0_0_4px_rgba(255,255,255)]' onClick={previous}>
            {"<"}
          </button>
          <h2 className='font-bold lg:text-4xl sm:text-3xl text-2xl px-2'>
            {carouselData[carouselIndex - 1].title}
          </h2>
          <button className='sm:font-semibold text-6xl pb-3 pr-2 pl-3 rounded-full
          hover:drop-shadow-[0_0_4px_rgba(255,255,255)]' onClick={next}>
            {">"}
          </button>
        </div>


        <div className='flex gap-8 mt-10 mb-7 self-center'>
          {
          carouselData.map((element, elementIndex) =>{
            return(
              <div
                id='element'
                className={`self-center rounded-full duration-300 ${element.id > carouselIndex ? 'p-1 bg-white ' : 'p-[6px] bg-[rgb(184,134,11)] drop-shadow-[0_0_7px_rgb(184,134,11)]'}`}>
              </div>
            )
          })
          }
        </div>


        <div className='self-center my-3 mx-5 w-fit'>
          <img src={`/carousel-img/carousel-image-id-${carouselIndex}.jpg`}
          className='lg:w-[800px] lg:h-[800px] w-full h-full rounded-3xl'/>
        </div>


        <h3 className='place-self-center text-center md:text-4xl text-3xl my-4 mx-10'>
          {carouselData[carouselIndex - 1].role}
        </h3>


        <div className='flex place-content-center items-center min-[500px]:gap-x-10 gap-5 py-4'>
          {/* Certificate Image + Link */}
          {
            carouselData[carouselIndex - 1].certificateLink != "" ?
            <a href={carouselData[carouselIndex - 1].certificateLink} target="_blank">
              <img src={cetificateImgLink} className='hover:-rotate-6 transition-transform duration-300
              md:w-[70px] md:h-[70px] w-[55px] h-[55px] cursor-pointer'/>
            </a> : ""
          }
          {/* GitHub Image + Link */}
          {
            carouselData[carouselIndex - 1].gitHubProjectLink != "" ?
            <a href={carouselData[carouselIndex - 1].gitHubProjectLink} target="_blank">
              <img src={gitHubLogoLink} className='hover:-rotate-6 transition-transform duration-300
              md:w-[70px] md:h-[70px] w-[55px] h-[55px] cursor-pointer'/>
            </a> : ""
          }
        </div>


        <div className='text-4xl my-5 justify-items-center'>
          <p className='mt-1 grid grid-cols-1 gap-10 text-left'>

            {carouselData[carouselIndex - 1].bulletPoints.map((item,itemIndex) => {
              return(
              <span id={itemIndex} className='xl:mx-[20%] lg:mx-[12%] md:mx-[8%] mx-[5%] lg:text-3xl text-[65%]'>
                {item}
              </span>
              )
            })}

          </p>
        </div>
        

      </div>
    </div>
  )
}

export default MyProjects