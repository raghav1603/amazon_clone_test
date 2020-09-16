import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img
                    className='home__image'
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />

                <div className='home__row'>
                    <Product
                        id={1230}
                        title="The Lean Startup"
                        price={299.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={5}
                    />
                    <Product
                        id={1231}
                        title="Behringer P1 Powerplay Personal In-Ear Monitor Amplifier"
                        price={5577.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61tKhUbh3XL._SL1000_.jpg"
                        rating={4}
                    />
                </div>
                <div className='home__row'>
                    <Product
                        id={1232}
                        title=" Turtle Beach Recon 150 "
                        rating={4}
                        price={3599.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/811tCFHxNZL._SL1500_.jpg"
                    />
                    <Product
                        id={1234}
                        title=" HP Pavilion Gaming 9th Gen Intel Core i5 Processor 15.6-inch FHD Gaming Laptop "
                        rating={3}
                        price={64599.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81pezrPSgOL._SL1500_.jpg" />
                    <Product
                        id={1235}
                        title=" HP Pavilion Gaming 9th Gen Intel Core i5 Processor 15.6-inch FHD Gaming Laptop "
                        rating={5}
                        price={64599.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81pezrPSgOL._SL1500_.jpg" />

                </div>
                <div className='home__row'>
                    <Product
                     id={12}
                     title="OxiClear N99 Pollution Mask With 2 Activated Carbon Filters, Reusable, D.R.D.O Certified "
                     rating={3}
                     price={499.99}
                     image="https://images-na.ssl-images-amazon.com/images/I/51K%2BwQ6lrpL._SL1024_.jpg" />

                </div>
            </div>
        </div>
    )
}

export default Home
