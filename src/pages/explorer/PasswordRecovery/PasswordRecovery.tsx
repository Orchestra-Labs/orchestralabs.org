import { Link } from 'react-router-dom';

import { ROUTES } from '@/config/';
import { Button, Input } from '@/ui-kit';

export const PasswordRecovery = () => (
  <div className="page-container">
    <div className="border border-neutral-3 rounded-[20px] mx-auto w-full max-w-[520px] py-9 px-14 flex flex-col items-center">
      <h1 className="text-h4 md:text-h3 xl:text-h3 text-white font-semibold mb-3">
        Password recovery
      </h1>
      <p className="text-base xl:text-lg text-neutral-1 text-center text-balance">
        Enter the email address you used when you joined and we’ll send you
        instruction to reset your password.
      </p>
      <form className="mt-9 flex-1 w-full">
        <Input
          variant="primary"
          className="w-full h-12 py-2.5 px-3"
          wrapperClass="mb-4"
          label="Email Address"
          placeholder="Your Email Address"
        />
      </form>
      <Button className="w-full mt-10 text-lg">Reset Password</Button>
      <Button variant="secondary" className="w-full mt-5 text-lg" asChild>
        <Link
          to={ROUTES.EXPLORER.SIGN_IN}
          className="text-blue hover:text-blue-darker"
        >
          Back to Sign In
        </Link>
      </Button>
    </div>
  </div>
);
