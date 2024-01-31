export default {
  root: ({ props: e }) => ({
    class: [
      "relative",
      "flex items-center",
      "gap-2",
      {
        "opacity-60 select-none pointer-events-none cursor-default": e.disabled,
      },
    ],
  }),
  cancelitem: ({ context: e }) => ({
    class: [
      "inline-flex items-center",
      {
        "outline-none ring ring-primary-500/50 dark:ring-primary-400/50":
          e.focused,
      },
      "cursor-pointer",
    ],
  }),
  cancelicon: {
    class: [
      "w-5 h-5",
      "text-red-500 dark:text-red-400",
      "hover:text-red-600 dark:hover:text-red-300",
      "transition duration-200 ease-in",
    ],
  },
  item: ({ props: e, context: r }) => ({
    class: [
      "inline-flex items-center",
      {
        "outline-none ring ring-primary-500/50 dark:ring-primary-400/50":
          r.focused,
      },
      { "cursor-pointer": !e.readonly, "cursor-default": e.readonly },
    ],
  }),
  officon: ({ props: e }) => ({
    class: [
      "w-5 h-5",
      "text-surface-700 dark:text-surface-0/80",
      { "hover:text-primary-500 dark:hover:text-primary-400": !e.readonly },
      "transition duration-200 ease-in",
    ],
  }),
  onicon: ({ props: e }) => ({
    class: [
      "w-5 h-5",
      "text-yellow-500 dark:text-yellow-400",
      { "hover:text-yellow-600 dark:hover:text-yellow-300": !e.readonly },
      "transition duration-200 ease-in",
    ],
  }),
};
