import React from 'react'
import { Button, Link, Card, CardBody } from '@nextui-org/react'
import { title, subtitle } from '@/components/primitives'
import HomeSlider from '@/components/HomeSlider'
import HomeCard from '@/components/HomeCard'
import HomeAboutSlider from '@/components/HomeAboutSlider'
import Reviews from '@/components/Reviews'

function Home() {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-5'>
        <div className='flex flex-col gap-3'>
          <h1 className={title()}>
            <span className='max-md:text-3xl'>High Volume, Quality <br className='' /> South African </span><span className='text-red-500 max-md:text-3xl'>Paving</span>
          </h1>
          <h2 className={subtitle()}>
            Serving Our Clients for Over 25+ Years
          </h2>
          <p className="text-default-500">
            With over 25 year of experience and a team of skilled professionals, we pride ourselves on delivering exceptional results and outstanding customer service. We offer the highest standard of workmanship, whether you require paving for a driveway, patio, pool area or a larger scale commercial development.
          </p>
          <div className='mt-5 flex gap-2'>
            <Button as={Link} href='/services' className='bg-red-500 text-white'>
              Our Services
            </Button>
            <Button as={Link} href='/contact' className='bg-red-500 text-white'>
              Contact
            </Button>
          </div>
        </div>
        <div>
          <HomeSlider />
        </div>
      </div>

      <HomeCard />


      <div className='grid grid-cols-1 md:grid-cols-2 mt-20 items-center gap-10 pb-10'>
        <HomeAboutSlider />
        <div className='flex flex-col gap-5 max-md:pt-20'>
          <h1 className='text-4xl font-semibold'>A little about us</h1>
          <p>
            Thomson Paving was established in 1996 and we are a leading provider of residential, commercial and industrial paving. We&apos;re passionate about getting the job done while creating something beautiful to look at.
          </p>
          <p>
            Our business approach and values are centred around client satisfaction, undertaking each project with enthusiasm and attention to detail, irrespective of the size of your project.
          </p>
          <div>
            <Button as={Link} href='/gallery' className='bg-red-500 text-white'>
              View Gallery
            </Button>
          </div>
        </div>
      </div>
      <Reviews />
    </div>
  )
}

export default Home
