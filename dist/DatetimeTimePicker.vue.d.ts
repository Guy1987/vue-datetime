import type { PropType as __PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    hour: {
        type: __PropType<number>;
        required: true;
    };
    minute: {
        type: __PropType<number>;
        required: true;
    };
    use12Hour: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    hourStep: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    minuteStep: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    minTime: {
        type: __PropType<string | undefined>;
        required: false;
        default: undefined;
    };
    maxTime: {
        type: __PropType<string | undefined>;
        required: false;
        default: undefined;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    hour: {
        type: __PropType<number>;
        required: true;
    };
    minute: {
        type: __PropType<number>;
        required: true;
    };
    use12Hour: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    hourStep: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    minuteStep: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    minTime: {
        type: __PropType<string | undefined>;
        required: false;
        default: undefined;
    };
    maxTime: {
        type: __PropType<string | undefined>;
        required: false;
        default: undefined;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
}>, {
    use12Hour: boolean | undefined;
    hourStep: number | undefined;
    minuteStep: number | undefined;
    minTime: string | undefined;
    maxTime: string | undefined;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _sfc_main;
