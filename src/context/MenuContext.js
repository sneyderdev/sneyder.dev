import React, { useState } from 'react';

const MenuContext = React.createContext({});

export const MenuContextProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
