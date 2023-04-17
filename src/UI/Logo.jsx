import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

const Logo = () => {
  return (
    <Link href='/'>
      <Image src='/logo.svg' alt='coffee time' width={77} height={38} />
    </Link>
  );
};

export default Logo;
