export default {
  root: {
    class: ["rounded-lg", "shadow-xl", "border-0", "z-40 transform origin-center", "mt-3 absolute left-0 top-0", "dark:border", "dark:border-surface-700", "bg-surface-0 dark:bg-surface-800", "text-surface-700 dark:text-surface-0/80", "before:absolute before:w-0 before:-top-3 before:h-0 before:border-transparent before:border-solid before:ml-6 before:border-x-[0.75rem] before:border-b-[0.75rem] before:border-t-0 before:border-b-surface-0 dark:before:border-b-surface-800"]
  },
  content: {
    class: ["text-sm", "px-6", "py-3", "bg-surface-0 dark:bg-surface-800", "text-surface-600 dark:text-surface-0/70", "overflow-y-auto"]
  },
  icon: {
    class: "text-xl mr-2"
  },
  footer: {
    class: ["flex items-center justify-end", "shrink-0", "text-right", "gap-3", "px-6", "py-3", "border-t-0", "rounded-b-lg", "bg-surface-50 dark:bg-surface-700", "text-surface-700 dark:text-surface-0/80"]
  },
  rejectbutton: {
    root: {
      class: ["relative", "items-center inline-flex text-center align-bottom justify-center", "px-2.5 py-1.5 min-w-[2rem]", "text-sm", "rounded-md", "text-primary-500 dark:text-primary-400", "hover:bg-primary-300/20", "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset", "focus:ring-primary-500 dark:focus:ring-primary-400"]
    }
  },
  acceptbutton: {
    root: {
      class: ["relative", "items-center inline-flex text-center align-bottom justify-center", "px-2.5 py-1.5 min-w-[2rem]", "text-sm", "rounded-md", "text-white dark:text-surface-900", "bg-primary-500 dark:bg-primary-400", "ring-1 ring-primary-500 dark:ring-primary-400", "hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300", "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-offset-current", "focus:ring-primary-500 dark:focus:ring-primary-400"]
    }
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}