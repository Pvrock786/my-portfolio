import React from 'react'

import Classes from './About.module.css';
import SlietImg from '../../assests/SlietAccad.jpg'

export default function About() {
  return (
    <div className={Classes.about}>
      <div className={Classes.container}>
        <div className={Classes.about_sliet}>
          <h1 className={Classes.heading}>
            About SLIET
          </h1>
          <div className={Classes.SlietImg}>
            <img src={SlietImg} alt="SLIET" />
          </div>
          <div className={Classes.content}>
            <p className={Classes.text}>
              Welcome to Sant Longowal Institute of Engineering and Technology (SLIET). Spread over 451 acres of land
              bestowed by the MHRD, SLIET never disappoints and excels in uplifting the standards of technical
              education at a national level. The students are always dynamic and enthusiastic in participating in
              competitions all over India. The technical teams of SLIET encourage students to compete and develop
              their expertise in the practical field of technology.Apart from academics, SLIET supports all sorts of
              co-curricular activities ranging from various sports like basketball, lawn tennis etc. to hobbies like
              modelling, dance, music etc. Life at SLIET is always enthusiastic. The students here also participate in
              national level sports competitions held in prestigious institutions. SLIET’s technical teams have also
              received many awards for winning competitions like the efficycle, Baja SAE, Smart India Hackathon etc.
          </p>
            <p className={Classes.text}>
              SLIET never falls back and stays up-to-date in the trends of modern technology by organizing seminars by
              experts from various recognized institutes under TEQIP-III. SLIET has been recognized and has been
              running as an autonomous body since 2006. It awards its own Diplomas, Undergraduate and Postgraduate
              certificates in various streams all approved and recognized by the AICTE. SLIET has always supported
              innovative ideas of students and continues to encourage students to take up research and development
              projects. No one is left behind.
              SLIET actively promotes entrepreneurship activities too. The faculty at SLIET comprises of professors who
              actively indulge in research and eagerly encourage students to be swamped with activities that will
              develop their young minds and pique their interests. The campus boasts a calm and serene environment
              filled with lush green trees presenting a spectacle of harmony and natural beauty. SLIET gives the
              comfort of home, thanks to the profound amenities provided inside the campus for fulfilling the
              necessities of students.
          </p>
          </div>
        </div>

        <div className={Classes.about_techfest}>
          <h1 className={Classes.heading}>
            About techFEST'20
        </h1>
          <div>
            <p className={Classes.text}>
              Aloha Exploro-crats! Refueling is complete!
  T-10 seconds, main hydrogen burnoff system is activated, ground launch sequencer commands main engine start. The Solid Rocket Boosters have ignited, Explosive bolts release the boosters. It’s T-0, the Cosmic-Yantra lifts off as it sets its vision beyond the horizon.Where the gravity for innovation is utmost, we invite you to techFEST’20: ‘Innovation in Space’. Lets dwell in the realm of infinite possibilities and upgrade this dull void; lets make a blueprint that’s going to scale. techFEST’20 provides a huge platform for this panoptic cosmos, to showcase your innovative ideas and technical knowledge and forge marvels. techFEST’20 is a tribute to our scientists at ISRO for their accolades, intellect and endeavors. So lets suit up for the upcoming space expedition. These two days won’t let your adrenaline go low.
  Bon exploration with techFEST’20!
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}
