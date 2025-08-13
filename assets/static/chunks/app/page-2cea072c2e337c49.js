(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931],
    {
        1002: function (e, t, a) {
            Promise.resolve().then(a.bind(a, 8468));
        },
        8468: function (e, t, a) {
            "use strict";
            a.r(t),
                a.d(t, {
                    default: function () {
                        return K;
                    },
                });
            var s = a(2729),
                r = a(5465),
                n = a(4202),
                i = a(4291),
                l = a(4059),
                o = a(3360);
            function d() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                return (0, o.m6)((0, l.W)(t));
            }
            let c = (0,
                i.j)(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                    {
                        variants: {
                            variant: {
                                default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                                destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                                outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                                secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                                ghost: "hover:bg-accent hover:text-accent-foreground",
                                link: "text-primary underline-offset-4 hover:underline",
                            },
                            size: { default: "h-9 px-4 py-2", sm: "h-8 rounded-md px-3 text-xs", lg: "h-10 rounded-md px-8", icon: "h-9 w-9" },
                        },
                        defaultVariants: { variant: "default", size: "default" },
                    }
                ),
                m = r.forwardRef((e, t) => {
                    let { className: a, variant: r, size: i, asChild: l = !1, ...o } = e,
                        m = l ? n.g7 : "button";
                    return (0, s.jsx)(m, { className: d(c({ variant: r, size: i, className: a })), ref: t, ...o });
                });
            m.displayName = "Button";
            var u = a(6326),
                h = a(378),
                f = a(1328);
            let p = f.fC,
                x = f.xz;
            f.ZA,
                f.Uv,
                f.Tr,
                f.Ee,
                (r.forwardRef((e, t) => {
                    let { className: a, inset: r, children: n, ...i } = e;
                    return (0, s.jsxs)(f.fF, {
                        ref: t,
                        className: d("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", r && "pl-8", a),
                        ...i,
                        children: [n, (0, s.jsx)(u.XCv, { className: "ml-auto h-4 w-4" })],
                    });
                }).displayName = f.fF.displayName),
                (r.forwardRef((e, t) => {
                    let { className: a, ...r } = e;
                    return (0, s.jsx)(f.tu, {
                        ref: t,
                        className: d(
                            "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                            a
                        ),
                        ...r,
                    });
                }).displayName = f.tu.displayName);
            let g = r.forwardRef((e, t) => {
                let { className: a, sideOffset: r = 4, ...n } = e;
                return (0, s.jsx)(f.Uv, {
                    children: (0, s.jsx)(f.VY, {
                        ref: t,
                        sideOffset: r,
                        className: d(
                            "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
                            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                            a
                        ),
                        ...n,
                    }),
                });
            });
            g.displayName = f.VY.displayName;
            let b = r.forwardRef((e, t) => {
                let { className: a, inset: r, ...n } = e;
                return (0, s.jsx)(f.ck, {
                    ref: t,
                    className: d(
                        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                        r && "pl-8",
                        a
                    ),
                    ...n,
                });
            });
            function y() {
                let { setTheme: e } = (0, h.F)();
                return (0, s.jsxs)(p, {
                    children: [
                        (0, s.jsx)(x, {
                            asChild: !0,
                            children: (0, s.jsxs)(m, {
                                variant: "outline",
                                size: "icon",
                                children: [
                                    (0, s.jsx)(u.NWY, { className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
                                    (0, s.jsx)(u.kLh, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
                                    (0, s.jsx)("span", { className: "sr-only", children: "Toggle theme" }),
                                ],
                            }),
                        }),
                        (0, s.jsxs)(g, { align: "end", children: [(0, s.jsx)(b, { onClick: () => e("light"), children: "Light" }), (0, s.jsx)(b, { onClick: () => e("dark"), children: "Dark" })] }),
                    ],
                });
            }
            (b.displayName = f.ck.displayName),
                (r.forwardRef((e, t) => {
                    let { className: a, children: r, checked: n, ...i } = e;
                    return (0, s.jsxs)(f.oC, {
                        ref: t,
                        className: d(
                            "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                            a
                        ),
                        checked: n,
                        ...i,
                        children: [(0, s.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: (0, s.jsx)(f.wU, { children: (0, s.jsx)(u.nQG, { className: "h-4 w-4" }) }) }), r],
                    });
                }).displayName = f.oC.displayName),
                (r.forwardRef((e, t) => {
                    let { className: a, children: r, ...n } = e;
                    return (0, s.jsxs)(f.Rk, {
                        ref: t,
                        className: d(
                            "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                            a
                        ),
                        ...n,
                        children: [(0, s.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: (0, s.jsx)(f.wU, { children: (0, s.jsx)(u.jXb, { className: "h-4 w-4 fill-current" }) }) }), r],
                    });
                }).displayName = f.Rk.displayName),
                (r.forwardRef((e, t) => {
                    let { className: a, inset: r, ...n } = e;
                    return (0, s.jsx)(f.__, { ref: t, className: d("px-2 py-1.5 text-sm font-semibold", r && "pl-8", a), ...n });
                }).displayName = f.__.displayName),
                (r.forwardRef((e, t) => {
                    let { className: a, ...r } = e;
                    return (0, s.jsx)(f.Z0, { ref: t, className: d("-mx-1 my-1 h-px bg-muted", a), ...r });
                }).displayName = f.Z0.displayName);
            var v = a(7478);
            let j = r.forwardRef((e, t) => {
                let { className: a, ...r } = e;
                return (0, s.jsx)(v.fC, { ref: t, className: d("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", a), ...r });
            });
            j.displayName = v.fC.displayName;
            let w = r.forwardRef((e, t) => {
                let { className: a, ...r } = e;
                return (0, s.jsx)(v.Ee, { ref: t, className: d("aspect-square h-full w-full", a), ...r });
            });
            w.displayName = v.Ee.displayName;
            let N = r.forwardRef((e, t) => {
                let { className: a, ...r } = e;
                return (0, s.jsx)(v.NY, { ref: t, className: d("flex h-full w-full items-center justify-center rounded-full bg-muted", a), ...r });
            });
            N.displayName = v.NY.displayName;
            var k = a(5853),
                D = a(1201),
                C = a(4352),
                z = a(7099);
            let S = z.zt,
                A = z.fC,
                R = z.xz,
                E = r.forwardRef((e, t) => {
                    let { className: a, sideOffset: r = 4, ...n } = e;
                    return (0, s.jsx)(z.VY, {
                        ref: t,
                        sideOffset: r,
                        className: d(
                            "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                            a
                        ),
                        ...n,
                    });
                });
            E.displayName = z.VY.displayName;
            var T = a(5945);
            let F = r.createContext(null);
            function I() {
                let e = r.useContext(F);
                if (!e) throw Error("useCarousel must be used within a <Carousel />");
                return e;
            }
            let M = r.forwardRef((e, t) => {
                let { orientation: a = "horizontal", opts: n, setApi: i, plugins: l, className: o, children: c, ...m } = e,
                    [u, h] = (0, T.Z)({ ...n, axis: "horizontal" === a ? "x" : "y" }, l),
                    [f, p] = r.useState(!1),
                    [x, g] = r.useState(!1),
                    b = r.useCallback((e) => {
                        e && (p(e.canScrollPrev()), g(e.canScrollNext()));
                    }, []),
                    y = r.useCallback(() => {
                        null == h || h.scrollPrev();
                    }, [h]),
                    v = r.useCallback(() => {
                        null == h || h.scrollNext();
                    }, [h]),
                    j = r.useCallback(
                        (e) => {
                            "ArrowLeft" === e.key ? (e.preventDefault(), y()) : "ArrowRight" === e.key && (e.preventDefault(), v());
                        },
                        [y, v]
                    );
                return (
                    r.useEffect(() => {
                        h && i && i(h);
                    }, [h, i]),
                    r.useEffect(() => {
                        if (h)
                            return (
                                b(h),
                                h.on("reInit", b),
                                h.on("select", b),
                                () => {
                                    null == h || h.off("select", b);
                                }
                            );
                    }, [h, b]),
                    (0, s.jsx)(F.Provider, {
                        value: { carouselRef: u, api: h, opts: n, orientation: a || ((null == n ? void 0 : n.axis) === "y" ? "vertical" : "horizontal"), scrollPrev: y, scrollNext: v, canScrollPrev: f, canScrollNext: x },
                        children: (0, s.jsx)("div", { ref: t, onKeyDownCapture: j, className: d("relative", o), role: "region", "aria-roledescription": "carousel", ...m, children: c }),
                    })
                );
            });
            M.displayName = "Carousel";
            let O = r.forwardRef((e, t) => {
                let { className: a, ...r } = e,
                    { carouselRef: n, orientation: i } = I();
                return (0, s.jsx)("div", { ref: n, className: "overflow-hidden", children: (0, s.jsx)("div", { ref: t, className: d("flex", a), ...r }) });
            });
            O.displayName = "CarouselContent";
            let Y = r.forwardRef((e, t) => {
                let { className: a, ...r } = e,
                    { orientation: n } = I();
                return (0, s.jsx)("div", { ref: t, role: "group", "aria-roledescription": "slide", className: d("min-w-0 shrink-0 grow-0 basis-full", a), ...r });
            });
            Y.displayName = "CarouselItem";
            var B = a(701),
                P = a(6623);
            let L = r.forwardRef((e, t) => {
                let { className: a, children: r, ...n } = e;
                return (0, s.jsxs)(P.fC, { ref: t, className: d("relative overflow-hidden", a), ...n, children: [(0, s.jsx)(P.l_, { className: "h-full w-full rounded-[inherit]", children: r }), (0, s.jsx)(_, {}), (0, s.jsx)(P.Ns, {})] });
            });
            L.displayName = P.fC.displayName;
            let _ = r.forwardRef((e, t) => {
                let { className: a, orientation: r = "vertical", ...n } = e;
                return (0, s.jsx)(P.gb, {
                    ref: t,
                    orientation: r,
                    className: d("flex touch-none select-none transition-colors", "vertical" === r && "h-full w-2.5 border-l border-l-transparent p-[1px]", "horizontal" === r && "h-2.5 flex-col border-t border-t-transparent p-[1px]", a),
                    ...n,
                    children: (0, s.jsx)(P.q4, { className: "relative flex-1 rounded-full bg-border" }),
                });
            });
            _.displayName = P.gb.displayName;
            let U = [
                { time: "August 2026", title: "🚀 APIWAY – Exclusive API Solutions", body: "APIWAY — A dedicated platform that brings together all API solutions developed by our company, designed for developers and businesses seeking reliability and performance. No third-party vendors — only high-performance, thoroughly tested APIs created by our own team. Users can choose a plan that suits their needs and start using it instantly. With secure payments, detailed usage analytics, and a scalable architecture, APIWAY delivers a premium API experience." },
                { time: "July 2024", title: "🇬🇧 A company application for cy4udev has been submitted in the United Kingdom", body: "Limited company application has been made in the UK and now cy4udev is officially a company operating in the UK." },
                { time: "July 2023", title: "\uD83C\uDF08 Founded an business named cy4udev", body: "This is my second small business venture. As a freelance developer, I opened this company because I wanted to operate under my company name again. Now I do everything I receive and complete under the name cy4udev." },
                { time: "August 2021", title: "💼 Founder & Back-End Developer at Eventteyiz", body: "With the end of Covid-19, I developed a project where people can search for events and discover places to have fun. This project ended because it did not progress as efficiently as I wanted." },
                { time: "July 2021", title: "💼 Back-End Developer at GopCity", body: "We develop joint projects periodically." },
                { time: "August 2020", title: "\uD83D\uDE9A Moved to Istanbul, Turkiye", body: "I started the open education Public Relations and Publicity department at Erzurum Ataturk University and I will graduate in 2024 (I think)." },
                {
                    time: "Jan 2020",
                    title: "\uD83C\uDF08 Founded an business named CyAjans",
                    body:
                        "It was my first small business venture. As a freelance developer, I wanted to operate under my company name. However, things didn't work out as planned, and I closed CyAjans in 2021.",
                },
                { time: "August 2019", title: "\uD83D\uDE9A Moved to Fethiye/Mugla, Turkiye", body: "I started studying Tourism and Travel at Fethiye Ali Sitki Mefharet Kocman University for pleasure, but left before graduating." },
                { time: "June 2018", title: "\uD83C\uDF93 Graduated from high school", body: "" },
                { time: "July 2014", title: "\uD83C\uDFC1 Launched my first website", body: "I published my personal site." },
                { time: "July 1999", title: "\uD83D\uDC76 Born in Istanbul, Turkiye", body: "Welcomed to the world on 5th of July, 1999." },
            ],
                J = (e) => {
                    let t = e.split(" "),
                        a = t[1],
                        s = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].indexOf(t[0]) + 1;
                    return "".concat(a, "-").concat(s.toString().padStart(2, "0"));
                };
            var G = () => {
                let e = U.sort((e, t) => J(t.time).localeCompare(J(e.time)));
                return (0, s.jsx)("div", {
                    className: "flex flex-col items-center justify-center",
                    children: (0, s.jsx)(L, {
                        className: "h-[500px] w-full rounded-md border border-border p-4",
                        children: (0, s.jsx)(B.TY, {
                            children: e.map((e, t) =>
                                (0, s.jsx)(
                                    B.TY.Item,
                                    {
                                        children: (0, s.jsxs)(B.TY.Content, {
                                            children: [
                                                (0, s.jsx)(B.TY.Point, {}),
                                                (0, s.jsx)(B.TY.Time, { children: e.time }),
                                                (0, s.jsx)(B.TY.Title, { children: e.title }),
                                                (0, s.jsxs)(B.TY.Body, {
                                                    children: [
                                                        e.body,
                                                        e.links &&
                                                        (0, s.jsx)("div", {
                                                            className: "flex items-center space-x-2 mt-2",
                                                            children: e.links.map((e, t) => (0, s.jsx)("a", { href: e.url, className: "text-primary hover:underline", children: e.title }, t)),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    },
                                    t
                                )
                            ),
                        }),
                    }),
                });
            },
                Z = a(112),
                W = a(1832),
                V = a(4831),
                q = a(1977),
                H = a(1472),
                Youtube = a(5000),
                bWebsite = a(6000),
                bTelegram = a(7000);

            function K() {
                let { theme: e } = (0, h.F)(),
                    [t, a] = (0, r.useState)(),
                    n = (0, H.iP)(),
                    i = (e) => {
                        t && t.scrollTo(e);
                    },
                    [l, o] = (0, r.useState)([
                        (0, s.jsx)(k.bs, {
                            children: (0, s.jsxs)("span", {
                                className: "text-muted-foreground text-wrap",
                                children: [
                                    "Type a command and hit enter key. Available commands are:",
                                    " ",
                                    (0, s.jsx)("span", { className: "text-destructive", children: "about" }),
                                    ",",
                                    " ",
                                    (0, s.jsx)("span", { className: "text-destructive", children: "contact" }),
                                    ",",
                                    " ",
                                    (0, s.jsx)("span", { className: "text-destructive", children: "cy4udev" }),
                                    ",",
                                    " ",
                                     (0, s.jsx)("span", { className: "text-destructive", children: "apiway" }),
                                    ",",
                                    " ",
                                    (0, s.jsx)("span", { className: "text-destructive", children: "clear" }),
                                    ",",
                                    " ",
                                    (0, s.jsx)("span", { className: "text-destructive", children: "help" }),
                                    " ",
                                ],
                            }),
                        }),
                    ]);
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)("main", {
                        className: "flex flex-col items-center h-screen",
                        children: [
                            (0, s.jsxs)("header", {
                                className: "flex justify-between pt-4 pb-2 pr-4 md:pr-0 border-b border-b-input w-full md:w-3/4",
                                children: [
                                    (0, s.jsx)(m, {
                                        variant: "ghost",
                                        className: " py-6",
                                        children: (0, s.jsxs)("div", {
                                            className: "flex items-center gap-2 ",
                                            children: [
                                                (0, s.jsxs)(j, { children: [(0, s.jsx)(w, { alt: "canyesilyurt", src: "https://canyesilyurt.com/assets/static/images/photo.jpeg" }), (0, s.jsx)(N, { children: "CY" })] }),
                                                (0, s.jsxs)("div", {
                                                    className: "flex flex-col gap-[1px] text-left",
                                                    children: [
                                                        (0, s.jsx)("small", { className: "text-sm font-medium leading-none", children: "Can Yesilyurt" }),
                                                        (0, s.jsx)("p", { className: "text-sm text-muted-foreground", children: "Back-End Developer" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, s.jsx)(y, {}),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: "justify-between flex flex-col w-full md:w-3/4 x h-full bg-card mt-4",
                                children: [
                                    (0, s.jsx)(M, {
                                        setApi: a,
                                        children: (0, s.jsxs)(O, {
                                            children: [
                                                (0, s.jsx)(Y, {
                                                    children: (0, s.jsx)(k.ZP, {
                                                        name: "canyesilyurt",
                                                        height: "".concat(n.height - 300, "px"),
                                                        colorMode: "dark" === e ? k.UX.Dark : k.UX.Light,
                                                        redBtnCallback: () => {
                                                            i(1);
                                                        },
                                                        yellowBtnCallback: () => {
                                                            i(1);
                                                        },
                                                        greenBtnCallback: () => {
                                                            o([...l, (0, s.jsx)(k.bs, { children: (0, s.jsx)("span", { className: "text-primary", children: "This function is not available yet." }) })]);
                                                        },
                                                        onInput: (e) => {
                                                            switch (e) {
                                                                case "about":
                                                                    o([
                                                                        ...l,
                                                                        (0, s.jsx)(k.bs, {
                                                                            children: (0, s.jsx)("div", {
                                                                                className: " text-wrap text-primary",
                                                                                children:
                                                                                    "Hello! I'm Can, a backend developer based in Turkey. I specialize in Node.js, TypeScript, JavaScript, PHP, Express.js, and MongoDB. My focus is on user-centric digital solutions, aiming to enhance product value and improve user experience.",
                                                                            }),
                                                                        }),
                                                                    ]);
                                                                    break;
                                                                case "ls":
                                                                    o([...l, (0, s.jsx)(k.bs, { children: "What is your point man?" })]);
                                                                    break;
                                                                case "cy4udev":
                                                                let countdown = 5;

                                                                o([
                                                                    ...l,
                                                                    (0, s.jsx)(k.bs, {
                                                                        children: (0, s.jsx)("div", {
                                                                            className: " text-wrap text-primary",
                                                                            children:
                                                                                `💎 I knew you wanted me! now we're going with you in ${countdown} seconds!`,
                                                                        }),
                                                                    }),
                                                                ]);

                                                                const intervalId = setInterval(() => {
                                                                    countdown -= 1;

                                                                    o([
                                                                        ...l,
                                                                        (0, s.jsx)(k.bs, {
                                                                            children: (0, s.jsx)("div", {
                                                                                className: " text-wrap text-primary",
                                                                                children:
                                                                                    `💎 I knew you wanted me! now we're going with you in ${countdown} seconds!`,
                                                                            }),
                                                                        }),
                                                                    ]);
                                                                    if (countdown <= 0) {
                                                                        clearInterval(intervalId);
                                                                        // window.open('https://cy4u.dev', '_blank'); // Yeni sekme aç
                                                                        window.location.href = 'https://cy4u.dev';
                                                                    }
                                                                }, 1000); 
                                                                    break;
                                                                    case "apiway":
                                                                let apiwaycountdown = 5;

                                                                o([
                                                                    ...l,
                                                                    (0, s.jsx)(k.bs, {
                                                                        children: (0, s.jsx)("div", {
                                                                            className: " text-wrap text-primary",
                                                                            children:
                                                                                `💎 I knew you wanted me! now we're going with you in ${apiwaycountdown} seconds!`,
                                                                        }),
                                                                    }),
                                                                ]);

                                                                const apiwayintervalId = setInterval(() => {
                                                                    countdown -= 1;

                                                                    o([
                                                                        ...l,
                                                                        (0, s.jsx)(k.bs, {
                                                                            children: (0, s.jsx)("div", {
                                                                                className: " text-wrap text-primary",
                                                                                children:
                                                                                    `💎 I knew you wanted me! now we're going with you in ${countdown} seconds!`,
                                                                            }),
                                                                        }),
                                                                    ]);
                                                                    if (apiwaycountdown <= 0) {
                                                                        clearInterval(apiwayintervalId);
                                                                        window.location.href = 'https://apiway.io';
                                                                    }
                                                                }, 1000); 
                                                                    break;
                                                                case "x":
                                                                    o([
                                                                        ...l,
                                                                        (0, s.jsx)(k.bs, {
                                                                            children: (0, s.jsx)("span", {
                                                                                className: "text-primary text-wrap ",
                                                                                children: (0, s.jsxs)("a", {
                                                                                    className: "text-underline",
                                                                                    href: "https://x.com/shcansh",
                                                                                    target: "_blank",
                                                                                    children: ["You caught me! Click for the", (0, s.jsxs)("span", { className: "text-destructive", children: [" ", "surprise"] }),],
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    ]);
                                                                    break;
                                                                case "twitter":
                                                                    o([
                                                                        ...l,
                                                                        (0, s.jsx)(k.bs, {
                                                                            children: (0, s.jsx)("span", {
                                                                                className: "text-primary text-wrap ",
                                                                                children: (0, s.jsxs)("a", {
                                                                                    className: "text-underline",
                                                                                    href: "https://x.com/shcansh",
                                                                                    target: "_blank",
                                                                                    children: ["You caught me! Click for the", (0, s.jsxs)("span", { className: "text-destructive", children: [" ", "surprise"] }),],
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    ]);
                                                                    break;
                                                                case "youtube":
                                                                    o([
                                                                        ...l,
                                                                        (0, s.jsx)(k.bs, {
                                                                            children: (0, s.jsx)("span", {
                                                                                className: "text-primary text-wrap ",
                                                                                children: (0, s.jsxs)("a", {
                                                                                    className: "text-underline",
                                                                                    href: "https://www.youtube.com/@janyesilyurt",
                                                                                    target: "_blank",
                                                                                    children: ["You caught me! Click for the", (0, s.jsxs)("span", { className: "text-destructive", children: [" ", "surprise"] }),],
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    ]);
                                                                    break;
                                                                case "linkedin":
                                                                    o([
                                                                        ...l,
                                                                        (0, s.jsx)(k.bs, {
                                                                            children: (0, s.jsx)("span", {
                                                                                className: "text-primary text-wrap ",
                                                                                children: (0, s.jsxs)("a", {
                                                                                    className: "text-underline",
                                                                                    href: "https://www.linkedin.com/in/canyesilyurt/",
                                                                                    target: "_blank",
                                                                                    children: ["You caught me! Click for the", (0, s.jsxs)("span", { className: "text-destructive", children: [" ", "surprise"] }),],
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    ]);
                                                                    break;
                                                                case "help":
                                                                    o([
                                                                        ...l,
                                                                        (0, s.jsx)(k.bs, {
                                                                            children: (0, s.jsxs)("span", {
                                                                                className: "text-destructive text-wrap",
                                                                                children: [
                                                                                    "Available commands are:",
                                                                                    " ",
                                                                                    (0, s.jsx)("span", { className: "text-primary", children: "about" }),
                                                                                    ",",
                                                                                    " ",
                                                                                    (0, s.jsx)("span", { className: "text-primary", children: "contact" }),
                                                                                    ",",
                                                                                    " ",
                                                                                    (0, s.jsx)("span", { className: "text-primary", children: "cy4udev" }),
                                                                                    ",",
                                                                                    " ",
                                                                                     (0, s.jsx)("span", { className: "text-primary", children: "apiway" }),
                                                                                    ",",
                                                                                    " ",
                                                                                    (0, s.jsx)("span", { className: "text-primary", children: "clear" }),
                                                                                    ",",
                                                                                    " ",
                                                                                    (0, s.jsx)("span", { className: "text-primary", children: "help" }),
                                                                                    " ",
                                                                                ],
                                                                            }),
                                                                        }),
                                                                    ]);
                                                                    break;
                                                                case "clear":
                                                                    o([]);
                                                                    break;
                                                                case "contact":
                                                                    o([
                                                                        ...l,
                                                                        (0, s.jsx)(k.bs, {
                                                                            children: (0, s.jsxs)("span", {
                                                                                className: "text-destructive",
                                                                                children: [
                                                                                    "You can reach me via",
                                                                                    " ",
                                                                                    (0, s.jsx)("a", { href: "mailto:hello@canyesilyurt.com", className: "text-primary underline hover:text-destructive-hover", children: "email" }),
                                                                                    ".",
                                                                                ],
                                                                            }),
                                                                        }),
                                                                    ]);
                                                                    break;

                                                                default:
                                                                    o([...l, (0, s.jsx)(k.bs, { children: (0, s.jsxs)("span", { className: "text-muted-foreground", children: ["Command not found: ", e] }) })]);
                                                            }
                                                        },
                                                        children: l,
                                                    }),
                                                }),
                                                (0, s.jsx)(Y, { children: (0, s.jsx)(G, {}) }),
                                                (0, s.jsx)(Y, {
                                                    children: (0, s.jsx)("div", {
                                                        className: " bg-card w-full h-full flex flex-col justify-start md:justify-center md:items-center",
                                                        children: (0, s.jsxs)("div", {
                                                            className: "text-md font-bold grid grid-cols-1 sm:grid-cols-2 gap-4  ",
                                                            children: [
                                                                /*  (0, s.jsxs)("a", {
                                                                     className: "flex items-center gap-2 p-4 border border-input shadow-sm rounded-md hover:text-primary-hover  transition-all",
                                                                     href: "https://x.com/shcansh",
                                                                     target: "_blank",
                                                                     children: [
                                                                         (0, s.jsx)(Z.Z, { size: 32 }),
                                                                         (0, s.jsxs)("div", {
                                                                             className: "ml-2 flex flex-col items-start",
                                                                             children: [
                                                                                 (0, s.jsx)("span", { children: "@shcansh" }),
                                                                                 (0, s.jsx)("span", { className: " text-sm font-normal", children: "I post about development and life." }),
                                                                             ],
                                                                         }),
                                                                     ],
                                                                 }),
                                                                 (0, s.jsxs)("a", {
                                                                     className: "flex items-center gap-2 p-4 border border-input shadow-sm rounded-md hover:text-primary-hover transition-all",
                                                                     href: "https://www.youtube.com/c/yourchannel",
                                                                     target: "_blank",
                                                                     children: [
                                                                         (0, s.jsx)(Youtube.Z, { size: 32 }), // YouTube icon
                                                                         (0, s.jsxs)("div", {
                                                                             className: "ml-2 flex flex-col items-start",
                                                                             children: [
                                                                                 (0, s.jsx)("span", { children: "Your YouTube Channel" }),
                                                                                 (0, s.jsx)("span", { className: "text-sm font-normal", children: "Watch my videos" }),
                                                                             ],
                                                                         }),
                                                                     ],
                                                                 }), */

                                                                  (0, s.jsxs)("a", {
                                                                     className: "flex items-center gap-2 p-4 border border-input shadow-sm rounded-md hover:text-primary-hover  transition-all",
                                                                     href: "https://x.com/shcansh",
                                                                     target: "_blank",
                                                                     children: [
                                                                         (0, s.jsx)(Z.Z, { size: 32 }),
                                                                         (0, s.jsxs)("div", {
                                                                             className: "ml-2 flex flex-col items-start",
                                                                             children: [
                                                                                 (0, s.jsx)("span", { children: "@shcansh" }),
                                                                                 (0, s.jsx)("span", { className: " text-sm font-normal", children: "I post about development and life." }),
                                                                             ],
                                                                         }),
                                                                     ],
                                                                 }),
                                                                (0, s.jsxs)("a", {
                                                                    className: "flex items-center gap-2 p-4 border border-input shadow-sm rounded-md hover:text-primary-hover  transition-all",
                                                                    href: "https://www.linkedin.com/in/canyesilyurt/",
                                                                    target: "_blank",
                                                                    children: [
                                                                        (0, s.jsx)(W.Z, { size: 32 }),
                                                                        (0, s.jsxs)("div", {
                                                                            className: "ml-2 flex flex-col items-start",
                                                                            children: [(0, s.jsx)("span", { children: "canyesilyurt" }), (0, s.jsx)("span", { className: " text-sm font-normal", children: "Professional network" })],
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, s.jsxs)("a", {
                                                                    className: "flex items-center gap-2 p-4 border border-input shadow-sm rounded-md hover:text-primary-hover  transition-all",
                                                                    href: "https://www.github.com/cy4udev",
                                                                    target: "_blank",
                                                                    children: [
                                                                        (0, s.jsx)(V.Z, { size: 32 }),
                                                                        (0, s.jsxs)("div", {
                                                                            className: "ml-2 flex flex-col items-start",
                                                                            children: [(0, s.jsx)("span", { children: "cy4udev" }), (0, s.jsx)("span", { className: " text-sm font-normal", children: "Open source projects" })],
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, s.jsxs)("a", {
                                                                    className: "flex items-center gap-2 p-4 border border-input shadow-sm rounded-md hover:text-primary-hover transition-all",
                                                                    href: "https://cy4u.dev",
                                                                    target: "_blank",
                                                                    children: [
                                                                        (0, s.jsx)(bWebsite.Z, { size: 32 }),
                                                                        (0, s.jsxs)("div", {
                                                                            className: "ml-2 flex flex-col items-start",
                                                                            children: [
                                                                                (0, s.jsx)("span", { children: "cy4udev" }),
                                                                                (0, s.jsx)("span", { className: "text-sm font-normal", children: "Business website" }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, s.jsxs)("a", {
                                                                    className: "flex items-center gap-2 p-4 border border-input shadow-sm rounded-md hover:text-primary-hover  transition-all",
                                                                    href: "https://www.linkedin.com/company/cy4udev/",
                                                                    target: "_blank",
                                                                    children: [
                                                                        (0, s.jsx)(W.Z, { size: 32 }),
                                                                        (0, s.jsxs)("div", {
                                                                            className: "ml-2 flex flex-col items-start",
                                                                            children: [(0, s.jsx)("span", { children: "cy4udev" }), (0, s.jsx)("span", { className: " text-sm font-normal", children: "Business page" })],
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, s.jsxs)("a", {
                                                                    className: "flex items-center gap-2 p-4 border border-input shadow-sm rounded-md hover:text-primary-hover transition-all",
                                                                    href: "https://t.me/cy4udev",
                                                                    target: "_blank",
                                                                    children: [
                                                                        (0, s.jsx)(bTelegram.Z, { size: 32 }),
                                                                        (0, s.jsxs)("div", {
                                                                            className: "ml-2 flex flex-col items-start",
                                                                            children: [
                                                                                (0, s.jsx)("span", { children: "cy4udev" }),
                                                                                (0, s.jsx)("span", { className: "text-sm font-normal", children: "Telegram channel" }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, s.jsxs)("a", {
                                                                    className: "flex items-center gap-2 p-4 border border-input shadow-sm rounded-md hover:text-primary-hover transition-all",
                                                                    href: "https://www.youtube.com/@cy4udev",
                                                                    target: "_blank",
                                                                    children: [
                                                                        (0, s.jsx)(Youtube.Z, { size: 32 }),
                                                                        (0, s.jsxs)("div", {
                                                                            className: "ml-2 flex flex-col items-start",
                                                                            children: [
                                                                                (0, s.jsx)("span", { children: "cy4udev" }),
                                                                                (0, s.jsx)("span", { className: "text-sm font-normal", children: "Youtube channel" }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                               



                                                            ],
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, s.jsx)("div", {
                                        className: "fixed bottom-0 left-0 w-full",
                                        children: (0, s.jsxs)("footer", {
                                            className: " mb-6 w-full flex transition-all justify-center",
                                            children: [
                                                (0, s.jsx)(S, {
                                                    children: (0, s.jsxs)(A, {
                                                        children: [
                                                            (0, s.jsx)(R, { children: (0, s.jsx)(m, { variant: "ghost", onClick: () => i(0), children: (0, s.jsx)(D.Z, { size: 36, className: "hover:scale-125" }) }) }),
                                                            (0, s.jsx)(E, { className: "mb-4", children: (0, s.jsx)("p", { children: "Open a terminal" }) }),
                                                        ],
                                                    }),
                                                }),
                                                (0, s.jsx)(S, {
                                                    children: (0, s.jsxs)(A, {
                                                        children: [
                                                            (0, s.jsx)(R, { children: (0, s.jsx)(m, { onClick: () => i(1), variant: "ghost", className: " hover:scale-125", children: (0, s.jsx)(C.Z, { size: 36 }) }) }),
                                                            (0, s.jsx)(E, { className: "mb-4", children: (0, s.jsx)("p", { children: "Journey" }) }),
                                                        ],
                                                    }),
                                                }),
                                                (0, s.jsx)(S, {
                                                    children: (0, s.jsxs)(A, {
                                                        children: [
                                                            (0, s.jsx)(R, { children: (0, s.jsx)(m, { onClick: () => i(2), variant: "ghost", className: " hover:scale-125", children: (0, s.jsx)(q.Z, { size: 36 }) }) }),
                                                            (0, s.jsx)(E, { className: "mb-4", children: (0, s.jsx)("p", { children: "Socials" }) }),
                                                        ],
                                                    }),
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            }
        },
    },
    function (e) {
        e.O(0, [324, 492, 545, 843, 646, 701, 744], function () {
            return e((e.s = 1002));
        }),
            (_N_E = e.O());
    },
]);
