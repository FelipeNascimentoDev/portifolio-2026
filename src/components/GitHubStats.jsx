import  React from 'react'

function GitHubStats() {

  const currentYear = new Date().getFullYear()

  return (
    <div className='justify-items-center items-center
    grid md:grid-cols-1
    mt-32 py-7 bg-neutral-700'>

      <h1 className='mb-10 text-center font-semibold md:text-6xl sm:text-5xl text-4xl mx-5'>
        {`Live ${currentYear}\u2019s GitHub Statistics`}
      </h1>

      <div className='md:flex md:gap-10 place-items-center'>
        <img className='md:py-0 py-4'
          src={`https://github-readme-stats.vercel.app/api?username=felipenascimentodev&commits_year=${currentYear}&&theme=gruvbox&hide_rank=true&hide=stars,issues,contribs&custom_title=FelipeNascimentoDev%27s&text_color=FFFFFF`}
        />
        <img className='md:py-0 py-4'
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=felipenascimentodev&hide=jupyter%20notebook&hide_title=true&theme=gruvbox&layout=pie"
        />
      </div>

    </div>
  )
}

export default GitHubStats
