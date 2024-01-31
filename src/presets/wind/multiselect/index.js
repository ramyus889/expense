export default {
  root: ({props:e,state:r})=>({class:["inline-flex","relative","w-full md:max-w-[20rem]","rounded-md","shadow-sm","bg-surface-0 dark:bg-surface-900",{"ring-1 ring-inset ring-surface-300 dark:ring-surface-700":!r.focused,"ring-2 ring-inset ring-primary-500 dark:ring-primary-400":r.focused},"cursor-default","select-none",{"opacity-60":e.disabled,"pointer-events-none":e.disabled}]}),
  labelContainer: {
    class: "overflow-hidden flex flex-auto cursor-pointer"
  },
  label: ({props:e})=>{var r;return{class:["block leading-5",e.display==="chip"&&((r=e==null?void 0:e.modelValue)==null?void 0:r.length)>0?"py-1 px-3":"py-1.5 px-3",{"text-surface-800 dark:text-white/80":e.modelValue,"text-surface-400 dark:text-surface-500":!e.modelValue},"placeholder:text-surface-400 dark:placeholder:text-surface-500","transition duration-200","overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis"]}},
  token: {
    class: ["inline-flex items-center", "py-0.5 px-3 mr-2", "rounded-[1.14rem]", "text-surface-700 dark:text-white/70", "bg-surface-200 dark:bg-surface-700"]
  },
  removeTokenIcon: {
    class: ["rounded-md leading-6", "ml-2", "w-4 h-4", "transition duration-200 ease-in-out", "cursor-pointer"]
  },
  trigger: {
    class: ["sm:text-sm", "flex items-center justify-center", "shrink-0", "bg-transparent", "text-surface-500", "w-12", "rounded-tr-md", "rounded-br-md"]
  },
  panel: {
    class: ["absolute top-0 left-0", "mt-2", "border-0", "rounded-md", "shadow-md", "bg-surface-0 dark:bg-surface-800", "text-surface-800 dark:text-white/80", "ring-1 ring-inset ring-surface-300 dark:ring-surface-700"]
  },
  header: {
    class: ["flex items-center justify-between", "py-2 px-4", "m-0", "border-b", "rounded-tl-md", "rounded-tr-md", "text-surface-700 dark:text-white/80", "bg-surface-50 dark:bg-surface-800", "border-surface-200 dark:border-surface-700"]
  },
  headerCheckboxContainer: {
    class: ["relative", "inline-flex", "align-bottom", "w-4", "h-4", "mr-2", "cursor-default", "select-none"]
  },
  headerCheckbox: ({context:e,state:r})=>({class:["flex","items-center","justify-center","w-4","h-4","rounded","border","text-surface-600",{"border-surface-300 bg-surface-0 dark:border-surface-700 dark:bg-surface-900":!(e!=null&&e.selected),"border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400":e==null?void 0:e.selected},{"outline-offset-0 ring-1 ring-primary-500 dark:ring-primary-400":r.focused}]}),
  headercheckboxicon: {
    class: ["text-normal", "w-3", "h-3", "text-white dark:text-surface-900", "transition-all", "duration-200"]
  },
  closeButton: {
    class: ["relative", "flex items-center justify-center", "mr-2", "last:mr-0", "w-6 h-6", "border-0", "rounded-full", "text-surface-500", "bg-transparent", "transition duration-200 ease-in-out", "hover:text-surface-700 dark:hover:text-white/80", "hover:bg-surface-100 dark:hover:bg-surface-800/80", "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-inset", "focus:ring-primary-500 dark:focus:ring-primary-400", "overflow-hidden"]
  },
  closeButtonIcon: {
    class: ["inline-block", "w-3", "h-3"]
  },
  wrapper: {
    class: ["max-h-[15rem]", "overflow-auto"]
  },
  list: {
    class: "py-1 list-none m-0"
  },
  item: ({context:e})=>({class:["sm:text-sm","leading-none",{"font-normal":!e.selected,"font-bold":e.selected},"flex items-center","relative","border-0","rounded-none","m-0","py-2 px-4",{"text-surface-700 dark:text-white/80":!e.focused&&!e.selected},{"bg-surface-200 dark:bg-surface-600/60 text-surface-700 dark:text-white/80":e.focused&&!e.selected},{"bg-primary-500 dark:bg-primary-400 text-white dark:text-surface-700":e.focused&&e.selected},{"bg-transparent text-surface-700 dark:text-white/80":!e.focused&&e.selected},"hover:bg-primary-500 dark:hover:bg-primary-400 hover:text-white dark:hover:text-surface-700","cursor-pointer","overflow-hidden","whitespace-nowrap"]}),
  checkboxContainer: {
    class: ["relative", "inline-flex", "align-bottom", "w-4", "h-4", "mr-2", "cursor-default", "select-none"]
  },
  checkbox: ({context:e})=>({class:["flex","items-center","justify-center","w-4","h-4","rounded","border","text-surface-600",{"border-surface-300 bg-surface-0 dark:border-surface-700 dark:bg-surface-900":!(e!=null&&e.selected),"border-primary-400 bg-primary-500 dark:border-primary-300 dark:bg-primary-400":e==null?void 0:e.selected},"focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-400"]}),
  checkboxicon: {
    class: ["text-normal", "w-3", "h-3", "text-white dark:text-surface-900", "transition-all", "duration-200"]
  },
  itemgroup: {
    class: ["font-bold", "sm:text-sm", "m-0", "py-2 px-4", "text-surface-800 dark:text-white/80", "bg-surface-0 dark:bg-surface-600/80", "cursor-auto"]
  },
  filtercontainer: {
    class: "relative w-full mr-2"
  },
  filterinput: {
    class: ["font-sans", "leading-none", "sm:text-sm", "py-1.5 px-3", "pr-7", "-mr-7", "w-full", "text-surface-700 dark:text-white/80", "bg-surface-0 dark:bg-surface-900", "placeholder:text-surface-400", "ring-1 ring-inset ring-surface-300 dark:ring-surface-700", "border-0", "rounded-md", "appearance-none", "focus:ring-2 focus:ring-inset focus:outline-none focus:outline-offset-0", "focus:ring-primary-600 dark:focus:ring-primary-500", "appearance-none"]
  },
  filtericon: {
    class: ["absolute", "top-1/2 right-3", "-mt-2"]
  },
  clearicon: {
    class: ["text-surface-500", "absolute", "top-1/2", "right-12", "-mt-2"]
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