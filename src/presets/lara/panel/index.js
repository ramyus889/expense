export default {
  header: ({ props: e }) => ({
    class: [
      "flex items-center justify-between",
      "text-surface-700 dark:text-surface-0/80",
      "bg-surface-50 dark:bg-surface-900",
      "border border-surface-200 dark:border-surface-700",
      "rounded-tl-lg rounded-tr-lg",
      { "p-5": !e.toggleable, "py-3 px-5": e.toggleable },
    ],
  }),
  title: {
    class: "leading-none font-bold",
  },
  toggler: {
    class: [
      "inline-flex items-center justify-center",
      "relative",
      "w-8 h-8",
      "m-0 p-0",
      "border-0 rounded-full hover:border-2",
      "bg-transparent",
      "text-surface-600 dark:text-surface-0/80",
      "hover:text-surface-800 dark:hover:text-surface-0/80",
      "hover:bg-surface-100 dark:hover:bg-surface-800/80",
      "focus:outline-none focus:outline-offset-0 focus-visible:ring focus-visible:ring-primary-400/50 focus-visible:ring-inset dark:focus-visible:ring-primary-300/50",
      "transition-all duration-100 ease-in-out",
      "overflow-hidden no-underline",
      "cursor-pointer",
    ],
  },
  togglerIcon: {
    class: "inline-block",
  },
  content: {
    class: [
      "p-5",
      "border border-t-0 last:rounded-br-lg last:rounded-bl-lg",
      "border-surface-200 dark:border-surface-700",
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-surface-0/80",
    ],
  },
  footer: {
    class: [
      "py-3 p-5",
      "border border-t-0 rounded-br-lg rounded-bl-lg",
      "border-surface-200 dark:border-surface-700",
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-surface-0/80",
    ],
  },
  transition: {
    enterFromClass: "max-h-0",
    enterActiveClass:
      "overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]",
    enterToClass: "max-h-[1000px]",
    leaveFromClass: "max-h-[1000px]",
    leaveActiveClass:
      "overflow-hidden transition-[max-height] duration-[1000ms] ease-[cubic-bezier(0,1,0,1)]",
    leaveToClass: "max-h-0",
  },
};
