export default {
  root: ({props:e})=>({class:["flex flex-col","relative",{"!transition-none !transform-none !w-screen !h-screen !max-h-full !top-0 !left-0":e.position=="full"},{"h-full w-80":e.position=="left"||e.position=="right","h-auto w-full":e.position=="top"||e.position=="bottom"},"border-0 dark:border","shadow-lg","bg-surface-0 dark:bg-surface-800","text-surface-700 dark:text-white/80","dark:border-surface-700","transition-transform","duration-300","pointer-events-auto"]}),
  header: {
    class: ["flex items-center justify-between", "shrink-0", "p-5", "bg-surface-0 dark:bg-surface-800", "text-surface-700 dark:text-surface-0/80"]
  },
  title: {
    class: ["font-bold text-lg"]
  },
  icons: {
    class: ["flex items-center"]
  },
  closeButton: {
    class: ["relative", "flex items-center justify-center", "mr-2", "last:mr-0", "w-8 h-8", "border-0", "rounded-full", "text-surface-500", "bg-transparent", "transition duration-200 ease-in-out", "hover:text-surface-700 dark:hover:text-white/80", "hover:bg-surface-100 dark:hover:bg-surface-800/80", "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-inset", "focus:ring-primary-400/50 dark:focus:ring-primary-300/50", "overflow-hidden"]
  },
  closeButtonIcon: {
    class: ["inline-block", "w-4", "h-4"]
  },
  content: {
    class: ["p-5", "pt-0", "h-full", "w-full", "grow", "overflow-y-auto"]
  },
  mask: ({props:e})=>({class:["transition","duration-200",{"p-5":!e.position=="full"},{"bg-black/40":e.modal,"backdrop-blur-sm":e.modal}]}),
  transition: ({props:e})=>e.position==="top"?{enterFromClass:"translate-x-0 -translate-y-full translate-z-0",leaveToClass:"translate-x-0 -translate-y-full translate-z-0"}:e.position==="bottom"?{enterFromClass:"translate-x-0 translate-y-full translate-z-0",leaveToClass:"translate-x-0 translate-y-full translate-z-0"}:e.position==="left"?{enterFromClass:"-translate-x-full translate-y-0 translate-z-0",leaveToClass:"-translate-x-full translate-y-0 translate-z-0"}:e.position==="right"?{enterFromClass:"translate-x-full translate-y-0 translate-z-0",leaveToClass:"translate-x-full translate-y-0 translate-z-0"}:{enterFromClass:"opacity-0",enterActiveClass:"transition-opacity duration-400 ease-in",leaveActiveClass:"transition-opacity duration-400 ease-in",leaveToClass:"opacity-0"}
}