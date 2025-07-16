import { App } from 'vue';
import Datetime from './DateTime.vue';
import DatetimePopup from './DatetimePopup.vue';
declare function createDatetime(): {
    install: (app: App) => void;
};
declare namespace createDatetime {
    var version: string;
}
export default createDatetime;
declare const version = "__VERSION__";
export { Datetime, DatetimePopup, version, };
