import { toast } from 'react-toastify';

export const toastSuccess = (message, toastSuccessOptions) => {
  toastSuccessOptions = {
    position: 'top-right',
    hideProgressBar: false,
    autoClose: 2000,
  };
  toast.success(message, toastSuccessOptions);
};

export const toastError = (message, toastErrorOptions) => {
  toastErrorOptions = {
    position: 'top-center',
    hideProgressBar: false,
    autoClose: 2500,
  };
  toast.error(message, toastErrorOptions);
};

export const toastWarning = (message, toastWarningOptions) => {
  toastWarningOptions = {
    position: 'top-center',
    hideProgressBar: false,
    autoClose: 2000,
  };
  toast.warning(message, toastWarningOptions);
};
