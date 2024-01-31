export default {
  root: ({ props: e }) => ({
    class: [
      "flex",
      {
        "opacity-60 select-none pointer-events-none cursor-default": e.disabled,
      },
    ],
  }),
  container: ({ state: e }) => ({
    class: [
      "font-sans text-base leading-none",
      "flex items-center flex-wrap gap-2",
      "m-0 py-1.5 px-3",
      "w-full",
      "min-h-[2.877rem]",
      "list-none",
      "rounded-md",
      "text-surface-700 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-900",
      "border border-surface-300 dark:border-surface-700",
      "hover:border-primary-500 dark:hover:border-primary-400",
      "focus:outline-none focus:outline-offset-0",
      { "ring ring-primary-400/50 dark:ring-primary-300/50": e.focused },
      { "ring ring-primary-400/50 dark:ring-primary-300/50": e.hovered },
      "transition-colors duration-200",
      "cursor-text overflow-hidden",
      "appearance-none",
    ],
  }),
  inputtoken: {
    class: ["py-1.5 px-0", "inline-flex flex-auto"],
  },
  input: {
    class: [
      "font-sans text-base leading-[1.2]",
      "w-full",
      "p-0 m-0",
      "appearance-none rounded-none",
      "border-0 outline-none",
      "shadow-none",
      "text-surface-700 dark:text-white/80",
      "bg-transparent",
    ],
  },
  token: {
    class: [
      "inline-flex items-center",
      "py-1.5 px-3",
      "rounded-[1.14rem]",
      "text-surface-700 dark:text-white/70",
      "bg-slate-200 dark:bg-slate-700",
    ],
  },
  label: {
    class: "leading-5",
  },
  removeTokenIcon: {
    class: [
      "rounded-md leading-6",
      "ml-2",
      "w-4 h-4",
      "transition duration-200 ease-in-out",
      "cursor-pointer",
    ],
  },
};
