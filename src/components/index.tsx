'use client';

import Menu from './Menu';

// declare as a type my props

export default function Header(props: any) {
  return (
    <header className="flex flex-col items-center justify-between">
      <Menu {...props} />
      {props.children}
    </header>
  );
}
