export default {
  root: {
    class: ["overflow-hidden", "relative", "border-0", "h-6", "rounded-md", "bg-surface-100 dark:bg-surface-700"]
  },
  value: ({props:e})=>({class:[{"absolute flex items-center justify-center overflow-hidden":e.mode!=="indeterminate"},"bg-primary-500 dark:bg-primary-400","m-0",{"h-full w-0":e.mode!=="indeterminate"},"border-0",{"transition-width duration-1000 ease-in-out":e.mode!=="indeterminate","progressbar-value-animate":e.mode=="indeterminate"},{"before:absolute before:top-0 before:left-0 before:bottom-0 before:bg-inherit ":e.mode=="indeterminate","after:absolute after:top-0 after:left-0 after:bottom-0 after:bg-inherit after:delay-1000":e.mode=="indeterminate"}]}),
  label: {
    class: ["inline-flex", "text-white dark:text-surface-900", "leading-6"]
  }
}