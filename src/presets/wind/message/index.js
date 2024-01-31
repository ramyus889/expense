export default {
  root: ({props:e})=>({class:["my-2 mx-0","rounded-md","ring-1 ring-inset ring-surface-200 dark:ring-surface-700 ring-offset-0","bg-surface-0 dark:bg-surface-800",{"text-blue-500 dark:text-blue-300":e.severity=="info","text-green-500 dark:text-green-300":e.severity=="success","text-orange-500 dark:text-orange-300":e.severity=="warn","text-red-500 dark:text-red-300":e.severity=="error"}]}),
  wrapper: {
    class: ["flex items-center", "p-4"]
  },
  icon: {
    class: ["w-5 h-5", "mr-3 shrink-0"]
  },
  text: {
    class: ["text-sm leading-none", "font-medium"]
  },
  button: ({props:e})=>({class:["flex items-center justify-center","w-6 h-6","ml-auto relative","rounded-full","bg-transparent","text-surface-700 dark:text-surface-0/80","transition duration-200 ease-in-out","hover:bg-surface-100 dark:hover:bg-surface-700","outline-none focus:ring-1 focus:ring-inset","focus:ring-primary-500 dark:focus:ring-primary-400","overflow-hidden"]}),
  closeicon: {
    class: ["w-3 h-3", "shrink-0"]
  },
  transition: {
    enterFromClass: "opacity-0",
    enterActiveClass: "transition-opacity duration-300",
    leaveFromClass: "max-h-40",
    leaveActiveClass: "overflow-hidden transition-all duration-300 ease-in",
    leaveToClass: "max-h-0 opacity-0 !m-0"
  }
}