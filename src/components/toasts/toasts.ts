import { ReactNode } from 'react';
import { toast } from 'react-toastify';

export const showErrorToast = (content: ReactNode) => toast.error(content, { position: toast.POSITION.TOP_RIGHT });
