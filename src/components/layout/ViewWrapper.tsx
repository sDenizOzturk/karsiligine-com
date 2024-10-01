import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ViewWrapperProps {
  children: ReactNode;
}

const ViewWrapper: FC<ViewWrapperProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default ViewWrapper;
