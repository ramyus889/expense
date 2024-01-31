export default {
  root: ({state:e})=>({class:["rounded-lg","shadow-lg","border-0","max-h-[90vh]","w-[50vw]","m-0","dark:border","dark:border-surface-700","transform","scale-100",{"transition-none":e.maximized,"transform-none":e.maximized,"!w-screen":e.maximized,"!h-screen":e.maximized,"!max-h-full":e.maximized,"!top-0":e.maximized,"!left-0":e.maximized}]}),
  header: {
    class: ["flex items-center justify-between", "shrink-0", "p-6", "border-t-0", "rounded-tl-lg", "rounded-tr-lg", "bg-surface-0 dark:bg-surface-800", "text-surface-700 dark:text-surface-0/80"]
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
  maximizablebutton: {
    class: ["relative", "flex items-center justify-center", "mr-2", "last:mr-0", "w-8 h-8", "border-0", "rounded-full", "text-surface-500", "bg-transparent", "transition duration-200 ease-in-out", "hover:text-surface-700 dark:hover:text-white/80", "hover:bg-surface-100 dark:hover:bg-surface-800/80", "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-inset", "focus:ring-primary-400/50 dark:focus:ring-primary-300/50", "overflow-hidden"]
  },
  closeButtonIcon: {
    class: ["inline-block", "w-4", "h-4"]
  },
  maximizableicon: {
    class: ["inline-block", "w-4", "h-4"]
  },
  content: ({state:e,instance:r})=>({class:["px-6","pb-8","pt-0",{grow:e.maximized,"rounded-bl-lg":!r.$slots.footer,"rounded-br-lg":!r.$slots.footer},"bg-surface-0 dark:bg-surface-800","text-surface-700 dark:text-surface-0/80","overflow-y-auto"]}),
  footer: {
    class: ["flex items-center justify-end", "shrink-0", "text-right", "gap-2", "px-6", "pb-6", "border-t-0", "rounded-b-lg", "bg-surface-0 dark:bg-surface-800", "text-surface-700 dark:text-surface-0/80"]
  },
  mask: ({props:e,state:r})=>({class:["transition","duration-200",{"p-5":!r.maximized},{"bg-black/40":e.modal,"backdrop-blur-sm":e.modal}]}),
  transition: ({props:e})=>e.position==="top"?{enterFromClass:"opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0",enterActiveClass:"transition-all duration-200 ease-out",leaveActiveClass:"transition-all duration-200 ease-out",leaveToClass:"opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0"}:e.position==="bottom"?{enterFromClass:"opacity-0 scale-75 translate-y-full",enterActiveClass:"transition-all duration-200 ease-out",leaveActiveClass:"transition-all duration-200 ease-out",leaveToClass:"opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0"}:e.position==="left"||e.position==="topleft"||e.position==="bottomleft"?{enterFromClass:"opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0",enterActiveClass:"transition-all duration-200 ease-out",leaveActiveClass:"transition-all duration-200 ease-out",leaveToClass:"opacity-0 scale-75  -translate-x-full translate-y-0 translate-z-0"}:e.position==="right"||e.position==="topright"||e.position==="bottomright"?{enterFromClass:"opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0",enterActiveClass:"transition-all duration-200 ease-out",leaveActiveClass:"transition-all duration-200 ease-out",leaveToClass:"opacity-0 scale-75 opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0"}:{enterFromClass:"opacity-0 scale-75",enterActiveClass:"transition-all duration-200 ease-out",leaveActiveClass:"transition-all duration-200 ease-out",leaveToClass:"opacity-0 scale-75"}
}