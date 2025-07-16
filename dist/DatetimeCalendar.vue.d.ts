import type { PropType as __PropType } from 'vue';
import { DateTime, WeekdayNumbers } from 'luxon';
declare const _sfc_main: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    year: {
        type: __PropType<number>;
        required: true;
    };
    month: {
        type: __PropType<number>;
        required: true;
    };
    day: {
        type: __PropType<number | undefined>;
        required: false;
        default: undefined;
    };
    disabled: {
        type: __PropType<number[] | undefined>;
        required: false;
        default: () => never[];
    };
    minDate: {
        type: __PropType<DateTime<boolean> | undefined>;
        required: false;
        default: undefined;
    };
    maxDate: {
        type: __PropType<DateTime<boolean> | undefined>;
        required: false;
        default: undefined;
    };
    weekStart: {
        type: __PropType<WeekdayNumbers | undefined>;
        required: false;
        default: number;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    year: {
        type: __PropType<number>;
        required: true;
    };
    month: {
        type: __PropType<number>;
        required: true;
    };
    day: {
        type: __PropType<number | undefined>;
        required: false;
        default: undefined;
    };
    disabled: {
        type: __PropType<number[] | undefined>;
        required: false;
        default: () => never[];
    };
    minDate: {
        type: __PropType<DateTime<boolean> | undefined>;
        required: false;
        default: undefined;
    };
    maxDate: {
        type: __PropType<DateTime<boolean> | undefined>;
        required: false;
        default: undefined;
    };
    weekStart: {
        type: __PropType<WeekdayNumbers | undefined>;
        required: false;
        default: number;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
}>, {
    weekStart: WeekdayNumbers | undefined;
    day: number | undefined;
    disabled: number[] | undefined;
    minDate: DateTime<boolean> | undefined;
    maxDate: DateTime<boolean> | undefined;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _sfc_main;
