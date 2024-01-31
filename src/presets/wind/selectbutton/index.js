export default {
  root: ({props:e})=>({class:["shadow-sm",{"opacity-60 select-none pointer-events-none cursor-default":e.disabled}]}),
  button: ({context:e})=>({class:["relative","text-sm","leading-none","inline-flex items-center align-bottom text-center","px-2.5 py-1.5","ring-1 ring-surface-200 dark:ring-surface-700","first:rounded-l-md first:rounded-tr-none first:rounded-br-none","last:rounded-tl-none last:rounded-bl-none last:rounded-r-md ",{"bg-surface-0 dark:bg-surface-900":!e.active,"text-surface-700 dark:text-white/80":!e.active,"bg-surface-100 dark:bg-surface-700":e.active},"focus:outline-none focus:outline-offset-0 focus:ring-primary-500 dark:focus:ring-primary-400","hover:bg-surface-200 dark:hover:bg-surface-600/80",{"opacity-60 select-none pointer-events-none cursor-default":e.disabled},"transition duration-200","cursor-pointer select-none overflow-hidden"]}),
  label: {
    class: "font-semibold"
  }
}