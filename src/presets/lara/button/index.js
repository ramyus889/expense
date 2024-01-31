export default {
  root: ({ props: e, context: r, parent: t }) => ({
    class: [
      "relative",
      "items-center inline-flex text-center align-bottom justify-center",
      "leading-[normal]",
      {
        "px-4 py-3": e.size === null && e.label !== null,
        "text-sm py-2 px-3": e.size === "small",
        "text-xl py-3 px-4": e.size === "large",
      },
      { "w-12 p-0 py-3": e.label == null },
      { "shadow-lg": e.raised },
      { "rounded-md": !e.rounded, "rounded-full": e.rounded },
      {
        "rounded-none first:rounded-l-md last:rounded-r-md":
          t.instance.$name == "InputGroup",
      },
      { "text-primary-600 bg-transparent border-transparent": e.link },
      {
        "text-white bg-gray-500 border border-gray-500":
          e.plain && !e.outlined && !e.text,
      },
      { "text-surface-500": e.plain && e.text },
      { "text-surface-500 border border-gray-500": e.plain && e.outlined },
      { "bg-transparent border-transparent": e.text && !e.plain },
      { "bg-transparent border": e.outlined && !e.plain },
      {
        "text-white dark:text-surface-900":
          !e.link && e.severity === null && !e.text && !e.outlined && !e.plain,
        "bg-green-500 dark:bg-green-400":
          !e.link && e.severity === null && !e.text && !e.outlined && !e.plain,
        "border border-primary-500 dark:border-primary-400":
          !e.link && e.severity === null && !e.text && !e.outlined && !e.plain,
      },
      {
        "text-primary-500 dark:text-primary-400":
          e.text && e.severity === null && !e.plain,
      },
      {
        "text-primary-500 border border-primary-500 hover:bg-primary-300/20":
          e.outlined && e.severity === null && !e.plain,
      },
      {
        "text-white dark:text-surface-900":
          e.severity === "secondary" && !e.text && !e.outlined && !e.plain,
        "bg-surface-500 dark:bg-surface-400":
          e.severity === "secondary" && !e.text && !e.outlined && !e.plain,
        "border border-surface-500 dark:border-surface-400":
          e.severity === "secondary" && !e.text && !e.outlined && !e.plain,
      },
      {
        "text-surface-500 dark:text-surface-300":
          e.text && e.severity === "secondary" && !e.plain,
      },
      {
        "text-surface-500 dark:text-surface-300 border border-surface-500 hover:bg-surface-300/20":
          e.outlined && e.severity === "secondary" && !e.plain,
      },
      {
        "text-white dark:text-green-900":
          e.severity === "success" && !e.text && !e.outlined && !e.plain,
        "bg-green-500 dark:bg-green-400":
          e.severity === "success" && !e.text && !e.outlined && !e.plain,
        "border border-green-500 dark:border-green-400":
          e.severity === "success" && !e.text && !e.outlined && !e.plain,
      },
      {
        "text-green-500 dark:text-green-400":
          e.text && e.severity === "success" && !e.plain,
      },
      {
        "text-green-500 border border-green-500 hover:bg-green-300/20":
          e.outlined && e.severity === "success" && !e.plain,
      },
      {
        "text-white dark:text-surface-900":
          e.severity === "info" && !e.text && !e.outlined && !e.plain,
        "bg-blue-500 dark:bg-blue-400":
          e.severity === "info" && !e.text && !e.outlined && !e.plain,
        "border border-blue-500 dark:border-blue-400":
          e.severity === "info" && !e.text && !e.outlined && !e.plain,
      },
      {
        "text-blue-500 dark:text-blue-400":
          e.text && e.severity === "info" && !e.plain,
      },
      {
        "text-blue-500 border border-blue-500 hover:bg-blue-300/20 ":
          e.outlined && e.severity === "info" && !e.plain,
      },
      {
        "text-white dark:text-surface-900":
          e.severity === "warning" && !e.text && !e.outlined && !e.plain,
        "bg-orange-500 dark:bg-orange-400":
          e.severity === "warning" && !e.text && !e.outlined && !e.plain,
        "border border-orange-500 dark:border-orange-400":
          e.severity === "warning" && !e.text && !e.outlined && !e.plain,
      },
      {
        "text-orange-500 dark:text-orange-400":
          e.text && e.severity === "warning" && !e.plain,
      },
      {
        "text-orange-500 border border-orange-500 hover:bg-orange-300/20":
          e.outlined && e.severity === "warning" && !e.plain,
      },
      {
        "text-white dark:text-surface-900":
          e.severity === "help" && !e.text && !e.outlined && !e.plain,
        "bg-purple-500 dark:bg-purple-400":
          e.severity === "help" && !e.text && !e.outlined && !e.plain,
        "border border-purple-500 dark:border-purple-400":
          e.severity === "help" && !e.text && !e.outlined && !e.plain,
      },
      {
        "text-purple-500 dark:text-purple-400":
          e.text && e.severity === "help" && !e.plain,
      },
      {
        "text-purple-500 border border-purple-500 hover:bg-purple-300/20":
          e.outlined && e.severity === "help" && !e.plain,
      },
      {
        "text-white dark:text-surface-900":
          e.severity === "danger" && !e.text && !e.outlined && !e.plain,
        "bg-red-500 dark:bg-red-400":
          e.severity === "danger" && !e.text && !e.outlined && !e.plain,
        "border border-red-500 dark:border-red-400":
          e.severity === "danger" && !e.text && !e.outlined && !e.plain,
      },
      {
        "text-red-500 dark:text-red-400":
          e.text && e.severity === "danger" && !e.plain,
      },
      {
        "text-red-500 border border-red-500 hover:bg-red-300/20":
          e.outlined && e.severity === "danger" && !e.plain,
      },
      "focus:outline-none focus:outline-offset-0 focus:ring",
      { "focus:ring-primary-400/50 dark:focus:ring-primary-300/50": e.link },
      {
        "hover:bg-gray-600 hover:border-gray-600":
          e.plain && !e.outlined && !e.text,
      },
      { "hover:bg-surface-300/20": e.plain && (e.text || e.outlined) },
      {
        "hover:bg-green-600 dark:hover:bg-green-300 hover:border-primary-600 dark:hover:border-primary-300":
          !e.link && e.severity === null && !e.text && !e.outlined && !e.plain,
      },
      {
        "focus:ring-primary-400/50 dark:focus:ring-primary-300/50":
          e.severity === null,
      },
      {
        "hover:bg-primary-300/20":
          (e.text || e.outlined) && e.severity === null && !e.plain,
      },
      {
        "hover:bg-surface-600 dark:hover:bg-surface-300 hover:border-surface-600 dark:hover:border-surface-300":
          e.severity === "secondary" && !e.text && !e.outlined && !e.plain,
      },
      {
        "focus:ring-surface-400/50 dark:focus:ring-surface-300/50":
          e.severity === "secondary",
      },
      {
        "hover:bg-surface-300/20":
          (e.text || e.outlined) && e.severity === "secondary" && !e.plain,
      },
      {
        "hover:bg-green-600 dark:hover:bg-green-300 hover:border-green-600 dark:hover:border-green-300":
          e.severity === "success" && !e.text && !e.outlined && !e.plain,
      },
      {
        "focus:ring-green-400/50 dark:focus:ring-green-300/50":
          e.severity === "success",
      },
      {
        "hover:bg-green-300/20":
          (e.text || e.outlined) && e.severity === "success" && !e.plain,
      },
      {
        "hover:bg-blue-600 dark:hover:bg-blue-300 hover:border-blue-600 dark:hover:border-blue-300":
          e.severity === "info" && !e.text && !e.outlined && !e.plain,
      },
      {
        "focus:ring-blue-400/50 dark:focus:ring-blue-300/50":
          e.severity === "info",
      },
      {
        "hover:bg-blue-300/20":
          (e.text || e.outlined) && e.severity === "info" && !e.plain,
      },
      {
        "hover:bg-orange-600 dark:hover:bg-orange-300 hover:border-orange-600 dark:hover:border-orange-300":
          e.severity === "warning" && !e.text && !e.outlined && !e.plain,
      },
      {
        "focus:ring-orange-400/50 dark:focus:ring-orange-300/50":
          e.severity === "warning",
      },
      {
        "hover:bg-orange-300/20":
          (e.text || e.outlined) && e.severity === "warning" && !e.plain,
      },
      {
        "hover:bg-purple-600 dark:hover:bg-purple-300 hover:border-purple-600 dark:hover:border-purple-300":
          e.severity === "help" && !e.text && !e.outlined && !e.plain,
      },
      {
        "focus:ring-purple-400/50 dark:focus:ring-purple-300/50":
          e.severity === "help",
      },
      {
        "hover:bg-purple-300/20":
          (e.text || e.outlined) && e.severity === "help" && !e.plain,
      },
      {
        "hover:bg-red-600 dark:hover:bg-red-300 hover:border-red-600 dark:hover:border-red-300":
          e.severity === "danger" && !e.text && !e.outlined && !e.plain,
      },
      {
        "focus:ring-red-400/50 dark:focus:ring-red-300/50":
          e.severity === "danger",
      },
      {
        "hover:bg-red-300/20":
          (e.text || e.outlined) && e.severity === "danger" && !e.plain,
      },
      { "opacity-60 pointer-events-none cursor-default": r.disabled },
      "transition duration-200 ease-in-out",
      "cursor-pointer overflow-hidden select-none",
    ],
  }),
  label: ({ props: e }) => ({
    class: [
      "duration-200",
      "font-bold",
      { "hover:underline": e.link },
      { "flex-1": e.label !== null, "invisible w-0": e.label == null },
    ],
  }),
  icon: ({ props: e }) => ({
    class: [
      "mx-0",
      {
        "mr-2": e.iconPos == "left" && e.label != null,
        "ml-2 order-1": e.iconPos == "right" && e.label != null,
        "mb-2": e.iconPos == "top" && e.label != null,
        "mt-2": e.iconPos == "bottom" && e.label != null,
      },
    ],
  }),
  loadingicon: ({ props: e }) => ({
    class: [
      "h-4 w-4",
      "mx-0",
      {
        "mr-2": e.iconPos == "left" && e.label != null,
        "ml-2 order-1": e.iconPos == "right" && e.label != null,
        "mb-2": e.iconPos == "top" && e.label != null,
        "mt-2": e.iconPos == "bottom" && e.label != null,
      },
      "animate-spin",
    ],
  }),
  badge: ({ props: e }) => ({
    class: [
      { "ml-2 w-4 h-4 leading-none flex items-center justify-center": e.badge },
    ],
  }),
};
