import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useMemo } from 'react'

import getScrollAnimation from '../utils/getScrollAnimation'
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper'
import ButtonPrimary from './misc/ButtonPrimary'

const Hero = ({
  listUser = [
    {
      name: 'Users',
      number: '390',
      icon: '/assets/Icon/heroicons_sm-user.svg',
    },
    {
      name: 'Locations',
      number: '20',
      icon: '/assets/Icon/gridicons_location.svg',
    },
    {
      name: 'Server',
      number: '50',
      icon: '/assets/Icon/bx_bxs-server.svg',
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <div className="mx-auto mt-24 max-w-screen-xl px-8 xl:px-16" id="about">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row grid-rows-2 gap-8 py-6 sm:grid-flow-col sm:grid-cols-2 sm:py-16 md:grid-rows-1"
          variants={scrollAnimation}
        >
          <div className=" row-start-2 flex flex-col items-start justify-center sm:row-start-1">
            <h1 className="text-black-600 text-3xl font-medium leading-normal lg:text-4xl xl:text-5xl">
              Want anything to be easy with <strong>LaslesVPN</strong>.
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us.
            </p>
            <ButtonPrimary>Get Started</ButtonPrimary>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                src="/assets/Illustration1.png"
                alt="VPN Illustrasi"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative flex w-full">
        <ScrollAnimationWrapper className="bg-white-500 z-10 grid w-full grid-flow-row grid-cols-1 divide-y-2 divide-gray-100 rounded-lg py-9 sm:grid-flow-row sm:grid-cols-3 sm:divide-y-0 sm:divide-x-2">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="mx-auto flex w-8/12 items-center justify-start py-4 px-4 sm:mx-0 sm:w-auto sm:justify-center sm:py-6"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="mx-auto flex w-40 sm:w-auto">
                <div className="mr-6 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-black-600 text-xl font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-black-500 text-lg">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className="bg-black-600 roudned-lg absolute top-0 left-0 right-0 mx-auto mt-8 h-64 w-11/12 opacity-5 sm:h-48"
          style={{ filter: 'blur(114px)' }}
        ></div>
      </div>
    </div>
  )
}

export default Hero
