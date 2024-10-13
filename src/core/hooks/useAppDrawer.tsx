import { useState, useRef } from 'react';
import { DrawerLayout } from 'react-native-gesture-handler';

export const useAppDrawer = () => {
  const drawerRef = useRef<DrawerLayout>(null);
  const [drawerContentType, setAppDrawerContentType] = useState<
    'tags' | 'search' | null
  >(null);

  const openAppDrawer = (type: 'tags' | 'search') => {
    setAppDrawerContentType(type);
    drawerRef.current?.openDrawer();
  };

  const closeAppDrawer = () => {
    setAppDrawerContentType(null);
    drawerRef.current?.closeDrawer();
  };

  return {
    drawerRef,
    drawerContentType,
    openAppDrawer,
    closeAppDrawer,
  };
};
