export default {
  root: {
    class: ["block", "px-5 md:px-6 py-5", "rounded-md rounded-lg", "bg-surface-0 dark:bg-surface-900", "text-surface-700 dark:text-surface-0/80", "ring-1 ring-inset ring-surface-300 dark:ring-surface-700 ring-offset-0"]
  },
  legend: ({props:e})=>({class:["font-medium","leading-none",{"p-0":e.toggleable,"px-3 py-1.5":!e.toggleable},"rounded-md","text-surface-700 dark:text-surface-0/80","bg-surface-0 dark:bg-surface-900","transition-none",{"":e.toggleable},{"focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-primary-600 ring-inset dark:focus:ring-primary-500":e.toggleable}]}),
  toggler: ({props:e})=>({class:["flex items-center justify-center","relative",{"px-3 py-1.5":e.toggleable},{"rounded-md":e.toggleable},{"text-surface-700 dark:text-surface-200 hover:text-surface-900 hover:text-surface-900":e.toggleable},{"hover:text-surface-900 dark:hover:text-surface-100":e.toggleable},{"focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:focus:ring-primary-500":e.toggleable},{"transition-none cursor-pointer overflow-hidden select-none":e.toggleable}]}),
  togglerIcon: {
    class: "mr-2 inline-block"
  },
  legendTitle: {
    class: "flex items-center justify-center leading-none"
  },
  content: {
    class: "p-0"
  },
  transition: {
    enterFromClass: "max-h-0",
    enterActiveClass: "overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]",
    enterToClass: "max-h-[1000px]",
    leaveFromClass: "max-h-[1000px]",
    leaveActiveClass: "overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]",
    leaveToClass: "max-h-0"
  }
}