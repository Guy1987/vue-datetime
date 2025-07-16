import type { PropType as __PropType } from 'vue';
import { DateTime, WeekdayNumbers } from 'luxon';
import { FlowStep, FlowType } from './flow/namespace';
import type { Actions } from './namespace';
declare const _sfc_main: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    datetime: {
        type: __PropType<DateTime<boolean>>;
        required: true;
    };
    phrases: {
        type: __PropType<Actions | undefined>;
        required: false;
        default: () => {
            cancel: string;
            ok: string;
        };
    };
    type: {
        type: __PropType<FlowType | undefined>;
        required: false;
        default: string;
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
        type: __PropType<DateTime<boolean> | undefined>;
        required: false;
        default: undefined;
    };
    maxDatetime: {
        type: __PropType<DateTime<boolean> | undefined>;
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
        default: number;
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
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cancel" | "confirm")[], "cancel" | "confirm", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    datetime: {
        type: __PropType<DateTime<boolean>>;
        required: true;
    };
    phrases: {
        type: __PropType<Actions | undefined>;
        required: false;
        default: () => {
            cancel: string;
            ok: string;
        };
    };
    type: {
        type: __PropType<FlowType | undefined>;
        required: false;
        default: string;
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
        type: __PropType<DateTime<boolean> | undefined>;
        required: false;
        default: undefined;
    };
    maxDatetime: {
        type: __PropType<DateTime<boolean> | undefined>;
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
        default: number;
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
}>> & Readonly<{
    onCancel?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
}>, {
    type: FlowType | undefined;
    phrases: Actions | undefined;
    use12Hour: boolean | undefined;
    hourStep: number | undefined;
    minuteStep: number | undefined;
    minDatetime: DateTime<boolean> | undefined;
    maxDatetime: DateTime<boolean> | undefined;
    auto: boolean | undefined;
    weekStart: WeekdayNumbers | undefined;
    flow: FlowStep[] | undefined;
    title: string | undefined;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _sfc_main;
