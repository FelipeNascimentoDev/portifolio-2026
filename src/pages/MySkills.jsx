import '../style/MySkills.css'

function MySkills() {

  const skills = [
    "html5/html5-original",
    "css3/css3-original",
    "markdown/markdown-original",
    "java/java-original",
    "python/python-original",
    "javascript/javascript-original",    
    "react/react-original",
    "reactrouter/reactrouter-original",
    "tailwindcss/tailwindcss-original-wordmark",
    "spring/spring-original",
    "vscode/vscode-original",
    "photoshop/photoshop-original",
    "premierepro/premierepro-plain",
    "googlecolab/googlecolab-original",
    "npm/npm-original-wordmark",
    "mysql/mysql-original-wordmark",
    "github/github-original-wordmark",
    "git/git-original-wordmark",
    "anaconda/anaconda-original",
    "postman/postman-original",
    "figma/figma-original",
    "chrome/chrome-original",
    "railway/railway-original",
    "nodejs/nodejs-original-wordmark",
    "vitejs/vitejs-original"
  ]


  return (
    <div className="bg-[linear-gradient(to_bottom,black,white,white,white,white,white,black)]
    bg-cover bg-center bg-no-repeat w-full h-full -mt-1
    md:pb-44 sm:pb-48 pb-24
    md:pt-32 sm:pt-36 pt-20">
      <div className="grid md:gap-7 gap-5  md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mx-5
      text-center" id='skills-table'>

        <div className="min-h-[100px] rounded-2xl pb-20
        md:col-span-4 sm:col-span-3 col-span-2
        font-bold text-white
        place-content-center">
          <h1 className="sm:text-8xl text-6xl">These are my skills...</h1>
        </div>

          {skills.map((skill, skillsIndex)=>{

            const skillName = skill.split('/')[0]

            return(
              <div key={skillsIndex} className={`bg-black/10 min-h-[180px] rounded-2xl
              place-content-center place-items-center text-white text-xl
              card-animate`}>
                <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill}.svg`}
                className="h-44 w-44 p-5 img-animate"/>
                <p className='skill-title special-text'>{skillName}</p>
              </div>
            )
            })}

      </div>
    </div>
  )
}

export default MySkills
