'use client'

import dynamic from 'next/dynamic';
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

const DynamicHome = dynamic(() => import('./globals.css'), { ssr: false });

export { DynamicHome };

export default function Home() {
  const [showSection, setShowSection] = useState(null);
  const outsideClickListener = useRef(null);

  // Function to toggle the visibility of the section based on the link clicked
  const toggleSection = (section) => {
    setShowSection(showSection === section ? null : section);
  };

  // Function to hide all sections when clicking anywhere on the screen that is not a link
  const hideAllSections = () => {
    setShowSection(null);
  };

  // Effect to add a global click event listener to hide sections when clicking outside the links
  useEffect(() => {
    outsideClickListener.current = (event) => {
      if (!event.target.closest('.nav-link')) {
        hideAllSections();
      }
    };
    document.addEventListener('click', outsideClickListener.current);
    return () => {
      document.removeEventListener('click', outsideClickListener.current);
    };
  }, []);

  // Function to add click event listener to the links when they are clicked
  const handleClickLink = (section) => {
    return (event) => {
      event.stopPropagation();
      toggleSection(section);
    };
  };

  return (
    <div className="min-h-screen place-items-center dark:bg-grey-100">
      <div className="max-w-md mx-auto py-8 text-center">
        <Head>
          <title>thekbsareinsidethecomputer</title>
          <meta name="description" content="what is this, a website for ants?" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Header */}
        <header>
          <h1 className="text-4xl font-bold text-blue-500">my name here</h1>
          <p className="text-lg text-gray-700">Software Engineer</p>
        </header>

        {/* Blurb */}
        <section>
          <p className="text-lg text-gray-600">
            a description about me
          </p>
        </section>

        {/* Navigation */}
        <nav className="mt-8">
          <ul className="flex space-x-4 justify-center">
            <li>
              <a href="#" className="text-blue-500 hover:underline nav-link" onClick={handleClickLink('about')}>
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline nav-link" onClick={handleClickLink('projects')}>
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline nav-link" onClick={handleClickLink('contact')}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Sections */}
        <div className="mt-8">
          {/* About Me Section */}
          {showSection === 'about' && (
            <div className="rounded-md h-48">
              <h2 className="text-lg font-bold mb-2">About Me</h2>
              <p>
                a longer description about me
              </p>
            </div>
          )}

          {/* Projects Section */}
          {showSection === 'projects' && (
            <div className="p-4 rounded-md h-48">
              
            </div>
          )}

          {/* Contact Section */}
            {showSection === 'contact' && (
            <div className="p-4 rounded-md h-48">
                <h2 className="text-lg font-bold mb-2">Contact</h2>
                <div className="flex flex-col space-y-4">
                {/* LinkedIn */}
                    <div>
                        <p>
                        {" "}
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            LinkedIn
                        </a>
                        </p>
                    </div>
                    {/* Bluesky */}
                    <div>
                        <p>
                        <a
                            href="https://bluesky.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Bluesky
                        </a>
                        </p>
                    </div>
                    {/* Discord */}
                    <div>
                        <h3 className="text-lg font-semibold"></h3>
                        <p>
                        <span className="text-blue-500 hover:underline"><a href="https://discordapp.com/users/">Discord</a></span>
                        </p>
                    </div>
                        <p>
                        
                        <a
                            href="https://discord.gg/hackmud"
                            className="text-blue-500 hover:underline"
                        >
                            hackmud discord
                        </a>
                        </p>
                    <div>

                    </div>
                </div>
            </div>
            )}

        </div>
      </div>
    </div>
  );
}
