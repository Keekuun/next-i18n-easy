"use client";

import {usePathname} from "next/navigation";
import Link from "next/link";
import {i18n, type Locale} from "@/i18n/i18n-config";
import {ArrowRightIcon} from "@heroicons/react/24/outline";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div>
      <p>Locale switcher:</p>
      <ul>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link href={redirectedPathName(locale)}
                    className="inline-flex gap-x-2 mb-2 rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium text-gray-100 no-underline hover:bg-gray-500 hover:text-white"
              >{locale}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
