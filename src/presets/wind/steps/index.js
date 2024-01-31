export default {
  root: {
    class: "relative"
  },
  menu: {
    class: "p-0 m-0 list-none flex justify-center"
  },
  menuitem: {
    class: ["relative", "flex", "justify-center"]
  },
  action: ({props:e,context:r,state:t})=>({class:["inline-flex items-start relative","flex-col","transition-shadow","rounded-md",{"pr-4 min-[576px]:pr-32 md:pr-40":e.model.length!==r.index+1},"bg-surface-0","dark:bg-transparent",{"cursor-pointer":!e.readonly},"after:border-t-2",{"after:border-surface-200 after:dark:border-surface-700":t.d_activeStep<=r.index},{"after:border-primary-500 after:dark:border-primary-400":t.d_activeStep>r.index},"after:w-full","after:absolute","after:top-1/2","after:left-0","after:transform","after:-mt-3",{"after:hidden":e.model.length==r.index+1}]}),
  step: ({context:e,props:r,state:t})=>({class:["flex items-center justify-center","z-40","rounded-full","border-2","w-[2rem]","h-[2rem]","text-sm","leading-[2rem]",{"text-surface-400 dark:text-white/60":!e.active&&t.d_activeStep<e.index,"border-surface-100 dark:border-surface-700":!e.active&&t.d_activeStep<e.index,"bg-surface-0 dark:bg-surface-800":t.d_activeStep<=e.index},{"border-primary-500 dark:border-primary-400":e.active,"text-primary-500 dark:text-primary-400":e.active},{"bg-primary-500 dark:bg-primary-400":t.d_activeStep>e.index,"text-surface-0 dark:text-surface-900":t.d_activeStep>e.index,"border-primary-500 dark:border-primary-400":t.d_activeStep>e.index},{"hover:border-surface-300 dark:hover:border-surface-500":!e.active&&!r.readonly},"transition-colors duration-200 ease-in-out"]}),
  label: ({context:e})=>({class:["relative","text-sm leading-none",{"font-medium":e.active},"block","mt-2",{"text-surface-400 dark:text-white/60":!e.active,"text-surface-800 dark:text-white/80":e.active},"whitespace-nowrap","overflow-ellipsis","max-w-full"]})
}