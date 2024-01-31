export default {
  root: ({props:e,context:r})=>({class:["items-center inline-flex text-center align-bottom justify-center","px-2.5 py-1.5","text-sm","rounded-md shadow-sm","text-surface-700 dark:text-white/80",{"ring-1 ring-surface-200 dark:ring-surface-700":!r.focused},{"bg-surface-0 dark:bg-surface-900 ":!e.modelValue,"bg-surface-100 dark:bg-surface-700":e.modelValue},"hover:bg-surface-200 dark:hover:bg-surface-600/80",{"outline-none outline-offset-0 ring-2 ring-inset ring-primary-500 dark:ring-primary-400":r.focused&&!e.disabled},"transition-all duration-200",{"cursor-pointer":!e.disabled,"opacity-60 select-none pointer-events-none cursor-default":e.disabled}]}),
  label: {
    class: "font-semibold text-center w-full"
  },
  icon: {
    class: [" mr-2", "text-surface-700 dark:text-white/80"]
  }
}