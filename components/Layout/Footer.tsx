import Image from 'next/image'
import LogoVPN from 'public/assets/Logo.svg'
import React from 'react'

import Facebook from '../../public/assets/Icon/facebook.svg'
import Instagram from '../../public/assets/Icon/instagram.svg'
import Twitter from '../../public/assets/Icon/twitter.svg'
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="mx-auto grid w-full max-w-screen-xl grid-flow-row grid-cols-3 grid-rows-6 gap-4 px-6 sm:grid-flow-col sm:grid-cols-12 sm:grid-rows-1 sm:px-8 lg:px-16">
        <div className="col-start-1 col-end-4 row-span-2 flex flex-col items-start sm:col-span-4 sm:col-end-5 ">
          <Image
            priority
            src={LogoVPN}
            alt="Follow us on Twitter"
            className="mb-6 h-8 w-auto"
          />
          <p className="mb-4">
            <strong className="font-medium">LaslesVPN</strong> is a private
            virtual network that has unique features and has high security.
          </p>
          <div className="-mx-2 mt-2 mb-8 flex w-full">
            <div className="mx-2 flex items-center justify-center rounded-full bg-white-500 p-2 shadow-md">
              <Image
                priority
                src={Facebook}
                alt="Follow us on Facebook"
                className="mb-6 h-8"
              />
            </div>
            <div className="mx-2 flex items-center justify-center rounded-full bg-white-500 p-2 shadow-md">
              <Image
                priority
                src={Twitter}
                alt="Follow us on Twitter"
                className="mb-6 h-8"
              />
            </div>
            <div className="mx-2 flex items-center justify-center rounded-full bg-white-500 p-2 shadow-md">
              <Image
                priority
                src={Instagram}
                alt="Follow us on Instagram"
                className="mb-6 h-8"
              />
            </div>
          </div>
        </div>
        <div className=" row-span-2 flex flex-col sm:col-span-2 sm:col-start-7 sm:col-end-9">
          <p className="mb-4 text-lg font-medium text-black-600">Product</p>
          <ul className="text-black-500 ">
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              Download{' '}
            </li>
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              Pricing{' '}
            </li>
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              Locations{' '}
            </li>
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              Server{' '}
            </li>
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              Countries{' '}
            </li>
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              Blog{' '}
            </li>
          </ul>
        </div>
        <div className="row-span-2 flex flex-col sm:col-span-2 sm:col-start-9 sm:col-end-11">
          <p className="mb-4 text-lg font-medium text-black-600">Engage</p>
          <ul className="text-black-500">
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              LaslesVPN ?{' '}
            </li>
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              FAQ{' '}
            </li>
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              Tutorials{' '}
            </li>
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              About Us{' '}
            </li>
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              Privacy Policy{' '}
            </li>
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              Terms of Service{' '}
            </li>
          </ul>
        </div>
        <div className="row-span-2 flex flex-col sm:col-span-2 sm:col-start-11 sm:col-end-13">
          <p className="mb-4 text-lg font-medium text-black-600">Earn Money</p>
          <ul className="text-black-500">
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              Affiliate{' '}
            </li>
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              Become Partner{' '}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
