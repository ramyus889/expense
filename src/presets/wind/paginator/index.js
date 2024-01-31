export default {
  root: {
    class: ["flex items-center justify-center flex-wrap", "px-4", "border-t", "bg-surface-0 dark:bg-surface-800", "text-surface-500 dark:text-white/60", "border-surface-200 dark:border-surface-700"]
  },
  paginatorwrapper: {
    class: "mt-[-1px]"
  },
  firstpagebutton: ({context:e})=>({class:["relative","text-sm font-medium","inline-flex items-center justify-center","border-t-2 border-transparent","min-w-[3rem] h-12 mt-[-1px]","text-surface-500 dark:text-white/60",{"hover:border-surface-300 dark:hover:border-surface-200/30":!e.disabled,"focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400":!e.disabled},"transition duration-200","user-none overflow-hidden",{"cursor-default pointer-events-none opacity-60":e.disabled}]}),
  previouspagebutton: ({context:e})=>({class:["relative","text-sm font-medium","inline-flex items-center justify-center","border-t-2 border-transparent","min-w-[3rem] h-12 mt-[-1px]","text-surface-500 dark:text-white/60",{"hover:border-surface-300 dark:hover:border-surface-200/30":!e.disabled,"focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400":!e.disabled},"transition duration-200","user-none overflow-hidden",{"cursor-default pointer-events-none opacity-60":e.disabled}]}),
  nextpagebutton: ({context:e})=>({class:["relative","text-sm font-medium","inline-flex items-center justify-center","border-t-2 border-transparent","min-w-[3rem] h-12 mt-[-1px]","text-surface-500 dark:text-white/60",{"hover:border-surface-300 dark:hover:border-surface-200/30":!e.disabled,"focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400":!e.disabled},"transition duration-200","user-none overflow-hidden",{"cursor-default pointer-events-none opacity-60":e.disabled}]}),
  lastpagebutton: ({context:e})=>({class:["relative","text-sm font-medium","inline-flex items-center justify-center","border-t-2 border-transparent","min-w-[3rem] h-12 mt-[-1px]","text-surface-500 dark:text-white/60",{"hover:border-surface-300 dark:hover:border-surface-200/30":!e.disabled,"focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400":!e.disabled},"transition duration-200","user-none overflow-hidden",{"cursor-default pointer-events-none opacity-60":e.disabled}]}),
  pagebutton: ({context:e})=>({class:["relative","text-sm font-medium","inline-flex items-center justify-center","border-t-2","min-w-[3rem] h-12 mt-[-1px]",{"text-surface-500 dark:text-white/60 border-transparent":!e.active,"border-primary-500 dark:border-primary-400 text-primary-500 dark:text-surface-0":e.active},{"hover:border-surface-300 dark:hover:border-surface-200/30":!e.disabled&&!e.active,"focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400":!e.disabled},"transition duration-200","user-none overflow-hidden",{"cursor-default pointer-events-none opacity-60":e.disabled}]}),
  rowperpagedropdown: {
    root: ({props:e,state:r})=>({class:["inline-flex","relative","h-8","rounded-md","mx-2","bg-transparent","transition-all","duration-200",{"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 dark:focus-visible:ring-primary-500":!r.focused},"cursor-pointer","select-none",{"opacity-60":e.disabled,"pointer-events-none":e.disabled,"cursor-default":e.disabled}]}),
    input: {
      class: ["font-sans", "leading-6", "sm:text-sm", "block", "flex-auto", "flex items-center", "bg-transparent", "border-0", "text-surface-800 dark:text-white/80", "w-[1%]", "py-1.5 px-3 pr-0", "rounded-none", "transition", "duration-200", "focus-visible:outline-none focus-visible:shadow-none", "relative", "cursor-pointer", "overflow-hidden overflow-ellipsis", "whitespace-nowrap", "appearance-none"]
    },
    trigger: {
      class: ["sm:text-sm", "flex items-center justify-center", "shrink-0", "bg-transparent", "text-surface-500", "w-12", "h-8", "rounded-tr-md", "rounded-br-md"]
    },
    dropdownicon: {
      class: ""
    },
    panel: {
      class: ["absolute top-0 left-0", "mt-1", "border-0", "rounded-md", "shadow-md", "bg-surface-0 dark:bg-surface-800", "text-surface-800 dark:text-white/80", "ring-1 ring-inset ring-surface-300 dark:ring-surface-700"]
    },
    wrapper: {
      class: ["max-h-[15rem]", "overflow-auto"]
    },
    list: {
      class: "py-1 list-none m-0"
    },
    item: ({context:e})=>({class:["sm:text-sm","leading-none",{"font-normal":!e.selected,"font-bold":e.selected},"relative","border-0","rounded-none","m-0","py-2 px-4",{"text-surface-700 dark:text-white/80":!e.focused&&!e.selected},{"bg-primary-500 dark:bg-primary-400 text-white dark:text-surface-700":e.focused&&e.selected},{"bg-transparent text-surface-700 dark:text-white/80":!e.focused&&e.selected},"hover:bg-primary-500 dark:hover:bg-primary-400 hover:text-white dark:hover:text-surface-700","cursor-pointer","overflow-hidden","whitespace-nowrap"]})
  },
  jumptopageinput: {
    root: {
      class: "inline-flex mx-2"
    },
    input: {
      root: {
        class: ["relative", "font-sans", "leading-6", "sm:text-sm", "block", "flex-auto", "bg-transparent", "border-0", "text-surface-800 dark:text-white/80", "ring-1 ring-inset ring-surface-300 dark:ring-surface-700", "w-[1%] max-w-[3rem]", "py-1.5 px-3", "rounded-md", "transition", "duration-200", "hover:border-primary-500 dark:hover:border-primary-400", "focus-visible:outline-none focus-visible:shadow-none", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-600 dark:focus-visible:ring-primary-500", "cursor-pointer", "overflow-hidden overflow-ellipsis", "whitespace-nowrap", "appearance-none"]
      }
    }
  },
  jumptopagedropdown: {
    root: ({props:e,state:r})=>({class:["inline-flex","relative","h-8","rounded-md","mx-2","bg-transparent","transition-all","duration-200",{"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 dark:focus-visible:ring-primary-500":!r.focused},"cursor-pointer","select-none",{"opacity-60":e.disabled,"pointer-events-none":e.disabled,"cursor-default":e.disabled}]}),
    input: {
      class: ["font-sans", "leading-6", "sm:text-sm", "block", "flex-auto", "flex items-center", "bg-transparent", "border-0", "text-surface-800 dark:text-white/80", "w-[1%]", "py-1.5 px-3 pr-0", "rounded-none", "transition", "duration-200", "focus-visible:outline-none focus-visible:shadow-none", "relative", "cursor-pointer", "overflow-hidden overflow-ellipsis", "whitespace-nowrap", "appearance-none"]
    },
    trigger: {
      class: ["sm:text-sm", "flex items-center justify-center", "shrink-0", "bg-transparent", "text-surface-500", "w-12", "h-8", "rounded-tr-md", "rounded-br-md"]
    },
    panel: {
      class: ["absolute top-0 left-0", "mt-1", "border-0", "rounded-md", "shadow-md", "bg-surface-0 dark:bg-surface-800", "text-surface-800 dark:text-white/80", "ring-1 ring-inset ring-surface-300 dark:ring-surface-700"]
    },
    wrapper: {
      class: ["max-h-[15rem]", "overflow-auto"]
    },
    list: {
      class: "py-1 list-none m-0"
    },
    item: ({context:e})=>({class:["sm:text-sm","leading-none",{"font-normal":!e.selected,"font-bold":e.selected},"relative","border-0","rounded-none","m-0","py-2 px-4",{"text-surface-700 dark:text-white/80":!e.focused&&!e.selected},{"bg-primary-500 dark:bg-primary-400 text-white dark:text-surface-700":e.focused&&e.selected},{"bg-transparent text-surface-700 dark:text-white/80":!e.focused&&e.selected},"hover:bg-primary-500 dark:hover:bg-primary-400 hover:text-white dark:hover:text-surface-700","cursor-pointer","overflow-hidden","whitespace-nowrap"]})
  }
}