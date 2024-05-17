import {getDictionary} from "@/i18n/get-dictionary";
import {Locale} from '@/i18n/i18n-config';
import Counter from "./components/counter";
import LocaleSwitcher from "./components/locale-switcher";
import {PropsWithChildren} from "react";
import {ArrowRightIcon} from "@heroicons/react/24/outline";

export default async function IndexPage({params: {lang},}: PropsWithChildren<{
  params: { lang: Locale };
}>) {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <LocaleSwitcher/>
      <p>Current locale: {lang}</p>
      <p>
        This text is rendered on the server:{" "}
        {dictionary['server-component'].welcome}
      </p>
      <Counter dictionary={dictionary.counter}/>

      <a
        href={'/styling'}
        className="inline-flex gap-x-2 rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium text-gray-100 no-underline hover:bg-gray-500 hover:text-white"
      >
        css module - styled jsx - styled components
        <ArrowRightIcon className="block w-4"/>
      </a>
    </div>
  );
}
