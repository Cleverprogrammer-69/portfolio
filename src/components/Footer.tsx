import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} [Your Name]. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 neon-border px-2 py-1 rounded"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 neon-border px-2 py-1 rounded"
            >
              GitHub
            </Link>
            <Link
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 neon-border px-2 py-1 rounded"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
