export default {
  root: {
    class: [
      "min-w-[12rem]",
      "rounded-md",
      "py-2",
      "bg-surface-0 dark:bg-surface-700",
      "text-surface-700 dark:text-white/80",
      "border border-surface-200 dark:border-surface-700",
    ],
  },
  menu: {
    class: ["list-none", "m-0", "p-0", "outline-none"],
  },
  content: ({ context: e }) => ({
    class: [
      "rounded-none",
      "text-surface-700 dark:text-white/80",
      {
        "bg-surface-200 text-surface-700 dark:bg-surface-300/10 dark:text-white":
          e.focused,
      },
      "transition-shadow",
      "duration-200",
      "hover:text-surface-700 dark:hover:text-white/80",
      "hover:bg-slate-100 dark:bg-surface-700 dark:hover:bg-slate-400/10",
    ],
  }),
  action: {
    class: [
      "relative",
      "flex",
      "items-center",
      "py-3",
      "px-5",
      "text-surface-700 dark:text-white/80",
      "no-underline",
      "overflow-hidden",
      "cursor-pointer",
      "select-none",
    ],
  },
  icon: {
    class: ["mr-2", "text-surface-600 dark:text-white/70"],
  },
  label: {
    class: ["leading-none"],
  },
  submenuheader: {
    class: [
      "font-bold",
      "m-0",
      "py-3 px-5",
      "rounded-tl-none",
      "rounded-tr-none",
      "bg-surface-0 dark:bg-surface-700",
      "text-surface-700 dark:text-white",
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
