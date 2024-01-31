export default {
  root: {
    class: ["relative", "inline-flex", "align-bottom", "w-4 h-4", "cursor-default", "select-none"]
  },
  input: ({props:e,state:r})=>({class:["flex justify-center items-center","w-4 h-4","text-sm","font-medium","border-2","rounded-full","transition duration-200 ease-in-out",{"text-surface-700 dark:text-white/80":e.value!==e.modelValue&&e.value!==void 0,"bg-surface-0 dark:bg-surface-900":e.value!==e.modelValue&&e.value!==void 0,"border-surface-300 dark:border-surface-700":e.value!==e.modelValue&&e.value!==void 0,"border-primary-500 dark:border-primary-400":e.value==e.modelValue&&e.value!==void 0},{"outline-none outline-offset-0":!e.disabled&&r.focused,"ring-2 ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-800 ring-primary-500 dark:ring-primary-400":!e.disabled&&r.focused,"opacity-60 cursor-default":e.disabled}]}),
  icon: {
    class: "hidden"
  }
}