/* eslint-disable react/prop-types */

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useLocation } from 'react-router-dom';

const ExpandedDrawer = ({ isOpen, onClose, children }) => {
  const { pathname } = useLocation();
  return (
    <>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as='div' className={`relative ${pathname.includes('engage/posts') ? 'z-40' : 'z-10'}`} onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed  inset-0 bg-black bg-opacity-40' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-hidden '>
            <div className='absolute inset-0 overflow-hidden'>
              <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 '>
                <Transition.Child
                  as={Fragment}
                  enter='transform transition ease-in-out duration-500'
                  enterFrom='translate-x-full'
                  enterTo='translate-x-0'
                  leave='transform transition ease-in-out duration-500'
                  leaveFrom='translate-x-0'
                  leaveTo='translate-x-full'
                >
                  <Dialog.Panel className='pointer-events-auto overflow-y-auto w-screen max-w-[60rem] bg-white'>
                    {children}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default ExpandedDrawer
