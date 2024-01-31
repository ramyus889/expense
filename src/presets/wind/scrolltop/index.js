export default {
  root: ({props:e})=>({class:["flex items-center justify-center",{sticky:e.target==="parent",fixed:e.target==="window"},"bottom-[20px] right-[20px]","ml-auto",{"rounded-md h-8 w-8":e.target==="parent","h-12 w-12 rounded-full shadow-md":e.target==="window"},"text-white dark:text-surface-900",{"bg-primary-500 dark:bg-primary-400 hover:bg-primary-600 dark:hover:bg-primary-300":e.target==="parent","bg-surface-500 dark:bg-surface-400 hover:bg-surface-600 dark:hover:bg-surface-300":e.target==="window"},{"hover:bg-primary-600 dark:hover:bg-primary-300":e.target==="parent","hover:bg-surface-600 dark:hover:bg-surface-300":e.target==="window"}]}),
  transition: {
    enterFromClass: "opacity-0",
    enterActiveClass: "transition-opacity duration-150",
    leaveActiveClass: "transition-opacity duration-150",
    leaveToClass: "opacity-0"
  }
}