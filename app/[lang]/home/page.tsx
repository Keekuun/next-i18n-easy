import {getDictionary} from "@/i18n/get-dictionary";
import {Locale} from '@/i18n/i18n-config';
import {PropsWithChildren} from "react";
import LocaleSwitcher from "../components/locale-switcher";

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
        {dictionary['server-component'].home}
      </p>
    </div>
  );
}
