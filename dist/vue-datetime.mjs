var ue = Object.defineProperty, re = Object.defineProperties;
var de = Object.getOwnPropertyDescriptors;
var U = Object.getOwnPropertySymbols;
var ce = Object.prototype.hasOwnProperty, me = Object.prototype.propertyIsEnumerable;
var A = (t, a, e) => a in t ? ue(t, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[a] = e, R = (t, a) => {
  for (var e in a || (a = {}))
    ce.call(a, e) && A(t, e, a[e]);
  if (U)
    for (var e of U(a))
      me.call(a, e) && A(t, e, a[e]);
  return t;
}, W = (t, a) => re(t, de(a));
var x = (t, a, e) => (A(t, typeof a != "symbol" ? a + "" : a, e), e);
import { onMounted as Z, onUnmounted as fe, defineComponent as B, ref as g, computed as p, openBlock as f, createElementBlock as h, createElementVNode as y, toDisplayString as b, Fragment as L, renderList as P, unref as J, normalizeClass as $, onUpdated as pe, createCommentVNode as D, createBlock as F, renderSlot as z, createTextVNode as j, watch as ve, normalizeStyle as ye, mergeProps as he, createVNode as _e, TransitionGroup as ke, withCtx as we, withModifiers as be } from "vue";
import { DateTime as S, Settings as Se, Info as Q } from "luxon";
import { getWeekStartByLocale as Ce } from "weekstart";
function Te(t) {
  Z(() => {
    document.addEventListener("keydown", t);
  }), fe(() => {
    document.removeEventListener("keydown", t);
  });
}
function q(t) {
  const a = S.fromISO(t);
  return a.isValid ? a : void 0;
}
function De(t, a) {
  return !t || !a || t <= a;
}
function X(t, a, e) {
  const l = t == null ? void 0 : t.year, u = a == null ? void 0 : a.year;
  return !De(t, a) || !!l && e < l || !!u && e > u;
}
function E(t, a, e, l) {
  const u = t == null ? void 0 : t.month, r = a == null ? void 0 : a.month;
  return X(t, a, e) || !!u && t.year === e && l < t.month || !!r && a.year === e && l > a.month;
}
function Me(t, a, e, l, u) {
  const r = t == null ? void 0 : t.day, d = a == null ? void 0 : a.day;
  return E(t, a, e, l) || !!r && t.month === l && t.year === e && u < t.day || !!d && a.month === l && a.year === e && u > a.day;
}
function K(t, a, e) {
  return t !== null && e < t || a !== null && e > a;
}
function Ie(t, a, e) {
  const l = S.local(t, a, 1);
  if (!l.isValid)
    return [];
  const r = 7 * (6 - 1), d = (7 - l.weekday + e) % 7, i = (7 - d) % 7, m = l.daysInMonth, c = r - (m - d - (d ? 0 : 7)), _ = l.minus({ month: 1 }).daysInMonth, k = l.minus({ month: 1 }), C = l.plus({ month: 1 });
  return [...Array(m + i + c)].map(
    (M, v) => v + 1 <= i ? {
      year: k.year,
      month: k.month,
      day: _ + (v + 1 - i)
    } : v >= i + m ? {
      year: C.year,
      month: C.month,
      day: v + 1 - (i + m)
    } : { year: t, month: a, day: v + 1 - i }
  );
}
function $e() {
  return Ce(Se.defaultLocale) || 7;
}
function ee(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function Y(t) {
  return String(t).padStart(2, "0");
}
function ge(t) {
  const a = t - 1;
  let e = Q.weekdays("short").map((l) => ee(l));
  return e = e.concat(e.splice(0, a)), e;
}
function te() {
  return [...Q.months().map((t) => ee(t))];
}
function Le(t) {
  return [...Array(Math.ceil(24 / t))].map((a, e) => e * t);
}
function Pe(t) {
  return [...Array(Math.ceil(60 / t))].map((a, e) => e * t);
}
function Be(t) {
  return [...Array(201)].map((a, e) => t - 100 + e);
}
const Oe = { class: "calendar" }, Fe = { class: "navigation" }, He = { class: "current--month" }, xe = { class: "month" }, Ne = ["onClick"], ze = /* @__PURE__ */ B({
  __name: "DatetimeCalendar",
  props: {
    year: {},
    month: {},
    day: { default: void 0 },
    disabled: { default: () => [] },
    minDate: { default: void 0 },
    maxDate: { default: void 0 },
    weekStart: { default: 1 }
  },
  emits: ["change"],
  setup(t, { emit: a }) {
    const e = t, l = a, u = g(
      S.fromObject({ year: e.year.valueOf(), month: e.month.valueOf() }, { zone: "UTC" })
    ), r = ge(e.weekStart), d = te(), i = p(() => u.value.year), m = p(() => u.value.month), c = p(() => d[m.value - 1]), _ = p(() => Ie(i.value, m.value, e.weekStart).map((v, w) => ({
      key: w,
      number: v.day,
      selected: e.year === v.year && e.month === v.month && e.day === v.day,
      disabled: v.month !== m.value || e.disabled.includes(v.day) || Me(e.minDate, e.maxDate, i.value, m.value, v.day)
    }))), k = (v) => {
      v.disabled || l("change", { year: i.value, month: m.value, day: v.number });
    }, C = () => {
      u.value = u.value.minus({ month: 1 });
    }, M = () => {
      u.value = u.value.plus({ month: 1 });
    };
    return (v, w) => (f(), h("div", Oe, [
      y("div", Fe, [
        y("div", {
          class: "navigation--previous",
          onClick: C
        }, w[0] || (w[0] = [
          y("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 61.3 102.8"
          }, [
            y("path", {
              fill: "none",
              stroke: "#444",
              "stroke-width": "14",
              "stroke-miterlimit": "10",
              d: "M56.3 97.8L9.9 51.4 56.3 5"
            })
          ], -1)
        ])),
        y("div", He, b(c.value) + " " + b(i.value), 1),
        y("div", {
          class: "navigation--next",
          onClick: M
        }, w[1] || (w[1] = [
          y("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 61.3 102.8"
          }, [
            y("path", {
              fill: "none",
              stroke: "#444",
              "stroke-width": "14",
              "stroke-miterlimit": "10",
              d: "M56.3 97.8L9.9 51.4 56.3 5"
            })
          ], -1)
        ]))
      ]),
      y("div", xe, [
        (f(!0), h(L, null, P(J(r), (s) => (f(), h("div", {
          key: s,
          class: "month__weekday"
        }, b(s), 1))), 128)),
        (f(!0), h(L, null, P(_.value, (s) => (f(), h("div", {
          key: s.key,
          class: $(["month__day", {
            selected: s.selected,
            disabled: s.disabled
          }]),
          onClick: (I) => k(s)
        }, [
          y("span", null, [
            y("span", null, b(s.number), 1)
          ])
        ], 10, Ne))), 128))
      ])
    ]));
  }
});
const O = (t, a) => {
  const e = t.__vccOpts || t;
  for (const [l, u] of a)
    e[l] = u;
  return e;
}, Ve = /* @__PURE__ */ O(ze, [["__scopeId", "data-v-ba01ba0a"]]);
function V(t, a) {
  const e = () => {
    var l, u, r;
    if (t.value) {
      const d = (l = t.value) == null ? void 0 : l.querySelector(a);
      (r = (u = t.value).scrollTo) == null || r.call(u, { top: d ? d.offsetTop - 152 : 0, behavior: "auto" });
    }
  };
  return Z(e), pe(e), e;
}
const Ae = { class: "container" }, Ye = ["onClick"], Ze = /* @__PURE__ */ B({
  __name: "DatetimeMonthPicker",
  props: {
    year: {},
    month: {},
    minDate: {},
    maxDate: {}
  },
  emits: ["change"],
  setup(t, { emit: a }) {
    const e = t, l = p(() => te().map((i, m) => ({
      key: m,
      // eslint-disable-next-line no-param-reassign
      number: ++m,
      label: i,
      selected: m === e.month,
      disabled: !(m + 1) || E(e.minDate, e.maxDate, e.year, m)
    }))), u = g(null);
    V(u, ".selected");
    const r = a, d = (i) => {
      i.disabled || r("change", i.number, 10);
    };
    return (i, m) => (f(), h("div", Ae, [
      y("div", {
        ref_key: "monthList",
        ref: u,
        class: "list"
      }, [
        (f(!0), h(L, null, P(l.value, (c) => (f(), h("div", {
          key: c.key,
          class: $(["item", {
            selected: c.selected,
            disabled: c.disabled
          }]),
          onClick: (_) => d(c)
        }, b(c.label), 11, Ye))), 128))
      ], 512)
    ]));
  }
});
const Ge = /* @__PURE__ */ O(Ze, [["__scopeId", "data-v-a3788545"]]), Ue = ["onClick"], Re = ["onClick"], We = {
  key: 0,
  ref: "suffixList",
  class: "list list--suffix"
}, je = /* @__PURE__ */ B({
  __name: "DatetimeTimePicker",
  props: {
    hour: {},
    minute: {},
    use12Hour: { type: Boolean, default: !1 },
    hourStep: { default: 1 },
    minuteStep: { default: 1 },
    minTime: { default: void 0 },
    maxTime: { default: void 0 }
  },
  emits: ["change"],
  setup(t, { emit: a }) {
    const e = t, l = p(() => e.minTime ? parseInt(e.minTime.split(":")[0], 10) : null), u = p(() => e.maxTime ? parseInt(e.maxTime.split(":")[0], 10) : null), r = p(() => Le(e.hourStep).filter((s) => e.use12Hour ? e.hour < 12 ? s < 12 : s >= 12 : !0).map((s) => ({
      key: s,
      number: s,
      label: Y(s),
      selected: s === e.hour,
      disabled: K(l.value, u.value, s)
    }))), d = p(
      () => e.minTime && l.value === e.hour ? parseInt(e.minTime.split(":")[1], 10) : null
    ), i = p(
      () => e.maxTime && u.value === e.hour ? parseInt(e.maxTime.split(":")[1], 10) : null
    ), m = p(() => Pe(e.minuteStep).map((s) => ({
      key: s,
      number: s,
      label: Y(s),
      selected: s === e.minute,
      disabled: K(d.value, i.value, s)
    }))), c = g(null), _ = g(null);
    V(c, ".selected"), V(_, ".selected");
    const k = a, C = (s) => {
      s.disabled || k("change", { hour: s.number });
    }, M = (s) => {
      s.disabled || k("change", { minute: s.number });
    }, v = (s) => {
      s === "am" && e.hour >= 12 && k("change", { hour: e.hour - 12, suffixTouched: !0 }), s === "pm" && e.hour < 12 && k("change", { hour: e.hour + 12, suffixTouched: !0 });
    }, w = (s) => e.use12Hour ? s % 12 ? s % 12 : 12 : s;
    return (s, I) => (f(), h("div", {
      class: $(["container", { "with-suffix": s.use12Hour }])
    }, [
      y("div", {
        ref_key: "hourList",
        ref: c,
        class: "list list--hour"
      }, [
        (f(!0), h(L, null, P(r.value, (o) => (f(), h("div", {
          key: o.key,
          class: $(["item", {
            selected: o.selected,
            disabled: o.disabled
          }]),
          onClick: (T) => C(o)
        }, b(J(Y)(w(o.number))), 11, Ue))), 128))
      ], 512),
      y("div", {
        ref_key: "minuteList",
        ref: _,
        class: "list list--minute"
      }, [
        (f(!0), h(L, null, P(m.value, (o) => (f(), h("div", {
          key: o.key,
          class: $(["item", {
            selected: o.selected,
            disabled: o.disabled
          }]),
          onClick: (T) => M(o)
        }, b(o.label), 11, Re))), 128))
      ], 512),
      s.use12Hour ? (f(), h("div", We, [
        y("div", {
          class: $(["item", { selected: s.hour < 12 }]),
          onClick: I[0] || (I[0] = (o) => v("am"))
        }, " am ", 2),
        y("div", {
          class: $(["item", { selected: s.hour >= 12 }]),
          onClick: I[1] || (I[1] = (o) => v("pm"))
        }, " pm ", 2)
      ], 512)) : D("", !0)
    ], 2));
  }
});
const qe = /* @__PURE__ */ O(je, [["__scopeId", "data-v-7f6bd741"]]), Ke = { class: "container" }, Je = ["onClick"], Qe = /* @__PURE__ */ B({
  __name: "DatetimeYearPicker",
  props: {
    year: {},
    minDate: {},
    maxDate: {}
  },
  emits: ["change"],
  setup(t, { emit: a }) {
    const e = t, l = p(() => Be(e.year).map((i) => ({
      key: i,
      number: i,
      selected: i === e.year,
      disabled: !i || X(e.minDate, e.maxDate, i)
    }))), u = g(null);
    V(u, ".selected");
    const r = a, d = (i) => {
      i.disabled || r("change", i.number, 10);
    };
    return (i, m) => (f(), h("div", Ke, [
      y("div", {
        ref_key: "yearList",
        ref: u,
        class: "list"
      }, [
        (f(!0), h(L, null, P(l.value, (c) => (f(), h("div", {
          key: c.key,
          class: $(["item", {
            selected: c.selected,
            disabled: c.disabled
          }]),
          onClick: (_) => d(c)
        }, b(c.number), 11, Je))), 128))
      ], 512)
    ]));
  }
});
const Xe = /* @__PURE__ */ O(Qe, [["__scopeId", "data-v-7f78f1c1"]]), Ee = ["time"], et = ["date"], tt = ["date", "time"], ae = "end";
class N {
  constructor(a = []) {
    x(this, "flow");
    x(this, "endStatus", ae);
    x(this, "diversionNext");
    this.flow = a, this.diversionNext = null;
  }
  step(a) {
    return a >= 0 && this.flow.length > a ? this.flow[a] : this.endStatus;
  }
  first() {
    return this.step(0);
  }
  next(a) {
    if (this.diversionNext) {
      const e = this.diversionNext;
      return this.diversionNext = null, e;
    }
    return this.step(this.flow.indexOf(a) + 1);
  }
  diversion(a) {
    this.diversionNext = a;
  }
}
const at = (t) => new N(t), ot = (t) => {
  switch (t) {
    case "datetime":
      return new N(tt);
    case "date":
      return new N(et);
    case "time":
      return new N(Ee);
    default:
      throw new TypeError(`Cannot create flow type of ${t}`);
  }
}, st = { class: "popup" }, nt = { class: "header" }, it = {
  key: 0,
  class: "title"
}, lt = { class: "popup__body" }, ut = { class: "actions" }, rt = /* @__PURE__ */ B({
  __name: "DatetimePopup",
  props: {
    datetime: {},
    phrases: { default: () => ({ cancel: "Cancel", ok: "Ok" }) },
    type: { default: "date" },
    use12Hour: { type: Boolean, default: !1 },
    hourStep: { default: 1 },
    minuteStep: { default: 1 },
    minDatetime: { default: void 0 },
    maxDatetime: { default: void 0 },
    auto: { type: Boolean, default: !1 },
    weekStart: { default: 1 },
    flow: { default: void 0 },
    title: { default: "" }
  },
  emits: ["cancel", "confirm"],
  setup(t, { emit: a }) {
    var G;
    const e = t, l = a, u = e.flow ? at(e.flow) : ot(e.type), r = g((G = e.datetime) != null ? G : S.now()), d = g(u.first());
    let i = {};
    const m = () => {
      d.value = u.next(d.value), i = {}, d.value === ae && l("confirm", r.value);
    };
    Te((n) => {
      switch (n.key) {
        case "Escape":
        case "Tab":
          l("cancel");
          break;
        case "Enter":
          m();
          break;
      }
    });
    const c = p(() => r.value.year), _ = p(() => r.value.month), k = p(() => r.value.day), C = p(() => r.value.hour), M = p(() => r.value.minute), v = p(() => r.value.toLocaleString({
      month: "long",
      day: "numeric"
    })), w = p(() => e.minDatetime && e.minDatetime.year === c.value && e.minDatetime.month === _.value && e.minDatetime.day === k.value ? e.minDatetime.toFormat("HH:mm") : void 0), s = p(() => e.maxDatetime && e.maxDatetime.year === c.value && e.maxDatetime.month === _.value && e.maxDatetime.day === k.value ? e.maxDatetime.toFormat("HH:mm") : void 0), I = () => {
      d.value = "year", u.diversion("date");
    }, o = () => {
      d.value = "month", u.diversion("date");
    }, T = (n) => {
      r.value = r.value.set({ year: n }), e.auto && m();
    }, se = (n) => {
      r.value = r.value.set({ month: n }), e.auto && m();
    }, ne = (n) => {
      r.value = r.value.set({
        year: n == null ? void 0 : n.year,
        month: n == null ? void 0 : n.month,
        day: n == null ? void 0 : n.day
      }), e.auto && m();
    }, ie = (n) => {
      n.suffixTouched && (i.suffix = !0), Number.isInteger(n.hour) && (r.value = r.value.set({ hour: n == null ? void 0 : n.hour }), i.hour = !0), Number.isInteger(n.minute) && (r.value = r.value.set({ minute: n == null ? void 0 : n.minute }), i.minutes = !0);
    };
    return (n, H) => (f(), h("div", st, [
      y("div", nt, [
        n.title ? (f(), h("div", it, b(n.title), 1)) : D("", !0),
        n.type !== "time" ? (f(), h("div", {
          key: 1,
          class: "year",
          onClick: I
        }, b(c.value), 1)) : D("", !0),
        n.type !== "time" ? (f(), h("div", {
          key: 2,
          class: "month",
          onClick: o
        }, b(v.value), 1)) : D("", !0)
      ]),
      y("div", lt, [
        d.value === "year" ? (f(), F(Xe, {
          key: 0,
          "min-date": n.minDatetime,
          "max-date": n.maxDatetime,
          year: c.value,
          onChange: T
        }, null, 8, ["min-date", "max-date", "year"])) : D("", !0),
        d.value === "month" ? (f(), F(Ge, {
          key: 1,
          "min-date": n.minDatetime,
          "max-date": n.maxDatetime,
          year: c.value,
          month: _.value,
          onChange: se
        }, null, 8, ["min-date", "max-date", "year", "month"])) : D("", !0),
        d.value === "date" ? (f(), F(Ve, {
          key: 2,
          year: c.value,
          month: _.value,
          day: k.value,
          "min-date": n.minDatetime,
          "max-date": n.maxDatetime,
          "week-start": n.weekStart,
          onChange: ne
        }, null, 8, ["year", "month", "day", "min-date", "max-date", "week-start"])) : D("", !0),
        d.value === "time" ? (f(), F(qe, {
          key: 3,
          hour: C.value,
          minute: M.value,
          "use12-hour": n.use12Hour,
          "hour-step": n.hourStep,
          "minute-step": n.minuteStep,
          "min-time": w.value,
          "max-time": s.value,
          onChange: ie
        }, null, 8, ["hour", "minute", "use12-hour", "hour-step", "minute-step", "min-time", "max-time"])) : D("", !0)
      ]),
      y("div", ut, [
        y("div", {
          class: "actions__button cancel",
          onClick: H[0] || (H[0] = (le) => l("cancel"))
        }, [
          z(n.$slots, "button-cancel__internal", { step: d.value }, () => [
            j(b(n.phrases.cancel), 1)
          ], !0)
        ]),
        y("div", {
          class: "actions__button confirm",
          onClick: H[1] || (H[1] = (le) => m())
        }, [
          z(n.$slots, "button-confirm__internal", { step: d.value }, () => [
            j(b(n.phrases.ok), 1)
          ], !0)
        ])
      ])
    ]));
  }
});
const oe = /* @__PURE__ */ O(rt, [["__scopeId", "data-v-faccd17c"]]), dt = ["id", "value"], ct = { inheritAttrs: !1 }, mt = /* @__PURE__ */ B(W(R({}, ct), {
  __name: "DateTime",
  props: {
    modelValue: { default: "" },
    valueZone: { default: "UTC" },
    inputId: { default: void 0 },
    inputClass: { default: "" },
    inputStyle: { default: "" },
    hiddenName: { default: "" },
    zone: { default: "local" },
    format: { default: void 0 },
    type: { default: "date" },
    color: { default: "#3f51b5" },
    phrases: { default: () => ({ cancel: "Cancel", ok: "Ok" }) },
    use12Hour: { type: Boolean, default: !1 },
    hourStep: { default: 1 },
    minuteStep: { default: 1 },
    minDatetime: { default: void 0 },
    maxDatetime: { default: void 0 },
    auto: { type: Boolean, default: !1 },
    weekStart: { default: $e },
    flow: { default: void 0 },
    title: { default: "" },
    hideBackdrop: { type: Boolean, default: !1 },
    backdropClick: { type: Boolean, default: !0 },
    fixedDate: { type: Boolean, default: !1 },
    fixedTime: { type: Boolean, default: !1 }
  },
  emits: ["input", "close", "update:modelValue"],
  setup(t, { emit: a }) {
    const e = t, l = p(() => ({ "--primary-color": e.color })), u = a, r = p(() => {
      if (e.type === "datetime") {
        if (e.fixedDate)
          return "time";
        if (e.fixedTime)
          return "date";
      }
      return e.type;
    }), d = g(!1), i = p({
      get() {
        return q(e.modelValue);
      },
      set(o) {
        o && u("update:modelValue", o.toISO());
      }
    }), m = p(() => {
      let o = e.format;
      if (!o)
        switch (e.type) {
          case "date":
            o = S.DATE_MED;
            break;
          case "time":
            o = S.TIME_24_SIMPLE;
            break;
          case "datetime":
            o = S.DATETIME_MED;
            break;
          default:
            return "";
        }
      return typeof o == "string" ? i.value ? S.fromISO(e.modelValue).setZone(e.zone).toFormat(o) : "" : i.value ? i.value.setZone(e.zone).toLocaleString(o) : "";
    }), c = p(() => e.minDatetime ? S.fromISO(e.minDatetime).setZone(e.zone) : void 0), _ = p(() => e.maxDatetime ? S.fromISO(e.maxDatetime).setZone(e.zone) : void 0), k = () => {
      let o = S.utc().setZone(e.zone).set({ second: 0, millisecond: 0 });
      if (c.value && o < c.value && (o = c.value.set({ second: 0, millisecond: 0 })), _.value && o > _.value && (o = _.value.set({ second: 0, millisecond: 0 })), e.minuteStep === 1)
        return o;
      const T = Math.round(o.minute / e.minuteStep) * e.minuteStep;
      return T === 60 ? o.plus({ hours: 1 }).set({ minute: 0 }) : o.set({ minute: T });
    }, C = p(() => i.value ? i.value.setZone(e.zone) : k()), M = () => {
      var T;
      let o = i.value;
      o && e.type === "date" && (o = o.startOf("day")), u("input", (T = o == null ? void 0 : o.toISO()) != null ? T : "");
    };
    Z(() => {
      M();
    });
    const v = (o) => {
      o.target.blur(), d.value = !0;
    }, w = () => {
      d.value = !1, u("close");
    }, s = (o) => {
      i.value = o.toUTC(), M(), w();
    }, I = () => {
      e.backdropClick && w();
    };
    return ve(() => e.modelValue, (o) => {
      i.value = q(o);
    }), (o, T) => (f(), h("div", {
      class: $(["vdatetime", o.$attrs.class]),
      style: ye(l.value)
    }, [
      z(o.$slots, "before", {}, void 0, !0),
      y("input", he({
        id: o.inputId,
        class: ["vdatetime-input", o.inputClass],
        style: o.inputStyle,
        type: "text",
        value: m.value
      }, o.$attrs, {
        onClick: v,
        onFocus: v
      }), null, 16, dt),
      z(o.$slots, "after", {}, void 0, !0),
      _e(ke, {
        name: "vdatetime-fade",
        tag: "div"
      }, {
        default: we(() => [
          d.value && !o.hideBackdrop ? (f(), h("div", {
            key: "overlay",
            class: "vdatetime-overlay",
            onClick: be(I, ["self"])
          })) : D("", !0),
          d.value ? (f(), F(oe, {
            key: "popup",
            type: r.value,
            datetime: C.value,
            phrases: o.phrases,
            "use12-hour": o.use12Hour,
            "hour-step": o.hourStep,
            "minute-step": o.minuteStep,
            "min-datetime": c.value,
            "max-datetime": _.value,
            auto: o.auto,
            "week-start": o.weekStart,
            flow: o.flow,
            title: o.title,
            onConfirm: s,
            onCancel: w
          }, null, 8, ["type", "datetime", "phrases", "use12-hour", "hour-step", "minute-step", "min-datetime", "max-datetime", "auto", "week-start", "flow", "title"])) : D("", !0)
        ]),
        _: 1
      })
    ], 6));
  }
}));
const ft = /* @__PURE__ */ O(mt, [["__scopeId", "data-v-f13c808b"]]);
function pt() {
  return { install: (a) => {
    a.component("DateTime", ft), a.component("DateTimePopup", oe);
  } };
}
const vt = "__VERSION__";
pt.version = vt;
export {
  ft as Datetime,
  oe as DatetimePopup,
  pt as default,
  vt as version
};
