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
    <div className="bg-black h-full w-full
    text-center -mt-1 pt-16">

      <h1 className="xl:text-8xl lg:text-7xl text-6xl font-bold my-20 mx-10">
        Projects I've worked on...
      </h1>

      <div className='flex flex-col w-full justify-center py-10'>

        <div className='flex border-white border-2 rounded-[45px] place-items-center gap-5 px-4 py-1 mx-5
        self-center xl:w-[1100px] md:w-[700px] justify-between'>
          
          <button className='font-semibold text-6xl pb-3 pr-3 pl-2 rounded-full
          hover:drop-shadow-[0_0_4px_rgba(255,255,255)]' onClick={previous}>
            {"<"}
          </button>
          <h2 className='text-[darkgoldenrod] font-bold lg:text-4xl sm:text-3xl text-xl px-2'>
            {carouselData[carouselIndex - 1].title}
          </h2>
          <button className='font-semibold text-6xl pb-3 pr-2 pl-3 rounded-full
          hover:drop-shadow-[0_0_4px_rgba(255,255,255)]' onClick={next}>
            {">"}
          </button>
          
        </div>

        <div className='flex gap-8 mt-10 mb-5 self-center'>
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


        <div className='text-4xl my-5 justify-items-center'>

          <div className='flex justify-center place-items-center min-[500px]:gap-x-10 gap-5'>
          {/* Certificate Image + Link */}
            {
              carouselData[carouselIndex - 1].certificateLink != "" ?
              <a href={carouselData[carouselIndex - 1].certificateLink} target="_blank">
                <img src={cetificateImgLink} className='hover:-rotate-6 transition-transform duration-300
                sm:w-[70px] sm:h-[70px] w-16 h-16 cursor-pointer'/>
              </a> : ""
            }
          
          {/* GitHub Image + Link */}
            {
              carouselData[carouselIndex - 1].gitHubProjectLink != "" ?
              <a href={carouselData[carouselIndex - 1].gitHubProjectLink} target="_blank">
                <img src={gitHubLogoLink} className='hover:-rotate-6 transition-transform duration-300
                sm:w-[70px] sm:h-[70px] w-16 h-16 cursor-pointer'/>
              </a> : ""
            }
          </div>

          <p className='mt-12 grid grid-cols-1 gap-10 text-left'>
            
            <span className='place-self-center text-center mb-4 mx-3'>
              Role: <u>{carouselData[carouselIndex - 1].role}</u>
            </span>

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