export default {
  root: {
    class: "relative"
  },
  menu: {
    class: "p-0 m-0 list-none flex"
  },
  menuitem: {
    class: ["relative", "flex", "justify-center", "flex-1", "overflow-hidden", "before:border-t", "before:border-surface-200", "before:dark:border-surface-700", "before:w-full", "before:absolute", "before:top-1/2", "before:left-0", "before:transform", "before:-mt-4"]
  },
  action: ({props:e})=>({class:["inline-flex items-center","flex-col","transition-shadow","rounded-md","bg-surface-0","dark:bg-transparent","focus:outline-none focus:outline-offset-0 focus:ring","focus:ring-primary-400/50 dark:focus:ring-primary-300/50","overflow-hidden",{"cursor-pointer":!e.readonly}]}),
  step: ({context:e,props:r})=>({class:["flex items-center justify-center","z-20","rounded-full","border","w-[2rem]","h-[2rem]","text-sm","leading-[2rem]",{"text-surface-400 dark:text-white/60":!e.active,"border-surface-100 dark:border-surface-700":!e.active,"bg-surface-0 dark:bg-surface-800":!e.active,"bg-primary-500 dark:bg-primary-400":e.active,"border-primary-500 dark:border-primary-400":e.active,"text-surface-0 dark:text-surface-900":e.active},{"hover:border-surface-300 dark:hover:border-surface-500":!e.active&&!r.readonly},"transition-colors duration-200 ease-in-out"]}),
  label: ({context:e})=>({class:["leading-5",{"font-bold":e.active},"block","mt-2",{"text-surface-400 dark:text-white/60":!e.active,"text-surface-800 dark:text-white/80":e.active},"whitespace-nowrap","overflow-hidden","overflow-ellipsis","max-w-full"]})
}