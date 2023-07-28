import React from 'react';
import ChipComponent from './chip.component';

interface ProjectSectionProps {
    title: string;
    image: string;
    description: string;
    link: string;
    tags: string[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ title, image, description, link, tags}) => {
    return (
        <section className='flex flex-col flex-grow bg-cyan-900 h-[722px] p-6 rounded-lg m-6'>
            <a href={link}>
            <div className='flex items-center mb-2'>
                <h2 className='font-bold'>{title}</h2>
            </div>

            <img className='mb-2 text-sm font-semibold' src={image} />
            <p className='text-sm text-gray-400 text-justify mb-2'>{description}</p>

            <div className='flex flex-wrap gap-2'>
                {tags.map((tag,idx) => <ChipComponent key={`${title}-tag-${idx}`} text={tag} />)}
            </div>
            </a>
        </section>
    );
};

export default ProjectSection;
