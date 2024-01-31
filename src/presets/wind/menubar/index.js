export default {
  root: {
    class: ["relative", "flex", "items-center", "gap-6", "px-6", "min-h-[4rem]", "rounded-md", "shadow-md", "bg-surface-0 dark:bg-surface-900", "ring-1 ring-inset ring-surface-100 dark:ring-surface-800 ring-offset-0"]
  },
  menu: ({props:e})=>({class:["sm:flex sm:row-gap-2 sm:col-gap-4","items-center","flex-wrap","flex-col sm:flex-row",{hidden:!(e!=null&&e.mobileActive),flex:e==null?void 0:e.mobileActive},"absolute sm:relative","top-full left-0","sm:top-auto sm:left-auto","w-full sm:w-auto","m-0 ","py-2 px-1.5 sm:py-0 sm:p-0 sm:py-1.5","list-none","shadow-md sm:shadow-none","border-0","sm:rounded-none rounded-md","bg-surface-0 dark:bg-surface-900 sm:bg-transparent dark:sm:bg-transparent","outline-none"]}),
  menuitem: {
    class: "sm:relative sm:w-auto w-full static"
  },
  content: ({props:e,context:r})=>({class:[{"rounded-md":e.root},{"text-surface-500 dark:text-white/70":!r.focused&&!r.active,"text-surface-500 dark:text-white/70 bg-surface-200 dark:bg-black/70":r.focused&&!r.active,"text-surface-900 dark:text-surface-0/80 bg-surface-50 dark:bg-black/70":r.focused&&r.active,"text-surface-900 dark:text-surface-0/80 bg-surface-50 dark:bg-black/70":!r.focused&&r.active},{"hover:bg-surface-50 dark:hover:bg-surface-800":!r.active,"hover:bg-surface-100 dark:hover:bg-black/40 text-surface-900 dark:text-surface-0/80":r.active},"transition-all","duration-200"]}),
  action: ({context:e})=>({class:["relative","sm:text-sm font-medium","flex","items-center","py-2","px-3","my-1 sm:my-0",{"pl-5 sm:pl-3":e.level===1,"pl-7 sm:pl-3":e.level===2},"select-none","cursor-pointer","no-underline ","overflow-hidden"]}),
  icon: {
    class: "mr-2"
  },
  submenuicon: ({props:e})=>({class:[{"ml-auto sm:ml-2":e.root,"ml-auto":!e.root}]}),
  submenu: ({props:e})=>({class:["w-full sm:w-48","py-1","m-0 ","list-none","shadow-none sm:shadow-md","border-0","static sm:absolute","z-10",{"sm:absolute sm:left-full sm:top-0":e.level>1},"bg-surface-0 dark:bg-surface-900"]}),
  separator: {
    class: "border-t border-surface-200 dark:border-surface-600 my-1"
  },
  button: {
    class: ["flex sm:hidden", "items-center justify-center", "w-8", "h-8", "rounded-full", "text-surface-500 dark:text-white/80", "hover:text-surface-600 dark:hover:text-white/60", "hover:bg-surface-50 dark:hover:bg-surface-800/80", "focus:outline-none focus:outline-offset-0", "focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-400", "transition duration-200 ease-in-out", "cursor-pointer", "no-underline"]
  },
  end: {
    class: "ml-auto self-center"
  }
}