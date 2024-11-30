import './Adaptations.scss'

import film1 from './images/1959-film.jpg'
import film2 from './images/film2+.webp'

function Adaptations() {

  return(
    <div className="Adaptations">

      <header>
        <h1>Adaptations of Journey to the Center of the Earth</h1>
      </header>

      <div className="section">
        <h2>Film Adaptations</h2>

        <ul>

          <li>
            <h3>1959 - Journey to the Center of the Earth</h3>
            <p>One of the most famous adaptations, this version, directed by Henry Levin and produced by Walt Disney, brings Verne’s adventure to life in Technicolor. The film stars James Mason as Professor Lidenbrock and features a thrilling journey through underground caverns, complete with special effects and prehistoric creatures. This adaptation is remembered for its sense of adventure and imaginative interpretations of Verne’s underground world.</p>

            <img src={film1} alt="" />
          </li>

          <li>
            <h3>2008 - Journey to the Center of the Earth (3D)</h3>
            <p>This modern adaptation, directed by Eric Brevig, is a 3D film starring Brendan Fraser and Josh Hutcherson. Taking a more contemporary approach, the film is set in present-day Iceland and follows a young man and his uncle as they embark on an adventure to the Earth’s core. Though it takes liberties with the original plot, the film captures the spirit of Verne’s story, combining action, adventure, and stunning visual effects.</p>
            <img src={film2} alt="" />
          </li>

          <li>
            <h3>2012 - Journey 2: The Mysterious Island</h3>
            <p>While not a direct adaptation of Journey to the Center of the Earth, this sequel to the 2008 film loosely incorporates elements from Verne’s novel. Starring Dwayne "The Rock" Johnson, the film combines adventure, family-friendly humor, and fantasy, as the characters journey to a mysterious island that features landscapes and creatures inspired by Verne’s works.</p>
            <img src="https://imgs.search.brave.com/EXHhSuFVRNlchpKuy7qRgLxs6zj_V9eGdLYTYhnk8Qg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYW52/YXMudHViaXR2LmNv/bS9vcHRzL3ZKYk5a/REdEdXFueHRBPT0v/MjdmMzY1MTItZjMy/NS00NjQ3LTlhYjct/MjNiNjkxMGIxM2Rj/L0NKZ0RFTWNFT2dV/eExqRXVNZz09" alt="" />
          </li>

        </ul>
      </div>

      <div className="section">
        <h2>Television Adaptations</h2>
        <ul>
          <li>
            <h3>1977 - Journey to the Center of the Earth (TV Movie)</h3>
            <p>This made-for-TV movie aired on NBC and starred Doug McClure. It presents a more family-oriented version of Verne’s story, with a focus on adventure and mystery. While not as well-known as its film counterparts, the 1977 TV adaptation is a memorable part of the history of Verne adaptations.</p>
            <img src="https://m.media-amazon.com/images/M/MV5BYTM3MmY2NDctZDRlZi00NjAyLTk4YjAtZmM2ODA0NzVhMjg0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="" />
          </li>

          <li>
            <h3>1999 - Journey to the Center of the Earth (Animated TV Series)</h3>
            <p>This animated television series, produced by DIC Entertainment, reimagines the classic story for a younger audience. The series follows a group of explorers as they venture into the Earth’s core, encountering strange creatures and discovering hidden civilizations. The show is an entertaining take on the original, with colorful animation and imaginative storytelling.</p>
            <img src="https://m.media-amazon.com/images/M/MV5BNGY0ZTk3YjgtMGY2YS00ODBhLWFiZjItZWVmN2U5MDJhMmRjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="" />
          </li>
        </ul>
      </div>

      <div className="section">
        <h2>Stage and Radio Adaptations</h2>
      
        <ul>
          <li>
            <h3>Stage Productions</h3>
            <p>Over the years, Journey to the Center of the Earth has been adapted for the stage in various forms, from traditional theater productions to more avant-garde interpretations. These adaptations often highlight the themes of exploration and human perseverance, using creative set designs and special effects to depict the underground world.</p>
          </li>

          <li>
            <h3>Radio Plays</h3>
            <p>Numerous radio adaptations have brought Journey to the Center of the Earth to listeners, most notably The Mercury Theatre’s production in 1938, directed by Orson Welles. Radio plays were a popular way to bring the novel's thrilling adventure to life through sound, immersing listeners in the underground world and the characters’ perilous journey.
            </p>
          </li>
        </ul>
      </div>

      <div className="section last">
        <h2>Other Adaptations and Inspired Works</h2>

        <ul>
          <li>
            <h3>Video Games</h3>
            <p>arious video games have been inspired by the novel's adventurous spirit, including titles where players explore vast underground caverns and face mysterious creatures. These games bring a modern interactive dimension to Verne's ideas, allowing players to take on the role of an explorer themselves.</p>
          </li>

          <li>
            <h3>Comics and Graphic Novels</h3>
            <p>Journey to the Center of the Earth has been adapted into numerous graphic novels and comics, often reinterpreting the story with contemporary art styles and updated narratives. These adaptations allow new audiences to experience Verne’s work in a visually dynamic way.
            </p>
          </li>
        </ul>
      </div>

      <div className="section last" id='last-section'>
        <h2>Legacy of Adaptations</h2>
        <p>The continued adaptations of Journey to the Center of the Earth—in film, television, theater, and more—demonstrate the timeless appeal of Jules Verne’s adventurous tale. From early cinematic renditions to modern, visually stunning 3D films, each new interpretation introduces Journey to the Center of the Earth to fresh generations of viewers and readers. The story's themes of scientific exploration, human resilience, and the mysteries of the Earth continue to inspire creative minds in every medium.

</p>
      </div>

    </div>
  )
}

export default Adaptations