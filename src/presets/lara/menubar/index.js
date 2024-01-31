export default {
  root: {
    class: [
      "relative",
      "flex",
      "items-center",
      "p-2",
      "rounded-md",
      "bg-surface-50 dark:bg-surface-700",
      "border border-surface-200 dark:border-surface-700",
    ],
  },
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
      "bg-surface-0 dark:bg-surface-700 sm:bg-transparent",
      "outline-none",
    ],
  }),
  menuitem: {
    class: "sm:relative sm:w-auto w-full static",
  },
  content: ({ props: e, context: r }) => ({
    class: [
      { "rounded-md": e.root },
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
        "hover:bg-primary-500/50 dark:hover:bg-primary-300/30 text-primary-700 dark:text-surface-0/80":
          r.active,
      },
      "transition-all",
      "duration-200",
    ],
  }),
  action: ({ context: e }) => ({
    class: [
      "relative",
      "flex",
      "items-center",
      "py-3",
      "px-5",
      { "pl-9 sm:pl-5": e.level === 1, "pl-14 sm:pl-5": e.level === 2 },
      "leading-none",
      "select-none",
      "cursor-pointer",
      "no-underline ",
      "overflow-hidden",
    ],
  }),
  icon: {
    class: "mr-2",
  },
  submenuicon: ({ props: e }) => ({
    class: [{ "ml-auto sm:ml-2": e.root, "ml-auto": !e.root }],
  }),
  submenu: ({ props: e }) => ({
    class: [
      "w-full sm:w-48",
      "py-1",
      "m-0",
      "list-none",
      "shadow-none sm:shadow-md",
      "border-0",
      "static sm:absolute",
      "z-10",
      { "sm:absolute sm:left-full sm:top-0": e.level > 1 },
      "bg-surface-0 dark:bg-surface-700",
    ],
  }),
  separator: {
    class: "border-t border-surface-200 dark:border-surface-600 my-1",
  },
  button: {
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
