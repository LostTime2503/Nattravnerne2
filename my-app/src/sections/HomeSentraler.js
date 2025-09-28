 import SentralerBox from '../components/sentralerBox'
 import '../styles/sections/HomeSentraler.css'

import ImgOne from '../assets/placeholders/avlangt_placeholder.png'
import ImgTwo from '../assets/placeholders/avlangt_placeholder.png'
import ImgThree from '../assets/placeholders/avlangt_placeholder.png'

import IconOne from '../assets/icons/arrow_up_right_icon.png'
import IconTwo from '../assets/icons/arrow_up_right_icon.png'
import IconThree from '../assets/icons/arrow_up_right_icon.png'

import BlackMuffin from '../assets/vectors/Vector_Muffin_PitchBlack.png'

 const HomeSentraler = () => (
   <section className="Home-Sentraler">
     <h2 className="Home-Sentraler-Header">Våre Hovedsentraler</h2>
     <div className="Home-Sentraler-Underline" />

     <div className="Home-Sentraler-Boxes">
       <SentralerBox
         imageSrc={ImgOne}
         iconSrc={IconOne}
         link="/NattravneneOslo"
         title="Nattravnene Oslo"
         description="Kort beskrivelse av tjenesten én."
       />
       <SentralerBox
         imageSrc={ImgTwo}
         iconSrc={IconTwo}
         link="/NAttravneneBergen"
         title="Nattravnene Bergen"
         description="Kort beskrivelse av tjenesten to."
       />
       <SentralerBox
         imageSrc={ImgThree}
         iconSrc={IconThree}
         link="/NattravneneTrondheim"
         title="Nattravnene Trondheim"
         description="Kort beskrivelse av tjenesten tre."
       />
     </div>
      <img
        src={BlackMuffin}
        alt="Black muffin"
        className="home-sentraler__muffin"
      />
   </section>
 )
 export default HomeSentraler

