import './About.scss'
import portait from '../images/portrait.jpg'
import cover1 from '../images/cover1.jpg'
import cover2 from '../images/cover2.jpg'
import context1 from '../images/context1.jpg'
import context2 from '../images/context2.jpg'
import context3 from '../images/context3.jpg'
import { useEffect } from 'react'
import gsap from 'gsap'


function About() {

  return(
    <div className='About'>
      <header>
        <h1>About...</h1>
      </header>
      

      <div className="about">
        <div className="section">
          <h2>Jules Verne</h2>
          <p>Jules Verne (1828-1905) was a French novelist, poet, and playwright, best known for his pioneering works in science fiction. Often considered the father of modern science fiction, Verne wrote about groundbreaking adventures that explored the boundaries of science and human capability. His works, including *Twenty Thousand Leagues Under the Sea*, *Around the World in Eighty Days*, and *Journey to the Center of the Earth*, have inspired generations of readers and filmmakers alike.</p>

          <img id='portrait' src={portait} alt="Jules Verne"/>

        </div>

        <div className="section">
          <h2>The Novel</h2>
          <p>First published in 1864, *Journey to the Center of the Earth* is one of Verne’s most famous works, blending scientific curiosity with adventurous storytelling. The novel follows Professor Lidenbrock, his nephew Axel, and their guide Hans as they embark on an incredible expedition to the Earth’s core. Their journey leads them to encounter strange and fascinating creatures, underground seas, and otherworldly landscapes, all while exploring the mysteries of the Earth’s interior. Verne’s vivid imagination and early understanding of geology and physics make the novel a remarkable blend of adventure and science fiction.</p>

          <div id="covers">
            <img id='cover1' src={cover1} alt="Original Cover"/>
            <img id='cover2' src={cover2} alt="Original Cover"/>
          </div>


        </div>

        <div className="section">
          <h2>Historical Context</h2>
          <p>Written during the height of the Victorian era, *Journey to the Center of the Earth* reflects the period’s fascination with exploration and discovery. The 19th century was a time of significant scientific and technological advancements, with breakthroughs in geology, paleontology, and physics. Verne’s work is often noted for its foresight in predicting future inventions and discoveries, incorporating real scientific knowledge into his adventurous tales. In this way, Verne’s stories resonated with contemporary readers, who were eager to explore the world’s uncharted territories and understand the wonders of nature.</p>

          <div id="contexts">
            <img id='context1' src={context1} alt="Context Image"/>

            <div id="contexts-right">
              <img id='context2' src={context2} alt="Context Image"/>
              <img id='context3' src={context3} alt="Context Image"/>
            </div>

          </div>


        </div>

        <div className="section" id='last-section'>
          <h2>Legacy and Influence</h2>
          <p>Jules Verne’s *Journey to the Center of the Earth* has had a lasting impact on the science fiction genre and continues to inspire readers and creators today. The novel has been adapted into numerous films, television series, and even stage productions. Its themes of scientific exploration and human perseverance resonate with audiences worldwide, cementing Verne’s place as one of the greatest pioneers of speculative fiction. The story of Professor Lidenbrock and his companions remains a timeless adventure for readers of all ages, inviting them to consider the wonders that lie beneath the surface of our world.</p>

        </div>


      </div>

    </div>
  )
}

export default About