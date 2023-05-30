import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useMemo } from 'react'

import Maps from '../public/assets/HugeGlobal.svg'
import getScrollAnimation from '../utils/getScrollAnimation'
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper'
import ButtonOutline from './misc/ButtonOutline.'
import ButtonPrimary from './misc/ButtonPrimary'
import Testimoni from './Testimoni'

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <div
      className="w-full bg-gradient-to-b from-white-300 to-white-500 py-14"
      id="pricing"
    >
      <div className="mx-auto  flex w-full max-w-screen-xl flex-col justify-center px-6 text-center sm:px-8 lg:px-16">
        <div className="flex w-full flex-col">
          <ScrollAnimationWrapper className="">
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl font-medium leading-relaxed text-black-600 sm:text-3xl lg:text-4xl"
            >
              Choose Your Plan
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="mx-auto my-2 w-10/12 text-center leading-normal sm:w-7/12 lg:w-6/12"
            >
              Let&#39;s choose the package that is best for you and explore it
              happily and cheerfully.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row grid-cols-1 gap-4 py-8 px-6 sm:grid-flow-col sm:grid-cols-3 sm:px-0 lg:gap-12 lg:py-12 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="rounded-xl flex flex-col items-center justify-center border-2 border-gray-500 py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="mt-6 p-4 lg:mt-16 lg:p-0">
                  <Image
                    src="/assets/Free.png"
                    width={145}
                    height={165}
                    alt="Free Plan"
                  />
                </div>
                <p className="my-2 text-lg font-medium capitalize text-black-600 sm:my-7">
                  Free Plan
                </p>
                <ul className="flex flex-grow list-inside flex-col items-start justify-start pl-6 text-left text-black-500 xl:pl-0">
                  <li className="check custom-list relative my-2">
                    Unlimited Bandwitch
                  </li>
                  <li className="check custom-list relative my-2">
                    Encrypted Connection
                  </li>
                  <li className="check custom-list relative my-2">
                    No Traffic Logs
                  </li>
                  <li className="check custom-list relative my-2">
                    Works on All Devices
                  </li>
                </ul>
                <div className="mb-8 mt-12 flex w-full flex-none flex-col justify-center">
                  <p className="mb-4 text-center text-2xl text-black-600 ">
                    Free
                  </p>
                  <ButtonOutline>Select</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="rounded-xl flex flex-col items-center justify-center border-2 border-gray-500 py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="mt-6 p-4 lg:mt-16 lg:p-0">
                  <Image
                    src="/assets/Standard.png"
                    width={145}
                    height={165}
                    alt="Standard Plan"
                  />
                </div>
                <p className="my-2 text-lg font-medium capitalize text-black-600 sm:my-7">
                  Standard Plan{' '}
                </p>
                <ul className="flex flex-grow list-inside flex-col items-start justify-start pl-6 text-left text-black-500 xl:pl-0">
                  <li className="check custom-list relative my-2">
                    Unlimited Bandwitch
                  </li>
                  <li className="check custom-list relative my-2">
                    Encrypted Connection
                  </li>
                  <li className="check custom-list relative my-2">
                    No Traffic Logs
                  </li>
                  <li className="check custom-list relative my-2">
                    Works on All Devices
                  </li>
                  <li className="check custom-list relative my-2">
                    Connect Anyware{' '}
                  </li>
                </ul>
                <div className="mb-8 mt-12 flex w-full flex-none flex-col justify-center">
                  <p className="mb-4 text-center text-2xl text-black-600 ">
                    $9 <span className="text-black-500">/ mo</span>
                  </p>
                  <ButtonOutline>Select</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="rounded-xl flex flex-col items-center justify-center border-2 border-gray-500 py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="mt-6 p-4 lg:mt-16 lg:p-0">
                  <Image
                    src="/assets/Premium.png"
                    width={145}
                    height={165}
                    alt="Premium Plan"
                  />
                </div>
                <p className="my-2 text-lg font-medium capitalize text-black-600 sm:my-7">
                  Premium Plan{' '}
                </p>
                <ul className="flex flex-grow list-inside flex-col items-start justify-start pl-6 text-left text-black-500 xl:pl-0">
                  <li className="check custom-list relative my-2">
                    Unlimited Bandwitch
                  </li>
                  <li className="check custom-list relative my-2">
                    Encrypted Connection
                  </li>
                  <li className="check custom-list relative my-2">
                    No Traffic Logs
                  </li>
                  <li className="check custom-list relative my-2">
                    Works on All Devices
                  </li>
                  <li className="check custom-list relative my-2">
                    Connect Anyware{' '}
                  </li>
                  <li className="check custom-list relative my-2">
                    Get New Features{' '}
                  </li>
                </ul>
                <div className="mb-8 mt-12 flex w-full flex-none flex-col justify-center">
                  <p className="mb-4 text-center text-2xl text-black-600 ">
                    $12 <span className="text-black-500">/ mo</span>
                  </p>

                  <ButtonOutline>Select</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <div className="my-16 flex w-full flex-col">
          <ScrollAnimationWrapper className="">
            <motion.h3
              variants={scrollAnimation}
              className="mx-auto w-9/12 text-2xl font-medium leading-relaxed text-black-600 sm:w-6/12 sm:text-3xl lg:w-4/12 lg:text-4xl"
            >
              Huge Global Network of Fast VPN{' '}
            </motion.h3>
            <motion.p
              className="mx-auto  my-2 w-10/12 leading-normal sm:w-7/12 lg:w-6/12"
              variants={scrollAnimation}
            >
              See LaslesVPN everywhere to make it easier for you when you move
              locations.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="">
            <motion.div
              className="mt-16 w-full py-12 px-8"
              variants={scrollAnimation}
            >
              <Image priority src={Maps} alt="Maps" className="h-auto w-full" />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="">
            <motion.div
              className="mt-4 flex w-full flex-wrap items-center justify-evenly lg:flex-nowrap"
              variants={scrollAnimation}
            >
              {/* <Netflix className="h-18 w-auto" /> */}
              <Image
                src="/assets/Icon/amazon.png"
                width={145}
                height={145}
                className="mt-4 h-14 w-auto lg:mt-2"
                alt=""
              />
              <Image
                src="/assets/Icon/netflix.png"
                width={145}
                height={145}
                className="mt-2 h-14 w-auto lg:mt-0"
                alt=""
              />
              <Image
                src="/assets/Icon/reddit.png"
                width={145}
                height={145}
                className="mt-2 h-12 w-auto lg:mt-0"
                alt=""
              />
              <Image
                src="/assets/Icon/discord.png"
                width={145}
                height={145}
                className="mt-2 h-14 w-auto lg:mt-0"
                alt=""
              />
              <Image
                src="/assets/Icon/spotify.png"
                width={145}
                height={145}
                className="mt-2 h-12 w-auto lg:mt-0"
                alt=""
              />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="my-16 flex w-full flex-col" id="testimoni">
          <ScrollAnimationWrapper className="">
            <motion.h3
              variants={scrollAnimation}
              className="sm: mx-auto w-9/12 text-2xl font-medium leading-normal text-black-600 sm:text-3xl lg:w-4/12 lg:text-4xl"
            >
              Trusted by Thousands of Happy Customer{' '}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="mx-auto mb-2 mt-4 w-10/12 leading-normal sm:w-7/12 lg:w-6/12"
            >
              These are the stories of our customers who have joined us with
              great pleasure when using this crazy feature.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="flex w-full flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative mt-16 w-full">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="rounded-xl absolute  z-10 flex w-full flex-col items-center justify-between bg-white-500 py-8 px-6 sm:flex-row sm:py-14 sm:px-12 lg:px-16">
                <div className="mb-6 flex w-10/12 flex-col text-left sm:mb-0 sm:w-7/12 lg:w-5/12">
                  <h5 className="text-xl font-medium leading-relaxed text-black-600 sm:text-2xl lg:text-3xl">
                    Subscribe Now for <br /> Get Special Features!
                  </h5>
                  <p>Let&#39;s subscribe with us and find the fun.</p>
                </div>
                <ButtonPrimary>Get Started</ButtonPrimary>
              </div>
              <div
                className="roudned-lg absolute top-0 left-0 right-0 mx-auto mt-8 h-60 w-11/12 bg-black-600 opacity-5 sm:h-56"
                style={{ filter: 'blur(114px)' }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  )
}

export default Pricing
