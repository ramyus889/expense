export default {
  root: {
    class: ["flex"]
  },
  controls: {
    class: ["flex flex-col justify-center gap-2", "p-3"]
  },
  moveupbutton: {
    root: ({context:e})=>({class:["relative inline-flex items-center justify-center","rounded-md","text-white dark:text-surface-900","bg-primary-500 dark:bg-primary-400","border border-primary-500 dark:border-primary-400","text-sm","w-8","m-0","px-2.5 py-1.5 min-w-[2rem]","shadow-sm","transition duration-200 ease-in-out","hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300","focus:outline-none focus:outline-offset-0 focus:ring-2","focus:ring-primary-500 dark:focus:ring-primary-400",{"cursor-default pointer-events-none opacity-60":e.disabled},"cursor-pointer user-select-none"]}),
    label: {
      class: ["flex-initial", "w-0"]
    }
  },
  movedownbutton: {
    root: ({context:e})=>({class:["relative inline-flex items-center justify-center","rounded-md","text-white dark:text-surface-900","bg-primary-500 dark:bg-primary-400","border border-primary-500 dark:border-primary-400","text-sm","w-8","m-0","px-2.5 py-1.5 min-w-[2rem]","shadow-sm","transition duration-200 ease-in-out","hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300","focus:outline-none focus:outline-offset-0 focus:ring-2","focus:ring-primary-500 dark:focus:ring-primary-400",{"cursor-default pointer-events-none opacity-60":e.disabled},"cursor-pointer user-select-none"]}),
    label: {
      class: ["flex-initial", "w-0"]
    }
  },
  movetopbutton: {
    root: ({context:e})=>({class:["relative inline-flex items-center justify-center","rounded-md","text-white dark:text-surface-900","bg-primary-500 dark:bg-primary-400","border border-primary-500 dark:border-primary-400","text-sm","w-8","m-0","px-2.5 py-1.5 min-w-[2rem]","shadow-sm","transition duration-200 ease-in-out","hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300","focus:outline-none focus:outline-offset-0 focus:ring-2","focus:ring-primary-500 dark:focus:ring-primary-400",{"cursor-default pointer-events-none opacity-60":e.disabled},"cursor-pointer user-select-none"]}),
    label: {
      class: ["flex-initial", "w-0"]
    }
  },
  movebottombutton: {
    root: ({context:e})=>({class:["relative inline-flex items-center justify-center","rounded-md","text-white dark:text-surface-900","bg-primary-500 dark:bg-primary-400","border border-primary-500 dark:border-primary-400","text-sm","w-8","m-0","px-2.5 py-1.5 min-w-[2rem]","shadow-sm","transition duration-200 ease-in-out","hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300","focus:outline-none focus:outline-offset-0 focus:ring-2","focus:ring-primary-500 dark:focus:ring-primary-400",{"cursor-default pointer-events-none opacity-60":e.disabled},"cursor-pointer user-select-none"]}),
    label: {
      class: ["flex-initial", "w-0"]
    }
  },
  container: {
    class: ["flex-auto"]
  },
  header: {
    class: ["font-semibold", "border-b rounded-t-md", "py-3.5 px-3", "text-surface-800 dark:text-white/80", "bg-surface-0 dark:bg-surface-800", "border-surface-200 dark:border-surface-700 border-b"]
  },
  list: {
    class: ["list-none m-0 p-0", "min-h-[12rem] max-h-[24rem]", "rounded-b-md border-0", "text-surface-600 dark:text-white/80", "bg-surface-0 dark:bg-surface-800", "border border-surface-200 dark:border-surface-700", "py-3 px-0", "outline-none", "overflow-auto"]
  },
  item: ({context:e})=>({class:["relative","py-3.5 px-3 m-0","border-b last:border-b-0","transition duration-200","text-surface-700 dark:text-white/80","border-surface-200 dark:border-surface-700",{"bg-surface-100 dark:bg-surface-600/30":e.active&&!e.focused},{"bg-surface-200 dark:bg-surface-500/30":e.active&&e.focused},{"bg-surface-50 dark:bg-surface-700/70":!e.active&&e.focused},"hover:bg-surface-100 dark:hover:bg-surface-700","cursor-pointer overflow-hidden"]})
}