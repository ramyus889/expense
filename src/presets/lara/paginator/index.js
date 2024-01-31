export default {
  root: {
    class: ["flex items-center justify-center flex-wrap", "px-4 py-2", "border-0", "bg-surface-0 dark:bg-surface-800", "text-surface-500 dark:text-white/60"]
  },
  firstpagebutton: ({context:e})=>({class:["relative","inline-flex items-center justify-center","border-0 rounded-full dark:rounded-md","min-w-[3rem] h-12 m-[0.143rem]","leading-none","text-surface-500 dark:text-white/60",{"hover:bg-surface-50 dark:hover:bg-surface-700/70":!e.disabled,"focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50":!e.disabled},"transition duration-200","user-none overflow-hidden",{"cursor-default pointer-events-none opacity-60":e.disabled}]}),
  previouspagebutton: ({context:e})=>({class:["relative","inline-flex items-center justify-center","border-0 rounded-full dark:rounded-md","min-w-[3rem] h-12 m-[0.143rem]","leading-none","text-surface-500 dark:text-white/60",{"hover:bg-surface-50 dark:hover:bg-surface-700/70":!e.disabled,"focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50":!e.disabled},"transition duration-200","user-none overflow-hidden",{"cursor-default pointer-events-none opacity-60":e.disabled}]}),
  nextpagebutton: ({context:e})=>({class:["relative","inline-flex items-center justify-center","border-0 rounded-full dark:rounded-md","min-w-[3rem] h-12 m-[0.143rem]","leading-none","text-surface-500 dark:text-white/60",{"hover:bg-surface-50 dark:hover:bg-surface-700/70":!e.disabled,"focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50":!e.disabled},"transition duration-200","user-none overflow-hidden",{"cursor-default pointer-events-none opacity-60":e.disabled}]}),
  lastpagebutton: ({context:e})=>({class:["relative","inline-flex items-center justify-center","border-0 rounded-full dark:rounded-md","min-w-[3rem] h-12 m-[0.143rem]","leading-none","text-surface-500 dark:text-white/60",{"hover:bg-surface-50 dark:hover:bg-surface-700/70":!e.disabled,"focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50":!e.disabled},"transition duration-200","user-none overflow-hidden",{"cursor-default pointer-events-none opacity-60":e.disabled}]}),
  pagebutton: ({context:e})=>({class:["relative","inline-flex items-center justify-center","border-0 rounded-full dark:rounded-md","min-w-[3rem] h-12 m-[0.143rem]","leading-none","text-surface-500 dark:text-white/80",{"bg-primary-50 border-primary-50 dark:border-transparent text-primary-700 dark:text-surface-0 dark:bg-primary-400/30":e.active},{"hover:bg-surface-50 dark:hover:bg-surface-700/70":!e.disabled&&!e.active,"focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50":!e.disabled},"transition duration-200","user-none overflow-hidden",{"cursor-default pointer-events-none opacity-60":e.disabled}]}),
  rowperpagedropdown: {
    root: ({props:e,state:r})=>({class:["inline-flex","relative","h-12","rounded-md","mx-2","bg-surface-0 dark:bg-surface-900","border border-surface-300 dark:border-surface-700","transition-all","duration-200","hover:border-primary-500 dark:hover:border-primary-300",{"focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50":!r.focused},"cursor-pointer","select-none",{"opacity-60":e.disabled,"pointer-events-none":e.disabled,"cursor-default":e.disabled}]}),
    input: {
      class: ["font-sans", "leading-5", "block", "flex-auto", "bg-transparent", "border-0", "text-surface-800 dark:text-white/80", "w-[1%]", "p-3 pr-0", "rounded-none", "transition", "duration-200", "focus:outline-none focus:shadow-none", "relative", "cursor-pointer", "overflow-hidden overflow-ellipsis", "whitespace-nowrap", "appearance-none"]
    },
    trigger: {
      class: ["flex items-center justify-center", "shrink-0", "bg-transparent", "text-surface-500", "w-12", "rounded-tr-md", "rounded-br-md"]
    },
    panel: {
      class: ["absolute top-0 left-0", "border-0 dark:border", "rounded-md", "shadow-md", "bg-surface-0 dark:bg-surface-800", "text-surface-800 dark:text-white/80", "dark:border-surface-700"]
    },
    wrapper: {
      class: ["max-h-[200px]", "overflow-auto"]
    },
    list: {
      class: "py-3 list-none m-0"
    },
    item: ({context:e})=>({class:["font-normal","leading-none","relative","border-0","rounded-none","m-0","py-3 px-5",{"text-surface-700 dark:text-white/80":!e.focused&&!e.selected},{"bg-surface-50 dark:bg-surface-600/60 text-surface-700 dark:text-white/80":e.focused&&!e.selected},{"bg-primary-100 dark:bg-primary-400/40 text-primary-700 dark:text-white/80":e.focused&&e.selected},{"bg-primary-50 dark:bg-primary-400/40 text-primary-700 dark:text-white/80":!e.focused&&e.selected},{"hover:bg-surface-100 dark:hover:bg-surface-600/80":!e.focused&&!e.selected},{"hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-surface-600/80":e.focused&&!e.selected},"transition-shadow","duration-200","cursor-pointer","overflow-hidden","whitespace-nowrap"]})
  },
  jumptopageinput: {
    root: {
      class: "inline-flex mx-2"
    },
    input: {
      root: {
        class: ["relative", "font-sans", "leading-none", "block", "flex-auto", "text-surface-600 dark:text-surface-200", "placeholder:text-surface-400 dark:placeholder:text-surface-500", "bg-surface-0 dark:bg-surface-900", "border border-surface-300 dark:border-surface-600", "w-[1%] max-w-[3rem]", "p-3 m-0", "rounded-md", "transition", "duration-200", "hover:border-primary-500 dark:hover:border-primary-400", "focus:outline-none focus:shadow-none", "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50", "cursor-pointer", "overflow-hidden overflow-ellipsis", "whitespace-nowrap", "appearance-none"]
      }
    }
  },
  jumptopagedropdown: {
    root: ({props:e,state:r})=>({class:["inline-flex","relative","h-12","rounded-md","bg-surface-0 dark:bg-surface-900","border border-surface-300 dark:border-surface-700","transition-all","duration-200","hover:border-primary-500 dark:hover:border-primary-300",{"focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50":!r.focused},"cursor-pointer","select-none",{"opacity-60":e.disabled,"pointer-events-none":e.disabled,"cursor-default":e.disabled}]}),
    input: {
      class: ["font-sans", "leading-none", "block", "flex-auto", "bg-transparent", "border-0", "text-surface-800 dark:text-white/80", "w-[1%]", "p-3", "rounded-none", "transition", "duration-200", "focus:outline-none focus:shadow-none", "relative", "cursor-pointer", "overflow-hidden overflow-ellipsis", "whitespace-nowrap", "appearance-none"]
    },
    trigger: {
      class: ["flex items-center justify-center", "shrink-0", "bg-transparent", "text-surface-500", "w-12", "rounded-tr-md", "rounded-br-md"]
    },
    panel: {
      class: ["absolute top-0 left-0", "border-0 dark:border", "rounded-md", "shadow-md", "bg-surface-0 dark:bg-surface-800", "text-surface-800 dark:text-white/80", "dark:border-surface-700"]
    },
    wrapper: {
      class: ["max-h-[200px]", "overflow-auto"]
    },
    list: {
      class: "py-3 list-none m-0"
    },
    item: ({context:e})=>({class:["font-normal","leading-none","relative","border-0","rounded-none","m-0","py-3 px-5",{"text-surface-700 dark:text-white/80":!e.focused&&!e.selected},{"bg-surface-50 dark:bg-surface-600/60 text-surface-700 dark:text-white/80":e.focused&&!e.selected},{"bg-primary-100 dark:bg-primary-400/40 text-primary-700 dark:text-white/80":e.focused&&e.selected},{"bg-primary-50 dark:bg-primary-400/40 text-primary-700 dark:text-white/80":!e.focused&&e.selected},{"hover:bg-surface-100 dark:hover:bg-surface-600/80":!e.focused&&!e.selected},{"hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-surface-600/80":e.focused&&!e.selected},"transition-shadow","duration-200","cursor-pointer","overflow-hidden","whitespace-nowrap"]})
  }
}