export default {
  root: {
    class: ["min-w-[12rem]", "rounded-md", "shadow-md", "p-1.5", "bg-surface-0 dark:bg-surface-700", "text-surface-700 dark:text-white/80", "dark:border dark:border-surface-700"]
  },
  menu: {
    class: ["list-none", "m-0", "p-0", "outline-none"]
  },
  menuitem: {
    class: "relative"
  },
  content: ({context:e})=>({class:["rounded-md",{"text-surface-500 dark:text-white/70":!e.focused&&!e.active,"text-surface-500 dark:text-white/70 bg-surface-200 dark:bg-black/70":e.focused&&!e.active,"text-surface-900 dark:text-surface-0/80 bg-surface-50 dark:bg-black/70":e.focused&&e.active,"text-surface-900 dark:text-surface-0/80 bg-surface-50 dark:bg-black/70":!e.focused&&e.active},{"hover:bg-surface-50 dark:hover:bg-surface-800":!e.active,"hover:bg-surface-100 dark:hover:bg-black/40 text-surface-900 dark:text-surface-0/80":e.active},"transition-shadow","duration-200"]}),
  action: {
    class: ["relative", "font-semibold", "flex", "items-center", "py-2", "px-3", "no-underline", "overflow-hidden", "cursor-pointer", "select-none"]
  },
  icon: {
    class: ["mr-2", "leading-6", "text-sm"]
  },
  label: {
    class: ["leading-6", "text-sm"]
  },
  submenu: ({props:e})=>({class:["w-full sm:w-48","p-1.5","m-0","list-none","shadow-md","rounded-md","static sm:absolute","z-10",{"sm:absolute sm:left-full sm:top-0":e.level>1},"bg-surface-0 dark:bg-surface-700"]}),
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