import React from 'react'
import styles from './InnerCard.module.css'

const InnerCard = ({ value }) => {
  return (
    <section className={styles.inner_card_main}>
      <div className="row">

        <div className="col-lg-4 col-md-6 col-12">
          <div className={styles.inner_wrap}>
            <h1>Description</h1>
            <span> {value.description}</span>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
          <div className={styles.inner_wrap}>
            <h1>Country</h1>
            <span> {value.country}</span>
          </div>
        </div>



        <div className="col-lg-4 col-md-6 col-12">
          <div className={styles.inner_wrap}>
            <h1>Sunset</h1>
            <span> {value.sunset}</span>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
          <div className={styles.inner_wrap}>
            <h1>Sunrise</h1>
            <span> {value.sunrise}</span>
          </div>
        </div>



        <div className="col-lg-4 col-md-6 col-12">
          <div className={styles.inner_wrap}>
            <h1>Temperature</h1>
            <span> {value.temp}</span>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
          <div className={styles.inner_wrap}>
            <h1>Latitude</h1>
            <span> {value.lat}</span>
          </div>
        </div>


        <div className="col-lg-4 col-md-6 col-12">
          <div className={styles.inner_wrap}>
            <h1>Longitude</h1>
            <span> {value.lon}</span>
          </div>
        </div>


        <div className="col-lg-4 col-md-6 col-12">
          <div className={styles.inner_wrap}>
            <h1>Wind Speed</h1>
            <span> {value.speed}</span>
          </div>
        </div>


      </div>
    </section>
  )
}

export default InnerCard