import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc, altText, link }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-black">
      <div className="relative h-48">
      <Image
          src={imageSrc}
          alt={altText}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 dark:text-white">{title}</div>
        <p className="text-gray-700 text-base dark:text-gray-300">{description}</p>
      </div>
      <div className="px-6 py-4">
        <a href={link} className="text-indigo-600 hover:text-indigo-800 flex items-center">
          Voir plus <ArrowRight className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default Card;
