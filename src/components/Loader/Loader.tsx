import { Spinner } from '@/assets/icons';

export const Loader = () => (
  <div className="bg-background-black w-full h-full flex items-center justify-center">
    <Spinner className="w-16 h-16 animate-spin fill-blue" />
  </div>
);
