"use client";

import * as React from 'react';
import { LogoContainer } from '@/app/ui/logo-container';

interface TimelineProps {
	time: string;
	studyPlace: string;
	desc?: string;
	path?: string[];
}

export const TimelineCell: React.FC<TimelineProps> = ({ time, studyPlace, desc, path }) => {
  return (
	<li className="mb-20 ms-4">
		<div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
		<time className="mb-1 text-md font-normal leading-none text-gray-400 dark:text-gray-500">{ time }</time>
		<h3 className="text-xl font-semibold text-gray-900 dark:text-white">{ studyPlace }</h3>
		<p className='text-lg mb-2 text-gray-500 dark:text-gray-600'>{ desc }</p>
		<LogoContainer path={ path } />
	</li>             
  );
}
