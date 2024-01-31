export default {
  root: {
    class: ["rounded-md", "min-w-[12rem]", "py-1", "bg-surface-0 dark:bg-surface-700", "border border-surface-200 dark:border-surface-700"]
  },
  menu: {
    class: ["list-none", "m-0", "p-0", "outline-none"]
  },
  menuitem: {
    class: ["relative"]
  },
  content: ({context:e})=>({class:["rounded-none",{"text-surface-500 dark:text-white/70":!e.focused&&!e.active,"text-surface-500 dark:text-white/70 bg-surface-200 dark:bg-surface-600/90":e.focused&&!e.active,"text-primary-700 dark:text-surface-0/80 bg-primary-50 dark:bg-primary-400/30":e.focused&&e.active,"text-primary-700 dark:text-surface-0/80 bg-primary-50 dark:bg-primary-400/30":!e.focused&&e.active},{"hover:bg-surface-100 dark:hover:bg-surface-600/80":!e.active,"hover:bg-primary-500/50 dark:hover:bg-primary-300/30 text-primary-700 dark:text-surface-0/80":e.active},"transition-shadow","duration-200"]}),
  action: {
    class: ["relative", "flex", "items-center", "py-3", "px-5", "text-surface-700 dark:text-white/80", "no-underline", "overflow-hidden", "cursor-pointer", "select-none"]
  },
  icon: {
    class: ["mr-2", "text-surface-600 dark:text-white/70"]
  },
  label: {
    class: ["leading-none"]
  },
  submenuicon: {
    class: ["ml-auto"]
  },
  submenu: {
    class: ["w-full sm:w-48", "py-1", "m-0", "list-none", "shadow-none sm:shadow-md", "border-0", "static sm:absolute", "z-10", "bg-surface-0 dark:bg-surface-700"]
  },
  separator: {
    class: "border-t border-surface-200 dark:border-surface-600 my-1"
  }
}