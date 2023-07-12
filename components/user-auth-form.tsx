'use client';

import React, { FC } from 'react';
import { getDictionary } from '@/dictionaries';

import { Icons } from './icons';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

type UserAuthFormProps = { dict: Awaited<ReturnType<typeof getDictionary>> };

const UserAuthForm: FC<UserAuthFormProps> = ({ dict }) => {
  return (
    <>
      <Button className="capitalize" variant="outlineShadow">
        <Icons.google />
        <p>continue with google</p>
      </Button>
      <div className="flex items-center justify-center">
        <div className="grow border-t border-zinc-300"></div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 font-semibold text-gray-500">
          OR
        </div>
        <div className="grow border-t border-zinc-300"></div>
      </div>
      <div>
        <Label htmlFor="email" className="capitalize">
          your email address
        </Label>
        <Input id="email" placeholder="example@abc.com" />
      </div>
      <Button type="submit" className="capitalize">
        <p>{dict.onBoarding.continue}</p>
      </Button>
    </>
  );
};

export default UserAuthForm;
