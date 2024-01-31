export default {
  root: ({ props: e }) => ({
    class: [
      "relative",
      "flex",
      "rounded-md",
      "bg-surface-50 dark:bg-surface-700",
      "border border-surface-200 dark:border-surface-700",
      {
        "p-2 items-center": e.orientation == "horizontal",
        "flex-col sm:w-48 p-0 py-1": e.orientation !== "horizontal",
      },
    ],
  }),
  menu: ({ props: e }) => ({
    class: [
      "sm:flex",
      "items-center",
      "flex-wrap",
      "flex-col sm:flex-row",
      {
        hidden: !(e != null && e.mobileActive),
        flex: e == null ? void 0 : e.mobileActive,
      },
      "absolute sm:relative",
      "top-full left-0",
      "sm:top-auto sm:left-auto",
      "w-full sm:w-auto",
      "m-0",
      "py-1 sm:py-0 sm:p-0",
      "list-none",
      "shadow-md sm:shadow-none",
      "border-0",
      "bg-surface-0 dark:bg-surface-700 sm:bg-transparent dark:sm:bg-transparent",
      "outline-none",
    ],
  }),
  menuitem: ({ props: e }) => ({
    class: [
      "sm:relative static",
      { "sm:w-auto w-full": e.horizontal, "w-full": !e.horizontal },
    ],
  }),
  content: ({ props: e, context: r }) => ({
    class: [
      { "rounded-md": e.level < 1 && e.horizontal },
      {
        "text-surface-500 dark:text-white/70": !r.focused && !r.active,
        "text-surface-500 dark:text-white/70 bg-surface-200 dark:bg-surface-600/90":
          r.focused && !r.active,
        "text-primary-700 dark:text-surface-0/80 bg-primary-50 dark:bg-primary-400/30":
          r.focused && r.active,
        "text-primary-700 dark:text-surface-0/80 bg-primary-50 dark:bg-primary-400/30":
          !r.focused && r.active,
      },
      {
        "hover:bg-slate-100 dark:hover:bg-slate-600/80": !r.active,
        "hover:bg-primary-500/50 dark:hover:bg-primary-300/30 text-primary-100 dark:text-surface-0/80":
          r.active,
      },
      "transition-all",
      "duration-200",
    ],
  }),
  action: {
    class: [
      "relative",
      "flex",
      "items-center",
      "py-3",
      "px-5",
      "py-3 pr-5 pl-9 sm:pl-5",
      "leading-none",
      "select-none",
      "cursor-pointer",
      "no-underline ",
      "overflow-hidden",
    ],
  },
  icon: {
    class: "mr-2",
  },
  submenuicon: ({ props: e }) => ({
    class: [{ "ml-auto sm:ml-2": e.horizontal, "ml-auto": !e.horizontal }],
  }),
  panel: ({ props: e }) => ({
    class: [
      "w-auto",
      "py-1",
      "m-0",
      "shadow-none sm:shadow-md",
      "border-0",
      "bg-surface-0 dark:bg-surface-700",
      "static sm:absolute",
      "z-10",
      { "sm:left-full top-0": !e.horizontal },
    ],
  }),
  grid: {
    class: "flex flex-wrap sm:flex-nowrap",
  },
  column: {
    class: "w-full sm:w-1/2",
  },
  submenu: {
    class: ["m-0 list-none", "py-1 px-2 w-full sm:min-w-[14rem]"],
  },
  submenuheader: {
    class: [
      "font-semibold",
      "py-3 px-5",
      "m-0",
      "text-surface-700 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-700",
    ],
  },
  separator: {
    class: "border-t border-surface-200 dark:border-surface-600 my-1",
  },
  menubutton: {
    class: [
      "flex sm:hidden",
      "items-center justify-center",
      "w-8",
      "h-8",
      "rounded-full",
      "text-surface-500 dark:text-white/80",
      "hover:text-surface-600 dark:hover:text-white/60",
      "hover:bg-slate-100 dark:hover:bg-slate-600/80",
      "focus:outline-none focus:outline-offset-0",
      "focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50",
      "transition duration-200 ease-in-out",
      "cursor-pointer",
      "no-underline",
    ],
  },
  end: {
    class: "ml-auto self-center",
  },
};
