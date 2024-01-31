export default {
  root: ({ context: e }) => ({
    class: [
      "font-sans leading-none",
      "m-0 p-3",
      "text-black dark:text-black",
      "placeholder:text-surface-400 dark:placeholder:text-surface-500",
      "bg-surface-0 dark:bg-surface-900",
      "border border-surface-300 dark:border-surface-600",
      {
        "hover:border-primary-500 dark:hover:border-primary-400": !e.disabled,
        "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50":
          !e.disabled,
        "opacity-60 select-none pointer-events-none cursor-default": e.disabled,
      },
      "rounded-md",
      "appearance-none",
      "transition-colors duration-200",
    ],
  }),
};
