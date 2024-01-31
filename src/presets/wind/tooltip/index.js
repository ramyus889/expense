export default {
  root: ({context:e,props:r})=>({class:["absolute",{"px-1.5":(e==null?void 0:e.right)||(e==null?void 0:e.left)||!(e!=null&&e.right)&&!(e!=null&&e.left)&&!(e!=null&&e.top)&&!(e!=null&&e.bottom),"py-1.5":(e==null?void 0:e.top)||(e==null?void 0:e.bottom)}]}),
  arrow: {
    class: "hidden"
  },
  text: {
    class: ["text-xs leading-none", "p-2", "rounded-md", "text-surface-900 dark:text-surface-0/80", "bg-surface-0 dark:bg-surface-900", "ring-1 ring-inset ring-surface-200 dark:ring-surface-800 ring-offset-0", "whitespace-pre-line", "break-words"]
  }
}