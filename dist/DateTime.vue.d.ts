import type { PropType as __PropType } from 'vue';
import { WeekdayNumbers } from 'luxon';
import { FlowStep, FlowType } from './flow/namespace';
import type { Actions } from './namespace';
import { calculateWeekStart } from './utils/datetime';
declare const _sfc_main: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    valueZone: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    inputId: {
        type: __PropType<string | undefined>;
        required: false;
        default: undefined;
    };
    inputClass: {
        type: __PropType<string | object | any[] | undefined>;
        required: false;
        default: string;
    };
    inputStyle: {
        type: __PropType<string | object | any[] | undefined>;
        required: false;
        default: string;
    };
    hiddenName: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    zone: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    format: {
        type: __PropType<string | Object | undefined>;
        required: false;
        default: undefined;
    };
    type: {
        type: __PropType<FlowType | undefined>;
        required: false;
        default: string;
    };
    color: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    phrases: {
        type: __PropType<Actions | undefined>;
        required: false;
        default: () => {
            cancel: string;
            ok: string;
        };
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
    minDatetime: {
        type: __PropType<string | undefined>;
        required: false;
        default: undefined;
    };
    maxDatetime: {
        type: __PropType<string | undefined>;
        required: false;
        default: undefined;
    };
    auto: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    weekStart: {
        type: __PropType<WeekdayNumbers | undefined>;
        required: false;
        default: typeof calculateWeekStart;
    };
    flow: {
        type: __PropType<FlowStep[] | undefined>;
        required: false;
        default: undefined;
    };
    title: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    hideBackdrop: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    backdropClick: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    fixedDate: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    fixedTime: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "close" | "update:modelValue")[], "input" | "close" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    valueZone: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    inputId: {
        type: __PropType<string | undefined>;
        required: false;
        default: undefined;
    };
    inputClass: {
        type: __PropType<string | object | any[] | undefined>;
        required: false;
        default: string;
    };
    inputStyle: {
        type: __PropType<string | object | any[] | undefined>;
        required: false;
        default: string;
    };
    hiddenName: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    zone: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    format: {
        type: __PropType<string | Object | undefined>;
        required: false;
        default: undefined;
    };
    type: {
        type: __PropType<FlowType | undefined>;
        required: false;
        default: string;
    };
    color: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    phrases: {
        type: __PropType<Actions | undefined>;
        required: false;
        default: () => {
            cancel: string;
            ok: string;
        };
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
    minDatetime: {
        type: __PropType<string | undefined>;
        required: false;
        default: undefined;
    };
    maxDatetime: {
        type: __PropType<string | undefined>;
        required: false;
        default: undefined;
    };
    auto: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    weekStart: {
        type: __PropType<WeekdayNumbers | undefined>;
        required: false;
        default: typeof calculateWeekStart;
    };
    flow: {
        type: __PropType<FlowStep[] | undefined>;
        required: false;
        default: undefined;
    };
    title: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    hideBackdrop: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    backdropClick: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    fixedDate: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    fixedTime: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}>> & Readonly<{
    onInput?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    modelValue: string | undefined;
    valueZone: string | undefined;
    inputId: string | undefined;
    inputClass: string | object | any[] | undefined;
    inputStyle: string | object | any[] | undefined;
    hiddenName: string | undefined;
    zone: string | undefined;
    format: string | Object | undefined;
    type: FlowType | undefined;
    color: string | undefined;
    phrases: Actions | undefined;
    use12Hour: boolean | undefined;
    hourStep: number | undefined;
    minuteStep: number | undefined;
    minDatetime: string | undefined;
    maxDatetime: string | undefined;
    auto: boolean | undefined;
    weekStart: WeekdayNumbers | undefined;
    flow: FlowStep[] | undefined;
    title: string | undefined;
    hideBackdrop: boolean | undefined;
    backdropClick: boolean | undefined;
    fixedDate: boolean | undefined;
    fixedTime: boolean | undefined;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _sfc_main;
