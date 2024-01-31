export default {
  table: {
    class: ["mx-auto my-0", "border-spacing-0 border-separate"]
  },
  cell: {
    class: ["text-center align-top", "py-0 px-3"]
  },
  node: ({context:e})=>({class:["relative inline-block","text-sm leading-none","px-5 py-3","border","rounded","border-surface-200 dark:border-surface-700",{"text-surface-600 dark:text-white/80":!(e!=null&&e.selected),"bg-surface-0 dark:bg-surface-800":!(e!=null&&e.selected),"text-surface-700 dark:text-surface-0":e==null?void 0:e.selected,"bg-surface-50 dark:bg-surface-700":e==null?void 0:e.selected},{"hover:bg-surface-100 dark:hover:bg-surface-600/40":e==null?void 0:e.selectable},{"cursor-pointer":e==null?void 0:e.selectable}]}),
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
    class: ["absolute bottom-[-0.75rem] left-2/4 -ml-3", "z-20", "flex items-center justify-center", "w-6 h-6", "rounded-full", "bg-inherit text-inherit", "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400", "cursor-pointer no-underline select-none"]
  },
  nodetogglericon: {
    class: ["relative inline-block", "w-4 h-4"]
  }
}