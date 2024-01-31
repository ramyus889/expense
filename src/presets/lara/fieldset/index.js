export default {
  root: {
    class: ["block", "px-4 pt-2 py-3", "inline-size-min", "rounded-md", "border border-surface-200 dark:border-surface-700", "bg-surface-0 dark:bg-surface-900", "text-surface-700 dark:text-surface-0/80"]
  },
  legend: ({props:e})=>({class:["font-bold","leading-none",{"p-0":e.toggleable,"p-5":!e.toggleable},"rounded-md","text-surface-700 dark:text-surface-0/80","border border-surface-200 dark:border-surface-700","bg-surface-50 dark:bg-surface-900","transition-none",{"hover:bg-surface-100 hover:border-surface-200 hover:text-surface-900 dark:hover:text-surface-0/80 dark:hover:bg-surface-800/80":e.toggleable}]}),
  toggler: ({props:e})=>({class:["flex items-center justify-center","relative",{"p-5":e.toggleable},{"rounded-md":e.toggleable},{"text-surface-700 dark:text-surface-200 hover:text-surface-900 hover:text-surface-900":e.toggleable},{"hover:text-surface-900 dark:hover:text-surface-100":e.toggleable},{"focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50":e.toggleable},{"transition-none cursor-pointer overflow-hidden select-none":e.toggleable}]}),
  togglerIcon: {
    class: "mr-2 inline-block"
  },
  legendTitle: {
    class: "flex items-center justify-center leading-none"
  },
  content: {
    class: "p-5"
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