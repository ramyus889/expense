export default {
  root: ({props:e})=>({class:["my-4 mx-0","rounded-md","border-solid border-0 border-l-[6px]",{"bg-blue-100/70 dark:bg-blue-500/20":e.severity=="info","bg-green-100/70 dark:bg-green-500/20":e.severity=="success","bg-orange-100/70 dark:bg-orange-500/20":e.severity=="warn","bg-red-100/70 dark:bg-red-500/20":e.severity=="error"},{"border-blue-500 dark:border-blue-400":e.severity=="info","border-green-500 dark:border-green-400":e.severity=="success","border-orange-500 dark:border-orange-400":e.severity=="warn","border-red-500 dark:border-red-400":e.severity=="error"},{"text-blue-700 dark:text-blue-300":e.severity=="info","text-green-700 dark:text-green-300":e.severity=="success","text-orange-700 dark:text-orange-300":e.severity=="warn","text-red-700 dark:text-red-300":e.severity=="error"}]}),
  wrapper: {
    class: ["flex items-center", "py-5 px-7"]
  },
  icon: {
    class: ["w-6 h-6", "text-lg leading-none mr-2 shrink-0"]
  },
  text: {
    class: ["text-base leading-none", "font-medium"]
  },
  button: {
    class: ["flex items-center justify-center", "w-8 h-8", "ml-auto  relative", "rounded-full", "bg-transparent", "transition duration-200 ease-in-out", "hover:bg-surface-0/50 dark:hover:bg-surface-0/10", "overflow-hidden"]
  },
  transition: {
    enterFromClass: "opacity-0",
    enterActiveClass: "transition-opacity duration-300",
    leaveFromClass: "max-h-40",
    leaveActiveClass: "overflow-hidden transition-all duration-300 ease-in",
    leaveToClass: "max-h-0 opacity-0 !m-0"
  }
}