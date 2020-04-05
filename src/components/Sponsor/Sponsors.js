import React from 'react'
import Sponsor from './Sponsor'

import OppoImg from '../../assests/image/Sponsors/oppo-logo.png'
import SbiImg from '../../assests/image/Sponsors/SBI-logo.webp'
import ZebImg from '../../assests/image/Sponsors/zebronics-logo.jpg'
import InternshalaImg from '../../assests/image/Sponsors/internshala-logo.png'
import YouthIncorp from '../../assests/image/Sponsors/youthincorporated-logo.png'
// import CollegeFever from '../../assests/image/Sponsors/tcf_logo.svg'
import NerdyMerch from '../../assests/image/Sponsors/nerdyMerch-logo.jpg'
import AicfeLogo from '../../assests/image/Sponsors/AICFE-logo.jpg'
import FestPav from '../../assests/image/Sponsors/festPav-logo.png'
import igniteEng from '../../assests/image/Sponsors/ignite-eng.png'
import AssureImmi from '../../assests/image/Sponsors/AssureImmiConsult.jpg'
import KineMaster from '../../assests/image/Sponsors/kineMaster.png'
import ToretoLogo from '../../assests/image/Sponsors/toreto-logo.jpg'
import AptronLogo from '../../assests/image/Sponsors/aptron-logo.png'
import CenterOfEngg from '../../assests/image/Sponsors/centerofengg.jpeg'
import ECPCarrer from '../../assests/image/Sponsors/ecpcareer.jpeg'
import ACEEngg from '../../assests/image/Sponsors/ACEEngg.jpg'
import EastmanLogo from '../../assests/image/Sponsors/eastman.png'
import ManiMobile from '../../assests/image/Sponsors/maniMobile.png'


import Classes from './Sponsors.module.css'

export default function Sponsors() {
  return (
    <div className={Classes.mainContainer}>

      <div className={Classes.main}>
      <div className={Classes.head}>techFEST'19 Sponsors</div>
        <Sponsor title="Powered by" brandImages={[OppoImg]} />
        <Sponsor title="Banking Partner" brandImages={[SbiImg]} />
        <Sponsor title="Technology Partner" brandImages={[ZebImg]} />
        <Sponsor title="Internship and Training Partner" brandImages={[InternshalaImg]} />
        <Sponsor title="Youth Partner" brandImages={[YouthIncorp]} />
        {/* <Sponsor title="Ticketing Partner" brandImages={[CollegeFever]} /> */}
        <Sponsor title="Merchandise and Printing Partner" brandImages={[NerdyMerch]} />
        <Sponsor title="Online Media Partner" brandImages={[AicfeLogo, FestPav, igniteEng]} />
        <Sponsor title="Knowledge Partner" brandImages={[AssureImmi]} />
        <Sponsor title="Goodies Partner" brandImages={[KineMaster, ToretoLogo]} />
        <Sponsor title="Summer Internship Partner" brandImages={[AptronLogo]} />
        <Sponsor title="Coaching Partner" brandImages={[CenterOfEngg, ECPCarrer, ACEEngg]} />
        <Sponsor title="Assets Partner" brandImages={[EastmanLogo]} />
        <Sponsor title="Local Mobile Store Partner" brandImages={[ManiMobile]} />

      </div>
      <div className={Classes.twinkling}></div>
    </div>
  )
}