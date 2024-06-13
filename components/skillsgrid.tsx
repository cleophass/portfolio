import React from 'react';
import { Codepen, Wind, Network, Database, GitBranch, Cloud } from 'lucide-react';
import useIntersectionObserver from '@/hook/useIntersectionObserver';

export function Skillsgrid(): JSX.Element {
  const [ref, isVisible] = useIntersectionObserver(() => {
    console.log('Component is visible!');
  });

  return (
    <section className="sm:flex hidden w-full py-12 md:py-24 lg:py-32 sm:ml-12">
      <div className="sm:container sm:grid gap-6 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2
              className="text-3xl font-bold tracking-tighter sm:text-5xl dark:text-white"
            >
              My Development Expertise
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 pb-8">
              Explore the technologies and skills I excel at as a web developer.
            </p>
          </div>
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} >
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 flex flex-col items-center justify-center gap-4">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-3">
                <Codepen className="w-8 h-8 text-gray-900 dark:text-gray-50" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold dark:text-white">React.js</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Proficient in building dynamic user interfaces with React&apos;s component-based architecture and powerful state management.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 flex flex-col items-center justify-center gap-4">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-3">
                <Wind className="w-8 h-8 text-gray-900 dark:text-gray-50" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold dark:text-white">Tailwind CSS</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Adept at creating visually stunning and responsive designs using the utility-first approach of Tailwind CSS.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 flex flex-col items-center justify-center gap-4">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-3">
                <Network className="w-8 h-8 text-gray-900 dark:text-gray-50" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold dark:text-white">Node.js</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Experienced in building scalable and efficient server-side applications using Node.js and its robust ecosystem.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden" ref={ref}>
            <div className="p-6 flex flex-col items-center justify-center gap-4">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-3">
                <Database className="w-8 h-8 text-gray-900 dark:text-gray-50" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold dark:text-white">Database Management</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Adept at designing and implementing efficient database solutions, including SQL and NoSQL databases.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 flex flex-col items-center justify-center gap-4">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-3">
                <GitBranch className="w-8 h-8 text-gray-900 dark:text-gray-50" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold dark:text-white">Git and Version Control</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Proficient in using Git for version control, collaborating with teams, and managing complex development workflows.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 flex flex-col items-center justify-center gap-4">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-3">
                <Cloud className="w-8 h-8 text-gray-900 dark:text-gray-50" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold dark:text-white">Cloud Infrastructure</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Experienced in deploying and managing applications on cloud platforms like AWS, Azure, and Google Cloud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
