export default {
  root: ({props:e})=>({class:["relative","flex items-center","gap-1",{"opacity-60 select-none pointer-events-none cursor-default":e.disabled}]}),
  cancelitem: ({context:e})=>({class:["inline-flex items-center",{"outline-none ring-2 ring-primary-500 dark:ring-primary-400":e.focused},"cursor-pointer"]}),
  cancelicon: {
    class: ["w-5 h-5", "text-red-500 dark:text-red-400"]
  },
  item: ({props:e,context:r})=>({class:["inline-flex items-center",{"outline-none ring-2 ring-primary-500 dark:ring-primary-400":r.focused},{"cursor-pointer":!e.readonly,"cursor-default":e.readonly}]}),
  officon: ({props:e})=>({class:["w-5 h-5","text-surface-700 dark:text-surface-0/70",{"hover:text-primary-500 dark:hover:text-primary-400":!e.readonly},"transition duration-200 ease-in"]}),
  onicon: ({props:e})=>({class:["w-5 h-5","text-primary-500 dark:text-primary-400","transition duration-200 ease-in"]})
}