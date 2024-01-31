export default {
  root: ({props:e,state:r})=>({class:["inline-flex","relative","w-full md:w-56","rounded-md","bg-surface-0 dark:bg-surface-900","border border-surface-300 dark:border-surface-700","transition-all","duration-200","hover:border-primary-500 dark:hover:border-primary-300",{"outline-none outline-offset-0 ring ring-primary-400/50 dark:ring-primary-300/50":r.focused},"cursor-pointer","select-none",{"opacity-60":e.disabled,"pointer-events-none":e.disabled,"cursor-default":e.disabled}]}),
  label: ({props:e})=>({class:["font-sans","leading-none"," flex flex-auto","w-[1%]","p-3","rounded-none","bg-transparent","border-0",{"text-surface-800 dark:text-white/80":e.modelValue,"text-surface-400 dark:text-surface-500":!e.modelValue},"placeholder:text-surface-400 dark:placeholder:text-surface-500","transition","duration-200","focus:outline-none focus:shadow-none","relative","cursor-pointer","overflow-hidden overflow-ellipsis","whitespace-nowrap","appearance-none"]}),
  dropdownbutton: {
    class: ["flex items-center justify-center", "shrink-0", "bg-transparent", "text-surface-500", "w-12", "rounded-tr-md", "rounded-br-md"]
  },
  panel: {
    class: ["absolute top-0 left-0", "border-0 dark:border", "rounded-md", "shadow-md", "bg-surface-0 dark:bg-surface-700", "text-surface-800 dark:text-white/80", "dark:border-surface-700"]
  },
  wrapper: {
    class: ["max-h-[200px]", "overflow-auto"]
  },
  list: {
    class: "py-3 list-none m-0"
  },
  item: ({context:e})=>({class:["font-normal","leading-none","border-0","rounded-none","m-0",{"text-surface-500 dark:text-white/70":!e.focused&&!e.active,"text-surface-500 dark:text-white/70 bg-surface-200 dark:bg-surface-600/90":e.focused&&!e.active,"text-primary-700 dark:text-surface-0/80 bg-primary-50 dark:bg-primary-400/30":e.focused&&e.active,"text-primary-700 dark:text-surface-0/80 bg-primary-50 dark:bg-primary-400/30":!e.focused&&e.active},{"hover:bg-surface-100 dark:hover:bg-surface-600/80":!e.active,"hover:bg-primary-500/50 dark:hover:bg-primary-300/30 text-primary-700 dark:text-surface-0/80":e.active},"transition-shadow","duration-200","cursor-pointer","overflow-hidden","whitespace-nowrap"]}),
  content: {
    class: ["relative", "flex", "items-center", "py-3", "px-5", "no-underline", "overflow-hidden", "cursor-pointer", "select-none"]
  },
  groupicon: {
    class: ["ml-auto"]
  },
  sublist: {
    class: ["w-full", "py-1", "m-0", "list-none", "shadow-none sm:shadow-md", "border-0", "static sm:absolute", "z-10", "bg-surface-0 dark:bg-surface-700"]
  },
  separator: {
    class: "border-t border-surface-200 dark:border-surface-600 my-1"
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}