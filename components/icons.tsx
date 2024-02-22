/* eslint-disable @next/next/no-img-element */
import {
  LucideProps,
  Moon,
  SunMedium,
  Undo2,
  // @ts-ignore
  type Icon as LucideIcon,
  Loader2,
} from 'lucide-react';

export type Icon = LucideIcon;

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  spinner: Loader2,
  undo: Undo2,
  // logo: (props: LucideProps) => (
  //   <img src={logo.src} width={100} alt="logo" {...props} />
  // ),
};
