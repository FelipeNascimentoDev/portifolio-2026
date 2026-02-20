import '../style/Welcome.css'
import my_photo from '../assets/PictureMyself-PNG.png';

function Welcome() {

const items = ["FelipeNavas", "-SoftwareDev", "-ProblemSolver", "-SystemAnalyst", "- Programmer"];

  return (
    <div
    className="
    bg-black
    "
    >
      <div id='container' className='
      h-screen w-screen
      place-content-center justify-items-center
      text-4xl lg:text-7xl md:text-6xl
      lg:flex md:items-center'
      >
        <div id="text" className="w-fit mx-20">
          {items.map((item, itemIndex) => (
            <div key={itemIndex} className={`line line-${itemIndex + 1}`}>
              <p className="word fancy flex justify-between my-5">
                {item.split("").map((char, charIndex) => (
                  <span 
                    key={charIndex} 
                    className={`letter text${itemIndex + 1}`}
                  >
                    {char}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
        <div className='justify-items-center lg:w-96 md:w-72 w-80 mx-14'>
          <img src={my_photo} className="animate-me"/>
        </div>
      </div>
    </div>
  )
}

export default Welcome
