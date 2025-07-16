import type { PropType as __PropType } from 'vue';
import { DateTime } from 'luxon';
declare const _sfc_main: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    year: {
        type: __PropType<number>;
        required: true;
    };
    month: {
        type: __PropType<number>;
        required: true;
    };
    minDate: {
        type: __PropType<DateTime<boolean> | undefined>;
        required: false;
    };
    maxDate: {
        type: __PropType<DateTime<boolean> | undefined>;
        required: false;
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
    minDate: {
        type: __PropType<DateTime<boolean> | undefined>;
        required: false;
    };
    maxDate: {
        type: __PropType<DateTime<boolean> | undefined>;
        required: false;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _sfc_main;
