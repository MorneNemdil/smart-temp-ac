import { type LucideProps } from 'lucide-react';
import React from 'react'
import { useTheme } from './theme-provider';

const LucideButton = ({ Icon, onClick }: {
    Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>,
    onClick?: (props?: any) => any
}) => {
    const { theme } = useTheme()

    return (
        <div className={`p-1 pb-1.5 border rounded-full hover:shadow hover:shadow-gray-700 hover:cursor-pointer w-min 
            ${theme == 'dark' && "bg-white text-black"}`}
            onClick={onClick}
        >
            <Icon />
        </div>
    )
}

export default LucideButton