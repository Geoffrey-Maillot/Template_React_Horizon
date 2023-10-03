import classe from './toast.module.scss';
import { createContext, useRef, useContext } from 'react';

import { Toast, ToastMessage } from 'primereact/toast';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const ToastContext = createContext((toastParams: ToastMessage) => {});

const ToastProvider = ({ children }: { children: JSX.Element }) => {
  const toast = useRef<Toast>(null);

  const showToast = (toastParams: ToastMessage) => {
    toast.current?.show({ ...toastParams, life: 2000 });
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <Toast ref={toast} className={`${classe['p-toast']}`} />
    </ToastContext.Provider>
  );
};

const useToastContext = () => {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error('useToastContext was used outside of its Provider');
  }

  return context;
};

export { useToastContext, ToastProvider };
