import TsDocGenThemeRegistry from '@tsdocgen/core/theme/ThemeRegistry';
import type { TsDocGenThemeComponents } from '@tsdocgen/core/types/theme';
import type { AppLayoutProps } from '../Layout/Layout';

export interface AntDesignTsThemeComponents extends TsDocGenThemeComponents {
    Layout: React.ComponentType<AppLayoutProps>;
    Utils: {
        getScopeColor: (scope: string) => string;
    }
}

const Registry = new TsDocGenThemeRegistry<AntDesignTsThemeComponents>('@tsdocgen/themes/ant-design');

export default Registry;