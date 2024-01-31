export default {
  root: ({ props: e, state: r }) => ({
    class: [
      "inline-block relative",
      "w-12 h-7",
      "rounded-2xl",
      {
        "opacity-60 select-none pointer-events-none cursor-default": e.disabled,
      },
      {
        "outline-none outline-offset-0 ring bg-primary-400 dark:bg-primary-300":
          r.focused,
      },
    ],
  }),
  slider: ({ props: e }) => ({
    class: [
      "absolute top-0 left-0 right-0 bottom-0",
      { "before:transform before:translate-x-5": e.modelValue },
      "rounded-2xl",
      "before:absolute before:top-1/2 before:left-1",
      "before:-mt-2.5",
      "before:h-5 before:w-5",
      "before:rounded-full",
      "before:duration-200",
      "before:bg-surface-0 before:dark:bg-surface-900",
      "border border-transparent",
      {
        "bg-slate-200 dark:bg-slate-700": !e.modelValue,
        "bg-primary-500 dark:bg-primary-400": e.modelValue,
      },
      { "hover:bg-surface-300 hover:dark:bg-surface-600 ": !e.modelValue },
      "transition-colors duration-200",
      "cursor-pointer",
    ],
  }),
};
