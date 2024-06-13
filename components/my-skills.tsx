import React from 'react';
import { Skillsgrid } from '@/components/skillsgrid';
import { IconCloudDemo } from "@/components/CloudDemo";
import { SkillsgridMobile } from './skillsgridMobile';

export function MySkills() {
  return (
    <div className="flex flex-col sm:flex-row">   
      <div className="sm:w-1/2">
      <div className=' sm:hidden'><IconCloudDemo /></div>
     
      <Skillsgrid/>
      <SkillsgridMobile/>
     
        
      </div>
      <div className="hidden w-1/2 sm:flex justify-center items-center">
        <IconCloudDemo />
      </div>
    </div>
  );
}