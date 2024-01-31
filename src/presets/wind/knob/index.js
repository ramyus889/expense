export default {
  root: ({props:e})=>({class:[{"opacity-60 select-none pointer-events-none cursor-default":e.disabled}]}),
  range: {
    class: ["stroke-current", "stroke-surface-200 dark:stroke-surface-700", "fill-none", "transition duration-100 ease-in"]
  },
  value: {
    class: ["animate-dash-frame", "stroke-primary-500 dark:stroke-primary-400", "fill-none"]
  },
  label: {
    class: ["text-center text-xl", "fill-surface-600 dark:fill-surface-200"]
  }
}