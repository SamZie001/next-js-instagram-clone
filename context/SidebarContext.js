'use client';

import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SidebarContext.Provider value={{ isOpen }}>
      <SidebarNav />
    </SidebarContext.Provider>
  );
}