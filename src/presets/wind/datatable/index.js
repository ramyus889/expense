export default {
  root: ({props:e})=>({class:["relative",{"flex flex-col":e.scrollable&&e.scrollHeight==="flex"},{"h-full":e.scrollable&&e.scrollHeight==="flex"},"border-spacing-0 border-separate"]}),
  loadingoverlay: {
    class: ["absolute", "top-0 left-0", "z-20", "flex items-center justify-center", "w-full h-full", "bg-surface-100/40 dark:bg-surface-800/40", "transition duration-200"]
  },
  loadingicon: {
    class: "w-8 h-8 animate-spin"
  },
  wrapper: ({props:e})=>({class:[{relative:e.scrollable,"flex flex-col grow":e.scrollable&&e.scrollHeight==="flex"},{"h-full":e.scrollable&&e.scrollHeight==="flex"}]}),
  header: ({props:e})=>({class:["font-semibold",e.showGridlines?"border-b":"border-b border-x-0","py-3.5 px-3","bg-surface-0 dark:bg-surface-800","border-surface-300 dark:border-surface-600","text-surface-700 dark:text-white/80"]}),
  table: {
    class: "w-full border-spacing-0 border-separate"
  },
  thead: ({context:e})=>({class:[{"top-0 z-40 sticky":e.scrollable}]}),
  tbody: ({instance:e,context:r})=>({class:["border-t border-surface-300 dark:border-surface-600",{"sticky z-20 font-semibold":e.frozenRow&&r.scrollable}]}),
  tfoot: ({context:e})=>({class:[{"bottom-0 z-0":e.scrollable}]}),
  footer: {
    class: ["font-semibold", "border-t-0 border-t border-x-0", "p-4", "bg-surface-0 dark:bg-surface-800", "border-surface-200 dark:border-surface-700", "text-surface-700 dark:text-white/80"]
  },
  column: {
    headercell: ({context:e,props:r})=>({class:["font-semibold","text-sm",{"sticky z-20 border-b":r.frozen||r.frozen===""},{relative:e.resizable},"text-left",{"border-r last:border-r-0":e==null?void 0:e.showGridlines},"border-0 border-b border-solid",(e==null?void 0:e.size)==="small"?"py-2.5 px-2":(e==null?void 0:e.size)==="large"?"py-5 px-4":"py-3.5 px-3",(r.sortable===""||r.sortable)&&e.sorted?"text-primary-500":"bg-surface-0 text-surface-700",(r.sortable===""||r.sortable)&&e.sorted?"dark:text-primary-400":"dark:text-white/80 dark:bg-surface-800","border-surface-200 dark:border-surface-700 ","focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",{"transition duration-200":r.sortable===""||r.sortable},{"cursor-pointer":r.sortable===""||r.sortable},{"overflow-hidden space-nowrap bg-clip-padding":e.resizable}]}),
    headercontent: {
      class: "flex items-center"
    },
    sort: ({context:e})=>({class:[e.sorted?"text-primary-500":"text-surface-700",e.sorted?"dark:text-primary-400":"dark:text-white/80"]}),
    bodycell: ({props:e,context:r,state:t,parent:o})=>({class:[{"sticky box-border border-b":o.instance.frozenRow},{"sticky box-border border-b":e.frozen||e.frozen===""},"text-sm","text-left","border-0 border-b border-solid",{"last:border-r-0 border-r border-b":r==null?void 0:r.showGridlines},{"bg-surface-0 dark:bg-surface-800":o.instance.frozenRow||e.frozen||e.frozen===""},{"py-2.5 px-2":(r==null?void 0:r.size)==="small"&&!t.d_editing},{"py-5 px-4":(r==null?void 0:r.size)==="large"&&!t.d_editing},{"py-3.5 px-3":(r==null?void 0:r.size)!=="large"&&(r==null?void 0:r.size)!=="small"&&!t.d_editing},{"py-[0.6rem] px-2":t.d_editing},"border-surface-200 dark:border-surface-700","space-nowrap"]}),
    footercell: ({context:e})=>({class:["font-bold","text-left",{"border-r last:border-r-0":e==null?void 0:e.showGridlines},"border-0 border-t border-solid",(e==null?void 0:e.size)==="small"?"p-2":(e==null?void 0:e.size)==="large"?"p-5":"p-4","border-surface-200 dark:border-surface-700","text-surface-700 dark:text-white/80","bg-surface-0 dark:bg-surface-800"]}),
    sorticon: {
      class: "ml-2"
    },
    sortbadge: {
      class: ["flex items-center justify-center align-middle", "rounded-full", "w-[1.143rem] leading-[1.143rem]", "ml-2", "text-primary-700 dark:text-white", "bg-primary-50 dark:bg-primary-400/30"]
    },
    columnfilter: {
      class: "inline-flex items-center ml-auto"
    },
    filteroverlay: {
      class: ["absolute top-0 left-0", "mt-2", "border-0", "rounded-md", "shadow-md", "min-w-[12.5rem]", "bg-surface-0 dark:bg-surface-800", "text-surface-800 dark:text-white/80", "ring-1 ring-inset ring-surface-300 dark:ring-surface-700"]
    },
    filtermatchmodedropdown: {
      root: ({state:e})=>({class:["flex","relative","mb-2","w-full","rounded-md","shadow-sm","bg-surface-0 dark:bg-surface-900",{"ring-1 ring-inset ring-surface-300 dark:ring-surface-700":!e.focused},"transition-all","duration-200",{"outline-none outline-offset-0 ring-2 ring-primary-500 dark:ring-primary-400":e.focused},"cursor-default","select-none"]}),
      input: ({props:e})=>({class:["font-sans","leading-6","sm:text-sm","block","flex-auto","bg-transparent","border-0",{"text-surface-800 dark:text-white/80":e.modelValue,"text-surface-400 dark:text-surface-500":!e.modelValue},"placeholder:text-surface-400 dark:placeholder:text-surface-500","py-1.5 px-3","rounded-none","transition","duration-200","focus:outline-none focus:shadow-none","relative","cursor-pointer","overflow-hidden overflow-ellipsis","whitespace-nowrap","appearance-none"]})
    },
    filterrowitems: {
      class: "py-1 list-none m-0"
    },
    filterrowitem: ({context:e})=>({class:["sm:text-sm","leading-none",{"font-normal":!(e!=null&&e.highlighted),"font-bold":e==null?void 0:e.highlighted},"relative","border-0","rounded-none","m-0","py-2 px-4",{"text-surface-700 dark:text-white/80":!(e!=null&&e.highlighted)},{"bg-surface-0 dark:bg-surface-800 text-surface-700 dark:text-white/80":!(e!=null&&e.highlighted)},{"bg-primary-500 dark:bg-primary-400 text-white dark:text-surface-700":e==null?void 0:e.highlighted},"hover:bg-primary-500 dark:hover:bg-primary-400 hover:text-white dark:hover:text-surface-700","focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400","transition-shadow","duration-200","cursor-pointer","overflow-hidden","whitespace-nowrap"]}),
    filteroperator: {
      class: ["p-4", "border-b border-solid", "rounded-t-md", "text-surface-700 dark:text-white/80", "border-surface-200 dark:border-surface-700"]
    },
    filteroperatordropdown: {
      root: ({state:e})=>({class:["flex","relative","w-full","rounded-md","shadow-sm","text-surface-800 dark:text-white/80","placeholder:text-surface-400 dark:placeholder:text-surface-500","bg-surface-0 dark:bg-surface-900",{"ring-1 ring-inset ring-surface-300 dark:ring-surface-700":!e.focused},"transition-all","duration-200",{"outline-none outline-offset-0 ring-2 ring-primary-500 dark:ring-primary-400":e.focused},"cursor-default","select-none"]}),
      input: {
        class: ["font-sans", "leading-6", "sm:text-sm", "block", "flex-auto", "bg-transparent", "border-0", "text-surface-800 dark:text-white/80", "placeholder:text-surface-400 dark:placeholder:text-surface-500", "py-1.5 px-3", "rounded-none", "transition", "duration-200", "focus:outline-none focus:shadow-none", "relative", "cursor-pointer", "overflow-hidden overflow-ellipsis", "whitespace-nowrap", "appearance-none"]
      },
      trigger: {
        class: ["flex items-center justify-center", "shrink-0", "bg-transparent", "text-surface-500", "w-12", "rounded-tr-md", "rounded-br-md"]
      },
      panel: {
        class: ["absolute top-0 left-0", "mt-2", "border-0", "rounded-md", "shadow-md", "min-w-[12.5rem]", "bg-surface-0 dark:bg-surface-800", "text-surface-800 dark:text-white/80", "ring-1 ring-inset ring-surface-300 dark:ring-surface-700"]
      },
      list: {
        class: "py-1 list-none m-0"
      },
      item: ({context:e})=>({class:["sm:text-sm","leading-none",{"font-normal":!(e!=null&&e.highlighted),"font-bold":e==null?void 0:e.highlighted},"relative","border-0","rounded-none","m-0","py-2 px-4",{"text-surface-700 dark:text-white/80":!(e!=null&&e.highlighted)},{"bg-surface-0 dark:bg-surface-800 text-surface-700 dark:text-white/80":!(e!=null&&e.highlighted)},{"bg-primary-500 dark:bg-primary-400 text-white dark:text-surface-700":e==null?void 0:e.highlighted},"hover:bg-primary-500 dark:hover:bg-primary-400 hover:text-white dark:hover:text-surface-700","transition-shadow","duration-200","cursor-pointer","overflow-hidden","whitespace-nowrap"]})
    },
    filterconstraint: {
      class: ["p-4", "border-b border-solid", "border-surface-200 dark:border-surface-700"]
    },
    filteraddrule: {
      class: "pt-4 pb-2 px-4"
    },
    filteraddrulebutton: {
      root: {
        class: ["relative", "items-center inline-flex text-center align-bottom justify-center", "text-sm px-2.5 py-1.5 min-w-[2rem] w-full", "rounded-md", "bg-transparent border-transparent", "text-primary-500 dark:text-primary-400", "hover:bg-primary-300/20", "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-offset-current", "focus:ring-primary-500 dark:focus:ring-primary-400", "transition duration-200 ease-in-out", "cursor-pointer overflow-hidden select-none"]
      },
      label: {
        class: "flex-auto grow-0"
      },
      icon: {
        class: "mr-2"
      }
    },
    filterremovebutton: {
      root: {
        class: ["relative", "items-center inline-flex text-center align-bottom justify-center", "text-sm px-2.5 py-1.5 min-w-[2rem] w-full mt-2", "rounded-md", "bg-transparent border-transparent", "text-red-500 dark:text-red-400", "hover:bg-red-300/20", "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-offset-current", "focus:ring-red-500 dark:focus:ring-red-400", "transition duration-200 ease-in-out", "cursor-pointer overflow-hidden select-none"]
      },
      label: {
        class: "flex-auto grow-0"
      },
      icon: {
        class: "mr-2"
      }
    },
    filterbuttonbar: {
      class: ["flex items-center justify-between", "py-4 px-4"]
    },
    filterclearbutton: {
      root: {
        class: ["relative", "items-center inline-flex text-center align-bottom justify-center", "text-sm px-2.5 py-1.5 min-w-[2rem]", "rounded-md shadow-sm border-0", "text-primary-500 ring-1 ring-primary-500 hover:bg-primary-300/20", "hover:bg-primary-300/20", "focus:ring-primary-500 dark:focus:ring-primary-400", "transition duration-200 ease-in-out", "cursor-pointer overflow-hidden select-none"]
      }
    },
    filterapplybutton: {
      root: {
        class: ["relative", "items-center inline-flex text-center align-bottom justify-center", "text-sm px-2.5 py-1.5 min-w-[2rem]", "rounded-md border-0", "text-white dark:text-surface-900", "bg-primary-500 dark:bg-primary-400", "ring-1 ring-primary-500 dark:ring-primary-400", "hover:bg-primary-600 dark:hover:bg-primary-300 hover:ring-primary-600 dark:hover:ring-primary-300", "focus:ring-primary-500 dark:focus:ring-primary-400", "transition duration-200 ease-in-out", "cursor-pointer overflow-hidden select-none"]
      }
    },
    filtermenubutton: ({context:e})=>({class:["relative","inline-flex items-center justify-center","w-8 h-8","ml-2","rounded-full",{"bg-primary-50 text-primary-700":e.active},"dark:text-white/70 dark:hover:text-white/80 dark:bg-surface-800","hover:text-surface-700 hover:bg-surface-300/20","focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-400","transition duration-200","cursor-pointer no-underline overflow-hidden"]}),
    headerfilterclearbutton: ({context:e})=>({class:["relative","inline-flex items-center justify-center","text-left","border-none","m-0 p-0 ml-2","bg-transparent","cursor-pointer no-underline overflow-hidden select-none",{invisible:!e.hidden}]}),
    rowtoggler: {
      class: ["relative", "inline-flex items-center justify-center", "text-left", "m-0 p-0", "w-8 h-8", "border-0 rounded-full", "text-surface-500 dark:text-white/70", "bg-transparent", "focus-visible:outline-none focus-visible:outline-offset-0", "focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400", "transition duration-200", "overflow-hidden", "cursor-pointer select-none"]
    },
    columnresizer: {
      class: ["block", "absolute top-0 right-0", "w-2 h-full", "m-0 p-0", "border border-transparent", "cursor-col-resize"]
    },
    rowreordericon: {
      class: "cursor-move"
    },
    roweditorinitbutton: {
      class: ["relative", "inline-flex items-center justify-center", "text-left", "w-8 h-8", "border-0 rounded-full", "text-surface-700 dark:text-white/70", "border-transparent", "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-400", "hover:text-surface-700 hover:bg-surface-300/20", "transition duration-200", "overflow-hidden", "cursor-pointer select-none"]
    },
    roweditorsavebutton: {
      class: ["relative", "inline-flex items-center justify-center", "text-left", "w-8 h-8", "border-0 rounded-full", "text-surface-700 dark:text-white/70", "border-transparent", "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-400", "hover:text-surface-700 hover:bg-surface-300/20", "transition duration-200", "overflow-hidden", "cursor-pointer select-none"]
    },
    roweditorcancelbutton: {
      class: ["relative", "inline-flex items-center justify-center", "text-left", "w-8 h-8", "border-0 rounded-full", "text-surface-700 dark:text-white/70", "border-transparent", "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-400", "hover:text-surface-700 hover:bg-surface-300/20", "transition duration-200", "overflow-hidden", "cursor-pointer select-none"]
    },
    radiobuttonwrapper: {
      class: ["relative", "inline-flex align-bottom", "w-4 h-4", "cursor-pointer select-none"]
    },
    radiobutton: ({context:e})=>({class:["flex justify-center items-center","w-4 h-4","text-sm","font-medium","border-2","rounded-full",{"text-surface-700 dark:text-white/80":!e.checked},{"bg-surface-0 dark:bg-surface-900":!e.checked},{"border-surface-300 dark:border-surface-700":!e.checked},{"border-primary-500 dark:border-primary-400":e.checked},{"hover:border-primary-500 dark:hover:border-primary-400":!e.disabled},{"ring-2 ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-800 ring-primary-500 dark:ring-primary-400":e.focused},"transition duration-200 ease-in-out",{"cursor-default opacity-60":e.disabled}]}),
    radiobuttonicon: {
      class: "hidden"
    },
    headercheckboxwrapper: {
      class: ["relative", "inline-flex align-bottom", "w-4", "h-4", "cursor-default select-none"]
    },
    headercheckbox: ({context:e})=>({class:["flex items-center justify-center","rounded","border","w-4","h-4","text-surface-600",{"border-surface-300 bg-surface-0 dark:border-surface-700 dark:bg-surface-900":!e.checked,"border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400":e.checked},"focus:outline-none focus:outline-offset-0",{"ring-2 ring-primary-500 dark:ring-primary-400":e.focused},"transition-colors duration-200",{"cursor-default opacity-60":e.disabled}]}),
    headercheckboxicon: {
      class: ["text-normal", "w-3", "h-3", "text-white dark:text-surface-900", "transition-all duration-200"]
    },
    checkboxwrapper: {
      class: ["relative", "inline-flex align-bottom", "w-4", "h-4", "cursor-default select-none"]
    },
    checkbox: ({context:e})=>({class:["flex items-center justify-center","rounded","border","w-4","h-4","text-surface-600",{"border-surface-300 bg-surface-0 dark:border-surface-700 dark:bg-surface-900":!e.checked,"border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400":e.checked},"focus:outline-none focus:outline-offset-0",{"ring-2 ring-primary-500 dark:ring-primary-400":e.focused},"transition-colors duration-200",{"cursor-default opacity-60":e.disabled}]}),
    checkboxicon: {
      class: ["text-normal", "w-3", "h-3", "text-white dark:text-surface-900", "transition-all duration-200"]
    },
    transition: {
      enterFromClass: "opacity-0 scale-y-[0.8]",
      enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
      leaveActiveClass: "transition-opacity duration-100 ease-linear",
      leaveToClass: "opacity-0"
    }
  },
  bodyrow: ({context:e,props:r})=>({class:["dark:text-white/80",{"bg-surface-100 dark:bg-surface-500/30":e.selected&&e.stripedRows},{"bg-surface-50 dark:bg-surface-500/30":e.selected&&!e.stripedRows},{"bg-surface-0 text-surface-600 dark:bg-surface-800":!e.selected},{"bg-surface-0 dark:bg-surface-800":r.frozenRow},{"odd:bg-surface-0 odd:text-surface-600 dark:odd:bg-surface-800 even:bg-surface-50 even:text-surface-600 dark:even:bg-surface-900/60":e.stripedRows&&!e.selected},{"focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-primary-500 ring-inset dark:focus:ring-primary-400":r.selectionMode},{"hover:bg-surface-300/20 hover:text-surface-600":r.selectionMode&&!e.selected},{"transition duration-200":r.selectionMode&&!e.selected||r.rowHover},{"cursor-pointer":r.selectionMode}]}),
  rowexpansion: {
    class: "bg-surface-0 dark:bg-surface-800 text-surface-600 dark:text-white/80"
  },
  rowgroupheader: {
    class: ["sticky z-20", "bg-surface-0 text-surface-600 dark:text-white/70", "dark:bg-surface-800"]
  },
  rowgroupfooter: {
    class: ["sticky z-20", "bg-surface-0 text-surface-600 dark:text-white/70", "dark:bg-surface-800"]
  },
  rowgrouptoggler: {
    class: ["relative", "inline-flex items-center justify-center", "text-left", "m-0 p-0", "w-8 h-8", "border-0 rounded-full", "text-surface-500 dark:text-white/70", "bg-transparent", "focus-visible:outline-none focus-visible:outline-offset-0", "focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400", "transition duration-200", "overflow-hidden", "cursor-pointer select-none"]
  },
  rowgrouptogglericon: {
    class: "inline-block w-4 h-4"
  },
  resizehelper: {
    class: "absolute hidden w-[2px] z-20 bg-primary-500 dark:bg-primary-400"
  }
}