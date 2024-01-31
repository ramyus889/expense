export default {
  root: {
    class: "overflow-x-auto"
  },
  menu: {
    class: ["flex flex-1", "list-none", "p-0 m-0", "bg-surface-0 dark:bg-surface-800", "border-b border-surface-200 dark:border-surface-700", "text-surface-900 dark:text-surface-0/80"]
  },
  menuitem: {
    class: "mr-0"
  },
  action: ({context:e,state:r})=>({class:["relative","font-medium","text-md","flex items-center","py-4 px-3","-mb-[1px]","border-b-2","rounded-t-md",{"border-surface-200 dark:border-surface-700":r.d_activeIndex!==e.index,"bg-surface-0 dark:bg-surface-800":r.d_activeIndex!==e.index,"text-surface-700 dark:text-surface-0/80":r.d_activeIndex!==e.index,"bg-surface-0 dark:bg-surface-800":r.d_activeIndex===e.index,"border-primary-500 dark:border-primary-400":r.d_activeIndex===e.index,"text-primary-500 dark:text-primary-400":r.d_activeIndex===e.index},"focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-inset","focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",{"hover:bg-surface-0 dark:hover:bg-surface-800/80":r.d_activeIndex!==e.index,"hover:border-surface-400 dark:hover:border-surface-600":r.d_activeIndex!==e.index,"hover:text-surface-900 dark:hover:text-surface-0":r.d_activeIndex!==e.index},"transition-all duration-200","cursor-pointer select-none text-decoration-none","overflow-hidden","user-select-none","whitespace-nowrap"]}),
  icon: {
    class: "mr-2"
  }
}