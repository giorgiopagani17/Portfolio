"use client";

import React from "react";
import { IconBrandGithub, IconBrandLinkedin, IconMailFilled } from "@tabler/icons-react";

export const Footer = () => {
  return (
    <footer className="w-full py-8 bg-gradient-to-br backdrop-blur-sm border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-neutral-300 text-sm">
              © {new Date().getFullYear()} Giorgio Pagani. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/giorgiopagani17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <IconBrandGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/giorgio-pagani-5ab4b42b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:giorgio.pagani2003@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <IconMailFilled className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
