import { Link } from 'react-router-dom';

import { EyeOpen } from '@/assets/icons';
import { ROUTES } from '@/config/';
import { Button, Input } from '@/ui-kit';

export const SignUp = () => (
  <div className="page-container">
    <div className="border border-neutral-3 rounded-[20px] mx-auto w-full max-w-[520px] py-7 px-6 md:py-9 md:px-14 flex flex-col items-center">
      <h1 className="text-h4 md:text-h3 xl:text-h3 text-white font-semibold mb-3">
        Sign Up
      </h1>
      <p className="text-base xl:text-lg text-neutral-1">
        Don&apos;t have an account?{' '}
        <Link
          to={ROUTES.EXPLORER.SIGN_IN}
          className="text-blue hover:text-blue-darker"
        >
          Sign In
        </Link>
      </p>
      <form className="mt-9 flex-1 w-full">
        <Input
          variant="primary"
          className="w-full h-12 py-2.5 px-3"
          wrapperClass="mb-4"
          label="Username"
          placeholder="Username"
        />
        <Input
          variant="primary"
          className="w-full h-12 py-2.5 px-3"
          wrapperClass="mb-4"
          label="Email Address"
          placeholder="A confirmation code will be sent to this address"
        />
        <Input
          variant="primary"
          className="w-full h-12 py-2.5 px-3"
          wrapperClass="mb-4"
          label="Confirm Email Address"
          placeholder="Re-enter your email address"
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
        <Input
          variant="primary"
          className="w-full h-12 py-2.5 px-3"
          wrapperClass="mb-4"
          label="Confirm Password"
          placeholder="Confirm Password"
          icon={<EyeOpen width={20} />}
          iconRole="button"
        />
      </form>
      <Button className="w-full mt-10 text-lg">Create an Account</Button>
    </div>
  </div>
);
