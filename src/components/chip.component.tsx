import React from 'react';

interface ChipComponentProps {
    text: string;
}

const ChipComponent: React.FC<ChipComponentProps> = ({ text }) => {
    return (
        <span className='bg-cyan-500 text-cyan-50 font-bold rounded-full px-3 py-0.5 text-sm'>
            {text}
        </span>
    );
};

export default ChipComponent;
