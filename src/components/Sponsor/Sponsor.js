import React from 'react'

import Classes from './Sponsor.module.css'


export default function Sponsor({ title, brandImages }) {
  return (
    <div className={Classes.main}>
      <div className={Classes.title_area}>
        <h1 className={Classes.title}>{title}</h1>
      </div>
      <div className={Classes.brandImages}>
        {brandImages ? brandImages.map(brandImage => <img className={Classes.logo} src={brandImage} alt="" />) : null}
      </div>
    </div>
  )
}