export default {
  root: ({props:e})=>({class:["relative","flex","min-h-[4rem]","rounded-md","shadow-md","bg-surface-0 dark:bg-surface-900","ring-1 ring-inset ring-surface-100 dark:ring-surface-800 ring-offset-0",{"items-center px-2 sm:px-6":e.orientation=="horizontal","flex-col justify-center sm:justify-start sm:w-48 px-2":e.orientation!=="horizontal"}]}),
  menu: ({props:e})=>({class:["sm:flex sm:row-gap-2 sm:col-gap-4","items-center","flex-wrap","flex-col sm:flex-row",{hidden:!(e!=null&&e.mobileActive),flex:e==null?void 0:e.mobileActive},"absolute sm:relative","top-full left-0","sm:top-auto sm:left-auto","w-full sm:w-auto","m-0 ","py-2 px-1.5 sm:py-0 sm:p-0 sm:py-1.5","list-none","shadow-md sm:shadow-none","border-0","sm:rounded-none rounded-md","bg-surface-0 dark:bg-surface-900 sm:bg-transparent dark:sm:bg-transparent","outline-none"]}),
  menuitem: ({props:e})=>({class:["sm:relative static",{"sm:w-auto w-full":e.horizontal,"w-full":!e.horizontal}]}),
  content: ({props:e,context:r})=>({class:[{"rounded-md":e.level<1},{"text-surface-500 dark:text-white/70":!r.focused&&!r.active,"text-surface-500 dark:text-white/70 bg-surface-200 dark:bg-black/70":r.focused&&!r.active,"text-surface-900 dark:text-surface-0/80 bg-surface-50 dark:bg-black/70":r.focused&&r.active,"text-surface-900 dark:text-surface-0/80 bg-surface-50 dark:bg-black/70":!r.focused&&r.active},{"hover:bg-surface-50 dark:hover:bg-surface-800":!r.active,"hover:bg-surface-100 dark:hover:bg-black/40 text-surface-900 dark:text-surface-0/80":r.active},"transition-all","duration-200"]}),
  action: {
    class: ["relative", "sm:text-sm font-medium", "flex", "items-center", "py-2", "px-3", "my-1 sm:my-0", "select-none", "cursor-pointer", "no-underline ", "overflow-hidden"]
  },
  icon: {
    class: "mr-2"
  },
  submenuicon: ({props:e})=>({class:[{"ml-auto sm:ml-2":e.horizontal,"ml-auto":!e.horizontal}]}),
  panel: ({props:e})=>({class:["w-auto","py-1","m-0 mx-2","shadow-none sm:shadow-md","border-0","bg-surface-0 dark:bg-surface-900","static sm:absolute","z-10",{"sm:left-full top-0":!e.horizontal}]}),
  grid: {
    class: "flex flex-wrap sm:flex-nowrap"
  },
  column: {
    class: "w-full sm:w-1/2"
  },
  submenu: {
    class: ["m-0 list-none", "py-1 px-2 w-full sm:min-w-[14rem]"]
  },
  submenuheader: {
    class: ["font-medium", "sm:text-md", "py-2.5 px-2", "m-0", "border-b border-surface-200 dark:border-surface-700", "text-surface-700 dark:text-white/80", "bg-surface-0 dark:bg-surface-900"]
  },
  separator: {
    class: "border-t border-surface-200 dark:border-surface-600 my-1"
  },
  menubutton: {
    class: ["flex sm:hidden", "items-center justify-center", "w-8", "h-8", "rounded-full", "text-surface-500 dark:text-white/80", "hover:text-surface-600 dark:hover:text-white/60", "hover:bg-surface-50 dark:hover:bg-surface-800/80", "focus:outline-none focus:outline-offset-0", "focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-400", "transition duration-200 ease-in-out", "cursor-pointer", "no-underline"]
  },
  end: {
    class: "ml-auto self-center"
  }
}