export default {
  root: ({props:e,state:r})=>({class:["inline-flex","relative","w-full md:max-w-[20rem]","rounded-md","bg-surface-0 dark:bg-surface-900","border border-surface-300 dark:border-surface-700","transition-all","duration-200","hover:border-primary-500 dark:hover:border-primary-300",{"outline-none outline-offset-0 ring ring-primary-400/50 dark:ring-primary-300/50":r.focused},"cursor-pointer","select-none",{"opacity-60":e.disabled,"pointer-events-none":e.disabled,"cursor-default":e.disabled}]}),
  labelContainer: {
    class: "overflow-hidden flex flex-auto cursor-pointer "
  },
  label: ({props:e})=>{var r,t;return{class:["leading-none","block ",{"p-3":e.display!=="chip","py-3 px-3":e.display==="chip"&&!((r=e==null?void 0:e.modelValue)!=null&&r.length),"py-1.5 px-3":e.display==="chip"&&((t=e==null?void 0:e.modelValue)==null?void 0:t.length)>0},{"text-surface-800 dark:text-white/80":e.modelValue,"text-surface-400 dark:text-surface-500":!e.modelValue},"placeholder:text-surface-400 dark:placeholder:text-surface-500","transition duration-200","overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis"]}},
  token: {
    class: ["inline-flex items-center", "py-1.5 px-3 mr-2", "rounded-[1.14rem]", "bg-surface-200 dark:bg-surface-700", "text-surface-700 dark:text-white/70", "cursor-default"]
  },
  removeTokenIcon: {
    class: ["rounded-md leading-6", "ml-2", "w-4 h-4", "transition duration-200 ease-in-out", "cursor-pointer"]
  },
  trigger: {
    class: ["flex items-center justify-center", "shrink-0", "bg-transparent", "text-surface-500", "w-12", "rounded-tr-md", "rounded-br-md"]
  },
  panel: {
    class: ["absolute top-0 left-0", "border-0 dark:border", "rounded-md", "shadow-md", "bg-surface-0 dark:bg-surface-800", "text-surface-800 dark:text-white/80", "dark:border-surface-700"]
  },
  header: {
    class: ["flex items-center justify-between", "py-3 px-5", "m-0", "border-b", "rounded-tl-md", "rounded-tr-md", "text-surface-700 dark:text-white/80", "bg-surface-100 dark:bg-surface-800", "border-surface-300 dark:border-surface-700"]
  },
  headerCheckboxContainer: {
    class: ["relative", "inline-flex", "align-bottom", "w-6", "h-6", "cursor-pointer", "select-none"]
  },
  headerCheckbox: ({context:e,state:r})=>({class:["flex","items-center","justify-center","w-6","h-6","rounded-lg","border-2","text-surface-600",{"border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900":!(e!=null&&e.selected),"border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400":e==null?void 0:e.selected},"hover:border-primary-500",{"outline-none outline-offset-0 ring-2 ring-primary-400/50 dark:ring-primary-300/50":r.focused}]}),
  headercheckboxicon: {
    class: ["text-base leading-none", "w-4", "h-4", "text-white dark:text-surface-900", "transition-all", "duration-200"]
  },
  closeButton: {
    class: ["relative", "flex items-center justify-center", "mr-2", "last:mr-0", "w-8 h-8", "border-0", "rounded-full", "text-surface-500", "bg-transparent", "transition duration-200 ease-in-out", "hover:text-surface-700 dark:hover:text-white/80", "hover:bg-surface-100 dark:hover:bg-surface-800/80", "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-inset", "focus:ring-primary-400/50 dark:focus:ring-primary-300/50", "overflow-hidden"]
  },
  closeButtonIcon: {
    class: "w-4 h-4 inline-block"
  },
  wrapper: {
    class: ["max-h-[200px]", "overflow-auto"]
  },
  list: {
    class: "py-3 list-none m-0"
  },
  item: ({context:e})=>({class:["font-normal","leading-none","flex items-center","relative","border-0","rounded-none","m-0","py-3 px-5",{"text-surface-700 dark:text-white/80":!e.focused&&!e.selected},{"bg-surface-200 dark:bg-surface-600/60 text-surface-700 dark:text-white/80":e.focused&&!e.selected},{"bg-primary-100 dark:bg-primary-400/40 text-primary-700 dark:text-white/80":e.focused&&e.selected},{"bg-primary-50 dark:bg-primary-400/40 text-primary-700 dark:text-white/80":!e.focused&&e.selected},{"hover:bg-surface-100 dark:hover:bg-surface-600/80":!e.focused&&!e.selected},{"hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-surface-600/80":e.focused&&!e.selected},"transition-shadow","duration-200","cursor-pointer","overflow-hidden","whitespace-nowrap"]}),
  checkboxContainer: {
    class: ["relative", "inline-flex", "align-bottom", "mr-2", "w-6", "h-6", "cursor-pointer", "select-none"]
  },
  checkbox: ({context:e})=>({class:["flex","items-center","justify-center","w-6","h-6","rounded-lg","border-2","text-surface-600",{"border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900":!(e!=null&&e.selected),"border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400":e==null?void 0:e.selected},"hover:border-primary-500 focus:outline-none","focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50"]}),
  checkboxicon: {
    class: ["text-base leading-none", "w-4", "h-4", "text-white dark:text-surface-900", "transition-all", "duration-200"]
  },
  itemgroup: {
    class: ["font-bold", "m-0", "p-3 px-5", "text-surface-800 dark:text-white/80", "bg-surface-0 dark:bg-surface-600/80", "cursor-auto"]
  },
  filtercontainer: {
    class: "relative w-full mx-2"
  },
  filterinput: {
    class: ["font-sans", "leading-none", "pr-7 py-3 px-3", "-mr-7", "w-full", "text-surface-700 dark:text-white/80", "bg-surface-0 dark:bg-surface-900", "border-surface-200 dark:border-surface-700", "placeholder:text-surface-400 dark:placeholder:text-surface-500", "border", "rounded-lg", "appearance-none", "transition", "duration-200", "hover:border-primary-500 dark:hover:border-primary-300", "focus:ring focus:outline-none focus:outline-offset-0", "focus:ring-primary-400/50 dark:focus:ring-primary-300/50", "appearance-none"]
  },
  filtericon: {
    class: ["absolute", "top-1/2 right-3", "-mt-2"]
  },
  clearicon: {
    class: ["text-surface-500", "absolute", "top-1/2", "right-12", "-mt-2"]
  },
  emptymessage: {
    class: ["leading-none", "py-3 px-5", "text-surface-800 dark:text-white/80", "bg-transparent"]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}