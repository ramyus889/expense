export default {
  root: {
    class: [
      "cursor-pointer inline-flex relative select-none align-bottom",
      "w-6 h-6",
    ],
  },
  checkbox: ({ props: e, context: r }) => ({
    class: [
      "relative",
      "flex",
      "items-center",
      "justify-center",
      "w-6",
      "h-6",
      "rounded-lg",
      "border-2",
      "text-surface-600",
      {
        "border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900":
          e.modelValue == null,
        "border-primary-500 bg-green-500 dark:border-primary-400 dark:bg-green-500":
          e.modelValue !== null,
      },
      "focus:outline-none focus:outline-offset-0",
      {
        "hover:border-primary-500 dark:hover:border-primary-400": !e.disabled,
        "ring ring-primary-400/50 dark:ring-primary-300/50":
          !e.disabled && r.focused,
        "cursor-default opacity-60": e.disabled,
      },
      "transition-colors",
      "duration-200",
    ],
  }),
  checkicon: {
    class: [
      "text-base leading-none",
      "w-4",
      "h-4",
      "text-white dark:text-surface-900",
      "transition-all",
      "duration-200",
    ],
  },
  uncheckicon: {
    class: [
      "text-base leading-none",
      "w-4",
      "h-4",
      "text-white dark:text-surface-900",
      "transition-all",
      "duration-200",
    ],
  },
};
