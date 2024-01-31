export default {
  root: ({ props: e, context: r, parent: t }) => ({
    class: [
      "font-sans leading-none",
      "m-0",
      {
        "px-4 py-4": e.size == "large",
        "px-2 py-2": e.size == "small",
        "p-3": e.size == null,
      },
      { "rounded-md": t.instance.$name !== "InputGroup" },
      {
        "first:rounded-l-md rounded-none last:rounded-r-md":
          t.instance.$name == "InputGroup",
      },
      {
        "border-0 border-y border-l last:border-r":
          t.instance.$name == "InputGroup",
      },
      {
        "first:ml-0 ml-[-1px]":
          t.instance.$name == "InputGroup" && !e.showButtons,
      },
      "text-black dark:text-black",
      "placeholder:text-surface-400 dark:placeholder:text-surface-500",
      "bg-surface-0 dark:bg-surface-900",
      "border border-surface-300 dark:border-surface-600",
      {
        "hover:border-primary-500 dark:hover:border-primary-400": !r.disabled,
        "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50":
          !r.disabled,
        "opacity-60 select-none pointer-events-none cursor-default": r.disabled,
      },
      "appearance-none",
      "transition-colors duration-200",
    ],
  }),
};
