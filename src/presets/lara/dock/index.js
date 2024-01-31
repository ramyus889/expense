export default {
  root: ({props:e})=>({class:["absolute z-1",{"left-0 bottom-0 w-full":e.position=="bottom","left-0 top-0 w-full":e.position=="top","left-0 top-0 h-full":e.position=="left","right-0 top-0 h-full":e.position=="right"},"flex justify-center items-center","pointer-events-none"]}),
  container: {
    class: ["flex", "rounded-md", "bg-surface-0/10 dark:bg-surface-900/20 border border-surface-0/20", "backdrop-blur-sm", "p-2", "pointer-events-auto"]
  },
  menu: ({props:e})=>({class:["flex items-center justify-center",{"flex-col":e.position=="left"||e.position=="right"},"m-0 p-0 list-none","outline-none"]}),
  menuitem: ({props:e,context:r,instance:t})=>({class:["p-2 rounded-md",{"hover:scale-150":t.currentIndex===r.index,"scale-125":t.currentIndex-1===r.index||t.currentIndex+1===r.index,"scale-110":t.currentIndex-2===r.index||t.currentIndex+2===r.index},{"origin-bottom hover:mx-6":e.position=="bottom","origin-top hover:mx-6":e.position=="top","origin-left hover:my-6":e.position=="left","origin-right hover:my-6":e.position=="right"},"transition-all duration-200 ease-cubic-bezier-will-change-transform transform"]}),
  action: {
    class: ["flex flex-col items-center justify-center", "relative", "w-16 h-16", "cursor-default overflow-hidden"]
  }
}