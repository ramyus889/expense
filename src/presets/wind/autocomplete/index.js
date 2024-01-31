export default {
  root: ({props:e})=>({class:["relative","inline-flex",{"w-full":e.multiple},"text-surface-900 dark:text-surface-0",{"opacity-60 select-none pointer-events-none cursor-default":e.disabled}]}),
  container: ({props:e,state:r})=>({class:["font-sans sm:text-sm leading-none","flex items-center flex-wrap","gap-1","m-0 list-none","px-3 py-1",{"px-3 py-1.5":!e.multiple,"px-3 py-1":e.multiple},"w-full","appearance-none rounded-md","text-surface-900 dark:text-surface-0","bg-surface-0 dark:bg-surface-900","placeholder:text-surface-400 dark:placeholder:text-surface-500","shadow-sm","focus:outline-none focus:outline-offset-0",{"ring-1 ring-inset ring-surface-300 dark:ring-surface-700 ring-offset-0":!r.focused,"ring-2 ring-primary-500 dark:ring-primary-400":r.focused},"transition duration-200 ease-in-out","cursor-text overflow-hidden"]}),
  inputtoken: ({props:e})=>({class:[{"py-1.5 px-0":!e.multiple,"p-0.5":e.multiple},,"inline-flex flex-auto"]}),
  input: ({props:e})=>({class:["font-sans sm:text-sm leading-none","appearance-none rounded-md",{"rounded-tr-none rounded-br-none":e.dropdown},{"outline-none shadow-none rounded-none":e.multiple},{"w-full":e.multiple},"m-0",{"py-1.5 px-3":!e.multiple,"p-0":e.multiple},"text-surface-700 dark:text-white/80",{"bg-surface-0 dark:bg-surface-900":!e.multiple,"border border-surface-300 dark:border-surface-700":!e.multiple,"border-0 bg-transparent":e.multiple},{"focus:outline-none focus:outline-offset-0 focus:ring-inset focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400":!e.multiple},"transition-colors duration-200"]}),
  token: {
    class: ["inline-flex items-center", "py-0.5 px-3", "rounded-[1.14rem]", "text-surface-700 dark:text-white/70", "bg-surface-200 dark:bg-surface-700"]
  },
  label: {
    class: "leading-5"
  },
  removeTokenIcon: {
    class: ["rounded-md leading-6", "ml-2", "w-4 h-4", "transition duration-200 ease-in-out", "cursor-pointer"]
  },
  dropdownbutton: {
    root: {
      class: ["relative text-sm leading-none", "items-center inline-flex text-center align-bottom", "rounded-r-md", "px-2.5 py-1.5", "-ml-[1px]", "text-surface-600 dark:text-surface-100", "bg-surface-100 dark:bg-surface-800", "ring-1 ring-inset ring-surface-300 dark:ring-surface-700", "hover:bg-surface-200 dark:hover:bg-surface-700", "focus:outline-none focus:outline-offset-0 focus:ring-1", "focus:ring-primary-500 dark:focus:ring-primary-400"]
    }
  },
  loadingicon: {
    class: ["text-sm leading-none text-surface-500 dark:text-surface-0/70", "absolute top-[50%] right-[0.5rem] -mt-2 animate-spin"]
  },
  panel: {
    class: ["absolute top-0 left-0", "mt-2", "border-0", "rounded-md", "shadow-md", "max-h-[15rem]", "overflow-auto", "bg-surface-0 dark:bg-surface-800", "text-surface-800 dark:text-white/80", "ring-1 ring-inset ring-surface-300 dark:ring-surface-700"]
  },
  list: {
    class: "py-1 list-none m-0"
  },
  item: ({context:e})=>({class:["sm:text-sm","leading-none",{"font-normal":!e.selected,"font-bold":e.selected},"relative","border-0","rounded-none","m-0","py-2 px-4",{"text-surface-700 dark:text-white/80":!e.focused&&!e.selected},{"bg-surface-200 dark:bg-surface-600/60 text-surface-700 dark:text-white/80":e.focused&&!e.selected},{"bg-primary-500 dark:bg-primary-400 text-white dark:text-surface-700":e.focused&&e.selected},{"bg-transparent text-surface-700 dark:text-white/80":!e.focused&&e.selected},"hover:bg-primary-500 dark:hover:bg-primary-400 hover:text-white dark:hover:text-surface-700","cursor-pointer","overflow-hidden","whitespace-nowrap"]}),
  itemgroup: {
    class: ["font-bold", "sm:text-sm", "m-0", "py-2 px-4", "text-surface-800 dark:text-white/80", "bg-surface-0 dark:bg-surface-600/80", "cursor-auto"]
  },
  emptymessage: {
    class: ["leading-none", "sm:text-sm", "py-2 px-4", "text-surface-800 dark:text-white/80", "bg-transparent"]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}