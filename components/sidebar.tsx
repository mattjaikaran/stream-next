import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils/tailwind';
import Link from 'next/link';

// i want to create a sidebar for the dashboard Layout. it should contain the following links:

// Path: components/sidebar.tsx
// Compare this snippet from components/navbar.tsx:
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
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

export default function Sidebar({
  className,
  ...props
}: {
  className?: string;
  props?: string;
}) {
  return (
    <aside className={cn('bg-gray-800', className)} {...props}>
      <nav className="">
        <ul>
          {siteConfig.dashboardNav.map(item => (
            <li key={item.href}>
              {item.external ? (
                <a
                  href={item.href}
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                  target="_blank"
                >
                  {item.title}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
