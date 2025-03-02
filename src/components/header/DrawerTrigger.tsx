'use client';

import { useState } from "react";
import Drawer from "@/components/entries/drawer";

export const DrawerTrigger = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Drawer</button>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};