import pic_of_me from '../assets/PictureMyself-PNG.png'

function AboutMe() {
  return (
    <div className="bg-[url('./assets/Section_3.jpg')] bg-cover bg-center bg-no-repeat
    h-screen w-full flex items-center justify-center">
      <div>
      <img src={pic_of_me} width="475px" className='opacity-60 duration-700
      hover:contrast-0 hover:brightness-100 hover:opacity-10'/>
        <p className="text-3xl text-white text-center relative flex flex-col -mt-60 gap-2">
          <span>▪ 1.5+ years programmer</span>
          <span>▪ Developer and Analyst</span>
          <span>▪ Curious person</span>
          <span>▪ Problem-solver</span>
          <span>▪ Amateur runner </span>
          <span>▪ Forever life lover</span>
          <span className="mt-4 font-bold">- I’m... myself.</span>
        </p>
      </div>
    </div>
  )
}

export default AboutMe