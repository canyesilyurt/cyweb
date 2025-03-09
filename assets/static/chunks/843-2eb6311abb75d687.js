"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [843],
    {
        701: function (e, t, r) {
            let n;
            r.d(t, {
                TY: function () {
                    return nC;
                },
            });
            var o,
                a,
                l,
                i,
                s = r(2729),
                c = r(5465),
                d = r.t(c, 2),
                u = r(575),
                f = r(3360);
            function g(e) {
                return null !== e && "object" == typeof e && e.constructor === Object;
            }
            function p(e) {
                if (!g(e)) return e;
                let t = {};
                for (let r in e) t[r] = p(e[r]);
                return t;
            }
            function b(e, t) {
                if (g(t) && 0 === Object.keys(t).length) return p({ ...e, ...t });
                let r = { ...e, ...t };
                if (g(t) && g(e)) for (let n in t) g(t[n]) && n in e && g(e[n]) ? (r[n] = b(e[n], t[n])) : (r[n] = g(t[n]) ? p(t[n]) : t[n]);
                return r;
            }
            let m = {
                    accordion: {
                        root: { base: "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700", flush: { off: "rounded-lg border", on: "border-b" } },
                        content: { base: "py-5 px-5 last:rounded-b-lg dark:bg-gray-900 first:rounded-t-lg" },
                        title: {
                            arrow: { base: "h-6 w-6 shrink-0", open: { off: "", on: "rotate-180" } },
                            base: "flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400",
                            flush: { off: "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800", on: "bg-transparent dark:bg-transparent" },
                            heading: "",
                            open: { off: "", on: "text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white" },
                        },
                    },
                    alert: {
                        base: "flex flex-col gap-2 p-4 text-sm",
                        borderAccent: "border-t-4",
                        closeButton: {
                            base: "-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2",
                            icon: "w-5 h-5",
                            color: {
                                info: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
                                gray: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white",
                                failure: "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
                                success: "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
                                warning: "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
                                red: "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
                                green: "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
                                yellow: "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
                                blue: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
                                cyan: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
                                pink: "bg-pink-100 text-pink-500 hover:bg-pink-200 focus:ring-pink-400 dark:bg-pink-200 dark:text-pink-600 dark:hover:bg-pink-300",
                                lime: "bg-lime-100 text-lime-500 hover:bg-lime-200 focus:ring-lime-400 dark:bg-lime-200 dark:text-lime-600 dark:hover:bg-lime-300",
                                dark: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-200 dark:text-gray-600 dark:hover:bg-gray-300",
                                indigo: "bg-indigo-100 text-indigo-500 hover:bg-indigo-200 focus:ring-indigo-400 dark:bg-indigo-200 dark:text-indigo-600 dark:hover:bg-indigo-300",
                                purple: "bg-purple-100 text-purple-500 hover:bg-purple-200 focus:ring-purple-400 dark:bg-purple-200 dark:text-purple-600 dark:hover:bg-purple-300",
                                teal: "bg-teal-100 text-teal-500 hover:bg-teal-200 focus:ring-teal-400 dark:bg-teal-200 dark:text-teal-600 dark:hover:bg-teal-300",
                                light: "bg-gray-50 text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white",
                            },
                        },
                        color: {
                            info: "text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800",
                            gray: "text-gray-700 bg-gray-100 border-gray-500 dark:bg-gray-700 dark:text-gray-300",
                            failure: "text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800",
                            success: "text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800",
                            warning: "text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800",
                            red: "text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800",
                            green: "text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800",
                            yellow: "text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800",
                            blue: "text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800",
                            cyan: "text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800",
                            pink: "text-pink-700 bg-pink-100 border-pink-500 dark:bg-pink-200 dark:text-pink-800",
                            lime: "text-lime-700 bg-lime-100 border-lime-500 dark:bg-lime-200 dark:text-lime-800",
                            dark: "text-gray-200 bg-gray-800 border-gray-600 dark:bg-gray-900 dark:text-gray-300",
                            indigo: "text-indigo-700 bg-indigo-100 border-indigo-500 dark:bg-indigo-200 dark:text-indigo-800",
                            purple: "text-purple-700 bg-purple-100 border-purple-500 dark:bg-purple-200 dark:text-purple-800",
                            teal: "text-teal-700 bg-teal-100 border-teal-500 dark:bg-teal-200 dark:text-teal-800",
                            light: "text-gray-600 bg-gray-50 border-gray-400 dark:bg-gray-500 dark:text-gray-200",
                        },
                        icon: "mr-3 inline h-5 w-5 flex-shrink-0",
                        rounded: "rounded-lg",
                        wrapper: "flex items-center",
                    },
                    avatar: {
                        root: {
                            base: "flex justify-center items-center space-x-4 rounded",
                            bordered: "p-1 ring-2",
                            rounded: "rounded-full",
                            color: {
                                dark: "ring-gray-800 dark:ring-gray-800",
                                failure: "ring-red-500 dark:ring-red-700",
                                gray: "ring-gray-500 dark:ring-gray-400",
                                info: "ring-cyan-400 dark:ring-cyan-800",
                                light: "ring-gray-300 dark:ring-gray-500",
                                purple: "ring-purple-500 dark:ring-purple-600",
                                success: "ring-green-500 dark:ring-green-500",
                                warning: "ring-yellow-300 dark:ring-yellow-500",
                                pink: "ring-pink-500 dark:ring-pink-500",
                            },
                            img: { base: "rounded", off: "relative overflow-hidden bg-gray-100 dark:bg-gray-600", on: "", placeholder: "absolute w-auto h-auto text-gray-400 -bottom-1" },
                            size: { xs: "w-6 h-6", sm: "w-8 h-8", md: "w-10 h-10", lg: "w-20 h-20", xl: "w-36 h-36" },
                            stacked: "ring-2 ring-gray-300 dark:ring-gray-500",
                            statusPosition: {
                                "bottom-left": "-bottom-1 -left-1",
                                "bottom-center": "-bottom-1 center",
                                "bottom-right": "-bottom-1 -right-1",
                                "top-left": "-top-1 -left-1",
                                "top-center": "-top-1 center",
                                "top-right": "-top-1 -right-1",
                                "center-right": "center -right-1",
                                center: "center center",
                                "center-left": "center -left-1",
                            },
                            status: { away: "bg-yellow-400", base: "absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800", busy: "bg-red-400", offline: "bg-gray-400", online: "bg-green-400" },
                            initials: { text: "font-medium text-gray-600 dark:text-gray-300", base: "inline-flex overflow-hidden relative justify-center items-center bg-gray-100 dark:bg-gray-600" },
                        },
                        group: { base: "flex -space-x-4" },
                        groupCounter: { base: "relative flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full ring-2 ring-gray-300 hover:bg-gray-600 dark:ring-gray-500" },
                    },
                    badge: {
                        root: {
                            base: "flex h-fit items-center gap-1 font-semibold",
                            color: {
                                info: "bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300",
                                gray: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600",
                                failure: "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300",
                                success: "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300",
                                warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300",
                                indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-300",
                                purple: "bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-300",
                                pink: "bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900 group-hover:bg-pink-200 dark:group-hover:bg-pink-300",
                                blue: "bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-900 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300",
                                cyan: "bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-900 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300",
                                dark: "bg-gray-600 text-gray-100 dark:bg-gray-900 dark:text-gray-200 group-hover:bg-gray-500 dark:group-hover:bg-gray-700",
                                light: "bg-gray-200 text-gray-800 dark:bg-gray-400 dark:text-gray-900 group-hover:bg-gray-300 dark:group-hover:bg-gray-500",
                                green: "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300",
                                lime: "bg-lime-100 text-lime-800 dark:bg-lime-200 dark:text-lime-900 group-hover:bg-lime-200 dark:group-hover:bg-lime-300",
                                red: "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300",
                                teal: "bg-teal-100 text-teal-800 dark:bg-teal-200 dark:text-teal-900 group-hover:bg-teal-200 dark:group-hover:bg-teal-300",
                                yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300",
                            },
                            href: "group",
                            size: { xs: "p-1 text-xs", sm: "p-1.5 text-sm" },
                        },
                        icon: { off: "rounded px-2 py-0.5", on: "rounded-full p-1.5", size: { xs: "w-3 h-3", sm: "w-3.5 h-3.5" } },
                    },
                    blockquote: { root: { base: "text-xl italic font-semibold text-gray-900 dark:text-white" } },
                    breadcrumb: {
                        root: { base: "", list: "flex items-center" },
                        item: {
                            base: "group flex items-center",
                            chevron: "mx-1 h-4 w-4 text-gray-400 group-first:hidden md:mx-2",
                            href: { off: "flex items-center text-sm font-medium text-gray-500 dark:text-gray-400", on: "flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" },
                            icon: "mr-2 h-4 w-4",
                        },
                    },
                    button: {
                        base: "group flex items-stretch items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none",
                        fullSized: "w-full",
                        color: {
                            dark: "text-white bg-gray-800 border border-transparent enabled:hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:enabled:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700",
                            failure: "text-white bg-red-700 border border-transparent enabled:hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:enabled:hover:bg-red-700 dark:focus:ring-red-900",
                            gray:
                                "text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 :ring-cyan-700 focus:text-cyan-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700 focus:ring-2",
                            info: "text-white bg-cyan-700 border border-transparent enabled:hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800",
                            light:
                                "text-gray-900 bg-white border border-gray-300 enabled:hover:bg-gray-100 focus:ring-4 focus:ring-cyan-300 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:enabled:hover:bg-gray-700 dark:enabled:hover:border-gray-700 dark:focus:ring-gray-700",
                            purple: "text-white bg-purple-700 border border-transparent enabled:hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:focus:ring-purple-900",
                            success: "text-white bg-green-700 border border-transparent enabled:hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:enabled:hover:bg-green-700 dark:focus:ring-green-800",
                            warning: "text-white bg-yellow-400 border border-transparent enabled:hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900",
                            blue: "text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                            cyan:
                                "text-cyan-900 bg-white border border-cyan-300 enabled:hover:bg-cyan-100 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:text-white dark:border-cyan-600 dark:enabled:hover:bg-cyan-700 dark:enabled:hover:border-cyan-700 dark:focus:ring-cyan-700",
                            green:
                                "text-green-900 bg-white border border-green-300 enabled:hover:bg-green-100 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:text-white dark:border-green-600 dark:enabled:hover:bg-green-700 dark:enabled:hover:border-green-700 dark:focus:ring-green-700",
                            indigo:
                                "text-indigo-900 bg-white border border-indigo-300 enabled:hover:bg-indigo-100 focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:text-white dark:border-indigo-600 dark:enabled:hover:bg-indigo-700 dark:enabled:hover:border-indigo-700 dark:focus:ring-indigo-700",
                            lime:
                                "text-lime-900 bg-white border border-lime-300 enabled:hover:bg-lime-100 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:text-white dark:border-lime-600 dark:enabled:hover:bg-lime-700 dark:enabled:hover:border-lime-700 dark:focus:ring-lime-700",
                            pink:
                                "text-pink-900 bg-white border border-pink-300 enabled:hover:bg-pink-100 focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:text-white dark:border-pink-600 dark:enabled:hover:bg-pink-700 dark:enabled:hover:border-pink-700 dark:focus:ring-pink-700",
                            red:
                                "text-red-900 bg-white border border-red-300 enabled:hover:bg-red-100 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:text-white dark:border-red-600 dark:enabled:hover:bg-red-700 dark:enabled:hover:border-red-700 dark:focus:ring-red-700",
                            teal:
                                "text-teal-900 bg-white border border-teal-300 enabled:hover:bg-teal-100 focus:ring-4 focus:ring-teal-300 dark:bg-teal-600 dark:text-white dark:border-teal-600 dark:enabled:hover:bg-teal-700 dark:enabled:hover:border-teal-700 dark:focus:ring-teal-700",
                            yellow:
                                "text-yellow-900 bg-white border border-yellow-300 enabled:hover:bg-yellow-100 focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-600 dark:text-white dark:border-yellow-600 dark:enabled:hover:bg-yellow-700 dark:enabled:hover:border-yellow-700 dark:focus:ring-yellow-700",
                        },
                        disabled: "cursor-not-allowed opacity-50",
                        isProcessing: "cursor-wait",
                        spinnerSlot: "absolute h-full top-0 flex items-center animate-fade-in",
                        spinnerLeftPosition: { xs: "left-2", sm: "left-3", md: "left-4", lg: "left-5", xl: "left-6" },
                        gradient: {
                            cyan: "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
                            failure: "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800",
                            info: "text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 ",
                            lime: "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800",
                            pink: "text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800",
                            purple: "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800",
                            success: "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800",
                            teal: "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800",
                        },
                        gradientDuoTone: {
                            cyanToBlue: "text-white bg-gradient-to-r from-cyan-500 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
                            greenToBlue: "text-white bg-gradient-to-br from-green-400 to-cyan-600 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800",
                            pinkToOrange: "text-white bg-gradient-to-br from-pink-500 to-orange-400 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800",
                            purpleToBlue: "text-white bg-gradient-to-br from-purple-600 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
                            purpleToPink: "text-white bg-gradient-to-r from-purple-500 to-pink-500 enabled:hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800",
                            redToYellow: "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400",
                            tealToLime:
                                "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 enabled:hover:bg-gradient-to-l enabled:hover:from-teal-200 enabled:hover:to-lime-200 enabled:hover:text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700",
                        },
                        inner: {
                            base: "flex items-stretch items-center transition-all duration-200",
                            position: { none: "", start: "rounded-r-none", middle: "rounded-none", end: "rounded-l-none" },
                            outline: "border border-transparent",
                            isProcessingPadding: { xs: "pl-8", sm: "pl-10", md: "pl-12", lg: "pl-16", xl: "pl-20" },
                        },
                        label: "ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-200 text-xs font-semibold text-cyan-800",
                        outline: {
                            color: { gray: "border border-gray-900 dark:border-white", default: "border-0", light: "" },
                            off: "",
                            on: "flex justify-center bg-white text-gray-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white w-full",
                            pill: { off: "rounded-md", on: "rounded-full" },
                        },
                        pill: { off: "rounded-lg", on: "rounded-full" },
                        size: { xs: "text-xs px-2 py-1", sm: "text-sm px-3 py-1.5", md: "text-sm px-4 py-2", lg: "text-base px-5 py-2.5", xl: "text-base px-6 py-3" },
                    },
                    buttonGroup: { base: "inline-flex", position: { none: "focus:ring-2", start: "rounded-r-none", middle: "rounded-none border-l-0 pl-0", end: "rounded-l-none border-l-0 pl-0" } },
                    card: {
                        root: {
                            base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
                            children: "flex h-full flex-col justify-center gap-4 p-6",
                            horizontal: { off: "flex-col", on: "flex-col md:max-w-xl md:flex-row" },
                            href: "hover:bg-gray-100 dark:hover:bg-gray-700",
                        },
                        img: { base: "", horizontal: { off: "rounded-t-lg", on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" } },
                    },
                    carousel: {
                        root: {
                            base: "relative h-full w-full",
                            leftControl: "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
                            rightControl: "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none",
                        },
                        indicators: {
                            active: { off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800", on: "bg-white dark:bg-gray-800" },
                            base: "h-3 w-3 rounded-full",
                            wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
                        },
                        item: {
                            base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
                            wrapper: { off: "w-full flex-shrink-0 transform cursor-default snap-center", on: "w-full flex-shrink-0 transform cursor-grab snap-center" },
                        },
                        control: {
                            base:
                                "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
                            icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
                        },
                        scrollContainer: { base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg", snap: "snap-x" },
                    },
                    checkbox: {
                        root: {
                            base: "h-4 w-4 rounded focus:ring-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 bg-gray-100",
                            color: {
                                default: "focus:ring-cyan-600 dark:ring-offset-gray-800 dark:focus:ring-cyan-600 text-cyan-600",
                                dark: "focus:ring-gray-800 dark:ring-offset-gray-800 dark:focus:ring-gray-800 text-gray-800",
                                failure: "focus:ring-red-900 dark:ring-offset-red-900 dark:focus:ring-red-900 text-red-900",
                                gray: "focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900 text-gray-900",
                                info: "focus:ring-cyan-800 dark:ring-offset-gray-800 dark:focus:ring-cyan-800 text-cyan-800",
                                light: "focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900 text-gray-900",
                                purple: "focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600",
                                success: "focus:ring-green-800 dark:ring-offset-green-800 dark:focus:ring-green-800 text-green-800",
                                warning: "focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400 text-yellow-400",
                                blue: "focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-blue-700 text-blue-700",
                                cyan: "focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600 text-cyan-600",
                                green: "focus:ring-green-600 dark:ring-offset-green-600 dark:focus:ring-green-600 text-green-600",
                                indigo: "focus:ring-indigo-700 dark:ring-offset-indigo-700 dark:focus:ring-indigo-700 text-indigo-700",
                                lime: "focus:ring-lime-700 dark:ring-offset-lime-700 dark:focus:ring-lime-700 text-lime-700",
                                pink: "focus:ring-pink-600 dark:ring-offset-pink-600 dark:focus:ring-pink-600 text-pink-600",
                                red: "focus:ring-red-600 dark:ring-offset-red-600 dark:focus:ring-red-600 text-red-600",
                                teal: "focus:ring-teal-600 dark:ring-offset-teal-600 dark:focus:ring-teal-600 text-teal-600",
                                yellow: "focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400 text-yellow-400",
                            },
                        },
                    },
                    datepicker: {
                        root: { base: "relative" },
                        popup: {
                            root: { base: "absolute top-10 z-50 block pt-2", inline: "relative top-0 z-auto", inner: "inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700" },
                            header: {
                                base: "",
                                title: "px-2 py-3 text-center font-semibold text-gray-900 dark:text-white",
                                selectors: {
                                    base: "flex justify-between mb-2",
                                    button: {
                                        base:
                                            "text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch",
                                        prev: "",
                                        next: "",
                                        view: "",
                                    },
                                },
                            },
                            view: { base: "p-1" },
                            footer: {
                                base: "flex mt-2 space-x-2",
                                button: {
                                    base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-cyan-300",
                                    today: "bg-cyan-700 text-white hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-cyan-700",
                                    clear: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
                                },
                            },
                        },
                        views: {
                            days: {
                                header: { base: "grid grid-cols-7 mb-1", title: "dow h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400" },
                                items: {
                                    base: "grid w-64 grid-cols-7",
                                    item: {
                                        base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 ",
                                        selected: "bg-cyan-700 text-white hover:bg-cyan-600",
                                        disabled: "text-gray-500",
                                    },
                                },
                            },
                            months: {
                                items: {
                                    base: "grid w-64 grid-cols-4",
                                    item: {
                                        base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
                                        selected: "bg-cyan-700 text-white hover:bg-cyan-600",
                                        disabled: "text-gray-500",
                                    },
                                },
                            },
                            years: {
                                items: {
                                    base: "grid w-64 grid-cols-4",
                                    item: {
                                        base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 text-gray-900",
                                        selected: "bg-cyan-700 text-white hover:bg-cyan-600",
                                        disabled: "text-gray-500",
                                    },
                                },
                            },
                            decades: {
                                items: {
                                    base: "grid w-64 grid-cols-4",
                                    item: {
                                        base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9  hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 text-gray-900",
                                        selected: "bg-cyan-700 text-white hover:bg-cyan-600",
                                        disabled: "text-gray-500",
                                    },
                                },
                            },
                        },
                    },
                    darkThemeToggle: {
                        root: { base: "rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700", icon: "h-5 w-5" },
                    },
                    dropdown: {
                        arrowIcon: "ml-2 h-4 w-4",
                        content: "py-1 focus:outline-none",
                        floating: {
                            animation: "transition-opacity",
                            arrow: { base: "absolute z-10 h-2 w-2 rotate-45", style: { dark: "bg-gray-900 dark:bg-gray-700", light: "bg-white", auto: "bg-white dark:bg-gray-700" }, placement: "-4px" },
                            base: "z-10 w-fit rounded divide-y divide-gray-100 shadow focus:outline-none",
                            content: "py-1 text-sm text-gray-700 dark:text-gray-200",
                            divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
                            header: "block py-2 px-4 text-sm text-gray-700 dark:text-gray-200",
                            hidden: "invisible opacity-0",
                            item: {
                                container: "",
                                base:
                                    "flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer w-full hover:bg-gray-100 focus:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
                                icon: "mr-2 h-4 w-4",
                            },
                            style: {
                                dark: "bg-gray-900 text-white dark:bg-gray-700",
                                light: "border border-gray-200 bg-white text-gray-900",
                                auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white",
                            },
                            target: "w-fit",
                        },
                        inlineWrapper: "flex items-center",
                    },
                    fileInput: {
                        root: { base: "flex" },
                        field: {
                            base: "relative w-full",
                            input: {
                                base: "rounded-lg overflow-hidden block w-full border disabled:cursor-not-allowed disabled:opacity-50",
                                sizes: { sm: "sm:text-xs", md: "text-sm", lg: "sm:text-md" },
                                colors: {
                                    gray:
                                        "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                                    info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                                    failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
                                    warning:
                                        "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
                                    success:
                                        "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
                                },
                            },
                        },
                    },
                    floatingLabel: {
                        input: {
                            default: {
                                filled: {
                                    sm:
                                        "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500",
                                    md:
                                        "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500",
                                },
                                outlined: {
                                    sm:
                                        "border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",
                                    md:
                                        "border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",
                                },
                                standard: {
                                    sm:
                                        "block py-2.5 px-0 w-full text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                                    md:
                                        "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                                },
                            },
                            success: {
                                filled: {
                                    sm:
                                        "block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-xs text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer",
                                    md:
                                        "block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer",
                                },
                                outlined: {
                                    sm:
                                        "block px-2.5 pb-2.5 pt-4 w-full text-xs text-gray-900 bg-transparent rounded-lg border-1 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer",
                                    md:
                                        "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer",
                                },
                                standard: {
                                    sm:
                                        "block py-2.5 px-0 w-full text-xs text-gray-900 bg-transparent border-0 border-b-2 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer",
                                    md:
                                        "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer",
                                },
                            },
                            error: {
                                filled: {
                                    sm:
                                        "block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-xs text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 appearance-none dark:text-white dark:border-red-500 focus:outline-none focus:ring-0 border-red-600 focus:border-red-600 dark:focus-border-red-500 peer",
                                    md:
                                        "block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 appearance-none dark:text-white dark:border-red-500 focus:outline-none focus:ring-0 border-red-600 focus:border-red-600 dark:focus-border-red-500 peer",
                                },
                                outlined: {
                                    sm:
                                        "block px-2.5 pb-2.5 pt-4 w-full text-xs text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white dark:border-red-500 border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer",
                                    md:
                                        "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white dark:border-red-500 border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer",
                                },
                                standard: {
                                    sm:
                                        "block py-2.5 px-0 w-full text-xs text-gray-900 bg-transparent border-0 border-b-2 border-red-600 appearance-none dark:text-white dark:border-red-500 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer",
                                    md:
                                        "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-red-600 appearance-none dark:text-white dark:border-red-500 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer",
                                },
                            },
                        },
                        label: {
                            default: {
                                filled: {
                                    sm:
                                        "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-xs text-gray-500  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500",
                                    md:
                                        "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500",
                                },
                                outlined: {
                                    sm:
                                        "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-xs text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500",
                                    md:
                                        "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500",
                                },
                                standard: {
                                    sm:
                                        "absolute text-xs text-gray-500 dark:text-gray-400  transition-transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                                    md:
                                        "absolute text-sm text-gray-500 dark:text-gray-400  transition-transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                                },
                            },
                            success: {
                                filled: {
                                    sm:
                                        "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-sm text-green-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-green-500",
                                    md:
                                        "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-sm text-green-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-green-500",
                                },
                                outlined: {
                                    sm:
                                        "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-sm text-green-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-green-500",
                                    md:
                                        "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-sm text-green-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-green-500",
                                },
                                standard: {
                                    sm:
                                        "absolute text-xs text-green-600 dark:text-green-500  transition-transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                                    md:
                                        "absolute text-sm text-green-600 dark:text-green-500  transition-transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                                },
                            },
                            error: {
                                filled: {
                                    sm:
                                        "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-xs text-red-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-red-500",
                                    md:
                                        "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-xs text-red-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-red-500",
                                },
                                outlined: {
                                    sm:
                                        "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-xs text-red-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-red-500",
                                    md:
                                        "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-xs text-red-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-red-500",
                                },
                                standard: {
                                    sm:
                                        "absolute text-xs text-red-600 dark:text-red-500  transition-transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                                    md:
                                        "absolute text-sm text-red-600 dark:text-red-500  transition-transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                                },
                            },
                        },
                        helperText: { default: "mt-2 text-xs text-gray-600 dark:text-gray-400", success: "mt-2 text-xs text-green-600 dark:text-green-400", error: "mt-2 text-xs text-red-600 dark:text-red-400" },
                    },
                    footer: {
                        root: { base: "w-full rounded-lg bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between", container: "w-full p-6", bgDark: "bg-gray-800" },
                        groupLink: { base: "flex flex-wrap text-sm text-gray-500 dark:text-white", link: { base: "last:mr-0 md:mr-6 me-4", href: "hover:underline" }, col: "flex-col space-y-4" },
                        icon: { base: "text-gray-500 dark:hover:text-white", size: "h-5 w-5" },
                        title: { base: "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white" },
                        divider: { base: "w-full my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" },
                        copyright: { base: "text-sm text-gray-500 dark:text-gray-400 sm:text-center", href: "ml-1 hover:underline", span: "ml-1" },
                        brand: { base: "mb-4 flex items-center sm:mb-0", img: "mr-3 h-8", span: "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white" },
                    },
                    helperText: {
                        root: {
                            base: "mt-2 text-sm",
                            colors: {
                                gray: "text-gray-500 dark:text-gray-400",
                                info: "text-cyan-700 dark:text-cyan-800",
                                success: "text-green-600 dark:text-green-500",
                                failure: "text-red-600 dark:text-red-500",
                                warning: "text-yellow-500 dark:text-yellow-600",
                            },
                        },
                    },
                    kbd: { root: { base: "px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500", icon: "inline-block" } },
                    label: {
                        root: {
                            base: "text-sm font-medium",
                            disabled: "opacity-50",
                            colors: {
                                default: "text-gray-900 dark:text-white",
                                info: "text-cyan-500 dark:text-cyan-600",
                                failure: "text-red-700 dark:text-red-500",
                                warning: "text-yellow-500 dark:text-yellow-600",
                                success: "text-green-700 dark:text-green-500",
                            },
                        },
                    },
                    listGroup: {
                        root: { base: "list-none rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white text-left" },
                        item: {
                            base: "[&>*]:first:rounded-t-lg [&>*]:last:rounded-b-lg [&>*]:last:border-b-0",
                            link: {
                                base: "flex items-center w-full border-b border-gray-200 py-2 px-4 dark:border-gray-600",
                                active: {
                                    off:
                                        "hover:bg-gray-100 hover:text-cyan-700 focus:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500",
                                    on: "bg-cyan-700 text-white dark:bg-gray-800",
                                },
                                disabled: { off: "", on: "hover:bg-gray-100 text-gray-900 hover:text-gray-900 focus:text-gray-900 bg-gray-100 cursor-not-allowed" },
                                href: { off: "", on: "" },
                                icon: "mr-2 h-4 w-4 fill-current",
                            },
                        },
                    },
                    list: {
                        root: {
                            base: "space-y-1 text-gray-500 list-inside dark:text-gray-400",
                            ordered: { off: "list-disc", on: "list-decimal" },
                            horizontal: "flex flex-wrap items-center space-x-4 space-y-0 justify-center list-none",
                            unstyled: "list-none",
                            nested: "ps-5 mt-2",
                        },
                    },
                    modal: {
                        root: {
                            base: "fixed top-0 right-0 left-0 z-50 h-modal h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
                            show: { on: "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80", off: "hidden" },
                            sizes: { sm: "max-w-sm", md: "max-w-md", lg: "max-w-lg", xl: "max-w-xl", "2xl": "max-w-2xl", "3xl": "max-w-3xl", "4xl": "max-w-4xl", "5xl": "max-w-5xl", "6xl": "max-w-6xl", "7xl": "max-w-7xl" },
                            positions: {
                                "top-left": "items-start justify-start",
                                "top-center": "items-start justify-center",
                                "top-right": "items-start justify-end",
                                "center-left": "items-center justify-start",
                                center: "items-center justify-center",
                                "center-right": "items-center justify-end",
                                "bottom-right": "items-end justify-end",
                                "bottom-center": "items-end justify-center",
                                "bottom-left": "items-end justify-start",
                            },
                        },
                        content: { base: "relative h-full w-full p-4 md:h-auto", inner: "relative rounded-lg bg-white shadow dark:bg-gray-700 flex flex-col max-h-[90vh]" },
                        body: { base: "p-6 flex-1 overflow-auto", popup: "pt-0" },
                        header: {
                            base: "flex items-start justify-between rounded-t dark:border-gray-600 border-b p-5",
                            popup: "p-2 border-b-0",
                            title: "text-xl font-medium text-gray-900 dark:text-white",
                            close: { base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white", icon: "h-5 w-5" },
                        },
                        footer: { base: "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600", popup: "border-t" },
                    },
                    navbar: {
                        root: {
                            base: "bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
                            rounded: { on: "rounded", off: "" },
                            bordered: { on: "border", off: "" },
                            inner: { base: "mx-auto flex flex-wrap items-center justify-between", fluid: { on: "", off: "container" } },
                        },
                        brand: { base: "flex items-center" },
                        collapse: { base: "w-full md:block md:w-auto", list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium", hidden: { on: "hidden", off: "" } },
                        link: {
                            base: "block py-2 pr-4 pl-3 md:p-0",
                            active: {
                                on: "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
                                off:
                                    "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
                            },
                            disabled: { on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600", off: "" },
                        },
                        toggle: {
                            base:
                                "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
                            icon: "h-6 w-6 shrink-0",
                        },
                    },
                    pagination: {
                        base: "",
                        layout: { table: { base: "text-sm text-gray-700 dark:text-gray-400", span: "font-semibold text-gray-900 dark:text-white" } },
                        pages: {
                            base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
                            showIcon: "inline-flex",
                            previous: {
                                base:
                                    "ml-0 rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
                                icon: "h-5 w-5",
                            },
                            next: {
                                base:
                                    "rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
                                icon: "h-5 w-5",
                            },
                            selector: {
                                base:
                                    "w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
                                active: "bg-cyan-50 text-cyan-600 hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
                                disabled: "opacity-50 cursor-normal",
                            },
                        },
                    },
                    progress: {
                        base: "w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",
                        label: "mb-1 flex justify-between font-medium dark:text-white",
                        bar: "rounded-full text-center font-medium leading-none text-cyan-300 dark:text-cyan-100 space-x-2",
                        color: {
                            dark: "bg-gray-600 dark:bg-gray-300",
                            blue: "bg-blue-600",
                            red: "bg-red-600 dark:bg-red-500",
                            green: "bg-green-600 dark:bg-green-500",
                            yellow: "bg-yellow-400",
                            indigo: "bg-indigo-600 dark:bg-indigo-500",
                            purple: "bg-purple-600 dark:bg-purple-500",
                            cyan: "bg-cyan-600",
                            gray: "bg-gray-500",
                            lime: "bg-lime-600",
                            pink: "bg-pink-500",
                            teal: "bg-teal-600",
                        },
                        size: { sm: "h-1.5", md: "h-2.5", lg: "h-4", xl: "h-6" },
                    },
                    radio: { root: { base: "h-4 w-4 border border-gray-300 focus:ring-2 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-cyan-600 dark:focus:ring-cyan-600 text-cyan-600" } },
                    rangeSlider: {
                        root: { base: "flex" },
                        field: { base: "relative w-full", input: { base: "w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700", sizes: { sm: "h-1 range-sm", md: "h-2", lg: "h-3 range-lg" } } },
                    },
                    rating: { root: { base: "flex items-center" }, star: { empty: "text-gray-300 dark:text-gray-500", filled: "text-yellow-400", sizes: { sm: "w-5 h-5", md: "w-7 h-7", lg: "w-10 h-10" } } },
                    ratingAdvanced: {
                        base: "flex items-center",
                        label: "text-sm font-medium text-cyan-600 dark:text-cyan-500",
                        progress: { base: "mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700", fill: "h-5 rounded bg-yellow-400", label: "text-sm font-medium text-cyan-600 dark:text-cyan-500" },
                    },
                    select: {
                        base: "flex",
                        addon: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
                        field: {
                            base: "relative w-full",
                            icon: { base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3", svg: "h-5 w-5 text-gray-500 dark:text-gray-400" },
                            select: {
                                base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
                                withIcon: { on: "pl-10", off: "" },
                                withAddon: { on: "rounded-r-lg", off: "rounded-lg" },
                                withShadow: { on: "shadow-sm dark:shadow-sm-light", off: "" },
                                sizes: { sm: "p-2 sm:text-xs", md: "p-2.5 text-sm", lg: "sm:text-md p-4" },
                                colors: {
                                    gray:
                                        "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                                    info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                                    failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
                                    warning:
                                        "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
                                    success:
                                        "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
                                },
                            },
                        },
                    },
                    textInput: {
                        base: "flex",
                        addon: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
                        field: {
                            base: "relative w-full",
                            icon: { base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3", svg: "h-5 w-5 text-gray-500 dark:text-gray-400" },
                            rightIcon: { base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3", svg: "h-5 w-5 text-gray-500 dark:text-gray-400" },
                            input: {
                                base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
                                sizes: { sm: "p-2 sm:text-xs", md: "p-2.5 text-sm", lg: "sm:text-md p-4" },
                                colors: {
                                    gray:
                                        "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                                    info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                                    failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
                                    warning:
                                        "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
                                    success:
                                        "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
                                },
                                withRightIcon: { on: "pr-10", off: "" },
                                withIcon: { on: "pl-10", off: "" },
                                withAddon: { on: "rounded-r-lg", off: "rounded-lg" },
                                withShadow: { on: "shadow-sm dark:shadow-sm-light", off: "" },
                            },
                        },
                    },
                    textarea: {
                        base: "block w-full rounded-lg border disabled:cursor-not-allowed disabled:opacity-50 text-sm",
                        colors: {
                            gray:
                                "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                            info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                            failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
                            warning:
                                "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
                            success:
                                "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
                        },
                        withShadow: { on: "shadow-sm dark:shadow-sm-light", off: "" },
                    },
                    toggleSwitch: {
                        root: {
                            base: "group relative flex items-center rounded-lg focus:outline-none",
                            active: { on: "cursor-pointer", off: "cursor-not-allowed opacity-50" },
                            label: "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300",
                        },
                        toggle: {
                            base: "toggle-bg rounded-full border group-focus:ring-4 group-focus:ring-cyan-500/25",
                            checked: {
                                on: "after:translate-x-full after:border-white",
                                off: "border-gray-200 bg-gray-200 dark:border-gray-600 dark:bg-gray-700",
                                color: {
                                    blue: " bg-cyan-700 border-cyan-700",
                                    dark: "bg-dark-700 border-dark-900",
                                    failure: "bg-red-700 border-red-900",
                                    gray: "bg-gray-500 border-gray-600",
                                    green: "bg-green-600 border-green-700",
                                    light: "bg-light-700 border-light-900",
                                    red: "bg-red-700 border-red-900",
                                    purple: "bg-purple-700 border-purple-900",
                                    success: "bg-green-500 border-green-500",
                                    yellow: "bg-yellow-400 border-yellow-400",
                                    warning: "bg-yellow-600 border-yellow-600",
                                    cyan: "bg-cyan-500 border-cyan-500",
                                    lime: "bg-lime-400 border-lime-400",
                                    indigo: "bg-indigo-400 border-indigo-400",
                                    teal: "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4",
                                    info: "bg-cyan-600 border-cyan-600",
                                    pink: "bg-pink-600 border-pink-600",
                                },
                            },
                            sizes: {
                                sm: "w-9 h-5 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4",
                                md: "w-11 h-6 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5",
                                lg: "w-14 h-7 after:absolute after:top-0.5 after:left-[4px] after:h-6 after:w-6",
                            },
                        },
                    },
                    sidebar: {
                        root: { base: "h-full", collapsed: { on: "w-16", off: "w-64" }, inner: "h-full overflow-y-auto overflow-x-hidden rounded bg-gray-50 py-4 px-3 dark:bg-gray-800" },
                        collapse: {
                            button: "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
                            icon: { base: "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white", open: { off: "", on: "text-gray-900" } },
                            label: { base: "ml-3 flex-1 whitespace-nowrap text-left", icon: { base: "h-6 w-6 transition ease-in-out delay-0", open: { on: "rotate-180", off: "" } } },
                            list: "space-y-2 py-2",
                        },
                        cta: {
                            base: "mt-6 rounded-lg p-4 bg-gray-100 dark:bg-gray-700",
                            color: {
                                blue: "bg-cyan-50 dark:bg-cyan-900",
                                dark: "bg-dark-50 dark:bg-dark-900",
                                failure: "bg-red-50 dark:bg-red-900",
                                gray: "bg-alternative-50 dark:bg-alternative-900",
                                green: "bg-green-50 dark:bg-green-900",
                                light: "bg-light-50 dark:bg-light-900",
                                red: "bg-red-50 dark:bg-red-900",
                                purple: "bg-purple-50 dark:bg-purple-900",
                                success: "bg-green-50 dark:bg-green-900",
                                yellow: "bg-yellow-50 dark:bg-yellow-900",
                                warning: "bg-yellow-50 dark:bg-yellow-900",
                            },
                        },
                        item: {
                            base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
                            active: "bg-gray-100 dark:bg-gray-700",
                            collapsed: { insideCollapse: "group w-full pl-8 transition duration-75", noIcon: "font-bold" },
                            content: { base: "px-3 flex-1 whitespace-nowrap" },
                            icon: { base: "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white", active: "text-gray-700 dark:text-gray-100" },
                            label: "",
                            listItem: "",
                        },
                        items: { base: "" },
                        itemGroup: { base: "mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700" },
                        logo: { base: "mb-5 flex items-center pl-2.5", collapsed: { on: "hidden", off: "self-center whitespace-nowrap text-xl font-semibold dark:text-white" }, img: "mr-3 h-6 sm:h-7" },
                    },
                    spinner: {
                        base: "inline animate-spin text-gray-200",
                        color: { failure: "fill-red-600", gray: "fill-gray-600", info: "fill-cyan-600", pink: "fill-pink-600", purple: "fill-purple-600", success: "fill-green-500", warning: "fill-yellow-400" },
                        light: {
                            off: { base: "dark:text-gray-600", color: { failure: "", gray: "dark:fill-gray-300", info: "", pink: "", purple: "", success: "", warning: "" } },
                            on: { base: "", color: { failure: "", gray: "", info: "", pink: "", purple: "", success: "", warning: "" } },
                        },
                        size: { xs: "w-3 h-3", sm: "w-4 h-4", md: "w-6 h-6", lg: "w-8 h-8", xl: "w-10 h-10" },
                    },
                    table: {
                        root: { base: "w-full text-left text-sm text-gray-500 dark:text-gray-400", shadow: "absolute bg-white dark:bg-black w-full h-full top-0 left-0 rounded-lg drop-shadow-md -z-10", wrapper: "relative" },
                        body: {
                            base: "group/body",
                            cell: {
                                base:
                                    "group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg px-6 py-4",
                            },
                        },
                        head: { base: "group/head text-xs uppercase text-gray-700 dark:text-gray-400", cell: { base: "group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-gray-50 dark:bg-gray-700 px-6 py-3" } },
                        row: { base: "group/row", hovered: "hover:bg-gray-50 dark:hover:bg-gray-600", striped: "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700" },
                    },
                    tabs: {
                        base: "flex flex-col gap-2",
                        tablist: {
                            base: "flex text-center",
                            styles: {
                                default: "flex-wrap border-b border-gray-200 dark:border-gray-700",
                                underline: "flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700",
                                pills: "flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400 space-x-2",
                                fullWidth: "w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-flow-col dark:divide-gray-700 dark:text-gray-400 rounded-none",
                            },
                            tabitem: {
                                base:
                                    "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-cyan-300 focus:outline-none",
                                styles: {
                                    default: {
                                        base: "rounded-t-lg",
                                        active: {
                                            on: "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
                                            off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300",
                                        },
                                    },
                                    underline: {
                                        base: "rounded-t-lg",
                                        active: {
                                            on: "text-cyan-600 rounded-t-lg border-b-2 border-cyan-600 active dark:text-cyan-500 dark:border-cyan-500",
                                            off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
                                        },
                                    },
                                    pills: { base: "", active: { on: "rounded-lg bg-cyan-600 text-white", off: "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white" } },
                                    fullWidth: {
                                        base: "ml-0 first:ml-0 w-full rounded-none flex",
                                        active: {
                                            on: "p-4 text-gray-900 bg-gray-100 active dark:bg-gray-700 dark:text-white rounded-none",
                                            off: "bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-none",
                                        },
                                    },
                                },
                                icon: "mr-2 h-5 w-5",
                            },
                        },
                        tabitemcontainer: { base: "", styles: { default: "", underline: "", pills: "", fullWidth: "" } },
                        tabpanel: "py-3",
                    },
                    timeline: {
                        root: { direction: { horizontal: "items-base sm:flex", vertical: "relative border-l border-gray-200 dark:border-gray-700" } },
                        item: {
                            root: { horizontal: "relative mb-6 sm:mb-0", vertical: "mb-10 ml-6" },
                            content: {
                                root: { base: "mt-3 sm:pr-8" },
                                body: { base: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400" },
                                time: { base: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500" },
                                title: { base: "text-lg font-semibold text-gray-900 dark:text-white" },
                            },
                            point: {
                                horizontal: "flex items-center",
                                line: "hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex",
                                marker: {
                                    base: {
                                        horizontal: "absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
                                        vertical: "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
                                    },
                                    icon: {
                                        base: "h-3 w-3 text-cyan-600 dark:text-cyan-300",
                                        wrapper: "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-200 ring-8 ring-white dark:bg-cyan-900 dark:ring-gray-900",
                                    },
                                },
                                vertical: "",
                            },
                        },
                    },
                    toast: {
                        root: { base: "flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400", closed: "opacity-0 ease-out" },
                        toggle: {
                            base:
                                "-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white",
                            icon: "h-5 w-5 shrink-0",
                        },
                    },
                    tooltip: {
                        target: "w-fit",
                        animation: "transition-opacity",
                        arrow: { base: "absolute z-10 h-2 w-2 rotate-45", style: { dark: "bg-gray-900 dark:bg-gray-700", light: "bg-white", auto: "bg-white dark:bg-gray-700" }, placement: "-4px" },
                        base: "absolute inline-block z-10 rounded-lg py-2 px-3 text-sm font-medium shadow-sm",
                        hidden: "invisible opacity-0",
                        style: {
                            dark: "bg-gray-900 text-white dark:bg-gray-700",
                            light: "border border-gray-200 bg-white text-gray-900",
                            auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white",
                        },
                        content: "relative z-20",
                    },
                },
                h = { theme: p(m) };
            function y(e) {
                e && (h.theme = b(m, e));
            }
            function v() {
                return p(h.theme);
            }
            let x = (0, c.createContext)(void 0);
            function w() {
                let e = (0, c.useContext)(x);
                if (!e) throw Error("useAccordionContext should be used within the AccordionPanelContext provider!");
                return e;
            }
            let k = (e) => {
                    let { children: t, className: r, theme: n = {}, ...o } = e,
                        { isOpen: a } = w(),
                        l = b(v().accordion.content, n);
                    return (0, s.jsx)("div", { className: (0, f.m6)(l.base, r), "data-testid": "flowbite-accordion-content", hidden: !a, ...o, children: t });
                },
                E = (e) => {
                    let { children: t, ...r } = e,
                        { alwaysOpen: n } = r,
                        [o, a] = (0, c.useState)(r.isOpen),
                        l = n ? { ...r, isOpen: o, setOpen: () => a(!o) } : r;
                    return (0, s.jsx)(x.Provider, { value: l, children: t });
                },
                C = (e) => {
                    let { as: t = "h2", children: r, className: n, theme: o = {}, ...a } = e,
                        { arrowIcon: l, flush: i, isOpen: c, setOpen: d } = w(),
                        u = b(v().accordion.title, o);
                    return (0, s.jsxs)("button", {
                        className: (0, f.m6)(u.base, u.flush[i ? "on" : "off"], u.open[c ? "on" : "off"], n),
                        onClick: () => void 0 !== d && d(),
                        type: "button",
                        ...a,
                        children: [
                            (0, s.jsx)(t, { className: u.heading, "data-testid": "flowbite-accordion-heading", children: r }),
                            l && (0, s.jsx)(l, { "aria-hidden": !0, className: (0, f.m6)(u.arrow.base, u.arrow.open[c ? "on" : "off"]), "data-testid": "flowbite-accordion-arrow" }),
                        ],
                    });
                },
                S = (e) => {
                    let { alwaysOpen: t = !1, arrowIcon: r = u.kWQ, children: n, flush: o = !1, collapseAll: a = !1, className: l, theme: i = {}, ...d } = e,
                        [g, p] = (0, c.useState)(a ? -1 : 0),
                        m = (0, c.useMemo)(() => c.Children.map(n, (e, n) => (0, c.cloneElement)(e, { alwaysOpen: t, arrowIcon: r, flush: o, isOpen: g === n, setOpen: () => p(g === n ? -1 : n) })), [t, r, n, o, g]),
                        h = b(v().accordion.root, i);
                    return (0, s.jsx)("div", { className: (0, f.m6)(h.base, h.flush[o ? "on" : "off"], l), "data-testid": "flowbite-accordion", ...d, children: m });
                };
            (S.displayName = "Accordion"), (E.displayName = "Accordion.Panel"), (C.displayName = "Accordion.Title"), (k.displayName = "Accordion.Content"), Object.assign(S, { Panel: E, Title: C, Content: k });
            let N = ({ children: e, className: t, theme: r = {}, ...n }) => {
                let o = b(v().avatar.group, r);
                return (0, s.jsx)("div", { "data-testid": "avatar-group-element", className: (0, f.m6)(o.base, t), ...n, children: e });
            };
            N.displayName = "Avatar.Group";
            let T = ({ className: e, href: t, theme: r = {}, total: n, ...o }) => {
                let a = b(v().avatar.groupCounter, r);
                return (0, s.jsxs)("a", { href: t, className: (0, f.m6)(a.base, e), ...o, children: ["+", n] });
            };
            T.displayName = "Avatar.GroupCounter";
            let R = ({
                alt: e = "",
                bordered: t = !1,
                children: r,
                className: n,
                color: o = "light",
                img: a,
                placeholderInitials: l = "",
                rounded: i = !1,
                size: c = "md",
                stacked: d = !1,
                status: u,
                statusPosition: g = "top-left",
                theme: p = {},
                ...m
            }) => {
                let h = b(v().avatar, p),
                    y = (0, f.m6)(h.root.img.base, t && h.root.bordered, t && h.root.color[o], i && h.root.rounded, d && h.root.stacked, h.root.img.on, h.root.size[c]),
                    x = { className: (0, f.m6)(y, h.root.img.on), "data-testid": "flowbite-avatar-img" };
                return (0, s.jsxs)("div", {
                    className: (0, f.m6)(h.root.base, n),
                    "data-testid": "flowbite-avatar",
                    ...m,
                    children: [
                        (0, s.jsxs)("div", {
                            className: "relative",
                            children: [
                                a
                                    ? "string" == typeof a
                                        ? (0, s.jsx)("img", { alt: e, src: a, ...x })
                                        : a({ alt: e, ...x })
                                    : l
                                    ? (0, s.jsx)("div", {
                                          className: (0, f.m6)(h.root.img.off, h.root.initials.base, d && h.root.stacked, t && h.root.bordered, t && h.root.color[o], h.root.size[c], i && h.root.rounded),
                                          "data-testid": "flowbite-avatar-initials-placeholder",
                                          children: (0, s.jsx)("span", { className: (0, f.m6)(h.root.initials.text), "data-testid": "flowbite-avatar-initials-placeholder-text", children: l }),
                                      })
                                    : (0, s.jsx)("div", {
                                          className: (0, f.m6)(y, h.root.img.off),
                                          "data-testid": "flowbite-avatar-img",
                                          children: (0, s.jsx)("svg", {
                                              className: h.root.img.placeholder,
                                              fill: "currentColor",
                                              viewBox: "0 0 20 20",
                                              xmlns: "http://www.w3.org/2000/svg",
                                              children: (0, s.jsx)("path", { fillRule: "evenodd", d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z", clipRule: "evenodd" }),
                                          }),
                                      }),
                                u && (0, s.jsx)("span", { "data-testid": "flowbite-avatar-status", className: (0, f.m6)(h.root.status.base, h.root.status[u], h.root.statusPosition[g]) }),
                            ],
                        }),
                        r && (0, s.jsx)("div", { children: r }),
                    ],
                });
            };
            (R.displayName = "Avatar"), Object.assign(R, { Group: N, Counter: T });
            let M = ({ children: e, color: t = "info", href: r, icon: n, size: o = "xs", className: a, theme: l = {}, ...i }) => {
                let c = b(v().badge, l),
                    d = () =>
                        (0, s.jsxs)("span", {
                            className: (0, f.m6)(c.root.base, c.root.color[t], c.root.size[o], c.icon[n ? "on" : "off"], a),
                            "data-testid": "flowbite-badge",
                            ...i,
                            children: [n && (0, s.jsx)(n, { "aria-hidden": !0, className: c.icon.size[o], "data-testid": "flowbite-badge-icon" }), e && (0, s.jsx)("span", { children: e })],
                        });
                return r ? (0, s.jsx)("a", { className: c.root.href, href: r, children: (0, s.jsx)(d, {}) }) : (0, s.jsx)(d, {});
            };
            M.displayName = "Badge";
            let j = c.forwardRef,
                L = ({ className: e, color: t = "info", light: r, size: n = "md", theme: o = {}, ...a }) => {
                    let l = b(v().spinner, o);
                    return (0, s.jsx)("span", {
                        role: "status",
                        ...a,
                        children: (0, s.jsxs)("svg", {
                            fill: "none",
                            viewBox: "0 0 100 101",
                            className: (0, f.m6)(l.base, l.color[t], l.light[r ? "on" : "off"].base, l.light[r ? "on" : "off"].color[t], l.size[n], e),
                            children: [
                                (0, s.jsx)("path", {
                                    d:
                                        "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                                    fill: "currentColor",
                                }),
                                (0, s.jsx)("path", {
                                    d:
                                        "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                                    fill: "currentFill",
                                }),
                            ],
                        }),
                    });
                };
            L.displayName = "Spinner";
            let P = j(({ children: e, as: t, href: r, type: n = "button", ...o }, a) => (0, c.createElement)(t || (r ? "a" : "button"), { ref: a, href: r, type: n, ...o }, e)),
                O = ({ children: e, className: t, outline: r, pill: n, theme: o = {}, ...a }) => {
                    let l = (0, c.useMemo)(() => c.Children.map(e, (t, o) => (0, c.cloneElement)(t, { outline: r, pill: n, positionInGroup: 0 === o ? "start" : o === e.length - 1 ? "end" : "middle" })), [e, r, n]),
                        i = b(v().buttonGroup, o);
                    return (0, s.jsx)("div", { className: (0, f.m6)(i.base, t), role: "group", ...a, children: l });
                };
            O.displayName = "Button.Group";
            let D = (
                {
                    children: e,
                    className: t,
                    color: r = "info",
                    disabled: n,
                    fullSized: o,
                    isProcessing: a = !1,
                    processingLabel: l = "Loading...",
                    processingSpinner: i,
                    gradientDuoTone: c,
                    gradientMonochrome: d,
                    label: u,
                    outline: g = !1,
                    pill: p = !1,
                    positionInGroup: m = "none",
                    size: h = "md",
                    theme: y = {},
                    ...x
                },
                w
            ) => {
                let { buttonGroup: k, button: E } = v(),
                    C = b(E, y);
                return (0, s.jsx)(P, {
                    ref: w,
                    disabled: n,
                    className: (0, f.m6)(
                        C.base,
                        n && C.disabled,
                        !c && !d && C.color[r],
                        c && !d && C.gradientDuoTone[c],
                        !c && d && C.gradient[d],
                        g && (C.outline.color[r] ?? C.outline.color.default),
                        C.pill[p ? "on" : "off"],
                        o && C.fullSized,
                        k.position[m],
                        t
                    ),
                    ...x,
                    children: (0, s.jsx)("span", {
                        className: (0, f.m6)(
                            C.inner.base,
                            C.outline[g ? "on" : "off"],
                            C.outline.pill[g && p ? "on" : "off"],
                            C.size[h],
                            g && !C.outline.color[r] && C.inner.outline,
                            a && C.isProcessing,
                            a && C.inner.isProcessingPadding[h],
                            C.inner.position[m]
                        ),
                        children: (0, s.jsxs)(s.Fragment, {
                            children: [
                                a && (0, s.jsx)("span", { className: (0, f.m6)(C.spinnerSlot, C.spinnerLeftPosition[h]), children: i || (0, s.jsx)(L, { size: h }) }),
                                void 0 !== e ? e : (0, s.jsx)("span", { "data-testid": "flowbite-button-label", className: (0, f.m6)(C.label), children: a ? l : u }),
                            ],
                        }),
                    }),
                });
            };
            D.displayName = "Button";
            let A = Object.assign(j(D), { Group: O }),
                I = (e) => {
                    let { children: t, ...r } = e;
                    return (0, s.jsx)(A, {
                        onClick: (e) => {
                            let t = e.target.closest('[role="banner"]');
                            null == t || t.remove();
                        },
                        ...r,
                        children: t,
                    });
                };
            I.displayName = "Banner.CollapseButton";
            let _ = ({ children: e, ...t }) => (0, s.jsx)("div", { "data-testid": "flowbite-banner", role: "banner", tabIndex: -1, ...t, children: e });
            (_.displayName = "Banner"), Object.assign(_, { CollapseButton: I });
            let z = (0, c.forwardRef)(({ children: e, className: t, href: r, icon: n, theme: o = {}, ...a }, l) => {
                let i = void 0 !== r,
                    c = b(v().breadcrumb.item, o);
                return (0, s.jsxs)("li", {
                    className: (0, f.m6)(c.base, t),
                    ...a,
                    children: [
                        (0, s.jsx)(u.yoF, { "aria-hidden": !0, className: c.chevron, "data-testid": "flowbite-breadcrumb-separator" }),
                        (0, s.jsxs)(i ? "a" : "span", { ref: l, className: c.href[i ? "on" : "off"], "data-testid": "flowbite-breadcrumb-item", href: r, children: [n && (0, s.jsx)(n, { "aria-hidden": !0, className: c.icon }), e] }),
                    ],
                });
            });
            z.displayName = "Breadcrumb.Item";
            let F = ({ children: e, className: t, theme: r = {}, ...n }) => {
                let o = b(v().breadcrumb.root, r);
                return (0, s.jsx)("nav", { "aria-label": "Breadcrumb", className: (0, f.m6)(o.base, t), ...n, children: (0, s.jsx)("ol", { className: o.list, children: e }) });
            };
            (F.displayName = "Breadcrumb"),
                Object.assign(F, { Item: z }),
                (W = ["renderImage", "imgSrc", "imgAlt", "children", "className", "horizontal", "href", "theme"]),
                (e) => {
                    let t = {};
                    for (let r in e) W.includes(r) || (t[r] = e[r]);
                    return t;
                };
            /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var W,
                B,
                Z,
                V = function (e, t) {
                    return (V =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                                e.__proto__ = t;
                            }) ||
                        function (e, t) {
                            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                        })(e, t);
                },
                K =
                    ((B = Z = {
                        path: void 0,
                        exports: {},
                        require: function (e, t) {
                            return (function () {
                                throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
                            })(null == t && Z.path);
                        },
                    }),
                    Z.exports,
                    (function () {
                        var e = {}.hasOwnProperty;
                        function t() {
                            for (var r = [], n = 0; n < arguments.length; n++) {
                                var o = arguments[n];
                                if (o) {
                                    var a = typeof o;
                                    if ("string" === a || "number" === a) r.push(o);
                                    else if (Array.isArray(o) && o.length) {
                                        var l = t.apply(null, o);
                                        l && r.push(l);
                                    } else if ("object" === a) for (var i in o) e.call(o, i) && o[i] && r.push(i);
                                }
                            }
                            return r.join(" ");
                        }
                        B.exports ? ((t.default = t), (B.exports = t)) : (window.classNames = t);
                    })(),
                    Z.exports);
            function H(e, t, r) {
                function n() {
                    var c = Date.now() - i;
                    c < t && c >= 0 ? (o = setTimeout(n, t - c)) : ((o = null), r || ((s = e.apply(l, a)), (l = a = null)));
                }
                null == t && (t = 100);
                var o,
                    a,
                    l,
                    i,
                    s,
                    c = function () {
                        (l = this), (a = arguments), (i = Date.now());
                        var c = r && !o;
                        return o || (o = setTimeout(n, t)), c && ((s = e.apply(l, a)), (l = a = null)), s;
                    };
                return (
                    (c.clear = function () {
                        o && (clearTimeout(o), (o = null));
                    }),
                    (c.flush = function () {
                        o && ((s = e.apply(l, a)), (l = a = null), clearTimeout(o), (o = null));
                    }),
                    c
                );
            }
            (H.debounce = H),
                (function (e, t) {
                    void 0 === t && (t = {});
                    var r = t.insertAt;
                    if (e && "undefined" != typeof document) {
                        var n = document.head || document.getElementsByTagName("head")[0],
                            o = document.createElement("style");
                        (o.type = "text/css"), "top" === r && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o), o.styleSheet ? (o.styleSheet.cssText = e) : o.appendChild(document.createTextNode(e));
                    }
                })(
                    ".indiana-scroll-container {\n  overflow: auto; }\n  .indiana-scroll-container--dragging {\n    scroll-behavior: auto !important; }\n    .indiana-scroll-container--dragging > * {\n      pointer-events: none;\n      cursor: -webkit-grab;\n      cursor: grab; }\n  .indiana-scroll-container--hide-scrollbars {\n    overflow: hidden;\n    overflow: -moz-scrollbars-none;\n    -ms-overflow-style: none;\n    scrollbar-width: none; }\n    .indiana-scroll-container--hide-scrollbars::-webkit-scrollbar {\n      display: none !important;\n      height: 0 !important;\n      width: 0 !important;\n      background: transparent !important;\n      -webkit-appearance: none !important; }\n  .indiana-scroll-container--native-scroll {\n    overflow: auto; }\n\n.indiana-dragging {\n  cursor: -webkit-grab;\n  cursor: grab; }\n"
                );
            var $,
                U =
                    (($ = "indiana-scroll-container"),
                    function (e, t) {
                        if (!e) return $;
                        "string" == typeof e ? (r = e) : (t = e);
                        var r,
                            n = $;
                        return (
                            r && (n += "__" + r),
                            n +
                                (t
                                    ? Object.keys(t).reduce(function (e, r) {
                                          var o = t[r];
                                          return o && (e += " " + ("boolean" == typeof o ? n + "--" + r : n + "--" + r + "_" + o)), e;
                                      }, "")
                                    : "")
                        );
                    });
            !(function (e) {
                function t(t) {
                    var r = e.call(this, t) || this;
                    return (
                        (r.onEndScroll = function () {
                            (r.scrolling = !1), !r.pressed && r.started && r.processEnd();
                        }),
                        (r.onScroll = function (e) {
                            var t = r.container.current;
                            (t.scrollLeft === r.scrollLeft && t.scrollTop === r.scrollTop) || ((r.scrolling = !0), r.processScroll(e), r.onEndScroll());
                        }),
                        (r.onTouchStart = function (e) {
                            var t = r.props.nativeMobileScroll;
                            if (r.isDraggable(e.target)) {
                                if (((r.internal = !0), t && r.scrolling)) r.pressed = !0;
                                else {
                                    var n = e.touches[0];
                                    r.processClick(e, n.clientX, n.clientY), !t && r.props.stopPropagation && e.stopPropagation();
                                }
                            }
                        }),
                        (r.onTouchEnd = function (e) {
                            var t = r.props.nativeMobileScroll;
                            r.pressed && (!r.started || (r.scrolling && t) ? (r.pressed = !1) : r.processEnd(), r.forceUpdate());
                        }),
                        (r.onTouchMove = function (e) {
                            var t = r.props.nativeMobileScroll;
                            if (r.pressed && (!t || !r.isMobile)) {
                                var n = e.touches[0];
                                n && r.processMove(e, n.clientX, n.clientY), e.preventDefault(), r.props.stopPropagation && e.stopPropagation();
                            }
                        }),
                        (r.onMouseDown = function (e) {
                            r.isDraggable(e.target) &&
                                r.isScrollable() &&
                                ((r.internal = !0), -1 !== r.props.buttons.indexOf(e.button) && (r.processClick(e, e.clientX, e.clientY), e.preventDefault(), r.props.stopPropagation && e.stopPropagation()));
                        }),
                        (r.onMouseMove = function (e) {
                            r.pressed && (r.processMove(e, e.clientX, e.clientY), e.preventDefault(), r.props.stopPropagation && e.stopPropagation());
                        }),
                        (r.onMouseUp = function (e) {
                            r.pressed && (r.started ? r.processEnd() : ((r.internal = !1), (r.pressed = !1), r.forceUpdate(), r.props.onClick && r.props.onClick(e)), e.preventDefault(), r.props.stopPropagation && e.stopPropagation());
                        }),
                        (r.container = c.createRef()),
                        (r.onEndScroll = H(r.onEndScroll, 300)),
                        (r.scrolling = !1),
                        (r.started = !1),
                        (r.pressed = !1),
                        (r.internal = !1),
                        (r.getRef = r.getRef.bind(r)),
                        r
                    );
                }
                (function (e, t) {
                    function r() {
                        this.constructor = e;
                    }
                    V(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
                })(t, e),
                    (t.prototype.componentDidMount = function () {
                        var e = this.props.nativeMobileScroll,
                            t = this.container.current;
                        window.addEventListener("mouseup", this.onMouseUp),
                            window.addEventListener("mousemove", this.onMouseMove),
                            window.addEventListener("touchmove", this.onTouchMove, { passive: !1 }),
                            window.addEventListener("touchend", this.onTouchEnd),
                            t.addEventListener("touchstart", this.onTouchStart, { passive: !1 }),
                            t.addEventListener("mousedown", this.onMouseDown, { passive: !1 }),
                            e && ((this.isMobile = this.isMobileDevice()), this.isMobile && this.forceUpdate());
                    }),
                    (t.prototype.componentWillUnmount = function () {
                        window.removeEventListener("mouseup", this.onMouseUp),
                            window.removeEventListener("mousemove", this.onMouseMove),
                            window.removeEventListener("touchmove", this.onTouchMove),
                            window.removeEventListener("touchend", this.onTouchEnd);
                    }),
                    (t.prototype.getElement = function () {
                        return this.container.current;
                    }),
                    (t.prototype.isMobileDevice = function () {
                        return void 0 !== window.orientation || -1 !== navigator.userAgent.indexOf("IEMobile");
                    }),
                    (t.prototype.isDraggable = function (e) {
                        var t = this.props.ignoreElements;
                        if (t) {
                            var r = e.closest(t);
                            return null === r || r.contains(this.getElement());
                        }
                        return !0;
                    }),
                    (t.prototype.isScrollable = function () {
                        var e = this.container.current;
                        return e && (e.scrollWidth > e.clientWidth || e.scrollHeight > e.clientHeight);
                    }),
                    (t.prototype.processClick = function (e, t, r) {
                        var n = this.container.current;
                        (this.scrollLeft = n.scrollLeft), (this.scrollTop = n.scrollTop), (this.clientX = t), (this.clientY = r), (this.pressed = !0);
                    }),
                    (t.prototype.processStart = function (e) {
                        void 0 === e && (e = !0);
                        var t = this.props.onStartScroll;
                        (this.started = !0), e && document.body.classList.add("indiana-dragging"), t && t({ external: !this.internal }), this.forceUpdate();
                    }),
                    (t.prototype.processScroll = function (e) {
                        if (this.started) {
                            var t = this.props.onScroll;
                            t && t({ external: !this.internal });
                        } else this.processStart(!1);
                    }),
                    (t.prototype.processMove = function (e, t, r) {
                        var n = this.props,
                            o = n.horizontal,
                            a = n.vertical,
                            l = n.activationDistance,
                            i = n.onScroll,
                            s = this.container.current;
                        this.started
                            ? (o && (s.scrollLeft -= t - this.clientX),
                              a && (s.scrollTop -= r - this.clientY),
                              i && i({ external: !this.internal }),
                              (this.clientX = t),
                              (this.clientY = r),
                              (this.scrollLeft = s.scrollLeft),
                              (this.scrollTop = s.scrollTop))
                            : ((o && Math.abs(t - this.clientX) > l) || (a && Math.abs(r - this.clientY) > l)) && ((this.clientX = t), (this.clientY = r), this.processStart());
                    }),
                    (t.prototype.processEnd = function () {
                        var e = this.props.onEndScroll;
                        this.container.current && e && e({ external: !this.internal }),
                            (this.pressed = !1),
                            (this.started = !1),
                            (this.scrolling = !1),
                            (this.internal = !1),
                            document.body.classList.remove("indiana-dragging"),
                            this.forceUpdate();
                    }),
                    (t.prototype.getRef = function (e) {
                        [this.container, this.props.innerRef].forEach(function (t) {
                            t && ("function" == typeof t ? t(e) : (t.current = e));
                        });
                    }),
                    (t.prototype.render = function () {
                        var e = this.props,
                            t = e.children,
                            r = e.draggingClassName,
                            n = e.className,
                            o = e.style,
                            a = e.hideScrollbars,
                            l = e.component;
                        return c.createElement(l, { className: K(n, this.pressed && r, U({ dragging: this.pressed, "hide-scrollbars": a, "native-scroll": this.isMobile })), style: o, ref: this.getRef, onScroll: this.onScroll }, t);
                    }),
                    (t.defaultProps = { nativeMobileScroll: !0, hideScrollbars: !0, activationDistance: 10, vertical: !0, horizontal: !0, stopPropagation: !1, style: {}, component: "div", buttons: [0] });
            })(c.PureComponent);
            let Y = () => "undefined" != typeof window;
            (0, c.forwardRef)(({ className: e, color: t = "default", theme: r = {}, ...n }, o) => {
                let a = b(v().checkbox, r);
                return (0, s.jsx)("input", { ref: o, type: "checkbox", className: (0, f.m6)(a.root.base, a.root.color[t], e), ...n });
            }).displayName = "Checkbox";
            let G = (e) => {
                    let { key: t, onChange: r } = e;
                    function n(e) {
                        let { key: n, newValue: o } = e;
                        n === t && r(o);
                    }
                    (0, c.useEffect)(() => (window.addEventListener("storage", n), () => window.removeEventListener("storage", n)), []);
                },
                X = "light",
                q = "flowbite-theme-mode",
                J = "flowbite-theme-mode-sync",
                Q = () => {
                    let [e, t] = (0, c.useState)(en(h.mode));
                    (0, c.useEffect)(() => {
                        et(e), er(e);
                    }, []),
                        G({
                            key: q,
                            onChange(e) {
                                if (e) return r(e);
                            },
                        }),
                        ee((e) => t(e));
                    let r = (e) => {
                        t(e), et(e), er(e), document.dispatchEvent(new CustomEvent(J, { detail: e }));
                    };
                    return {
                        mode: e,
                        computedMode: eo(e),
                        setMode: r,
                        toggleMode: () => {
                            let t = e;
                            "auto" === t && (t = eo(t)), r((t = "dark" === t ? "light" : "dark"));
                        },
                        clearMode: () => {
                            var e;
                            r(null !== (e = h.mode) && void 0 !== e ? e : X);
                        },
                    };
                },
                ee = (e) => {
                    (0, c.useEffect)(() => {
                        function t(t) {
                            e(t.detail);
                        }
                        return document.addEventListener(J, t), () => document.removeEventListener(J, t);
                    }, []);
                },
                et = (e) => localStorage.setItem(q, e),
                er = (e) => {
                    "dark" === eo(e) ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
                },
                en = (e) => {
                    var t;
                    if (!Y()) return X;
                    let r = localStorage.getItem(q);
                    return null !== (t = null != r ? r : e) && void 0 !== t ? t : X;
                },
                eo = (e) => ("auto" === e ? ea() : e),
                ea = () => {
                    var e, t;
                    return (null === (e = (t = window).matchMedia) || void 0 === e ? void 0 : e.call(t, "(prefers-color-scheme: dark)").matches) ? "dark" : "light";
                },
                el = ({ children: e, className: t, color: r = "default", theme: n = {}, value: o, ...a }) => {
                    let l = b(v().helperText, n);
                    return (0, s.jsx)("p", { className: (0, f.m6)(l.root.base, l.root.colors[r], t), ...a, children: o ?? e ?? "" });
                };
            (el.displayName = "HelperText"),
                ((0, c.forwardRef)(({ addon: e, className: t, color: r = "gray", helperText: n, icon: o, rightIcon: a, shadow: l, sizing: i = "md", theme: c = {}, ...d }, u) => {
                    let g = b(v().textInput, c);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsxs)("div", {
                                className: (0, f.m6)(g.base, t),
                                children: [
                                    e && (0, s.jsx)("span", { className: g.addon, children: e }),
                                    (0, s.jsxs)("div", {
                                        className: g.field.base,
                                        children: [
                                            o && (0, s.jsx)("div", { className: g.field.icon.base, children: (0, s.jsx)(o, { className: g.field.icon.svg }) }),
                                            a && (0, s.jsx)("div", { "data-testid": "right-icon", className: g.field.rightIcon.base, children: (0, s.jsx)(a, { className: g.field.rightIcon.svg }) }),
                                            (0, s.jsx)("input", {
                                                className: (0, f.m6)(
                                                    g.field.input.base,
                                                    g.field.input.colors[r],
                                                    g.field.input.sizes[i],
                                                    g.field.input.withIcon[o ? "on" : "off"],
                                                    g.field.input.withRightIcon[a ? "on" : "off"],
                                                    g.field.input.withAddon[e ? "on" : "off"],
                                                    g.field.input.withShadow[l ? "on" : "off"]
                                                ),
                                                ...d,
                                                ref: u,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            n && (0, s.jsx)(el, { color: r, children: n }),
                        ],
                    });
                }).displayName = "TextInput");
            let ei = (0, c.createContext)(void 0);
            ((o = l || (l = {}))[(o.Days = 0)] = "Days"),
                (o[(o.Months = 1)] = "Months"),
                (o[(o.Years = 2)] = "Years"),
                (o[(o.Decades = 3)] = "Decades"),
                ((a = i || (i = {}))[(a.Sunday = 0)] = "Sunday"),
                (a[(a.Monday = 1)] = "Monday"),
                (a[(a.Tuesday = 2)] = "Tuesday"),
                (a[(a.Wednesday = 3)] = "Wednesday"),
                (a[(a.Thursday = 4)] = "Thursday"),
                (a[(a.Friday = 5)] = "Friday"),
                (a[(a.Saturday = 6)] = "Saturday");
            let es = (e, t) => {
                let r = new Date(e);
                return r.setDate(r.getDate() + t), r;
            };
            var ec = r(947);
            function ed(e) {
                let t = e.activeElement;
                for (; (null == (r = t) || null == (r = r.shadowRoot) ? void 0 : r.activeElement) != null; ) {
                    var r;
                    t = t.shadowRoot.activeElement;
                }
                return t;
            }
            function eu(e, t) {
                if (!e || !t) return !1;
                let r = null == t.getRootNode ? void 0 : t.getRootNode();
                if (e.contains(t)) return !0;
                if (r && (0, ec.Zq)(r)) {
                    let r = t;
                    for (; r; ) {
                        if (e === r) return !0;
                        r = r.parentNode || r.host;
                    }
                }
                return !1;
            }
            function ef() {
                let e = navigator.userAgentData;
                return null != e && e.platform ? e.platform : navigator.platform;
            }
            function eg() {
                let e = navigator.userAgentData;
                return e && Array.isArray(e.brands)
                    ? e.brands
                          .map((e) => {
                              let { brand: t, version: r } = e;
                              return t + "/" + r;
                          })
                          .join(" ")
                    : navigator.userAgent;
            }
            function ep(e) {
                return (0 === e.mozInputSource && !!e.isTrusted) || (eh() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType);
            }
            function eb(e) {
                return (
                    !eg().includes("jsdom/") &&
                    ((!eh() && 0 === e.width && 0 === e.height) ||
                        (eh() && 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType) ||
                        (e.width < 1 && e.height < 1 && 0 === e.pressure && 0 === e.detail && "touch" === e.pointerType))
                );
            }
            function em() {
                return /apple/i.test(navigator.vendor);
            }
            function eh() {
                let e = /android/i;
                return e.test(ef()) || e.test(eg());
            }
            function ey() {
                return ef().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
            }
            function ev(e, t) {
                let r = ["mouse", "pen"];
                return t || r.push("", void 0), r.includes(e);
            }
            function ex(e) {
                return (null == e ? void 0 : e.ownerDocument) || document;
            }
            function ew(e, t) {
                return null != t && ("composedPath" in e ? e.composedPath().includes(t) : null != e.target && t.contains(e.target));
            }
            function ek(e) {
                return "composedPath" in e ? e.composedPath()[0] : e.target;
            }
            function eE(e) {
                return (0, ec.Re)(e) && e.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])");
            }
            function eC(e) {
                e.preventDefault(), e.stopPropagation();
            }
            function eS(e) {
                return !!e && "combobox" === e.getAttribute("role") && eE(e);
            }
            var eN = r(3025),
                eT = r(4305),
                eR =
                    'input:not([inert]),select:not([inert]),textarea:not([inert]),a[href]:not([inert]),button:not([inert]),[tabindex]:not(slot):not([inert]),audio[controls]:not([inert]),video[controls]:not([inert]),[contenteditable]:not([contenteditable="false"]):not([inert]),details>summary:first-of-type:not([inert]),details:not([inert])',
                eM = "undefined" == typeof Element,
                ej = eM ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
                eL =
                    !eM && Element.prototype.getRootNode
                        ? function (e) {
                              var t;
                              return null == e ? void 0 : null === (t = e.getRootNode) || void 0 === t ? void 0 : t.call(e);
                          }
                        : function (e) {
                              return null == e ? void 0 : e.ownerDocument;
                          },
                eP = function e(t, r) {
                    void 0 === r && (r = !0);
                    var n,
                        o = null == t ? void 0 : null === (n = t.getAttribute) || void 0 === n ? void 0 : n.call(t, "inert");
                    return "" === o || "true" === o || (r && t && e(t.parentNode));
                },
                eO = function (e) {
                    var t,
                        r = null == e ? void 0 : null === (t = e.getAttribute) || void 0 === t ? void 0 : t.call(e, "contenteditable");
                    return "" === r || "true" === r;
                },
                eD = function (e, t, r) {
                    if (eP(e)) return [];
                    var n = Array.prototype.slice.apply(e.querySelectorAll(eR));
                    return t && ej.call(e, eR) && n.unshift(e), (n = n.filter(r));
                },
                eA = function e(t, r, n) {
                    for (var o = [], a = Array.from(t); a.length; ) {
                        var l = a.shift();
                        if (!eP(l, !1)) {
                            if ("SLOT" === l.tagName) {
                                var i = l.assignedElements(),
                                    s = e(i.length ? i : l.children, !0, n);
                                n.flatten ? o.push.apply(o, s) : o.push({ scopeParent: l, candidates: s });
                            } else {
                                ej.call(l, eR) && n.filter(l) && (r || !t.includes(l)) && o.push(l);
                                var c = l.shadowRoot || ("function" == typeof n.getShadowRoot && n.getShadowRoot(l)),
                                    d = !eP(c, !1) && (!n.shadowRootFilter || n.shadowRootFilter(l));
                                if (c && d) {
                                    var u = e(!0 === c ? l.children : c.children, !0, n);
                                    n.flatten ? o.push.apply(o, u) : o.push({ scopeParent: l, candidates: u });
                                } else a.unshift.apply(a, l.children);
                            }
                        }
                    }
                    return o;
                },
                eI = function (e) {
                    return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
                },
                e_ = function (e) {
                    if (!e) throw Error("No node provided");
                    return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || eO(e)) && !eI(e) ? 0 : e.tabIndex;
                },
                ez = function (e, t) {
                    var r = e_(e);
                    return r < 0 && t && !eI(e) ? 0 : r;
                },
                eF = function (e, t) {
                    return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
                },
                eW = function (e) {
                    return "INPUT" === e.tagName;
                },
                eB = function (e, t) {
                    for (var r = 0; r < e.length; r++) if (e[r].checked && e[r].form === t) return e[r];
                },
                eZ = function (e) {
                    if (!e.name) return !0;
                    var t,
                        r = e.form || eL(e),
                        n = function (e) {
                            return r.querySelectorAll('input[type="radio"][name="' + e + '"]');
                        };
                    if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape) t = n(window.CSS.escape(e.name));
                    else
                        try {
                            t = n(e.name);
                        } catch (e) {
                            return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1;
                        }
                    var o = eB(t, e.form);
                    return !o || o === e;
                },
                eV = function (e) {
                    var t,
                        r,
                        n,
                        o,
                        a,
                        l,
                        i,
                        s = e && eL(e),
                        c = null === (t = s) || void 0 === t ? void 0 : t.host,
                        d = !1;
                    if (s && s !== e)
                        for (d = !!((null !== (r = c) && void 0 !== r && null !== (n = r.ownerDocument) && void 0 !== n && n.contains(c)) || (null != e && null !== (o = e.ownerDocument) && void 0 !== o && o.contains(e))); !d && c; )
                            d = !!(null !== (l = c = null === (a = s = eL(c)) || void 0 === a ? void 0 : a.host) && void 0 !== l && null !== (i = l.ownerDocument) && void 0 !== i && i.contains(c));
                    return d;
                },
                eK = function (e) {
                    var t = e.getBoundingClientRect(),
                        r = t.width,
                        n = t.height;
                    return 0 === r && 0 === n;
                },
                eH = function (e, t) {
                    var r = t.displayCheck,
                        n = t.getShadowRoot;
                    if ("hidden" === getComputedStyle(e).visibility) return !0;
                    var o = ej.call(e, "details>summary:first-of-type") ? e.parentElement : e;
                    if (ej.call(o, "details:not([open]) *")) return !0;
                    if (r && "full" !== r && "legacy-full" !== r) {
                        if ("non-zero-area" === r) return eK(e);
                    } else {
                        if ("function" == typeof n) {
                            for (var a = e; e; ) {
                                var l = e.parentElement,
                                    i = eL(e);
                                if (l && !l.shadowRoot && !0 === n(l)) return eK(e);
                                e = e.assignedSlot ? e.assignedSlot : l || i === e.ownerDocument ? l : i.host;
                            }
                            e = a;
                        }
                        if (eV(e)) return !e.getClientRects().length;
                        if ("legacy-full" !== r) return !0;
                    }
                    return !1;
                },
                e$ = function (e) {
                    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                        for (var t = e.parentElement; t; ) {
                            if ("FIELDSET" === t.tagName && t.disabled) {
                                for (var r = 0; r < t.children.length; r++) {
                                    var n = t.children.item(r);
                                    if ("LEGEND" === n.tagName) return !!ej.call(t, "fieldset[disabled] *") || !n.contains(e);
                                }
                                return !0;
                            }
                            t = t.parentElement;
                        }
                    return !1;
                },
                eU = function (e, t) {
                    var r, n, o;
                    return (
                        !((eW((r = t)) && "radio" === r.type && !eZ(r)) || 0 > e_(t)) &&
                        ((n = e),
                        !(
                            (o = t).disabled ||
                            eP(o) ||
                            (eW(o) && "hidden" === o.type) ||
                            eH(o, n) ||
                            ("DETAILS" === o.tagName &&
                                Array.prototype.slice.apply(o.children).some(function (e) {
                                    return "SUMMARY" === e.tagName;
                                })) ||
                            e$(o)
                        ))
                    );
                },
                eY = function (e) {
                    var t = parseInt(e.getAttribute("tabindex"), 10);
                    return !!isNaN(t) || t >= 0;
                },
                eG = function e(t) {
                    var r = [],
                        n = [];
                    return (
                        t.forEach(function (t, o) {
                            var a = !!t.scopeParent,
                                l = a ? t.scopeParent : t,
                                i = ez(l, a),
                                s = a ? e(t.candidates) : l;
                            0 === i ? (a ? r.push.apply(r, s) : r.push(l)) : n.push({ documentOrder: o, tabIndex: i, item: t, isScope: a, content: s });
                        }),
                        n
                            .sort(eF)
                            .reduce(function (e, t) {
                                return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e;
                            }, [])
                            .concat(r)
                    );
                },
                eX = function (e, t) {
                    return eG((t = t || {}).getShadowRoot ? eA([e], t.includeContainer, { filter: eU.bind(null, t), flatten: !1, getShadowRoot: t.getShadowRoot, shadowRootFilter: eY }) : eD(e, t.includeContainer, eU.bind(null, t)));
                },
                eq = r(2573);
            let eJ = d["useInsertionEffect".toString()] || ((e) => e());
            function eQ(e) {
                let t = c.useRef(() => {});
                return (
                    eJ(() => {
                        t.current = e;
                    }),
                    c.useCallback(function () {
                        for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                        return null == t.current ? void 0 : t.current(...r);
                    }, [])
                );
            }
            let e0 = "ArrowUp",
                e1 = "ArrowDown",
                e5 = "ArrowLeft",
                e2 = "ArrowRight";
            function e6(e, t, r) {
                return Math.floor(e / t) !== r;
            }
            function e4(e, t) {
                return t < 0 || t >= e.current.length;
            }
            function e7(e, t) {
                return e9(e, { disabledIndices: t });
            }
            function e3(e, t) {
                return e9(e, { decrement: !0, startingIndex: e.current.length, disabledIndices: t });
            }
            function e9(e, t) {
                let { startingIndex: r = -1, decrement: n = !1, disabledIndices: o, amount: a = 1 } = void 0 === t ? {} : t,
                    l = e.current,
                    i = o
                        ? (e) => o.includes(e)
                        : (e) => {
                              let t = l[e];
                              return null == t || t.hasAttribute("disabled") || "true" === t.getAttribute("aria-disabled");
                          },
                    s = r;
                do s += n ? -a : a;
                while (s >= 0 && s <= l.length - 1 && i(s));
                return s;
            }
            let e8 = 0;
            function te(e, t) {
                void 0 === t && (t = {});
                let { preventScroll: r = !1, cancelPrevious: n = !0, sync: o = !1 } = t;
                n && cancelAnimationFrame(e8);
                let a = () => (null == e ? void 0 : e.focus({ preventScroll: r }));
                o ? a() : (e8 = requestAnimationFrame(a));
            }
            var tt = "undefined" != typeof document ? c.useLayoutEffect : c.useEffect;
            function tr(e, t) {
                let r = e.compareDocumentPosition(t);
                return r & Node.DOCUMENT_POSITION_FOLLOWING || r & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : r & Node.DOCUMENT_POSITION_PRECEDING || r & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
            }
            let tn = c.createContext({ register: () => {}, unregister: () => {}, map: new Map(), elementsRef: { current: [] } });
            function to(e) {
                let { children: t, elementsRef: r, labelsRef: n } = e,
                    [o, a] = c.useState(() => new Map()),
                    l = c.useCallback((e) => {
                        a((t) => new Map(t).set(e, null));
                    }, []),
                    i = c.useCallback((e) => {
                        a((t) => {
                            let r = new Map(t);
                            return r.delete(e), r;
                        });
                    }, []);
                return (
                    tt(() => {
                        let e = new Map(o);
                        Array.from(e.keys())
                            .sort(tr)
                            .forEach((t, r) => {
                                e.set(t, r);
                            }),
                            !(function (e, t) {
                                if (e.size !== t.size) return !1;
                                for (let [r, n] of e.entries()) if (n !== t.get(r)) return !1;
                                return !0;
                            })(o, e) && a(e);
                    }, [o]),
                    c.createElement(tn.Provider, { value: c.useMemo(() => ({ register: l, unregister: i, map: o, elementsRef: r, labelsRef: n }), [l, i, o, r, n]) }, t)
                );
            }
            function ta() {
                return (ta = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = arguments[t];
                              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                          }
                          return e;
                      }).apply(this, arguments);
            }
            let tl = !1,
                ti = 0,
                ts = () => "floating-ui-" + ti++,
                tc =
                    d["useId".toString()] ||
                    function () {
                        let [e, t] = c.useState(() => (tl ? ts() : void 0));
                        return (
                            tt(() => {
                                null == e && t(ts());
                            }, []),
                            c.useEffect(() => {
                                tl || (tl = !0);
                            }, []),
                            e
                        );
                    },
                td = c.createContext(null),
                tu = c.createContext(null),
                tf = () => {
                    var e;
                    return (null == (e = c.useContext(td)) ? void 0 : e.id) || null;
                },
                tg = () => c.useContext(tu);
            function tp(e) {
                return "data-floating-ui-" + e;
            }
            function tb(e) {
                let t = (0, c.useRef)(e);
                return (
                    tt(() => {
                        t.current = e;
                    }),
                    t
                );
            }
            let tm = tp("safe-polygon");
            function th(e, t, r) {
                return r && !ev(r) ? 0 : "number" == typeof e ? e : null == e ? void 0 : e[t];
            }
            function ty(e, t) {
                let r = e.filter((e) => {
                        var r;
                        return e.parentId === t && (null == (r = e.context) ? void 0 : r.open);
                    }),
                    n = r;
                for (; n.length; )
                    (n = e.filter((e) => {
                        var t;
                        return null == (t = n)
                            ? void 0
                            : t.some((t) => {
                                  var r;
                                  return e.parentId === t.id && (null == (r = e.context) ? void 0 : r.open);
                              });
                    })),
                        (r = r.concat(n));
                return r;
            }
            let tv = new WeakMap(),
                tx = new WeakSet(),
                tw = {},
                tk = 0,
                tE = () => "undefined" != typeof HTMLElement && "inert" in HTMLElement.prototype,
                tC = (e) => e && (e.host || tC(e.parentNode)),
                tS = (e, t) =>
                    t
                        .map((t) => {
                            if (e.contains(t)) return t;
                            let r = tC(t);
                            return e.contains(r) ? r : null;
                        })
                        .filter((e) => null != e);
            function tN(e, t, r) {
                void 0 === t && (t = !1), void 0 === r && (r = !1);
                let n = ex(e[0]).body;
                return (function (e, t, r, n) {
                    let o = "data-floating-ui-inert",
                        a = n ? "inert" : r ? "aria-hidden" : null,
                        l = tS(t, e),
                        i = new Set(),
                        s = new Set(l),
                        c = [];
                    tw[o] || (tw[o] = new WeakMap());
                    let d = tw[o];
                    return (
                        l.forEach(function e(t) {
                            !(!t || i.has(t)) && (i.add(t), t.parentNode && e(t.parentNode));
                        }),
                        (function e(t) {
                            !t ||
                                s.has(t) ||
                                Array.prototype.forEach.call(t.children, (t) => {
                                    if (i.has(t)) e(t);
                                    else {
                                        let e = a ? t.getAttribute(a) : null,
                                            r = null !== e && "false" !== e,
                                            n = (tv.get(t) || 0) + 1,
                                            l = (d.get(t) || 0) + 1;
                                        tv.set(t, n), d.set(t, l), c.push(t), 1 === n && r && tx.add(t), 1 === l && t.setAttribute(o, ""), !r && a && t.setAttribute(a, "true");
                                    }
                                });
                        })(t),
                        i.clear(),
                        tk++,
                        () => {
                            c.forEach((e) => {
                                let t = (tv.get(e) || 0) - 1,
                                    r = (d.get(e) || 0) - 1;
                                tv.set(e, t), d.set(e, r), t || (!tx.has(e) && a && e.removeAttribute(a), tx.delete(e)), r || e.removeAttribute(o);
                            }),
                                --tk || ((tv = new WeakMap()), (tv = new WeakMap()), (tx = new WeakSet()), (tw = {}));
                        }
                    );
                })(e.concat(Array.from(n.querySelectorAll("[aria-live]"))), n, t, r);
            }
            let tT = () => ({ getShadowRoot: !0, displayCheck: "function" == typeof ResizeObserver && ResizeObserver.toString().includes("[native code]") ? "full" : "none" });
            function tR(e, t) {
                let r = eX(e, tT());
                "prev" === t && r.reverse();
                let n = r.indexOf(ed(ex(e)));
                return r.slice(n + 1)[0];
            }
            function tM() {
                return tR(document.body, "next");
            }
            function tj() {
                return tR(document.body, "prev");
            }
            function tL(e, t) {
                let r = t || e.currentTarget,
                    n = e.relatedTarget;
                return !n || !eu(r, n);
            }
            let tP = { border: 0, clip: "rect(0 0 0 0)", height: "1px", margin: "-1px", overflow: "hidden", padding: 0, position: "fixed", whiteSpace: "nowrap", width: "1px", top: 0, left: 0 };
            function tO(e) {
                "Tab" === e.key && (e.target, clearTimeout(n));
            }
            let tD = c.forwardRef(function (e, t) {
                    let [r, n] = c.useState();
                    tt(
                        () => (
                            em() && n("button"),
                            document.addEventListener("keydown", tO),
                            () => {
                                document.removeEventListener("keydown", tO);
                            }
                        ),
                        []
                    );
                    let o = { ref: t, tabIndex: 0, role: r, "aria-hidden": !r || void 0, [tp("focus-guard")]: "", style: tP };
                    return c.createElement("span", ta({}, e, o));
                }),
                tA = c.createContext(null),
                tI = tp("portal");
            function t_(e) {
                let { children: t, id: r, root: n = null, preserveTabOrder: o = !0 } = e,
                    a = (function (e) {
                        let { id: t, root: r } = void 0 === e ? {} : e,
                            [n, o] = c.useState(null),
                            a = tc(),
                            l = tz(),
                            i = c.useRef(null);
                        return (
                            tt(
                                () => () => {
                                    null == n || n.remove(),
                                        queueMicrotask(() => {
                                            i.current = null;
                                        });
                                },
                                [n]
                            ),
                            tt(() => {
                                if (i.current) return;
                                let e = t ? document.getElementById(t) : null;
                                if (!e) return;
                                let r = document.createElement("div");
                                (r.id = a), r.setAttribute(tI, ""), e.appendChild(r), (i.current = r), o(r);
                            }, [t, a]),
                            tt(() => {
                                if (i.current) return;
                                let e = r || (null == l ? void 0 : l.portalNode);
                                e && !(0, ec.kK)(e) && (e = e.current), (e = e || document.body);
                                let n = null;
                                t && (((n = document.createElement("div")).id = t), e.appendChild(n));
                                let s = document.createElement("div");
                                (s.id = a), s.setAttribute(tI, ""), (e = n || e).appendChild(s), (i.current = s), o(s);
                            }, [t, r, a, l]),
                            n
                        );
                    })({ id: r, root: n }),
                    [l, i] = c.useState(null),
                    s = c.useRef(null),
                    d = c.useRef(null),
                    u = c.useRef(null),
                    f = c.useRef(null),
                    g = !!l && !l.modal && l.open && o && !!(n || a);
                return (
                    c.useEffect(() => {
                        if (a && o && (null == l || !l.modal))
                            return (
                                a.addEventListener("focusin", e, !0),
                                a.addEventListener("focusout", e, !0),
                                () => {
                                    a.removeEventListener("focusin", e, !0), a.removeEventListener("focusout", e, !0);
                                }
                            );
                        function e(e) {
                            a &&
                                tL(e) &&
                                ("focusin" === e.type
                                    ? function (e) {
                                          e.querySelectorAll("[data-tabindex]").forEach((e) => {
                                              let t = e.dataset.tabindex;
                                              delete e.dataset.tabindex, t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
                                          });
                                      }
                                    : function (e) {
                                          eX(e, tT()).forEach((e) => {
                                              (e.dataset.tabindex = e.getAttribute("tabindex") || ""), e.setAttribute("tabindex", "-1");
                                          });
                                      })(a);
                        }
                    }, [a, o, null == l ? void 0 : l.modal]),
                    c.createElement(
                        tA.Provider,
                        { value: c.useMemo(() => ({ preserveTabOrder: o, beforeOutsideRef: s, afterOutsideRef: d, beforeInsideRef: u, afterInsideRef: f, portalNode: a, setFocusManagerState: i }), [o, a]) },
                        g &&
                            a &&
                            c.createElement(tD, {
                                "data-type": "outside",
                                ref: s,
                                onFocus: (e) => {
                                    if (tL(e, a)) {
                                        var t;
                                        null == (t = u.current) || t.focus();
                                    } else {
                                        let e = tj() || (null == l ? void 0 : l.refs.domReference.current);
                                        null == e || e.focus();
                                    }
                                },
                            }),
                        g && a && c.createElement("span", { "aria-owns": a.id, style: tP }),
                        a && (0, eq.createPortal)(t, a),
                        g &&
                            a &&
                            c.createElement(tD, {
                                "data-type": "outside",
                                ref: d,
                                onFocus: (e) => {
                                    if (tL(e, a)) {
                                        var t;
                                        null == (t = f.current) || t.focus();
                                    } else {
                                        let t = tM() || (null == l ? void 0 : l.refs.domReference.current);
                                        null == t || t.focus(), (null == l ? void 0 : l.closeOnFocusOut) && (null == l || l.onOpenChange(!1, e.nativeEvent));
                                    }
                                },
                            })
                    )
                );
            }
            let tz = () => c.useContext(tA),
                tF = [];
            function tW(e) {
                (tF = tF.filter((e) => e.isConnected)), e && "body" !== (0, ec.wk)(e) && (tF.push(e), tF.length > 20 && (tF = tF.slice(-20)));
            }
            function tB() {
                return tF
                    .slice()
                    .reverse()
                    .find((e) => e.isConnected);
            }
            let tZ = c.forwardRef(function (e, t) {
                return c.createElement("button", ta({}, e, { type: "button", ref: t, tabIndex: -1, style: tP }));
            });
            function tV(e) {
                let { context: t, children: r, disabled: n = !1, order: o = ["content"], guards: a = !0, initialFocus: l = 0, returnFocus: i = !0, modal: s = !0, visuallyHiddenDismiss: d = !1, closeOnFocusOut: u = !0 } = e,
                    {
                        open: f,
                        refs: g,
                        nodeId: p,
                        onOpenChange: b,
                        events: m,
                        dataRef: h,
                        elements: { domReference: y, floating: v },
                    } = t,
                    x = "number" == typeof l && l < 0,
                    w = eS(y) && x,
                    k = !tE() || a,
                    E = tb(o),
                    C = tb(l),
                    S = tb(i),
                    N = tg(),
                    T = tz(),
                    R = c.useRef(null),
                    M = c.useRef(null),
                    j = c.useRef(!1),
                    L = c.useRef(!1),
                    P = null != T,
                    O = c.useCallback(
                        function (e) {
                            return void 0 === e && (e = v), e ? eX(e, tT()) : [];
                        },
                        [v]
                    ),
                    D = c.useCallback(
                        (e) => {
                            let t = O(e);
                            return E.current
                                .map((e) => (y && "reference" === e ? y : v && "floating" === e ? v : t))
                                .filter(Boolean)
                                .flat();
                        },
                        [y, v, E, O]
                    );
                function A(e) {
                    return !n && d && s ? c.createElement(tZ, { ref: "start" === e ? R : M, onClick: (e) => b(!1, e.nativeEvent) }, "string" == typeof d ? d : "Dismiss") : null;
                }
                c.useEffect(() => {
                    if (n || !s) return;
                    function e(e) {
                        if ("Tab" === e.key) {
                            eu(v, ed(ex(v))) && 0 === O().length && !w && eC(e);
                            let t = D(),
                                r = ek(e);
                            "reference" === E.current[0] && r === y && (eC(e), e.shiftKey ? te(t[t.length - 1]) : te(t[1])), "floating" === E.current[1] && r === v && e.shiftKey && (eC(e), te(t[0]));
                        }
                    }
                    let t = ex(v);
                    return (
                        t.addEventListener("keydown", e),
                        () => {
                            t.removeEventListener("keydown", e);
                        }
                    );
                }, [n, y, v, s, E, w, O, D]),
                    c.useEffect(() => {
                        if (!n && u && v && (0, ec.Re)(y))
                            return (
                                y.addEventListener("focusout", t),
                                y.addEventListener("pointerdown", e),
                                s || v.addEventListener("focusout", t),
                                () => {
                                    y.removeEventListener("focusout", t), y.removeEventListener("pointerdown", e), s || v.removeEventListener("focusout", t);
                                }
                            );
                        function e() {
                            (L.current = !0),
                                setTimeout(() => {
                                    L.current = !1;
                                });
                        }
                        function t(e) {
                            let t = e.relatedTarget;
                            queueMicrotask(() => {
                                let r = !(
                                    eu(y, t) ||
                                    eu(v, t) ||
                                    eu(t, v) ||
                                    eu(null == T ? void 0 : T.portalNode, t) ||
                                    (null != t && t.hasAttribute(tp("focus-guard"))) ||
                                    (N &&
                                        (ty(N.nodesRef.current, p).find((e) => {
                                            var r, n;
                                            return eu(null == (r = e.context) ? void 0 : r.elements.floating, t) || eu(null == (n = e.context) ? void 0 : n.elements.domReference, t);
                                        }) ||
                                            (function (e, t) {
                                                var r;
                                                let n = [],
                                                    o = null == (r = e.find((e) => e.id === t)) ? void 0 : r.parentId;
                                                for (; o; ) {
                                                    let t = e.find((e) => e.id === o);
                                                    (o = null == t ? void 0 : t.parentId), t && (n = n.concat(t));
                                                }
                                                return n;
                                            })(N.nodesRef.current, p).find((e) => {
                                                var r, n;
                                                return (null == (r = e.context) ? void 0 : r.elements.floating) === t || (null == (n = e.context) ? void 0 : n.elements.domReference) === t;
                                            })))
                                );
                                t && r && !L.current && t !== tB() && ((j.current = !0), b(!1, e));
                            });
                        }
                    }, [n, y, v, s, p, N, T, b, u]),
                    c.useEffect(() => {
                        var e;
                        if (n) return;
                        let t = Array.from((null == T || null == (e = T.portalNode) ? void 0 : e.querySelectorAll("[" + tp("portal") + "]")) || []);
                        if (v) {
                            let e = [v, ...t, R.current, M.current, E.current.includes("reference") || w ? y : null].filter((e) => null != e),
                                r = s || w ? tN(e, k, !k) : tN(e);
                            return () => {
                                r();
                            };
                        }
                    }, [n, y, v, s, E, T, w, k]),
                    tt(() => {
                        if (n || !v) return;
                        let e = ed(ex(v));
                        queueMicrotask(() => {
                            let t = D(v),
                                r = C.current,
                                n = ("number" == typeof r ? t[r] : r.current) || v,
                                o = eu(v, e);
                            x || o || !f || te(n, { preventScroll: n === v });
                        });
                    }, [n, f, v, x, D, C]),
                    tt(() => {
                        if (n || !v) return;
                        let e = !1,
                            t = ex(v),
                            r = ed(t),
                            o = h.current;
                        function a(t) {
                            let { reason: r, event: n, nested: o } = t;
                            "escape-key" === r && g.domReference.current && tW(g.domReference.current),
                                "hover" === r && "mouseleave" === n.type && (j.current = !0),
                                "outside-press" === r && (o ? ((j.current = !1), (e = !0)) : (j.current = !(ep(n) || eb(n))));
                        }
                        return (
                            tW(r),
                            m.on("openchange", a),
                            () => {
                                m.off("openchange", a);
                                let r = ed(t),
                                    n =
                                        eu(v, r) ||
                                        (N &&
                                            ty(N.nodesRef.current, p).some((e) => {
                                                var t;
                                                return eu(null == (t = e.context) ? void 0 : t.elements.floating, r);
                                            }));
                                (n || (o.openEvent && ["click", "mousedown"].includes(o.openEvent.type))) && g.domReference.current && tW(g.domReference.current);
                                let l = tB();
                                S.current && !j.current && (0, ec.Re)(l) && (l === r || r === t.body || n) && te(l, { cancelPrevious: !1, preventScroll: e });
                            }
                        );
                    }, [n, v, S, h, g, m, N, p]),
                    tt(() => {
                        if (!n && T)
                            return (
                                T.setFocusManagerState({ modal: s, closeOnFocusOut: u, open: f, onOpenChange: b, refs: g }),
                                () => {
                                    T.setFocusManagerState(null);
                                }
                            );
                    }, [n, T, s, f, b, g, u]),
                    tt(() => {
                        if (n || !v || "function" != typeof MutationObserver || x) return;
                        let e = () => {
                            let e = v.getAttribute("tabindex");
                            E.current.includes("floating") || (ed(ex(v)) !== g.domReference.current && 0 === O().length) ? "0" !== e && v.setAttribute("tabindex", "0") : "-1" !== e && v.setAttribute("tabindex", "-1");
                        };
                        e();
                        let t = new MutationObserver(e);
                        return (
                            t.observe(v, { childList: !0, subtree: !0, attributes: !0 }),
                            () => {
                                t.disconnect();
                            }
                        );
                    }, [n, v, g, E, O, x]);
                let I = !n && k && (P || s);
                return c.createElement(
                    c.Fragment,
                    null,
                    I &&
                        c.createElement(tD, {
                            "data-type": "inside",
                            ref: null == T ? void 0 : T.beforeInsideRef,
                            onFocus: (e) => {
                                if (s) {
                                    let e = D();
                                    te("reference" === o[0] ? e[0] : e[e.length - 1]);
                                } else if (null != T && T.preserveTabOrder && T.portalNode) {
                                    if (((j.current = !1), tL(e, T.portalNode))) {
                                        let e = tM() || y;
                                        null == e || e.focus();
                                    } else {
                                        var t;
                                        null == (t = T.beforeOutsideRef.current) || t.focus();
                                    }
                                }
                            },
                        }),
                    !w && A("start"),
                    r,
                    A("end"),
                    I &&
                        c.createElement(tD, {
                            "data-type": "inside",
                            ref: null == T ? void 0 : T.afterInsideRef,
                            onFocus: (e) => {
                                if (s) te(D()[0]);
                                else if (null != T && T.preserveTabOrder && T.portalNode) {
                                    if ((u && (j.current = !0), tL(e, T.portalNode))) {
                                        let e = tj() || y;
                                        null == e || e.focus();
                                    } else {
                                        var t;
                                        null == (t = T.afterOutsideRef.current) || t.focus();
                                    }
                                }
                            },
                        })
                );
            }
            let tK = new Set(),
                tH = c.forwardRef(function (e, t) {
                    let { lockScroll: r = !1, ...n } = e,
                        o = tc();
                    return (
                        tt(() => {
                            if (!r) return;
                            tK.add(o);
                            let e = /iP(hone|ad|od)|iOS/.test(ef()),
                                t = document.body.style,
                                n = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft ? "paddingLeft" : "paddingRight",
                                a = window.innerWidth - document.documentElement.clientWidth,
                                l = t.left ? parseFloat(t.left) : window.pageXOffset,
                                i = t.top ? parseFloat(t.top) : window.pageYOffset;
                            if (((t.overflow = "hidden"), a && (t[n] = a + "px"), e)) {
                                var s, c;
                                let e = (null == (s = window.visualViewport) ? void 0 : s.offsetLeft) || 0;
                                Object.assign(t, { position: "fixed", top: -(i - Math.floor((null == (c = window.visualViewport) ? void 0 : c.offsetTop) || 0)) + "px", left: -(l - Math.floor(e)) + "px", right: "0" });
                            }
                            return () => {
                                tK.delete(o), 0 === tK.size && (Object.assign(t, { overflow: "", [n]: "" }), e && (Object.assign(t, { position: "", top: "", left: "", right: "" }), window.scrollTo(l, i)));
                            };
                        }, [o, r]),
                        c.createElement("div", ta({ ref: t }, n, { style: { position: "fixed", overflow: "auto", top: 0, right: 0, bottom: 0, left: 0, ...n.style } }))
                    );
                });
            function t$(e) {
                return (0, ec.Re)(e.target) && "BUTTON" === e.target.tagName;
            }
            function tU(e, t) {
                void 0 === t && (t = {});
                let {
                        open: r,
                        onOpenChange: n,
                        dataRef: o,
                        elements: { domReference: a },
                    } = e,
                    { enabled: l = !0, event: i = "click", toggle: s = !0, ignoreMouse: d = !1, keyboardHandlers: u = !0 } = t,
                    f = c.useRef(),
                    g = c.useRef(!1);
                return c.useMemo(
                    () =>
                        l
                            ? {
                                  reference: {
                                      onPointerDown(e) {
                                          f.current = e.pointerType;
                                      },
                                      onMouseDown(e) {
                                          0 !== e.button ||
                                              (ev(f.current, !0) && d) ||
                                              "click" === i ||
                                              (r && s && (!o.current.openEvent || "mousedown" === o.current.openEvent.type) ? n(!1, e.nativeEvent, "click") : (e.preventDefault(), n(!0, e.nativeEvent, "click")));
                                      },
                                      onClick(e) {
                                          if ("mousedown" === i && f.current) {
                                              f.current = void 0;
                                              return;
                                          }
                                          (ev(f.current, !0) && d) || (r && s && (!o.current.openEvent || "click" === o.current.openEvent.type) ? n(!1, e.nativeEvent, "click") : n(!0, e.nativeEvent, "click"));
                                      },
                                      onKeyDown(e) {
                                          (f.current = void 0),
                                              e.defaultPrevented ||
                                                  !u ||
                                                  t$(e) ||
                                                  (" " !== e.key || eE(a) || (e.preventDefault(), (g.current = !0)), "Enter" === e.key && (r && s ? n(!1, e.nativeEvent, "click") : n(!0, e.nativeEvent, "click")));
                                      },
                                      onKeyUp(e) {
                                          !(e.defaultPrevented || !u || t$(e) || eE(a)) && " " === e.key && g.current && ((g.current = !1), r && s ? n(!1, e.nativeEvent, "click") : n(!0, e.nativeEvent, "click"));
                                      },
                                  },
                              }
                            : {},
                    [l, o, i, d, u, a, s, r, n]
                );
            }
            let tY = { pointerdown: "onPointerDown", mousedown: "onMouseDown", click: "onClick" },
                tG = { pointerdown: "onPointerDownCapture", mousedown: "onMouseDownCapture", click: "onClickCapture" },
                tX = (e) => {
                    var t, r;
                    return { escapeKey: "boolean" == typeof e ? e : null != (t = null == e ? void 0 : e.escapeKey) && t, outsidePress: "boolean" == typeof e ? e : null == (r = null == e ? void 0 : e.outsidePress) || r };
                };
            function tq(e, t) {
                void 0 === t && (t = {});
                let {
                        open: r,
                        onOpenChange: n,
                        nodeId: o,
                        elements: { reference: a, domReference: l, floating: i },
                        dataRef: s,
                    } = e,
                    { enabled: d = !0, escapeKey: u = !0, outsidePress: f = !0, outsidePressEvent: g = "pointerdown", referencePress: p = !1, referencePressEvent: b = "pointerdown", ancestorScroll: m = !1, bubbles: h, capture: y } = t,
                    v = tg(),
                    x = eQ("function" == typeof f ? f : () => !1),
                    w = "function" == typeof f ? x : f,
                    k = c.useRef(!1),
                    E = c.useRef(!1),
                    { escapeKey: C, outsidePress: S } = tX(h),
                    { escapeKey: N, outsidePress: T } = tX(y),
                    R = eQ((e) => {
                        if (!r || !d || !u || "Escape" !== e.key) return;
                        let t = v ? ty(v.nodesRef.current, o) : [];
                        if (!C && (e.stopPropagation(), t.length > 0)) {
                            let e = !0;
                            if (
                                (t.forEach((t) => {
                                    var r;
                                    if (null != (r = t.context) && r.open && !t.context.dataRef.current.__escapeKeyBubbles) {
                                        e = !1;
                                        return;
                                    }
                                }),
                                !e)
                            )
                                return;
                        }
                        n(!1, "nativeEvent" in e ? e.nativeEvent : e, "escape-key");
                    }),
                    M = eQ((e) => {
                        var t;
                        let r = () => {
                            var t;
                            R(e), null == (t = ek(e)) || t.removeEventListener("keydown", r);
                        };
                        null == (t = ek(e)) || t.addEventListener("keydown", r);
                    }),
                    j = eQ((e) => {
                        let t = k.current;
                        k.current = !1;
                        let r = E.current;
                        if (((E.current = !1), ("click" === g && r) || t || ("function" == typeof w && !w(e)))) return;
                        let a = ek(e),
                            s = "[" + tp("inert") + "]",
                            c = ex(i).querySelectorAll(s),
                            d = (0, ec.kK)(a) ? a : null;
                        for (; d && !(0, ec.Py)(d); ) {
                            let e = (0, ec.Ow)(d);
                            if ((0, ec.Py)(e) || !(0, ec.kK)(e)) break;
                            d = e;
                        }
                        if (c.length && (0, ec.kK)(a) && !a.matches("html,body") && !eu(a, i) && Array.from(c).every((e) => !eu(d, e))) return;
                        if ((0, ec.Re)(a) && i) {
                            let t = a.clientWidth > 0 && a.scrollWidth > a.clientWidth,
                                r = a.clientHeight > 0 && a.scrollHeight > a.clientHeight,
                                n = r && e.offsetX > a.clientWidth;
                            if ((r && "rtl" === (0, ec.Dx)(a).direction && (n = e.offsetX <= a.offsetWidth - a.clientWidth), n || (t && e.offsetY > a.clientHeight))) return;
                        }
                        let u =
                            v &&
                            ty(v.nodesRef.current, o).some((t) => {
                                var r;
                                return ew(e, null == (r = t.context) ? void 0 : r.elements.floating);
                            });
                        if (ew(e, i) || ew(e, l) || u) return;
                        let f = v ? ty(v.nodesRef.current, o) : [];
                        if (f.length > 0) {
                            let e = !0;
                            if (
                                (f.forEach((t) => {
                                    var r;
                                    if (null != (r = t.context) && r.open && !t.context.dataRef.current.__outsidePressBubbles) {
                                        e = !1;
                                        return;
                                    }
                                }),
                                !e)
                            )
                                return;
                        }
                        n(!1, e, "outside-press");
                    }),
                    L = eQ((e) => {
                        var t;
                        let r = () => {
                            var t;
                            j(e), null == (t = ek(e)) || t.removeEventListener(g, r);
                        };
                        null == (t = ek(e)) || t.addEventListener(g, r);
                    });
                return (
                    c.useEffect(() => {
                        if (!r || !d) return;
                        function e(e) {
                            n(!1, e, "ancestor-scroll");
                        }
                        (s.current.__escapeKeyBubbles = C), (s.current.__outsidePressBubbles = S);
                        let t = ex(i);
                        u && t.addEventListener("keydown", N ? M : R, N), w && t.addEventListener(g, T ? L : j, T);
                        let o = [];
                        return (
                            m && ((0, ec.kK)(l) && (o = (0, ec.Kx)(l)), (0, ec.kK)(i) && (o = o.concat((0, ec.Kx)(i))), !(0, ec.kK)(a) && a && a.contextElement && (o = o.concat((0, ec.Kx)(a.contextElement)))),
                            (o = o.filter((e) => {
                                var r;
                                return e !== (null == (r = t.defaultView) ? void 0 : r.visualViewport);
                            })).forEach((t) => {
                                t.addEventListener("scroll", e, { passive: !0 });
                            }),
                            () => {
                                u && t.removeEventListener("keydown", N ? M : R, N),
                                    w && t.removeEventListener(g, T ? L : j, T),
                                    o.forEach((t) => {
                                        t.removeEventListener("scroll", e);
                                    });
                            }
                        );
                    }, [s, i, l, a, u, w, g, r, n, m, d, C, S, R, N, M, j, T, L]),
                    c.useEffect(() => {
                        k.current = !1;
                    }, [w, g]),
                    c.useMemo(
                        () =>
                            d
                                ? {
                                      reference: {
                                          onKeyDown: R,
                                          [tY[b]]: (e) => {
                                              p && n(!1, e.nativeEvent, "reference-press");
                                          },
                                      },
                                      floating: {
                                          onKeyDown: R,
                                          onMouseDown() {
                                              E.current = !0;
                                          },
                                          onMouseUp() {
                                              E.current = !0;
                                          },
                                          [tG[g]]: () => {
                                              k.current = !0;
                                          },
                                      },
                                  }
                                : {},
                        [d, p, g, b, n, R]
                    )
                );
            }
            function tJ(e) {
                var t;
                void 0 === e && (e = {});
                let { open: r = !1, onOpenChange: n, nodeId: o } = e,
                    [a, l] = c.useState(null),
                    i = (null == (t = e.elements) ? void 0 : t.reference) || a,
                    s = (0, eT.YF)(e),
                    d = tg(),
                    u = null != tf(),
                    f = eQ((e, t, r) => {
                        e && (p.current.openEvent = t), b.emit("openchange", { open: e, event: t, reason: r, nested: u }), null == n || n(e, t, r);
                    }),
                    g = c.useRef(null),
                    p = c.useRef({}),
                    b = c.useState(() =>
                        (function () {
                            let e = new Map();
                            return {
                                emit(t, r) {
                                    var n;
                                    null == (n = e.get(t)) || n.forEach((e) => e(r));
                                },
                                on(t, r) {
                                    e.set(t, [...(e.get(t) || []), r]);
                                },
                                off(t, r) {
                                    var n;
                                    e.set(t, (null == (n = e.get(t)) ? void 0 : n.filter((e) => e !== r)) || []);
                                },
                            };
                        })()
                    )[0],
                    m = tc(),
                    h = c.useCallback(
                        (e) => {
                            let t = (0, ec.kK)(e) ? { getBoundingClientRect: () => e.getBoundingClientRect(), contextElement: e } : e;
                            s.refs.setReference(t);
                        },
                        [s.refs]
                    ),
                    y = c.useCallback(
                        (e) => {
                            ((0, ec.kK)(e) || null === e) && ((g.current = e), l(e)), ((0, ec.kK)(s.refs.reference.current) || null === s.refs.reference.current || (null !== e && !(0, ec.kK)(e))) && s.refs.setReference(e);
                        },
                        [s.refs]
                    ),
                    v = c.useMemo(() => ({ ...s.refs, setReference: y, setPositionReference: h, domReference: g }), [s.refs, y, h]),
                    x = c.useMemo(() => ({ ...s.elements, domReference: i }), [s.elements, i]),
                    w = c.useMemo(() => ({ ...s, refs: v, elements: x, dataRef: p, nodeId: o, floatingId: m, events: b, open: r, onOpenChange: f }), [s, o, m, b, r, f, v, x]);
                return (
                    tt(() => {
                        let e = null == d ? void 0 : d.nodesRef.current.find((e) => e.id === o);
                        e && (e.context = w);
                    }),
                    c.useMemo(() => ({ ...s, context: w, refs: v, elements: x }), [s, v, x, w])
                );
            }
            let tQ = "active",
                t0 = "selected";
            function t1(e, t, r) {
                let n = new Map(),
                    o = "item" === r,
                    a = e;
                if (o && e) {
                    let { [tQ]: t, [t0]: r, ...n } = e;
                    a = n;
                }
                return {
                    ...("floating" === r && { tabIndex: -1 }),
                    ...a,
                    ...t
                        .map((t) => {
                            let n = t ? t[r] : null;
                            return "function" == typeof n ? (e ? n(e) : null) : n;
                        })
                        .concat(e)
                        .reduce(
                            (e, t) => (
                                t &&
                                    Object.entries(t).forEach((t) => {
                                        let [r, a] = t;
                                        if (!(o && [tQ, t0].includes(r))) {
                                            if (0 === r.indexOf("on")) {
                                                if ((n.has(r) || n.set(r, []), "function" == typeof a)) {
                                                    var l;
                                                    null == (l = n.get(r)) || l.push(a),
                                                        (e[r] = function () {
                                                            for (var e, t = arguments.length, o = Array(t), a = 0; a < t; a++) o[a] = arguments[a];
                                                            return null == (e = n.get(r)) ? void 0 : e.map((e) => e(...o)).find((e) => void 0 !== e);
                                                        });
                                                }
                                            } else e[r] = a;
                                        }
                                    }),
                                e
                            ),
                            {}
                        ),
                };
            }
            function t5(e) {
                void 0 === e && (e = []);
                let t = e,
                    r = c.useCallback((t) => t1(t, e, "reference"), t),
                    n = c.useCallback((t) => t1(t, e, "floating"), t),
                    o = c.useCallback(
                        (t) => t1(t, e, "item"),
                        e.map((e) => (null == e ? void 0 : e.item))
                    );
                return c.useMemo(() => ({ getReferenceProps: r, getFloatingProps: n, getItemProps: o }), [r, n, o]);
            }
            let t2 = !1;
            function t6(e, t, r) {
                switch (e) {
                    case "vertical":
                        return t;
                    case "horizontal":
                        return r;
                    default:
                        return t || r;
                }
            }
            function t4(e, t) {
                return t6(t, e === e0 || e === e1, e === e5 || e === e2);
            }
            function t7(e, t, r) {
                return t6(t, e === e1, r ? e === e5 : e === e2) || "Enter" === e || " " === e || "" === e;
            }
            function t3(e, t, r) {
                return t6(t, r ? e === e2 : e === e5, e === e0);
            }
            let t9 = new Map([
                ["select", "listbox"],
                ["combobox", "listbox"],
                ["label", !1],
            ]);
            function t8(e, t) {
                var r;
                void 0 === t && (t = {});
                let { open: n, floatingId: o } = e,
                    { enabled: a = !0, role: l = "dialog" } = t,
                    i = null != (r = t9.get(l)) ? r : l,
                    s = tc(),
                    d = null != tf();
                return c.useMemo(() => {
                    if (!a) return {};
                    let e = { id: o, ...(i && { role: i }) };
                    return "tooltip" === i || "label" === l
                        ? { reference: { ["aria-" + ("label" === l ? "labelledby" : "describedby")]: n ? o : void 0 }, floating: e }
                        : {
                              reference: {
                                  "aria-expanded": n ? "true" : "false",
                                  "aria-haspopup": "alertdialog" === i ? "dialog" : i,
                                  "aria-controls": n ? o : void 0,
                                  ...("listbox" === i && { role: "combobox" }),
                                  ...("menu" === i && { id: s }),
                                  ...("menu" === i && d && { role: "menuitem" }),
                                  ...("select" === l && { "aria-autocomplete": "none" }),
                                  ...("combobox" === l && { "aria-autocomplete": "list" }),
                              },
                              floating: { ...e, ...("menu" === i && { "aria-labelledby": s }) },
                              item(e) {
                                  let { active: t, selected: r } = e,
                                      n = { role: "option", ...(t && { id: o + "-option" }) };
                                  switch (l) {
                                      case "select":
                                          return { ...n, "aria-selected": t && r };
                                      case "combobox":
                                          return { ...n, ...(t && { "aria-selected": !0 }) };
                                  }
                                  return {};
                              },
                          };
                }, [a, l, i, n, o, s, d]);
            }
            function re(e, t) {
                let [r, n] = e,
                    o = !1,
                    a = t.length;
                for (let e = 0, l = a - 1; e < a; l = e++) {
                    let [a, i] = t[e] || [0, 0],
                        [s, c] = t[l] || [0, 0];
                    i >= n != c >= n && r <= ((s - a) * (n - i)) / (c - i) + a && (o = !o);
                }
                return o;
            }
            var rt = r(1812),
                rr = r(9074);
            let rn = ({ arrowRef: e, placement: t }) => {
                    let r = [];
                    return r.push((0, rr.cv)(8)), r.push("auto" === t ? (0, rt.X5)() : (0, rt.RR)()), r.push((0, rt.uY)({ padding: 8 })), e?.current && r.push((0, eT.x7)({ element: e.current })), r;
                },
                ro = ({ placement: e }) => ("auto" === e ? void 0 : e),
                ra = ({ placement: e }) => ({ top: "bottom", right: "left", bottom: "top", left: "right" }[e.split("-")[0]]),
                rl = ({ open: e, arrowRef: t, placement: r = "top", setOpen: n }) => tJ({ placement: ro({ placement: r }), open: e, onOpenChange: n, whileElementsMounted: rt.Me, middleware: rn({ placement: r, arrowRef: t }) }),
                ri = ({ context: e, trigger: t, role: r = "tooltip", interactions: n = [] }) =>
                    t5([
                        tU(e, { enabled: "click" === t }),
                        (function (e, t) {
                            void 0 === t && (t = {});
                            let {
                                    open: r,
                                    onOpenChange: n,
                                    dataRef: o,
                                    events: a,
                                    elements: { domReference: l, floating: i },
                                    refs: s,
                                } = e,
                                { enabled: d = !0, delay: u = 0, handleClose: f = null, mouseOnly: g = !1, restMs: p = 0, move: b = !0 } = t,
                                m = tg(),
                                h = tf(),
                                y = tb(f),
                                v = tb(u),
                                x = c.useRef(),
                                w = c.useRef(),
                                k = c.useRef(),
                                E = c.useRef(),
                                C = c.useRef(!0),
                                S = c.useRef(!1),
                                N = c.useRef(() => {}),
                                T = c.useCallback(() => {
                                    var e;
                                    let t = null == (e = o.current.openEvent) ? void 0 : e.type;
                                    return (null == t ? void 0 : t.includes("mouse")) && "mousedown" !== t;
                                }, [o]);
                            c.useEffect(() => {
                                if (d)
                                    return (
                                        a.on("openchange", e),
                                        () => {
                                            a.off("openchange", e);
                                        }
                                    );
                                function e(e) {
                                    let { open: t } = e;
                                    t || (clearTimeout(w.current), clearTimeout(E.current), (C.current = !0));
                                }
                            }, [d, a]),
                                c.useEffect(() => {
                                    if (!d || !y.current || !r) return;
                                    function e(e) {
                                        T() && n(!1, e, "hover");
                                    }
                                    let t = ex(i).documentElement;
                                    return (
                                        t.addEventListener("mouseleave", e),
                                        () => {
                                            t.removeEventListener("mouseleave", e);
                                        }
                                    );
                                }, [i, r, n, d, y, T]);
                            let R = c.useCallback(
                                    function (e, t, r) {
                                        void 0 === t && (t = !0), void 0 === r && (r = "hover");
                                        let o = th(v.current, "close", x.current);
                                        o && !k.current ? (clearTimeout(w.current), (w.current = setTimeout(() => n(!1, e, r), o))) : t && (clearTimeout(w.current), n(!1, e, r));
                                    },
                                    [v, n]
                                ),
                                M = c.useCallback(() => {
                                    N.current(), (k.current = void 0);
                                }, []),
                                j = c.useCallback(() => {
                                    if (S.current) {
                                        let e = ex(s.floating.current).body;
                                        (e.style.pointerEvents = ""), e.removeAttribute(tm), (S.current = !1);
                                    }
                                }, [s]);
                            return (
                                c.useEffect(() => {
                                    if (d && (0, ec.kK)(l))
                                        return (
                                            r && l.addEventListener("mouseleave", c),
                                            null == i || i.addEventListener("mouseleave", c),
                                            b && l.addEventListener("mousemove", a, { once: !0 }),
                                            l.addEventListener("mouseenter", a),
                                            l.addEventListener("mouseleave", s),
                                            () => {
                                                r && l.removeEventListener("mouseleave", c),
                                                    null == i || i.removeEventListener("mouseleave", c),
                                                    b && l.removeEventListener("mousemove", a),
                                                    l.removeEventListener("mouseenter", a),
                                                    l.removeEventListener("mouseleave", s);
                                            }
                                        );
                                    function t() {
                                        return !!o.current.openEvent && ["click", "mousedown"].includes(o.current.openEvent.type);
                                    }
                                    function a(e) {
                                        if ((clearTimeout(w.current), (C.current = !1), (g && !ev(x.current)) || (p > 0 && 0 === th(v.current, "open")))) return;
                                        let t = th(v.current, "open", x.current);
                                        t
                                            ? (w.current = setTimeout(() => {
                                                  n(!0, e, "hover");
                                              }, t))
                                            : n(!0, e, "hover");
                                    }
                                    function s(n) {
                                        if (t()) return;
                                        N.current();
                                        let o = ex(i);
                                        if ((clearTimeout(E.current), y.current)) {
                                            r || clearTimeout(w.current),
                                                (k.current = y.current({
                                                    ...e,
                                                    tree: m,
                                                    x: n.clientX,
                                                    y: n.clientY,
                                                    onClose() {
                                                        j(), M(), R(n, !0, "safe-polygon");
                                                    },
                                                }));
                                            let t = k.current;
                                            o.addEventListener("mousemove", t),
                                                (N.current = () => {
                                                    o.removeEventListener("mousemove", t);
                                                });
                                            return;
                                        }
                                        ("touch" === x.current && eu(i, n.relatedTarget)) || R(n);
                                    }
                                    function c(r) {
                                        t() ||
                                            null == y.current ||
                                            y.current({
                                                ...e,
                                                tree: m,
                                                x: r.clientX,
                                                y: r.clientY,
                                                onClose() {
                                                    j(), M(), R(r);
                                                },
                                            })(r);
                                    }
                                }, [l, i, d, e, g, p, b, R, M, j, n, r, m, v, y, o]),
                                tt(() => {
                                    var e, t;
                                    if (d && r && null != (e = y.current) && e.__options.blockPointerEvents && T()) {
                                        let e = ex(i).body;
                                        if ((e.setAttribute(tm, ""), (e.style.pointerEvents = "none"), (S.current = !0), (0, ec.kK)(l) && i)) {
                                            let e = null == m || null == (t = m.nodesRef.current.find((e) => e.id === h)) || null == (t = t.context) ? void 0 : t.elements.floating;
                                            return (
                                                e && (e.style.pointerEvents = ""),
                                                (l.style.pointerEvents = "auto"),
                                                (i.style.pointerEvents = "auto"),
                                                () => {
                                                    (l.style.pointerEvents = ""), (i.style.pointerEvents = "");
                                                }
                                            );
                                        }
                                    }
                                }, [d, r, h, i, l, m, y, T]),
                                tt(() => {
                                    r || ((x.current = void 0), M(), j());
                                }, [r, M, j]),
                                c.useEffect(
                                    () => () => {
                                        M(), clearTimeout(w.current), clearTimeout(E.current), j();
                                    },
                                    [d, l, M, j]
                                ),
                                c.useMemo(() => {
                                    if (!d) return {};
                                    function e(e) {
                                        x.current = e.pointerType;
                                    }
                                    return {
                                        reference: {
                                            onPointerDown: e,
                                            onPointerEnter: e,
                                            onMouseMove(e) {
                                                r ||
                                                    0 === p ||
                                                    (clearTimeout(E.current),
                                                    (E.current = setTimeout(() => {
                                                        C.current || n(!0, e.nativeEvent, "hover");
                                                    }, p)));
                                            },
                                        },
                                        floating: {
                                            onMouseEnter() {
                                                clearTimeout(w.current);
                                            },
                                            onMouseLeave(e) {
                                                R(e.nativeEvent, !1);
                                            },
                                        },
                                    };
                                }, [d, p, r, n, R])
                            );
                        })(e, {
                            enabled: "hover" === t,
                            handleClose: (function (e) {
                                let t;
                                void 0 === e && (e = {});
                                let { buffer: r = 0.5, blockPointerEvents: n = !1, requireIntent: o = !0 } = e,
                                    a = !1,
                                    l = null,
                                    i = null,
                                    s = performance.now(),
                                    c = (e) => {
                                        let { x: n, y: c, placement: d, elements: u, onClose: f, nodeId: g, tree: p } = e;
                                        return function (e) {
                                            function b() {
                                                clearTimeout(t), f();
                                            }
                                            if ((clearTimeout(t), !u.domReference || !u.floating || null == d || null == n || null == c)) return;
                                            let { clientX: m, clientY: h } = e,
                                                y = [m, h],
                                                v = ek(e),
                                                x = "mouseleave" === e.type,
                                                w = eu(u.floating, v),
                                                k = eu(u.domReference, v),
                                                E = u.domReference.getBoundingClientRect(),
                                                C = u.floating.getBoundingClientRect(),
                                                S = d.split("-")[0],
                                                N = n > C.right - C.width / 2,
                                                T = c > C.bottom - C.height / 2,
                                                R = y[0] >= E.x && y[0] <= E.x + E.width && y[1] >= E.y && y[1] <= E.y + E.height,
                                                M = C.width > E.width,
                                                j = C.height > E.height,
                                                L = (M ? E : C).left,
                                                P = (M ? E : C).right,
                                                O = (j ? E : C).top,
                                                D = (j ? E : C).bottom;
                                            if (w && ((a = !0), !x)) return;
                                            if ((k && (a = !1), k && !x)) {
                                                a = !0;
                                                return;
                                            }
                                            if (
                                                (x && (0, ec.kK)(e.relatedTarget) && eu(u.floating, e.relatedTarget)) ||
                                                (p &&
                                                    ty(p.nodesRef.current, g).some((e) => {
                                                        let { context: t } = e;
                                                        return null == t ? void 0 : t.open;
                                                    }))
                                            )
                                                return;
                                            if (("top" === S && c >= E.bottom - 1) || ("bottom" === S && c <= E.top + 1) || ("left" === S && n >= E.right - 1) || ("right" === S && n <= E.left + 1)) return b();
                                            let A = [];
                                            switch (S) {
                                                case "top":
                                                    A = [
                                                        [L, E.top + 1],
                                                        [L, C.bottom - 1],
                                                        [P, C.bottom - 1],
                                                        [P, E.top + 1],
                                                    ];
                                                    break;
                                                case "bottom":
                                                    A = [
                                                        [L, C.top + 1],
                                                        [L, E.bottom - 1],
                                                        [P, E.bottom - 1],
                                                        [P, C.top + 1],
                                                    ];
                                                    break;
                                                case "left":
                                                    A = [
                                                        [C.right - 1, D],
                                                        [C.right - 1, O],
                                                        [E.left + 1, O],
                                                        [E.left + 1, D],
                                                    ];
                                                    break;
                                                case "right":
                                                    A = [
                                                        [E.right - 1, D],
                                                        [E.right - 1, O],
                                                        [C.left + 1, O],
                                                        [C.left + 1, D],
                                                    ];
                                            }
                                            if (!re([m, h], A)) {
                                                if (a && !R) return b();
                                                if (!x && o) {
                                                    let t = (function (e, t) {
                                                        let r = performance.now(),
                                                            n = r - s;
                                                        if (null === l || null === i || 0 === n) return (l = e), (i = t), (s = r), null;
                                                        let o = e - l,
                                                            a = t - i;
                                                        return (l = e), (i = t), (s = r), Math.sqrt(o * o + a * a) / n;
                                                    })(e.clientX, e.clientY);
                                                    if (null !== t && t < 0.1) return b();
                                                }
                                                re(
                                                    [m, h],
                                                    (function (e) {
                                                        let [t, n] = e;
                                                        switch (S) {
                                                            case "top": {
                                                                let e = [
                                                                    [C.left, N ? C.bottom - r : M ? C.bottom - r : C.top],
                                                                    [C.right, N ? (M ? C.bottom - r : C.top) : C.bottom - r],
                                                                ];
                                                                return [[M ? t + r / 2 : N ? t + 4 * r : t - 4 * r, n + r + 1], [M ? t - r / 2 : N ? t + 4 * r : t - 4 * r, n + r + 1], ...e];
                                                            }
                                                            case "bottom": {
                                                                let e = [
                                                                    [C.left, N ? C.top + r : M ? C.top + r : C.bottom],
                                                                    [C.right, N ? (M ? C.top + r : C.bottom) : C.top + r],
                                                                ];
                                                                return [[M ? t + r / 2 : N ? t + 4 * r : t - 4 * r, n - r], [M ? t - r / 2 : N ? t + 4 * r : t - 4 * r, n - r], ...e];
                                                            }
                                                            case "left":
                                                                return [
                                                                    [T ? C.right - r : j ? C.right - r : C.left, C.top],
                                                                    [T ? (j ? C.right - r : C.left) : C.right - r, C.bottom],
                                                                    [t + r + 1, j ? n + r / 2 : T ? n + 4 * r : n - 4 * r],
                                                                    [t + r + 1, j ? n - r / 2 : T ? n + 4 * r : n - 4 * r],
                                                                ];
                                                            case "right": {
                                                                let e = [
                                                                    [T ? C.left + r : j ? C.left + r : C.right, C.top],
                                                                    [T ? (j ? C.left + r : C.right) : C.left + r, C.bottom],
                                                                ];
                                                                return [[t - r, j ? n + r / 2 : T ? n + 4 * r : n - 4 * r], [t - r, j ? n - r / 2 : T ? n + 4 * r : n - 4 * r], ...e];
                                                            }
                                                        }
                                                    })([n, c])
                                                )
                                                    ? !a && o && (t = window.setTimeout(b, 40))
                                                    : b();
                                            }
                                        };
                                    };
                                return (c.__options = { blockPointerEvents: n }), c;
                            })(),
                        }),
                        tq(e),
                        t8(e, { role: r }),
                        ...n,
                    ]),
                rs = (0, c.createContext)(void 0);
            function rc() {
                let e = (0, c.useContext)(rs);
                if (!e) throw Error("useDropdownContext should be used within the DropdownContext provider!");
                return e;
            }
            let rd = (e) => {
                    var t;
                    let { className: r, theme: n = {}, ...o } = e,
                        { theme: a } = rc(),
                        l = null !== (t = n.divider) && void 0 !== t ? t : a.floating.divider;
                    return (0, s.jsx)("div", { className: (0, f.m6)(l, r), ...o });
                },
                ru = (e) => {
                    var t;
                    let { children: r, className: n, theme: o = {}, ...a } = e,
                        { theme: l } = rc(),
                        i = null !== (t = o.header) && void 0 !== t ? t : l.floating.header;
                    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)("div", { className: (0, f.m6)(i, n), ...a, children: r }), (0, s.jsx)(rd, {})] });
                },
                rf = { top: u.lVW, right: u.yoF, bottom: u.kzR, left: u.PSe },
                rg = (e) => {
                    let { refs: t, children: r, inline: n, theme: o, disabled: a, setButtonWidth: l, getReferenceProps: i, renderTrigger: d, ...u } = e,
                        f = t.reference,
                        g = i();
                    if (
                        ((0, c.useEffect)(() => {
                            f.current && (null == l || l(f.current.clientWidth));
                        }, [f, l]),
                        d)
                    ) {
                        let e = d(o);
                        return (0, c.cloneElement)(e, { ref: t.setReference, disabled: a, ...g, ...e.props });
                    }
                    return n
                        ? (0, s.jsx)("button", { type: "button", ref: t.setReference, className: null == o ? void 0 : o.inlineWrapper, disabled: a, ...g, children: r })
                        : (0, s.jsx)(A, { ...u, disabled: a, type: "button", ref: t.setReference, ...g, children: r });
                },
                rp = (e) => {
                    let { children: t, className: r, dismissOnClick: n = !0, theme: o = {}, renderTrigger: a, ...l } = e,
                        [i, d] = (0, c.useState)(!1),
                        [g, p] = (0, c.useState)(null),
                        [m, h] = (0, c.useState)(null),
                        [y, x] = (0, c.useState)(void 0),
                        w = (0, c.useRef)([]),
                        k = (0, c.useRef)([]),
                        E = b(v().dropdown, o),
                        C = l["data-testid"] || "flowbite-dropdown-target",
                        { placement: S = l.inline ? "bottom-start" : "bottom", trigger: N = "click", label: T, inline: R, arrowIcon: M = !0, ...j } = l,
                        L = (0, c.useCallback)((e) => {
                            h(e), d(!1);
                        }, []),
                        P = (0, c.useCallback)(
                            (e) => {
                                i ? p(e) : L(e);
                            },
                            [i, L]
                        ),
                        { context: O, floatingStyles: D, refs: A } = rl({ open: i, setOpen: d, placement: S }),
                        I = (function (e, t) {
                            let {
                                    open: r,
                                    onOpenChange: n,
                                    refs: o,
                                    elements: { domReference: a, floating: l },
                                } = e,
                                {
                                    listRef: i,
                                    activeIndex: s,
                                    onNavigate: d = () => {},
                                    enabled: u = !0,
                                    selectedIndex: f = null,
                                    allowEscape: g = !1,
                                    loop: p = !1,
                                    nested: b = !1,
                                    rtl: m = !1,
                                    virtual: h = !1,
                                    focusItemOnOpen: y = "auto",
                                    focusItemOnHover: v = !0,
                                    openOnArrowKeyDown: x = !0,
                                    disabledIndices: w,
                                    orientation: k = "vertical",
                                    cols: E = 1,
                                    scrollItemIntoView: C = !0,
                                    virtualItemRef: S,
                                    itemSizes: N,
                                    dense: T = !1,
                                } = t,
                                R = tf(),
                                M = tg(),
                                j = eQ(d),
                                L = c.useRef(y),
                                P = c.useRef(null != f ? f : -1),
                                O = c.useRef(null),
                                D = c.useRef(!0),
                                A = c.useRef(j),
                                I = c.useRef(!!l),
                                _ = c.useRef(!1),
                                z = c.useRef(!1),
                                F = tb(w),
                                W = tb(r),
                                B = tb(C),
                                [Z, V] = c.useState(),
                                [K, H] = c.useState(),
                                $ = eQ(function (e, t, r) {
                                    void 0 === r && (r = !1);
                                    let n = e.current[t.current];
                                    n &&
                                        (h ? (V(n.id), null == M || M.events.emit("virtualfocus", n), S && (S.current = n)) : te(n, { preventScroll: !0, sync: !!(ey() && em()) && (t2 || _.current) }),
                                        requestAnimationFrame(() => {
                                            let e = B.current;
                                            e && n && (r || !D.current) && (null == n.scrollIntoView || n.scrollIntoView("boolean" == typeof e ? { block: "nearest", inline: "nearest" } : e));
                                        }));
                                });
                            tt(() => {
                                document.createElement("div").focus({
                                    get preventScroll() {
                                        return (t2 = !0), !1;
                                    },
                                });
                            }, []),
                                tt(() => {
                                    u && (r && l ? L.current && null != f && ((z.current = !0), (P.current = f), j(f)) : I.current && ((P.current = -1), A.current(null)));
                                }, [u, r, l, f, j]),
                                tt(() => {
                                    if (u && r && l) {
                                        if (null == s) {
                                            if (((_.current = !1), null == f && (I.current && ((P.current = -1), $(i, P)), !I.current && L.current && (null != O.current || (!0 === L.current && null == O.current))))) {
                                                let e = 0,
                                                    t = () => {
                                                        null == i.current[0]
                                                            ? (e < 2 && (e ? requestAnimationFrame : queueMicrotask)(t), e++)
                                                            : ((P.current = null == O.current || t7(O.current, k, m) || b ? e7(i, F.current) : e3(i, F.current)), (O.current = null), j(P.current));
                                                    };
                                                t();
                                            }
                                        } else e4(i, s) || ((P.current = s), $(i, P, z.current), (z.current = !1));
                                    }
                                }, [u, r, l, s, f, b, i, k, m, j, $, F]),
                                tt(() => {
                                    var e;
                                    if (!u || l || !M || h || !I.current) return;
                                    let t = M.nodesRef.current,
                                        r = null == (e = t.find((e) => e.id === R)) || null == (e = e.context) ? void 0 : e.elements.floating,
                                        n = ed(ex(l)),
                                        o = t.some((e) => e.context && eu(e.context.elements.floating, n));
                                    r && !o && D.current && r.focus({ preventScroll: !0 });
                                }, [u, l, M, R, h]),
                                tt(() => {
                                    if (u && M && h && !R)
                                        return (
                                            M.events.on("virtualfocus", e),
                                            () => {
                                                M.events.off("virtualfocus", e);
                                            }
                                        );
                                    function e(e) {
                                        H(e.id), S && (S.current = e);
                                    }
                                }, [u, M, h, R, S]),
                                tt(() => {
                                    (A.current = j), (I.current = !!l);
                                }),
                                tt(() => {
                                    r || (O.current = null);
                                }, [r]);
                            let U = null != s,
                                Y = c.useMemo(() => {
                                    function e(e) {
                                        if (!r) return;
                                        let t = i.current.indexOf(e);
                                        -1 !== t && j(t);
                                    }
                                    return {
                                        onFocus(t) {
                                            let { currentTarget: r } = t;
                                            e(r);
                                        },
                                        onClick: (e) => {
                                            let { currentTarget: t } = e;
                                            return t.focus({ preventScroll: !0 });
                                        },
                                        ...(v && {
                                            onMouseMove(t) {
                                                let { currentTarget: r } = t;
                                                e(r);
                                            },
                                            onPointerLeave(e) {
                                                let { pointerType: t } = e;
                                                D.current && "touch" !== t && ((P.current = -1), $(i, P), j(null), h || te(o.floating.current, { preventScroll: !0 }));
                                            },
                                        }),
                                    };
                                }, [r, o, $, v, i, j, h]);
                            return c.useMemo(() => {
                                if (!u) return {};
                                let e = F.current;
                                function t(t) {
                                    if (((D.current = !1), (_.current = !0), !W.current && t.currentTarget === o.floating.current)) return;
                                    if (b && t3(t.key, k, m)) {
                                        eC(t), n(!1, t.nativeEvent, "list-navigation"), (0, ec.Re)(a) && !h && a.focus();
                                        return;
                                    }
                                    let l = P.current,
                                        s = e7(i, e),
                                        c = e3(i, e);
                                    if (("Home" === t.key && (eC(t), (P.current = s), j(P.current)), "End" === t.key && (eC(t), (P.current = c), j(P.current)), E > 1)) {
                                        var d;
                                        let r = N || Array.from({ length: i.current.length }, () => ({ width: 1, height: 1 })),
                                            n = (function (e, t, r) {
                                                let n = [],
                                                    o = 0;
                                                return (
                                                    e.forEach((e, a) => {
                                                        let { width: l, height: i } = e,
                                                            s = !1;
                                                        for (r && (o = 0); !s; ) {
                                                            let e = [];
                                                            for (let r = 0; r < l; r++) for (let n = 0; n < i; n++) e.push(o + r + n * t);
                                                            (o % t) + l <= t && e.every((e) => null == n[e])
                                                                ? (e.forEach((e) => {
                                                                      n[e] = a;
                                                                  }),
                                                                  (s = !0))
                                                                : o++;
                                                        }
                                                    }),
                                                    [...n]
                                                );
                                            })(r, E, T),
                                            o = n.findIndex((t) => null != t && !(null != e && e.includes(t))),
                                            a = n.reduce((t, r, n) => (null == r || (null != e && e.includes(r)) ? t : n), -1);
                                        if (
                                            ((P.current =
                                                n[
                                                    (function (e, t) {
                                                        let { event: r, orientation: n, loop: o, cols: a, disabledIndices: l, minIndex: i, maxIndex: s, prevIndex: c, stopEvent: d = !1 } = t,
                                                            u = c;
                                                        if (r.key === e0) {
                                                            if ((d && eC(r), -1 === c)) u = s;
                                                            else if (((u = e9(e, { startingIndex: u, amount: a, decrement: !0, disabledIndices: l })), o && (c - a < i || u < 0))) {
                                                                let e = c % a,
                                                                    t = s % a,
                                                                    r = s - (t - e);
                                                                u = t === e ? s : t > e ? r : r - a;
                                                            }
                                                            e4(e, u) && (u = c);
                                                        }
                                                        if (
                                                            (r.key === e1 &&
                                                                (d && eC(r),
                                                                -1 === c
                                                                    ? (u = i)
                                                                    : ((u = e9(e, { startingIndex: c, amount: a, disabledIndices: l })), o && c + a > s && (u = e9(e, { startingIndex: (c % a) - a, amount: a, disabledIndices: l }))),
                                                                e4(e, u) && (u = c)),
                                                            "both" === n)
                                                        ) {
                                                            let t = (0, eN.GW)(c / a);
                                                            r.key === e2 &&
                                                                (d && eC(r),
                                                                c % a != a - 1
                                                                    ? ((u = e9(e, { startingIndex: c, disabledIndices: l })), o && e6(u, a, t) && (u = e9(e, { startingIndex: c - (c % a) - 1, disabledIndices: l })))
                                                                    : o && (u = e9(e, { startingIndex: c - (c % a) - 1, disabledIndices: l })),
                                                                e6(u, a, t) && (u = c)),
                                                                r.key === e5 &&
                                                                    (d && eC(r),
                                                                    c % a != 0
                                                                        ? ((u = e9(e, { startingIndex: c, disabledIndices: l, decrement: !0 })),
                                                                          o && e6(u, a, t) && (u = e9(e, { startingIndex: c + (a - (c % a)), decrement: !0, disabledIndices: l })))
                                                                        : o && (u = e9(e, { startingIndex: c + (a - (c % a)), decrement: !0, disabledIndices: l })),
                                                                    e6(u, a, t) && (u = c));
                                                            let n = (0, eN.GW)(s / a) === t;
                                                            e4(e, u) && (u = o && n ? (r.key === e5 ? s : e9(e, { startingIndex: c - (c % a) - 1, disabledIndices: l })) : c);
                                                        }
                                                        return u;
                                                    })(
                                                        { current: n.map((e) => (null != e ? i.current[e] : null)) },
                                                        {
                                                            event: t,
                                                            orientation: k,
                                                            loop: p,
                                                            cols: E,
                                                            disabledIndices: ((d = [...(e || []), void 0]), n.flatMap((e, t) => (d.includes(e) ? [t] : []))),
                                                            minIndex: o,
                                                            maxIndex: a,
                                                            prevIndex: (function (e, t, r, n, o) {
                                                                if (-1 === e) return -1;
                                                                let a = r.indexOf(e);
                                                                switch (o) {
                                                                    case "tl":
                                                                        return a;
                                                                    case "tr":
                                                                        return a + t[e].width - 1;
                                                                    case "bl":
                                                                        return a + (t[e].height - 1) * n;
                                                                    case "br":
                                                                        return r.lastIndexOf(e);
                                                                }
                                                            })(P.current, r, n, E, t.key === e1 ? "bl" : t.key === e2 ? "tr" : "tl"),
                                                            stopEvent: !0,
                                                        }
                                                    )
                                                ]),
                                            j(P.current),
                                            "both" === k)
                                        )
                                            return;
                                    }
                                    if (t4(t.key, k)) {
                                        if ((eC(t), r && !h && ed(t.currentTarget.ownerDocument) === t.currentTarget)) {
                                            (P.current = t7(t.key, k, m) ? s : c), j(P.current);
                                            return;
                                        }
                                        t7(t.key, k, m)
                                            ? p
                                                ? (P.current = l >= c ? (g && l !== i.current.length ? -1 : s) : e9(i, { startingIndex: l, disabledIndices: e }))
                                                : (P.current = Math.min(c, e9(i, { startingIndex: l, disabledIndices: e })))
                                            : p
                                            ? (P.current = l <= s ? (g && -1 !== l ? i.current.length : c) : e9(i, { startingIndex: l, decrement: !0, disabledIndices: e }))
                                            : (P.current = Math.max(s, e9(i, { startingIndex: l, decrement: !0, disabledIndices: e }))),
                                            e4(i, P.current) ? j(null) : j(P.current);
                                    }
                                }
                                function l(e) {
                                    "auto" === y && ep(e.nativeEvent) && (L.current = !0);
                                }
                                let s = h && r && U && { "aria-activedescendant": K || Z },
                                    c = i.current.find((e) => (null == e ? void 0 : e.id) === Z);
                                return {
                                    reference: {
                                        ...s,
                                        onKeyDown(o) {
                                            var a, l, s, d, u, g;
                                            D.current = !1;
                                            let p = 0 === o.key.indexOf("Arrow"),
                                                y = ((a = o.key), t6(k, m ? a === e5 : a === e2, a === e1)),
                                                v = t3(o.key, k, m),
                                                w = t4(o.key, k),
                                                E = (b ? y : w) || "Enter" === o.key || "" === o.key.trim();
                                            if (h && r) {
                                                let e, r;
                                                let n = null == M ? void 0 : M.nodesRef.current.find((e) => null == e.parentId),
                                                    a =
                                                        M && n
                                                            ? ((l = M.nodesRef.current),
                                                              (s = n.id),
                                                              (r = -1),
                                                              !(function t(n, o) {
                                                                  o > r && ((e = n), (r = o)),
                                                                      ty(l, n).forEach((e) => {
                                                                          t(e.id, o + 1);
                                                                      });
                                                              })(s, 0),
                                                              l.find((t) => t.id === e))
                                                            : null;
                                                if (p && a && S) {
                                                    let e = new KeyboardEvent("keydown", { key: o.key, bubbles: !0 });
                                                    if (y || v) {
                                                        let t = (null == (d = a.context) ? void 0 : d.elements.domReference) === o.currentTarget,
                                                            r = v && !t ? (null == (u = a.context) ? void 0 : u.elements.domReference) : y ? c : null;
                                                        r && (eC(o), r.dispatchEvent(e), H(void 0));
                                                    }
                                                    if (w && a.context && a.context.open && a.parentId && o.currentTarget !== a.context.elements.domReference) {
                                                        eC(o), null == (g = a.context.elements.domReference) || g.dispatchEvent(e);
                                                        return;
                                                    }
                                                }
                                                return t(o);
                                            }
                                            if (r || x || !p) {
                                                if ((E && (O.current = b && w ? null : o.key), b)) {
                                                    y && (eC(o), r ? ((P.current = e7(i, e)), j(P.current)) : n(!0, o.nativeEvent, "list-navigation"));
                                                    return;
                                                }
                                                w && (null != f && (P.current = f), eC(o), !r && x ? n(!0, o.nativeEvent, "list-navigation") : t(o), r && j(P.current));
                                            }
                                        },
                                        onFocus() {
                                            r && j(null);
                                        },
                                        onPointerDown: function (e) {
                                            (L.current = y), "auto" === y && eb(e.nativeEvent) && (L.current = !0);
                                        },
                                        onMouseDown: l,
                                        onClick: l,
                                    },
                                    floating: {
                                        "aria-orientation": "both" === k ? void 0 : k,
                                        ...(!eS(a) && s),
                                        onKeyDown: t,
                                        onPointerMove() {
                                            D.current = !0;
                                        },
                                    },
                                    item: Y,
                                };
                            }, [a, o, Z, K, F, W, i, u, k, m, h, r, U, b, f, x, g, E, p, y, j, n, Y, M, S, N, T]);
                        })(O, { listRef: w, activeIndex: g, selectedIndex: m, onNavigate: p }),
                        _ = (function (e, t) {
                            var r;
                            let { open: n, dataRef: o } = e,
                                { listRef: a, activeIndex: l, onMatch: i, onTypingChange: s, enabled: d = !0, findMatch: u = null, resetMs: f = 750, ignoreKeys: g = [], selectedIndex: p = null } = t,
                                b = c.useRef(),
                                m = c.useRef(""),
                                h = c.useRef(null != (r = null != p ? p : l) ? r : -1),
                                y = c.useRef(null),
                                v = eQ(i),
                                x = eQ(s),
                                w = tb(u),
                                k = tb(g);
                            return (
                                tt(() => {
                                    n && (clearTimeout(b.current), (y.current = null), (m.current = ""));
                                }, [n]),
                                tt(() => {
                                    if (n && "" === m.current) {
                                        var e;
                                        h.current = null != (e = null != p ? p : l) ? e : -1;
                                    }
                                }, [n, p, l]),
                                c.useMemo(() => {
                                    if (!d) return {};
                                    function e(e) {
                                        e ? o.current.typing || ((o.current.typing = e), x(e)) : o.current.typing && ((o.current.typing = e), x(e));
                                    }
                                    function t(e, t, r) {
                                        let n = w.current ? w.current(t, r) : t.find((e) => (null == e ? void 0 : e.toLocaleLowerCase().indexOf(r.toLocaleLowerCase())) === 0);
                                        return n ? e.indexOf(n) : -1;
                                    }
                                    function r(r) {
                                        let o = a.current;
                                        if (
                                            (m.current.length > 0 && " " !== m.current[0] && (-1 === t(o, o, m.current) ? e(!1) : " " === r.key && eC(r)),
                                            null == o || k.current.includes(r.key) || 1 !== r.key.length || r.ctrlKey || r.metaKey || r.altKey)
                                        )
                                            return;
                                        n && " " !== r.key && (eC(r), e(!0)),
                                            o.every((e) => {
                                                var t, r;
                                                return !e || (null == (t = e[0]) ? void 0 : t.toLocaleLowerCase()) !== (null == (r = e[1]) ? void 0 : r.toLocaleLowerCase());
                                            }) &&
                                                m.current === r.key &&
                                                ((m.current = ""), (h.current = y.current)),
                                            (m.current += r.key),
                                            clearTimeout(b.current),
                                            (b.current = setTimeout(() => {
                                                (m.current = ""), (h.current = y.current), e(!1);
                                            }, f));
                                        let l = h.current,
                                            i = t(o, [...o.slice((l || 0) + 1), ...o.slice(0, (l || 0) + 1)], m.current);
                                        -1 !== i ? (v(i), (y.current = i)) : " " !== r.key && ((m.current = ""), e(!1));
                                    }
                                    return {
                                        reference: { onKeyDown: r },
                                        floating: {
                                            onKeyDown: r,
                                            onKeyUp(t) {
                                                " " === t.key && e(!1);
                                            },
                                        },
                                    };
                                }, [d, n, o, a, f, k, w, v, x])
                            );
                        })(O, { listRef: k, activeIndex: g, selectedIndex: m, onMatch: P }),
                        { getReferenceProps: z, getFloatingProps: F, getItemProps: W } = ri({ context: O, role: "menu", trigger: N, interactions: [I, _] }),
                        B = (0, c.useMemo)(() => {
                            var e;
                            let [t] = S.split("-");
                            return null !== (e = rf[t]) && void 0 !== e ? e : u.kzR;
                        }, [S]);
                    return (0, s.jsxs)(rs.Provider, {
                        value: { theme: E, activeIndex: g, dismissOnClick: n, getItemProps: W, handleSelect: L },
                        children: [
                            (0, s.jsxs)(rg, {
                                ...j,
                                refs: A,
                                inline: R,
                                theme: E,
                                "data-testid": C,
                                className: (0, f.m6)(E.floating.target, j.className),
                                setButtonWidth: x,
                                getReferenceProps: z,
                                renderTrigger: a,
                                children: [T, M && (0, s.jsx)(B, { className: E.arrowIcon })],
                            }),
                            i &&
                                (0, s.jsx)(tV, {
                                    context: O,
                                    modal: !1,
                                    children: (0, s.jsx)("div", {
                                        ref: A.setFloating,
                                        style: { ...D, minWidth: y },
                                        "data-testid": "flowbite-dropdown",
                                        "aria-expanded": i,
                                        ...F({ className: (0, f.m6)(E.floating.base, E.floating.animation, "duration-100", !i && E.floating.hidden, E.floating.style.auto, r) }),
                                        children: (0, s.jsx)(to, { elementsRef: w, labelsRef: k, children: (0, s.jsx)("ul", { className: E.content, tabIndex: -1, children: t }) }),
                                    }),
                                }),
                        ],
                    });
                };
            (rp.displayName = "Dropdown"),
                (ru.displayName = "Dropdown.Header"),
                (rd.displayName = "Dropdown.Divider"),
                Object.assign(rp, {
                    Item: (e) => {
                        let { children: t, className: r, icon: n, onClick: o, theme: a = {}, ...l } = e,
                            { ref: i, index: d } = (function (e) {
                                let { label: t } = void 0 === e ? {} : e,
                                    [r, n] = c.useState(null),
                                    o = c.useRef(null),
                                    { register: a, unregister: l, map: i, elementsRef: s, labelsRef: d } = c.useContext(tn),
                                    u = c.useCallback(
                                        (e) => {
                                            if (((o.current = e), null !== r && ((s.current[r] = e), d))) {
                                                var n;
                                                let o = void 0 !== t;
                                                d.current[r] = o ? t : null != (n = null == e ? void 0 : e.textContent) ? n : null;
                                            }
                                        },
                                        [r, s, d, t]
                                    );
                                return (
                                    tt(() => {
                                        let e = o.current;
                                        if (e)
                                            return (
                                                a(e),
                                                () => {
                                                    l(e);
                                                }
                                            );
                                    }, [a, l]),
                                    tt(() => {
                                        let e = o.current ? i.get(o.current) : null;
                                        null != e && n(e);
                                    }, [i]),
                                    c.useMemo(() => ({ ref: u, index: null == r ? -1 : r }), [r, u])
                                );
                            })({ label: "string" == typeof t ? t : void 0 }),
                            { theme: u, activeIndex: g, dismissOnClick: p, getItemProps: m, handleSelect: h } = rc(),
                            y = b(u.floating.item, a);
                        return (0, s.jsx)("li", {
                            role: "menuitem",
                            className: y.container,
                            children: (0, s.jsxs)(P, {
                                ref: i,
                                className: (0, f.m6)(y.base, r),
                                ...l,
                                ...m({
                                    onClick: () => {
                                        o && o(), p && h(null);
                                    },
                                }),
                                tabIndex: g === d ? 0 : -1,
                                children: [n && (0, s.jsx)(n, { className: y.icon }), t],
                            }),
                        });
                    },
                    Header: ru,
                    Divider: rd,
                }),
                ((0, c.forwardRef)(({ className: e, color: t = "gray", helperText: r, sizing: n = "md", theme: o = {}, ...a }, l) => {
                    let i = b(v().fileInput, o);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)("div", {
                                className: (0, f.m6)(i.root.base, e),
                                children: (0, s.jsx)("div", {
                                    className: i.field.base,
                                    children: (0, s.jsx)("input", { className: (0, f.m6)(i.field.input.base, i.field.input.colors[t], i.field.input.sizes[n]), ...a, type: "file", ref: l }),
                                }),
                            }),
                            r && (0, s.jsx)(el, { color: t, children: r }),
                        ],
                    });
                }).displayName = "FileInput"),
                ((0, c.forwardRef)(({ label: e, helperText: t, color: r = "default", sizing: n = "md", variant: o, disabled: a = !1, theme: l = {}, className: i, ...d }, u) => {
                    let g = (0, c.useId)(),
                        p = b(v().floatingLabel, l);
                    return (0, s.jsxs)("div", {
                        children: [
                            (0, s.jsxs)("div", {
                                className: (0, f.m6)("relative", "standard" === o ? "z-0" : ""),
                                children: [
                                    (0, s.jsx)("input", {
                                        type: "text",
                                        id: d.id ? d.id : "floatingLabel" + g,
                                        "aria-describedby": "outlined_success_help",
                                        className: (0, f.m6)(p.input[r][o][n], i),
                                        placeholder: " ",
                                        "data-testid": "floating-label",
                                        disabled: a,
                                        ...d,
                                        ref: u,
                                    }),
                                    (0, s.jsx)("label", { htmlFor: d.id ? d.id : "floatingLabel" + g, className: (0, f.m6)(p.label[r][o][n], i), children: e }),
                                ],
                            }),
                            (0, s.jsx)("p", { id: "outlined_helper_text" + g, className: (0, f.m6)(p.helperText[r], i), children: t }),
                        ],
                    });
                }).displayName = "FloatingLabel");
            let rb = ({ alt: e, className: t, children: r, href: n, name: o, src: a, theme: l = {}, ...i }) => {
                    let c = b(v().footer.brand, l);
                    return (0, s.jsx)("div", {
                        children: n
                            ? (0, s.jsxs)("a", {
                                  "data-testid": "flowbite-footer-brand",
                                  href: n,
                                  className: (0, f.m6)(c.base, t),
                                  ...i,
                                  children: [(0, s.jsx)("img", { alt: e, src: a, className: c.img }), (0, s.jsx)("span", { "data-testid": "flowbite-footer-brand-span", className: c.span, children: o }), r],
                              })
                            : (0, s.jsx)("img", { alt: e, "data-testid": "flowbite-footer-brand", src: a, className: (0, f.m6)(c.img, t), ...i }),
                    });
                },
                rm = ({ by: e, className: t, href: r, theme: n = {}, year: o, ...a }) => {
                    let l = b(v().footer.copyright, n);
                    return (0, s.jsxs)("div", {
                        "data-testid": "flowbite-footer-copyright",
                        className: (0, f.m6)(l.base, t),
                        ...a,
                        children: ["\xa9 ", o, r ? (0, s.jsx)("a", { href: r, className: l.href, children: e }) : (0, s.jsx)("span", { "data-testid": "flowbite-footer-copyright-span", className: l.span, children: e })],
                    });
                },
                rh = ({ className: e, theme: t = {}, ...r }) => {
                    let n = b(v().footer.divider, t);
                    return (0, s.jsx)("hr", { "data-testid": "footer-divider", className: (0, f.m6)(n.base, e), ...r });
                },
                ry = ({ ariaLabel: e, className: t, href: r, icon: n, theme: o = {}, ...a }) => {
                    let l = b(v().footer.icon, o);
                    return (0, s.jsx)("div", {
                        children: r
                            ? (0, s.jsx)("a", { "aria-label": e, "data-testid": "flowbite-footer-icon", href: r, className: (0, f.m6)(l.base, t), ...a, children: (0, s.jsx)(n, { className: l.size }) })
                            : (0, s.jsx)(n, { "data-testid": "flowbite-footer-icon", className: l.size, ...a }),
                    });
                },
                rv = ({ as: e = "a", children: t, className: r, href: n, theme: o = {}, ...a }) => {
                    let l = b(v().footer.groupLink.link, o);
                    return (0, s.jsx)("li", { className: (0, f.m6)(l.base, r), children: (0, s.jsx)(e, { href: n, className: l.href, ...a, children: t }) });
                },
                rx = ({ children: e, className: t, col: r = !1, theme: n = {}, ...o }) => {
                    let a = b(v().footer.groupLink, n);
                    return (0, s.jsx)("ul", { "data-testid": "footer-groupLink", className: (0, f.m6)(a.base, r && a.col, t), ...o, children: e });
                },
                rw = ({ as: e = "h2", className: t, theme: r = {}, title: n, ...o }) => {
                    let a = b(v().footer.title, r);
                    return (0, s.jsx)(e, { "data-testid": "flowbite-footer-title", className: (0, f.m6)(a.base, t), ...o, children: n });
                },
                rk = ({ bgDark: e = !1, children: t, className: r, container: n = !1, theme: o = {}, ...a }) => {
                    let l = b(v().footer, o);
                    return (0, s.jsx)("footer", { "data-testid": "flowbite-footer", className: (0, f.m6)(l.root.base, e && l.root.bgDark, n && l.root.container, r), ...a, children: t });
                };
            (rk.displayName = "Footer"),
                (rm.displayName = "Footer.Copyright"),
                (rv.displayName = "Footer.Link"),
                (rb.displayName = "Footer.Brand"),
                (rx.displayName = "Footer.LinkGroup"),
                (ry.displayName = "Footer.Icon"),
                (rw.displayName = "Footer.Title"),
                (rh.displayName = "Footer.Divider"),
                Object.assign(rk, { Copyright: rm, Link: rv, LinkGroup: rx, Brand: rb, Icon: ry, Title: rw, Divider: rh });
            let rE = ({ children: e, className: t, theme: r = {} }) => {
                    let n = b(v().listGroup.item, r);
                    return (0, s.jsx)("li", { className: (0, f.m6)(n.base, t), children: e });
                },
                rC = ({ children: e, className: t, unstyled: r, nested: n, ordered: o, horizontal: a, theme: l = {}, ...i }) => {
                    let c = b(v().list, l);
                    return (0, s.jsx)(o ? "ol" : "ul", { className: (0, f.m6)(c.root.base, c.root.ordered[o ? "on" : "off"], r && c.root.unstyled, n && c.root.nested, a && c.root.horizontal, t), ...i, children: e });
                };
            (rC.displayName = "List"), (rE.displayName = "List.Item"), Object.assign(rC, { Item: rE });
            let rS = ({ active: e, children: t, className: r, href: n, icon: o, onClick: a, theme: l = {}, disabled: i, ...c }) => {
                    let d = b(v().listGroup.item, l),
                        u = void 0 !== n;
                    return (0, s.jsx)("li", {
                        className: (0, f.m6)(d.base, r),
                        children: (0, s.jsxs)(u ? "a" : "button", {
                            href: n,
                            onClick: a,
                            type: u ? void 0 : "button",
                            disabled: i,
                            className: (0, f.m6)(d.link.active[e ? "on" : "off"], d.link.disabled[i ? "on" : "off"], d.link.base, d.link.href[u ? "on" : "off"]),
                            ...c,
                            children: [o && (0, s.jsx)(o, { "aria-hidden": !0, "data-testid": "flowbite-list-group-item-icon", className: d.link.icon }), t],
                        }),
                    });
                },
                rN = ({ children: e, className: t, theme: r = {}, ...n }) => {
                    let o = b(v().listGroup, r);
                    return (0, s.jsx)("ul", { className: (0, f.m6)(o.root.base, t), ...n, children: e });
                };
            (rN.displayName = "ListGroup"), (rS.displayName = "ListGroup.Item"), Object.assign(rN, { Item: rS });
            let rT = (0, c.createContext)(void 0);
            function rR() {
                let e = (0, c.useContext)(rT);
                if (!e) throw Error("useModalContext should be used within the ModalContext provider!");
                return e;
            }
            let rM = (e) => {
                    let { children: t, className: r, theme: n = {}, ...o } = e,
                        { theme: a, popup: l } = rR(),
                        i = b(a.body, n);
                    return (0, s.jsx)("div", { className: (0, f.m6)(i.base, l && [i.popup], r), ...o, children: t });
                },
                rj = (e) => {
                    let { children: t, className: r, theme: n = {}, ...o } = e,
                        { theme: a, popup: l } = rR(),
                        i = b(a.footer, n);
                    return (0, s.jsx)("div", { className: (0, f.m6)(i.base, !l && i.popup, r), ...o, children: t });
                },
                rL = (e) => {
                    let { as: t = "h3", children: r, className: n, theme: o = {}, id: a, ...l } = e,
                        i = (0, c.useId)(),
                        d = a || i,
                        { theme: g, popup: p, onClose: m, setHeaderId: h } = rR(),
                        y = b(g.header, o);
                    return (
                        (0, c.useLayoutEffect)(() => (h(d), () => h(void 0)), [d, h]),
                        (0, s.jsxs)("div", {
                            className: (0, f.m6)(y.base, p && y.popup, n),
                            ...l,
                            children: [
                                (0, s.jsx)(t, { id: d, className: y.title, children: r }),
                                (0, s.jsx)("button", { "aria-label": "Close", className: y.close.base, type: "button", onClick: m, children: (0, s.jsx)(u.fMW, { "aria-hidden": !0, className: y.close.icon }) }),
                            ],
                        })
                    );
                },
                rP = (0, c.forwardRef)((e, t) => {
                    var r;
                    let { children: n, className: o, dismissible: a = !1, onClose: l, popup: i, position: d = "center", root: u, show: g, size: p = "2xl", theme: m = {}, initialFocus: h, ...y } = e,
                        [x, w] = (0, c.useState)(void 0),
                        k = b(v().modal, m),
                        { context: E } = tJ({ open: g, onOpenChange: () => l && l() }),
                        C =
                            ((r = [E.refs.setFloating, t]),
                            c.useMemo(
                                () =>
                                    r.every((e) => null == e)
                                        ? null
                                        : (e) => {
                                              r.forEach((t) => {
                                                  "function" == typeof t ? t(e) : null != t && (t.current = e);
                                              });
                                          },
                                r
                            )),
                        { getFloatingProps: S } = t5([tU(E), tq(E, { outsidePressEvent: "mousedown", enabled: a }), t8(E)]);
                    return g
                        ? (0, s.jsx)(rT.Provider, {
                              value: { theme: k, popup: i, onClose: l, setHeaderId: w },
                              children: (0, s.jsx)(t_, {
                                  root: u,
                                  children: (0, s.jsx)(tH, {
                                      lockScroll: !0,
                                      "data-testid": "modal-overlay",
                                      className: (0, f.m6)(k.root.base, k.root.positions[d], g ? k.root.show.on : k.root.show.off, o),
                                      ...y,
                                      children: (0, s.jsx)(tV, {
                                          context: E,
                                          initialFocus: h,
                                          children: (0, s.jsx)("div", {
                                              ref: C,
                                              ...S(y),
                                              "aria-labelledby": x,
                                              className: (0, f.m6)(k.content.base, k.root.sizes[p]),
                                              children: (0, s.jsx)("div", { className: k.content.inner, children: n }),
                                          }),
                                      }),
                                  }),
                              }),
                          })
                        : null;
                });
            (rP.displayName = "Modal"), (rL.displayName = "Modal.Header"), (rM.displayName = "Modal.Body"), (rj.displayName = "Modal.Footer"), Object.assign(rP, { Header: rL, Body: rM, Footer: rj });
            let rO = (0, c.createContext)(void 0);
            function rD() {
                let e = (0, c.useContext)(rO);
                if (!e) throw Error("useNavBarContext should be used within the NavbarContext provider!");
                return e;
            }
            let rA = (e) => {
                    let { as: t = "a", children: r, className: n, theme: o = {}, ...a } = e,
                        { theme: l } = rD(),
                        i = b(l.brand, o);
                    return (0, s.jsx)(t, { className: (0, f.m6)(i.base, n), ...a, children: r });
                },
                rI = (e) => {
                    let { children: t, className: r, theme: n = {}, ...o } = e,
                        { theme: a, isOpen: l } = rD(),
                        i = b(a.collapse, n);
                    return (0, s.jsx)("div", { "data-testid": "flowbite-navbar-collapse", className: (0, f.m6)(i.base, i.hidden[l ? "off" : "on"], r), ...o, children: (0, s.jsx)("ul", { className: i.list, children: t }) });
                },
                r_ = (e) => {
                    let { active: t, as: r = "a", disabled: n, children: o, className: a, theme: l = {}, ...i } = e,
                        { theme: c } = rD(),
                        d = b(c.link, l);
                    return (0, s.jsx)("li", { children: (0, s.jsx)(r, { className: (0, f.m6)(d.base, t && d.active.on, !t && !n && d.active.off, d.disabled[n ? "on" : "off"], a), ...i, children: o }) });
                };
            var rz = r(5289);
            let rF = (e) => {
                    let { barIcon: t = rz.Fm7, className: r, theme: n = {}, ...o } = e,
                        { theme: a, isOpen: l, setIsOpen: i } = rD(),
                        c = b(a.toggle, n);
                    return (0, s.jsxs)("button", {
                        "data-testid": "flowbite-navbar-toggle",
                        onClick: () => {
                            i(!l);
                        },
                        className: (0, f.m6)(c.base, r),
                        ...o,
                        children: [(0, s.jsx)("span", { className: "sr-only", children: "Open main menu" }), (0, s.jsx)(t, { "aria-hidden": !0, className: c.icon })],
                    });
                },
                rW = (e) => {
                    let { border: t, children: r, className: n, fluid: o = !1, menuOpen: a, rounded: l, theme: i = {}, ...d } = e,
                        [u, g] = (0, c.useState)(a),
                        p = b(v().navbar, i);
                    return (0, s.jsx)(rO.Provider, {
                        value: { theme: p, isOpen: u, setIsOpen: g },
                        children: (0, s.jsx)("nav", {
                            className: (0, f.m6)(p.root.base, p.root.bordered[t ? "on" : "off"], p.root.rounded[l ? "on" : "off"], n),
                            ...d,
                            children: (0, s.jsx)("div", { className: (0, f.m6)(p.root.inner.base, p.root.inner.fluid[o ? "on" : "off"]), children: r }),
                        }),
                    });
                };
            (rW.displayName = "Navbar"),
                (rA.displayName = "Navbar.Brand"),
                (rI.displayName = "Navbar.Collapse"),
                (r_.displayName = "Navbar.Link"),
                (rF.displayName = "Navbar.Toggle"),
                Object.assign(rW, { Brand: rA, Collapse: rI, Link: r_, Toggle: rF });
            let rB = ({ active: e, children: t, className: r, onClick: n, theme: o = {}, ...a }) => {
                let l = b(v().pagination, o);
                return (0, s.jsx)("button", { type: "button", className: (0, f.m6)(e && l.pages.selector.active, r), onClick: n, ...a, children: t });
            };
            rB.displayName = "Pagination.Button";
            let rZ = ({ children: e, className: t, onClick: r, theme: n = {}, disabled: o = !1, ...a }) => {
                let l = b(v().pagination, n);
                return (0, s.jsx)("button", { type: "button", className: (0, f.m6)(o && l.pages.selector.disabled, t), disabled: o, onClick: r, ...a, children: e });
            };
            rZ.displayName = "Pagination.Navigation";
            let rV = (e, t) => (e >= t ? [] : [...Array(t - e + 1).keys()].map((t) => t + e)),
                rK = ({
                    className: e,
                    currentPage: t,
                    layout: r = "pagination",
                    nextLabel: n = "Next",
                    onPageChange: o,
                    previousLabel: a = "Previous",
                    renderPaginationButton: l = (e) => (0, s.jsx)(rB, { ...e }),
                    showIcons: i = !1,
                    theme: c = {},
                    totalPages: d,
                    ...g
                }) => {
                    let p = b(v().pagination, c),
                        m = Math.min(Math.max("pagination" === r ? t + 2 : t + 4, 5), d),
                        h = Math.max(1, m - 4);
                    return (0, s.jsxs)("nav", {
                        className: (0, f.m6)(p.base, e),
                        ...g,
                        children: [
                            "table" === r &&
                                (0, s.jsxs)("div", {
                                    className: p.layout.table.base,
                                    children: [
                                        "Showing ",
                                        (0, s.jsx)("span", { className: p.layout.table.span, children: h }),
                                        " to\xa0",
                                        (0, s.jsx)("span", { className: p.layout.table.span, children: m }),
                                        " of\xa0",
                                        (0, s.jsx)("span", { className: p.layout.table.span, children: d }),
                                        " Entries",
                                    ],
                                }),
                            (0, s.jsxs)("ul", {
                                className: p.pages.base,
                                children: [
                                    (0, s.jsx)("li", {
                                        children: (0, s.jsxs)(rZ, {
                                            className: (0, f.m6)(p.pages.previous.base, i && p.pages.showIcon),
                                            onClick: () => {
                                                o(Math.max(t - 1, 1));
                                            },
                                            disabled: 1 === t,
                                            children: [i && (0, s.jsx)(u.DEl, { "aria-hidden": !0, className: p.pages.previous.icon }), a],
                                        }),
                                    }),
                                    "pagination" === r &&
                                        rV(h, m).map((e) =>
                                            (0, s.jsx)(
                                                "li",
                                                {
                                                    "aria-current": e === t ? "page" : void 0,
                                                    children: l({ className: (0, f.m6)(p.pages.selector.base, t === e && p.pages.selector.active), active: e === t, onClick: () => o(e), children: e }),
                                                },
                                                e
                                            )
                                        ),
                                    (0, s.jsx)("li", {
                                        children: (0, s.jsxs)(rZ, {
                                            className: (0, f.m6)(p.pages.next.base, i && p.pages.showIcon),
                                            onClick: () => {
                                                o(Math.min(t + 1, d));
                                            },
                                            disabled: t === d,
                                            children: [n, i && (0, s.jsx)(u.MOd, { "aria-hidden": !0, className: p.pages.next.icon })],
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    });
                };
            (rK.displayName = "Pagination"),
                Object.assign(rK, { Button: rB }),
                ((0, c.forwardRef)(({ className: e, theme: t = {}, ...r }, n) => {
                    let o = b(v().radio, t);
                    return (0, s.jsx)("input", { ref: n, type: "radio", className: (0, f.m6)(o.root.base, e), ...r });
                }).displayName = "Radio"),
                ((0, c.forwardRef)(({ className: e, sizing: t = "md", theme: r = {}, ...n }, o) => {
                    let a = b(v().rangeSlider, r);
                    return (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)("div", {
                            "data-testid": "flowbite-range-slider",
                            className: (0, f.m6)(a.root.base, e),
                            children: (0, s.jsx)("div", { className: a.field.base, children: (0, s.jsx)("input", { ref: o, type: "range", className: (0, f.m6)(a.field.input.base, a.field.input.sizes[t]), ...n }) }),
                        }),
                    });
                }).displayName = "RangeSlider");
            let rH = ({ children: e, className: t, percentFilled: r = 0, theme: n = {}, ...o }) => {
                    let a = b(v().ratingAdvanced, n);
                    return (0, s.jsxs)("div", {
                        className: (0, f.m6)(a.base, t),
                        ...o,
                        children: [
                            (0, s.jsx)("span", { className: a.label, children: e }),
                            (0, s.jsx)("div", { className: a.progress.base, children: (0, s.jsx)("div", { className: a.progress.fill, "data-testid": "flowbite-rating-fill", style: { width: `${r}%` } }) }),
                            (0, s.jsx)("span", { className: a.progress.label, children: `${r}%` }),
                        ],
                    });
                },
                r$ = (0, c.createContext)(void 0),
                rU = (e) => {
                    let { className: t, filled: r = !0, starIcon: n = u.xiv, theme: o = {}, ...a } = e,
                        { theme: l, size: i = "sm" } = (function () {
                            let e = (0, c.useContext)(r$);
                            if (!e) throw Error("useRatingContext should be used within the RatingContext provider!");
                            return e;
                        })(),
                        d = b(l.star, o);
                    return (0, s.jsx)(n, { "data-testid": "flowbite-rating-star", className: (0, f.m6)(d.sizes[i], d[r ? "filled" : "empty"], t), ...a });
                },
                rY = (e) => {
                    let { children: t, className: r, size: n = "sm", theme: o = {}, ...a } = e,
                        l = b(v().rating, o);
                    return (0, s.jsx)(r$.Provider, { value: { theme: l, size: n }, children: (0, s.jsx)("div", { className: (0, f.m6)(l.root.base, r), ...a, children: t }) });
                };
            (rY.displayName = "Rating"),
                (rU.displayName = "Rating.Star"),
                (rH.displayName = "Rating.Advanced"),
                Object.assign(rY, { Star: rU, Advanced: rH }),
                ((0, c.forwardRef)(({ addon: e, children: t, className: r, color: n = "gray", helperText: o, icon: a, shadow: l, sizing: i = "md", theme: c = {}, ...d }, u) => {
                    let g = b(v().select, c);
                    return (0, s.jsxs)("div", {
                        className: (0, f.m6)(g.base, r),
                        children: [
                            e && (0, s.jsx)("span", { className: g.addon, children: e }),
                            (0, s.jsxs)("div", {
                                className: g.field.base,
                                children: [
                                    a && (0, s.jsx)("div", { className: g.field.icon.base, children: (0, s.jsx)(a, { className: g.field.icon.svg }) }),
                                    (0, s.jsx)("select", {
                                        className: (0, f.m6)(
                                            g.field.select.base,
                                            g.field.select.colors[n],
                                            g.field.select.sizes[i],
                                            g.field.select.withIcon[a ? "on" : "off"],
                                            g.field.select.withAddon[e ? "on" : "off"],
                                            g.field.select.withShadow[l ? "on" : "off"]
                                        ),
                                        ...d,
                                        ref: u,
                                        children: t,
                                    }),
                                    o && (0, s.jsx)(el, { color: n, children: o }),
                                ],
                            }),
                        ],
                    });
                }).displayName = "Select");
            let rG = (0, c.createContext)(void 0);
            function rX() {
                let e = (0, c.useContext)(rG);
                if (!e) throw Error("useSidebarContext should be used within the SidebarContext provider!");
                return e;
            }
            let rq = (e) => {
                let { children: t, color: r = "info", className: n, theme: o = {}, ...a } = e,
                    { theme: l, isCollapsed: i } = rX(),
                    c = b(l.cta, o);
                return (0, s.jsx)("div", { "data-testid": "sidebar-cta", hidden: i, className: (0, f.m6)(c.base, c.color[r], n), ...a, children: t });
            };
            rq.displayName = "Sidebar.CTA";
            let rJ = (e) => {
                    let { animation: t = "duration-300", arrow: r = !0, children: n, className: o, content: a, placement: l = "top", style: i = "dark", theme: d, trigger: u = "hover", minWidth: g, ...p } = e,
                        b = (0, c.useRef)(null),
                        [m, h] = (0, c.useState)(!1),
                        y = rl({ open: m, placement: l, arrowRef: b, setOpen: h }),
                        {
                            context: v,
                            middlewareData: { arrow: { x: x, y: w } = {} },
                            refs: k,
                            strategy: E,
                            update: C,
                            x: S,
                            y: N,
                        } = y,
                        T = (function (e, t) {
                            void 0 === t && (t = {});
                            let {
                                    open: r,
                                    onOpenChange: n,
                                    events: o,
                                    refs: a,
                                    elements: { domReference: l },
                                } = e,
                                { enabled: i = !0, visibleOnly: s = !0 } = t,
                                d = c.useRef(!1),
                                u = c.useRef(),
                                f = c.useRef(!0);
                            return (
                                c.useEffect(() => {
                                    if (!i) return;
                                    let e = (0, ec.Jj)(l);
                                    function t() {
                                        !r && (0, ec.Re)(l) && l === ed(ex(l)) && (d.current = !0);
                                    }
                                    function n() {
                                        f.current = !0;
                                    }
                                    return (
                                        e.addEventListener("blur", t),
                                        e.addEventListener("keydown", n, !0),
                                        () => {
                                            e.removeEventListener("blur", t), e.removeEventListener("keydown", n, !0);
                                        }
                                    );
                                }, [l, r, i]),
                                c.useEffect(() => {
                                    if (i)
                                        return (
                                            o.on("openchange", e),
                                            () => {
                                                o.off("openchange", e);
                                            }
                                        );
                                    function e(e) {
                                        let { reason: t } = e;
                                        ("reference-press" === t || "escape-key" === t) && (d.current = !0);
                                    }
                                }, [o, i]),
                                c.useEffect(
                                    () => () => {
                                        clearTimeout(u.current);
                                    },
                                    []
                                ),
                                c.useMemo(
                                    () =>
                                        i
                                            ? {
                                                  reference: {
                                                      onPointerDown(e) {
                                                          eb(e.nativeEvent) || (f.current = !1);
                                                      },
                                                      onMouseLeave() {
                                                          d.current = !1;
                                                      },
                                                      onFocus(e) {
                                                          if (d.current) return;
                                                          let t = ek(e.nativeEvent);
                                                          if (s && (0, ec.kK)(t))
                                                              try {
                                                                  if (em() && ey()) throw Error();
                                                                  if (!t.matches(":focus-visible")) return;
                                                              } catch (e) {
                                                                  if (!f.current && !eE(t)) return;
                                                              }
                                                          n(!0, e.nativeEvent, "focus");
                                                      },
                                                      onBlur(e) {
                                                          d.current = !1;
                                                          let t = e.relatedTarget,
                                                              r = (0, ec.kK)(t) && t.hasAttribute(tp("focus-guard")) && "outside" === t.getAttribute("data-type");
                                                          u.current = window.setTimeout(() => {
                                                              let o = ed(l ? l.ownerDocument : document);
                                                              if (t || o !== l) {
                                                                  if (eu(a.floating.current, o) || eu(l, o) || r) return;
                                                                  n(!1, e.nativeEvent, "focus");
                                                              }
                                                          });
                                                      },
                                                  },
                                              }
                                            : {},
                                    [i, s, l, a, n]
                                )
                            );
                        })(v),
                        { getFloatingProps: R, getReferenceProps: M } = ri({ context: v, role: "tooltip", trigger: u, interactions: [T] });
                    return (
                        (0, c.useEffect)(() => {
                            if (k.reference.current && k.floating.current && m) return (0, rt.Me)(k.reference.current, k.floating.current, C);
                        }, [m, k.floating, k.reference, C]),
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)("div", { ref: k.setReference, className: d.target, "data-testid": "flowbite-tooltip-target", ...M(), children: n }),
                                (0, s.jsxs)("div", {
                                    ref: k.setFloating,
                                    "data-testid": "flowbite-tooltip",
                                    ...R({
                                        className: (0, f.m6)(d.base, t && "".concat(d.animation, " ").concat(t), !m && d.hidden, d.style[i], o),
                                        style: { position: E, top: null != N ? N : " ", left: null != S ? S : " ", minWidth: g },
                                        ...p,
                                    }),
                                    children: [
                                        (0, s.jsx)("div", { className: d.content, children: a }),
                                        r &&
                                            (0, s.jsx)("div", {
                                                className: (0, f.m6)(d.arrow.base, "dark" === i && d.arrow.style.dark, "light" === i && d.arrow.style.light, "auto" === i && d.arrow.style.auto),
                                                "data-testid": "flowbite-tooltip-arrow",
                                                ref: b,
                                                style: { top: null != w ? w : " ", left: null != x ? x : " ", right: " ", bottom: " ", [ra({ placement: y.placement })]: d.arrow.placement },
                                                children: "\xa0",
                                            }),
                                    ],
                                }),
                            ],
                        })
                    );
                },
                rQ = ({ animation: e = "duration-300", arrow: t = !0, children: r, className: n, content: o, placement: a = "top", style: l = "dark", theme: i = {}, trigger: c = "hover", ...d }) => {
                    let u = b(v().tooltip, i);
                    return (0, s.jsx)(rJ, { animation: e, arrow: t, content: o, placement: a, style: l, theme: u, trigger: c, className: n, ...d, children: r });
                };
            rQ.displayName = "Tooltip";
            let r0 = (0, c.createContext)(void 0),
                r1 = (e) => {
                    let { children: t, className: r, icon: n, label: o, chevronIcon: a = u.kWQ, renderChevronIcon: l, open: i = !1, theme: d = {}, ...g } = e,
                        p = (0, c.useId)(),
                        [m, h] = (0, c.useState)(i),
                        { theme: y, isCollapsed: v } = rX(),
                        x = b(y.collapse, d);
                    return (
                        (0, c.useEffect)(() => h(i), [i]),
                        (0, s.jsxs)(
                            (e) => {
                                let { children: t } = e;
                                return (0, s.jsx)("li", { children: v && !m ? (0, s.jsx)(rQ, { content: o, placement: "right", children: t }) : t });
                            },
                            {
                                children: [
                                    (0, s.jsxs)("button", {
                                        id: "flowbite-sidebar-collapse-".concat(p),
                                        onClick: () => h(!m),
                                        title: o,
                                        type: "button",
                                        className: (0, f.m6)(x.button, r),
                                        ...g,
                                        children: [
                                            n && (0, s.jsx)(n, { "aria-hidden": !0, "data-testid": "flowbite-sidebar-collapse-icon", className: (0, f.m6)(x.icon.base, x.icon.open[m ? "on" : "off"]) }),
                                            v
                                                ? (0, s.jsx)("span", { className: "sr-only", children: o })
                                                : (0, s.jsxs)(s.Fragment, {
                                                      children: [
                                                          (0, s.jsx)("span", { "data-testid": "flowbite-sidebar-collapse-label", className: x.label.base, children: o }),
                                                          l ? l(x, m) : (0, s.jsx)(a, { "aria-hidden": !0, className: (0, f.m6)(x.label.icon.base, x.label.icon.open[m ? "on" : "off"]) }),
                                                      ],
                                                  }),
                                        ],
                                    }),
                                    (0, s.jsx)("ul", { "aria-labelledby": "flowbite-sidebar-collapse-".concat(p), hidden: !m, className: x.list, children: (0, s.jsx)(r0.Provider, { value: { isInsideCollapse: !0 }, children: t }) }),
                                ],
                            }
                        )
                    );
                };
            r1.displayName = "Sidebar.Collapse";
            let r5 = (e) => {
                    let { id: t, theme: r, isCollapsed: n, tooltipChildren: o, children: a, ...l } = e;
                    return (0, s.jsx)("li", { ...l, children: n ? (0, s.jsx)(rQ, { content: (0, s.jsx)(r2, { id: t, theme: r, children: o }), placement: "right", children: a }) : a });
                },
                r2 = (e) => {
                    let { id: t, theme: r, children: n } = e;
                    return (0, s.jsx)("span", { "data-testid": "flowbite-sidebar-item-content", id: "flowbite-sidebar-item-".concat(t), className: (0, f.m6)(r.content.base), children: n });
                },
                r6 = (0, c.forwardRef)((e, t) => {
                    var r, n, o, a, l;
                    let { active: i, as: d = "a", children: u, className: g, icon: p, label: m, labelColor: h = "info", theme: y = {}, ...v } = e,
                        x = (0, c.useId)(),
                        { theme: w, isCollapsed: k } = rX(),
                        { isInsideCollapse: E } = (function () {
                            let e = (0, c.useContext)(r0);
                            if (!e) throw Error("useSidebarItemContext should be used within the SidebarItemContext provider!");
                            return e;
                        })(),
                        C = b(w.item, y);
                    return (0, s.jsx)(r5, {
                        theme: C,
                        className: C.listItem,
                        id: x,
                        isCollapsed: k,
                        tooltipChildren: u,
                        children: (0, s.jsxs)(d, {
                            "aria-labelledby": "flowbite-sidebar-item-".concat(x),
                            ref: t,
                            className: (0, f.m6)(C.base, i && C.active, !k && E && (null === (r = C.collapsed) || void 0 === r ? void 0 : r.insideCollapse), g),
                            ...v,
                            children: [
                                p &&
                                    (0, s.jsx)(p, {
                                        "aria-hidden": !0,
                                        "data-testid": "flowbite-sidebar-item-icon",
                                        className: (0, f.m6)(null === (n = C.icon) || void 0 === n ? void 0 : n.base, i && (null === (o = C.icon) || void 0 === o ? void 0 : o.active)),
                                    }),
                                k && !p && (0, s.jsx)("span", { className: null === (a = C.collapsed) || void 0 === a ? void 0 : a.noIcon, children: null !== (l = u.charAt(0).toLocaleUpperCase()) && void 0 !== l ? l : "?" }),
                                !k && (0, s.jsx)(r2, { id: x, theme: C, children: u }),
                                !k && m && (0, s.jsx)(M, { color: h, "data-testid": "flowbite-sidebar-label", hidden: k, className: C.label, children: m }),
                            ],
                        }),
                    });
                });
            r6.displayName = "Sidebar.Item";
            let r4 = (e) => {
                let { children: t, className: r, theme: n = {}, ...o } = e,
                    { theme: a } = rX(),
                    l = b(a.itemGroup, n);
                return (0, s.jsx)("ul", { "data-testid": "flowbite-sidebar-item-group", className: (0, f.m6)(l.base, r), ...o, children: (0, s.jsx)(r0.Provider, { value: { isInsideCollapse: !1 }, children: t }) });
            };
            r4.displayName = "Sidebar.ItemGroup";
            let r7 = (e) => {
                let { children: t, className: r, theme: n = {}, ...o } = e,
                    { theme: a } = rX(),
                    l = b(a.items, n);
                return (0, s.jsx)("div", { className: (0, f.m6)(l.base, r), "data-testid": "flowbite-sidebar-items", ...o, children: t });
            };
            r7.displayName = "Sidebar.Items";
            let r3 = (e) => {
                let { children: t, className: r, href: n, img: o, imgAlt: a = "", theme: l = {}, ...i } = e,
                    d = (0, c.useId)(),
                    { theme: u, isCollapsed: g } = rX(),
                    p = b(u.logo, l);
                return (0, s.jsxs)("a", {
                    "aria-labelledby": "flowbite-sidebar-logo-".concat(d),
                    href: n,
                    className: (0, f.m6)(p.base, r),
                    ...i,
                    children: [(0, s.jsx)("img", { alt: a, src: o, className: p.img }), (0, s.jsx)("span", { className: p.collapsed[g ? "on" : "off"], id: "flowbite-sidebar-logo-".concat(d), children: t })],
                });
            };
            r3.displayName = "Sidebar.Logo";
            let r9 = (e) => {
                let { children: t, as: r = "nav", collapseBehavior: n = "collapse", collapsed: o = !1, theme: a = {}, className: l, ...i } = e,
                    c = b(v().sidebar, a);
                return (0, s.jsx)(rG.Provider, {
                    value: { theme: c, isCollapsed: o },
                    children: (0, s.jsx)(r, {
                        "aria-label": "Sidebar",
                        hidden: o && "hide" === n,
                        className: (0, f.m6)(c.root.base, c.root.collapsed[o ? "on" : "off"], l),
                        ...i,
                        children: (0, s.jsx)("div", { className: c.root.inner, children: t }),
                    }),
                });
            };
            (r9.displayName = "Sidebar"), Object.assign(r9, { Collapse: r1, CTA: rq, Item: r6, Items: r7, ItemGroup: r4, Logo: r3 });
            let r8 = (0, c.createContext)(void 0),
                ne = (0, c.createContext)(void 0);
            function nt() {
                let e = (0, c.useContext)(ne);
                if (!e) throw Error("useTableContext should be used within the TableContext provider!");
                return e;
            }
            let nr = (e) => {
                    let { children: t, className: r, theme: n = {}, ...o } = e,
                        { theme: a } = nt(),
                        l = b(a.body, n);
                    return (0, s.jsx)(r8.Provider, { value: { theme: l }, children: (0, s.jsx)("tbody", { className: (0, f.m6)(l.base, r), ...o, children: t }) });
                },
                nn = (e) => {
                    let { children: t, className: r, theme: n = {}, ...o } = e,
                        { theme: a } = (function () {
                            let e = (0, c.useContext)(r8);
                            if (!e) throw Error("useTableBodyContext should be used within the TableBodyContext provider!");
                            return e;
                        })(),
                        l = b(a.cell, n);
                    return (0, s.jsx)("td", { className: (0, f.m6)(l.base, r), ...o, children: t });
                },
                no = (0, c.createContext)(void 0),
                na = (e) => {
                    let { children: t, className: r, theme: n = {}, ...o } = e,
                        { theme: a } = nt(),
                        l = b(a.head, n);
                    return (0, s.jsx)(no.Provider, { value: { theme: l }, children: (0, s.jsx)("thead", { className: (0, f.m6)(l.base, r), ...o, children: (0, s.jsx)("tr", { children: t }) }) });
                },
                nl = (e) => {
                    let { children: t, className: r, theme: n = {}, ...o } = e,
                        { theme: a } = (function () {
                            let e = (0, c.useContext)(no);
                            if (!e) throw Error("useTableHeadContext should be used within the TableHeadContext provider!");
                            return e;
                        })(),
                        l = b(a.cell, n);
                    return (0, s.jsx)("th", { className: (0, f.m6)(l.base, r), ...o, children: t });
                },
                ni = (e) => {
                    let { children: t, className: r, theme: n = {}, ...o } = e,
                        { theme: a, hoverable: l, striped: i } = nt(),
                        c = b(a.row, n);
                    return (0, s.jsx)("tr", { "data-testid": "table-row-element", className: (0, f.m6)(c.base, i && c.striped, l && c.hovered, r), ...o, children: t });
                },
                ns = (e) => {
                    let { children: t, className: r, striped: n, hoverable: o, theme: a = {}, ...l } = e,
                        i = b(v().table, a);
                    return (0, s.jsx)("div", {
                        "data-testid": "table-element",
                        className: (0, f.m6)(i.root.wrapper),
                        children: (0, s.jsxs)(ne.Provider, {
                            value: { theme: i, striped: n, hoverable: o },
                            children: [(0, s.jsx)("div", { className: (0, f.m6)(i.root.shadow, r) }), (0, s.jsx)("table", { className: (0, f.m6)(i.root.base, r), ...l, children: t })],
                        }),
                    });
                };
            (ns.displayName = "Table"),
                (na.displayName = "Table.Head"),
                (nr.displayName = "Table.Body"),
                (ni.displayName = "Table.Row"),
                (nn.displayName = "Table.Cell"),
                (nl.displayName = "Table.HeadCell"),
                Object.assign(ns, { Head: na, Body: nr, Row: ni, Cell: nn, HeadCell: nl });
            let nc = (e) => {
                let { children: t, className: r } = e;
                return (0, s.jsx)("div", { className: r, children: t });
            };
            nc.displayName = "Tabs.Item";
            let nd = (0, c.forwardRef)((e, t) => {
                let { children: r, className: n, onActiveTabChange: o, style: a = "default", theme: l = {}, ...i } = e,
                    d = b(v().tabs, l),
                    u = (0, c.useId)(),
                    g = (0, c.useMemo)(
                        () =>
                            c.Children.map(c.Children.toArray(r), (e) => {
                                let { props: t } = e;
                                return t;
                            }),
                        [r]
                    ),
                    p = (0, c.useRef)([]),
                    [m, h] = (0, c.useState)(
                        Math.max(
                            0,
                            g.findIndex((e) => e.active)
                        )
                    ),
                    [y, x] = (0, c.useState)(-1),
                    w = (e) => {
                        h(e), o && o(e);
                    },
                    k = (e) => {
                        let { target: t } = e;
                        w(t), x(t);
                    },
                    E = (e) => {
                        let { event: t, target: r } = e;
                        "ArrowLeft" === t.key && x(Math.max(0, y - 1)), "ArrowRight" === t.key && x(Math.min(g.length - 1, y + 1)), "Enter" === t.key && (w(r), x(r));
                    },
                    C = d.tablist.tabitem.styles[a],
                    S = d.tabitemcontainer.styles[a];
                return (
                    (0, c.useEffect)(() => {
                        var e;
                        null === (e = p.current[y]) || void 0 === e || e.focus();
                    }, [y]),
                    (0, c.useImperativeHandle)(t, () => ({ setActiveTab: w })),
                    (0, s.jsxs)("div", {
                        className: (0, f.m6)(d.base, n),
                        children: [
                            (0, s.jsx)("div", {
                                "aria-label": "Tabs",
                                role: "tablist",
                                className: (0, f.m6)(d.tablist.base, d.tablist.styles[a], n),
                                ...i,
                                children: g.map((e, t) =>
                                    (0, s.jsxs)(
                                        "button",
                                        {
                                            type: "button",
                                            "aria-controls": "".concat(u, "-tabpanel-").concat(t),
                                            "aria-selected": t === m,
                                            className: (0, f.m6)(d.tablist.tabitem.base, C.base, t === m && C.active.on, t !== m && !e.disabled && C.active.off),
                                            disabled: e.disabled,
                                            id: "".concat(u, "-tab-").concat(t),
                                            onClick: () => k({ target: t }),
                                            onKeyDown: (e) => E({ event: e, target: t }),
                                            ref: (e) => (p.current[t] = e),
                                            role: "tab",
                                            tabIndex: t === y ? 0 : -1,
                                            style: { zIndex: t === y ? 2 : 1 },
                                            children: [e.icon && (0, s.jsx)(e.icon, { className: d.tablist.tabitem.icon }), e.title],
                                        },
                                        t
                                    )
                                ),
                            }),
                            (0, s.jsx)("div", {
                                className: (0, f.m6)(d.tabitemcontainer.base, S),
                                children: g.map((e, t) =>
                                    (0, s.jsx)(
                                        "div",
                                        { "aria-labelledby": "".concat(u, "-tab-").concat(t), className: d.tabpanel, hidden: t !== m, id: "".concat(u, "-tabpanel-").concat(t), role: "tabpanel", tabIndex: 0, children: e.children },
                                        t
                                    )
                                ),
                            }),
                        ],
                    })
                );
            });
            (nd.displayName = "Tabs"),
                Object.assign(nd, { Item: nc }),
                ((0, c.forwardRef)(({ className: e, color: t = "gray", helperText: r, shadow: n, theme: o = {}, ...a }, l) => {
                    let i = b(v().textarea, o);
                    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)("textarea", { ref: l, className: (0, f.m6)(i.base, i.colors[t], i.withShadow[n ? "on" : "off"], e), ...a }), r && (0, s.jsx)(el, { color: t, children: r })] });
                }).displayName = "Textarea");
            let nu = (0, c.createContext)(void 0);
            function nf() {
                let e = (0, c.useContext)(nu);
                if (!e) throw Error("useTimelineContentContext should be used within the TimelineContentContext provider!");
                return e;
            }
            let ng = (e) => {
                    let { children: t, className: r, theme: n = {}, ...o } = e,
                        { theme: a } = nf(),
                        l = b(a.body, n);
                    return (0, s.jsx)("div", { className: (0, f.m6)(l.base, r), ...o, children: t });
                },
                np = (0, c.createContext)(void 0);
            function nb() {
                let e = (0, c.useContext)(np);
                if (!e) throw Error("useTimelineContext should be used within the TimelineContext provider!");
                return e;
            }
            let nm = (0, c.createContext)(void 0);
            function nh() {
                let e = (0, c.useContext)(nm);
                if (!e) throw Error("useTimelineItemContext should be used within the TimelineItemContext provider!");
                return e;
            }
            let ny = (e) => {
                    let { children: t, className: r, theme: n = {}, ...o } = e,
                        { horizontal: a } = nb(),
                        { theme: l } = nh(),
                        i = b(l.content, n);
                    return (0, s.jsx)(nu.Provider, { value: { theme: i }, children: (0, s.jsx)("div", { "data-testid": "timeline-content", className: (0, f.m6)(a && i.root.base, r), ...o, children: t }) });
                },
                nv = (e) => {
                    let { children: t, className: r, theme: n = {}, ...o } = e,
                        { theme: a, horizontal: l } = nb(),
                        i = b(a.item, n);
                    return (0, s.jsx)(nm.Provider, { value: { theme: i }, children: (0, s.jsx)("li", { "data-testid": "timeline-item", className: (0, f.m6)(l && i.root.horizontal, !l && i.root.vertical, r), ...o, children: t }) });
                },
                nx = (e) => {
                    let { children: t, className: r, icon: n, theme: o = {}, ...a } = e,
                        { horizontal: l } = nb(),
                        { theme: i } = nh(),
                        c = b(i.point, o);
                    return (0, s.jsxs)("div", {
                        "data-testid": "timeline-point",
                        className: (0, f.m6)(l && c.horizontal, !l && c.vertical, r),
                        ...a,
                        children: [
                            t,
                            n
                                ? (0, s.jsx)("span", { className: (0, f.m6)(c.marker.icon.wrapper), children: (0, s.jsx)(n, { "aria-hidden": !0, className: (0, f.m6)(c.marker.icon.base) }) })
                                : (0, s.jsx)("div", { className: (0, f.m6)(l && c.marker.base.horizontal, !l && c.marker.base.vertical) }),
                            l && (0, s.jsx)("div", { className: (0, f.m6)(c.line) }),
                        ],
                    });
                },
                nw = (e) => {
                    let { children: t, className: r, theme: n = {}, ...o } = e,
                        { theme: a } = nf(),
                        l = b(a.time, n);
                    return (0, s.jsx)("time", { className: (0, f.m6)(l.base, r), ...o, children: t });
                },
                nk = (e) => {
                    let { as: t = "h3", children: r, className: n, theme: o = {}, ...a } = e,
                        { theme: l } = nf(),
                        i = b(l.title, o);
                    return (0, s.jsx)(t, { className: (0, f.m6)(i.base, n), ...a, children: r });
                },
                nE = (e) => {
                    let { children: t, className: r, horizontal: n, theme: o = {}, ...a } = e,
                        l = b(v().timeline, o);
                    return (0, s.jsx)(np.Provider, {
                        value: { theme: l, horizontal: n },
                        children: (0, s.jsx)("ol", { "data-testid": "timeline-component", className: (0, f.m6)(n && l.root.direction.horizontal, !n && l.root.direction.vertical, r), ...a, children: t }),
                    });
                };
            (nE.displayName = "Timeline"),
                (nv.displayName = "Timeline.Item"),
                (nx.displayName = "Timeline.Point"),
                (ny.displayName = "Timeline.Content"),
                (nw.displayName = "Timeline.Time"),
                (nk.displayName = "Timeline.Title"),
                (ng.displayName = "Timeline.Body");
            let nC = Object.assign(nE, { Item: nv, Point: nx, Content: ny, Time: nw, Title: nk, Body: ng }),
                nS = (0, c.createContext)(void 0),
                nN = (e) => {
                    let { className: t, onClick: r, theme: n = {}, xIcon: o = u.apv, onDismiss: a, ...l } = e,
                        { theme: i, duration: d, isClosed: g, isRemoved: p, setIsClosed: m, setIsRemoved: h } = (function () {
                            let e = (0, c.useContext)(nS);
                            if (!e) throw Error("useToastContext should be used within the ToastContext provider!");
                            return e;
                        })(),
                        y = b(i.toggle, n);
                    return (0, s.jsx)("button", {
                        "aria-label": "Close",
                        onClick: (e) => {
                            if ((r && r(e), a)) {
                                a();
                                return;
                            }
                            m(!g), setTimeout(() => h(!p), d);
                        },
                        type: "button",
                        className: (0, f.m6)(y.base, t),
                        ...l,
                        children: (0, s.jsx)(o, { "aria-hidden": !0, className: y.icon }),
                    });
                },
                nT = { 75: "duration-75", 100: "duration-100", 150: "duration-150", 200: "duration-200", 300: "duration-300", 500: "duration-500", 700: "duration-700", 1e3: "duration-1000" },
                nR = (e) => {
                    let { children: t, className: r, duration: n = 300, theme: o = {}, ...a } = e,
                        [l, i] = (0, c.useState)(!1),
                        [d, u] = (0, c.useState)(!1),
                        g = b(v().toast, o);
                    return d
                        ? null
                        : (0, s.jsx)(nS.Provider, {
                              value: { theme: g, duration: n, isClosed: l, isRemoved: d, setIsClosed: i, setIsRemoved: u },
                              children: (0, s.jsx)("div", { "data-testid": "flowbite-toast", role: "alert", className: (0, f.m6)(g.root.base, nT[n], l && g.root.closed, r), ...a, children: t }),
                          });
                };
            (nR.displayName = "Toast"), (nN.displayName = "Toast.Toggle"), Object.assign(nR, { Toggle: nN });
        },
        4083: function (e, t, r) {
            r.d(t, {
                Z: function () {
                    return l;
                },
            });
            var n = r(5465),
                o = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
            /**
             * @license lucide-react v0.356.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */ let a = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
                l = (e, t) => {
                    let r = (0, n.forwardRef)(({ color: r = "currentColor", size: l = 24, strokeWidth: i = 2, absoluteStrokeWidth: s, className: c = "", children: d, ...u }, f) =>
                        (0, n.createElement)("svg", { ref: f, ...o, width: l, height: l, stroke: r, strokeWidth: s ? (24 * Number(i)) / Number(l) : i, className: ["lucide", `lucide-${a(e)}`, c].join(" "), ...u }, [
                            ...t.map(([e, t]) => (0, n.createElement)(e, t)),
                            ...(Array.isArray(d) ? d : [d]),
                        ])
                    );
                    return (r.displayName = `${e}`), r;
                };
        },
        4831: function (e, t, r) {
            r.d(t, {
                Z: function () {
                    return n;
                },
            });
            /**
             * @license lucide-react v0.356.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */ let n = (0, r(4083).Z)("Github", [
                [
                    "path",
                    {
                        d:
                            "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
                        key: "tonef",
                    },
                ],
                ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
            ]);
        },
        1832: function (e, t, r) {
            r.d(t, {
                Z: function () {
                    return n;
                },
            });
            /**
             * @license lucide-react v0.356.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */ let n = (0, r(4083).Z)("Linkedin", [
                ["path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z", key: "c2jq9f" }],
                ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
                ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
            ]);
        },
        4352: function (e, t, r) {
            r.d(t, {
                Z: function () {
                    return n;
                },
            });
            /**
             * @license lucide-react v0.356.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */ let n = (0, r(4083).Z)("Route", [
                ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }],
                ["path", { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15", key: "1d8sl" }],
                ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
            ]);
        },
        1201: function (e, t, r) {
            r.d(t, {
                Z: function () {
                    return n;
                },
            });
            /**
             * @license lucide-react v0.356.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */ let n = (0, r(4083).Z)("Terminal", [
                ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
                ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
            ]);
        },
        5000: function (e, t, r) {
            r.d(t, {
                Z: function () {
                    return n;
                },
            });
            let n = (0, r(4083).Z)("Youtube", [
                ["path", { d: "M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47a2.78 2.78 0 0 0-1.95 1.95C1 8.13 1 12 1 12s0 3.88.47 5.58a2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95C23 15.87 23 12 23 12s0-3.87-.46-5.58z", key: "k2fg42" }],
                ["polygon", { points: "9.75 15.02 15.58 12 9.75 8.98 9.75 15.02", key: "2k3cxr" }],
            ]);
        },
        6000: function (e, t, r) {
            r.d(t, {
                Z: function () {
                    return n;
                },
            });
            let n = (0, r(4083).Z)("bWebsite", 
                [
                    ["path", { d: "M3.338 17A10 10 0 0 0 12 22a10 10 0 0 0 8.662-5M3.338 7A10 10 0 0 1 12 2a10 10 0 0 1 8.662 5" }],
                    ["path", { d: "M13 21.95s1.408-1.853 2.295-4.95M13 2.05S14.408 3.902 15.295 7M11 21.95S9.592 20.098 8.705 17M11 2.05S9.592 3.902 8.705 7M9 10l1.5 5l1.5-5l1.5 5l1.5-5M1 10l1.5 5L4 10l1.5 5L7 10m10 0l1.5 5l1.5-5l1.5 5l1.5-5"}]
]);
        },

        7000: function (e, t, r) {
            r.d(t, {
                Z: function () {
                    return n;
                },
            });
            let n = (0, r(4083).Z)("bTelegram", 
                [
                 ["path", { d: "M11.99432,2a10,10,0,1,0,10,10A9.99917,9.99917,0,0,0,11.99432,2Zm3.17951,15.15247a.70547.70547,0,0,1-1.002.3515l-2.71467-2.10938L9.71484,17.002a.29969.29969,0,0,1-.285.03894l.334-2.98846.01069.00848.00683-.059s4.885-4.44751,5.084-4.637c.20147-.189.135-.23.135-.23.01147-.23053-.36152,0-.36152,0L8.16632,13.299l-2.69549-.918s-.414-.1485-.453-.475c-.041-.324.46649-.5.46649-.5l10.717-4.25751s.881-.39252.881.25751Z", }]                    
                ]);
        },

        112: function (e, t, r) {
            r.d(t, {
                Z: function () {
                    return n;
                },
            });
            /**
             * @license lucide-react v0.356.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */ let n = (0, r(4083).Z)("Twitter", [["path", { d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z", key: "pff0z6" }]]);
        },
        1977: function (e, t, r) {
            r.d(t, {
                Z: function () {
                    return n;
                },
            });
            /**
             * @license lucide-react v0.356.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */ let n = (0, r(4083).Z)("UserRoundSearch", [
                ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
                ["path", { d: "M2 21a8 8 0 0 1 10.434-7.62", key: "1yezr2" }],
                ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
                ["path", { d: "m22 22-1.9-1.9", key: "1e5ubv" }],
            ]);
        },
        378: function (e, t, r) {
            r.d(t, {
                F: function () {
                    return c;
                },
                f: function () {
                    return d;
                },
            });
            var n = r(5465);
            let o = ["light", "dark"],
                a = "(prefers-color-scheme: dark)",
                l = "undefined" == typeof window,
                i = (0, n.createContext)(void 0),
                s = { setTheme: (e) => {}, themes: [] },
                c = () => {
                    var e;
                    return null !== (e = (0, n.useContext)(i)) && void 0 !== e ? e : s;
                },
                d = (e) => ((0, n.useContext)(i) ? n.createElement(n.Fragment, null, e.children) : n.createElement(f, e)),
                u = ["light", "dark"],
                f = ({
                    forcedTheme: e,
                    disableTransitionOnChange: t = !1,
                    enableSystem: r = !0,
                    enableColorScheme: l = !0,
                    storageKey: s = "theme",
                    themes: c = u,
                    defaultTheme: d = r ? "system" : "light",
                    attribute: f = "data-theme",
                    value: h,
                    children: y,
                    nonce: v,
                }) => {
                    let [x, w] = (0, n.useState)(() => p(s, d)),
                        [k, E] = (0, n.useState)(() => p(s)),
                        C = h ? Object.values(h) : c,
                        S = (0, n.useCallback)((e) => {
                            let n = e;
                            if (!n) return;
                            "system" === e && r && (n = m());
                            let a = h ? h[n] : n,
                                i = t ? b() : null,
                                s = document.documentElement;
                            if (("class" === f ? (s.classList.remove(...C), a && s.classList.add(a)) : a ? s.setAttribute(f, a) : s.removeAttribute(f), l)) {
                                let e = o.includes(d) ? d : null,
                                    t = o.includes(n) ? n : e;
                                s.style.colorScheme = t;
                            }
                            null == i || i();
                        }, []),
                        N = (0, n.useCallback)(
                            (e) => {
                                w(e);
                                try {
                                    localStorage.setItem(s, e);
                                } catch (e) {}
                            },
                            [e]
                        ),
                        T = (0, n.useCallback)(
                            (t) => {
                                E(m(t)), "system" === x && r && !e && S("system");
                            },
                            [x, e]
                        );
                    (0, n.useEffect)(() => {
                        let e = window.matchMedia(a);
                        return e.addListener(T), T(e), () => e.removeListener(T);
                    }, [T]),
                        (0, n.useEffect)(() => {
                            let e = (e) => {
                                e.key === s && N(e.newValue || d);
                            };
                            return window.addEventListener("storage", e), () => window.removeEventListener("storage", e);
                        }, [N]),
                        (0, n.useEffect)(() => {
                            S(null != e ? e : x);
                        }, [e, x]);
                    let R = (0, n.useMemo)(() => ({ theme: x, setTheme: N, forcedTheme: e, resolvedTheme: "system" === x ? k : x, themes: r ? [...c, "system"] : c, systemTheme: r ? k : void 0 }), [x, N, e, k, r, c]);
                    return n.createElement(
                        i.Provider,
                        { value: R },
                        n.createElement(g, { forcedTheme: e, disableTransitionOnChange: t, enableSystem: r, enableColorScheme: l, storageKey: s, themes: c, defaultTheme: d, attribute: f, value: h, children: y, attrs: C, nonce: v }),
                        y
                    );
                },
                g = (0, n.memo)(
                    ({ forcedTheme: e, storageKey: t, attribute: r, enableSystem: l, enableColorScheme: i, defaultTheme: s, value: c, attrs: d, nonce: u }) => {
                        let f = "system" === s,
                            g = "class" === r ? `var d=document.documentElement,c=d.classList;c.remove(${d.map((e) => `'${e}'`).join(",")});` : `var d=document.documentElement,n='${r}',s='setAttribute';`,
                            p = i ? (o.includes(s) && s ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e") : "",
                            b = (e, t = !1, n = !0) => {
                                let a = c ? c[e] : e,
                                    l = t ? e + "|| ''" : `'${a}'`,
                                    s = "";
                                return i && n && !t && o.includes(e) && (s += `d.style.colorScheme = '${e}';`), "class" === r ? (s += t || a ? `c.add(${l})` : "null") : a && (s += `d[s](n,${l})`), s;
                            },
                            m = e
                                ? `!function(){${g}${b(e)}}()`
                                : l
                                ? `!function(){try{${g}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${b("dark")}}else{${b("light")}}}else if(e){${
                                      c ? `var x=${JSON.stringify(c)};` : ""
                                  }${b(c ? "x[e]" : "e", !0)}}${f ? "" : "else{" + b(s, !1, !1) + "}"}${p}}catch(e){}}()`
                                : `!function(){try{${g}var e=localStorage.getItem('${t}');if(e){${c ? `var x=${JSON.stringify(c)};` : ""}${b(c ? "x[e]" : "e", !0)}}else{${b(s, !1, !1)};}${p}}catch(t){}}();`;
                        return n.createElement("script", { nonce: u, dangerouslySetInnerHTML: { __html: m } });
                    },
                    () => !0
                ),
                p = (e, t) => {
                    let r;
                    if (!l) {
                        try {
                            r = localStorage.getItem(e) || void 0;
                        } catch (e) {}
                        return r || t;
                    }
                },
                b = () => {
                    let e = document.createElement("style");
                    return (
                        e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),
                        document.head.appendChild(e),
                        () => {
                            window.getComputedStyle(document.body),
                                setTimeout(() => {
                                    document.head.removeChild(e);
                                }, 1);
                        }
                    );
                },
                m = (e) => (e || (e = window.matchMedia(a)), e.matches ? "dark" : "light");
        },
        3975: function (e, t, r) {
            r.d(t, {
                w_: function () {
                    return s;
                },
            });
            var n = r(5465),
                o = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
                a = n.createContext && n.createContext(o),
                l = function () {
                    return (l =
                        Object.assign ||
                        function (e) {
                            for (var t, r = 1, n = arguments.length; r < n; r++) for (var o in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e;
                        }).apply(this, arguments);
                },
                i = function (e, t) {
                    var r = {};
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) 0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
                    return r;
                };
            function s(e) {
                return function (t) {
                    return n.createElement(
                        c,
                        l({ attr: l({}, e.attr) }, t),
                        (function e(t) {
                            return (
                                t &&
                                t.map(function (t, r) {
                                    return n.createElement(t.tag, l({ key: r }, t.attr), e(t.child));
                                })
                            );
                        })(e.child)
                    );
                };
            }
            function c(e) {
                var t = function (t) {
                    var r,
                        o = e.attr,
                        a = e.size,
                        s = e.title,
                        c = i(e, ["attr", "size", "title"]),
                        d = a || t.size || "1em";
                    return (
                        t.className && (r = t.className),
                        e.className && (r = (r ? r + " " : "") + e.className),
                        n.createElement(
                            "svg",
                            l({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, t.attr, o, c, {
                                className: r,
                                style: l(l({ color: e.color || t.color }, t.style), e.style),
                                height: d,
                                width: d,
                                xmlns: "http://www.w3.org/2000/svg",
                            }),
                            s && n.createElement("title", null, s),
                            e.children
                        )
                    );
                };
                return void 0 !== a
                    ? n.createElement(a.Consumer, null, function (e) {
                          return t(e);
                      })
                    : t(o);
            }
        },
        5853: function (e, t, r) {
            r.d(t, {
                UX: function () {
                    return o;
                },
                ZP: function () {
                    return s;
                },
                bs: function () {
                    return i;
                },
            });
            var n,
                o,
                a = r(5465);
            function l(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n,
                    o,
                    a = r.call(e),
                    l = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; ) l.push(n.value);
                } catch (e) {
                    o = { error: e };
                } finally {
                    try {
                        n && !n.done && (r = a.return) && r.call(a);
                    } finally {
                        if (o) throw o.error;
                    }
                }
                return l;
            }
            "function" == typeof SuppressedError && SuppressedError;
            var i = function (e) {
                var t = e.children;
                return a.createElement("div", { className: "react-terminal-line" }, t);
            };
            !(function (e, t) {
                void 0 === t && (t = {});
                var r = t.insertAt;
                if (e && "undefined" != typeof document) {
                    var n = document.head || document.getElementsByTagName("head")[0],
                        o = document.createElement("style");
                    (o.type = "text/css"), "top" === r && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o), o.styleSheet ? (o.styleSheet.cssText = e) : o.appendChild(document.createTextNode(e));
                }
            })(
                "/**\n * Modfied version of [termynal.js](https://github.com/ines/termynal/blob/master/termynal.css).\n *\n * @author Ines Montani <ines@ines.io>\n * @version 0.0.1\n * @license MIT\n */\n .react-terminal-wrapper {\n  width: 100%;\n  background: #252a33;\n  color: #eee;\n  font-size: 18px;\n  font-family: 'Fira Mono', Consolas, Menlo, Monaco, 'Courier New', Courier, monospace;\n  border-radius: 4px;\n  padding: 75px 45px 35px;\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n }\n\n.react-terminal {\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n}\n\n.react-terminal-wrapper.react-terminal-light {\n  background: #ddd;\n  color: #1a1e24;\n}\n\n.react-terminal-window-buttons {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n}\n\n.react-terminal-window-buttons button {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  border: 0;\n}\n\n.react-terminal-window-buttons button.clickable {\n  cursor: pointer;\n}\n\n.react-terminal-window-buttons button.red-btn {\n  background: #d9515d;\n}\n\n.react-terminal-window-buttons button.yellow-btn {\n  background: #f4c025;\n}\n\n.react-terminal-window-buttons button.green-btn {\n  background: #3ec930;\n}\n\n.react-terminal-wrapper:after {\n  content: attr(data-terminal-name);\n  position: absolute;\n  color: #a2a2a2;\n  top: 5px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  pointer-events: none;\n}\n\n.react-terminal-wrapper.react-terminal-light:after {\n  color: #D76D77;\n}\n\n.react-terminal-line {\n  white-space: pre;\n}\n\n.react-terminal-line:before {\n  /* Set up defaults and ensure empty lines are displayed. */\n  content: '';\n  display: inline-block;\n  vertical-align: middle;\n  color: #a2a2a2;\n}\n\n.react-terminal-light .react-terminal-line:before {\n  color: #D76D77;\n}\n\n.react-terminal-input:before {\n  margin-right: 0.75em;\n  content: '$';\n}\n\n.react-terminal-input[data-terminal-prompt]:before {\n  content: attr(data-terminal-prompt);\n}\n\n.react-terminal-wrapper:focus-within .react-terminal-active-input .cursor {\n  position: relative;\n  display: inline-block;\n  width: 0.55em;\n  height: 1em;\n  top: 0.225em;\n  background: #fff;\n  -webkit-animation: blink 1s infinite;\n          animation: blink 1s infinite;\n}\n\n/* Cursor animation */\n\n@-webkit-keyframes blink {\n  50% {\n      opacity: 0;\n  }\n}\n\n@keyframes blink {\n  50% {\n      opacity: 0;\n  }\n}\n\n.terminal-hidden-input {\n    position: fixed;\n    left: -1000px;\n}\n\n/* .react-terminal-progress {\n  display: flex;\n  margin: .5rem 0;\n}\n\n.react-terminal-progress-bar {\n  background-color: #fff;\n  border-radius: .25rem;\n  width: 25%;\n}\n\n.react-terminal-wrapper.react-terminal-light .react-terminal-progress-bar {\n  background-color: #000;\n} */\n"
            ),
                ((n = o || (o = {}))[(n.Light = 0)] = "Light"),
                (n[(n.Dark = 1)] = "Dark");
            var s = function (e) {
                var t = e.name,
                    r = e.prompt,
                    n = e.height,
                    i = e.colorMode,
                    s = e.onInput,
                    c = e.children,
                    d = e.startingInputValue,
                    u = void 0 === d ? "" : d,
                    f = e.redBtnCallback,
                    g = e.yellowBtnCallback,
                    p = e.greenBtnCallback,
                    b = l((0, a.useState)(""), 2),
                    m = b[0],
                    h = b[1],
                    y = l((0, a.useState)(0), 2),
                    v = y[0],
                    x = y[1],
                    w = (0, a.useRef)(null);
                (0, a.useEffect)(
                    function () {
                        h(u.trim());
                    },
                    [u]
                ),
                    (0, a.useEffect)(
                        function () {
                            var e, t;
                            if (null != s) {
                                var r = [],
                                    n = function (e) {
                                        var t = function () {
                                            var t;
                                            return null === (t = null == e ? void 0 : e.querySelector(".terminal-hidden-input")) || void 0 === t ? void 0 : t.focus();
                                        };
                                        null == e || e.addEventListener("click", t), r.push({ terminalEl: e, listener: t });
                                    };
                                try {
                                    for (
                                        var o = (function (e) {
                                                var t = "function" == typeof Symbol && Symbol.iterator,
                                                    r = t && e[t],
                                                    n = 0;
                                                if (r) return r.call(e);
                                                if (e && "number" == typeof e.length)
                                                    return {
                                                        next: function () {
                                                            return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
                                                        },
                                                    };
                                                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
                                            })(document.getElementsByClassName("react-terminal-wrapper")),
                                            a = o.next();
                                        !a.done;
                                        a = o.next()
                                    )
                                        n(a.value);
                                } catch (t) {
                                    e = { error: t };
                                } finally {
                                    try {
                                        a && !a.done && (t = o.return) && t.call(o);
                                    } finally {
                                        if (e) throw e.error;
                                    }
                                }
                                return function () {
                                    r.forEach(function (e) {
                                        e.terminalEl.removeEventListener("click", e.listener);
                                    });
                                };
                            }
                        },
                        [s]
                    );
                var k = ["react-terminal-wrapper"];
                return (
                    i === o.Light && k.push("react-terminal-light"),
                    a.createElement(
                        "div",
                        { className: k.join(" "), "data-terminal-name": t },
                        a.createElement(
                            "div",
                            { className: "react-terminal-window-buttons" },
                            a.createElement("button", { className: (g ? "clickable" : "") + " red-btn", disabled: !f, onClick: f }),
                            a.createElement("button", { className: (g ? "clickable" : "") + " yellow-btn", disabled: !g, onClick: g }),
                            a.createElement("button", { className: (p ? "clickable" : "") + " green-btn", disabled: !p, onClick: p })
                        ),
                        a.createElement(
                            "div",
                            { className: "react-terminal", style: { height: void 0 === n ? "600px" : n } },
                            c,
                            "function" == typeof s &&
                                a.createElement(
                                    "div",
                                    { className: "react-terminal-line react-terminal-input react-terminal-active-input", "data-terminal-prompt": r || "$", key: "terminal-line-prompt" },
                                    m,
                                    a.createElement("span", { className: "cursor", style: { left: v + 1 + "px" } })
                                ),
                            a.createElement("div", { ref: w })
                        ),
                        a.createElement("input", {
                            className: "terminal-hidden-input",
                            placeholder: "Terminal Hidden Input",
                            value: m,
                            autoFocus: null != s,
                            onChange: function (e) {
                                h(e.target.value);
                            },
                            onKeyDown: function (e) {
                                var t, r;
                                if (s) {
                                    if ("Enter" === e.key)
                                        s(m),
                                            x(0),
                                            h(""),
                                            setTimeout(function () {
                                                var e;
                                                return null === (e = null == w ? void 0 : w.current) || void 0 === e ? void 0 : e.scrollIntoView({ behavior: "auto", block: "nearest" });
                                            }, 500);
                                    else if (["ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp", "Delete"].includes(e.key)) {
                                        var n,
                                            o,
                                            a,
                                            l = e.currentTarget,
                                            i = "",
                                            c = m.length - (l.selectionStart || 0);
                                        (c = (t = c) > (r = m.length) ? r : t < 0 ? 0 : t),
                                            "ArrowLeft" === e.key
                                                ? (c > m.length - 1 && c--, (i = m.slice(m.length - 1 - c)))
                                                : "ArrowRight" === e.key || "Delete" === e.key
                                                ? (i = m.slice(m.length - c + 1))
                                                : "ArrowUp" === e.key && (i = m.slice(0)),
                                            x(
                                                ((n = i),
                                                ((o = document.createElement("span")).style.visibility = "hidden"),
                                                (o.style.position = "absolute"),
                                                (o.style.fontSize = window.getComputedStyle(l).fontSize),
                                                (o.style.fontFamily = window.getComputedStyle(l).fontFamily),
                                                (o.innerText = n),
                                                document.body.appendChild(o),
                                                (a = o.getBoundingClientRect().width),
                                                document.body.removeChild(o),
                                                -a)
                                            );
                                    }
                                }
                            },
                        })
                    )
                );
            };
        },
        9063: function (e, t, r) {
            r.d(t, {
                Z: function () {
                    return n;
                },
            });
            function n() {
                return (n = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = arguments[t];
                              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                          }
                          return e;
                      }).apply(this, arguments);
            }
        },
        9074: function (e, t, r) {
            r.d(t, {
                Cp: function () {
                    return f;
                },
                RR: function () {
                    return c;
                },
                X5: function () {
                    return s;
                },
                cv: function () {
                    return p;
                },
                dp: function () {
                    return h;
                },
                dr: function () {
                    return m;
                },
                oo: function () {
                    return a;
                },
                uY: function () {
                    return b;
                },
                x7: function () {
                    return i;
                },
            });
            var n = r(3025);
            function o(e, t, r) {
                let o,
                    { reference: a, floating: l } = e,
                    i = (0, n.Qq)(t),
                    s = (0, n.Wh)(t),
                    c = (0, n.I4)(s),
                    d = (0, n.k3)(t),
                    u = "y" === i,
                    f = a.x + a.width / 2 - l.width / 2,
                    g = a.y + a.height / 2 - l.height / 2,
                    p = a[c] / 2 - l[c] / 2;
                switch (d) {
                    case "top":
                        o = { x: f, y: a.y - l.height };
                        break;
                    case "bottom":
                        o = { x: f, y: a.y + a.height };
                        break;
                    case "right":
                        o = { x: a.x + a.width, y: g };
                        break;
                    case "left":
                        o = { x: a.x - l.width, y: g };
                        break;
                    default:
                        o = { x: a.x, y: a.y };
                }
                switch ((0, n.hp)(t)) {
                    case "start":
                        o[s] -= p * (r && u ? -1 : 1);
                        break;
                    case "end":
                        o[s] += p * (r && u ? -1 : 1);
                }
                return o;
            }
            let a = async (e, t, r) => {
                let { placement: n = "bottom", strategy: a = "absolute", middleware: l = [], platform: i } = r,
                    s = l.filter(Boolean),
                    c = await (null == i.isRTL ? void 0 : i.isRTL(t)),
                    d = await i.getElementRects({ reference: e, floating: t, strategy: a }),
                    { x: u, y: f } = o(d, n, c),
                    g = n,
                    p = {},
                    b = 0;
                for (let r = 0; r < s.length; r++) {
                    let { name: l, fn: m } = s[r],
                        { x: h, y: y, data: v, reset: x } = await m({ x: u, y: f, initialPlacement: n, placement: g, strategy: a, middlewareData: p, rects: d, platform: i, elements: { reference: e, floating: t } });
                    (u = null != h ? h : u),
                        (f = null != y ? y : f),
                        (p = { ...p, [l]: { ...p[l], ...v } }),
                        x &&
                            b <= 50 &&
                            (b++,
                            "object" == typeof x && (x.placement && (g = x.placement), x.rects && (d = !0 === x.rects ? await i.getElementRects({ reference: e, floating: t, strategy: a }) : x.rects), ({ x: u, y: f } = o(d, g, c))),
                            (r = -1));
                }
                return { x: u, y: f, placement: g, strategy: a, middlewareData: p };
            };
            async function l(e, t) {
                var r;
                void 0 === t && (t = {});
                let { x: o, y: a, platform: l, rects: i, elements: s, strategy: c } = e,
                    { boundary: d = "clippingAncestors", rootBoundary: u = "viewport", elementContext: f = "floating", altBoundary: g = !1, padding: p = 0 } = (0, n.ku)(t, e),
                    b = (0, n.yd)(p),
                    m = s[g ? ("floating" === f ? "reference" : "floating") : f],
                    h = (0, n.JB)(
                        await l.getClippingRect({
                            element: null == (r = await (null == l.isElement ? void 0 : l.isElement(m))) || r ? m : m.contextElement || (await (null == l.getDocumentElement ? void 0 : l.getDocumentElement(s.floating))),
                            boundary: d,
                            rootBoundary: u,
                            strategy: c,
                        })
                    ),
                    y = "floating" === f ? { ...i.floating, x: o, y: a } : i.reference,
                    v = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(s.floating)),
                    x = ((await (null == l.isElement ? void 0 : l.isElement(v))) && (await (null == l.getScale ? void 0 : l.getScale(v)))) || { x: 1, y: 1 },
                    w = (0, n.JB)(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: s, rect: y, offsetParent: v, strategy: c }) : y);
                return { top: (h.top - w.top + b.top) / x.y, bottom: (w.bottom - h.bottom + b.bottom) / x.y, left: (h.left - w.left + b.left) / x.x, right: (w.right - h.right + b.right) / x.x };
            }
            let i = (e) => ({
                    name: "arrow",
                    options: e,
                    async fn(t) {
                        let { x: r, y: o, placement: a, rects: l, platform: i, elements: s, middlewareData: c } = t,
                            { element: d, padding: u = 0 } = (0, n.ku)(e, t) || {};
                        if (null == d) return {};
                        let f = (0, n.yd)(u),
                            g = { x: r, y: o },
                            p = (0, n.Wh)(a),
                            b = (0, n.I4)(p),
                            m = await i.getDimensions(d),
                            h = "y" === p,
                            y = h ? "clientHeight" : "clientWidth",
                            v = l.reference[b] + l.reference[p] - g[p] - l.floating[b],
                            x = g[p] - l.reference[p],
                            w = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(d)),
                            k = w ? w[y] : 0;
                        (k && (await (null == i.isElement ? void 0 : i.isElement(w)))) || (k = s.floating[y] || l.floating[b]);
                        let E = k / 2 - m[b] / 2 - 1,
                            C = (0, n.VV)(f[h ? "top" : "left"], E),
                            S = (0, n.VV)(f[h ? "bottom" : "right"], E),
                            N = k - m[b] - S,
                            T = k / 2 - m[b] / 2 + (v / 2 - x / 2),
                            R = (0, n.uZ)(C, T, N),
                            M = !c.arrow && null != (0, n.hp)(a) && T !== R && l.reference[b] / 2 - (T < C ? C : S) - m[b] / 2 < 0,
                            j = M ? (T < C ? T - C : T - N) : 0;
                        return { [p]: g[p] + j, data: { [p]: R, centerOffset: T - R - j, ...(M && { alignmentOffset: j }) }, reset: M };
                    },
                }),
                s = function (e) {
                    return (
                        void 0 === e && (e = {}),
                        {
                            name: "autoPlacement",
                            options: e,
                            async fn(t) {
                                var r, o, a, i;
                                let { rects: s, middlewareData: c, placement: d, platform: u, elements: f } = t,
                                    { crossAxis: g = !1, alignment: p, allowedPlacements: b = n.Ct, autoAlignment: m = !0, ...h } = (0, n.ku)(e, t),
                                    y =
                                        void 0 !== p || b === n.Ct
                                            ? ((i = p || null) ? [...b.filter((e) => (0, n.hp)(e) === i), ...b.filter((e) => (0, n.hp)(e) !== i)] : b.filter((e) => (0, n.k3)(e) === e)).filter(
                                                  (e) => !i || (0, n.hp)(e) === i || (!!m && (0, n.Go)(e) !== e)
                                              )
                                            : b,
                                    v = await l(t, h),
                                    x = (null == (r = c.autoPlacement) ? void 0 : r.index) || 0,
                                    w = y[x];
                                if (null == w) return {};
                                let k = (0, n.i8)(w, s, await (null == u.isRTL ? void 0 : u.isRTL(f.floating)));
                                if (d !== w) return { reset: { placement: y[0] } };
                                let E = [v[(0, n.k3)(w)], v[k[0]], v[k[1]]],
                                    C = [...((null == (o = c.autoPlacement) ? void 0 : o.overflows) || []), { placement: w, overflows: E }],
                                    S = y[x + 1];
                                if (S) return { data: { index: x + 1, overflows: C }, reset: { placement: S } };
                                let N = C.map((e) => {
                                        let t = (0, n.hp)(e.placement);
                                        return [e.placement, t && g ? e.overflows.slice(0, 2).reduce((e, t) => e + t, 0) : e.overflows[0], e.overflows];
                                    }).sort((e, t) => e[1] - t[1]),
                                    T = (null == (a = N.filter((e) => e[2].slice(0, (0, n.hp)(e[0]) ? 2 : 3).every((e) => e <= 0))[0]) ? void 0 : a[0]) || N[0][0];
                                return T !== d ? { data: { index: x + 1, overflows: C }, reset: { placement: T } } : {};
                            },
                        }
                    );
                },
                c = function (e) {
                    return (
                        void 0 === e && (e = {}),
                        {
                            name: "flip",
                            options: e,
                            async fn(t) {
                                var r, o, a, i, s;
                                let { placement: c, middlewareData: d, rects: u, initialPlacement: f, platform: g, elements: p } = t,
                                    { mainAxis: b = !0, crossAxis: m = !0, fallbackPlacements: h, fallbackStrategy: y = "bestFit", fallbackAxisSideDirection: v = "none", flipAlignment: x = !0, ...w } = (0, n.ku)(e, t);
                                if (null != (r = d.arrow) && r.alignmentOffset) return {};
                                let k = (0, n.k3)(c),
                                    E = (0, n.k3)(f) === f,
                                    C = await (null == g.isRTL ? void 0 : g.isRTL(p.floating)),
                                    S = h || (E || !x ? [(0, n.pw)(f)] : (0, n.gy)(f));
                                h || "none" === v || S.push(...(0, n.KX)(f, x, v, C));
                                let N = [f, ...S],
                                    T = await l(t, w),
                                    R = [],
                                    M = (null == (o = d.flip) ? void 0 : o.overflows) || [];
                                if ((b && R.push(T[k]), m)) {
                                    let e = (0, n.i8)(c, u, C);
                                    R.push(T[e[0]], T[e[1]]);
                                }
                                if (((M = [...M, { placement: c, overflows: R }]), !R.every((e) => e <= 0))) {
                                    let e = ((null == (a = d.flip) ? void 0 : a.index) || 0) + 1,
                                        t = N[e];
                                    if (t) return { data: { index: e, overflows: M }, reset: { placement: t } };
                                    let r = null == (i = M.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : i.placement;
                                    if (!r)
                                        switch (y) {
                                            case "bestFit": {
                                                let e = null == (s = M.map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : s[0];
                                                e && (r = e);
                                                break;
                                            }
                                            case "initialPlacement":
                                                r = f;
                                        }
                                    if (c !== r) return { reset: { placement: r } };
                                }
                                return {};
                            },
                        }
                    );
                };
            function d(e, t) {
                return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
            }
            function u(e) {
                return n.mA.some((t) => e[t] >= 0);
            }
            let f = function (e) {
                return (
                    void 0 === e && (e = {}),
                    {
                        name: "hide",
                        options: e,
                        async fn(t) {
                            let { rects: r } = t,
                                { strategy: o = "referenceHidden", ...a } = (0, n.ku)(e, t);
                            switch (o) {
                                case "referenceHidden": {
                                    let e = d(await l(t, { ...a, elementContext: "reference" }), r.reference);
                                    return { data: { referenceHiddenOffsets: e, referenceHidden: u(e) } };
                                }
                                case "escaped": {
                                    let e = d(await l(t, { ...a, altBoundary: !0 }), r.floating);
                                    return { data: { escapedOffsets: e, escaped: u(e) } };
                                }
                                default:
                                    return {};
                            }
                        },
                    }
                );
            };
            async function g(e, t) {
                let { placement: r, platform: o, elements: a } = e,
                    l = await (null == o.isRTL ? void 0 : o.isRTL(a.floating)),
                    i = (0, n.k3)(r),
                    s = (0, n.hp)(r),
                    c = "y" === (0, n.Qq)(r),
                    d = ["left", "top"].includes(i) ? -1 : 1,
                    u = l && c ? -1 : 1,
                    f = (0, n.ku)(t, e),
                    { mainAxis: g, crossAxis: p, alignmentAxis: b } = "number" == typeof f ? { mainAxis: f, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...f };
                return s && "number" == typeof b && (p = "end" === s ? -1 * b : b), c ? { x: p * u, y: g * d } : { x: g * d, y: p * u };
            }
            let p = function (e) {
                    return (
                        void 0 === e && (e = 0),
                        {
                            name: "offset",
                            options: e,
                            async fn(t) {
                                var r, n;
                                let { x: o, y: a, placement: l, middlewareData: i } = t,
                                    s = await g(t, e);
                                return l === (null == (r = i.offset) ? void 0 : r.placement) && null != (n = i.arrow) && n.alignmentOffset ? {} : { x: o + s.x, y: a + s.y, data: { ...s, placement: l } };
                            },
                        }
                    );
                },
                b = function (e) {
                    return (
                        void 0 === e && (e = {}),
                        {
                            name: "shift",
                            options: e,
                            async fn(t) {
                                let { x: r, y: o, placement: a } = t,
                                    {
                                        mainAxis: i = !0,
                                        crossAxis: s = !1,
                                        limiter: c = {
                                            fn: (e) => {
                                                let { x: t, y: r } = e;
                                                return { x: t, y: r };
                                            },
                                        },
                                        ...d
                                    } = (0, n.ku)(e, t),
                                    u = { x: r, y: o },
                                    f = await l(t, d),
                                    g = (0, n.Qq)((0, n.k3)(a)),
                                    p = (0, n.Rn)(g),
                                    b = u[p],
                                    m = u[g];
                                if (i) {
                                    let e = "y" === p ? "top" : "left",
                                        t = "y" === p ? "bottom" : "right",
                                        r = b + f[e],
                                        o = b - f[t];
                                    b = (0, n.uZ)(r, b, o);
                                }
                                if (s) {
                                    let e = "y" === g ? "top" : "left",
                                        t = "y" === g ? "bottom" : "right",
                                        r = m + f[e],
                                        o = m - f[t];
                                    m = (0, n.uZ)(r, m, o);
                                }
                                let h = c.fn({ ...t, [p]: b, [g]: m });
                                return { ...h, data: { x: h.x - r, y: h.y - o } };
                            },
                        }
                    );
                },
                m = function (e) {
                    return (
                        void 0 === e && (e = {}),
                        {
                            options: e,
                            fn(t) {
                                let { x: r, y: o, placement: a, rects: l, middlewareData: i } = t,
                                    { offset: s = 0, mainAxis: c = !0, crossAxis: d = !0 } = (0, n.ku)(e, t),
                                    u = { x: r, y: o },
                                    f = (0, n.Qq)(a),
                                    g = (0, n.Rn)(f),
                                    p = u[g],
                                    b = u[f],
                                    m = (0, n.ku)(s, t),
                                    h = "number" == typeof m ? { mainAxis: m, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...m };
                                if (c) {
                                    let e = "y" === g ? "height" : "width",
                                        t = l.reference[g] - l.floating[e] + h.mainAxis,
                                        r = l.reference[g] + l.reference[e] - h.mainAxis;
                                    p < t ? (p = t) : p > r && (p = r);
                                }
                                if (d) {
                                    var y, v;
                                    let e = "y" === g ? "width" : "height",
                                        t = ["top", "left"].includes((0, n.k3)(a)),
                                        r = l.reference[f] - l.floating[e] + ((t && (null == (y = i.offset) ? void 0 : y[f])) || 0) + (t ? 0 : h.crossAxis),
                                        o = l.reference[f] + l.reference[e] + (t ? 0 : (null == (v = i.offset) ? void 0 : v[f]) || 0) - (t ? h.crossAxis : 0);
                                    b < r ? (b = r) : b > o && (b = o);
                                }
                                return { [g]: p, [f]: b };
                            },
                        }
                    );
                },
                h = function (e) {
                    return (
                        void 0 === e && (e = {}),
                        {
                            name: "size",
                            options: e,
                            async fn(t) {
                                let r, o;
                                let { placement: a, rects: i, platform: s, elements: c } = t,
                                    { apply: d = () => {}, ...u } = (0, n.ku)(e, t),
                                    f = await l(t, u),
                                    g = (0, n.k3)(a),
                                    p = (0, n.hp)(a),
                                    b = "y" === (0, n.Qq)(a),
                                    { width: m, height: h } = i.floating;
                                "top" === g || "bottom" === g ? ((r = g), (o = p === ((await (null == s.isRTL ? void 0 : s.isRTL(c.floating))) ? "start" : "end") ? "left" : "right")) : ((o = g), (r = "end" === p ? "top" : "bottom"));
                                let y = h - f[r],
                                    v = m - f[o],
                                    x = !t.middlewareData.shift,
                                    w = y,
                                    k = v;
                                if (b) {
                                    let e = m - f.left - f.right;
                                    k = p || x ? (0, n.VV)(v, e) : e;
                                } else {
                                    let e = h - f.top - f.bottom;
                                    w = p || x ? (0, n.VV)(y, e) : e;
                                }
                                if (x && !p) {
                                    let e = (0, n.Fp)(f.left, 0),
                                        t = (0, n.Fp)(f.right, 0),
                                        r = (0, n.Fp)(f.top, 0),
                                        o = (0, n.Fp)(f.bottom, 0);
                                    b ? (k = m - 2 * (0 !== e || 0 !== t ? e + t : (0, n.Fp)(f.left, f.right))) : (w = h - 2 * (0 !== r || 0 !== o ? r + o : (0, n.Fp)(f.top, f.bottom)));
                                }
                                await d({ ...t, availableWidth: k, availableHeight: w });
                                let E = await s.getDimensions(c.floating);
                                return m !== E.width || h !== E.height ? { reset: { rects: !0 } } : {};
                            },
                        }
                    );
                };
        },
        1812: function (e, t, r) {
            r.d(t, {
                Cp: function () {
                    return S;
                },
                Me: function () {
                    return x;
                },
                RR: function () {
                    return E;
                },
                X5: function () {
                    return w;
                },
                dp: function () {
                    return C;
                },
                dr: function () {
                    return T;
                },
                oo: function () {
                    return R;
                },
                uY: function () {
                    return k;
                },
                x7: function () {
                    return N;
                },
            });
            var n = r(3025),
                o = r(9074),
                a = r(947);
            function l(e) {
                let t = (0, a.Dx)(e),
                    r = parseFloat(t.width) || 0,
                    o = parseFloat(t.height) || 0,
                    l = (0, a.Re)(e),
                    i = l ? e.offsetWidth : r,
                    s = l ? e.offsetHeight : o,
                    c = (0, n.NM)(r) !== i || (0, n.NM)(o) !== s;
                return c && ((r = i), (o = s)), { width: r, height: o, $: c };
            }
            function i(e) {
                return (0, a.kK)(e) ? e : e.contextElement;
            }
            function s(e) {
                let t = i(e);
                if (!(0, a.Re)(t)) return (0, n.ze)(1);
                let r = t.getBoundingClientRect(),
                    { width: o, height: s, $: c } = l(t),
                    d = (c ? (0, n.NM)(r.width) : r.width) / o,
                    u = (c ? (0, n.NM)(r.height) : r.height) / s;
                return (d && Number.isFinite(d)) || (d = 1), (u && Number.isFinite(u)) || (u = 1), { x: d, y: u };
            }
            let c = (0, n.ze)(0);
            function d(e) {
                let t = (0, a.Jj)(e);
                return (0, a.Pf)() && t.visualViewport ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop } : c;
            }
            function u(e, t, r, o) {
                var l;
                void 0 === t && (t = !1), void 0 === r && (r = !1);
                let c = e.getBoundingClientRect(),
                    u = i(e),
                    f = (0, n.ze)(1);
                t && (o ? (0, a.kK)(o) && (f = s(o)) : (f = s(e)));
                let g = (void 0 === (l = r) && (l = !1), o && (!l || o === (0, a.Jj)(u)) && l) ? d(u) : (0, n.ze)(0),
                    p = (c.left + g.x) / f.x,
                    b = (c.top + g.y) / f.y,
                    m = c.width / f.x,
                    h = c.height / f.y;
                if (u) {
                    let e = (0, a.Jj)(u),
                        t = o && (0, a.kK)(o) ? (0, a.Jj)(o) : o,
                        r = e,
                        n = r.frameElement;
                    for (; n && o && t !== r; ) {
                        let e = s(n),
                            t = n.getBoundingClientRect(),
                            o = (0, a.Dx)(n),
                            l = t.left + (n.clientLeft + parseFloat(o.paddingLeft)) * e.x,
                            i = t.top + (n.clientTop + parseFloat(o.paddingTop)) * e.y;
                        (p *= e.x), (b *= e.y), (m *= e.x), (h *= e.y), (p += l), (b += i), (n = (r = (0, a.Jj)(n)).frameElement);
                    }
                }
                return (0, n.JB)({ width: m, height: h, x: p, y: b });
            }
            let f = [":popover-open", ":modal"];
            function g(e) {
                return f.some((t) => {
                    try {
                        return e.matches(t);
                    } catch (e) {
                        return !1;
                    }
                });
            }
            function p(e) {
                return u((0, a.tF)(e)).left + (0, a.Lw)(e).scrollLeft;
            }
            function b(e, t, r) {
                let o;
                if ("viewport" === t)
                    o = (function (e, t) {
                        let r = (0, a.Jj)(e),
                            n = (0, a.tF)(e),
                            o = r.visualViewport,
                            l = n.clientWidth,
                            i = n.clientHeight,
                            s = 0,
                            c = 0;
                        if (o) {
                            (l = o.width), (i = o.height);
                            let e = (0, a.Pf)();
                            (!e || (e && "fixed" === t)) && ((s = o.offsetLeft), (c = o.offsetTop));
                        }
                        return { width: l, height: i, x: s, y: c };
                    })(e, r);
                else if ("document" === t)
                    o = (function (e) {
                        let t = (0, a.tF)(e),
                            r = (0, a.Lw)(e),
                            o = e.ownerDocument.body,
                            l = (0, n.Fp)(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
                            i = (0, n.Fp)(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight),
                            s = -r.scrollLeft + p(e),
                            c = -r.scrollTop;
                        return "rtl" === (0, a.Dx)(o).direction && (s += (0, n.Fp)(t.clientWidth, o.clientWidth) - l), { width: l, height: i, x: s, y: c };
                    })((0, a.tF)(e));
                else if ((0, a.kK)(t))
                    o = (function (e, t) {
                        let r = u(e, !0, "fixed" === t),
                            o = r.top + e.clientTop,
                            l = r.left + e.clientLeft,
                            i = (0, a.Re)(e) ? s(e) : (0, n.ze)(1),
                            c = e.clientWidth * i.x;
                        return { width: c, height: e.clientHeight * i.y, x: l * i.x, y: o * i.y };
                    })(t, r);
                else {
                    let r = d(e);
                    o = { ...t, x: t.x - r.x, y: t.y - r.y };
                }
                return (0, n.JB)(o);
            }
            function m(e, t) {
                return (0, a.Re)(e) && "fixed" !== (0, a.Dx)(e).position ? (t ? t(e) : e.offsetParent) : null;
            }
            function h(e, t) {
                let r = (0, a.Jj)(e);
                if (!(0, a.Re)(e) || g(e)) return r;
                let n = m(e, t);
                for (; n && (0, a.Ze)(n) && "static" === (0, a.Dx)(n).position; ) n = m(n, t);
                return n && ("html" === (0, a.wk)(n) || ("body" === (0, a.wk)(n) && "static" === (0, a.Dx)(n).position && !(0, a.hT)(n))) ? r : n || (0, a.gQ)(e) || r;
            }
            let y = async function (e) {
                    let t = this.getOffsetParent || h,
                        r = this.getDimensions;
                    return {
                        reference: (function (e, t, r) {
                            let o = (0, a.Re)(t),
                                l = (0, a.tF)(t),
                                i = "fixed" === r,
                                s = u(e, !0, i, t),
                                c = { scrollLeft: 0, scrollTop: 0 },
                                d = (0, n.ze)(0);
                            if (o || (!o && !i)) {
                                if ((("body" !== (0, a.wk)(t) || (0, a.ao)(l)) && (c = (0, a.Lw)(t)), o)) {
                                    let e = u(t, !0, i, t);
                                    (d.x = e.x + t.clientLeft), (d.y = e.y + t.clientTop);
                                } else l && (d.x = p(l));
                            }
                            return { x: s.left + c.scrollLeft - d.x, y: s.top + c.scrollTop - d.y, width: s.width, height: s.height };
                        })(e.reference, await t(e.floating), e.strategy),
                        floating: { x: 0, y: 0, ...(await r(e.floating)) },
                    };
                },
                v = {
                    convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
                        let { elements: t, rect: r, offsetParent: o, strategy: l } = e,
                            i = "fixed" === l,
                            c = (0, a.tF)(o),
                            d = !!t && g(t.floating);
                        if (o === c || (d && i)) return r;
                        let f = { scrollLeft: 0, scrollTop: 0 },
                            p = (0, n.ze)(1),
                            b = (0, n.ze)(0),
                            m = (0, a.Re)(o);
                        if ((m || (!m && !i)) && (("body" !== (0, a.wk)(o) || (0, a.ao)(c)) && (f = (0, a.Lw)(o)), (0, a.Re)(o))) {
                            let e = u(o);
                            (p = s(o)), (b.x = e.x + o.clientLeft), (b.y = e.y + o.clientTop);
                        }
                        return { width: r.width * p.x, height: r.height * p.y, x: r.x * p.x - f.scrollLeft * p.x + b.x, y: r.y * p.y - f.scrollTop * p.y + b.y };
                    },
                    getDocumentElement: a.tF,
                    getClippingRect: function (e) {
                        let { element: t, boundary: r, rootBoundary: o, strategy: l } = e,
                            i = [
                                ...("clippingAncestors" === r
                                    ? (function (e, t) {
                                          let r = t.get(e);
                                          if (r) return r;
                                          let n = (0, a.Kx)(e, [], !1).filter((e) => (0, a.kK)(e) && "body" !== (0, a.wk)(e)),
                                              o = null,
                                              l = "fixed" === (0, a.Dx)(e).position,
                                              i = l ? (0, a.Ow)(e) : e;
                                          for (; (0, a.kK)(i) && !(0, a.Py)(i); ) {
                                              let t = (0, a.Dx)(i),
                                                  r = (0, a.hT)(i);
                                              r || "fixed" !== t.position || (o = null),
                                                  (
                                                      l
                                                          ? !r && !o
                                                          : (!r && "static" === t.position && !!o && ["absolute", "fixed"].includes(o.position)) ||
                                                            ((0, a.ao)(i) &&
                                                                !r &&
                                                                (function e(t, r) {
                                                                    let n = (0, a.Ow)(t);
                                                                    return !(n === r || !(0, a.kK)(n) || (0, a.Py)(n)) && ("fixed" === (0, a.Dx)(n).position || e(n, r));
                                                                })(e, i))
                                                  )
                                                      ? (n = n.filter((e) => e !== i))
                                                      : (o = t),
                                                  (i = (0, a.Ow)(i));
                                          }
                                          return t.set(e, n), n;
                                      })(t, this._c)
                                    : [].concat(r)),
                                o,
                            ],
                            s = i[0],
                            c = i.reduce((e, r) => {
                                let o = b(t, r, l);
                                return (e.top = (0, n.Fp)(o.top, e.top)), (e.right = (0, n.VV)(o.right, e.right)), (e.bottom = (0, n.VV)(o.bottom, e.bottom)), (e.left = (0, n.Fp)(o.left, e.left)), e;
                            }, b(t, s, l));
                        return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
                    },
                    getOffsetParent: h,
                    getElementRects: y,
                    getClientRects: function (e) {
                        return Array.from(e.getClientRects());
                    },
                    getDimensions: function (e) {
                        let { width: t, height: r } = l(e);
                        return { width: t, height: r };
                    },
                    getScale: s,
                    isElement: a.kK,
                    isRTL: function (e) {
                        return "rtl" === (0, a.Dx)(e).direction;
                    },
                };
            function x(e, t, r, o) {
                let l;
                void 0 === o && (o = {});
                let { ancestorScroll: s = !0, ancestorResize: c = !0, elementResize: d = "function" == typeof ResizeObserver, layoutShift: f = "function" == typeof IntersectionObserver, animationFrame: g = !1 } = o,
                    p = i(e),
                    b = s || c ? [...(p ? (0, a.Kx)(p) : []), ...(0, a.Kx)(t)] : [];
                b.forEach((e) => {
                    s && e.addEventListener("scroll", r, { passive: !0 }), c && e.addEventListener("resize", r);
                });
                let m =
                        p && f
                            ? (function (e, t) {
                                  let r,
                                      o = null,
                                      l = (0, a.tF)(e);
                                  function i() {
                                      var e;
                                      clearTimeout(r), null == (e = o) || e.disconnect(), (o = null);
                                  }
                                  return (
                                      !(function a(s, c) {
                                          void 0 === s && (s = !1), void 0 === c && (c = 1), i();
                                          let { left: d, top: u, width: f, height: g } = e.getBoundingClientRect();
                                          if ((s || t(), !f || !g)) return;
                                          let p = (0, n.GW)(u),
                                              b = (0, n.GW)(l.clientWidth - (d + f)),
                                              m = { rootMargin: -p + "px " + -b + "px " + -(0, n.GW)(l.clientHeight - (u + g)) + "px " + -(0, n.GW)(d) + "px", threshold: (0, n.Fp)(0, (0, n.VV)(1, c)) || 1 },
                                              h = !0;
                                          function y(e) {
                                              let t = e[0].intersectionRatio;
                                              if (t !== c) {
                                                  if (!h) return a();
                                                  t
                                                      ? a(!1, t)
                                                      : (r = setTimeout(() => {
                                                            a(!1, 1e-7);
                                                        }, 100));
                                              }
                                              h = !1;
                                          }
                                          try {
                                              o = new IntersectionObserver(y, { ...m, root: l.ownerDocument });
                                          } catch (e) {
                                              o = new IntersectionObserver(y, m);
                                          }
                                          o.observe(e);
                                      })(!0),
                                      i
                                  );
                              })(p, r)
                            : null,
                    h = -1,
                    y = null;
                d &&
                    ((y = new ResizeObserver((e) => {
                        let [n] = e;
                        n &&
                            n.target === p &&
                            y &&
                            (y.unobserve(t),
                            cancelAnimationFrame(h),
                            (h = requestAnimationFrame(() => {
                                var e;
                                null == (e = y) || e.observe(t);
                            }))),
                            r();
                    })),
                    p && !g && y.observe(p),
                    y.observe(t));
                let v = g ? u(e) : null;
                return (
                    g &&
                        (function t() {
                            let n = u(e);
                            v && (n.x !== v.x || n.y !== v.y || n.width !== v.width || n.height !== v.height) && r(), (v = n), (l = requestAnimationFrame(t));
                        })(),
                    r(),
                    () => {
                        var e;
                        b.forEach((e) => {
                            s && e.removeEventListener("scroll", r), c && e.removeEventListener("resize", r);
                        }),
                            null == m || m(),
                            null == (e = y) || e.disconnect(),
                            (y = null),
                            g && cancelAnimationFrame(l);
                    }
                );
            }
            let w = o.X5,
                k = o.uY,
                E = o.RR,
                C = o.dp,
                S = o.Cp,
                N = o.x7,
                T = o.dr,
                R = (e, t, r) => {
                    let n = new Map(),
                        a = { platform: v, ...r },
                        l = { ...a.platform, _c: n };
                    return (0, o.oo)(e, t, { ...a, platform: l });
                };
        },
        4305: function (e, t, r) {
            r.d(t, {
                YF: function () {
                    return f;
                },
                x7: function () {
                    return l;
                },
            });
            var n = r(1812),
                o = r(5465),
                a = r(2573);
            let l = (e) => ({
                name: "arrow",
                options: e,
                fn(t) {
                    let { element: r, padding: o } = "function" == typeof e ? e(t) : e;
                    return r && {}.hasOwnProperty.call(r, "current") ? (null != r.current ? (0, n.x7)({ element: r.current, padding: o }).fn(t) : {}) : r ? (0, n.x7)({ element: r, padding: o }).fn(t) : {};
                },
            });
            var i = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;
            function s(e, t) {
                let r, n, o;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ("function" == typeof e && e.toString() === t.toString()) return !0;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if ((r = e.length) !== t.length) return !1;
                        for (n = r; 0 != n--; ) if (!s(e[n], t[n])) return !1;
                        return !0;
                    }
                    if ((r = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (n = r; 0 != n--; ) if (!{}.hasOwnProperty.call(t, o[n])) return !1;
                    for (n = r; 0 != n--; ) {
                        let r = o[n];
                        if (("_owner" !== r || !e.$$typeof) && !s(e[r], t[r])) return !1;
                    }
                    return !0;
                }
                return e != e && t != t;
            }
            function c(e) {
                return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
            }
            function d(e, t) {
                let r = c(e);
                return Math.round(t * r) / r;
            }
            function u(e) {
                let t = o.useRef(e);
                return (
                    i(() => {
                        t.current = e;
                    }),
                    t
                );
            }
            function f(e) {
                void 0 === e && (e = {});
                let { placement: t = "bottom", strategy: r = "absolute", middleware: l = [], platform: f, elements: { reference: g, floating: p } = {}, transform: b = !0, whileElementsMounted: m, open: h } = e,
                    [y, v] = o.useState({ x: 0, y: 0, strategy: r, placement: t, middlewareData: {}, isPositioned: !1 }),
                    [x, w] = o.useState(l);
                s(x, l) || w(l);
                let [k, E] = o.useState(null),
                    [C, S] = o.useState(null),
                    N = o.useCallback((e) => {
                        e !== j.current && ((j.current = e), E(e));
                    }, []),
                    T = o.useCallback((e) => {
                        e !== L.current && ((L.current = e), S(e));
                    }, []),
                    R = g || k,
                    M = p || C,
                    j = o.useRef(null),
                    L = o.useRef(null),
                    P = o.useRef(y),
                    O = null != m,
                    D = u(m),
                    A = u(f),
                    I = o.useCallback(() => {
                        if (!j.current || !L.current) return;
                        let e = { placement: t, strategy: r, middleware: x };
                        A.current && (e.platform = A.current),
                            (0, n.oo)(j.current, L.current, e).then((e) => {
                                let t = { ...e, isPositioned: !0 };
                                _.current &&
                                    !s(P.current, t) &&
                                    ((P.current = t),
                                    a.flushSync(() => {
                                        v(t);
                                    }));
                            });
                    }, [x, t, r, A]);
                i(() => {
                    !1 === h && P.current.isPositioned && ((P.current.isPositioned = !1), v((e) => ({ ...e, isPositioned: !1 })));
                }, [h]);
                let _ = o.useRef(!1);
                i(
                    () => (
                        (_.current = !0),
                        () => {
                            _.current = !1;
                        }
                    ),
                    []
                ),
                    i(() => {
                        if ((R && (j.current = R), M && (L.current = M), R && M)) {
                            if (D.current) return D.current(R, M, I);
                            I();
                        }
                    }, [R, M, I, D, O]);
                let z = o.useMemo(() => ({ reference: j, floating: L, setReference: N, setFloating: T }), [N, T]),
                    F = o.useMemo(() => ({ reference: R, floating: M }), [R, M]),
                    W = o.useMemo(() => {
                        let e = { position: r, left: 0, top: 0 };
                        if (!F.floating) return e;
                        let t = d(F.floating, y.x),
                            n = d(F.floating, y.y);
                        return b ? { ...e, transform: "translate(" + t + "px, " + n + "px)", ...(c(F.floating) >= 1.5 && { willChange: "transform" }) } : { position: r, left: t, top: n };
                    }, [r, b, F.floating, y.x, y.y]);
                return o.useMemo(() => ({ ...y, update: I, refs: z, elements: F, floatingStyles: W }), [y, I, z, F, W]);
            }
        },
        947: function (e, t, r) {
            function n(e) {
                return l(e) ? (e.nodeName || "").toLowerCase() : "#document";
            }
            function o(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
            }
            function a(e) {
                var t;
                return null == (t = (l(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement;
            }
            function l(e) {
                return e instanceof Node || e instanceof o(e).Node;
            }
            function i(e) {
                return e instanceof Element || e instanceof o(e).Element;
            }
            function s(e) {
                return e instanceof HTMLElement || e instanceof o(e).HTMLElement;
            }
            function c(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof o(e).ShadowRoot);
            }
            function d(e) {
                let { overflow: t, overflowX: r, overflowY: n, display: o } = m(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o);
            }
            function u(e) {
                return ["table", "td", "th"].includes(n(e));
            }
            function f(e) {
                let t = p(),
                    r = m(e);
                return (
                    "none" !== r.transform ||
                    "none" !== r.perspective ||
                    (!!r.containerType && "normal" !== r.containerType) ||
                    (!t && !!r.backdropFilter && "none" !== r.backdropFilter) ||
                    (!t && !!r.filter && "none" !== r.filter) ||
                    ["transform", "perspective", "filter"].some((e) => (r.willChange || "").includes(e)) ||
                    ["paint", "layout", "strict", "content"].some((e) => (r.contain || "").includes(e))
                );
            }
            function g(e) {
                let t = y(e);
                for (; s(t) && !b(t); ) {
                    if (f(t)) return t;
                    t = y(t);
                }
                return null;
            }
            function p() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
            }
            function b(e) {
                return ["html", "body", "#document"].includes(n(e));
            }
            function m(e) {
                return o(e).getComputedStyle(e);
            }
            function h(e) {
                return i(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
            }
            function y(e) {
                if ("html" === n(e)) return e;
                let t = e.assignedSlot || e.parentNode || (c(e) && e.host) || a(e);
                return c(t) ? t.host : t;
            }
            r.d(t, {
                Dx: function () {
                    return m;
                },
                Jj: function () {
                    return o;
                },
                Kx: function () {
                    return function e(t, r, n) {
                        var a;
                        void 0 === r && (r = []), void 0 === n && (n = !0);
                        let l = (function e(t) {
                                let r = y(t);
                                return b(r) ? (t.ownerDocument ? t.ownerDocument.body : t.body) : s(r) && d(r) ? r : e(r);
                            })(t),
                            i = l === (null == (a = t.ownerDocument) ? void 0 : a.body),
                            c = o(l);
                        return i ? r.concat(c, c.visualViewport || [], d(l) ? l : [], c.frameElement && n ? e(c.frameElement) : []) : r.concat(l, e(l, [], n));
                    };
                },
                Lw: function () {
                    return h;
                },
                Ow: function () {
                    return y;
                },
                Pf: function () {
                    return p;
                },
                Py: function () {
                    return b;
                },
                Re: function () {
                    return s;
                },
                Ze: function () {
                    return u;
                },
                Zq: function () {
                    return c;
                },
                ao: function () {
                    return d;
                },
                gQ: function () {
                    return g;
                },
                hT: function () {
                    return f;
                },
                kK: function () {
                    return i;
                },
                tF: function () {
                    return a;
                },
                wk: function () {
                    return n;
                },
            });
        },
        3025: function (e, t, r) {
            r.d(t, {
                Ct: function () {
                    return o;
                },
                Fp: function () {
                    return l;
                },
                GW: function () {
                    return s;
                },
                Go: function () {
                    return k;
                },
                I4: function () {
                    return h;
                },
                JB: function () {
                    return N;
                },
                KX: function () {
                    return E;
                },
                NM: function () {
                    return i;
                },
                Qq: function () {
                    return y;
                },
                Rn: function () {
                    return m;
                },
                VV: function () {
                    return a;
                },
                Wh: function () {
                    return v;
                },
                gy: function () {
                    return w;
                },
                hp: function () {
                    return b;
                },
                i8: function () {
                    return x;
                },
                k3: function () {
                    return p;
                },
                ku: function () {
                    return g;
                },
                mA: function () {
                    return n;
                },
                pw: function () {
                    return C;
                },
                uZ: function () {
                    return f;
                },
                yd: function () {
                    return S;
                },
                ze: function () {
                    return c;
                },
            });
            let n = ["top", "right", "bottom", "left"],
                o = n.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []),
                a = Math.min,
                l = Math.max,
                i = Math.round,
                s = Math.floor,
                c = (e) => ({ x: e, y: e }),
                d = { left: "right", right: "left", bottom: "top", top: "bottom" },
                u = { start: "end", end: "start" };
            function f(e, t, r) {
                return l(e, a(t, r));
            }
            function g(e, t) {
                return "function" == typeof e ? e(t) : e;
            }
            function p(e) {
                return e.split("-")[0];
            }
            function b(e) {
                return e.split("-")[1];
            }
            function m(e) {
                return "x" === e ? "y" : "x";
            }
            function h(e) {
                return "y" === e ? "height" : "width";
            }
            function y(e) {
                return ["top", "bottom"].includes(p(e)) ? "y" : "x";
            }
            function v(e) {
                return m(y(e));
            }
            function x(e, t, r) {
                void 0 === r && (r = !1);
                let n = b(e),
                    o = v(e),
                    a = h(o),
                    l = "x" === o ? (n === (r ? "end" : "start") ? "right" : "left") : "start" === n ? "bottom" : "top";
                return t.reference[a] > t.floating[a] && (l = C(l)), [l, C(l)];
            }
            function w(e) {
                let t = C(e);
                return [k(e), t, k(t)];
            }
            function k(e) {
                return e.replace(/start|end/g, (e) => u[e]);
            }
            function E(e, t, r, n) {
                let o = b(e),
                    a = (function (e, t, r) {
                        let n = ["left", "right"],
                            o = ["right", "left"];
                        switch (e) {
                            case "top":
                            case "bottom":
                                if (r) return t ? o : n;
                                return t ? n : o;
                            case "left":
                            case "right":
                                return t ? ["top", "bottom"] : ["bottom", "top"];
                            default:
                                return [];
                        }
                    })(p(e), "start" === r, n);
                return o && ((a = a.map((e) => e + "-" + o)), t && (a = a.concat(a.map(k)))), a;
            }
            function C(e) {
                return e.replace(/left|right|bottom|top/g, (e) => d[e]);
            }
            function S(e) {
                return "number" != typeof e ? { top: 0, right: 0, bottom: 0, left: 0, ...e } : { top: e, right: e, bottom: e, left: e };
            }
            function N(e) {
                return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
            }
        },
        7529: function (e, t, r) {
            r.d(t, {
                M: function () {
                    return n;
                },
            });
            function n(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
                return function (n) {
                    if ((null == e || e(n), !1 === r || !n.defaultPrevented)) return null == t ? void 0 : t(n);
                };
            }
        },
        7478: function (e, t, r) {
            r.d(t, {
                Ee: function () {
                    return y;
                },
                NY: function () {
                    return v;
                },
                fC: function () {
                    return h;
                },
            });
            var n = r(9063),
                o = r(5465),
                a = r(6292),
                l = r(9751),
                i = r(3866),
                s = r(6755);
            let c = "Avatar",
                [d, u] = (0, a.b)(c),
                [f, g] = d(c),
                p = (0, o.forwardRef)((e, t) => {
                    let { __scopeAvatar: r, ...a } = e,
                        [l, i] = (0, o.useState)("idle");
                    return (0, o.createElement)(f, { scope: r, imageLoadingStatus: l, onImageLoadingStatusChange: i }, (0, o.createElement)(s.WV.span, (0, n.Z)({}, a, { ref: t })));
                }),
                b = (0, o.forwardRef)((e, t) => {
                    let { __scopeAvatar: r, src: a, onLoadingStatusChange: c = () => {}, ...d } = e,
                        u = g("AvatarImage", r),
                        f = (function (e) {
                            let [t, r] = (0, o.useState)("idle");
                            return (
                                (0, i.b)(() => {
                                    if (!e) {
                                        r("error");
                                        return;
                                    }
                                    let t = !0,
                                        n = new window.Image(),
                                        o = (e) => () => {
                                            t && r(e);
                                        };
                                    return (
                                        r("loading"),
                                        (n.onload = o("loaded")),
                                        (n.onerror = o("error")),
                                        (n.src = e),
                                        () => {
                                            t = !1;
                                        }
                                    );
                                }, [e]),
                                t
                            );
                        })(a),
                        p = (0, l.W)((e) => {
                            c(e), u.onImageLoadingStatusChange(e);
                        });
                    return (
                        (0, i.b)(() => {
                            "idle" !== f && p(f);
                        }, [f, p]),
                        "loaded" === f ? (0, o.createElement)(s.WV.img, (0, n.Z)({}, d, { ref: t, src: a })) : null
                    );
                }),
                m = (0, o.forwardRef)((e, t) => {
                    let { __scopeAvatar: r, delayMs: a, ...l } = e,
                        i = g("AvatarFallback", r),
                        [c, d] = (0, o.useState)(void 0 === a);
                    return (
                        (0, o.useEffect)(() => {
                            if (void 0 !== a) {
                                let e = window.setTimeout(() => d(!0), a);
                                return () => window.clearTimeout(e);
                            }
                        }, [a]),
                        c && "loaded" !== i.imageLoadingStatus ? (0, o.createElement)(s.WV.span, (0, n.Z)({}, l, { ref: t })) : null
                    );
                }),
                h = p,
                y = b,
                v = m;
        },
        8267: function (e, t, r) {
            r.d(t, {
                F: function () {
                    return o;
                },
                e: function () {
                    return a;
                },
            });
            var n = r(5465);
            function o(...e) {
                return (t) =>
                    e.forEach((e) => {
                        "function" == typeof e ? e(t) : null != e && (e.current = t);
                    });
            }
            function a(...e) {
                return (0, n.useCallback)(o(...e), e);
            }
        },
        6292: function (e, t, r) {
            r.d(t, {
                b: function () {
                    return o;
                },
            });
            var n = r(5465);
            function o(e, t = []) {
                let r = [],
                    o = () => {
                        let t = r.map((e) => (0, n.createContext)(e));
                        return function (r) {
                            let o = (null == r ? void 0 : r[e]) || t;
                            return (0, n.useMemo)(() => ({ [`__scope${e}`]: { ...r, [e]: o } }), [r, o]);
                        };
                    };
                return (
                    (o.scopeName = e),
                    [
                        function (t, o) {
                            let a = (0, n.createContext)(o),
                                l = r.length;
                            function i(t) {
                                let { scope: r, children: o, ...i } = t,
                                    s = (null == r ? void 0 : r[e][l]) || a,
                                    c = (0, n.useMemo)(() => i, Object.values(i));
                                return (0, n.createElement)(s.Provider, { value: c }, o);
                            }
                            return (
                                (r = [...r, o]),
                                (i.displayName = t + "Provider"),
                                [
                                    i,
                                    function (r, i) {
                                        let s = (null == i ? void 0 : i[e][l]) || a,
                                            c = (0, n.useContext)(s);
                                        if (c) return c;
                                        if (void 0 !== o) return o;
                                        throw Error(`\`${r}\` must be used within \`${t}\``);
                                    },
                                ]
                            );
                        },
                        (function (...e) {
                            let t = e[0];
                            if (1 === e.length) return t;
                            let r = () => {
                                let r = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
                                return function (e) {
                                    let o = r.reduce((t, { useScope: r, scopeName: n }) => {
                                        let o = r(e)[`__scope${n}`];
                                        return { ...t, ...o };
                                    }, {});
                                    return (0, n.useMemo)(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
                                };
                            };
                            return (r.scopeName = t.scopeName), r;
                        })(o, ...t),
                    ]
                );
            }
        },
        8541: function (e, t, r) {
            r.d(t, {
                gm: function () {
                    return a;
                },
            });
            var n = r(5465);
            let o = (0, n.createContext)(void 0);
            function a(e) {
                let t = (0, n.useContext)(o);
                return e || t || "ltr";
            }
        },
        3879: function (e, t, r) {
            let n;
            r.d(t, {
                XB: function () {
                    return f;
                },
            });
            var o = r(9063),
                a = r(5465),
                l = r(7529),
                i = r(6755),
                s = r(8267),
                c = r(9751);
            let d = "dismissableLayer.update",
                u = (0, a.createContext)({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
                f = (0, a.forwardRef)((e, t) => {
                    var r;
                    let { disableOutsidePointerEvents: f = !1, onEscapeKeyDown: b, onPointerDownOutside: m, onFocusOutside: h, onInteractOutside: y, onDismiss: v, ...x } = e,
                        w = (0, a.useContext)(u),
                        [k, E] = (0, a.useState)(null),
                        C = null !== (r = null == k ? void 0 : k.ownerDocument) && void 0 !== r ? r : null == globalThis ? void 0 : globalThis.document,
                        [, S] = (0, a.useState)({}),
                        N = (0, s.e)(t, (e) => E(e)),
                        T = Array.from(w.layers),
                        [R] = [...w.layersWithOutsidePointerEventsDisabled].slice(-1),
                        M = T.indexOf(R),
                        j = k ? T.indexOf(k) : -1,
                        L = w.layersWithOutsidePointerEventsDisabled.size > 0,
                        P = j >= M,
                        O = (function (e, t = null == globalThis ? void 0 : globalThis.document) {
                            let r = (0, c.W)(e),
                                n = (0, a.useRef)(!1),
                                o = (0, a.useRef)(() => {});
                            return (
                                (0, a.useEffect)(() => {
                                    let e = (e) => {
                                            if (e.target && !n.current) {
                                                let n = { originalEvent: e };
                                                function a() {
                                                    p("dismissableLayer.pointerDownOutside", r, n, { discrete: !0 });
                                                }
                                                "touch" === e.pointerType ? (t.removeEventListener("click", o.current), (o.current = a), t.addEventListener("click", o.current, { once: !0 })) : a();
                                            } else t.removeEventListener("click", o.current);
                                            n.current = !1;
                                        },
                                        a = window.setTimeout(() => {
                                            t.addEventListener("pointerdown", e);
                                        }, 0);
                                    return () => {
                                        window.clearTimeout(a), t.removeEventListener("pointerdown", e), t.removeEventListener("click", o.current);
                                    };
                                }, [t, r]),
                                { onPointerDownCapture: () => (n.current = !0) }
                            );
                        })((e) => {
                            let t = e.target,
                                r = [...w.branches].some((e) => e.contains(t));
                            !P || r || (null == m || m(e), null == y || y(e), e.defaultPrevented || null == v || v());
                        }, C),
                        D = (function (e, t = null == globalThis ? void 0 : globalThis.document) {
                            let r = (0, c.W)(e),
                                n = (0, a.useRef)(!1);
                            return (
                                (0, a.useEffect)(() => {
                                    let e = (e) => {
                                        e.target && !n.current && p("dismissableLayer.focusOutside", r, { originalEvent: e }, { discrete: !1 });
                                    };
                                    return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
                                }, [t, r]),
                                { onFocusCapture: () => (n.current = !0), onBlurCapture: () => (n.current = !1) }
                            );
                        })((e) => {
                            let t = e.target;
                            [...w.branches].some((e) => e.contains(t)) || (null == h || h(e), null == y || y(e), e.defaultPrevented || null == v || v());
                        }, C);
                    return (
                        !(function (e, t = null == globalThis ? void 0 : globalThis.document) {
                            let r = (0, c.W)(e);
                            (0, a.useEffect)(() => {
                                let e = (e) => {
                                    "Escape" === e.key && r(e);
                                };
                                return t.addEventListener("keydown", e), () => t.removeEventListener("keydown", e);
                            }, [r, t]);
                        })((e) => {
                            j !== w.layers.size - 1 || (null == b || b(e), !e.defaultPrevented && v && (e.preventDefault(), v()));
                        }, C),
                        (0, a.useEffect)(() => {
                            if (k)
                                return (
                                    f && (0 === w.layersWithOutsidePointerEventsDisabled.size && ((n = C.body.style.pointerEvents), (C.body.style.pointerEvents = "none")), w.layersWithOutsidePointerEventsDisabled.add(k)),
                                    w.layers.add(k),
                                    g(),
                                    () => {
                                        f && 1 === w.layersWithOutsidePointerEventsDisabled.size && (C.body.style.pointerEvents = n);
                                    }
                                );
                        }, [k, C, f, w]),
                        (0, a.useEffect)(
                            () => () => {
                                k && (w.layers.delete(k), w.layersWithOutsidePointerEventsDisabled.delete(k), g());
                            },
                            [k, w]
                        ),
                        (0, a.useEffect)(() => {
                            let e = () => S({});
                            return document.addEventListener(d, e), () => document.removeEventListener(d, e);
                        }, []),
                        (0, a.createElement)(
                            i.WV.div,
                            (0, o.Z)({}, x, {
                                ref: N,
                                style: { pointerEvents: L ? (P ? "auto" : "none") : void 0, ...e.style },
                                onFocusCapture: (0, l.M)(e.onFocusCapture, D.onFocusCapture),
                                onBlurCapture: (0, l.M)(e.onBlurCapture, D.onBlurCapture),
                                onPointerDownCapture: (0, l.M)(e.onPointerDownCapture, O.onPointerDownCapture),
                            })
                        )
                    );
                });
            function g() {
                let e = new CustomEvent(d);
                document.dispatchEvent(e);
            }
            function p(e, t, r, { discrete: n }) {
                let o = r.originalEvent.target,
                    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
                t && o.addEventListener(e, t, { once: !0 }), n ? (0, i.jH)(o, a) : o.dispatchEvent(a);
            }
        },
        1328: function (e, t, r) {
            let n;
            r.d(t, {
                oC: function () {
                    return t4;
                },
                VY: function () {
                    return t1;
                },
                ZA: function () {
                    return t5;
                },
                ck: function () {
                    return t6;
                },
                wU: function () {
                    return t9;
                },
                __: function () {
                    return t2;
                },
                Uv: function () {
                    return t0;
                },
                Ee: function () {
                    return t7;
                },
                Rk: function () {
                    return t3;
                },
                fC: function () {
                    return tJ;
                },
                Z0: function () {
                    return t8;
                },
                Tr: function () {
                    return re;
                },
                tu: function () {
                    return rr;
                },
                fF: function () {
                    return rt;
                },
                xz: function () {
                    return tQ;
                },
            });
            var o,
                a,
                l,
                i,
                s,
                c,
                d = r(9063),
                u = r(5465),
                f = r(7529),
                g = r(8267),
                p = r(6292),
                b = r(3353),
                m = r(6755),
                h = r(4202);
            function y(e) {
                let t = e + "CollectionProvider",
                    [r, n] = (0, p.b)(t),
                    [o, a] = r(t, { collectionRef: { current: null }, itemMap: new Map() }),
                    l = e + "CollectionSlot",
                    i = u.forwardRef((e, t) => {
                        let { scope: r, children: n } = e,
                            o = a(l, r),
                            i = (0, g.e)(t, o.collectionRef);
                        return u.createElement(h.g7, { ref: i }, n);
                    }),
                    s = e + "CollectionItemSlot",
                    c = "data-radix-collection-item";
                return [
                    {
                        Provider: (e) => {
                            let { scope: t, children: r } = e,
                                n = u.useRef(null),
                                a = u.useRef(new Map()).current;
                            return u.createElement(o, { scope: t, itemMap: a, collectionRef: n }, r);
                        },
                        Slot: i,
                        ItemSlot: u.forwardRef((e, t) => {
                            let { scope: r, children: n, ...o } = e,
                                l = u.useRef(null),
                                i = (0, g.e)(t, l),
                                d = a(s, r);
                            return u.useEffect(() => (d.itemMap.set(l, { ref: l, ...o }), () => void d.itemMap.delete(l))), u.createElement(h.g7, { [c]: "", ref: i }, n);
                        }),
                    },
                    function (t) {
                        let r = a(e + "CollectionConsumer", t);
                        return u.useCallback(() => {
                            let e = r.collectionRef.current;
                            if (!e) return [];
                            let t = Array.from(e.querySelectorAll(`[${c}]`));
                            return Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current));
                        }, [r.collectionRef, r.itemMap]);
                    },
                    n,
                ];
            }
            var v = r(8541),
                x = r(3879);
            let w = 0;
            function k() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), (e.tabIndex = 0), (e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none"), e;
            }
            var E = r(9751);
            let C = "focusScope.autoFocusOnMount",
                S = "focusScope.autoFocusOnUnmount",
                N = { bubbles: !1, cancelable: !0 },
                T = (0, u.forwardRef)((e, t) => {
                    let { loop: r = !1, trapped: n = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...l } = e,
                        [i, s] = (0, u.useState)(null),
                        c = (0, E.W)(o),
                        f = (0, E.W)(a),
                        p = (0, u.useRef)(null),
                        b = (0, g.e)(t, (e) => s(e)),
                        h = (0, u.useRef)({
                            paused: !1,
                            pause() {
                                this.paused = !0;
                            },
                            resume() {
                                this.paused = !1;
                            },
                        }).current;
                    (0, u.useEffect)(() => {
                        if (n) {
                            function e(e) {
                                if (h.paused || !i) return;
                                let t = e.target;
                                i.contains(t) ? (p.current = t) : j(p.current, { select: !0 });
                            }
                            function t(e) {
                                if (h.paused || !i) return;
                                let t = e.relatedTarget;
                                null === t || i.contains(t) || j(p.current, { select: !0 });
                            }
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            let r = new MutationObserver(function (e) {
                                if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && j(i);
                            });
                            return (
                                i && r.observe(i, { childList: !0, subtree: !0 }),
                                () => {
                                    document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
                                }
                            );
                        }
                    }, [n, i, h.paused]),
                        (0, u.useEffect)(() => {
                            if (i) {
                                L.add(h);
                                let e = document.activeElement;
                                if (!i.contains(e)) {
                                    let t = new CustomEvent(C, N);
                                    i.addEventListener(C, c),
                                        i.dispatchEvent(t),
                                        t.defaultPrevented ||
                                            ((function (e, { select: t = !1 } = {}) {
                                                let r = document.activeElement;
                                                for (let n of e) if ((j(n, { select: t }), document.activeElement !== r)) return;
                                            })(
                                                R(i).filter((e) => "A" !== e.tagName),
                                                { select: !0 }
                                            ),
                                            document.activeElement === e && j(i));
                                }
                                return () => {
                                    i.removeEventListener(C, c),
                                        setTimeout(() => {
                                            let t = new CustomEvent(S, N);
                                            i.addEventListener(S, f), i.dispatchEvent(t), t.defaultPrevented || j(null != e ? e : document.body, { select: !0 }), i.removeEventListener(S, f), L.remove(h);
                                        }, 0);
                                };
                            }
                        }, [i, c, f, h]);
                    let y = (0, u.useCallback)(
                        (e) => {
                            if ((!r && !n) || h.paused) return;
                            let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                                o = document.activeElement;
                            if (t && o) {
                                let t = e.currentTarget,
                                    [n, a] = (function (e) {
                                        let t = R(e);
                                        return [M(t, e), M(t.reverse(), e)];
                                    })(t);
                                n && a ? (e.shiftKey || o !== a ? e.shiftKey && o === n && (e.preventDefault(), r && j(a, { select: !0 })) : (e.preventDefault(), r && j(n, { select: !0 }))) : o === t && e.preventDefault();
                            }
                        },
                        [r, n, h.paused]
                    );
                    return (0, u.createElement)(m.WV.div, (0, d.Z)({ tabIndex: -1 }, l, { ref: b, onKeyDown: y }));
                });
            function R(e) {
                let t = [],
                    r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: (e) => {
                            let t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
                        },
                    });
                for (; r.nextNode(); ) t.push(r.currentNode);
                return t;
            }
            function M(e, t) {
                for (let r of e)
                    if (
                        !(function (e, { upTo: t }) {
                            if ("hidden" === getComputedStyle(e).visibility) return !0;
                            for (; e && (void 0 === t || e !== t); ) {
                                if ("none" === getComputedStyle(e).display) return !0;
                                e = e.parentElement;
                            }
                            return !1;
                        })(r, { upTo: t })
                    )
                        return r;
            }
            function j(e, { select: t = !1 } = {}) {
                if (e && e.focus) {
                    var r;
                    let n = document.activeElement;
                    e.focus({ preventScroll: !0 }), e !== n && (r = e) instanceof HTMLInputElement && "select" in r && t && e.select();
                }
            }
            let L =
                ((n = []),
                {
                    add(e) {
                        let t = n[0];
                        e !== t && (null == t || t.pause()), (n = P(n, e)).unshift(e);
                    },
                    remove(e) {
                        var t;
                        null === (t = (n = P(n, e))[0]) || void 0 === t || t.resume();
                    },
                });
            function P(e, t) {
                let r = [...e],
                    n = r.indexOf(t);
                return -1 !== n && r.splice(n, 1), r;
            }
            var O = r(9142),
                D = r(5209),
                A = r(5922),
                I = r(4397);
            let _ = "rovingFocusGroup.onEntryFocus",
                z = { bubbles: !1, cancelable: !0 },
                F = "RovingFocusGroup",
                [W, B, Z] = y(F),
                [V, K] = (0, p.b)(F, [Z]),
                [H, $] = V(F),
                U = (0, u.forwardRef)((e, t) =>
                    (0, u.createElement)(W.Provider, { scope: e.__scopeRovingFocusGroup }, (0, u.createElement)(W.Slot, { scope: e.__scopeRovingFocusGroup }, (0, u.createElement)(Y, (0, d.Z)({}, e, { ref: t }))))
                ),
                Y = (0, u.forwardRef)((e, t) => {
                    let { __scopeRovingFocusGroup: r, orientation: n, loop: o = !1, dir: a, currentTabStopId: l, defaultCurrentTabStopId: i, onCurrentTabStopIdChange: s, onEntryFocus: c, ...p } = e,
                        h = (0, u.useRef)(null),
                        y = (0, g.e)(t, h),
                        x = (0, v.gm)(a),
                        [w = null, k] = (0, b.T)({ prop: l, defaultProp: i, onChange: s }),
                        [C, S] = (0, u.useState)(!1),
                        N = (0, E.W)(c),
                        T = B(r),
                        R = (0, u.useRef)(!1),
                        [M, j] = (0, u.useState)(0);
                    return (
                        (0, u.useEffect)(() => {
                            let e = h.current;
                            if (e) return e.addEventListener(_, N), () => e.removeEventListener(_, N);
                        }, [N]),
                        (0, u.createElement)(
                            H,
                            {
                                scope: r,
                                orientation: n,
                                dir: x,
                                loop: o,
                                currentTabStopId: w,
                                onItemFocus: (0, u.useCallback)((e) => k(e), [k]),
                                onItemShiftTab: (0, u.useCallback)(() => S(!0), []),
                                onFocusableItemAdd: (0, u.useCallback)(() => j((e) => e + 1), []),
                                onFocusableItemRemove: (0, u.useCallback)(() => j((e) => e - 1), []),
                            },
                            (0, u.createElement)(
                                m.WV.div,
                                (0, d.Z)({ tabIndex: C || 0 === M ? -1 : 0, "data-orientation": n }, p, {
                                    ref: y,
                                    style: { outline: "none", ...e.style },
                                    onMouseDown: (0, f.M)(e.onMouseDown, () => {
                                        R.current = !0;
                                    }),
                                    onFocus: (0, f.M)(e.onFocus, (e) => {
                                        let t = !R.current;
                                        if (e.target === e.currentTarget && t && !C) {
                                            let t = new CustomEvent(_, z);
                                            if ((e.currentTarget.dispatchEvent(t), !t.defaultPrevented)) {
                                                let e = T().filter((e) => e.focusable);
                                                q([e.find((e) => e.active), e.find((e) => e.id === w), ...e].filter(Boolean).map((e) => e.ref.current));
                                            }
                                        }
                                        R.current = !1;
                                    }),
                                    onBlur: (0, f.M)(e.onBlur, () => S(!1)),
                                })
                            )
                        )
                    );
                }),
                G = (0, u.forwardRef)((e, t) => {
                    let { __scopeRovingFocusGroup: r, focusable: n = !0, active: o = !1, tabStopId: a, ...l } = e,
                        i = (0, O.M)(),
                        s = a || i,
                        c = $("RovingFocusGroupItem", r),
                        g = c.currentTabStopId === s,
                        p = B(r),
                        { onFocusableItemAdd: b, onFocusableItemRemove: h } = c;
                    return (
                        (0, u.useEffect)(() => {
                            if (n) return b(), () => h();
                        }, [n, b, h]),
                        (0, u.createElement)(
                            W.ItemSlot,
                            { scope: r, id: s, focusable: n, active: o },
                            (0, u.createElement)(
                                m.WV.span,
                                (0, d.Z)({ tabIndex: g ? 0 : -1, "data-orientation": c.orientation }, l, {
                                    ref: t,
                                    onMouseDown: (0, f.M)(e.onMouseDown, (e) => {
                                        n ? c.onItemFocus(s) : e.preventDefault();
                                    }),
                                    onFocus: (0, f.M)(e.onFocus, () => c.onItemFocus(s)),
                                    onKeyDown: (0, f.M)(e.onKeyDown, (e) => {
                                        if ("Tab" === e.key && e.shiftKey) {
                                            c.onItemShiftTab();
                                            return;
                                        }
                                        if (e.target !== e.currentTarget) return;
                                        let t = (function (e, t, r) {
                                            var n;
                                            let o = ((n = e.key), "rtl" !== r ? n : "ArrowLeft" === n ? "ArrowRight" : "ArrowRight" === n ? "ArrowLeft" : n);
                                            if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(o)) && !("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(o))) return X[o];
                                        })(e, c.orientation, c.dir);
                                        if (void 0 !== t) {
                                            e.preventDefault();
                                            let o = p()
                                                .filter((e) => e.focusable)
                                                .map((e) => e.ref.current);
                                            if ("last" === t) o.reverse();
                                            else if ("prev" === t || "next" === t) {
                                                var r, n;
                                                "prev" === t && o.reverse();
                                                let a = o.indexOf(e.currentTarget);
                                                o = c.loop ? ((r = o), (n = a + 1), r.map((e, t) => r[(n + t) % r.length])) : o.slice(a + 1);
                                            }
                                            setTimeout(() => q(o));
                                        }
                                    }),
                                })
                            )
                        )
                    );
                }),
                X = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" };
            function q(e) {
                let t = document.activeElement;
                for (let r of e) if (r === t || (r.focus(), document.activeElement !== t)) return;
            }
            var J = new WeakMap(),
                Q = new WeakMap(),
                ee = {},
                et = 0,
                er = function (e) {
                    return e && (e.host || er(e.parentNode));
                },
                en = function (e, t, r, n) {
                    var o = (Array.isArray(e) ? e : [e])
                        .map(function (e) {
                            if (t.contains(e)) return e;
                            var r = er(e);
                            return r && t.contains(r) ? r : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null);
                        })
                        .filter(function (e) {
                            return !!e;
                        });
                    ee[r] || (ee[r] = new WeakMap());
                    var a = ee[r],
                        l = [],
                        i = new Set(),
                        s = new Set(o),
                        c = function (e) {
                            !e || i.has(e) || (i.add(e), c(e.parentNode));
                        };
                    o.forEach(c);
                    var d = function (e) {
                        !e ||
                            s.has(e) ||
                            Array.prototype.forEach.call(e.children, function (e) {
                                if (i.has(e)) d(e);
                                else {
                                    var t = e.getAttribute(n),
                                        o = null !== t && "false" !== t,
                                        s = (J.get(e) || 0) + 1,
                                        c = (a.get(e) || 0) + 1;
                                    J.set(e, s), a.set(e, c), l.push(e), 1 === s && o && Q.set(e, !0), 1 === c && e.setAttribute(r, "true"), o || e.setAttribute(n, "true");
                                }
                            });
                    };
                    return (
                        d(t),
                        i.clear(),
                        et++,
                        function () {
                            l.forEach(function (e) {
                                var t = J.get(e) - 1,
                                    o = a.get(e) - 1;
                                J.set(e, t), a.set(e, o), t || (Q.has(e) || e.removeAttribute(n), Q.delete(e)), o || e.removeAttribute(r);
                            }),
                                --et || ((J = new WeakMap()), (J = new WeakMap()), (Q = new WeakMap()), (ee = {}));
                        }
                    );
                },
                eo = function (e, t, r) {
                    void 0 === r && (r = "data-aria-hidden");
                    var n = Array.from(Array.isArray(e) ? e : [e]),
                        o = t || ("undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
                    return o
                        ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), en(n, o, r, "aria-hidden"))
                        : function () {
                              return null;
                          };
                },
                ea = function () {
                    return (ea =
                        Object.assign ||
                        function (e) {
                            for (var t, r = 1, n = arguments.length; r < n; r++) for (var o in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e;
                        }).apply(this, arguments);
                };
            function el(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) 0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
                return r;
            }
            "function" == typeof SuppressedError && SuppressedError;
            var ei = "right-scroll-bar-position",
                es = "width-before-scroll-bar";
            function ec(e, t) {
                return "function" == typeof e ? e(t) : e && (e.current = t), e;
            }
            var ed = new WeakMap(),
                eu =
                    (void 0 === o && (o = {}),
                    ((void 0 === a &&
                        (a = function (e) {
                            return e;
                        }),
                    (l = []),
                    (i = !1),
                    (s = {
                        read: function () {
                            if (i) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                            return l.length ? l[l.length - 1] : null;
                        },
                        useMedium: function (e) {
                            var t = a(e, i);
                            return (
                                l.push(t),
                                function () {
                                    l = l.filter(function (e) {
                                        return e !== t;
                                    });
                                }
                            );
                        },
                        assignSyncMedium: function (e) {
                            for (i = !0; l.length; ) {
                                var t = l;
                                (l = []), t.forEach(e);
                            }
                            l = {
                                push: function (t) {
                                    return e(t);
                                },
                                filter: function () {
                                    return l;
                                },
                            };
                        },
                        assignMedium: function (e) {
                            i = !0;
                            var t = [];
                            if (l.length) {
                                var r = l;
                                (l = []), r.forEach(e), (t = l);
                            }
                            var n = function () {
                                    var r = t;
                                    (t = []), r.forEach(e);
                                },
                                o = function () {
                                    return Promise.resolve().then(n);
                                };
                            o(),
                                (l = {
                                    push: function (e) {
                                        t.push(e), o();
                                    },
                                    filter: function (e) {
                                        return (t = t.filter(e)), l;
                                    },
                                });
                        },
                    })).options = ea({ async: !0, ssr: !1 }, o)),
                    s),
                ef = function () {},
                eg = u.forwardRef(function (e, t) {
                    var r,
                        n,
                        o,
                        a,
                        l = u.useRef(null),
                        i = u.useState({ onScrollCapture: ef, onWheelCapture: ef, onTouchMoveCapture: ef }),
                        s = i[0],
                        c = i[1],
                        d = e.forwardProps,
                        f = e.children,
                        g = e.className,
                        p = e.removeScrollBar,
                        b = e.enabled,
                        m = e.shards,
                        h = e.sideCar,
                        y = e.noIsolation,
                        v = e.inert,
                        x = e.allowPinchZoom,
                        w = e.as,
                        k = el(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]),
                        E =
                            ((r = [l, t]),
                            (n = function (e) {
                                return r.forEach(function (t) {
                                    return ec(t, e);
                                });
                            }),
                            ((o = (0, u.useState)(function () {
                                return {
                                    value: null,
                                    callback: n,
                                    facade: {
                                        get current() {
                                            return o.value;
                                        },
                                        set current(value) {
                                            var e = o.value;
                                            e !== value && ((o.value = value), o.callback(value, e));
                                        },
                                    },
                                };
                            })[0]).callback = n),
                            (a = o.facade),
                            u.useLayoutEffect(
                                function () {
                                    var e = ed.get(a);
                                    if (e) {
                                        var t = new Set(e),
                                            n = new Set(r),
                                            o = a.current;
                                        t.forEach(function (e) {
                                            n.has(e) || ec(e, null);
                                        }),
                                            n.forEach(function (e) {
                                                t.has(e) || ec(e, o);
                                            });
                                    }
                                    ed.set(a, r);
                                },
                                [r]
                            ),
                            a),
                        C = ea(ea({}, k), s);
                    return u.createElement(
                        u.Fragment,
                        null,
                        b && u.createElement(h, { sideCar: eu, removeScrollBar: p, shards: m, noIsolation: y, inert: v, setCallbacks: c, allowPinchZoom: !!x, lockRef: l }),
                        d ? u.cloneElement(u.Children.only(f), ea(ea({}, C), { ref: E })) : u.createElement(void 0 === w ? "div" : w, ea({}, C, { className: g, ref: E }), f)
                    );
                });
            (eg.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }), (eg.classNames = { fullWidth: es, zeroRight: ei });
            var ep = function (e) {
                var t = e.sideCar,
                    r = el(e, ["sideCar"]);
                if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
                var n = t.read();
                if (!n) throw Error("Sidecar medium not found");
                return u.createElement(n, ea({}, r));
            };
            ep.isSideCarExport = !0;
            var eb = function () {
                    var e = 0,
                        t = null;
                    return {
                        add: function (n) {
                            if (
                                0 == e &&
                                (t = (function () {
                                    if (!document) return null;
                                    var e = document.createElement("style");
                                    e.type = "text/css";
                                    var t = c || r.nc;
                                    return t && e.setAttribute("nonce", t), e;
                                })())
                            ) {
                                var o, a;
                                (o = t).styleSheet ? (o.styleSheet.cssText = n) : o.appendChild(document.createTextNode(n)), (a = t), (document.head || document.getElementsByTagName("head")[0]).appendChild(a);
                            }
                            e++;
                        },
                        remove: function () {
                            --e || !t || (t.parentNode && t.parentNode.removeChild(t), (t = null));
                        },
                    };
                },
                em = function () {
                    var e = eb();
                    return function (t, r) {
                        u.useEffect(
                            function () {
                                return (
                                    e.add(t),
                                    function () {
                                        e.remove();
                                    }
                                );
                            },
                            [t && r]
                        );
                    };
                },
                eh = function () {
                    var e = em();
                    return function (t) {
                        return e(t.styles, t.dynamic), null;
                    };
                },
                ey = { left: 0, top: 0, right: 0, gap: 0 },
                ev = function (e) {
                    return parseInt(e || "", 10) || 0;
                },
                ex = function (e) {
                    var t = window.getComputedStyle(document.body),
                        r = t["padding" === e ? "paddingLeft" : "marginLeft"],
                        n = t["padding" === e ? "paddingTop" : "marginTop"],
                        o = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [ev(r), ev(n), ev(o)];
                },
                ew = function (e) {
                    if ((void 0 === e && (e = "margin"), "undefined" == typeof window)) return ey;
                    var t = ex(e),
                        r = document.documentElement.clientWidth,
                        n = window.innerWidth;
                    return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, n - r + t[2] - t[0]) };
                },
                ek = eh(),
                eE = "data-scroll-locked",
                eC = function (e, t, r, n) {
                    var o = e.left,
                        a = e.top,
                        l = e.right,
                        i = e.gap;
                    return (
                        void 0 === r && (r = "margin"),
                        "\n  ."
                            .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
                            .concat(n, ";\n   padding-right: ")
                            .concat(i, "px ")
                            .concat(n, ";\n  }\n  body[")
                            .concat(eE, "] {\n    overflow: hidden ")
                            .concat(n, ";\n    overscroll-behavior: contain;\n    ")
                            .concat(
                                [
                                    t && "position: relative ".concat(n, ";"),
                                    "margin" === r &&
                                        "\n    padding-left: "
                                            .concat(o, "px;\n    padding-top: ")
                                            .concat(a, "px;\n    padding-right: ")
                                            .concat(l, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ")
                                            .concat(i, "px ")
                                            .concat(n, ";\n    "),
                                    "padding" === r && "padding-right: ".concat(i, "px ").concat(n, ";"),
                                ]
                                    .filter(Boolean)
                                    .join(""),
                                "\n  }\n  \n  ."
                            )
                            .concat(ei, " {\n    right: ")
                            .concat(i, "px ")
                            .concat(n, ";\n  }\n  \n  .")
                            .concat(es, " {\n    margin-right: ")
                            .concat(i, "px ")
                            .concat(n, ";\n  }\n  \n  .")
                            .concat(ei, " .")
                            .concat(ei, " {\n    right: 0 ")
                            .concat(n, ";\n  }\n  \n  .")
                            .concat(es, " .")
                            .concat(es, " {\n    margin-right: 0 ")
                            .concat(n, ";\n  }\n  \n  body[")
                            .concat(eE, "] {\n    ")
                            .concat("--removed-body-scroll-bar-size", ": ")
                            .concat(i, "px;\n  }\n")
                    );
                },
                eS = function (e) {
                    var t = e.noRelative,
                        r = e.noImportant,
                        n = e.gapMode,
                        o = void 0 === n ? "margin" : n,
                        a = u.useMemo(
                            function () {
                                return ew(o);
                            },
                            [o]
                        );
                    return (
                        u.useEffect(function () {
                            return (
                                document.body.setAttribute(eE, ""),
                                function () {
                                    document.body.removeAttribute(eE);
                                }
                            );
                        }, []),
                        u.createElement(ek, { styles: eC(a, !t, o, r ? "" : "!important") })
                    );
                },
                eN = !1;
            if ("undefined" != typeof window)
                try {
                    var eT = Object.defineProperty({}, "passive", {
                        get: function () {
                            return (eN = !0), !0;
                        },
                    });
                    window.addEventListener("test", eT, eT), window.removeEventListener("test", eT, eT);
                } catch (e) {
                    eN = !1;
                }
            var eR = !!eN && { passive: !1 },
                eM = function (e, t) {
                    var r = window.getComputedStyle(e);
                    return "hidden" !== r[t] && !(r.overflowY === r.overflowX && "TEXTAREA" !== e.tagName && "visible" === r[t]);
                },
                ej = function (e, t) {
                    var r = t;
                    do {
                        if (("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), eL(e, r))) {
                            var n = eP(e, r);
                            if (n[1] > n[2]) return !0;
                        }
                        r = r.parentNode;
                    } while (r && r !== document.body);
                    return !1;
                },
                eL = function (e, t) {
                    return "v" === e ? eM(t, "overflowY") : eM(t, "overflowX");
                },
                eP = function (e, t) {
                    return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth];
                },
                eO = function (e, t, r, n, o) {
                    var a,
                        l = ((a = window.getComputedStyle(t).direction), "h" === e && "rtl" === a ? -1 : 1),
                        i = l * n,
                        s = r.target,
                        c = t.contains(s),
                        d = !1,
                        u = i > 0,
                        f = 0,
                        g = 0;
                    do {
                        var p = eP(e, s),
                            b = p[0],
                            m = p[1] - p[2] - l * b;
                        (b || m) && eL(e, s) && ((f += m), (g += b)), (s = s.parentNode);
                    } while ((!c && s !== document.body) || (c && (t.contains(s) || t === s)));
                    return u && ((o && 0 === f) || (!o && i > f)) ? (d = !0) : !u && ((o && 0 === g) || (!o && -i > g)) && (d = !0), d;
                },
                eD = function (e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
                },
                eA = function (e) {
                    return [e.deltaX, e.deltaY];
                },
                eI = function (e) {
                    return e && "current" in e ? e.current : e;
                },
                e_ = 0,
                ez = [],
                eF =
                    (eu.useMedium(function (e) {
                        var t = u.useRef([]),
                            r = u.useRef([0, 0]),
                            n = u.useRef(),
                            o = u.useState(e_++)[0],
                            a = u.useState(function () {
                                return eh();
                            })[0],
                            l = u.useRef(e);
                        u.useEffect(
                            function () {
                                l.current = e;
                            },
                            [e]
                        ),
                            u.useEffect(
                                function () {
                                    if (e.inert) {
                                        document.body.classList.add("block-interactivity-".concat(o));
                                        var t = (function (e, t, r) {
                                            if (r || 2 == arguments.length) for (var n, o = 0, a = t.length; o < a; o++) (!n && o in t) || (n || (n = Array.prototype.slice.call(t, 0, o)), (n[o] = t[o]));
                                            return e.concat(n || Array.prototype.slice.call(t));
                                        })([e.lockRef.current], (e.shards || []).map(eI), !0).filter(Boolean);
                                        return (
                                            t.forEach(function (e) {
                                                return e.classList.add("allow-interactivity-".concat(o));
                                            }),
                                            function () {
                                                document.body.classList.remove("block-interactivity-".concat(o)),
                                                    t.forEach(function (e) {
                                                        return e.classList.remove("allow-interactivity-".concat(o));
                                                    });
                                            }
                                        );
                                    }
                                },
                                [e.inert, e.lockRef.current, e.shards]
                            );
                        var i = u.useCallback(function (e, t) {
                                if ("touches" in e && 2 === e.touches.length) return !l.current.allowPinchZoom;
                                var o,
                                    a = eD(e),
                                    i = r.current,
                                    s = "deltaX" in e ? e.deltaX : i[0] - a[0],
                                    c = "deltaY" in e ? e.deltaY : i[1] - a[1],
                                    d = e.target,
                                    u = Math.abs(s) > Math.abs(c) ? "h" : "v";
                                if ("touches" in e && "h" === u && "range" === d.type) return !1;
                                var f = ej(u, d);
                                if (!f) return !0;
                                if ((f ? (o = u) : ((o = "v" === u ? "h" : "v"), (f = ej(u, d))), !f)) return !1;
                                if ((!n.current && "changedTouches" in e && (s || c) && (n.current = o), !o)) return !0;
                                var g = n.current || o;
                                return eO(g, t, e, "h" === g ? s : c, !0);
                            }, []),
                            s = u.useCallback(function (e) {
                                if (ez.length && ez[ez.length - 1] === a) {
                                    var r = "deltaY" in e ? eA(e) : eD(e),
                                        n = t.current.filter(function (t) {
                                            var n;
                                            return t.name === e.type && t.target === e.target && (n = t.delta)[0] === r[0] && n[1] === r[1];
                                        })[0];
                                    if (n && n.should) {
                                        e.cancelable && e.preventDefault();
                                        return;
                                    }
                                    if (!n) {
                                        var o = (l.current.shards || [])
                                            .map(eI)
                                            .filter(Boolean)
                                            .filter(function (t) {
                                                return t.contains(e.target);
                                            });
                                        (o.length > 0 ? i(e, o[0]) : !l.current.noIsolation) && e.cancelable && e.preventDefault();
                                    }
                                }
                            }, []),
                            c = u.useCallback(function (e, r, n, o) {
                                var a = { name: e, delta: r, target: n, should: o };
                                t.current.push(a),
                                    setTimeout(function () {
                                        t.current = t.current.filter(function (e) {
                                            return e !== a;
                                        });
                                    }, 1);
                            }, []),
                            d = u.useCallback(function (e) {
                                (r.current = eD(e)), (n.current = void 0);
                            }, []),
                            f = u.useCallback(function (t) {
                                c(t.type, eA(t), t.target, i(t, e.lockRef.current));
                            }, []),
                            g = u.useCallback(function (t) {
                                c(t.type, eD(t), t.target, i(t, e.lockRef.current));
                            }, []);
                        u.useEffect(function () {
                            return (
                                ez.push(a),
                                e.setCallbacks({ onScrollCapture: f, onWheelCapture: f, onTouchMoveCapture: g }),
                                document.addEventListener("wheel", s, eR),
                                document.addEventListener("touchmove", s, eR),
                                document.addEventListener("touchstart", d, eR),
                                function () {
                                    (ez = ez.filter(function (e) {
                                        return e !== a;
                                    })),
                                        document.removeEventListener("wheel", s, eR),
                                        document.removeEventListener("touchmove", s, eR),
                                        document.removeEventListener("touchstart", d, eR);
                                }
                            );
                        }, []);
                        var p = e.removeScrollBar,
                            b = e.inert;
                        return u.createElement(
                            u.Fragment,
                            null,
                            b ? u.createElement(a, { styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n") }) : null,
                            p ? u.createElement(eS, { gapMode: "margin" }) : null
                        );
                    }),
                    ep),
                eW = u.forwardRef(function (e, t) {
                    return u.createElement(eg, ea({}, e, { ref: t, sideCar: eF }));
                });
            eW.classNames = eg.classNames;
            let eB = ["Enter", " "],
                eZ = ["ArrowUp", "PageDown", "End"],
                eV = ["ArrowDown", "PageUp", "Home", ...eZ],
                eK = { ltr: [...eB, "ArrowRight"], rtl: [...eB, "ArrowLeft"] },
                eH = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
                e$ = "Menu",
                [eU, eY, eG] = y(e$),
                [eX, eq] = (0, p.b)(e$, [eG, D.D7, K]),
                eJ = (0, D.D7)(),
                eQ = K(),
                [e0, e1] = eX(e$),
                [e5, e2] = eX(e$),
                e6 = (0, u.forwardRef)((e, t) => {
                    let { __scopeMenu: r, ...n } = e,
                        o = eJ(r);
                    return (0, u.createElement)(D.ee, (0, d.Z)({}, o, n, { ref: t }));
                }),
                e4 = "MenuPortal",
                [e7, e3] = eX(e4, { forceMount: void 0 }),
                e9 = "MenuContent",
                [e8, te] = eX(e9),
                tt = (0, u.forwardRef)((e, t) => {
                    let r = e3(e9, e.__scopeMenu),
                        { forceMount: n = r.forceMount, ...o } = e,
                        a = e1(e9, e.__scopeMenu),
                        l = e2(e9, e.__scopeMenu);
                    return (0, u.createElement)(
                        eU.Provider,
                        { scope: e.__scopeMenu },
                        (0, u.createElement)(
                            I.z,
                            { present: n || a.open },
                            (0, u.createElement)(eU.Slot, { scope: e.__scopeMenu }, l.modal ? (0, u.createElement)(tr, (0, d.Z)({}, o, { ref: t })) : (0, u.createElement)(tn, (0, d.Z)({}, o, { ref: t })))
                        )
                    );
                }),
                tr = (0, u.forwardRef)((e, t) => {
                    let r = e1(e9, e.__scopeMenu),
                        n = (0, u.useRef)(null),
                        o = (0, g.e)(t, n);
                    return (
                        (0, u.useEffect)(() => {
                            let e = n.current;
                            if (e) return eo(e);
                        }, []),
                        (0, u.createElement)(
                            to,
                            (0, d.Z)({}, e, {
                                ref: o,
                                trapFocus: r.open,
                                disableOutsidePointerEvents: r.open,
                                disableOutsideScroll: !0,
                                onFocusOutside: (0, f.M)(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
                                onDismiss: () => r.onOpenChange(!1),
                            })
                        )
                    );
                }),
                tn = (0, u.forwardRef)((e, t) => {
                    let r = e1(e9, e.__scopeMenu);
                    return (0, u.createElement)(to, (0, d.Z)({}, e, { ref: t, trapFocus: !1, disableOutsidePointerEvents: !1, disableOutsideScroll: !1, onDismiss: () => r.onOpenChange(!1) }));
                }),
                to = (0, u.forwardRef)((e, t) => {
                    let {
                            __scopeMenu: r,
                            loop: n = !1,
                            trapFocus: o,
                            onOpenAutoFocus: a,
                            onCloseAutoFocus: l,
                            disableOutsidePointerEvents: i,
                            onEntryFocus: s,
                            onEscapeKeyDown: c,
                            onPointerDownOutside: p,
                            onFocusOutside: b,
                            onInteractOutside: m,
                            onDismiss: y,
                            disableOutsideScroll: v,
                            ...E
                        } = e,
                        C = e1(e9, r),
                        S = e2(e9, r),
                        N = eJ(r),
                        R = eQ(r),
                        M = eY(r),
                        [j, L] = (0, u.useState)(null),
                        P = (0, u.useRef)(null),
                        O = (0, g.e)(t, P, C.onContentChange),
                        A = (0, u.useRef)(0),
                        I = (0, u.useRef)(""),
                        _ = (0, u.useRef)(0),
                        z = (0, u.useRef)(null),
                        F = (0, u.useRef)("right"),
                        W = (0, u.useRef)(0),
                        B = v ? eW : u.Fragment,
                        Z = v ? { as: h.g7, allowPinchZoom: !0 } : void 0,
                        V = (e) => {
                            var t, r;
                            let n = I.current + e,
                                o = M().filter((e) => !e.disabled),
                                a = document.activeElement,
                                l = null === (t = o.find((e) => e.ref.current === a)) || void 0 === t ? void 0 : t.textValue,
                                i = (function (e, t, r) {
                                    var n;
                                    let o = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
                                        a = ((n = Math.max(r ? e.indexOf(r) : -1, 0)), e.map((t, r) => e[(n + r) % e.length]));
                                    1 === o.length && (a = a.filter((e) => e !== r));
                                    let l = a.find((e) => e.toLowerCase().startsWith(o.toLowerCase()));
                                    return l !== r ? l : void 0;
                                })(
                                    o.map((e) => e.textValue),
                                    n,
                                    l
                                ),
                                s = null === (r = o.find((e) => e.textValue === i)) || void 0 === r ? void 0 : r.ref.current;
                            !(function e(t) {
                                (I.current = t), window.clearTimeout(A.current), "" !== t && (A.current = window.setTimeout(() => e(""), 1e3));
                            })(n),
                                s && setTimeout(() => s.focus());
                        };
                    (0, u.useEffect)(() => () => window.clearTimeout(A.current), []),
                        (0, u.useEffect)(() => {
                            var e, t;
                            let r = document.querySelectorAll("[data-radix-focus-guard]");
                            return (
                                document.body.insertAdjacentElement("afterbegin", null !== (e = r[0]) && void 0 !== e ? e : k()),
                                document.body.insertAdjacentElement("beforeend", null !== (t = r[1]) && void 0 !== t ? t : k()),
                                w++,
                                () => {
                                    1 === w && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), w--;
                                }
                            );
                        }, []);
                    let K = (0, u.useCallback)((e) => {
                        var t, r, n;
                        return (
                            F.current === (null === (t = z.current) || void 0 === t ? void 0 : t.side) &&
                            !!(n = null === (r = z.current) || void 0 === r ? void 0 : r.area) &&
                            (function (e, t) {
                                let { x: r, y: n } = e,
                                    o = !1;
                                for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
                                    let l = t[e].x,
                                        i = t[e].y,
                                        s = t[a].x,
                                        c = t[a].y;
                                    i > n != c > n && r < ((s - l) * (n - i)) / (c - i) + l && (o = !o);
                                }
                                return o;
                            })({ x: e.clientX, y: e.clientY }, n)
                        );
                    }, []);
                    return (0, u.createElement)(
                        e8,
                        {
                            scope: r,
                            searchRef: I,
                            onItemEnter: (0, u.useCallback)(
                                (e) => {
                                    K(e) && e.preventDefault();
                                },
                                [K]
                            ),
                            onItemLeave: (0, u.useCallback)(
                                (e) => {
                                    var t;
                                    K(e) || (null === (t = P.current) || void 0 === t || t.focus(), L(null));
                                },
                                [K]
                            ),
                            onTriggerLeave: (0, u.useCallback)(
                                (e) => {
                                    K(e) && e.preventDefault();
                                },
                                [K]
                            ),
                            pointerGraceTimerRef: _,
                            onPointerGraceIntentChange: (0, u.useCallback)((e) => {
                                z.current = e;
                            }, []),
                        },
                        (0, u.createElement)(
                            B,
                            Z,
                            (0, u.createElement)(
                                T,
                                {
                                    asChild: !0,
                                    trapped: o,
                                    onMountAutoFocus: (0, f.M)(a, (e) => {
                                        var t;
                                        e.preventDefault(), null === (t = P.current) || void 0 === t || t.focus();
                                    }),
                                    onUnmountAutoFocus: l,
                                },
                                (0, u.createElement)(
                                    x.XB,
                                    { asChild: !0, disableOutsidePointerEvents: i, onEscapeKeyDown: c, onPointerDownOutside: p, onFocusOutside: b, onInteractOutside: m, onDismiss: y },
                                    (0, u.createElement)(
                                        U,
                                        (0, d.Z)({ asChild: !0 }, R, {
                                            dir: S.dir,
                                            orientation: "vertical",
                                            loop: n,
                                            currentTabStopId: j,
                                            onCurrentTabStopIdChange: L,
                                            onEntryFocus: (0, f.M)(s, (e) => {
                                                S.isUsingKeyboardRef.current || e.preventDefault();
                                            }),
                                        }),
                                        (0, u.createElement)(
                                            D.VY,
                                            (0, d.Z)({ role: "menu", "aria-orientation": "vertical", "data-state": tT(C.open), "data-radix-menu-content": "", dir: S.dir }, N, E, {
                                                ref: O,
                                                style: { outline: "none", ...E.style },
                                                onKeyDown: (0, f.M)(E.onKeyDown, (e) => {
                                                    let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget,
                                                        r = e.ctrlKey || e.altKey || e.metaKey,
                                                        n = 1 === e.key.length;
                                                    t && ("Tab" === e.key && e.preventDefault(), !r && n && V(e.key));
                                                    let o = P.current;
                                                    if (e.target !== o || !eV.includes(e.key)) return;
                                                    e.preventDefault();
                                                    let a = M()
                                                        .filter((e) => !e.disabled)
                                                        .map((e) => e.ref.current);
                                                    eZ.includes(e.key) && a.reverse(),
                                                        (function (e) {
                                                            let t = document.activeElement;
                                                            for (let r of e) if (r === t || (r.focus(), document.activeElement !== t)) return;
                                                        })(a);
                                                }),
                                                onBlur: (0, f.M)(e.onBlur, (e) => {
                                                    e.currentTarget.contains(e.target) || (window.clearTimeout(A.current), (I.current = ""));
                                                }),
                                                onPointerMove: (0, f.M)(
                                                    e.onPointerMove,
                                                    tj((e) => {
                                                        let t = e.target,
                                                            r = W.current !== e.clientX;
                                                        if (e.currentTarget.contains(t) && r) {
                                                            let t = e.clientX > W.current ? "right" : "left";
                                                            (F.current = t), (W.current = e.clientX);
                                                        }
                                                    })
                                                ),
                                            })
                                        )
                                    )
                                )
                            )
                        )
                    );
                }),
                ta = (0, u.forwardRef)((e, t) => {
                    let { __scopeMenu: r, ...n } = e;
                    return (0, u.createElement)(m.WV.div, (0, d.Z)({ role: "group" }, n, { ref: t }));
                }),
                tl = (0, u.forwardRef)((e, t) => {
                    let { __scopeMenu: r, ...n } = e;
                    return (0, u.createElement)(m.WV.div, (0, d.Z)({}, n, { ref: t }));
                }),
                ti = "MenuItem",
                ts = "menu.itemSelect",
                tc = (0, u.forwardRef)((e, t) => {
                    let { disabled: r = !1, onSelect: n, ...o } = e,
                        a = (0, u.useRef)(null),
                        l = e2(ti, e.__scopeMenu),
                        i = te(ti, e.__scopeMenu),
                        s = (0, g.e)(t, a),
                        c = (0, u.useRef)(!1);
                    return (0, u.createElement)(
                        td,
                        (0, d.Z)({}, o, {
                            ref: s,
                            disabled: r,
                            onClick: (0, f.M)(e.onClick, () => {
                                let e = a.current;
                                if (!r && e) {
                                    let t = new CustomEvent(ts, { bubbles: !0, cancelable: !0 });
                                    e.addEventListener(ts, (e) => (null == n ? void 0 : n(e)), { once: !0 }), (0, m.jH)(e, t), t.defaultPrevented ? (c.current = !1) : l.onClose();
                                }
                            }),
                            onPointerDown: (t) => {
                                var r;
                                null === (r = e.onPointerDown) || void 0 === r || r.call(e, t), (c.current = !0);
                            },
                            onPointerUp: (0, f.M)(e.onPointerUp, (e) => {
                                var t;
                                c.current || null === (t = e.currentTarget) || void 0 === t || t.click();
                            }),
                            onKeyDown: (0, f.M)(e.onKeyDown, (e) => {
                                let t = "" !== i.searchRef.current;
                                !r && (!t || " " !== e.key) && eB.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
                            }),
                        })
                    );
                }),
                td = (0, u.forwardRef)((e, t) => {
                    let { __scopeMenu: r, disabled: n = !1, textValue: o, ...a } = e,
                        l = te(ti, r),
                        i = eQ(r),
                        s = (0, u.useRef)(null),
                        c = (0, g.e)(t, s),
                        [p, b] = (0, u.useState)(!1),
                        [h, y] = (0, u.useState)("");
                    return (
                        (0, u.useEffect)(() => {
                            let e = s.current;
                            if (e) {
                                var t;
                                y((null !== (t = e.textContent) && void 0 !== t ? t : "").trim());
                            }
                        }, [a.children]),
                        (0, u.createElement)(
                            eU.ItemSlot,
                            { scope: r, disabled: n, textValue: null != o ? o : h },
                            (0, u.createElement)(
                                G,
                                (0, d.Z)({ asChild: !0 }, i, { focusable: !n }),
                                (0, u.createElement)(
                                    m.WV.div,
                                    (0, d.Z)({ role: "menuitem", "data-highlighted": p ? "" : void 0, "aria-disabled": n || void 0, "data-disabled": n ? "" : void 0 }, a, {
                                        ref: c,
                                        onPointerMove: (0, f.M)(
                                            e.onPointerMove,
                                            tj((e) => {
                                                n ? l.onItemLeave(e) : (l.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus());
                                            })
                                        ),
                                        onPointerLeave: (0, f.M)(
                                            e.onPointerLeave,
                                            tj((e) => l.onItemLeave(e))
                                        ),
                                        onFocus: (0, f.M)(e.onFocus, () => b(!0)),
                                        onBlur: (0, f.M)(e.onBlur, () => b(!1)),
                                    })
                                )
                            )
                        )
                    );
                }),
                tu = (0, u.forwardRef)((e, t) => {
                    let { checked: r = !1, onCheckedChange: n, ...o } = e;
                    return (0, u.createElement)(
                        th,
                        { scope: e.__scopeMenu, checked: r },
                        (0, u.createElement)(
                            tc,
                            (0, d.Z)({ role: "menuitemcheckbox", "aria-checked": tR(r) ? "mixed" : r }, o, {
                                ref: t,
                                "data-state": tM(r),
                                onSelect: (0, f.M)(o.onSelect, () => (null == n ? void 0 : n(!!tR(r) || !r)), { checkForDefaultPrevented: !1 }),
                            })
                        )
                    );
                }),
                [tf, tg] = eX("MenuRadioGroup", { value: void 0, onValueChange: () => {} }),
                tp = (0, u.forwardRef)((e, t) => {
                    let { value: r, onValueChange: n, ...o } = e,
                        a = (0, E.W)(n);
                    return (0, u.createElement)(tf, { scope: e.__scopeMenu, value: r, onValueChange: a }, (0, u.createElement)(ta, (0, d.Z)({}, o, { ref: t })));
                }),
                tb = (0, u.forwardRef)((e, t) => {
                    let { value: r, ...n } = e,
                        o = tg("MenuRadioItem", e.__scopeMenu),
                        a = r === o.value;
                    return (0, u.createElement)(
                        th,
                        { scope: e.__scopeMenu, checked: a },
                        (0, u.createElement)(
                            tc,
                            (0, d.Z)({ role: "menuitemradio", "aria-checked": a }, n, {
                                ref: t,
                                "data-state": tM(a),
                                onSelect: (0, f.M)(
                                    n.onSelect,
                                    () => {
                                        var e;
                                        return null === (e = o.onValueChange) || void 0 === e ? void 0 : e.call(o, r);
                                    },
                                    { checkForDefaultPrevented: !1 }
                                ),
                            })
                        )
                    );
                }),
                tm = "MenuItemIndicator",
                [th, ty] = eX(tm, { checked: !1 }),
                tv = (0, u.forwardRef)((e, t) => {
                    let { __scopeMenu: r, forceMount: n, ...o } = e,
                        a = ty(tm, r);
                    return (0, u.createElement)(I.z, { present: n || tR(a.checked) || !0 === a.checked }, (0, u.createElement)(m.WV.span, (0, d.Z)({}, o, { ref: t, "data-state": tM(a.checked) })));
                }),
                tx = (0, u.forwardRef)((e, t) => {
                    let { __scopeMenu: r, ...n } = e;
                    return (0, u.createElement)(m.WV.div, (0, d.Z)({ role: "separator", "aria-orientation": "horizontal" }, n, { ref: t }));
                }),
                tw =
                    ((e, t) => {
                        let { __scopeMenu: r, ...n } = e,
                            o = eJ(r);
                        return (0, u.createElement)(D.Eh, (0, d.Z)({}, o, n, { ref: t }));
                    },
                    "MenuSub"),
                [tk, tE] = eX(tw),
                tC = "MenuSubTrigger",
                tS = (0, u.forwardRef)((e, t) => {
                    let r = e1(tC, e.__scopeMenu),
                        n = e2(tC, e.__scopeMenu),
                        o = tE(tC, e.__scopeMenu),
                        a = te(tC, e.__scopeMenu),
                        l = (0, u.useRef)(null),
                        { pointerGraceTimerRef: i, onPointerGraceIntentChange: s } = a,
                        c = { __scopeMenu: e.__scopeMenu },
                        p = (0, u.useCallback)(() => {
                            l.current && window.clearTimeout(l.current), (l.current = null);
                        }, []);
                    return (
                        (0, u.useEffect)(() => p, [p]),
                        (0, u.useEffect)(() => {
                            let e = i.current;
                            return () => {
                                window.clearTimeout(e), s(null);
                            };
                        }, [i, s]),
                        (0, u.createElement)(
                            e6,
                            (0, d.Z)({ asChild: !0 }, c),
                            (0, u.createElement)(
                                td,
                                (0, d.Z)({ id: o.triggerId, "aria-haspopup": "menu", "aria-expanded": r.open, "aria-controls": o.contentId, "data-state": tT(r.open) }, e, {
                                    ref: (0, g.F)(t, o.onTriggerChange),
                                    onClick: (t) => {
                                        var n;
                                        null === (n = e.onClick) || void 0 === n || n.call(e, t), e.disabled || t.defaultPrevented || (t.currentTarget.focus(), r.open || r.onOpenChange(!0));
                                    },
                                    onPointerMove: (0, f.M)(
                                        e.onPointerMove,
                                        tj((t) => {
                                            a.onItemEnter(t),
                                                t.defaultPrevented ||
                                                    e.disabled ||
                                                    r.open ||
                                                    l.current ||
                                                    (a.onPointerGraceIntentChange(null),
                                                    (l.current = window.setTimeout(() => {
                                                        r.onOpenChange(!0), p();
                                                    }, 100)));
                                        })
                                    ),
                                    onPointerLeave: (0, f.M)(
                                        e.onPointerLeave,
                                        tj((e) => {
                                            var t, n;
                                            p();
                                            let o = null === (t = r.content) || void 0 === t ? void 0 : t.getBoundingClientRect();
                                            if (o) {
                                                let t = null === (n = r.content) || void 0 === n ? void 0 : n.dataset.side,
                                                    l = "right" === t,
                                                    s = o[l ? "left" : "right"],
                                                    c = o[l ? "right" : "left"];
                                                a.onPointerGraceIntentChange({
                                                    area: [
                                                        { x: e.clientX + (l ? -5 : 5), y: e.clientY },
                                                        { x: s, y: o.top },
                                                        { x: c, y: o.top },
                                                        { x: c, y: o.bottom },
                                                        { x: s, y: o.bottom },
                                                    ],
                                                    side: t,
                                                }),
                                                    window.clearTimeout(i.current),
                                                    (i.current = window.setTimeout(() => a.onPointerGraceIntentChange(null), 300));
                                            } else {
                                                if ((a.onTriggerLeave(e), e.defaultPrevented)) return;
                                                a.onPointerGraceIntentChange(null);
                                            }
                                        })
                                    ),
                                    onKeyDown: (0, f.M)(e.onKeyDown, (t) => {
                                        let o = "" !== a.searchRef.current;
                                        if (!e.disabled && (!o || " " !== t.key) && eK[n.dir].includes(t.key)) {
                                            var l;
                                            r.onOpenChange(!0), null === (l = r.content) || void 0 === l || l.focus(), t.preventDefault();
                                        }
                                    }),
                                })
                            )
                        )
                    );
                }),
                tN = (0, u.forwardRef)((e, t) => {
                    let r = e3(e9, e.__scopeMenu),
                        { forceMount: n = r.forceMount, ...o } = e,
                        a = e1(e9, e.__scopeMenu),
                        l = e2(e9, e.__scopeMenu),
                        i = tE("MenuSubContent", e.__scopeMenu),
                        s = (0, u.useRef)(null),
                        c = (0, g.e)(t, s);
                    return (0, u.createElement)(
                        eU.Provider,
                        { scope: e.__scopeMenu },
                        (0, u.createElement)(
                            I.z,
                            { present: n || a.open },
                            (0, u.createElement)(
                                eU.Slot,
                                { scope: e.__scopeMenu },
                                (0, u.createElement)(
                                    to,
                                    (0, d.Z)({ id: i.contentId, "aria-labelledby": i.triggerId }, o, {
                                        ref: c,
                                        align: "start",
                                        side: "rtl" === l.dir ? "left" : "right",
                                        disableOutsidePointerEvents: !1,
                                        disableOutsideScroll: !1,
                                        trapFocus: !1,
                                        onOpenAutoFocus: (e) => {
                                            var t;
                                            l.isUsingKeyboardRef.current && (null === (t = s.current) || void 0 === t || t.focus()), e.preventDefault();
                                        },
                                        onCloseAutoFocus: (e) => e.preventDefault(),
                                        onFocusOutside: (0, f.M)(e.onFocusOutside, (e) => {
                                            e.target !== i.trigger && a.onOpenChange(!1);
                                        }),
                                        onEscapeKeyDown: (0, f.M)(e.onEscapeKeyDown, (e) => {
                                            l.onClose(), e.preventDefault();
                                        }),
                                        onKeyDown: (0, f.M)(e.onKeyDown, (e) => {
                                            let t = e.currentTarget.contains(e.target),
                                                r = eH[l.dir].includes(e.key);
                                            if (t && r) {
                                                var n;
                                                a.onOpenChange(!1), null === (n = i.trigger) || void 0 === n || n.focus(), e.preventDefault();
                                            }
                                        }),
                                    })
                                )
                            )
                        )
                    );
                });
            function tT(e) {
                return e ? "open" : "closed";
            }
            function tR(e) {
                return "indeterminate" === e;
            }
            function tM(e) {
                return tR(e) ? "indeterminate" : e ? "checked" : "unchecked";
            }
            function tj(e) {
                return (t) => ("mouse" === t.pointerType ? e(t) : void 0);
            }
            let tL = (e) => {
                    let { __scopeMenu: t, open: r = !1, children: n, dir: o, onOpenChange: a, modal: l = !0 } = e,
                        i = eJ(t),
                        [s, c] = (0, u.useState)(null),
                        d = (0, u.useRef)(!1),
                        f = (0, E.W)(a),
                        g = (0, v.gm)(o);
                    return (
                        (0, u.useEffect)(() => {
                            let e = () => {
                                    (d.current = !0), document.addEventListener("pointerdown", t, { capture: !0, once: !0 }), document.addEventListener("pointermove", t, { capture: !0, once: !0 });
                                },
                                t = () => (d.current = !1);
                            return (
                                document.addEventListener("keydown", e, { capture: !0 }),
                                () => {
                                    document.removeEventListener("keydown", e, { capture: !0 }), document.removeEventListener("pointerdown", t, { capture: !0 }), document.removeEventListener("pointermove", t, { capture: !0 });
                                }
                            );
                        }, []),
                        (0, u.createElement)(
                            D.fC,
                            i,
                            (0, u.createElement)(
                                e0,
                                { scope: t, open: r, onOpenChange: f, content: s, onContentChange: c },
                                (0, u.createElement)(e5, { scope: t, onClose: (0, u.useCallback)(() => f(!1), [f]), isUsingKeyboardRef: d, dir: g, modal: l }, n)
                            )
                        )
                    );
                },
                tP = (e) => {
                    let { __scopeMenu: t, forceMount: r, children: n, container: o } = e,
                        a = e1(e4, t);
                    return (0, u.createElement)(e7, { scope: t, forceMount: r }, (0, u.createElement)(I.z, { present: r || a.open }, (0, u.createElement)(A.h, { asChild: !0, container: o }, n)));
                },
                tO = (e) => {
                    let { __scopeMenu: t, children: r, open: n = !1, onOpenChange: o } = e,
                        a = e1(tw, t),
                        l = eJ(t),
                        [i, s] = (0, u.useState)(null),
                        [c, d] = (0, u.useState)(null),
                        f = (0, E.W)(o);
                    return (
                        (0, u.useEffect)(() => (!1 === a.open && f(!1), () => f(!1)), [a.open, f]),
                        (0, u.createElement)(
                            D.fC,
                            l,
                            (0, u.createElement)(
                                e0,
                                { scope: t, open: n, onOpenChange: f, content: c, onContentChange: d },
                                (0, u.createElement)(tk, { scope: t, contentId: (0, O.M)(), triggerId: (0, O.M)(), trigger: i, onTriggerChange: s }, r)
                            )
                        )
                    );
                },
                tD = "DropdownMenu",
                [tA, tI] = (0, p.b)(tD, [eq]),
                t_ = eq(),
                [tz, tF] = tA(tD),
                tW = (0, u.forwardRef)((e, t) => {
                    let { __scopeDropdownMenu: r, disabled: n = !1, ...o } = e,
                        a = tF("DropdownMenuTrigger", r),
                        l = t_(r);
                    return (0, u.createElement)(
                        e6,
                        (0, d.Z)({ asChild: !0 }, l),
                        (0, u.createElement)(
                            m.WV.button,
                            (0, d.Z)(
                                {
                                    type: "button",
                                    id: a.triggerId,
                                    "aria-haspopup": "menu",
                                    "aria-expanded": a.open,
                                    "aria-controls": a.open ? a.contentId : void 0,
                                    "data-state": a.open ? "open" : "closed",
                                    "data-disabled": n ? "" : void 0,
                                    disabled: n,
                                },
                                o,
                                {
                                    ref: (0, g.F)(t, a.triggerRef),
                                    onPointerDown: (0, f.M)(e.onPointerDown, (e) => {
                                        n || 0 !== e.button || !1 !== e.ctrlKey || (a.onOpenToggle(), a.open || e.preventDefault());
                                    }),
                                    onKeyDown: (0, f.M)(e.onKeyDown, (e) => {
                                        !n && (["Enter", " "].includes(e.key) && a.onOpenToggle(), "ArrowDown" === e.key && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(e.key) && e.preventDefault());
                                    }),
                                }
                            )
                        )
                    );
                }),
                tB = (0, u.forwardRef)((e, t) => {
                    let { __scopeDropdownMenu: r, ...n } = e,
                        o = tF("DropdownMenuContent", r),
                        a = t_(r),
                        l = (0, u.useRef)(!1);
                    return (0, u.createElement)(
                        tt,
                        (0, d.Z)({ id: o.contentId, "aria-labelledby": o.triggerId }, a, n, {
                            ref: t,
                            onCloseAutoFocus: (0, f.M)(e.onCloseAutoFocus, (e) => {
                                var t;
                                l.current || null === (t = o.triggerRef.current) || void 0 === t || t.focus(), (l.current = !1), e.preventDefault();
                            }),
                            onInteractOutside: (0, f.M)(e.onInteractOutside, (e) => {
                                let t = e.detail.originalEvent,
                                    r = 0 === t.button && !0 === t.ctrlKey,
                                    n = 2 === t.button || r;
                                (!o.modal || n) && (l.current = !0);
                            }),
                            style: {
                                ...e.style,
                                "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                                "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                                "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                                "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                                "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)",
                            },
                        })
                    );
                }),
                tZ = (0, u.forwardRef)((e, t) => {
                    let { __scopeDropdownMenu: r, ...n } = e,
                        o = t_(r);
                    return (0, u.createElement)(ta, (0, d.Z)({}, o, n, { ref: t }));
                }),
                tV = (0, u.forwardRef)((e, t) => {
                    let { __scopeDropdownMenu: r, ...n } = e,
                        o = t_(r);
                    return (0, u.createElement)(tl, (0, d.Z)({}, o, n, { ref: t }));
                }),
                tK = (0, u.forwardRef)((e, t) => {
                    let { __scopeDropdownMenu: r, ...n } = e,
                        o = t_(r);
                    return (0, u.createElement)(tc, (0, d.Z)({}, o, n, { ref: t }));
                }),
                tH = (0, u.forwardRef)((e, t) => {
                    let { __scopeDropdownMenu: r, ...n } = e,
                        o = t_(r);
                    return (0, u.createElement)(tu, (0, d.Z)({}, o, n, { ref: t }));
                }),
                t$ = (0, u.forwardRef)((e, t) => {
                    let { __scopeDropdownMenu: r, ...n } = e,
                        o = t_(r);
                    return (0, u.createElement)(tp, (0, d.Z)({}, o, n, { ref: t }));
                }),
                tU = (0, u.forwardRef)((e, t) => {
                    let { __scopeDropdownMenu: r, ...n } = e,
                        o = t_(r);
                    return (0, u.createElement)(tb, (0, d.Z)({}, o, n, { ref: t }));
                }),
                tY = (0, u.forwardRef)((e, t) => {
                    let { __scopeDropdownMenu: r, ...n } = e,
                        o = t_(r);
                    return (0, u.createElement)(tv, (0, d.Z)({}, o, n, { ref: t }));
                }),
                tG = (0, u.forwardRef)((e, t) => {
                    let { __scopeDropdownMenu: r, ...n } = e,
                        o = t_(r);
                    return (0, u.createElement)(tx, (0, d.Z)({}, o, n, { ref: t }));
                }),
                tX = (0, u.forwardRef)((e, t) => {
                    let { __scopeDropdownMenu: r, ...n } = e,
                        o = t_(r);
                    return (0, u.createElement)(tS, (0, d.Z)({}, o, n, { ref: t }));
                }),
                tq = (0, u.forwardRef)((e, t) => {
                    let { __scopeDropdownMenu: r, ...n } = e,
                        o = t_(r);
                    return (0, u.createElement)(
                        tN,
                        (0, d.Z)({}, o, n, {
                            ref: t,
                            style: {
                                ...e.style,
                                "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                                "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                                "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                                "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                                "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)",
                            },
                        })
                    );
                }),
                tJ = (e) => {
                    let { __scopeDropdownMenu: t, children: r, dir: n, open: o, defaultOpen: a, onOpenChange: l, modal: i = !0 } = e,
                        s = t_(t),
                        c = (0, u.useRef)(null),
                        [f = !1, g] = (0, b.T)({ prop: o, defaultProp: a, onChange: l });
                    return (0, u.createElement)(
                        tz,
                        { scope: t, triggerId: (0, O.M)(), triggerRef: c, contentId: (0, O.M)(), open: f, onOpenChange: g, onOpenToggle: (0, u.useCallback)(() => g((e) => !e), [g]), modal: i },
                        (0, u.createElement)(tL, (0, d.Z)({}, s, { open: f, onOpenChange: g, dir: n, modal: i }), r)
                    );
                },
                tQ = tW,
                t0 = (e) => {
                    let { __scopeDropdownMenu: t, ...r } = e,
                        n = t_(t);
                    return (0, u.createElement)(tP, (0, d.Z)({}, n, r));
                },
                t1 = tB,
                t5 = tZ,
                t2 = tV,
                t6 = tK,
                t4 = tH,
                t7 = t$,
                t3 = tU,
                t9 = tY,
                t8 = tG,
                re = (e) => {
                    let { __scopeDropdownMenu: t, children: r, open: n, onOpenChange: o, defaultOpen: a } = e,
                        l = t_(t),
                        [i = !1, s] = (0, b.T)({ prop: n, defaultProp: a, onChange: o });
                    return (0, u.createElement)(tO, (0, d.Z)({}, l, { open: i, onOpenChange: s }), r);
                },
                rt = tX,
                rr = tq;
        },
        9142: function (e, t, r) {
            r.d(t, {
                M: function () {
                    return s;
                },
            });
            var n,
                o = r(5465),
                a = r(3866);
            let l = (n || (n = r.t(o, 2)))["useId".toString()] || (() => void 0),
                i = 0;
            function s(e) {
                let [t, r] = o.useState(l());
                return (
                    (0, a.b)(() => {
                        e || r((e) => (null != e ? e : String(i++)));
                    }, [e]),
                    e || (t ? `radix-${t}` : "")
                );
            }
        },
        5209: function (e, t, r) {
            r.d(t, {
                ee: function () {
                    return j;
                },
                Eh: function () {
                    return P;
                },
                VY: function () {
                    return L;
                },
                fC: function () {
                    return M;
                },
                D7: function () {
                    return m;
                },
            });
            var n = r(9063),
                o = r(5465),
                a = r(4305),
                l = r(1812),
                i = r(9074),
                s = r(6755);
            let c = (0, o.forwardRef)((e, t) => {
                let { children: r, width: a = 10, height: l = 5, ...i } = e;
                return (0, o.createElement)(s.WV.svg, (0, n.Z)({}, i, { ref: t, width: a, height: l, viewBox: "0 0 30 10", preserveAspectRatio: "none" }), e.asChild ? r : (0, o.createElement)("polygon", { points: "0,0 30,0 15,10" }));
            });
            var d = r(8267),
                u = r(6292),
                f = r(9751),
                g = r(3866);
            let p = "Popper",
                [b, m] = (0, u.b)(p),
                [h, y] = b(p),
                v = (0, o.forwardRef)((e, t) => {
                    let { __scopePopper: r, virtualRef: a, ...l } = e,
                        i = y("PopperAnchor", r),
                        c = (0, o.useRef)(null),
                        u = (0, d.e)(t, c);
                    return (
                        (0, o.useEffect)(() => {
                            i.onAnchorChange((null == a ? void 0 : a.current) || c.current);
                        }),
                        a ? null : (0, o.createElement)(s.WV.div, (0, n.Z)({}, l, { ref: u }))
                    );
                }),
                x = "PopperContent",
                [w, k] = b(x),
                E = (0, o.forwardRef)((e, t) => {
                    var r, c, u, p, b, m, h, v;
                    let {
                            __scopePopper: k,
                            side: E = "bottom",
                            sideOffset: C = 0,
                            align: S = "center",
                            alignOffset: M = 0,
                            arrowPadding: j = 0,
                            avoidCollisions: L = !0,
                            collisionBoundary: P = [],
                            collisionPadding: O = 0,
                            sticky: D = "partial",
                            hideWhenDetached: A = !1,
                            updatePositionStrategy: I = "optimized",
                            onPlaced: _,
                            ...z
                        } = e,
                        F = y(x, k),
                        [W, B] = (0, o.useState)(null),
                        Z = (0, d.e)(t, (e) => B(e)),
                        [V, K] = (0, o.useState)(null),
                        H = (function (e) {
                            let [t, r] = (0, o.useState)(void 0);
                            return (
                                (0, g.b)(() => {
                                    if (e) {
                                        r({ width: e.offsetWidth, height: e.offsetHeight });
                                        let t = new ResizeObserver((t) => {
                                            let n, o;
                                            if (!Array.isArray(t) || !t.length) return;
                                            let a = t[0];
                                            if ("borderBoxSize" in a) {
                                                let e = a.borderBoxSize,
                                                    t = Array.isArray(e) ? e[0] : e;
                                                (n = t.inlineSize), (o = t.blockSize);
                                            } else (n = e.offsetWidth), (o = e.offsetHeight);
                                            r({ width: n, height: o });
                                        });
                                        return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
                                    }
                                    r(void 0);
                                }, [e]),
                                t
                            );
                        })(V),
                        $ = null !== (r = null == H ? void 0 : H.width) && void 0 !== r ? r : 0,
                        U = null !== (c = null == H ? void 0 : H.height) && void 0 !== c ? c : 0,
                        Y = "number" == typeof O ? O : { top: 0, right: 0, bottom: 0, left: 0, ...O },
                        G = Array.isArray(P) ? P : [P],
                        X = G.length > 0,
                        q = { padding: Y, boundary: G.filter(N), altBoundary: X },
                        { refs: J, floatingStyles: Q, placement: ee, isPositioned: et, middlewareData: er } = (0, a.YF)({
                            strategy: "fixed",
                            placement: E + ("center" !== S ? "-" + S : ""),
                            whileElementsMounted: (...e) => (0, l.Me)(...e, { animationFrame: "always" === I }),
                            elements: { reference: F.anchor },
                            middleware: [
                                (0, i.cv)({ mainAxis: C + U, alignmentAxis: M }),
                                L && (0, l.uY)({ mainAxis: !0, crossAxis: !1, limiter: "partial" === D ? (0, l.dr)() : void 0, ...q }),
                                L && (0, l.RR)({ ...q }),
                                (0, l.dp)({
                                    ...q,
                                    apply: ({ elements: e, rects: t, availableWidth: r, availableHeight: n }) => {
                                        let { width: o, height: a } = t.reference,
                                            l = e.floating.style;
                                        l.setProperty("--radix-popper-available-width", `${r}px`),
                                            l.setProperty("--radix-popper-available-height", `${n}px`),
                                            l.setProperty("--radix-popper-anchor-width", `${o}px`),
                                            l.setProperty("--radix-popper-anchor-height", `${a}px`);
                                    },
                                }),
                                V && (0, a.x7)({ element: V, padding: j }),
                                T({ arrowWidth: $, arrowHeight: U }),
                                A && (0, l.Cp)({ strategy: "referenceHidden", ...q }),
                            ],
                        }),
                        [en, eo] = R(ee),
                        ea = (0, f.W)(_);
                    (0, g.b)(() => {
                        et && (null == ea || ea());
                    }, [et, ea]);
                    let el = null === (u = er.arrow) || void 0 === u ? void 0 : u.x,
                        ei = null === (p = er.arrow) || void 0 === p ? void 0 : p.y,
                        es = (null === (b = er.arrow) || void 0 === b ? void 0 : b.centerOffset) !== 0,
                        [ec, ed] = (0, o.useState)();
                    return (
                        (0, g.b)(() => {
                            W && ed(window.getComputedStyle(W).zIndex);
                        }, [W]),
                        (0, o.createElement)(
                            "div",
                            {
                                ref: J.setFloating,
                                "data-radix-popper-content-wrapper": "",
                                style: {
                                    ...Q,
                                    transform: et ? Q.transform : "translate(0, -200%)",
                                    minWidth: "max-content",
                                    zIndex: ec,
                                    "--radix-popper-transform-origin": [null === (m = er.transformOrigin) || void 0 === m ? void 0 : m.x, null === (h = er.transformOrigin) || void 0 === h ? void 0 : h.y].join(" "),
                                },
                                dir: e.dir,
                            },
                            (0, o.createElement)(
                                w,
                                { scope: k, placedSide: en, onArrowChange: K, arrowX: el, arrowY: ei, shouldHideArrow: es },
                                (0, o.createElement)(
                                    s.WV.div,
                                    (0, n.Z)({ "data-side": en, "data-align": eo }, z, { ref: Z, style: { ...z.style, animation: et ? void 0 : "none", opacity: null !== (v = er.hide) && void 0 !== v && v.referenceHidden ? 0 : void 0 } })
                                )
                            )
                        )
                    );
                }),
                C = { top: "bottom", right: "left", bottom: "top", left: "right" },
                S = (0, o.forwardRef)(function (e, t) {
                    let { __scopePopper: r, ...a } = e,
                        l = k("PopperArrow", r),
                        i = C[l.placedSide];
                    return (0,
                    o.createElement)("span", { ref: l.onArrowChange, style: { position: "absolute", left: l.arrowX, top: l.arrowY, [i]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[l.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[l.placedSide], visibility: l.shouldHideArrow ? "hidden" : void 0 } }, (0, o.createElement)(c, (0, n.Z)({}, a, { ref: t, style: { ...a.style, display: "block" } })));
                });
            function N(e) {
                return null !== e;
            }
            let T = (e) => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    var r, n, o, a, l;
                    let { placement: i, rects: s, middlewareData: c } = t,
                        d = (null === (r = c.arrow) || void 0 === r ? void 0 : r.centerOffset) !== 0,
                        u = d ? 0 : e.arrowWidth,
                        f = d ? 0 : e.arrowHeight,
                        [g, p] = R(i),
                        b = { start: "0%", center: "50%", end: "100%" }[p],
                        m = (null !== (n = null === (o = c.arrow) || void 0 === o ? void 0 : o.x) && void 0 !== n ? n : 0) + u / 2,
                        h = (null !== (a = null === (l = c.arrow) || void 0 === l ? void 0 : l.y) && void 0 !== a ? a : 0) + f / 2,
                        y = "",
                        v = "";
                    return (
                        "bottom" === g
                            ? ((y = d ? b : `${m}px`), (v = `${-f}px`))
                            : "top" === g
                            ? ((y = d ? b : `${m}px`), (v = `${s.floating.height + f}px`))
                            : "right" === g
                            ? ((y = `${-f}px`), (v = d ? b : `${h}px`))
                            : "left" === g && ((y = `${s.floating.width + f}px`), (v = d ? b : `${h}px`)),
                        { data: { x: y, y: v } }
                    );
                },
            });
            function R(e) {
                let [t, r = "center"] = e.split("-");
                return [t, r];
            }
            let M = (e) => {
                    let { __scopePopper: t, children: r } = e,
                        [n, a] = (0, o.useState)(null);
                    return (0, o.createElement)(h, { scope: t, anchor: n, onAnchorChange: a }, r);
                },
                j = v,
                L = E,
                P = S;
        },
        5922: function (e, t, r) {
            r.d(t, {
                h: function () {
                    return i;
                },
            });
            var n = r(9063),
                o = r(5465),
                a = r(2573),
                l = r(6755);
            let i = (0, o.forwardRef)((e, t) => {
                var r;
                let { container: i = null == globalThis ? void 0 : null === (r = globalThis.document) || void 0 === r ? void 0 : r.body, ...s } = e;
                return i ? a.createPortal((0, o.createElement)(l.WV.div, (0, n.Z)({}, s, { ref: t })), i) : null;
            });
        },
        4397: function (e, t, r) {
            r.d(t, {
                z: function () {
                    return i;
                },
            });
            var n = r(5465),
                o = r(2573),
                a = r(8267),
                l = r(3866);
            let i = (e) => {
                let { present: t, children: r } = e,
                    i = (function (e) {
                        var t, r;
                        let [a, i] = (0, n.useState)(),
                            c = (0, n.useRef)({}),
                            d = (0, n.useRef)(e),
                            u = (0, n.useRef)("none"),
                            [f, g] =
                                ((t = e ? "mounted" : "unmounted"),
                                (r = { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } }),
                                (0, n.useReducer)((e, t) => {
                                    let n = r[e][t];
                                    return null != n ? n : e;
                                }, t));
                        return (
                            (0, n.useEffect)(() => {
                                let e = s(c.current);
                                u.current = "mounted" === f ? e : "none";
                            }, [f]),
                            (0, l.b)(() => {
                                let t = c.current,
                                    r = d.current;
                                if (r !== e) {
                                    let n = u.current,
                                        o = s(t);
                                    e ? g("MOUNT") : "none" === o || (null == t ? void 0 : t.display) === "none" ? g("UNMOUNT") : r && n !== o ? g("ANIMATION_OUT") : g("UNMOUNT"), (d.current = e);
                                }
                            }, [e, g]),
                            (0, l.b)(() => {
                                if (a) {
                                    let e = (e) => {
                                            let t = s(c.current).includes(e.animationName);
                                            e.target === a && t && (0, o.flushSync)(() => g("ANIMATION_END"));
                                        },
                                        t = (e) => {
                                            e.target === a && (u.current = s(c.current));
                                        };
                                    return (
                                        a.addEventListener("animationstart", t),
                                        a.addEventListener("animationcancel", e),
                                        a.addEventListener("animationend", e),
                                        () => {
                                            a.removeEventListener("animationstart", t), a.removeEventListener("animationcancel", e), a.removeEventListener("animationend", e);
                                        }
                                    );
                                }
                                g("ANIMATION_END");
                            }, [a, g]),
                            {
                                isPresent: ["mounted", "unmountSuspended"].includes(f),
                                ref: (0, n.useCallback)((e) => {
                                    e && (c.current = getComputedStyle(e)), i(e);
                                }, []),
                            }
                        );
                    })(t),
                    c = "function" == typeof r ? r({ present: i.isPresent }) : n.Children.only(r),
                    d = (0, a.e)(i.ref, c.ref);
                return "function" == typeof r || i.isPresent ? (0, n.cloneElement)(c, { ref: d }) : null;
            };
            function s(e) {
                return (null == e ? void 0 : e.animationName) || "none";
            }
            i.displayName = "Presence";
        },
        6755: function (e, t, r) {
            r.d(t, {
                WV: function () {
                    return i;
                },
                jH: function () {
                    return s;
                },
            });
            var n = r(9063),
                o = r(5465),
                a = r(2573),
                l = r(4202);
            let i = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                let r = (0, o.forwardRef)((e, r) => {
                    let { asChild: a, ...i } = e,
                        s = a ? l.g7 : t;
                    return (
                        (0, o.useEffect)(() => {
                            window[Symbol.for("radix-ui")] = !0;
                        }, []),
                        (0, o.createElement)(s, (0, n.Z)({}, i, { ref: r }))
                    );
                });
                return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
            }, {});
            function s(e, t) {
                e && (0, a.flushSync)(() => e.dispatchEvent(t));
            }
        },
        6623: function (e, t, r) {
            r.d(t, {
                Ns: function () {
                    return U;
                },
                fC: function () {
                    return H;
                },
                gb: function () {
                    return w;
                },
                q4: function () {
                    return P;
                },
                l_: function () {
                    return $;
                },
            });
            var n = r(9063),
                o = r(5465),
                a = r(6755),
                l = r(4397),
                i = r(6292),
                s = r(8267),
                c = r(9751),
                d = r(8541),
                u = r(3866),
                f = r(7529);
            let g = "ScrollArea",
                [p, b] = (0, i.b)(g),
                [m, h] = p(g),
                y = (0, o.forwardRef)((e, t) => {
                    let { __scopeScrollArea: r, type: l = "hover", dir: i, scrollHideDelay: c = 600, ...u } = e,
                        [f, g] = (0, o.useState)(null),
                        [p, b] = (0, o.useState)(null),
                        [h, y] = (0, o.useState)(null),
                        [v, x] = (0, o.useState)(null),
                        [w, k] = (0, o.useState)(null),
                        [E, C] = (0, o.useState)(0),
                        [S, N] = (0, o.useState)(0),
                        [T, R] = (0, o.useState)(!1),
                        [M, j] = (0, o.useState)(!1),
                        L = (0, s.e)(t, (e) => g(e)),
                        P = (0, d.gm)(i);
                    return (0, o.createElement)(
                        m,
                        {
                            scope: r,
                            type: l,
                            dir: P,
                            scrollHideDelay: c,
                            scrollArea: f,
                            viewport: p,
                            onViewportChange: b,
                            content: h,
                            onContentChange: y,
                            scrollbarX: v,
                            onScrollbarXChange: x,
                            scrollbarXEnabled: T,
                            onScrollbarXEnabledChange: R,
                            scrollbarY: w,
                            onScrollbarYChange: k,
                            scrollbarYEnabled: M,
                            onScrollbarYEnabledChange: j,
                            onCornerWidthChange: C,
                            onCornerHeightChange: N,
                        },
                        (0, o.createElement)(a.WV.div, (0, n.Z)({ dir: P }, u, { ref: L, style: { position: "relative", "--radix-scroll-area-corner-width": E + "px", "--radix-scroll-area-corner-height": S + "px", ...e.style } }))
                    );
                }),
                v = (0, o.forwardRef)((e, t) => {
                    let { __scopeScrollArea: r, children: l, ...i } = e,
                        c = h("ScrollAreaViewport", r),
                        d = (0, o.useRef)(null),
                        u = (0, s.e)(t, d, c.onViewportChange);
                    return (0, o.createElement)(
                        o.Fragment,
                        null,
                        (0, o.createElement)("style", {
                            dangerouslySetInnerHTML: {
                                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}",
                            },
                        }),
                        (0, o.createElement)(
                            a.WV.div,
                            (0, n.Z)({ "data-radix-scroll-area-viewport": "" }, i, { ref: u, style: { overflowX: c.scrollbarXEnabled ? "scroll" : "hidden", overflowY: c.scrollbarYEnabled ? "scroll" : "hidden", ...e.style } }),
                            (0, o.createElement)("div", { ref: c.onContentChange, style: { minWidth: "100%", display: "table" } }, l)
                        )
                    );
                }),
                x = "ScrollAreaScrollbar",
                w = (0, o.forwardRef)((e, t) => {
                    let { forceMount: r, ...a } = e,
                        l = h(x, e.__scopeScrollArea),
                        { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: s } = l,
                        c = "horizontal" === e.orientation;
                    return (
                        (0, o.useEffect)(
                            () => (
                                c ? i(!0) : s(!0),
                                () => {
                                    c ? i(!1) : s(!1);
                                }
                            ),
                            [c, i, s]
                        ),
                        "hover" === l.type
                            ? (0, o.createElement)(k, (0, n.Z)({}, a, { ref: t, forceMount: r }))
                            : "scroll" === l.type
                            ? (0, o.createElement)(E, (0, n.Z)({}, a, { ref: t, forceMount: r }))
                            : "auto" === l.type
                            ? (0, o.createElement)(C, (0, n.Z)({}, a, { ref: t, forceMount: r }))
                            : "always" === l.type
                            ? (0, o.createElement)(S, (0, n.Z)({}, a, { ref: t }))
                            : null
                    );
                }),
                k = (0, o.forwardRef)((e, t) => {
                    let { forceMount: r, ...a } = e,
                        i = h(x, e.__scopeScrollArea),
                        [s, c] = (0, o.useState)(!1);
                    return (
                        (0, o.useEffect)(() => {
                            let e = i.scrollArea,
                                t = 0;
                            if (e) {
                                let r = () => {
                                        window.clearTimeout(t), c(!0);
                                    },
                                    n = () => {
                                        t = window.setTimeout(() => c(!1), i.scrollHideDelay);
                                    };
                                return (
                                    e.addEventListener("pointerenter", r),
                                    e.addEventListener("pointerleave", n),
                                    () => {
                                        window.clearTimeout(t), e.removeEventListener("pointerenter", r), e.removeEventListener("pointerleave", n);
                                    }
                                );
                            }
                        }, [i.scrollArea, i.scrollHideDelay]),
                        (0, o.createElement)(l.z, { present: r || s }, (0, o.createElement)(C, (0, n.Z)({ "data-state": s ? "visible" : "hidden" }, a, { ref: t })))
                    );
                }),
                E = (0, o.forwardRef)((e, t) => {
                    var r;
                    let { forceMount: a, ...i } = e,
                        s = h(x, e.__scopeScrollArea),
                        c = "horizontal" === e.orientation,
                        d = V(() => g("SCROLL_END"), 100),
                        [u, g] =
                            ((r = {
                                hidden: { SCROLL: "scrolling" },
                                scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" },
                                interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" },
                                idle: { HIDE: "hidden", SCROLL: "scrolling", POINTER_ENTER: "interacting" },
                            }),
                            (0, o.useReducer)((e, t) => {
                                let n = r[e][t];
                                return null != n ? n : e;
                            }, "hidden"));
                    return (
                        (0, o.useEffect)(() => {
                            if ("idle" === u) {
                                let e = window.setTimeout(() => g("HIDE"), s.scrollHideDelay);
                                return () => window.clearTimeout(e);
                            }
                        }, [u, s.scrollHideDelay, g]),
                        (0, o.useEffect)(() => {
                            let e = s.viewport,
                                t = c ? "scrollLeft" : "scrollTop";
                            if (e) {
                                let r = e[t],
                                    n = () => {
                                        let n = e[t];
                                        r !== n && (g("SCROLL"), d()), (r = n);
                                    };
                                return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n);
                            }
                        }, [s.viewport, c, g, d]),
                        (0, o.createElement)(
                            l.z,
                            { present: a || "hidden" !== u },
                            (0, o.createElement)(
                                S,
                                (0, n.Z)({ "data-state": "hidden" === u ? "hidden" : "visible" }, i, {
                                    ref: t,
                                    onPointerEnter: (0, f.M)(e.onPointerEnter, () => g("POINTER_ENTER")),
                                    onPointerLeave: (0, f.M)(e.onPointerLeave, () => g("POINTER_LEAVE")),
                                })
                            )
                        )
                    );
                }),
                C = (0, o.forwardRef)((e, t) => {
                    let r = h(x, e.__scopeScrollArea),
                        { forceMount: a, ...i } = e,
                        [s, c] = (0, o.useState)(!1),
                        d = "horizontal" === e.orientation,
                        u = V(() => {
                            if (r.viewport) {
                                let e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                                    t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                                c(d ? e : t);
                            }
                        }, 10);
                    return K(r.viewport, u), K(r.content, u), (0, o.createElement)(l.z, { present: a || s }, (0, o.createElement)(S, (0, n.Z)({ "data-state": s ? "visible" : "hidden" }, i, { ref: t })));
                }),
                S = (0, o.forwardRef)((e, t) => {
                    let { orientation: r = "vertical", ...a } = e,
                        l = h(x, e.__scopeScrollArea),
                        i = (0, o.useRef)(null),
                        s = (0, o.useRef)(0),
                        [c, d] = (0, o.useState)({ content: 0, viewport: 0, scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 } }),
                        u = z(c.viewport, c.content),
                        f = { ...a, sizes: c, onSizesChange: d, hasThumb: !!(u > 0 && u < 1), onThumbChange: (e) => (i.current = e), onThumbPointerUp: () => (s.current = 0), onThumbPointerDown: (e) => (s.current = e) };
                    function g(e, t) {
                        return (function (e, t, r, n = "ltr") {
                            let o = F(r),
                                a = t || o / 2,
                                l = r.scrollbar.paddingStart + a,
                                i = r.scrollbar.size - r.scrollbar.paddingEnd - (o - a),
                                s = r.content - r.viewport;
                            return B([l, i], "ltr" === n ? [0, s] : [-1 * s, 0])(e);
                        })(e, s.current, c, t);
                    }
                    return "horizontal" === r
                        ? (0, o.createElement)(
                              N,
                              (0, n.Z)({}, f, {
                                  ref: t,
                                  onThumbPositionChange: () => {
                                      if (l.viewport && i.current) {
                                          let e = W(l.viewport.scrollLeft, c, l.dir);
                                          i.current.style.transform = `translate3d(${e}px, 0, 0)`;
                                      }
                                  },
                                  onWheelScroll: (e) => {
                                      l.viewport && (l.viewport.scrollLeft = e);
                                  },
                                  onDragScroll: (e) => {
                                      l.viewport && (l.viewport.scrollLeft = g(e, l.dir));
                                  },
                              })
                          )
                        : "vertical" === r
                        ? (0, o.createElement)(
                              T,
                              (0, n.Z)({}, f, {
                                  ref: t,
                                  onThumbPositionChange: () => {
                                      if (l.viewport && i.current) {
                                          let e = W(l.viewport.scrollTop, c);
                                          i.current.style.transform = `translate3d(0, ${e}px, 0)`;
                                      }
                                  },
                                  onWheelScroll: (e) => {
                                      l.viewport && (l.viewport.scrollTop = e);
                                  },
                                  onDragScroll: (e) => {
                                      l.viewport && (l.viewport.scrollTop = g(e));
                                  },
                              })
                          )
                        : null;
                }),
                N = (0, o.forwardRef)((e, t) => {
                    let { sizes: r, onSizesChange: a, ...l } = e,
                        i = h(x, e.__scopeScrollArea),
                        [c, d] = (0, o.useState)(),
                        u = (0, o.useRef)(null),
                        f = (0, s.e)(t, u, i.onScrollbarXChange);
                    return (
                        (0, o.useEffect)(() => {
                            u.current && d(getComputedStyle(u.current));
                        }, [u]),
                        (0, o.createElement)(
                            j,
                            (0, n.Z)({ "data-orientation": "horizontal" }, l, {
                                ref: f,
                                sizes: r,
                                style: {
                                    bottom: 0,
                                    left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                                    right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                                    "--radix-scroll-area-thumb-width": F(r) + "px",
                                    ...e.style,
                                },
                                onThumbPointerDown: (t) => e.onThumbPointerDown(t.x),
                                onDragScroll: (t) => e.onDragScroll(t.x),
                                onWheelScroll: (t, r) => {
                                    if (i.viewport) {
                                        let n = i.viewport.scrollLeft + t.deltaX;
                                        e.onWheelScroll(n), n > 0 && n < r && t.preventDefault();
                                    }
                                },
                                onResize: () => {
                                    u.current &&
                                        i.viewport &&
                                        c &&
                                        a({ content: i.viewport.scrollWidth, viewport: i.viewport.offsetWidth, scrollbar: { size: u.current.clientWidth, paddingStart: _(c.paddingLeft), paddingEnd: _(c.paddingRight) } });
                                },
                            })
                        )
                    );
                }),
                T = (0, o.forwardRef)((e, t) => {
                    let { sizes: r, onSizesChange: a, ...l } = e,
                        i = h(x, e.__scopeScrollArea),
                        [c, d] = (0, o.useState)(),
                        u = (0, o.useRef)(null),
                        f = (0, s.e)(t, u, i.onScrollbarYChange);
                    return (
                        (0, o.useEffect)(() => {
                            u.current && d(getComputedStyle(u.current));
                        }, [u]),
                        (0, o.createElement)(
                            j,
                            (0, n.Z)({ "data-orientation": "vertical" }, l, {
                                ref: f,
                                sizes: r,
                                style: { top: 0, right: "ltr" === i.dir ? 0 : void 0, left: "rtl" === i.dir ? 0 : void 0, bottom: "var(--radix-scroll-area-corner-height)", "--radix-scroll-area-thumb-height": F(r) + "px", ...e.style },
                                onThumbPointerDown: (t) => e.onThumbPointerDown(t.y),
                                onDragScroll: (t) => e.onDragScroll(t.y),
                                onWheelScroll: (t, r) => {
                                    if (i.viewport) {
                                        let n = i.viewport.scrollTop + t.deltaY;
                                        e.onWheelScroll(n), n > 0 && n < r && t.preventDefault();
                                    }
                                },
                                onResize: () => {
                                    u.current &&
                                        i.viewport &&
                                        c &&
                                        a({ content: i.viewport.scrollHeight, viewport: i.viewport.offsetHeight, scrollbar: { size: u.current.clientHeight, paddingStart: _(c.paddingTop), paddingEnd: _(c.paddingBottom) } });
                                },
                            })
                        )
                    );
                }),
                [R, M] = p(x),
                j = (0, o.forwardRef)((e, t) => {
                    let { __scopeScrollArea: r, sizes: l, hasThumb: i, onThumbChange: d, onThumbPointerUp: u, onThumbPointerDown: g, onThumbPositionChange: p, onDragScroll: b, onWheelScroll: m, onResize: y, ...v } = e,
                        w = h(x, r),
                        [k, E] = (0, o.useState)(null),
                        C = (0, s.e)(t, (e) => E(e)),
                        S = (0, o.useRef)(null),
                        N = (0, o.useRef)(""),
                        T = w.viewport,
                        M = l.content - l.viewport,
                        j = (0, c.W)(m),
                        L = (0, c.W)(p),
                        P = V(y, 10);
                    function O(e) {
                        S.current && b({ x: e.clientX - S.current.left, y: e.clientY - S.current.top });
                    }
                    return (
                        (0, o.useEffect)(() => {
                            let e = (e) => {
                                let t = e.target;
                                (null == k ? void 0 : k.contains(t)) && j(e, M);
                            };
                            return document.addEventListener("wheel", e, { passive: !1 }), () => document.removeEventListener("wheel", e, { passive: !1 });
                        }, [T, k, M, j]),
                        (0, o.useEffect)(L, [l, L]),
                        K(k, P),
                        K(w.content, P),
                        (0, o.createElement)(
                            R,
                            { scope: r, scrollbar: k, hasThumb: i, onThumbChange: (0, c.W)(d), onThumbPointerUp: (0, c.W)(u), onThumbPositionChange: L, onThumbPointerDown: (0, c.W)(g) },
                            (0, o.createElement)(
                                a.WV.div,
                                (0, n.Z)({}, v, {
                                    ref: C,
                                    style: { position: "absolute", ...v.style },
                                    onPointerDown: (0, f.M)(e.onPointerDown, (e) => {
                                        0 === e.button &&
                                            (e.target.setPointerCapture(e.pointerId),
                                            (S.current = k.getBoundingClientRect()),
                                            (N.current = document.body.style.webkitUserSelect),
                                            (document.body.style.webkitUserSelect = "none"),
                                            w.viewport && (w.viewport.style.scrollBehavior = "auto"),
                                            O(e));
                                    }),
                                    onPointerMove: (0, f.M)(e.onPointerMove, O),
                                    onPointerUp: (0, f.M)(e.onPointerUp, (e) => {
                                        let t = e.target;
                                        t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), (document.body.style.webkitUserSelect = N.current), w.viewport && (w.viewport.style.scrollBehavior = ""), (S.current = null);
                                    }),
                                })
                            )
                        )
                    );
                }),
                L = "ScrollAreaThumb",
                P = (0, o.forwardRef)((e, t) => {
                    let { forceMount: r, ...a } = e,
                        i = M(L, e.__scopeScrollArea);
                    return (0, o.createElement)(l.z, { present: r || i.hasThumb }, (0, o.createElement)(O, (0, n.Z)({ ref: t }, a)));
                }),
                O = (0, o.forwardRef)((e, t) => {
                    let { __scopeScrollArea: r, style: l, ...i } = e,
                        c = h(L, r),
                        d = M(L, r),
                        { onThumbPositionChange: u } = d,
                        g = (0, s.e)(t, (e) => d.onThumbChange(e)),
                        p = (0, o.useRef)(),
                        b = V(() => {
                            p.current && (p.current(), (p.current = void 0));
                        }, 100);
                    return (
                        (0, o.useEffect)(() => {
                            let e = c.viewport;
                            if (e) {
                                let t = () => {
                                    if ((b(), !p.current)) {
                                        let t = Z(e, u);
                                        (p.current = t), u();
                                    }
                                };
                                return u(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t);
                            }
                        }, [c.viewport, b, u]),
                        (0, o.createElement)(
                            a.WV.div,
                            (0, n.Z)({ "data-state": d.hasThumb ? "visible" : "hidden" }, i, {
                                ref: g,
                                style: { width: "var(--radix-scroll-area-thumb-width)", height: "var(--radix-scroll-area-thumb-height)", ...l },
                                onPointerDownCapture: (0, f.M)(e.onPointerDownCapture, (e) => {
                                    let t = e.target.getBoundingClientRect(),
                                        r = e.clientX - t.left,
                                        n = e.clientY - t.top;
                                    d.onThumbPointerDown({ x: r, y: n });
                                }),
                                onPointerUp: (0, f.M)(e.onPointerUp, d.onThumbPointerUp),
                            })
                        )
                    );
                }),
                D = "ScrollAreaCorner",
                A = (0, o.forwardRef)((e, t) => {
                    let r = h(D, e.__scopeScrollArea),
                        a = !!(r.scrollbarX && r.scrollbarY);
                    return "scroll" !== r.type && a ? (0, o.createElement)(I, (0, n.Z)({}, e, { ref: t })) : null;
                }),
                I = (0, o.forwardRef)((e, t) => {
                    let { __scopeScrollArea: r, ...l } = e,
                        i = h(D, r),
                        [s, c] = (0, o.useState)(0),
                        [d, u] = (0, o.useState)(0),
                        f = !!(s && d);
                    return (
                        K(i.scrollbarX, () => {
                            var e;
                            let t = (null === (e = i.scrollbarX) || void 0 === e ? void 0 : e.offsetHeight) || 0;
                            i.onCornerHeightChange(t), u(t);
                        }),
                        K(i.scrollbarY, () => {
                            var e;
                            let t = (null === (e = i.scrollbarY) || void 0 === e ? void 0 : e.offsetWidth) || 0;
                            i.onCornerWidthChange(t), c(t);
                        }),
                        f
                            ? (0, o.createElement)(a.WV.div, (0, n.Z)({}, l, { ref: t, style: { width: s, height: d, position: "absolute", right: "ltr" === i.dir ? 0 : void 0, left: "rtl" === i.dir ? 0 : void 0, bottom: 0, ...e.style } }))
                            : null
                    );
                });
            function _(e) {
                return e ? parseInt(e, 10) : 0;
            }
            function z(e, t) {
                let r = e / t;
                return isNaN(r) ? 0 : r;
            }
            function F(e) {
                let t = z(e.viewport, e.content),
                    r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd;
                return Math.max((e.scrollbar.size - r) * t, 18);
            }
            function W(e, t, r = "ltr") {
                let n = F(t),
                    o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
                    a = t.scrollbar.size - o,
                    l = t.content - t.viewport,
                    i = (function (e, [t, r]) {
                        return Math.min(r, Math.max(t, e));
                    })(e, "ltr" === r ? [0, l] : [-1 * l, 0]);
                return B([0, l], [0, a - n])(i);
            }
            function B(e, t) {
                return (r) => {
                    if (e[0] === e[1] || t[0] === t[1]) return t[0];
                    let n = (t[1] - t[0]) / (e[1] - e[0]);
                    return t[0] + n * (r - e[0]);
                };
            }
            let Z = (e, t = () => {}) => {
                let r = { left: e.scrollLeft, top: e.scrollTop },
                    n = 0;
                return (
                    !(function o() {
                        let a = { left: e.scrollLeft, top: e.scrollTop },
                            l = r.left !== a.left,
                            i = r.top !== a.top;
                        (l || i) && t(), (r = a), (n = window.requestAnimationFrame(o));
                    })(),
                    () => window.cancelAnimationFrame(n)
                );
            };
            function V(e, t) {
                let r = (0, c.W)(e),
                    n = (0, o.useRef)(0);
                return (
                    (0, o.useEffect)(() => () => window.clearTimeout(n.current), []),
                    (0, o.useCallback)(() => {
                        window.clearTimeout(n.current), (n.current = window.setTimeout(r, t));
                    }, [r, t])
                );
            }
            function K(e, t) {
                let r = (0, c.W)(t);
                (0, u.b)(() => {
                    let t = 0;
                    if (e) {
                        let n = new ResizeObserver(() => {
                            cancelAnimationFrame(t), (t = window.requestAnimationFrame(r));
                        });
                        return (
                            n.observe(e),
                            () => {
                                window.cancelAnimationFrame(t), n.unobserve(e);
                            }
                        );
                    }
                }, [e, r]);
            }
            let H = y,
                $ = v,
                U = A;
        },
        4202: function (e, t, r) {
            r.d(t, {
                A4: function () {
                    return s;
                },
                g7: function () {
                    return l;
                },
            });
            var n = r(9063),
                o = r(5465),
                a = r(8267);
            let l = (0, o.forwardRef)((e, t) => {
                let { children: r, ...a } = e,
                    l = o.Children.toArray(r),
                    s = l.find(c);
                if (s) {
                    let e = s.props.children,
                        r = l.map((t) => (t !== s ? t : o.Children.count(e) > 1 ? o.Children.only(null) : (0, o.isValidElement)(e) ? e.props.children : null));
                    return (0, o.createElement)(i, (0, n.Z)({}, a, { ref: t }), (0, o.isValidElement)(e) ? (0, o.cloneElement)(e, void 0, r) : null);
                }
                return (0, o.createElement)(i, (0, n.Z)({}, a, { ref: t }), r);
            });
            l.displayName = "Slot";
            let i = (0, o.forwardRef)((e, t) => {
                let { children: r, ...n } = e;
                return (0, o.isValidElement)(r)
                    ? (0, o.cloneElement)(r, {
                          ...(function (e, t) {
                              let r = { ...t };
                              for (let n in t) {
                                  let o = e[n],
                                      a = t[n];
                                  /^on[A-Z]/.test(n)
                                      ? o && a
                                          ? (r[n] = (...e) => {
                                                a(...e), o(...e);
                                            })
                                          : o && (r[n] = o)
                                      : "style" === n
                                      ? (r[n] = { ...o, ...a })
                                      : "className" === n && (r[n] = [o, a].filter(Boolean).join(" "));
                              }
                              return { ...e, ...r };
                          })(n, r.props),
                          ref: t ? (0, a.F)(t, r.ref) : r.ref,
                      })
                    : o.Children.count(r) > 1
                    ? o.Children.only(null)
                    : null;
            });
            i.displayName = "SlotClone";
            let s = ({ children: e }) => (0, o.createElement)(o.Fragment, null, e);
            function c(e) {
                return (0, o.isValidElement)(e) && e.type === s;
            }
        },
        7099: function (e, t, r) {
            r.d(t, {
                VY: function () {
                    return z;
                },
                zt: function () {
                    return A;
                },
                fC: function () {
                    return I;
                },
                xz: function () {
                    return _;
                },
            });
            var n = r(9063),
                o = r(5465),
                a = r(7529),
                l = r(8267),
                i = r(6292),
                s = r(3879),
                c = r(9142),
                d = r(5209),
                u = (r(5922), r(4397)),
                f = r(6755),
                g = r(4202),
                p = r(3353);
            let b = (0, o.forwardRef)((e, t) =>
                    (0, o.createElement)(
                        f.WV.span,
                        (0, n.Z)({}, e, { ref: t, style: { position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal", ...e.style } })
                    )
                ),
                [m, h] = (0, i.b)("Tooltip", [d.D7]),
                y = (0, d.D7)(),
                v = "tooltip.open",
                [x, w] = m("TooltipProvider"),
                k = "Tooltip",
                [E, C] = m(k),
                S = "TooltipTrigger",
                N = (0, o.forwardRef)((e, t) => {
                    let { __scopeTooltip: r, ...i } = e,
                        s = C(S, r),
                        c = w(S, r),
                        u = y(r),
                        g = (0, o.useRef)(null),
                        p = (0, l.e)(t, g, s.onTriggerChange),
                        b = (0, o.useRef)(!1),
                        m = (0, o.useRef)(!1),
                        h = (0, o.useCallback)(() => (b.current = !1), []);
                    return (
                        (0, o.useEffect)(() => () => document.removeEventListener("pointerup", h), [h]),
                        (0, o.createElement)(
                            d.ee,
                            (0, n.Z)({ asChild: !0 }, u),
                            (0, o.createElement)(
                                f.WV.button,
                                (0, n.Z)({ "aria-describedby": s.open ? s.contentId : void 0, "data-state": s.stateAttribute }, i, {
                                    ref: p,
                                    onPointerMove: (0, a.M)(e.onPointerMove, (e) => {
                                        "touch" === e.pointerType || m.current || c.isPointerInTransitRef.current || (s.onTriggerEnter(), (m.current = !0));
                                    }),
                                    onPointerLeave: (0, a.M)(e.onPointerLeave, () => {
                                        s.onTriggerLeave(), (m.current = !1);
                                    }),
                                    onPointerDown: (0, a.M)(e.onPointerDown, () => {
                                        (b.current = !0), document.addEventListener("pointerup", h, { once: !0 });
                                    }),
                                    onFocus: (0, a.M)(e.onFocus, () => {
                                        b.current || s.onOpen();
                                    }),
                                    onBlur: (0, a.M)(e.onBlur, s.onClose),
                                    onClick: (0, a.M)(e.onClick, s.onClose),
                                })
                            )
                        )
                    );
                }),
                [T, R] = m("TooltipPortal", { forceMount: void 0 }),
                M = "TooltipContent",
                j = (0, o.forwardRef)((e, t) => {
                    let r = R(M, e.__scopeTooltip),
                        { forceMount: a = r.forceMount, side: l = "top", ...i } = e,
                        s = C(M, e.__scopeTooltip);
                    return (0, o.createElement)(u.z, { present: a || s.open }, s.disableHoverableContent ? (0, o.createElement)(D, (0, n.Z)({ side: l }, i, { ref: t })) : (0, o.createElement)(L, (0, n.Z)({ side: l }, i, { ref: t })));
                }),
                L = (0, o.forwardRef)((e, t) => {
                    let r = C(M, e.__scopeTooltip),
                        a = w(M, e.__scopeTooltip),
                        i = (0, o.useRef)(null),
                        s = (0, l.e)(t, i),
                        [c, d] = (0, o.useState)(null),
                        { trigger: u, onClose: f } = r,
                        g = i.current,
                        { onPointerInTransitChange: p } = a,
                        b = (0, o.useCallback)(() => {
                            d(null), p(!1);
                        }, [p]),
                        m = (0, o.useCallback)(
                            (e, t) => {
                                let r = e.currentTarget,
                                    n = { x: e.clientX, y: e.clientY },
                                    o = (function (e, t) {
                                        let r = Math.abs(t.top - e.y),
                                            n = Math.abs(t.bottom - e.y),
                                            o = Math.abs(t.right - e.x),
                                            a = Math.abs(t.left - e.x);
                                        switch (Math.min(r, n, o, a)) {
                                            case a:
                                                return "left";
                                            case o:
                                                return "right";
                                            case r:
                                                return "top";
                                            case n:
                                                return "bottom";
                                            default:
                                                throw Error("unreachable");
                                        }
                                    })(n, r.getBoundingClientRect());
                                d(
                                    (function (e) {
                                        let t = e.slice();
                                        return (
                                            t.sort((e, t) => (e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0)),
                                            (function (e) {
                                                if (e.length <= 1) return e.slice();
                                                let t = [];
                                                for (let r = 0; r < e.length; r++) {
                                                    let n = e[r];
                                                    for (; t.length >= 2; ) {
                                                        let e = t[t.length - 1],
                                                            r = t[t.length - 2];
                                                        if ((e.x - r.x) * (n.y - r.y) >= (e.y - r.y) * (n.x - r.x)) t.pop();
                                                        else break;
                                                    }
                                                    t.push(n);
                                                }
                                                t.pop();
                                                let r = [];
                                                for (let t = e.length - 1; t >= 0; t--) {
                                                    let n = e[t];
                                                    for (; r.length >= 2; ) {
                                                        let e = r[r.length - 1],
                                                            t = r[r.length - 2];
                                                        if ((e.x - t.x) * (n.y - t.y) >= (e.y - t.y) * (n.x - t.x)) r.pop();
                                                        else break;
                                                    }
                                                    r.push(n);
                                                }
                                                return (r.pop(), 1 === t.length && 1 === r.length && t[0].x === r[0].x && t[0].y === r[0].y) ? t : t.concat(r);
                                            })(t)
                                        );
                                    })([
                                        ...(function (e, t, r = 5) {
                                            let n = [];
                                            switch (t) {
                                                case "top":
                                                    n.push({ x: e.x - r, y: e.y + r }, { x: e.x + r, y: e.y + r });
                                                    break;
                                                case "bottom":
                                                    n.push({ x: e.x - r, y: e.y - r }, { x: e.x + r, y: e.y - r });
                                                    break;
                                                case "left":
                                                    n.push({ x: e.x + r, y: e.y - r }, { x: e.x + r, y: e.y + r });
                                                    break;
                                                case "right":
                                                    n.push({ x: e.x - r, y: e.y - r }, { x: e.x - r, y: e.y + r });
                                            }
                                            return n;
                                        })(n, o),
                                        ...(function (e) {
                                            let { top: t, right: r, bottom: n, left: o } = e;
                                            return [
                                                { x: o, y: t },
                                                { x: r, y: t },
                                                { x: r, y: n },
                                                { x: o, y: n },
                                            ];
                                        })(t.getBoundingClientRect()),
                                    ])
                                ),
                                    p(!0);
                            },
                            [p]
                        );
                    return (
                        (0, o.useEffect)(() => () => b(), [b]),
                        (0, o.useEffect)(() => {
                            if (u && g) {
                                let e = (e) => m(e, g),
                                    t = (e) => m(e, u);
                                return (
                                    u.addEventListener("pointerleave", e),
                                    g.addEventListener("pointerleave", t),
                                    () => {
                                        u.removeEventListener("pointerleave", e), g.removeEventListener("pointerleave", t);
                                    }
                                );
                            }
                        }, [u, g, m, b]),
                        (0, o.useEffect)(() => {
                            if (c) {
                                let e = (e) => {
                                    let t = e.target,
                                        r = { x: e.clientX, y: e.clientY },
                                        n = (null == u ? void 0 : u.contains(t)) || (null == g ? void 0 : g.contains(t)),
                                        o = !(function (e, t) {
                                            let { x: r, y: n } = e,
                                                o = !1;
                                            for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
                                                let l = t[e].x,
                                                    i = t[e].y,
                                                    s = t[a].x,
                                                    c = t[a].y;
                                                i > n != c > n && r < ((s - l) * (n - i)) / (c - i) + l && (o = !o);
                                            }
                                            return o;
                                        })(r, c);
                                    n ? b() : o && (b(), f());
                                };
                                return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e);
                            }
                        }, [u, g, c, f, b]),
                        (0, o.createElement)(D, (0, n.Z)({}, e, { ref: s }))
                    );
                }),
                [P, O] = m(k, { isInside: !1 }),
                D = (0, o.forwardRef)((e, t) => {
                    let { __scopeTooltip: r, children: a, "aria-label": l, onEscapeKeyDown: i, onPointerDownOutside: c, ...u } = e,
                        f = C(M, r),
                        p = y(r),
                        { onClose: m } = f;
                    return (
                        (0, o.useEffect)(() => (document.addEventListener(v, m), () => document.removeEventListener(v, m)), [m]),
                        (0, o.useEffect)(() => {
                            if (f.trigger) {
                                let e = (e) => {
                                    let t = e.target;
                                    null != t && t.contains(f.trigger) && m();
                                };
                                return window.addEventListener("scroll", e, { capture: !0 }), () => window.removeEventListener("scroll", e, { capture: !0 });
                            }
                        }, [f.trigger, m]),
                        (0, o.createElement)(
                            s.XB,
                            { asChild: !0, disableOutsidePointerEvents: !1, onEscapeKeyDown: i, onPointerDownOutside: c, onFocusOutside: (e) => e.preventDefault(), onDismiss: m },
                            (0, o.createElement)(
                                d.VY,
                                (0, n.Z)({ "data-state": f.stateAttribute }, p, u, {
                                    ref: t,
                                    style: {
                                        ...u.style,
                                        "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                                        "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                                        "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                                        "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                                        "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)",
                                    },
                                }),
                                (0, o.createElement)(g.A4, null, a),
                                (0, o.createElement)(P, { scope: r, isInside: !0 }, (0, o.createElement)(b, { id: f.contentId, role: "tooltip" }, l || a))
                            )
                        )
                    );
                }),
                A = (e) => {
                    let { __scopeTooltip: t, delayDuration: r = 700, skipDelayDuration: n = 300, disableHoverableContent: a = !1, children: l } = e,
                        [i, s] = (0, o.useState)(!0),
                        c = (0, o.useRef)(!1),
                        d = (0, o.useRef)(0);
                    return (
                        (0, o.useEffect)(() => {
                            let e = d.current;
                            return () => window.clearTimeout(e);
                        }, []),
                        (0, o.createElement)(
                            x,
                            {
                                scope: t,
                                isOpenDelayed: i,
                                delayDuration: r,
                                onOpen: (0, o.useCallback)(() => {
                                    window.clearTimeout(d.current), s(!1);
                                }, []),
                                onClose: (0, o.useCallback)(() => {
                                    window.clearTimeout(d.current), (d.current = window.setTimeout(() => s(!0), n));
                                }, [n]),
                                isPointerInTransitRef: c,
                                onPointerInTransitChange: (0, o.useCallback)((e) => {
                                    c.current = e;
                                }, []),
                                disableHoverableContent: a,
                            },
                            l
                        )
                    );
                },
                I = (e) => {
                    let { __scopeTooltip: t, children: r, open: n, defaultOpen: a = !1, onOpenChange: l, disableHoverableContent: i, delayDuration: s } = e,
                        u = w(k, e.__scopeTooltip),
                        f = y(t),
                        [g, b] = (0, o.useState)(null),
                        m = (0, c.M)(),
                        h = (0, o.useRef)(0),
                        x = null != i ? i : u.disableHoverableContent,
                        C = null != s ? s : u.delayDuration,
                        S = (0, o.useRef)(!1),
                        [N = !1, T] = (0, p.T)({
                            prop: n,
                            defaultProp: a,
                            onChange: (e) => {
                                e ? (u.onOpen(), document.dispatchEvent(new CustomEvent(v))) : u.onClose(), null == l || l(e);
                            },
                        }),
                        R = (0, o.useMemo)(() => (N ? (S.current ? "delayed-open" : "instant-open") : "closed"), [N]),
                        M = (0, o.useCallback)(() => {
                            window.clearTimeout(h.current), (S.current = !1), T(!0);
                        }, [T]),
                        j = (0, o.useCallback)(() => {
                            window.clearTimeout(h.current), T(!1);
                        }, [T]),
                        L = (0, o.useCallback)(() => {
                            window.clearTimeout(h.current),
                                (h.current = window.setTimeout(() => {
                                    (S.current = !0), T(!0);
                                }, C));
                        }, [C, T]);
                    return (
                        (0, o.useEffect)(() => () => window.clearTimeout(h.current), []),
                        (0, o.createElement)(
                            d.fC,
                            f,
                            (0, o.createElement)(
                                E,
                                {
                                    scope: t,
                                    contentId: m,
                                    open: N,
                                    stateAttribute: R,
                                    trigger: g,
                                    onTriggerChange: b,
                                    onTriggerEnter: (0, o.useCallback)(() => {
                                        u.isOpenDelayed ? L() : M();
                                    }, [u.isOpenDelayed, L, M]),
                                    onTriggerLeave: (0, o.useCallback)(() => {
                                        x ? j() : window.clearTimeout(h.current);
                                    }, [j, x]),
                                    onOpen: M,
                                    onClose: j,
                                    disableHoverableContent: x,
                                },
                                r
                            )
                        )
                    );
                },
                _ = N,
                z = j;
        },
        9751: function (e, t, r) {
            r.d(t, {
                W: function () {
                    return o;
                },
            });
            var n = r(5465);
            function o(e) {
                let t = (0, n.useRef)(e);
                return (
                    (0, n.useEffect)(() => {
                        t.current = e;
                    }),
                    (0, n.useMemo)(
                        () => (...e) => {
                            var r;
                            return null === (r = t.current) || void 0 === r ? void 0 : r.call(t, ...e);
                        },
                        []
                    )
                );
            }
        },
        3353: function (e, t, r) {
            r.d(t, {
                T: function () {
                    return a;
                },
            });
            var n = r(5465),
                o = r(9751);
            function a({ prop: e, defaultProp: t, onChange: r = () => {} }) {
                let [a, l] = (function ({ defaultProp: e, onChange: t }) {
                        let r = (0, n.useState)(e),
                            [a] = r,
                            l = (0, n.useRef)(a),
                            i = (0, o.W)(t);
                        return (
                            (0, n.useEffect)(() => {
                                l.current !== a && (i(a), (l.current = a));
                            }, [a, l, i]),
                            r
                        );
                    })({ defaultProp: t, onChange: r }),
                    i = void 0 !== e,
                    s = i ? e : a,
                    c = (0, o.W)(r);
                return [
                    s,
                    (0, n.useCallback)(
                        (t) => {
                            if (i) {
                                let r = "function" == typeof t ? t(e) : t;
                                r !== e && c(r);
                            } else l(t);
                        },
                        [i, e, l, c]
                    ),
                ];
            }
        },
        3866: function (e, t, r) {
            r.d(t, {
                b: function () {
                    return o;
                },
            });
            var n = r(5465);
            let o = (null == globalThis ? void 0 : globalThis.document) ? n.useLayoutEffect : () => {};
        },
        1472: function (e, t, r) {
            r.d(t, {
                iP: function () {
                    return o;
                },
            });
            var n = r(5465);
            function o() {
                let [e, t] = n.useState({ width: null, height: null });
                return (
                    n.useLayoutEffect(() => {
                        let e = () => {
                            t({ width: window.innerWidth, height: window.innerHeight });
                        };
                        return (
                            e(),
                            window.addEventListener("resize", e),
                            () => {
                                window.removeEventListener("resize", e);
                            }
                        );
                    }, []),
                    e
                );
            }
        },
        4291: function (e, t, r) {
            r.d(t, {
                j: function () {
                    return a;
                },
            });
            let n = (e) => ("boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e),
                o = function () {
                    for (var e, t, r = 0, n = ""; r < arguments.length; )
                        (e = arguments[r++]) &&
                            (t = (function e(t) {
                                var r,
                                    n,
                                    o = "";
                                if ("string" == typeof t || "number" == typeof t) o += t;
                                else if ("object" == typeof t) {
                                    if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
                                    else for (r in t) t[r] && (o && (o += " "), (o += r));
                                }
                                return o;
                            })(e)) &&
                            (n && (n += " "), (n += t));
                    return n;
                },
                a = (e, t) => (r) => {
                    var a;
                    if ((null == t ? void 0 : t.variants) == null) return o(e, null == r ? void 0 : r.class, null == r ? void 0 : r.className);
                    let { variants: l, defaultVariants: i } = t,
                        s = Object.keys(l).map((e) => {
                            let t = null == r ? void 0 : r[e],
                                o = null == i ? void 0 : i[e];
                            if (null === t) return null;
                            let a = n(t) || n(o);
                            return l[e][a];
                        }),
                        c =
                            r &&
                            Object.entries(r).reduce((e, t) => {
                                let [r, n] = t;
                                return void 0 === n || (e[r] = n), e;
                            }, {});
                    return o(
                        e,
                        s,
                        null == t
                            ? void 0
                            : null === (a = t.compoundVariants) || void 0 === a
                            ? void 0
                            : a.reduce((e, t) => {
                                  let { class: r, className: n, ...o } = t;
                                  return Object.entries(o).every((e) => {
                                      let [t, r] = e;
                                      return Array.isArray(r) ? r.includes({ ...i, ...c }[t]) : { ...i, ...c }[t] === r;
                                  })
                                      ? [...e, r, n]
                                      : e;
                              }, []),
                        null == r ? void 0 : r.class,
                        null == r ? void 0 : r.className
                    );
                };
        },
        4059: function (e, t, r) {
            r.d(t, {
                W: function () {
                    return n;
                },
            });
            function n() {
                for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
                    (e = arguments[r]) &&
                        (t = (function e(t) {
                            var r,
                                n,
                                o = "";
                            if ("string" == typeof t || "number" == typeof t) o += t;
                            else if ("object" == typeof t) {
                                if (Array.isArray(t)) {
                                    var a = t.length;
                                    for (r = 0; r < a; r++) t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
                                } else for (n in t) t[n] && (o && (o += " "), (o += n));
                            }
                            return o;
                        })(e)) &&
                        (n && (n += " "), (n += t));
                return n;
            }
        },
        5945: function (e, t, r) {
            r.d(t, {
                Z: function () {
                    return S;
                },
            });
            var n = r(5465);
            function o(e) {
                return "[object Object]" === Object.prototype.toString.call(e) || Array.isArray(e);
            }
            function a(e, t) {
                let r = Object.keys(e),
                    n = Object.keys(t);
                return (
                    r.length === n.length &&
                    JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) &&
                    r.every((r) => {
                        let n = e[r],
                            l = t[r];
                        return "function" == typeof n ? `${n}` == `${l}` : o(n) && o(l) ? a(n, l) : n === l;
                    })
                );
            }
            function l(e) {
                return e
                    .concat()
                    .sort((e, t) => (e.name > t.name ? 1 : -1))
                    .map((e) => e.options);
            }
            function i(e) {
                return "number" == typeof e;
            }
            function s(e) {
                return "string" == typeof e;
            }
            function c(e) {
                return "boolean" == typeof e;
            }
            function d(e) {
                return "[object Object]" === Object.prototype.toString.call(e);
            }
            function u(e) {
                return Math.abs(e);
            }
            function f(e) {
                return Math.sign(e);
            }
            function g(e) {
                return h(e).map(Number);
            }
            function p(e) {
                return e[b(e)];
            }
            function b(e) {
                return Math.max(0, e.length - 1);
            }
            function m(e, t = 0) {
                return Array.from(Array(e), (e, r) => t + r);
            }
            function h(e) {
                return Object.keys(e);
            }
            function y(e, t) {
                return void 0 !== t.MouseEvent && e instanceof t.MouseEvent;
            }
            function v() {
                let e = [],
                    t = {
                        add: function (r, n, o, a = { passive: !0 }) {
                            let l;
                            return "addEventListener" in r ? (r.addEventListener(n, o, a), (l = () => r.removeEventListener(n, o, a))) : (r.addListener(o), (l = () => r.removeListener(o))), e.push(l), t;
                        },
                        clear: function () {
                            e = e.filter((e) => e());
                        },
                    };
                return t;
            }
            function x(e = 0, t = 0) {
                let r = u(e - t);
                function n(r) {
                    return r < e || r > t;
                }
                return {
                    length: r,
                    max: t,
                    min: e,
                    constrain: function (r) {
                        return n(r) ? (r < e ? e : t) : r;
                    },
                    reachedAny: n,
                    reachedMax: function (e) {
                        return e > t;
                    },
                    reachedMin: function (t) {
                        return t < e;
                    },
                    removeOffset: function (e) {
                        return r ? e - r * Math.ceil((e - t) / r) : e;
                    },
                };
            }
            function w(e) {
                let t = e;
                function r(e) {
                    return i(e) ? e : e.get();
                }
                return {
                    get: function () {
                        return t;
                    },
                    set: function (e) {
                        t = r(e);
                    },
                    add: function (e) {
                        t += r(e);
                    },
                    subtract: function (e) {
                        t -= r(e);
                    },
                };
            }
            function k(e, t, r) {
                let n =
                        "x" === e.scroll
                            ? function (e) {
                                  return `translate3d(${e}px,0px,0px)`;
                              }
                            : function (e) {
                                  return `translate3d(0px,${e}px,0px)`;
                              },
                    o = r.style,
                    a = !1;
                return {
                    clear: function () {
                        a || ((o.transform = ""), r.getAttribute("style") || r.removeAttribute("style"));
                    },
                    to: function (e) {
                        a || (o.transform = n(t.apply(e)));
                    },
                    toggleActive: function (e) {
                        a = !e;
                    },
                };
            }
            let E = {
                align: "center",
                axis: "x",
                container: null,
                slides: null,
                containScroll: "trimSnaps",
                direction: "ltr",
                slidesToScroll: 1,
                inViewThreshold: 0,
                breakpoints: {},
                dragFree: !1,
                dragThreshold: 10,
                loop: !1,
                skipSnaps: !1,
                duration: 25,
                startIndex: 0,
                active: !0,
                watchDrag: !0,
                watchResize: !0,
                watchSlides: !0,
            };
            function C(e, t, r) {
                let n, o, a, l, S;
                let N = e.ownerDocument,
                    T = N.defaultView,
                    R = (function (e) {
                        function t(e, t) {
                            return (function e(t, r) {
                                return [t, r].reduce(
                                    (t, r) => (
                                        h(r).forEach((n) => {
                                            let o = t[n],
                                                a = r[n],
                                                l = d(o) && d(a);
                                            t[n] = l ? e(o, a) : a;
                                        }),
                                        t
                                    ),
                                    {}
                                );
                            })(e, t || {});
                        }
                        return {
                            mergeOptions: t,
                            optionsAtMedia: function (r) {
                                let n = r.breakpoints || {},
                                    o = h(n)
                                        .filter((t) => e.matchMedia(t).matches)
                                        .map((e) => n[e])
                                        .reduce((e, r) => t(e, r), {});
                                return t(r, o);
                            },
                            optionsMediaQueries: function (t) {
                                return t
                                    .map((e) => h(e.breakpoints || {}))
                                    .reduce((e, t) => e.concat(t), [])
                                    .map(e.matchMedia);
                            },
                        };
                    })(T),
                    M =
                        ((S = []),
                        {
                            init: function (e, t) {
                                return (S = t.filter(({ options: e }) => !1 !== R.optionsAtMedia(e).active)).forEach((t) => t.init(e, R)), t.reduce((e, t) => Object.assign(e, { [t.name]: t }), {});
                            },
                            destroy: function () {
                                S = S.filter((e) => e.destroy());
                            },
                        }),
                    j = v(),
                    L = (function () {
                        let e;
                        let t = {},
                            r = {
                                init: function (t) {
                                    e = t;
                                },
                                emit: function (n) {
                                    return (t[n] || []).forEach((t) => t(e, n)), r;
                                },
                                off: function (e, n) {
                                    return (t[e] = (t[e] || []).filter((e) => e !== n)), r;
                                },
                                on: function (e, n) {
                                    return (t[e] = (t[e] || []).concat([n])), r;
                                },
                            };
                        return r;
                    })(),
                    { mergeOptions: P, optionsAtMedia: O, optionsMediaQueries: D } = R,
                    { on: A, off: I, emit: _ } = L,
                    z = !1,
                    F = P(E, C.globalOptions),
                    W = P(F),
                    B = [];
                function Z(t, r) {
                    !z &&
                        ((W = O((F = P(F, t)))),
                        (B = r || B),
                        (function () {
                            let { container: t, slides: r } = W;
                            a = (s(t) ? e.querySelector(t) : t) || e.children[0];
                            let n = s(r) ? a.querySelectorAll(r) : r;
                            l = [].slice.call(n || a.children);
                        })(),
                        (n = (function t(r) {
                            let n = (function (e, t, r, n, o, a, l) {
                                let d, E;
                                let {
                                        align: C,
                                        axis: S,
                                        direction: N,
                                        startIndex: T,
                                        loop: R,
                                        duration: M,
                                        dragFree: j,
                                        dragThreshold: L,
                                        inViewThreshold: P,
                                        slidesToScroll: O,
                                        skipSnaps: D,
                                        containScroll: A,
                                        watchResize: I,
                                        watchSlides: _,
                                        watchDrag: z,
                                    } = a,
                                    F = {
                                        measure: function (e) {
                                            let { offsetTop: t, offsetLeft: r, offsetWidth: n, offsetHeight: o } = e;
                                            return { top: t, right: r + n, bottom: t + o, left: r, width: n, height: o };
                                        },
                                    },
                                    W = F.measure(t),
                                    B = r.map(F.measure),
                                    Z = (function (e) {
                                        let t = "rtl" === e ? -1 : 1;
                                        return {
                                            apply: function (e) {
                                                return e * t;
                                            },
                                        };
                                    })(N),
                                    V = (function (e, t) {
                                        let r = "y" === e ? "y" : "x";
                                        return {
                                            scroll: r,
                                            cross: "y" === e ? "x" : "y",
                                            startEdge: "y" === r ? "top" : "rtl" === t ? "right" : "left",
                                            endEdge: "y" === r ? "bottom" : "rtl" === t ? "left" : "right",
                                            measureSize: function (e) {
                                                let { width: t, height: n } = e;
                                                return "x" === r ? t : n;
                                            },
                                        };
                                    })(S, N),
                                    K = V.measureSize(W),
                                    H = {
                                        measure: function (e) {
                                            return (e / 100) * K;
                                        },
                                    },
                                    $ = (function (e, t) {
                                        let r = {
                                            start: function () {
                                                return 0;
                                            },
                                            center: function (e) {
                                                return (t - e) / 2;
                                            },
                                            end: function (e) {
                                                return t - e;
                                            },
                                        };
                                        return {
                                            measure: function (n, o) {
                                                return s(e) ? r[e](n) : e(t, n, o);
                                            },
                                        };
                                    })(C, K),
                                    U = !R && !!A,
                                    { slideSizes: Y, slideSizesWithGaps: G, startGap: X, endGap: q } = (function (e, t, r, n, o, a) {
                                        let { measureSize: l, startEdge: i, endEdge: s } = e,
                                            c = r[0] && o,
                                            d = (function () {
                                                if (!c) return 0;
                                                let e = r[0];
                                                return u(t[i] - e[i]);
                                            })(),
                                            f = c ? parseFloat(a.getComputedStyle(p(n)).getPropertyValue(`margin-${s}`)) : 0,
                                            g = r.map(l),
                                            m = r
                                                .map((e, t, r) => {
                                                    let n = t === b(r);
                                                    return t ? (n ? g[t] + f : r[t + 1][i] - e[i]) : g[t] + d;
                                                })
                                                .map(u);
                                        return { slideSizes: g, slideSizesWithGaps: m, startGap: d, endGap: f };
                                    })(V, W, B, r, R || !!A, o),
                                    J = (function (e, t, r, n, o, a, l, s, c, d) {
                                        let { startEdge: f, endEdge: m } = e,
                                            h = i(n);
                                        return {
                                            groupSlides: function (e) {
                                                return h
                                                    ? g(e)
                                                          .filter((e) => e % n == 0)
                                                          .map((t) => e.slice(t, t + n))
                                                    : e.length
                                                    ? g(e)
                                                          .reduce((n, i) => {
                                                              let d = p(n) || 0,
                                                                  g = i === b(e),
                                                                  h = a[f] - l[d][f],
                                                                  y = a[f] - l[i][m],
                                                                  v = o || 0 !== d ? 0 : t.apply(s);
                                                              return u(y - (!o && g ? t.apply(c) : 0) - (h + v)) > r + 2 && n.push(i), g && n.push(e.length), n;
                                                          }, [])
                                                          .map((t, r, n) => {
                                                              let o = Math.max(n[r - 1] || 0);
                                                              return e.slice(o, t);
                                                          })
                                                    : [];
                                            },
                                        };
                                    })(V, Z, K, O, R, W, B, X, q, 0),
                                    { snaps: Q, snapsAligned: ee } = (function (e, t, r, n, o) {
                                        let { startEdge: a, endEdge: l } = e,
                                            { groupSlides: i } = o,
                                            s = i(n)
                                                .map((e) => p(e)[l] - e[0][a])
                                                .map(u)
                                                .map(t.measure),
                                            c = n.map((e) => r[a] - e[a]).map((e) => -u(e)),
                                            d = i(c)
                                                .map((e) => e[0])
                                                .map((e, t) => e + s[t]);
                                        return { snaps: c, snapsAligned: d };
                                    })(V, $, W, B, J),
                                    et = -p(Q) + p(G),
                                    { snapsContained: er, scrollContainLimit: en } = (function (e, t, r, n, o) {
                                        let a = x(-t + e, 0),
                                            l = r
                                                .map((e, t) => {
                                                    let { min: n, max: o } = a,
                                                        l = a.constrain(e),
                                                        i = t === b(r);
                                                    return t ? (i || 1 > u(n - l) ? n : 1 > u(o - l) ? o : l) : o;
                                                })
                                                .map((e) => parseFloat(e.toFixed(3))),
                                            i = (function () {
                                                let e = l[0],
                                                    t = p(l);
                                                return x(l.lastIndexOf(e), l.indexOf(t) + 1);
                                            })();
                                        return {
                                            snapsContained: (function () {
                                                if (t <= e + 2) return [a.max];
                                                if ("keepSnaps" === n) return l;
                                                let { min: r, max: o } = i;
                                                return l.slice(r, o);
                                            })(),
                                            scrollContainLimit: i,
                                        };
                                    })(K, et, ee, A, 0),
                                    eo = U ? er : ee,
                                    { limit: ea } = (function (e, t, r) {
                                        let n = t[0];
                                        return { limit: x(r ? n - e : p(t), n) };
                                    })(et, eo, R),
                                    el = (function e(t, r, n) {
                                        let { constrain: o } = x(0, t),
                                            a = t + 1,
                                            l = i(r);
                                        function i(e) {
                                            return n ? u((a + e) % a) : o(e);
                                        }
                                        function s() {
                                            return e(t, l, n);
                                        }
                                        let c = {
                                            get: function () {
                                                return l;
                                            },
                                            set: function (e) {
                                                return (l = i(e)), c;
                                            },
                                            add: function (e) {
                                                return s().set(l + e);
                                            },
                                            clone: s,
                                        };
                                        return c;
                                    })(b(eo), T, R),
                                    ei = el.clone(),
                                    es = g(r),
                                    ec = ({ dragHandler: e, scrollBody: t, scrollBounds: r, options: { loop: n } }) => {
                                        n || r.constrain(e.pointerDown()), t.seek();
                                    },
                                    ed = ({ scrollBody: e, translate: t, location: r, offsetLocation: n, scrollLooper: o, slideLooper: a, dragHandler: l, animation: i, eventHandler: s, options: { loop: c } }, d) => {
                                        let u = e.velocity(),
                                            f = e.settled();
                                        f && !l.pointerDown() && (i.stop(), s.emit("settle")), f || s.emit("scroll"), n.set(r.get() - u + u * d), c && (o.loop(e.direction()), a.loop()), t.to(n.get());
                                    },
                                    eu = (function (e, t, r, n) {
                                        let o = v(),
                                            a = 1e3 / 60,
                                            l = null,
                                            i = 0,
                                            s = 0;
                                        function c(e) {
                                            if (!s) return;
                                            l || (l = e);
                                            let o = e - l;
                                            for (l = e, i += o; i >= a; ) r(), (i -= a);
                                            n(u(i / a)), s && t.requestAnimationFrame(c);
                                        }
                                        function d() {
                                            t.cancelAnimationFrame(s), (l = null), (i = 0), (s = 0);
                                        }
                                        return {
                                            init: function () {
                                                o.add(e, "visibilitychange", () => {
                                                    e.hidden && ((l = null), (i = 0));
                                                });
                                            },
                                            destroy: function () {
                                                d(), o.clear();
                                            },
                                            start: function () {
                                                s || (s = t.requestAnimationFrame(c));
                                            },
                                            stop: d,
                                            update: r,
                                            render: n,
                                        };
                                    })(
                                        n,
                                        o,
                                        () => ec(eC),
                                        (e) => ed(eC, e)
                                    ),
                                    ef = eo[el.get()],
                                    eg = w(ef),
                                    ep = w(ef),
                                    eb = w(ef),
                                    em = (function (e, t, r, n, o) {
                                        let a = 0,
                                            l = 0,
                                            i = n,
                                            s = o,
                                            c = e.get(),
                                            d = 0;
                                        function g(e) {
                                            return (i = e), b;
                                        }
                                        function p(e) {
                                            return (s = e), b;
                                        }
                                        let b = {
                                            direction: function () {
                                                return l;
                                            },
                                            duration: function () {
                                                return i;
                                            },
                                            velocity: function () {
                                                return a;
                                            },
                                            seek: function () {
                                                let t = r.get() - e.get(),
                                                    n = 0;
                                                return i ? ((a += t / i), (a *= s), (c += a), e.add(a), (n = c - d)) : ((a = 0), e.set(r), (n = t)), (l = f(n)), (d = c), b;
                                            },
                                            settled: function () {
                                                return 0.001 > u(r.get() - t.get());
                                            },
                                            useBaseFriction: function () {
                                                return p(o);
                                            },
                                            useBaseDuration: function () {
                                                return g(n);
                                            },
                                            useFriction: p,
                                            useDuration: g,
                                        };
                                        return b;
                                    })(eg, ep, eb, M, 0.68),
                                    eh = (function (e, t, r, n, o) {
                                        let { reachedAny: a, removeOffset: l, constrain: i } = n;
                                        function s(e) {
                                            return e.concat().sort((e, t) => u(e) - u(t))[0];
                                        }
                                        function c(t, n) {
                                            let o = [t, t + r, t - r];
                                            if (!e) return o[0];
                                            if (!n) return s(o);
                                            let a = o.filter((e) => f(e) === n);
                                            return a.length ? s(a) : p(o) - r;
                                        }
                                        return {
                                            byDistance: function (r, n) {
                                                let s = o.get() + r,
                                                    { index: d, distance: f } = (function (r) {
                                                        let n = e ? l(r) : i(r),
                                                            { index: o } = t
                                                                .map((e) => e - n)
                                                                .map((e) => c(e, 0))
                                                                .map((e, t) => ({ diff: e, index: t }))
                                                                .sort((e, t) => u(e.diff) - u(t.diff))[0];
                                                        return { index: o, distance: n };
                                                    })(s),
                                                    g = !e && a(s);
                                                if (!n || g) return { index: d, distance: r };
                                                let p = r + c(t[d] - f, 0);
                                                return { index: d, distance: p };
                                            },
                                            byIndex: function (e, r) {
                                                let n = c(t[e] - o.get(), r);
                                                return { index: e, distance: n };
                                            },
                                            shortcut: c,
                                        };
                                    })(R, eo, et, ea, eb),
                                    ey = (function (e, t, r, n, o, a, l) {
                                        function i(o) {
                                            let i = o.distance,
                                                s = o.index !== t.get();
                                            a.add(i), i && (n.duration() ? e.start() : (e.update(), e.render(1), e.update())), s && (r.set(t.get()), t.set(o.index), l.emit("select"));
                                        }
                                        return {
                                            distance: function (e, t) {
                                                i(o.byDistance(e, t));
                                            },
                                            index: function (e, r) {
                                                let n = t.clone().set(e);
                                                i(o.byIndex(n.get(), r));
                                            },
                                        };
                                    })(eu, el, ei, em, eh, eb, l),
                                    ev = (function (e) {
                                        let { max: t, length: r } = e;
                                        return {
                                            get: function (e) {
                                                return r ? -((e - t) / r) : 0;
                                            },
                                        };
                                    })(ea),
                                    ex = v(),
                                    ew = (function (e, t, r, n) {
                                        let o;
                                        let a = {},
                                            l = null,
                                            i = null,
                                            s = !1;
                                        return {
                                            init: function () {
                                                (o = new IntersectionObserver(
                                                    (e) => {
                                                        s ||
                                                            (e.forEach((e) => {
                                                                a[t.indexOf(e.target)] = e;
                                                            }),
                                                            (l = null),
                                                            (i = null),
                                                            r.emit("slidesInView"));
                                                    },
                                                    { root: e.parentElement, threshold: n }
                                                )),
                                                    t.forEach((e) => o.observe(e));
                                            },
                                            destroy: function () {
                                                o && o.disconnect(), (s = !0);
                                            },
                                            get: function (e = !0) {
                                                if (e && l) return l;
                                                if (!e && i) return i;
                                                let t = h(a).reduce((t, r) => {
                                                    let n = parseInt(r),
                                                        { isIntersecting: o } = a[n];
                                                    return ((e && o) || (!e && !o)) && t.push(n), t;
                                                }, []);
                                                return e && (l = t), e || (i = t), t;
                                            },
                                        };
                                    })(t, r, l, P),
                                    { slideRegistry: ek } = (function (e, t, r, n, o, a) {
                                        let { groupSlides: l } = o,
                                            { min: i, max: s } = n;
                                        return {
                                            slideRegistry: (function () {
                                                let n = l(a);
                                                return 1 === r.length
                                                    ? [a]
                                                    : e && "keepSnaps" !== t
                                                    ? n.slice(i, s).map((e, t, r) => {
                                                          let n = t === b(r);
                                                          return t ? (n ? m(b(a) - p(r)[0] + 1, p(r)[0]) : e) : m(p(r[0]) + 1);
                                                      })
                                                    : n;
                                            })(),
                                        };
                                    })(U, A, eo, en, J, es),
                                    eE = (function (e, t, r, n, o, a) {
                                        let l = 0;
                                        function s(e) {
                                            "Tab" === e.code && (l = new Date().getTime());
                                        }
                                        function c(s) {
                                            a.add(
                                                s,
                                                "focus",
                                                () => {
                                                    if (new Date().getTime() - l > 10) return;
                                                    e.scrollLeft = 0;
                                                    let a = t.indexOf(s),
                                                        c = r.findIndex((e) => e.includes(a));
                                                    i(c) && (o.useDuration(0), n.index(c, 0));
                                                },
                                                { passive: !0, capture: !0 }
                                            );
                                        }
                                        return {
                                            init: function () {
                                                a.add(document, "keydown", s, !1), t.forEach(c);
                                            },
                                        };
                                    })(e, r, ek, ey, em, ex),
                                    eC = {
                                        ownerDocument: n,
                                        ownerWindow: o,
                                        eventHandler: l,
                                        containerRect: W,
                                        slideRects: B,
                                        animation: eu,
                                        axis: V,
                                        direction: Z,
                                        dragHandler: (function (e, t, r, n, o, a, l, i, s, d, g, p, b, m, h, w, k, E, C, S) {
                                            let { cross: N } = e,
                                                T = ["INPUT", "SELECT", "TEXTAREA"],
                                                R = { passive: !1 },
                                                M = v(),
                                                j = v(),
                                                L = x(50, 225).constrain(h.measure(20)),
                                                P = { mouse: 300, touch: 400 },
                                                O = { mouse: 500, touch: 600 },
                                                D = w ? 43 : 25,
                                                A = !1,
                                                I = 0,
                                                _ = 0,
                                                z = !1,
                                                F = !1,
                                                W = !1,
                                                B = !1;
                                            function Z(e) {
                                                let r = l.readPoint(e),
                                                    n = l.readPoint(e, N),
                                                    o = u(r - I),
                                                    i = u(n - _);
                                                if (!F && !B && (!e.cancelable || !(F = o > i))) return V(e);
                                                let c = l.pointerMove(e);
                                                o > k && (W = !0), g.useFriction(0.3).useDuration(1), s.start(), a.add(t.apply(c)), e.preventDefault();
                                            }
                                            function V(e) {
                                                let r = p.byDistance(0, !1).index !== b.get(),
                                                    n = l.pointerUp(e) * (w ? O : P)[B ? "mouse" : "touch"],
                                                    o = (function (e, t) {
                                                        let r = b.add(-1 * f(e)),
                                                            n = p.byDistance(e, !w).distance;
                                                        return w || u(e) < L ? n : E && t ? 0.5 * n : p.byIndex(r.get(), 0).distance;
                                                    })(t.apply(n), r),
                                                    a = (function (e, t) {
                                                        var r, n;
                                                        if (0 === e || 0 === t || u(e) <= u(t)) return 0;
                                                        let o = ((r = u(e)), (n = u(t)), u(r - n));
                                                        return u(o / e);
                                                    })(n, o);
                                                (F = !1), (z = !1), j.clear(), g.useDuration(D - 10 * a).useFriction(0.68 + a / 50), d.distance(o, !w), (B = !1), m.emit("pointerUp");
                                            }
                                            function K(e) {
                                                W && (e.stopPropagation(), e.preventDefault());
                                            }
                                            return {
                                                init: function (e) {
                                                    S &&
                                                        M.add(r, "dragstart", (e) => e.preventDefault(), R)
                                                            .add(r, "touchmove", () => void 0, R)
                                                            .add(r, "touchend", () => void 0)
                                                            .add(r, "touchstart", t)
                                                            .add(r, "mousedown", t)
                                                            .add(r, "touchcancel", V)
                                                            .add(r, "contextmenu", V)
                                                            .add(r, "click", K, !0);
                                                    function t(t) {
                                                        (c(S) || S(e, t)) &&
                                                            (function (e) {
                                                                let t = y(e, o);
                                                                (B = t),
                                                                    (!t || 0 === e.button) &&
                                                                        !(function (e) {
                                                                            let t = e.nodeName || "";
                                                                            return T.includes(t);
                                                                        })(e.target) &&
                                                                        ((W = w && t && !e.buttons && A),
                                                                        (A = u(a.get() - i.get()) >= 2),
                                                                        (z = !0),
                                                                        l.pointerDown(e),
                                                                        g.useFriction(0).useDuration(0),
                                                                        a.set(i),
                                                                        (function () {
                                                                            let e = B ? n : r;
                                                                            j.add(e, "touchmove", Z, R).add(e, "touchend", V).add(e, "mousemove", Z, R).add(e, "mouseup", V);
                                                                        })(),
                                                                        (I = l.readPoint(e)),
                                                                        (_ = l.readPoint(e, N)),
                                                                        m.emit("pointerDown"));
                                                            })(t);
                                                    }
                                                },
                                                pointerDown: function () {
                                                    return z;
                                                },
                                                destroy: function () {
                                                    M.clear(), j.clear();
                                                },
                                            };
                                        })(
                                            V,
                                            Z,
                                            e,
                                            n,
                                            o,
                                            eb,
                                            (function (e, t) {
                                                let r, n;
                                                function o(e) {
                                                    return e.timeStamp;
                                                }
                                                function a(r, n) {
                                                    let o = n || e.scroll,
                                                        a = `client${"x" === o ? "X" : "Y"}`;
                                                    return (y(r, t) ? r : r.touches[0])[a];
                                                }
                                                return {
                                                    pointerDown: function (e) {
                                                        return (r = e), (n = e), a(e);
                                                    },
                                                    pointerMove: function (e) {
                                                        let t = a(e) - a(n),
                                                            l = o(e) - o(r) > 170;
                                                        return (n = e), l && (r = e), t;
                                                    },
                                                    pointerUp: function (e) {
                                                        if (!r || !n) return 0;
                                                        let t = a(n) - a(r),
                                                            l = o(e) - o(r),
                                                            i = o(e) - o(n) > 170,
                                                            s = t / l;
                                                        return l && !i && u(s) > 0.1 ? s : 0;
                                                    },
                                                    readPoint: a,
                                                };
                                            })(V, o),
                                            eg,
                                            eu,
                                            ey,
                                            em,
                                            eh,
                                            el,
                                            l,
                                            H,
                                            j,
                                            L,
                                            D,
                                            0,
                                            z
                                        ),
                                        eventStore: ex,
                                        percentOfView: H,
                                        index: el,
                                        indexPrevious: ei,
                                        limit: ea,
                                        location: eg,
                                        offsetLocation: ep,
                                        options: a,
                                        resizeHandler: (function (e, t, r, n, o, a, l) {
                                            let i, s;
                                            let d = [],
                                                f = !1;
                                            function g(e) {
                                                return o.measureSize(l.measure(e));
                                            }
                                            return {
                                                init: function (o) {
                                                    a &&
                                                        ((s = g(e)),
                                                        (d = n.map(g)),
                                                        (i = new ResizeObserver((l) => {
                                                            !f &&
                                                                (c(a) || a(o, l)) &&
                                                                (function (a) {
                                                                    for (let l of a) {
                                                                        let a = l.target === e,
                                                                            i = n.indexOf(l.target),
                                                                            c = a ? s : d[i];
                                                                        if (u(g(a ? e : n[i]) - c) >= 0.5) {
                                                                            r.requestAnimationFrame(() => {
                                                                                o.reInit(), t.emit("resize");
                                                                            });
                                                                            break;
                                                                        }
                                                                    }
                                                                })(l);
                                                        })),
                                                        [e].concat(n).forEach((e) => i.observe(e)));
                                                },
                                                destroy: function () {
                                                    i && i.disconnect(), (f = !0);
                                                },
                                            };
                                        })(t, l, o, r, V, I, F),
                                        scrollBody: em,
                                        scrollBounds: (function (e, t, r, n, o) {
                                            let a = o.measure(10),
                                                l = o.measure(50),
                                                i = x(0.1, 0.99),
                                                s = !1;
                                            return {
                                                constrain: function (o) {
                                                    if (!(!s && e.reachedAny(r.get()) && e.reachedAny(t.get()))) return;
                                                    let c = e.reachedMin(t.get()) ? "min" : "max",
                                                        d = u(e[c] - t.get()),
                                                        f = r.get() - t.get(),
                                                        g = i.constrain(d / l);
                                                    r.subtract(f * g), !o && u(f) < a && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction());
                                                },
                                                toggleActive: function (e) {
                                                    s = !e;
                                                },
                                            };
                                        })(ea, ep, eb, em, H),
                                        scrollLooper: (function (e, t, r, n) {
                                            let { reachedMin: o, reachedMax: a } = x(t.min + 0.1, t.max + 0.1);
                                            return {
                                                loop: function (t) {
                                                    if (!(1 === t ? a(r.get()) : -1 === t && o(r.get()))) return;
                                                    let l = -1 * t * e;
                                                    n.forEach((e) => e.add(l));
                                                },
                                            };
                                        })(et, ea, ep, [eg, ep, eb]),
                                        scrollProgress: ev,
                                        scrollSnapList: eo.map(ev.get),
                                        scrollSnaps: eo,
                                        scrollTarget: eh,
                                        scrollTo: ey,
                                        slideLooper: (function (e, t, r, n, o, a, l, i, s, c) {
                                            let d = g(a),
                                                u = b(p(g(a).reverse(), i[0]), n, !1).concat(b(p(d, r - i[0] - 1), -n, !0));
                                            function f(e, t) {
                                                return e.reduce((e, t) => e - a[t], t);
                                            }
                                            function p(e, t) {
                                                return e.reduce((e, r) => (f(e, t) > 0 ? e.concat([r]) : e), []);
                                            }
                                            function b(a, i, d) {
                                                let u = l.map((e, t) => ({ start: e - o[t] + 0.5 + i, end: e + r - 0.5 + i }));
                                                return a.map((r) => {
                                                    let o = d ? 0 : -n,
                                                        a = d ? n : 0,
                                                        l = u[r][d ? "end" : "start"];
                                                    return { index: r, loopPoint: l, slideLocation: w(-1), translate: k(e, t, c[r]), target: () => (s.get() > l ? o : a) };
                                                });
                                            }
                                            return {
                                                canLoop: function () {
                                                    return u.every(
                                                        ({ index: e }) =>
                                                            0.1 >=
                                                            f(
                                                                d.filter((t) => t !== e),
                                                                r
                                                            )
                                                    );
                                                },
                                                clear: function () {
                                                    u.forEach((e) => e.translate.clear());
                                                },
                                                loop: function () {
                                                    u.forEach((e) => {
                                                        let { target: t, translate: r, slideLocation: n } = e,
                                                            o = t();
                                                        o !== n.get() && (r.to(o), n.set(o));
                                                    });
                                                },
                                                loopPoints: u,
                                            };
                                        })(V, Z, K, et, Y, G, Q, eo, ep, r),
                                        slideFocus: eE,
                                        slidesHandler:
                                            ((E = !1),
                                            {
                                                init: function (e) {
                                                    _ &&
                                                        (d = new MutationObserver((t) => {
                                                            !E &&
                                                                (c(_) || _(e, t)) &&
                                                                (function (t) {
                                                                    for (let r of t)
                                                                        if ("childList" === r.type) {
                                                                            e.reInit(), l.emit("slidesChanged");
                                                                            break;
                                                                        }
                                                                })(t);
                                                        })).observe(t, { childList: !0 });
                                                },
                                                destroy: function () {
                                                    d && d.disconnect(), (E = !0);
                                                },
                                            }),
                                        slidesInView: ew,
                                        slideIndexes: es,
                                        slideRegistry: ek,
                                        slidesToScroll: J,
                                        target: eb,
                                        translate: k(V, Z, t),
                                    };
                                return eC;
                            })(e, a, l, N, T, r, L);
                            return r.loop && !n.slideLooper.canLoop() ? t(Object.assign({}, r, { loop: !1 })) : n;
                        })(W)),
                        D([F, ...B.map(({ options: e }) => e)]).forEach((e) => j.add(e, "change", V)),
                        W.active &&
                            (n.translate.to(n.location.get()),
                            n.animation.init(),
                            n.slidesInView.init(),
                            n.slideFocus.init(),
                            n.eventHandler.init(U),
                            n.resizeHandler.init(U),
                            n.slidesHandler.init(U),
                            n.options.loop && n.slideLooper.loop(),
                            a.offsetParent && l.length && n.dragHandler.init(U),
                            (o = M.init(U, B))));
                }
                function V(e, t) {
                    let r = $();
                    K(), Z(P({ startIndex: r }, e), t), L.emit("reInit");
                }
                function K() {
                    n.dragHandler.destroy(), n.eventStore.clear(), n.translate.clear(), n.slideLooper.clear(), n.resizeHandler.destroy(), n.slidesHandler.destroy(), n.slidesInView.destroy(), n.animation.destroy(), M.destroy(), j.clear();
                }
                function H(e, t, r) {
                    W.active && !z && (n.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : W.duration), n.scrollTo.index(e, r || 0));
                }
                function $() {
                    return n.index.get();
                }
                let U = {
                    canScrollNext: function () {
                        return n.index.add(1).get() !== $();
                    },
                    canScrollPrev: function () {
                        return n.index.add(-1).get() !== $();
                    },
                    containerNode: function () {
                        return a;
                    },
                    internalEngine: function () {
                        return n;
                    },
                    destroy: function () {
                        z || ((z = !0), j.clear(), K(), L.emit("destroy"));
                    },
                    off: I,
                    on: A,
                    emit: _,
                    plugins: function () {
                        return o;
                    },
                    previousScrollSnap: function () {
                        return n.indexPrevious.get();
                    },
                    reInit: V,
                    rootNode: function () {
                        return e;
                    },
                    scrollNext: function (e) {
                        H(n.index.add(1).get(), e, -1);
                    },
                    scrollPrev: function (e) {
                        H(n.index.add(-1).get(), e, 1);
                    },
                    scrollProgress: function () {
                        return n.scrollProgress.get(n.location.get());
                    },
                    scrollSnapList: function () {
                        return n.scrollSnapList;
                    },
                    scrollTo: H,
                    selectedScrollSnap: $,
                    slideNodes: function () {
                        return l;
                    },
                    slidesInView: function () {
                        return n.slidesInView.get();
                    },
                    slidesNotInView: function () {
                        return n.slidesInView.get(!1);
                    },
                };
                return Z(t, r), setTimeout(() => L.emit("init"), 0), U;
            }
            function S(e = {}, t = []) {
                let r = (0, n.useRef)(e),
                    o = (0, n.useRef)(t),
                    [i, s] = (0, n.useState)(),
                    [c, d] = (0, n.useState)(),
                    u = (0, n.useCallback)(() => {
                        i && i.reInit(r.current, o.current);
                    }, [i]);
                return (
                    (0, n.useEffect)(() => {
                        if ("undefined" != typeof window && window.document && window.document.createElement && c) {
                            C.globalOptions = S.globalOptions;
                            let e = C(c, r.current, o.current);
                            return s(e), () => e.destroy();
                        }
                        s(void 0);
                    }, [c, s]),
                    (0, n.useEffect)(() => {
                        a(r.current, e) || ((r.current = e), u());
                    }, [e, u]),
                    (0, n.useEffect)(() => {
                        !(function (e, t) {
                            if (e.length !== t.length) return !1;
                            let r = l(e),
                                n = l(t);
                            return r.every((e, t) => a(e, n[t]));
                        })(o.current, t) && ((o.current = t), u());
                    }, [t, u]),
                    [d, i]
                );
            }
            (C.globalOptions = void 0), (S.globalOptions = void 0);
        },
        3360: function (e, t, r) {
            r.d(t, {
                m6: function () {
                    return I;
                },
            });
            let n = /^\[(.+)\]$/;
            function o(e, t) {
                let r = e;
                return (
                    t.split("-").forEach((e) => {
                        r.nextPart.has(e) || r.nextPart.set(e, { nextPart: new Map(), validators: [] }), (r = r.nextPart.get(e));
                    }),
                    r
                );
            }
            let a = /\s+/;
            function l() {
                let e,
                    t,
                    r = 0,
                    n = "";
                for (; r < arguments.length; )
                    (e = arguments[r++]) &&
                        (t = (function e(t) {
                            let r;
                            if ("string" == typeof t) return t;
                            let n = "";
                            for (let o = 0; o < t.length; o++) t[o] && (r = e(t[o])) && (n && (n += " "), (n += r));
                            return n;
                        })(e)) &&
                        (n && (n += " "), (n += t));
                return n;
            }
            function i(e) {
                let t = (t) => t[e] || [];
                return (t.isThemeGetter = !0), t;
            }
            let s = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                c = /^\d+\/\d+$/,
                d = new Set(["px", "full", "screen"]),
                u = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                f = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                g = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
                p = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                b = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
            function m(e) {
                return y(e) || d.has(e) || c.test(e);
            }
            function h(e) {
                return L(e, "length", P);
            }
            function y(e) {
                return !!e && !Number.isNaN(Number(e));
            }
            function v(e) {
                return L(e, "number", y);
            }
            function x(e) {
                return !!e && Number.isInteger(Number(e));
            }
            function w(e) {
                return e.endsWith("%") && y(e.slice(0, -1));
            }
            function k(e) {
                return s.test(e);
            }
            function E(e) {
                return u.test(e);
            }
            let C = new Set(["length", "size", "percentage"]);
            function S(e) {
                return L(e, C, O);
            }
            function N(e) {
                return L(e, "position", O);
            }
            let T = new Set(["image", "url"]);
            function R(e) {
                return L(e, T, A);
            }
            function M(e) {
                return L(e, "", D);
            }
            function j() {
                return !0;
            }
            function L(e, t, r) {
                let n = s.exec(e);
                return !!n && (n[1] ? ("string" == typeof t ? n[1] === t : t.has(n[1])) : r(n[2]));
            }
            function P(e) {
                return f.test(e) && !g.test(e);
            }
            function O() {
                return !1;
            }
            function D(e) {
                return p.test(e);
            }
            function A(e) {
                return b.test(e);
            }
            let I = (function (e) {
                let t, r, i;
                let s = function (a) {
                    var l;
                    return (
                        (r = (t = {
                            cache: (function (e) {
                                if (e < 1) return { get: () => void 0, set: () => {} };
                                let t = 0,
                                    r = new Map(),
                                    n = new Map();
                                function o(o, a) {
                                    r.set(o, a), ++t > e && ((t = 0), (n = r), (r = new Map()));
                                }
                                return {
                                    get(e) {
                                        let t = r.get(e);
                                        return void 0 !== t ? t : void 0 !== (t = n.get(e)) ? (o(e, t), t) : void 0;
                                    },
                                    set(e, t) {
                                        r.has(e) ? r.set(e, t) : o(e, t);
                                    },
                                };
                            })((l = [].reduce((e, t) => t(e), e())).cacheSize),
                            splitModifiers: (function (e) {
                                let t = e.separator,
                                    r = 1 === t.length,
                                    n = t[0],
                                    o = t.length;
                                return function (e) {
                                    let a;
                                    let l = [],
                                        i = 0,
                                        s = 0;
                                    for (let c = 0; c < e.length; c++) {
                                        let d = e[c];
                                        if (0 === i) {
                                            if (d === n && (r || e.slice(c, c + o) === t)) {
                                                l.push(e.slice(s, c)), (s = c + o);
                                                continue;
                                            }
                                            if ("/" === d) {
                                                a = c;
                                                continue;
                                            }
                                        }
                                        "[" === d ? i++ : "]" === d && i--;
                                    }
                                    let c = 0 === l.length ? e : e.substring(s),
                                        d = c.startsWith("!"),
                                        u = d ? c.substring(1) : c;
                                    return { modifiers: l, hasImportantModifier: d, baseClassName: u, maybePostfixModifierPosition: a && a > s ? a - s : void 0 };
                                };
                            })(l),
                            ...(function (e) {
                                let t = (function (e) {
                                        var t;
                                        let { theme: r, prefix: n } = e,
                                            a = { nextPart: new Map(), validators: [] };
                                        return (
                                            ((t = Object.entries(e.classGroups)),
                                            n ? t.map(([e, t]) => [e, t.map((e) => ("string" == typeof e ? n + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, t]) => [n + e, t])) : e))]) : t).forEach(([e, t]) => {
                                                (function e(t, r, n, a) {
                                                    t.forEach((t) => {
                                                        if ("string" == typeof t) {
                                                            ("" === t ? r : o(r, t)).classGroupId = n;
                                                            return;
                                                        }
                                                        if ("function" == typeof t) {
                                                            if (t.isThemeGetter) {
                                                                e(t(a), r, n, a);
                                                                return;
                                                            }
                                                            r.validators.push({ validator: t, classGroupId: n });
                                                            return;
                                                        }
                                                        Object.entries(t).forEach(([t, l]) => {
                                                            e(l, o(r, t), n, a);
                                                        });
                                                    });
                                                })(t, a, e, r);
                                            }),
                                            a
                                        );
                                    })(e),
                                    { conflictingClassGroups: r, conflictingClassGroupModifiers: a } = e;
                                return {
                                    getClassGroupId: function (e) {
                                        let r = e.split("-");
                                        return (
                                            "" === r[0] && 1 !== r.length && r.shift(),
                                            (function e(t, r) {
                                                if (0 === t.length) return r.classGroupId;
                                                let n = t[0],
                                                    o = r.nextPart.get(n),
                                                    a = o ? e(t.slice(1), o) : void 0;
                                                if (a) return a;
                                                if (0 === r.validators.length) return;
                                                let l = t.join("-");
                                                return r.validators.find(({ validator: e }) => e(l))?.classGroupId;
                                            })(r, t) ||
                                                (function (e) {
                                                    if (n.test(e)) {
                                                        let t = n.exec(e)[1],
                                                            r = t?.substring(0, t.indexOf(":"));
                                                        if (r) return "arbitrary.." + r;
                                                    }
                                                })(e)
                                        );
                                    },
                                    getConflictingClassGroupIds: function (e, t) {
                                        let n = r[e] || [];
                                        return t && a[e] ? [...n, ...a[e]] : n;
                                    },
                                };
                            })(l),
                        }).cache.get),
                        (i = t.cache.set),
                        (s = c),
                        c(a)
                    );
                };
                function c(e) {
                    let n = r(e);
                    if (n) return n;
                    let o = (function (e, t) {
                        let { splitModifiers: r, getClassGroupId: n, getConflictingClassGroupIds: o } = t,
                            l = new Set();
                        return e
                            .trim()
                            .split(a)
                            .map((e) => {
                                let { modifiers: t, hasImportantModifier: o, baseClassName: a, maybePostfixModifierPosition: l } = r(e),
                                    i = n(l ? a.substring(0, l) : a),
                                    s = !!l;
                                if (!i) {
                                    if (!l || !(i = n(a))) return { isTailwindClass: !1, originalClassName: e };
                                    s = !1;
                                }
                                let c = (function (e) {
                                    if (e.length <= 1) return e;
                                    let t = [],
                                        r = [];
                                    return (
                                        e.forEach((e) => {
                                            "[" === e[0] ? (t.push(...r.sort(), e), (r = [])) : r.push(e);
                                        }),
                                        t.push(...r.sort()),
                                        t
                                    );
                                })(t).join(":");
                                return { isTailwindClass: !0, modifierId: o ? c + "!" : c, classGroupId: i, originalClassName: e, hasPostfixModifier: s };
                            })
                            .reverse()
                            .filter((e) => {
                                if (!e.isTailwindClass) return !0;
                                let { modifierId: t, classGroupId: r, hasPostfixModifier: n } = e,
                                    a = t + r;
                                return !l.has(a) && (l.add(a), o(r, n).forEach((e) => l.add(t + e)), !0);
                            })
                            .reverse()
                            .map((e) => e.originalClassName)
                            .join(" ");
                    })(e, t);
                    return i(e, o), o;
                }
                return function () {
                    return s(l.apply(null, arguments));
                };
            })(function () {
                let e = i("colors"),
                    t = i("spacing"),
                    r = i("blur"),
                    n = i("brightness"),
                    o = i("borderColor"),
                    a = i("borderRadius"),
                    l = i("borderSpacing"),
                    s = i("borderWidth"),
                    c = i("contrast"),
                    d = i("grayscale"),
                    u = i("hueRotate"),
                    f = i("invert"),
                    g = i("gap"),
                    p = i("gradientColorStops"),
                    b = i("gradientColorStopPositions"),
                    C = i("inset"),
                    T = i("margin"),
                    L = i("opacity"),
                    P = i("padding"),
                    O = i("saturate"),
                    D = i("scale"),
                    A = i("sepia"),
                    I = i("skew"),
                    _ = i("space"),
                    z = i("translate"),
                    F = () => ["auto", "contain", "none"],
                    W = () => ["auto", "hidden", "clip", "visible", "scroll"],
                    B = () => ["auto", k, t],
                    Z = () => [k, t],
                    V = () => ["", m, h],
                    K = () => ["auto", y, k],
                    H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
                    $ = () => ["solid", "dashed", "dotted", "double", "none"],
                    U = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"],
                    Y = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
                    G = () => ["", "0", k],
                    X = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                    q = () => [y, v],
                    J = () => [y, k];
                return {
                    cacheSize: 500,
                    separator: ":",
                    theme: {
                        colors: [j],
                        spacing: [m, h],
                        blur: ["none", "", E, k],
                        brightness: q(),
                        borderColor: [e],
                        borderRadius: ["none", "", "full", E, k],
                        borderSpacing: Z(),
                        borderWidth: V(),
                        contrast: q(),
                        grayscale: G(),
                        hueRotate: J(),
                        invert: G(),
                        gap: Z(),
                        gradientColorStops: [e],
                        gradientColorStopPositions: [w, h],
                        inset: B(),
                        margin: B(),
                        opacity: q(),
                        padding: Z(),
                        saturate: q(),
                        scale: q(),
                        sepia: G(),
                        skew: J(),
                        space: Z(),
                        translate: Z(),
                    },
                    classGroups: {
                        aspect: [{ aspect: ["auto", "square", "video", k] }],
                        container: ["container"],
                        columns: [{ columns: [E] }],
                        "break-after": [{ "break-after": X() }],
                        "break-before": [{ "break-before": X() }],
                        "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
                        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
                        box: [{ box: ["border", "content"] }],
                        display: [
                            "block",
                            "inline-block",
                            "inline",
                            "flex",
                            "inline-flex",
                            "table",
                            "inline-table",
                            "table-caption",
                            "table-cell",
                            "table-column",
                            "table-column-group",
                            "table-footer-group",
                            "table-header-group",
                            "table-row-group",
                            "table-row",
                            "flow-root",
                            "grid",
                            "inline-grid",
                            "contents",
                            "list-item",
                            "hidden",
                        ],
                        float: [{ float: ["right", "left", "none", "start", "end"] }],
                        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
                        "object-position": [{ object: [...H(), k] }],
                        overflow: [{ overflow: W() }],
                        "overflow-x": [{ "overflow-x": W() }],
                        "overflow-y": [{ "overflow-y": W() }],
                        overscroll: [{ overscroll: F() }],
                        "overscroll-x": [{ "overscroll-x": F() }],
                        "overscroll-y": [{ "overscroll-y": F() }],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{ inset: [C] }],
                        "inset-x": [{ "inset-x": [C] }],
                        "inset-y": [{ "inset-y": [C] }],
                        start: [{ start: [C] }],
                        end: [{ end: [C] }],
                        top: [{ top: [C] }],
                        right: [{ right: [C] }],
                        bottom: [{ bottom: [C] }],
                        left: [{ left: [C] }],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{ z: ["auto", x, k] }],
                        basis: [{ basis: B() }],
                        "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
                        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
                        flex: [{ flex: ["1", "auto", "initial", "none", k] }],
                        grow: [{ grow: G() }],
                        shrink: [{ shrink: G() }],
                        order: [{ order: ["first", "last", "none", x, k] }],
                        "grid-cols": [{ "grid-cols": [j] }],
                        "col-start-end": [{ col: ["auto", { span: ["full", x, k] }, k] }],
                        "col-start": [{ "col-start": K() }],
                        "col-end": [{ "col-end": K() }],
                        "grid-rows": [{ "grid-rows": [j] }],
                        "row-start-end": [{ row: ["auto", { span: [x, k] }, k] }],
                        "row-start": [{ "row-start": K() }],
                        "row-end": [{ "row-end": K() }],
                        "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
                        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", k] }],
                        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", k] }],
                        gap: [{ gap: [g] }],
                        "gap-x": [{ "gap-x": [g] }],
                        "gap-y": [{ "gap-y": [g] }],
                        "justify-content": [{ justify: ["normal", ...Y()] }],
                        "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }],
                        "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }],
                        "align-content": [{ content: ["normal", ...Y(), "baseline"] }],
                        "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }],
                        "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }],
                        "place-content": [{ "place-content": [...Y(), "baseline"] }],
                        "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }],
                        "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }],
                        p: [{ p: [P] }],
                        px: [{ px: [P] }],
                        py: [{ py: [P] }],
                        ps: [{ ps: [P] }],
                        pe: [{ pe: [P] }],
                        pt: [{ pt: [P] }],
                        pr: [{ pr: [P] }],
                        pb: [{ pb: [P] }],
                        pl: [{ pl: [P] }],
                        m: [{ m: [T] }],
                        mx: [{ mx: [T] }],
                        my: [{ my: [T] }],
                        ms: [{ ms: [T] }],
                        me: [{ me: [T] }],
                        mt: [{ mt: [T] }],
                        mr: [{ mr: [T] }],
                        mb: [{ mb: [T] }],
                        ml: [{ ml: [T] }],
                        "space-x": [{ "space-x": [_] }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{ "space-y": [_] }],
                        "space-y-reverse": ["space-y-reverse"],
                        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", k, t] }],
                        "min-w": [{ "min-w": [k, t, "min", "max", "fit"] }],
                        "max-w": [{ "max-w": [k, t, "none", "full", "min", "max", "fit", "prose", { screen: [E] }, E] }],
                        h: [{ h: [k, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
                        "min-h": [{ "min-h": [k, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
                        "max-h": [{ "max-h": [k, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
                        size: [{ size: [k, t, "auto", "min", "max", "fit"] }],
                        "font-size": [{ text: ["base", E, h] }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", v] }],
                        "font-family": [{ font: [j] }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                        tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", k] }],
                        "line-clamp": [{ "line-clamp": ["none", y, v] }],
                        leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", m, k] }],
                        "list-image": [{ "list-image": ["none", k] }],
                        "list-style-type": [{ list: ["none", "disc", "decimal", k] }],
                        "list-style-position": [{ list: ["inside", "outside"] }],
                        "placeholder-color": [{ placeholder: [e] }],
                        "placeholder-opacity": [{ "placeholder-opacity": [L] }],
                        "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
                        "text-color": [{ text: [e] }],
                        "text-opacity": [{ "text-opacity": [L] }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{ decoration: [...$(), "wavy"] }],
                        "text-decoration-thickness": [{ decoration: ["auto", "from-font", m, h] }],
                        "underline-offset": [{ "underline-offset": ["auto", m, k] }],
                        "text-decoration-color": [{ decoration: [e] }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
                        indent: [{ indent: Z() }],
                        "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", k] }],
                        whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }],
                        break: [{ break: ["normal", "words", "all", "keep"] }],
                        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
                        content: [{ content: ["none", k] }],
                        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
                        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
                        "bg-opacity": [{ "bg-opacity": [L] }],
                        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
                        "bg-position": [{ bg: [...H(), N] }],
                        "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }],
                        "bg-size": [{ bg: ["auto", "cover", "contain", S] }],
                        "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, R] }],
                        "bg-color": [{ bg: [e] }],
                        "gradient-from-pos": [{ from: [b] }],
                        "gradient-via-pos": [{ via: [b] }],
                        "gradient-to-pos": [{ to: [b] }],
                        "gradient-from": [{ from: [p] }],
                        "gradient-via": [{ via: [p] }],
                        "gradient-to": [{ to: [p] }],
                        rounded: [{ rounded: [a] }],
                        "rounded-s": [{ "rounded-s": [a] }],
                        "rounded-e": [{ "rounded-e": [a] }],
                        "rounded-t": [{ "rounded-t": [a] }],
                        "rounded-r": [{ "rounded-r": [a] }],
                        "rounded-b": [{ "rounded-b": [a] }],
                        "rounded-l": [{ "rounded-l": [a] }],
                        "rounded-ss": [{ "rounded-ss": [a] }],
                        "rounded-se": [{ "rounded-se": [a] }],
                        "rounded-ee": [{ "rounded-ee": [a] }],
                        "rounded-es": [{ "rounded-es": [a] }],
                        "rounded-tl": [{ "rounded-tl": [a] }],
                        "rounded-tr": [{ "rounded-tr": [a] }],
                        "rounded-br": [{ "rounded-br": [a] }],
                        "rounded-bl": [{ "rounded-bl": [a] }],
                        "border-w": [{ border: [s] }],
                        "border-w-x": [{ "border-x": [s] }],
                        "border-w-y": [{ "border-y": [s] }],
                        "border-w-s": [{ "border-s": [s] }],
                        "border-w-e": [{ "border-e": [s] }],
                        "border-w-t": [{ "border-t": [s] }],
                        "border-w-r": [{ "border-r": [s] }],
                        "border-w-b": [{ "border-b": [s] }],
                        "border-w-l": [{ "border-l": [s] }],
                        "border-opacity": [{ "border-opacity": [L] }],
                        "border-style": [{ border: [...$(), "hidden"] }],
                        "divide-x": [{ "divide-x": [s] }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{ "divide-y": [s] }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "divide-opacity": [{ "divide-opacity": [L] }],
                        "divide-style": [{ divide: $() }],
                        "border-color": [{ border: [o] }],
                        "border-color-x": [{ "border-x": [o] }],
                        "border-color-y": [{ "border-y": [o] }],
                        "border-color-t": [{ "border-t": [o] }],
                        "border-color-r": [{ "border-r": [o] }],
                        "border-color-b": [{ "border-b": [o] }],
                        "border-color-l": [{ "border-l": [o] }],
                        "divide-color": [{ divide: [o] }],
                        "outline-style": [{ outline: ["", ...$()] }],
                        "outline-offset": [{ "outline-offset": [m, k] }],
                        "outline-w": [{ outline: [m, h] }],
                        "outline-color": [{ outline: [e] }],
                        "ring-w": [{ ring: V() }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{ ring: [e] }],
                        "ring-opacity": [{ "ring-opacity": [L] }],
                        "ring-offset-w": [{ "ring-offset": [m, h] }],
                        "ring-offset-color": [{ "ring-offset": [e] }],
                        shadow: [{ shadow: ["", "inner", "none", E, M] }],
                        "shadow-color": [{ shadow: [j] }],
                        opacity: [{ opacity: [L] }],
                        "mix-blend": [{ "mix-blend": U() }],
                        "bg-blend": [{ "bg-blend": U() }],
                        filter: [{ filter: ["", "none"] }],
                        blur: [{ blur: [r] }],
                        brightness: [{ brightness: [n] }],
                        contrast: [{ contrast: [c] }],
                        "drop-shadow": [{ "drop-shadow": ["", "none", E, k] }],
                        grayscale: [{ grayscale: [d] }],
                        "hue-rotate": [{ "hue-rotate": [u] }],
                        invert: [{ invert: [f] }],
                        saturate: [{ saturate: [O] }],
                        sepia: [{ sepia: [A] }],
                        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
                        "backdrop-blur": [{ "backdrop-blur": [r] }],
                        "backdrop-brightness": [{ "backdrop-brightness": [n] }],
                        "backdrop-contrast": [{ "backdrop-contrast": [c] }],
                        "backdrop-grayscale": [{ "backdrop-grayscale": [d] }],
                        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
                        "backdrop-invert": [{ "backdrop-invert": [f] }],
                        "backdrop-opacity": [{ "backdrop-opacity": [L] }],
                        "backdrop-saturate": [{ "backdrop-saturate": [O] }],
                        "backdrop-sepia": [{ "backdrop-sepia": [A] }],
                        "border-collapse": [{ border: ["collapse", "separate"] }],
                        "border-spacing": [{ "border-spacing": [l] }],
                        "border-spacing-x": [{ "border-spacing-x": [l] }],
                        "border-spacing-y": [{ "border-spacing-y": [l] }],
                        "table-layout": [{ table: ["auto", "fixed"] }],
                        caption: [{ caption: ["top", "bottom"] }],
                        transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", k] }],
                        duration: [{ duration: J() }],
                        ease: [{ ease: ["linear", "in", "out", "in-out", k] }],
                        delay: [{ delay: J() }],
                        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", k] }],
                        transform: [{ transform: ["", "gpu", "none"] }],
                        scale: [{ scale: [D] }],
                        "scale-x": [{ "scale-x": [D] }],
                        "scale-y": [{ "scale-y": [D] }],
                        rotate: [{ rotate: [x, k] }],
                        "translate-x": [{ "translate-x": [z] }],
                        "translate-y": [{ "translate-y": [z] }],
                        "skew-x": [{ "skew-x": [I] }],
                        "skew-y": [{ "skew-y": [I] }],
                        "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", k] }],
                        accent: [{ accent: ["auto", e] }],
                        appearance: [{ appearance: ["none", "auto"] }],
                        cursor: [
                            {
                                cursor: [
                                    "auto",
                                    "default",
                                    "pointer",
                                    "wait",
                                    "text",
                                    "move",
                                    "help",
                                    "not-allowed",
                                    "none",
                                    "context-menu",
                                    "progress",
                                    "cell",
                                    "crosshair",
                                    "vertical-text",
                                    "alias",
                                    "copy",
                                    "no-drop",
                                    "grab",
                                    "grabbing",
                                    "all-scroll",
                                    "col-resize",
                                    "row-resize",
                                    "n-resize",
                                    "e-resize",
                                    "s-resize",
                                    "w-resize",
                                    "ne-resize",
                                    "nw-resize",
                                    "se-resize",
                                    "sw-resize",
                                    "ew-resize",
                                    "ns-resize",
                                    "nesw-resize",
                                    "nwse-resize",
                                    "zoom-in",
                                    "zoom-out",
                                    k,
                                ],
                            },
                        ],
                        "caret-color": [{ caret: [e] }],
                        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
                        resize: [{ resize: ["none", "y", "x", ""] }],
                        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
                        "scroll-m": [{ "scroll-m": Z() }],
                        "scroll-mx": [{ "scroll-mx": Z() }],
                        "scroll-my": [{ "scroll-my": Z() }],
                        "scroll-ms": [{ "scroll-ms": Z() }],
                        "scroll-me": [{ "scroll-me": Z() }],
                        "scroll-mt": [{ "scroll-mt": Z() }],
                        "scroll-mr": [{ "scroll-mr": Z() }],
                        "scroll-mb": [{ "scroll-mb": Z() }],
                        "scroll-ml": [{ "scroll-ml": Z() }],
                        "scroll-p": [{ "scroll-p": Z() }],
                        "scroll-px": [{ "scroll-px": Z() }],
                        "scroll-py": [{ "scroll-py": Z() }],
                        "scroll-ps": [{ "scroll-ps": Z() }],
                        "scroll-pe": [{ "scroll-pe": Z() }],
                        "scroll-pt": [{ "scroll-pt": Z() }],
                        "scroll-pr": [{ "scroll-pr": Z() }],
                        "scroll-pb": [{ "scroll-pb": Z() }],
                        "scroll-pl": [{ "scroll-pl": Z() }],
                        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
                        "snap-stop": [{ snap: ["normal", "always"] }],
                        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
                        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
                        touch: [{ touch: ["auto", "none", "manipulation"] }],
                        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
                        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
                        "touch-pz": ["touch-pinch-zoom"],
                        select: [{ select: ["none", "text", "all", "auto"] }],
                        "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", k] }],
                        fill: [{ fill: [e, "none"] }],
                        "stroke-w": [{ stroke: [m, h, v] }],
                        stroke: [{ stroke: [e, "none"] }],
                        sr: ["sr-only", "not-sr-only"],
                        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
                    },
                    conflictingClassGroups: {
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        size: ["w", "h"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        "line-clamp": ["display", "overflow"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"],
                        touch: ["touch-x", "touch-y", "touch-pz"],
                        "touch-x": ["touch"],
                        "touch-y": ["touch"],
                        "touch-pz": ["touch"],
                    },
                    conflictingClassGroupModifiers: { "font-size": ["leading"] },
                };
            });
        },
    },
]);
