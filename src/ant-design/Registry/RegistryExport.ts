import Registry from "./Registry";
import AppLayout from "../Layout";
import Method from "../Method";
import Methods from "../Methods";
import Page from "../Page";
import Properties from "../Properties";
import Property from "../Property";
import Utils from '../Utils';

Registry.set('Layout', AppLayout);
Registry.set('Method', Method);
Registry.set('Methods', Methods);
Registry.set('Page', Page);
Registry.set('Properties', Properties);
Registry.set('Property', Property);
Registry.set('Utils', Utils);

export default Registry;
