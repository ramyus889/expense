export default {
  root: {
    class: [
      "min-w-[12rem]",
      "rounded-md",
      "bg-surface-0 dark:bg-surface-800",
      "text-surface-700 dark:text-white/80",
      "border border-surface-200 dark:border-surface-600",
    ],
  },
  wrapper: {
    class: ["overflow-auto"],
  },
  list: {
    class: "py-3 list-none m-0",
  },
  item: ({ context: e }) => ({
    class: [
      "font-normal",
      "leading-none",
      "relative",
      "border-0",
      "rounded-none",
      "m-0",
      "py-3 px-5",
      { "text-surface-700 dark:text-white/80": !e.focused && !e.selected },
      {
        "bg-surface-200 dark:bg-surface-600/60 text-surface-700 dark:text-white/80":
          e.focused && !e.selected,
      },
      {
        "bg-primary-100 dark:bg-primary-400/40 text-primary-700 dark:text-white/80":
          e.focused && e.selected,
      },
      {
        "bg-primary-50 dark:bg-primary-400/40 text-primary-700 dark:text-white/80":
          !e.focused && e.selected,
      },
      {
        "hover:bg-green-800 dark:hover:bg-green-800": !e.focused && !e.selected,
      },
      {
        "hover:text-surface-700 hover:bg-green-800 dark:hover:text-white dark:hover:bg-green-800":
          e.focused && !e.selected,
      },
      "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50",
      "transition-shadow",
      "duration-200",
      "cursor-pointer",
      "overflow-hidden",
      "whitespace-nowrap",
    ],
  }),
  itemgroup: {
    class: [
      "font-bold",
      "m-0",
      "py-3 px-5",
      "text-surface-800 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-600/80",
      "cursor-auto",
    ],
  },
  header: {
    class: [
      "py-3 px-5",
      "m-0",
      "border-b",
      "rounded-tl-md",
      "rounded-tr-md",
      "text-surface-700 dark:text-white/80",
      "bg-surface-100 dark:bg-surface-800",
      "border-surface-300 dark:border-surface-600",
    ],
  },
  filtercontainer: {
    class: "relative",
  },
  filterinput: {
    class: [
      "font-sans",
      "leading-none",
      "pr-7 py-3 px-3",
      "-mr-7",
      "w-full",
      "text-surface-700 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-900",
      "border-surface-200 dark:border-surface-700",
      "border",
      "rounded-lg",
      "appearance-none",
      "transition",
      "duration-200",
      "hover:border-primary-500 dark:hover:border-primary-300",
      "focus:ring focus:outline-none focus:outline-offset-0",
      "focus:ring-primary-400/50 dark:focus:ring-primary-300/50",
      "appearance-none",
    ],
  },
  filtericon: {
    class: ["absolute", "top-1/2 right-3", "-mt-2"],
  },
  emptymessage: {
    class: [
      "leading-none",
      "py-3 px-5",
      "text-surface-800 dark:text-white/80",
      "bg-transparent",
    ],
  },
};
