export default {
  root: ({state:e})=>({class:["rounded-lg","shadow-xl","border-0","max-h-[90vh]",{"sm:w-full sm:max-w-lg":!e.maximized},"m-0","transform","scale-100","dark:border","dark:border-surface-700",{"transition-none":e.maximized,"transform-none":e.maximized,"!w-screen":e.maximized,"!h-screen":e.maximized,"!max-h-full":e.maximized,"!top-0":e.maximized,"!left-0":e.maximized}]}),
  header: {
    class: ["flex items-center justify-between", "shrink-0", "p-6 pt-4", "rounded-tl-lg", "rounded-tr-lg", "bg-surface-0 dark:bg-surface-800", "text-surface-700 dark:text-surface-0/80"]
  },
  title: {
    class: ["font-semibold text-base leading-6"]
  },
  icons: {
    class: ["flex items-center"]
  },
  closeButton: {
    class: ["relative", "flex items-center justify-center", "mr-2", "last:mr-0", "w-6 h-6", "border-0", "rounded-full", "text-surface-500", "bg-transparent", "transition duration-200 ease-in-out", "hover:text-surface-700 dark:hover:text-white/80", "hover:bg-surface-100 dark:hover:bg-surface-800/80", "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-inset", "focus:ring-primary-500 dark:focus:ring-primary-400", "overflow-hidden"]
  },
  maximizablebutton: {
    class: ["relative", "flex items-center justify-center", "mr-2", "last:mr-0", "w-6 h-6", "border-0", "rounded-full", "text-surface-500", "bg-transparent", "transition duration-200 ease-in-out", "hover:text-surface-700 dark:hover:text-white/80", "hover:bg-surface-100 dark:hover:bg-surface-800/80", "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-inset", "focus:ring-primary-500 dark:focus:ring-primary-400", "overflow-hidden"]
  },
  closeButtonIcon: {
    class: ["inline-block", "w-3", "h-3"]
  },
  maximizableicon: {
    class: ["inline-block", "w-3", "h-3"]
  },
  content: ({state:e,instance:r})=>({class:["text-sm","px-6","pb-3","pt-0",{grow:e.maximized,"rounded-bl-lg":!r.$slots.footer,"rounded-br-lg":!r.$slots.footer},"bg-surface-0 dark:bg-surface-800","text-surface-600 dark:text-surface-0/70","overflow-y-auto"]}),
  footer: {
    class: ["flex items-center justify-end", "shrink-0", "text-right", "gap-3", "px-6", "py-3", "border-t-0", "rounded-b-lg", "bg-surface-50 dark:bg-surface-700", "text-surface-700 dark:text-surface-0/80"]
  },
  mask: ({props:e,state:r})=>({class:["transition","duration-200",{"p-5":!r.maximized},{"bg-surface-500/70 dark:bg-surface-700/70":e.modal,"backdrop-blur-sm":e.modal}]}),
  transition: ({props:e})=>e.position==="top"?{enterFromClass:"opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0",enterActiveClass:"transition-all duration-200 ease-out",leaveActiveClass:"transition-all duration-200 ease-out",leaveToClass:"opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0"}:e.position==="bottom"?{enterFromClass:"opacity-0 scale-75 translate-y-full",enterActiveClass:"transition-all duration-200 ease-out",leaveActiveClass:"transition-all duration-200 ease-out",leaveToClass:"opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0"}:e.position==="left"||e.position==="topleft"||e.position==="bottomleft"?{enterFromClass:"opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0",enterActiveClass:"transition-all duration-200 ease-out",leaveActiveClass:"transition-all duration-200 ease-out",leaveToClass:"opacity-0 scale-75  -translate-x-full translate-y-0 translate-z-0"}:e.position==="right"||e.position==="topright"||e.position==="bottomright"?{enterFromClass:"opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0",enterActiveClass:"transition-all duration-200 ease-out",leaveActiveClass:"transition-all duration-200 ease-out",leaveToClass:"opacity-0 scale-75 opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0"}:{enterFromClass:"opacity-0 scale-75",enterActiveClass:"transition-all duration-200 ease-out",leaveActiveClass:"transition-all duration-200 ease-out",leaveToClass:"opacity-0 scale-75"}
}