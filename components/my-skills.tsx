import React from 'react';
import { Skillsgrid } from '@/components/skillsgrid';
import { IconCloudDemo } from "@/components/CloudDemo";

export function MySkills() {
  return (
    <div className="flex flex-row">   
      <div className="w-1/2">
     
      <Skillsgrid/>
     
        
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <IconCloudDemo />
      </div>
    </div>
  );
}