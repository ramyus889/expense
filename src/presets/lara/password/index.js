export default {
  root: ({ props: e }) => ({
    class: [
      "inline-flex relative",
      {
        "opacity-60 select-none pointer-events-none cursor-default": e.disabled,
      },
    ],
  }),
  panel: {
    class: [
      "p-5",
      "border-0 dark:border",
      "shadow-md rounded-md",
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-white/80",
      "dark:border-surface-700",
    ],
  },
  meter: {
    class: [
      "overflow-hidden",
      "relative",
      "border-0",
      "h-3",
      "mb-2",
      "bg-surface-100 dark:bg-surface-700",
    ],
  },
  meterlabel: ({ instance: e }) => {
    var r, t, o;
    return {
      class: [
        "h-full",
        {
          "bg-red-500 dark:bg-red-400/50":
            ((r = e == null ? void 0 : e.meter) == null
              ? void 0
              : r.strength) == "weak",
          "bg-orange-500 dark:bg-orange-400/50":
            ((t = e == null ? void 0 : e.meter) == null
              ? void 0
              : t.strength) == "medium",
          "bg-green-500 dark:bg-green-400/50":
            ((o = e == null ? void 0 : e.meter) == null
              ? void 0
              : o.strength) == "strong",
        },
        "transition-all duration-1000 ease-in-out",
      ],
    };
  },
  showicon: {
    class: [
      "absolute top-1/2 right-3 -mt-2",
      "text-surface-600 dark:text-white/70",
    ],
  },
  hideicon: {
    class: [
      "absolute top-1/2 right-3 -mt-2",
      "text-surface-600 dark:text-white/70",
    ],
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass:
      "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0",
  },
};
