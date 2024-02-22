import Link from 'next/link';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { buttonVariants } from './ui/button';
import { Icons } from './icons';
import { ThemeToggle } from './theme-toggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
}

interface MainNavProps {
  items?: NavItem[];
}

export default function Navbar({
  className,
  items,
  ...props
}: {
  className?: string;
  items?: MainNavProps;
  props?: string;
}) {
  return (
    <nav
      className={cn(
        'flex items-center py-2 md:py-4 container space-x-4 lg:space-x-6',
        className
      )}
      {...props}
    >
      <Link href="/" className="flex items-center space-x-2 mr-auto">
        <span className="inline-block">{siteConfig.name}</span>
      </Link>

      <div className="inline">
        <DropdownMenu>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            {/* {siteConfig.mainNav?.map((item: any) => (
              <div key={item.href}>
                <DropdownMenuLabel className="hover:cursor-pointer">
                  {item.title}
                </DropdownMenuLabel>
              </div>
            ))} */}
            <DropdownMenuGroup>
              <DropdownMenuLabel>Dashboard</DropdownMenuLabel>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* {siteConfig.mainNav?.length ? (
        <nav className="hidden md:flex gap-6">
          {siteConfig.mainNav?.map((item: any) => (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                `flex items-center text-sm font-medium text-muted-foreground hover:text-gray-700`
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null} */}
      <ThemeToggle />
    </nav>
  );
}
