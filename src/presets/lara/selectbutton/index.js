export default {
  root: ({ props: e }) => ({
    class: [
      {
        "opacity-60 select-none pointer-events-none cursor-default": e.disabled,
      },
    ],
  }),
  button: ({ context: e }) => ({
    class: [
      "relative",
      "leading-none",
      "inline-flex items-center align-bottom text-center",
      "px-4 py-3",
      "border border-r-0",
      "first:rounded-l-md first:rounded-tr-none first:rounded-br-none",
      "last:border-r last:rounded-tl-none last:rounded-bl-none last:rounded-r-md",
      {
        "bg-surface-0 dark:bg-surface-900": !e.active,
        "text-surface-700 dark:text-white/80": !e.active,
        "border-surface-200 dark:border-surface-700": !e.active,
        "bg-yellow-500 dark:bg-yellow-400 border-primary-500 dark:border-primary-400 text-white dark:text-surface-900":
          e.active,
      },
      "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50",
      {
        "hover:bg-surface-50 dark:hover:bg-surface-800/80": !e.active,
        "hover:bg-yellow-600 dark:hover:bg-yellow-300": e.active,
      },
      {
        "opacity-60 select-none pointer-events-none cursor-default": e.disabled,
      },
      "transition duration-200",
      "cursor-pointer select-none overflow-hidden",
    ],
  }),
  label: {
    class: "font-bold",
  },
};
