import React, { Component } from 'react';
import './Faculty.css';

import teamphoto1 from '../../assests/image/Teampage/dir.jpg';
import teamphoto2 from '../../assests/image/Teampage/de.jpg';
import teamphoto3 from '../../assests/image/Teampage/cm.jpg';
import teamphoto4 from '../../assests/image/Teampage/vc.jpg';
export default class DevelopmentTeam extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <div class="faculty-team">
        <div className="group">
          <div className="faculty-message">
            <div className="name-1 name"><h2>Director's Message</h2></div>
            <div className="message">
              <div><img className="faculty-image" src={teamphoto1} alt="img here" />
                <h4>Prof. Shailendra Kumar Jain</h4>
              </div>

              <div>
                <p className="paragraph">
                  It is a matter of immense pleasure that the budding technocrats
          are about to experience such a cerebral spectacle – techFEST’20 that is
          convened on 27th to 28th March 2020. The predestined gathering holds a
          plethora of events that mark my words, will prove to be the most reminiscing
          ones worth remembering. Be it participating in the events or lending a helping
          hand, every venture will leave a keepsake. Moreover, its importance can be
          weighted by the fact that wonders happen when technology meets creativity.
          To my belief – Creativity is the mother of Invention, that’s what most of us
          might relate to, which is found to be diminishing in engineering graduates. So
          these endeavors might prove to be fruitful in hunting the real Engineer in
          ourselves. With the introduction of such events at the institute, students will have
          the chance to showcase their skills & talents in both technical and non-technical
          domains of life that will encourage them to dare choosing the untrodden paths
          & become the sole author of their book.
          On a concluding note I would like to urge students to participate in the
          techFEST, make it a success and pledge that they will be of service to the nation
          and make the institution proud.
        </p>

              </div>
            </div>

          </div>
          <div className="faculty-message">
            <div className="name-2 name"><h2>Dean (SW)'s Message</h2></div>
            <div className="message reverse">
              <div><img className="faculty-image" src={teamphoto2} alt="img here" />
                <h4> Dr. D.C. Saxena</h4>
              </div>
              <div>
                <p className="paragraph">
                  Conquering greatness requires continuous endeavors and we are proud of our
          students as they continue to surprise us with their dynamisms every year. techFEST, an
          event of this institute has always been setting a benchmark for the students to step up,
          think out of the box and innovate. Providing numerous proving grounds, techFEST
          rises the Phoenix within one that keeps the events competitive, maintaining a health
          spirit of competition. With years passing, the standards of the events have been
          surpassing the past. To share my past experience of techFEST events, being a part, has
          always kept my adrenaline running and seeing the students putting all their blood and
          sweat in making the events successful is mesmerizing .
          I wish the students should always remember the famous quote of Pierre de
          Coubertin
          “The important thing in life is not to triumph but to compete. The most important
          thing in the Olympic Games is not winning but taking part; the essential thing in
          life is not conquering but ghting well.”
          In the end, I would like to bless the students with the best of luck and urge
          them to show maximum participation, leading the event to its success.
          “Proud to be a part of Team SLIET, Team techFEST’20”
        </p>
              </div>

            </div>

          </div>
          <div className="faculty-message">
            <div className="name-1 name"><h2>Chairman's Message (techFest'20)</h2></div>
            <div className="message">
              <div><img className="faculty-image" src={teamphoto3} alt="img here" />
                <h4>Dr. Manpreet Singh Manna</h4>
              </div>
              <div>
                <p className="paragraph">
                  Two Decades back the journey of techFEST started with a concept
          to bring India’s technology talent at one unique platform where they can
          present their innovative solutions and get recognitions and future path to
          develop new world for society. The techFEST event of SLIET is a symbol of
          preeminence, resoluteness, and splendors. In this event, We all SLIETians
          diligently work with the motto of inspiring young aspiring technical minds to
          create, innovate and use technology in stupendous ways for the wellness of
          humankind. Over the past few years, techFEST has escalated to new heights; we
          appraise the efforts put in by the students and their mentors for that. No matter
          what stream, the participants collaborate all kinds of knowledge from various
          elements of life to create something different, and sometimes ‘Jugad’ to
          ‘Startups’.
          With a new brio, techFEST’20 has pledged to be unparalleled and
          unrivaled from its fellow versions. The Cosmic-Yantra is ready for an astonishing
          exploration of the Cosmos and we are thrilled by the preparations conducted by
          our students. This year, the multitude is going to witness intellections that are
          going to be electrifying, hair-raising and mind-bending.
          My all best wishes to my future India Technocrats for their effective
          participation and performances in the National Level Event.
        </p>
              </div>
            </div>

          </div>
          <div className="faculty-message">
            <div className="name-2 name"><h2>Vice Chairman's Message (techFEST’20)</h2></div>
            <div className="message reverse">
              <div><img className="faculty-image" src={teamphoto4} alt="img here" />
                <h4>Ms. Anshuka Bansal</h4>

              </div>
              <div>
                <p className="paragraph">
                  “Do not wait; the time will never be ‘just right.’Start where you stand, and work with
          whatever tools you may have at your command, and better tools will be found as you
          go along.” —George Herbert
          When the techFEST started in the year 1999, there were many doubts and
          apprehensions about it. But, the quote above guided our predecessors and still guides
          us today to keep striving for the best and keep believing in the fact that no matter how
          hard the goal is to achieve, the journey to it may be challenging but is always enjoyable.
          The two-day annual festival is not just a competition but it is also an amalgamation of
          fun and learning where spectacular ideas are displayed, and students learn and feel
          inspired. I rmly believe that techFEST’20 will be highly enjoyable and mesmerizing for
          its participants and audience. In the end I would like to thank the organizing team and
          invite all the inquisitive brains to come compete, achieve and most importantly enjoy
          the technical esta in march.
        </p>
              </div>

            </div>

          </div>
        </div>
      </div>

    )
  }
}