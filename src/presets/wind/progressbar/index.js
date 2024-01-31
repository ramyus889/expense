export default {
  root: ({props:e})=>({class:["relative overflow-hidden","border-0","rounded-md",{"h-7 pt-5":e.mode!=="indeterminate"&&e.showValue},{"h-2 bg-surface-100 dark:bg-surface-700 ":e.mode=="indeterminate"||!e.showValue},{"before:absolute before:w-full before:rounded-md before:h-2 before:top-[1.25rem] before:left-0 before:bottom-0 before:bg-surface-100 dark:before:bg-surface-700":e.mode!=="indeterminate"}]}),
  value: ({props:e})=>({class:[{"absolute flex items-center justify-center":e.mode!=="indeterminate"},"bg-primary-500 dark:bg-primary-400","m-0",{"h-2 w-0":e.mode!=="indeterminate"},"border-0 rounded-md",{"transition-width duration-1000 ease-in-out":e.mode!=="indeterminate","progressbar-value-animate":e.mode=="indeterminate"},{"before:absolute before:top-0 before:left-0 before:bottom-0 before:bg-inherit ":e.mode=="indeterminate","after:absolute after:top-0 after:left-0 after:bottom-0 after:bg-inherit after:delay-1000":e.mode=="indeterminate"}]}),
  label: {
    class: ["inline-flex justify-end", "absolute inset-0 mr-1 -top-[1.15rem]", "text-sm text-surface-600 dark:text-surface-0/60", "leading-none"]
  }
}