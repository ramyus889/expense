export default {
  root: {
    class: ["min-w-[12rem]", "rounded-md", "shadow-md", "py-2", "bg-surface-0 dark:bg-surface-700", "text-surface-700 dark:text-white/80", "dark:border dark:border-surface-700"]
  },
  menu: {
    class: ["list-none", "m-0", "p-0", "outline-none"]
  },
  menuitem: {
    class: "relative"
  },
  content: ({context:e})=>({class:["rounded-none","text-surface-700 dark:text-white/80",{"text-surface-500 dark:text-white/70":!e.focused&&!e.active,"text-surface-500 dark:text-white/70 bg-surface-200 dark:bg-surface-600/90":e.focused&&!e.active,"text-primary-700 dark:text-surface-0/80 bg-primary-50 dark:bg-primary-400/30":e.focused&&e.active,"text-primary-700 dark:text-surface-0/80 bg-primary-50 dark:bg-primary-400/30":!e.focused&&e.active},"transition-shadow","duration-200",{"hover:bg-surface-100 dark:hover:bg-surface-600/80":!e.active,"hover:bg-primary-400/30 dark:hover:bg-primary-300/30 text-primary-700 dark:text-surface-0/80":e.active}]}),
  action: {
    class: ["relative", "flex", "items-center", "py-3", "px-5", "text-surface-700 dark:text-white/80", "no-underline", "overflow-hidden", "cursor-pointer", "select-none"]
  },
  icon: {
    class: ["mr-2", "text-surface-600 dark:text-white/70"]
  },
  label: {
    class: ["leading-none"]
  },
  submenu: ({props:e})=>({class:["w-full sm:w-48","py-1","m-0","list-none","shadow-md","rounded-md","dark:border dark:border-surface-700","static sm:absolute","z-10",{"sm:absolute sm:left-full sm:top-0":e.level>1},"bg-surface-0 dark:bg-surface-700"]}),
  submenuicon: {
    class: ["ml-auto"]
  },
  separator: {
    class: "border-t border-surface-200 dark:border-surface-600 my-1"
  },
  transition: {
    enterFromClass: "opacity-0",
    enterActiveClass: "transition-opacity duration-250"
  }
}