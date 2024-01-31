export default {
  root: ({ props: e }) => ({
    class: ["inline-flex", "relative", "rounded-md", { "shadow-lg": e.raised }],
  }),
  button: {
    root: ({ parent: e }) => ({
      class: [
        "relative",
        "items-center inline-flex text-center align-bottom justify-center",
        {
          "px-4 py-3 leading-none":
            e.props.size === null && e.props.label !== null,
          "text-xs py-2 px-3": e.props.size === "small",
          "text-xl py-3 px-4": e.props.size === "large",
        },
        { "h-12 w-12 p-0": e.props.label == null },
        "rounded-r-none",
        "border-r-0",
        { "rounded-l-full": e.props.rounded },
        { "rounded-md": !e.props.rounded, "rounded-full": e.props.rounded },
        { "text-primary-600 bg-transparent border-transparent": e.props.link },
        {
          "text-white bg-gray-500 border border-gray-500":
            e.props.plain && !e.props.outlined && !e.props.text,
        },
        { "text-surface-500": e.props.plain && e.props.text },
        {
          "text-surface-500 border border-gray-500":
            e.props.plain && e.props.outlined,
        },
        { "bg-transparent border-transparent": e.props.text && !e.props.plain },
        { "bg-transparent border": e.props.outlined && !e.props.plain },
        {
          "text-white dark:text-surface-900":
            !e.props.link &&
            e.props.severity === null &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
          "bg-green-500 dark:bg-green-400":
            !e.props.link &&
            e.props.severity === null &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
          "border border-primary-500 dark:border-primary-400":
            !e.props.link &&
            e.props.severity === null &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
        },
        {
          "text-primary-500 dark:text-primary-400":
            e.props.text && e.props.severity === null && !e.props.plain,
        },
        {
          "text-primary-500 border border-primary-500 hover:bg-green-400":
            e.props.outlined && e.props.severity === null && !e.props.plain,
        },
        {
          "text-white dark:text-surface-900":
            e.props.severity === "secondary" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
          "bg-slate-500 dark:bg-slate-400":
            e.props.severity === "secondary" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
          "border border-surface-500 dark:border-surface-400":
            e.props.severity === "secondary" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
        },
        {
          "text-surface-500 dark:text-surface-400":
            e.props.text && e.props.severity === "secondary" && !e.props.plain,
        },
        {
          "text-surface-500 border border-surface-500 hover:bg-slate-300/20":
            e.props.outlined &&
            e.props.severity === "secondary" &&
            !e.props.plain,
        },
        {
          "text-white dark:text-surface-900":
            e.props.severity === "success" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
          "bg-green-500 dark:bg-green-400":
            e.props.severity === "success" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
          "border border-green-500 dark:border-green-400":
            e.props.severity === "success" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
        },
        {
          "text-surface-500 dark:text-surface-400":
            e.props.text && e.props.severity === "secondary" && !e.props.plain,
        },
        {
          "text-green-500 border border-green-500 hover:bg-green-300/20":
            e.props.outlined &&
            e.props.severity === "success" &&
            !e.props.plain,
        },
        {
          "text-white dark:text-surface-900":
            e.props.severity === "info" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
          "bg-blue-500 dark:bg-blue-400":
            e.props.severity === "info" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
          "border border-blue-500 dark:border-blue-400":
            e.props.severity === "info" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
        },
        {
          "text-blue-500 dark:text-blue-400":
            e.props.text && e.props.severity === "info" && !e.props.plain,
        },
        {
          "text-blue-500 border border-blue-500 hover:bg-blue-300/20 ":
            e.props.outlined && e.props.severity === "info" && !e.props.plain,
        },
        {
          "text-white dark:text-surface-900":
            e.props.severity === "warning" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
          "bg-orange-500 dark:bg-orange-400":
            e.props.severity === "warning" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
          "border border-orange-500 dark:border-orange-400":
            e.props.severity === "warning" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
        },
        {
          "text-orange-500 dark:text-orange-400":
            e.props.text && e.props.severity === "warning" && !e.props.plain,
        },
        {
          "text-orange-500 border border-orange-500 hover:bg-orange-300/20":
            e.props.outlined &&
            e.props.severity === "warning" &&
            !e.props.plain,
        },
        {
          "text-white dark:text-surface-900":
            e.props.severity === "help" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
          "bg-purple-500 dark:bg-purple-400":
            e.props.severity === "help" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
          "border border-purple-500 dark:border-purple-400":
            e.props.severity === "help" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
        },
        {
          "text-purple-500 dark:text-purple-400":
            e.props.text && e.props.severity === "help" && !e.props.plain,
        },
        {
          "text-purple-500 border border-purple-500 hover:bg-purple-300/20":
            e.props.outlined && e.props.severity === "help" && !e.props.plain,
        },
        {
          "text-white dark:text-surface-900":
            e.props.severity === "danger" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
          "bg-red-500 dark:bg-red-400":
            e.props.severity === "danger" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
          "border border-red-500 dark:border-red-400":
            e.props.severity === "danger" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
        },
        {
          "text-red-500 dark:text-red-400":
            e.props.text && e.props.severity === "danger" && !e.props.plain,
        },
        {
          "text-red-500 border border-red-500 hover:bg-red-300/20":
            e.props.outlined && e.props.severity === "danger" && !e.props.plain,
        },
        "focus:outline-none focus:outline-offset-0 focus:ring",
        {
          "focus:ring-primary-400/50 dark:focus:ring-primary-300/50":
            e.props.link,
        },
        {
          "hover:bg-gray-600 hover:border-gray-600":
            e.props.plain && !e.props.outlined && !e.props.text,
        },
        {
          "hover:bg-slate-300/20":
            e.props.plain && (e.props.text || e.props.outlined),
        },
        {
          "hover:bg-green-600 dark:hover:bg-green-300 hover:border-primary-600 dark:hover:border-primary-300":
            !e.props.link &&
            e.props.severity === null &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
        },
        {
          "focus:ring-primary-400/50 dark:focus:ring-primary-300/50":
            !e.props.link &&
            e.props.severity === null &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
        },
        {
          "hover:bg-green-300":
            (e.props.text || e.props.outlined) &&
            e.props.severity === null &&
            !e.props.plain,
        },
        {
          "hover:bg-slate-600 dark:hover:bg-slate-300 hover:border-surface-600 dark:hover:border-surface-300":
            e.props.severity === "secondary" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
        },
        {
          "focus:ring-surface-400/50 dark:focus:ring-surface-300/50":
            e.props.severity === "secondary",
        },
        {
          "hover:bg-slate-300/20":
            (e.props.text || e.props.outlined) &&
            e.props.severity === "secondary" &&
            !e.props.plain,
        },
        {
          "hover:bg-green-600 dark:hover:bg-green-300 hover:border-green-600 dark:hover:border-green-300":
            e.props.severity === "success" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
        },
        {
          "focus:ring-green-400/50 dark:focus:ring-green-300/50":
            e.props.severity === "success",
        },
        {
          "hover:bg-green-300":
            (e.props.text || e.props.outlined) &&
            e.props.severity === "success" &&
            !e.props.plain,
        },
        {
          "hover:bg-blue-600 dark:hover:bg-blue-300 hover:border-blue-600 dark:hover:border-blue-300":
            e.props.severity === "info" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
        },
        {
          "focus:ring-blue-400/50 dark:focus:ring-blue-300/50":
            e.props.severity === "info",
        },
        {
          "hover:bg-blue-300/20":
            (e.props.text || e.props.outlined) &&
            e.props.severity === "info" &&
            !e.props.plain,
        },
        {
          "hover:bg-orange-600 dark:hover:bg-orange-300 hover:border-orange-600 dark:hover:border-orange-300":
            e.props.severity === "warning" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
        },
        {
          "focus:ring-orange-400/50 dark:focus:ring-orange-300/50":
            e.props.severity === "warning",
        },
        {
          "hover:bg-orange-300/20":
            (e.props.text || e.props.outlined) &&
            e.props.severity === "warning" &&
            !e.props.plain,
        },
        {
          "hover:bg-purple-600 dark:hover:bg-purple-300 hover:border-purple-600 dark:hover:border-purple-300":
            e.props.severity === "help" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
        },
        {
          "focus:ring-purple-400/50 dark:focus:ring-purple-300/50":
            e.props.severity === "help",
        },
        {
          "hover:bg-purple-300/20":
            (e.props.text || e.props.outlined) &&
            e.props.severity === "help" &&
            !e.props.plain,
        },
        {
          "hover:bg-red-600 dark:hover:bg-red-300 hover:border-red-600 dark:hover:border-red-300":
            e.props.severity === "danger" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
        },
        {
          "focus:ring-red-400/50 dark:focus:ring-red-300/50":
            e.props.severity === "danger",
        },
        {
          "hover:bg-red-300/20":
            (e.props.text || e.props.outlined) &&
            e.props.severity === "danger" &&
            !e.props.plain,
        },
        "transition duration-200 ease-in-out",
        "cursor-pointer overflow-hidden select-none",
      ],
    }),
    icon: {
      class: ["mr-2"],
    },
  },
  menubutton: {
    root: ({ parent: e }) => ({
      class: [
        "relative",
        "items-center inline-flex text-center align-bottom justify-center",
        {
          "px-4 py-3 leading-none":
            e.props.size === null && e.props.label !== null,
          "text-xs py-2 px-3": e.props.size === "small",
          "text-xl py-3 px-4": e.props.size === "large",
        },
        { "h-12 w-12 p-0": e.props.label == null },
        "rounded-l-none",
        { "rounded-l-full": e.props.rounded },
        { "rounded-md": !e.props.rounded, "rounded-full": e.props.rounded },
        { "text-primary-600 bg-transparent border-transparent": e.props.link },
        {
          "text-white bg-gray-500 border border-gray-500":
            e.props.plain && !e.props.outlined && !e.props.text,
        },
        { "text-surface-500": e.props.plain && e.props.text },
        {
          "text-surface-500 border border-gray-500":
            e.props.plain && e.props.outlined,
        },
        { "bg-transparent border-transparent": e.props.text && !e.props.plain },
        { "bg-transparent border": e.props.outlined && !e.props.plain },
        {
          "text-white dark:text-surface-900":
            !e.props.link &&
            e.props.severity === null &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
          "bg-green-500 dark:bg-green-400":
            !e.props.link &&
            e.props.severity === null &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
          "border border-primary-500 dark:border-primary-400":
            !e.props.link &&
            e.props.severity === null &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
        },
        {
          "text-primary-500 dark:text-primary-400":
            e.props.text && e.props.severity === null && !e.props.plain,
        },
        {
          "text-primary-500 border border-primary-500 hover:bg-green-300":
            e.props.outlined && e.props.severity === null && !e.props.plain,
        },
        {
          "text-white dark:text-surface-900":
            e.props.severity === "secondary" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
          "bg-slate-500 dark:bg-slate-400":
            e.props.severity === "secondary" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
          "border border-surface-500 dark:border-surface-400":
            e.props.severity === "secondary" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
        },
        {
          "text-surface-500 dark:text-surface-400":
            e.props.text && e.props.severity === "secondary" && !e.props.plain,
        },
        {
          "text-surface-500 border border-surface-500 hover:bg-slate-300":
            e.props.outlined &&
            e.props.severity === "secondary" &&
            !e.props.plain,
        },
        {
          "text-white dark:text-surface-900":
            e.props.severity === "success" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
          "bg-green-500 dark:bg-green-400":
            e.props.severity === "success" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
          "border border-green-500 dark:border-green-400":
            e.props.severity === "success" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
        },
        {
          "text-surface-500 dark:text-surface-400":
            e.props.text && e.props.severity === "secondary" && !e.props.plain,
        },
        {
          "text-green-500 border border-green-500 hover:bg-green-300/20":
            e.props.outlined &&
            e.props.severity === "success" &&
            !e.props.plain,
        },
        {
          "text-white dark:text-surface-900":
            e.props.severity === "info" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
          "bg-blue-500 dark:bg-blue-400":
            e.props.severity === "info" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
          "border border-blue-500 dark:border-blue-400":
            e.props.severity === "info" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
        },
        {
          "text-blue-500 dark:text-blue-400":
            e.props.text && e.props.severity === "info" && !e.props.plain,
        },
        {
          "text-blue-500 border border-blue-500 hover:bg-blue-300/20 ":
            e.props.outlined && e.props.severity === "info" && !e.props.plain,
        },
        {
          "text-white dark:text-surface-900":
            e.props.severity === "warning" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
          "bg-orange-500 dark:bg-orange-400":
            e.props.severity === "warning" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
          "border border-orange-500 dark:border-orange-400":
            e.props.severity === "warning" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
        },
        {
          "text-orange-500 dark:text-orange-400":
            e.props.text && e.props.severity === "warning" && !e.props.plain,
        },
        {
          "text-orange-500 border border-orange-500 hover:bg-orange-300/20":
            e.props.outlined &&
            e.props.severity === "warning" &&
            !e.props.plain,
        },
        {
          "text-white dark:text-surface-900":
            e.props.severity === "help" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
          "bg-purple-500 dark:bg-purple-400":
            e.props.severity === "help" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
          "border border-purple-500 dark:border-purple-400":
            e.props.severity === "help" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
        },
        {
          "text-purple-500 dark:text-purple-400":
            e.props.text && e.props.severity === "help" && !e.props.plain,
        },
        {
          "text-purple-500 border border-purple-500 hover:bg-purple-300/20":
            e.props.outlined && e.props.severity === "help" && !e.props.plain,
        },
        {
          "text-white dark:text-surface-900":
            e.props.severity === "danger" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
          "bg-red-500 dark:bg-red-400":
            e.props.severity === "danger" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
          "border border-red-500 dark:border-red-400":
            e.props.severity === "danger" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
        },
        {
          "text-red-500 dark:text-red-400":
            e.props.text && e.props.severity === "danger" && !e.props.plain,
        },
        {
          "text-red-500 border border-red-500 hover:bg-red-300/20":
            e.props.outlined && e.props.severity === "danger" && !e.props.plain,
        },
        "focus:outline-none focus:outline-offset-0 focus:ring",
        {
          "focus:ring-primary-400/50 dark:focus:ring-primary-300/50":
            e.props.link,
        },
        {
          "hover:bg-gray-600 hover:border-gray-600":
            e.props.plain && !e.props.outlined && !e.props.text,
        },
        {
          "hover:bg-slate-300":
            e.props.plain && (e.props.text || e.props.outlined),
        },
        {
          "hover:bg-green-600 dark:hover:bg-green-300 hover:border-primary-600 dark:hover:border-primary-300":
            !e.props.link &&
            e.props.severity === null &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
        },
        {
          "focus:ring-primary-400/50 dark:focus:ring-primary-300/50":
            !e.props.link &&
            e.props.severity === null &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
        },
        {
          "hover:bg-green-300":
            (e.props.text || e.props.outlined) &&
            e.props.severity === null &&
            !e.props.plain,
        },
        {
          "hover:bg-slate-600 dark:hover:bg-slate-300 hover:border-surface-600 dark:hover:border-surface-300":
            e.props.severity === "secondary" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
        },
        {
          "focus:ring-surface-400/50 dark:focus:ring-surface-300/50":
            e.props.severity === "secondary",
        },
        {
          "hover:bg-slate-300":
            (e.props.text || e.props.outlined) &&
            e.props.severity === "secondary" &&
            !e.props.plain,
        },
        {
          "hover:bg-green-600 dark:hover:bg-green-300 hover:border-green-600 dark:hover:border-green-300":
            e.props.severity === "success" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
        },
        {
          "focus:ring-green-400/50 dark:focus:ring-green-300/50":
            e.props.severity === "success",
        },
        {
          "hover:bg-green-300/20":
            (e.props.text || e.props.outlined) &&
            e.props.severity === "success" &&
            !e.props.plain,
        },
        {
          "hover:bg-blue-600 dark:hover:bg-blue-300 hover:border-blue-600 dark:hover:border-blue-300":
            e.props.severity === "info" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
        },
        {
          "focus:ring-blue-400/50 dark:focus:ring-blue-300/50":
            e.props.severity === "info",
        },
        {
          "hover:bg-blue-300/20":
            (e.props.text || e.props.outlined) &&
            e.props.severity === "info" &&
            !e.props.plain,
        },
        {
          "hover:bg-orange-600 dark:hover:bg-orange-300 hover:border-orange-600 dark:hover:border-orange-300":
            e.props.severity === "warning" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
        },
        {
          "focus:ring-orange-400/50 dark:focus:ring-orange-300/50":
            e.props.severity === "warning",
        },
        {
          "hover:bg-orange-300/20":
            (e.props.text || e.props.outlined) &&
            e.props.severity === "warning" &&
            !e.props.plain,
        },
        {
          "hover:bg-purple-600 dark:hover:bg-purple-300 hover:border-purple-600 dark:hover:border-purple-300":
            e.props.severity === "help" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
        },
        {
          "focus:ring-purple-400/50 dark:focus:ring-purple-300/50":
            e.props.severity === "help",
        },
        {
          "hover:bg-purple-300/20":
            (e.props.text || e.props.outlined) &&
            e.props.severity === "help" &&
            !e.props.plain,
        },
        {
          "hover:bg-red-600 dark:hover:bg-red-300 hover:border-red-600 dark:hover:border-red-300":
            e.props.severity === "danger" &&
            !e.props.text &&
            !e.props.outlined &&
            !e.props.plain,
        },
        {
          "focus:ring-red-400/50 dark:focus:ring-red-300/50":
            e.props.severity === "danger",
        },
        {
          "hover:bg-red-300/20":
            (e.props.text || e.props.outlined) &&
            e.props.severity === "danger" &&
            !e.props.plain,
        },
        "transition duration-200 ease-in-out",
        "cursor-pointer overflow-hidden select-none",
      ],
    }),
    label: {
      class: ["hidden"],
    },
  },
};
