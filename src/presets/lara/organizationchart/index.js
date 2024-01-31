export default {
  table: {
    class: ["mx-auto my-0", "border-spacing-0 border-separate"]
  },
  cell: {
    class: ["text-center align-top", "py-0 px-3"]
  },
  node: ({props:e,context:r})=>({class:["relative inline-block","p-5","border",{"text-surface-600 dark:text-white/80":!(r!=null&&r.selected),"bg-surface-0 dark:bg-surface-800":!(r!=null&&r.selected),"border-surface-200 dark:border-surface-700":!(r!=null&&r.selected),"text-primary-700 dark:text-surface-0":r==null?void 0:r.selected,"bg-primary-50 dark:bg-primary-400/30":r==null?void 0:r.selected,"border-primary-200 dark:border-primary-600":r==null?void 0:r.selected},{"hover:bg-surface-100 dark:hover:bg-surface-700":(r==null?void 0:r.selectable)&&!(r!=null&&r.selected),"hover:bg-primary-100 dark:hover:bg-primary-300/30":(r==null?void 0:r.selectable)&&(r==null?void 0:r.selected)},{"cursor-pointer":r==null?void 0:r.selectable}]}),
  linecell: {
    class: ["text-center align-top", "py-0 px-3"]
  },
  linedown: {
    class: ["mx-auto my-0", "w-px h-[20px]", "bg-surface-200 dark:bg-surface-700"]
  },
  lineleft: ({context:e})=>({class:["text-center align-top","py-0 px-3","rounded-none border-r",{"border-t":e.lineTop},"border-surface-200 dark:border-surface-700"]}),
  lineright: ({context:e})=>({class:["text-center align-top","py-0 px-3","rounded-none",{"border-t border-surface-200 dark:border-surface-700":e.lineTop}]}),
  nodecell: {
    class: "text-center align-top py-0 px-3"
  },
  nodetoggler: {
    class: ["absolute bottom-[-0.75rem] left-2/4 -ml-3", "z-20", "flex items-center justify-center", "w-6 h-6", "rounded-full", "bg-inherit text-inherit", "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50", "cursor-pointer no-underline select-none"]
  },
  nodetogglericon: {
    class: ["relative inline-block", "w-4 h-4"]
  }
}