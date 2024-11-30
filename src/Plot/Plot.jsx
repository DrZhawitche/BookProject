import './Plot.scss'
import manuscriptText from './images/manuscript.png'
import entering1 from './images/entering1.jpg'
import entering2 from './images/entering2.jpg'
import entering3 from './images/entering3.jpg'

import wonder1 from './images/wonder1.jpg'
import wonder2 from './images/wonder2.jpg'
import wonder3 from './images/wonder3.jpg'
import wonder4 from './images/wonder4.jpg'

import ascending from './images/ascending.jpg'
import explosion from './images/explosion.jpg'

import return1 from './images/return1.jpg'

function Plot() {

  return(
    <div className="Plot">
      <header>
        <h1>Journey to the Center of the Earth - Plot Summary</h1>
      </header>

      <div id='intro' className="section">
        <h2>Introduction to the Adventure</h2>
        <p>Professor Lidenbrock, a passionate scientist, discovers an ancient Icelandic manuscript with clues leading to a path beneath the Earth’s surface. He, along with his nephew Axel and their guide Hans, embark on a perilous journey to explore the Earth's core.</p>

        <div id="intro-images">
          <img src={manuscriptText} alt="manuscript Text" id='manuscript-text'/>
        </div>

      </div>

      <div className="section" id="descent">
        <h2>The Descent</h2>
        <p>The group travels to Iceland, where they enter the volcano Snæfellsjökull and begin their descent. Axel is initially doubtful about the mission, but the excitement of discovery keeps him going.</p>

        <div id="descent-images">
          <img src={entering1} alt="" />
          <div id="descent-right">
            <img src={entering2} alt="" />
            <img src={entering3} alt="" />
          </div>
        </div>
      </div>

      <div className="section" id="underground-wonders">
        <h2>Underground Wonders</h2>
        <p>As the explorers venture deeper, they face natural obstacles like underground rivers, vast caverns, and strange geological formations. They also encounter prehistoric creatures, such as giant mushrooms and sea monsters.</p>

        <div id="wonder-images">
          <img src={wonder2} alt="" />
          <div id="wonder-bottom">
            <img src={wonder1} alt="" />
            <img src={wonder4} alt="" />
            <img src={wonder3} alt="" />

          </div>

        </div>
      </div>

      <div className="section" id="core">
        <h2>The Core</h2>
        <p>The trio reaches the Earth's core, where they discover a vast subterranean world, including a vast underground ocean. However, they must confront the challenges of returning to the surface as they are caught in a natural catastrophe.</p>

        <div id="ascension-images">
          <img src={explosion} alt="" />
          <img src={ascending} alt="" />


        </div>

      </div>

      <div className="section" id="last-section">
        <h2>Return to the Surface</h2>
        <p>After surviving near-death experiences, the group is ejected from the Earth through an active volcano, symbolizing the end of their journey and their return to the surface world.</p>

        <div id="return-images">
          <img src={return1} alt="" />
        </div>
      </div>


    </div>

  )
}

export default Plot