'use client';
import { Logo } from '@packages/assets/icons/logo';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { RESUME_LINK } from '@/constants/resume';
import { useMemo, useEffect, useState, useRef } from 'react';

export function Nav() {
  const pathname = usePathname();
  const [blogUrl, setBlogUrl] = useState('');
  const scrollContainerRef = useRef<HTMLUListElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      if (container.scrollLeft <= 0) {
        // If at the start, jump to end
        container.scrollLeft = container.scrollWidth;
      } else {
        container.scrollBy({ left: -200, behavior: 'smooth' });
      }
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        // If at the end (with small buffer), jump to start
        container.scrollLeft = 0;
      } else {
        container.scrollBy({ left: 200, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    // Set the blog URL once the component has mounted (client-side only)
    const host = window.location.host;
    const blogHost = host.startsWith('www.') ? host.replace('www.', 'blog.') : `blog.${host}`;
    setBlogUrl(`${window.location.protocol}//${blogHost}`);
  }, []);

  const navItems = useMemo(
    () => [
      { href: '/', label: 'Home' },
      { href: '/skills', label: 'Skills' },
      { href: '/work', label: 'Work' },
      { href: '/education', label: 'Education' },
      { href: '/projects', label: 'Projects' },
      { href: '/travel', label: 'Travel' },
      { href: '/sports', label: 'Sports' },
      {
        target: '_blank',
        href: RESUME_LINK,
        label: 'Resume',
        prefetch: false,
      },
    ],
    [blogUrl]
  );

  return (
    <aside className="flex flex-col gap-8 sm:sticky static top-20 sm:h-[calc(100vh-4rem)]">
      <div className="mx-auto sm:mx-0 flex items-center justify-center">
        <Logo />
      </div>
      <nav className="mb-6 font-robotoSlab mx-auto text-sm w-full relative">
        <div className="sm:hidden absolute left-0 top-0 bottom-0 flex items-center z-10">
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#030712] to-transparent" />
          <button
            onClick={scrollLeft}
            className="p-2 bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg relative ml-1"
            aria-label="Scroll left"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
        <div className="sm:hidden absolute right-0 top-0 bottom-0 flex items-center z-10">
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#030712] to-transparent" />
          <button
            onClick={scrollRight}
            className="p-2 bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg relative mr-1"
            aria-label="Scroll right"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <ul
          ref={scrollContainerRef}
          className="flex flex-row sm:flex-col gap-3 mx-auto sm:mx-0 justify-start sm:justify-center overflow-x-auto scrollbar-hide whitespace-nowrap sm:whitespace-normal px-8 sm:px-0"
        >
          {navItems.map((item, index) => (
            <li key={item.href} className="flex-shrink-0">
              <Link
                prefetch={item.prefetch}
                target={item.target}
                href={item.href || '#'}
                className={`block px-3 py-2 rounded-md text-white font-bold transition-colors
                  ${pathname === item.href ? 'bg-gray-800' : 'hover:bg-gray-800'}
                  ${index === 0 ? 'sm:ml-0 ml-8' : ''}
                  ${index === navItems.length - 1 ? 'sm:mr-0 mr-8' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
