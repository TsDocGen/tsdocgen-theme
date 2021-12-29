import TsDocGenTheme from '@tsdocgen/core/models/themes/Theme';
import Layout from './Layout';
import Method from './Method';
import Methods from './Methods';
import Page from './Page';
import Properties from './Properties';
import Property from './Property';

const AntDesignTheme = new TsDocGenTheme('ant-design', { Page, Layout, Method, Methods, Properties, Property });

export default AntDesignTheme;

