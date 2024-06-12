import React from 'react';

export function MySkills() {
  return (
    <section className="w-full ">
      <div className="px-4 md:px-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          <SkillCard
            icon={<CodeIcon className="w-8 h-8 text-gray-900 mr-3 dark:text-gray-50" />}
            title="JavaScript"
            description="Proficient in modern JavaScript, including ES6+ features, DOM manipulation, and asynchronous programming."
          />
          <SkillCard
            icon={<CodepenIcon className="w-8 h-8 text-gray-900 mr-3 dark:text-gray-50" />}
            title="React"
            description="Experienced in building complex, scalable React applications using modern best practices and libraries."
          />
          <SkillCard
            icon={<DatabaseIcon className="w-8 h-8 text-gray-900 mr-3 dark:text-gray-50" />}
            title="SQL & NoSQL"
            description="Experienced in working with SQL (PostgreSQL, MySQL) and NoSQL (MongoDB) databases."
          />
          <SkillCard
            icon={<NetworkIcon className="w-8 h-8 text-gray-900 mr-3 dark:text-gray-50" />}
            title="Node.js"
            description="Experienced in building scalable and efficient server-side applications using Node.js and Express."
          />
          <SkillCard
            icon={<GitGraphIcon className="w-8 h-8 text-gray-900 mr-3 dark:text-gray-50" />}
            title="Git"
            description="Proficient in using Git for version control, including branching, merging, and collaborating on projects."
          />
          <SkillCard
            icon={<CodepenIcon className="w-8 h-8 text-gray-900 mr-3 dark:text-gray-50" />}
            title="CSS"
            description="Proficient in writing clean, modular, and responsive CSS using modern techniques like Flexbox and Grid."
          />
        </div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-950 p-4 md:p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-3">
        {icon}
        <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

const CodeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
};

const CodepenIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  );
};

const DatabaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
};

const GitGraphIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  );
};

const NetworkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  );
};
