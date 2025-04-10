import { Link } from 'react-router-dom';

import { EyeOpen } from '@/assets/icons';
import { ROUTES } from '@/config/';
import { Button, Input } from '@/ui-kit';

export const SignIn = () => (
  <div className="page-container">
    <div className="border border-neutral-3 rounded-[20px] mx-auto w-full max-w-[520px] py-9 px-14 flex flex-col items-center">
      <h1 className="text-h4 md:text-h3 xl:text-h3 text-white font-semibold mb-3">
        Sign In
      </h1>
      <p className="text-base xl:text-lg text-neutral-1">
        Already have an account?{' '}
        <Link
          to={ROUTES.EXPLORER.SIGN_UP}
          className="text-blue hover:text-blue-darker"
        >
          Sign Up
        </Link>
      </p>
      <form className="mt-9 flex-1 w-full">
        <Input
          variant="primary"
          className="w-full h-12 py-2.5 px-3"
          wrapperClass="mb-4"
          label="Username"
          placeholder="e.g. tomsmith"
        />
        <Input
          variant="primary"
          className="w-full h-12 py-2.5 px-3"
          wrapperClass="mb-4"
          label="Password"
          placeholder="Password"
          icon={<EyeOpen width={20} />}
          iconRole="button"
        />
      </form>
      <Button className="w-full mt-10 text-lg">Login</Button>
      <Link
        to={ROUTES.EXPLORER.PASSWORD_RECOVERY}
        className="text-base md:text-lg text-blue hover:text-blue-darker mt-5"
      >
        Forgot password?
      </Link>
    </div>
  </div>
);
