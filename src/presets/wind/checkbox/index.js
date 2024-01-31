export default {
  root: {
    class: ["relative", "inline-flex", "align-bottom", "w-4", "h-4", "cursor-default", "select-none"]
  },
  input: ({props:e,context:r})=>({class:["flex","items-center","justify-center","w-4","h-4","rounded","border","text-surface-600",{"border-surface-300 bg-surface-0 dark:border-surface-700 dark:bg-surface-900":!r.checked,"border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400":r.checked},"focus:outline-none focus:outline-offset-0",{"ring-2 ring-primary-500 dark:ring-primary-400":!e.disabled&&r.focused,"cursor-default opacity-60":e.disabled},"transition-colors","duration-200"]}),
  icon: {
    class: ["text-normal", "w-3", "h-3", "text-white dark:text-surface-900", "transition-all", "duration-200"]
  }
}