import React from 'react';

interface ButtonIconProps {
    href: string;
    Icon: React.ElementType;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ href, Icon  }) => {
    return (
        <a href={href} className='group border rounded-full p-3 text-white fill-white hover:fill-cyan-500 hover:border-cyan-500 hover:scale-105 transition-transform duration-100'>
            <Icon className='h-4 w-4 group-hover:fill-cyan-500'/>
        </a>
    );
};

export default ButtonIcon;
