import './Themes.scss'

import innovation1 from './images/innovation1.png'

import perseverance from './images/perseverance1.jpg'

import unkown from './images/unkown.jpg'

import manvnature from './images/manvsnature.jpg'

function Themes() {

  return(
    <div className="Themes">
      <header>
        <h1>Key Themes in Journey to the Center of the Earth</h1>
      </header>

      <div className="section">
        <h2>Scientific Exploration and Curiosity</h2>
        <p>Verne’s depiction of scientific inquiry as a means of discovery and human advancement. The novel reflects 19th-century interest in geology and the natural sciences.
        </p>
        <div>
          <img src={innovation1} alt="" />
        </div>
      </div>

      <div className="section">
        <h2>Human Perseverance</h2>
        <p>The journey illustrates the human spirit's drive to overcome challenges, with the explorers constantly facing adversity yet pressing forward.</p>
        <div>
          <img src={perseverance} alt="" />
        </div>
      </div>

      <div className="section" >
        <h2>The Unknown and Wonder</h2>
        <p>The novel plays with the theme of exploring the unknown. It highlights the excitement and fear of discovering what lies beneath the Earth, mirroring the broader societal fascination with exploration during the Victorian era.</p>
        <div>
          <img src={unkown} alt="" />
        </div>
      </div>

      <div className="section" id='last-section'>
        <h2>Man vs. Nature</h2>
        <p>The explorers face the raw power of nature and the earth itself, which presents both beauty and danger, emphasizing humanity's fragility in the face of nature’s forces.</p>
        <div>
          <img src={manvnature} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Themes