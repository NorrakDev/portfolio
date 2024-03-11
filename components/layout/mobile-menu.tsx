import { Menu, X } from 'lucide-react';
import React, { Fragment, useEffect, useState } from 'react';
import IconButton from '@/components/general/icon-button';
import Typography from '../general/typography';
import ThemeSwitcher from '../general/theme-switcher';
import DownloadCV from '../general/download-cv';
import Link from '@/components/link';
import { NAV_LINKS } from '@/lib/data';
import { Dialog, Transition } from '@headlessui/react'
import useWindowSize from '@/hooks/use-window-size';

const Logo = () => (
  <Typography variant="h3" className="font-bold">
    {'<SN />'}
  </Typography>
);

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const size = useWindowSize();

  // close sidebar if open in screen size < 768px
  useEffect(() => {
    if (size?.width && size?.width > 767 && isOpen) {
      setIsOpen(false);
    }
  }, [size, isOpen]);

  return (
    <div className="md:hidden">
      <IconButton
        onClick={() => setIsOpen(true)}
      >
        <Menu />
      </IconButton>

      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="absolute right-0 z-50" onClose={setIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/10 opacity-100 backdrop-blur-sm transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-xs">
                    <div className="flex h-full flex-col bg-gray shadow-2xl">
                      <div className="flex items-start justify-between p-4 border-b border-gray-100">
                        <Dialog.Title>
                          <Logo />
                        </Dialog.Title>
                        <IconButton
                          onClick={() => setIsOpen(false)}
                        >
                          <X />
                        </IconButton>
                      </div>
                      <div className="border-b border-gray-100 p-4">
                        <ul className="flex list-none flex-col gap-4">
                          {NAV_LINKS.map((link, index) => (
                            <li key={index}>
                              <Link
                                href={link.href}
                                onClick={() => {
                                  const timeoutId = setTimeout(() => {
                                    setIsOpen(false);
                                    clearTimeout(timeoutId);
                                  }, 500);
                                }}
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col gap-4 p-4">
                        <div className="flex items-center justify-between">
                          <Typography>Switch Theme</Typography>
                          <ThemeSwitcher />
                        </div>
                        <DownloadCV />
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>

  );
};

export default MobileMenu;