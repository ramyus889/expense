export default {
  root: ({ props: e }) => ({
    class: [
      "relative",
      "inline-flex",
      { "w-full": e.multiple },
      "text-surface-900 dark:text-surface-0",
      {
        "opacity-60 select-none pointer-events-none cursor-default": e.disabled,
      },
    ],
  }),
  container: ({ props: e, state: r }) => ({
    class: [
      "font-sans text-base leading-none",
      "flex items-center flex-wrap",
      "gap-2",
      "m-0 list-none",
      "px-3 py-1.5",
      "w-full",
      "min-h-[2.877rem]",
      "appearance-none rounded-md",
      "text-surface-700 dark:text-white/80",
      "placeholder:text-surface-400 dark:placeholder:text-surface-500",
      "bg-surface-0 dark:bg-surface-900",
      "border border-surface-300 dark:border-surface-700",
      "hover:border-primary-500 dark:hover:border-primary-400",
      "focus:outline-none focus:outline-offset-0",
      { "ring ring-primary-400/50 dark:ring-primary-300/50": r.focused },
      { "ring ring-primary-400/50 dark:ring-primary-300/50": r.hovered },
      "transition duration-200 ease-in-out",
      "cursor-text overflow-hidden",
    ],
  }),
  inputtoken: {
    class: ["py-1.5 px-0", "inline-flex flex-auto"],
  },
  input: ({ props: e }) => ({
    class: [
      "font-sans text-base leading-none",
      "appearance-none rounded-md",
      { "rounded-tr-none rounded-br-none": e.dropdown },
      { "outline-none shadow-none rounded-none": e.multiple },
      { "w-full": e.multiple },
      "m-0",
      { "p-3": !e.multiple, "p-0": e.multiple },
      "text-black dark:text-black",
      {
        "bg-surface-0 dark:bg-surface-900": !e.multiple,
        "border border-surface-300 dark:border-surface-700": !e.multiple,
        "border-0 bg-transparent": e.multiple,
      },
      {
        "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50":
          !e.multiple,
      },
      "transition-colors duration-200",
    ],
  }),
  token: {
    class: [
      "inline-flex items-center",
      "py-1.5 px-3",
      "rounded-[1.14rem]",
      "bg-surface-200 dark:bg-surface-700",
      "text-black dark:text-black",
      "cursor-default",
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
  dropdownbutton: {
    root: {
      class: [
        "relative",
        "items-center inline-flex text-center align-bottom",
        "rounded-r-md",
        "px-4 py-3 leading-none",
        "text-black dark:text-black",
        "bg-primary-500 dark:bg-primary-400",
        "border border-primary-500 dark:border-primary-400",
        "focus:outline-none focus:outline-offset-0 focus:ring",
        "hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300",
        "focus:ring-primary-400/50 dark:focus:ring-primary-300/50",
      ],
    },
  },
  loadingicon: {
    class: [
      "text-surface-500 dark:text-surface-0/70",
      "absolute top-[50%] right-[0.5rem] -mt-2 animate-spin",
    ],
  },
  panel: {
    class: [
      "bg-surface-0 dark:bg-surface-800",
      "text-surface-700 dark:text-white/80",
      "border-0",
      "rounded-md",
      "shadow-md",
      "max-h-[200px] overflow-auto",
    ],
  },
  list: {
    class: "py-3 px-0 list-none m-0",
  },
  item: ({ context: e }) => ({
    class: [
      "relative",
      "font-normal text-base leading-none",
      "m-0 px-5 py-3",
      "border-0 rounded-none",
      {
        "text-surface-700 dark:text-white/80": !e.focused && !e.selected,
        "bg-surface-200 dark:bg-surface-600/60": e.focused && !e.selected,
        "text-surface-700 dark:text-white/80": e.focused && !e.selected,
        "text-primary-700 dark:text-white/80": e.focused && e.selected,
        "bg-primary-100 dark:bg-primary-400": e.focused && e.selected,
        "text-primary-700 dark:text-white/80": !e.focused && e.selected,
        "bg-primary-50 dark:bg-primary-300": !e.focused && e.selected,
      },
      {
        "hover:bg-surface-100 dark:hover:bg-surface-600/80":
          !e.focused && !e.selected,
      },
      {
        "hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-surface-600/80":
          e.focused && !e.selected,
      },
      "transition-shadow duration-200",
      "cursor-pointer overflow-hidden whitespace-nowrap",
    ],
  }),
  itemgroup: {
    class: [
      "font-bold",
      "m-0 p-3",
      "bg-surface-0 dark:bg-surface-700",
      "text-surface-800 dark:text-white/80",
      "cursor-auto",
    ],
  },
  emptymessage: {
    class: [
      "leading-none",
      "py-3 px-5",
      "text-surface-800 dark:text-white/80",
      "bg-transparent",
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
