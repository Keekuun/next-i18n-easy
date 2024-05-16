import {getDictionary} from "@/i18n/get-dictionary";
import {Locale} from '@/i18n/i18n-config';
import LocaleSwitcher from "../components/locale-switcher";
import {PropsWithChildren} from "react";
import PageWithLang from "@/app/[lang]/components/PageWithLang";

async function Page(props: PropsWithChildren<{ lang: Locale, t: typeof getDictionary }>) {
  return (
    <div>
      <LocaleSwitcher/>
      <p>Current locale: {props.lang}</p>
      <p>
        This text is rendered on the server:{" "}
        {props.t['server-component'].home}
      </p>
    </div>
  );
}

export default PageWithLang(Page);
