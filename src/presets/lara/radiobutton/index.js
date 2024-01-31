export default {
  root: {
    class: [
      "relative",
      "inline-flex",
      "align-bottom",
      "w-[1.571rem] h-[1.571rem]",
      "cursor-pointer",
      "select-none",
    ],
  },
  input: ({ props: e, state: r }) => ({
    class: [
      "flex justify-center items-center",
      "w-[1.571rem] h-[1.571rem]",
      "border-2",
      "rounded-full",
      "transition duration-200 ease-in-out",
      {
        "text-surface-700 dark:text-white/80":
          e.value !== e.modelValue && e.value !== void 0,
        "bg-surface-0 dark:bg-surface-900":
          e.value !== e.modelValue && e.value !== void 0,
        "border-surface-300 dark:border-surface-700":
          e.value !== e.modelValue && e.value !== void 0,
        "border-primary-500 dark:border-primary-400":
          e.value == e.modelValue && e.value !== void 0,
        "bg-green-500 dark:bg-green-500":
          e.value == e.modelValue && e.value !== void 0,
      },
      {
        "hover:border-primary-600 dark:hover:border-primary-300": !e.disabled,
        "outline-none outline-offset-0": !e.disabled && r.focused,
        "ring ring-primary-400/50 dark:ring-primary-300/50":
          !e.disabled && r.focused,
        "opacity-60 cursor-default": e.disabled,
      },
    ],
  }),
  icon: ({ props: e }) => ({
    class: [
      "block",
      "rounded-full",
      "w-3",
      "h-3",
      "bg-surface-0 dark:bg-surface-900",
      {
        "backface-hidden scale-10 invisible": e.value !== e.modelValue,
        "transform visible scale-[1.1]": e.value == e.modelValue,
      },
      "transition duration-200",
    ],
  }),
};
