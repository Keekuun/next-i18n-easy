import React, {ComponentType, PropsWithChildren} from 'react';
import {Locale} from "@/i18n/i18n-config";
import {getDictionary} from "@/i18n/get-dictionary";

function PageWithLang<T>(WrappedComponent: ComponentType<T>) {
  return async function WithLangHOC({params, ...rest}: PropsWithChildren<{
    params: { lang: Locale };
  }>) {
    const t = await getDictionary(params.lang);
    return <WrappedComponent {...{rest, params} as T} lang={params.lang} t={t}/>;
  };
}

export default PageWithLang
