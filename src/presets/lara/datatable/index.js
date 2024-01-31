export default {
  root: ({props:e})=>({class:["relative",{"flex flex-col":e.scrollable&&e.scrollHeight==="flex"},{"h-full":e.scrollable&&e.scrollHeight==="flex"}]}),
  loadingoverlay: {
    class: ["absolute", "top-0 left-0", "z-20", "flex items-center justify-center", "w-full h-full", "bg-surface-100/40 dark:bg-surface-800/40", "transition duration-200"]
  },
  loadingicon: {
    class: "w-8 h-8 animate-spin"
  },
  wrapper: ({props:e})=>({class:[{relative:e.scrollable,"flex flex-col grow":e.scrollable&&e.scrollHeight==="flex"},{"h-full":e.scrollable&&e.scrollHeight==="flex"}]}),
  header: ({props:e})=>({class:["font-bold",e.showGridlines?"border-x border-t border-b-0":"border-y border-x-0","p-4","bg-surface-50 dark:bg-surface-800","border-surface-200 dark:border-surface-700","text-surface-700 dark:text-white/80"]}),
  table: {
    class: "w-full border-spacing-0 border-separate"
  },
  thead: ({context:e})=>({class:[{"bg-surface-50 top-0 z-40 sticky":e.scrollable}]}),
  tbody: ({instance:e,context:r})=>({class:[{"sticky z-20":e.frozenRow&&r.scrollable}]}),
  tfoot: ({context:e})=>({class:[{"bg-surface-50 bottom-0 z-0":e.scrollable}]}),
  footer: {
    class: ["font-bold", "border-t-0 border-b border-x-0", "p-4", "bg-surface-50 dark:bg-surface-800", "border-surface-200 dark:border-surface-700", "text-surface-700 dark:text-white/80"]
  },
  column: {
    headercell: ({context:e,props:r})=>({class:["font-bold",{"sticky z-20 border-b":r.frozen||r.frozen===""},{relative:e.resizable},"text-left",{"first:border-l border-y border-r":e==null?void 0:e.showGridlines},"border-0 border-b border-solid",(e==null?void 0:e.size)==="small"?"p-2":(e==null?void 0:e.size)==="large"?"p-5":"p-4",(r.sortable===""||r.sortable)&&e.sorted?"bg-primary-50 text-primary-700":"bg-surface-50 text-surface-700",(r.sortable===""||r.sortable)&&e.sorted?"dark:text-white dark:bg-primary-400/30":"dark:text-white/80 dark:bg-surface-800","border-surface-200 dark:border-surface-700 ",{"hover:bg-surface-100 dark:hover:bg-surface-400/30":(r.sortable===""||r.sortable)&&!(e!=null&&e.sorted)},"focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50",{"transition duration-200":r.sortable===""||r.sortable},{"cursor-pointer":r.sortable===""||r.sortable},{"overflow-hidden space-nowrap border-y bg-clip-padding":e.resizable}]}),
    headercontent: {
      class: "flex items-center"
    },
    sort: ({context:e})=>({class:[e.sorted?"text-primary-500":"text-surface-700",e.sorted?"dark:text-primary-400":"dark:text-white/80"]}),
    bodycell: ({props:e,context:r,state:t,parent:o})=>({class:[{"sticky box-border border-b":o.instance.frozenRow},{"sticky box-border border-b":e.frozen||e.frozen===""},"text-left","border-0 border-b border-solid",{"first:border-l border-r border-b":r==null?void 0:r.showGridlines},{"bg-surface-0 dark:bg-surface-800":o.instance.frozenRow||e.frozen||e.frozen===""},{"p-2":(r==null?void 0:r.size)==="small"&&!t.d_editing},{"p-5":(r==null?void 0:r.size)==="large"&&!t.d_editing},{"p-4":(r==null?void 0:r.size)!=="large"&&(r==null?void 0:r.size)!=="small"&&!t.d_editing},{"py-[0.6rem] px-2":t.d_editing},"border-surface-200 dark:border-surface-700"]}),
    footercell: ({context:e})=>({class:["font-bold","text-left","border-0 border-b border-solid",{"border-x border-y":e==null?void 0:e.showGridlines},(e==null?void 0:e.size)==="small"?"p-2":(e==null?void 0:e.size)==="large"?"p-5":"p-4","border-surface-200 dark:border-surface-700","text-surface-700 dark:text-white/80","bg-surface-50 dark:bg-surface-800"]}),
    sorticon: ({context:e})=>({class:["ml-2",e.sorted?"text-primary-700 dark:text-white/80":"text-surface-700 dark:text-white/70"]}),
    sortbadge: {
      class: ["flex items-center justify-center align-middle", "rounded-full", "w-[1.143rem] leading-[1.143rem]", "ml-2", "text-primary-700 dark:text-white", "bg-primary-50 dark:bg-primary-400/30"]
    },
    columnfilter: {
      class: "inline-flex items-center ml-auto"
    },
    filteroverlay: {
      class: ["absolute top-0 left-0", "border-0 dark:border", "rounded-md", "shadow-md", "min-w-[12.5rem]", "bg-surface-0 dark:bg-surface-800", "text-surface-800 dark:text-white/80", "dark:border-surface-700"]
    },
    filtermatchmodedropdown: {
      root: ({state:e})=>({class:["flex","relative","my-2","w-full","rounded-md","bg-surface-0 dark:bg-surface-900","border border-surface-300 dark:border-surface-700","text-surface-800 dark:text-white/80","placeholder:text-surface-400 dark:placeholder:text-surface-500","transition-all","duration-200","hover:border-primary-500 dark:hover:border-primary-300",{"outline-none outline-offset-0 ring ring-primary-400/50 dark:ring-primary-300/50":e.focused},"cursor-pointer","select-none"]})
    },
    filterrowitems: {
      class: "m-0 p-0 py-3 list-none"
    },
    filterrowitem: ({context:e})=>({class:["font-normal","leading-none","relative","border-0","rounded-none","m-0","py-3 px-5",{"text-surface-700 dark:text-white/80":!(e!=null&&e.highlighted)},{"bg-surface-0 dark:bg-surface-800 text-surface-700 dark:text-white/80":!(e!=null&&e.highlighted)},{"bg-primary-100 dark:bg-primary-400/40 text-primary-700 dark:text-white/80":e==null?void 0:e.highlighted},{"bg-primary-50 dark:bg-primary-400/40 text-primary-700 dark:text-white/80":e==null?void 0:e.highlighted},{"hover:bg-surface-100 dark:hover:bg-surface-600/80":!(e!=null&&e.highlighted)},{"hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-surface-600/80":!(e!=null&&e.highlighted)},"focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50","transition-shadow","duration-200","cursor-pointer","overflow-hidden","whitespace-nowrap"]}),
    filteroperator: {
      class: ["px-5 py-3", "border-b border-solid", "rounded-t-md", "text-surface-700 dark:text-white/80", "border-surface-200 dark:border-surface-800", "bg-surface-0 dark:bg-surface-700"]
    },
    filteroperatordropdown: {
      root: ({state:e})=>({class:["inline-flex","relative","w-full","rounded-md","bg-surface-0 dark:bg-surface-900","border border-surface-300 dark:border-surface-700","transition-all","duration-200","hover:border-primary-500 dark:hover:border-primary-300",{"outline-none outline-offset-0 ring ring-primary-400/50 dark:ring-primary-300/50":e.focused},"cursor-pointer","select-none"]}),
      input: ({props:e})=>({class:["font-sans","leading-none","block","flex-auto","bg-transparent","border-0",{"text-surface-800 dark:text-white/80":e.modelValue,"text-surface-400 dark:text-surface-500":!e.modelValue},"placeholder:text-surface-400 dark:placeholder:text-surface-500","w-[1%]","p-3","rounded-none","transition","duration-200","focus:outline-none focus:shadow-none","relative","cursor-pointer","overflow-hidden overflow-ellipsis","whitespace-nowrap","appearance-none"]}),
      trigger: {
        class: ["flex items-center justify-center", "shrink-0", "bg-transparent", "text-surface-500", "w-12", "rounded-tr-md", "rounded-br-md"]
      },
      panel: {
        class: ["absolute top-0 left-0", "border-0 dark:border", "rounded-md", "shadow-md", "bg-surface-0 dark:bg-surface-800", "text-surface-800 dark:text-white/80", "dark:border-surface-700"]
      },
      item: ({context:e})=>({class:["font-normal","leading-none","relative","border-0","rounded-none","m-0","py-3 px-5",{"text-surface-700 dark:text-white/80":!e.focused&&!e.selected},{"bg-surface-50 dark:bg-surface-600/60 text-surface-700 dark:text-white/80":e.focused&&!e.selected},{"bg-primary-100 dark:bg-primary-400/40 text-primary-700 dark:text-white/80":e.focused&&e.selected},{"bg-primary-50 dark:bg-primary-400/40 text-primary-700 dark:text-white/80":!e.focused&&e.selected},{"hover:bg-surface-100 dark:hover:bg-surface-600/80":!e.focused&&!e.selected},{"hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-surface-600/80":e.focused&&!e.selected},"transition-shadow","duration-200","cursor-pointer","overflow-hidden","whitespace-nowrap"]})
    },
    filterconstraint: {
      class: ["py-3 px-5", "border-b border-solid", "border-surface-200 dark:border-surface-700"]
    },
    filteraddrule: {
      class: "py-3 px-5"
    },
    filteraddrulebutton: {
      root: {
        class: ["relative", "items-center inline-flex text-center align-bottom justify-center", "text-sm py-2 px-3 w-full", "rounded-md", "bg-transparent border-transparent", "text-primary-500 dark:text-primary-400", "hover:bg-primary-300/20", "transition duration-200 ease-in-out", "cursor-pointer overflow-hidden select-none"]
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
        class: ["relative", "items-center inline-flex text-center align-bottom justify-center", "text-sm py-2 px-3 w-full mt-2", "rounded-md", "bg-transparent border-transparent", "text-red-500 dark:text-red-400", "hover:bg-red-300/20", "transition duration-200 ease-in-out", "cursor-pointer overflow-hidden select-none"]
      },
      label: {
        class: "flex-auto grow-0"
      },
      icon: {
        class: "mr-2"
      }
    },
    filterbuttonbar: {
      class: ["flex items-center justify-between", "py-3 px-5"]
    },
    filterclearbutton: {
      root: {
        class: ["relative", "items-center inline-flex text-center align-bottom justify-center", "text-sm py-2 px-3", "rounded-md", "text-primary-500 border border-primary-500", "hover:bg-primary-300/20", "transition duration-200 ease-in-out", "cursor-pointer overflow-hidden select-none"]
      }
    },
    filterapplybutton: {
      root: {
        class: ["relative", "items-center inline-flex text-center align-bottom justify-center", "text-sm py-2 px-3", "rounded-md", "text-white dark:text-surface-900", "bg-primary-500 dark:bg-primary-400", "hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300", "transition duration-200 ease-in-out", "cursor-pointer overflow-hidden select-none"]
      }
    },
    filtermenubutton: ({context:e})=>({class:["relative","inline-flex items-center justify-center","w-8 h-8","ml-2","rounded-full",{"bg-primary-50 text-primary-700":e.active},"dark:text-white/70 dark:hover:text-white/80 dark:bg-surface-800","hover:text-surface-700 hover:bg-surface-300/20","focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50","transition duration-200","cursor-pointer no-underline overflow-hidden"]}),
    headerfilterclearbutton: ({context:e})=>({class:["relative","inline-flex items-center justify-center","text-left","border-none","m-0 p-0 ml-2","bg-transparent","cursor-pointer no-underline overflow-hidden select-none",{invisible:!e.hidden}]}),
    rowtoggler: {
      class: ["relative", "inline-flex items-center justify-center", "text-left", "m-0 p-0", "w-8 h-8", "border-0 rounded-full", "text-surface-500 dark:text-white/70", "bg-transparent", "focus-visible:outline-none focus-visible:outline-offset-0", "focus-visible:ring focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50", "transition duration-200", "overflow-hidden", "cursor-pointer select-none"]
    },
    columnresizer: {
      class: ["block", "absolute top-0 right-0", "w-2 h-full", "m-0 p-0", "border border-transparent", "cursor-col-resize"]
    },
    rowreordericon: {
      class: "cursor-move"
    },
    roweditorinitbutton: {
      class: ["relative", "inline-flex items-center justify-center", "text-left", "w-8 h-8", "border-0 rounded-full", "text-surface-700 dark:text-white/70", "border-transparent", "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50", "hover:text-surface-700 hover:bg-surface-300/20", "transition duration-200", "overflow-hidden", "cursor-pointer select-none"]
    },
    roweditorsavebutton: {
      class: ["relative", "inline-flex items-center justify-center", "text-left", "w-8 h-8", "border-0 rounded-full", "text-surface-700 dark:text-white/70", "border-transparent", "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50", "hover:text-surface-700 hover:bg-surface-300/20", "transition duration-200", "overflow-hidden", "cursor-pointer select-none"]
    },
    roweditorcancelbutton: {
      class: ["relative", "inline-flex items-center justify-center", "text-left", "w-8 h-8", "border-0 rounded-full", "text-surface-700 dark:text-white/70", "border-transparent", "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50", "hover:text-surface-700 hover:bg-surface-300/20", "transition duration-200", "overflow-hidden", "cursor-pointer select-none"]
    },
    radiobuttonwrapper: {
      class: ["relative", "inline-flex align-bottom", "w-6 h-6", "cursor-pointer select-none"]
    },
    radiobutton: ({context:e})=>({class:["flex justify-center items-center","w-[1.571rem] h-[1.571rem]","border-2 rounded-full",{"text-surface-700 dark:text-white/80":!e.checked},{"bg-surface-0 dark:bg-surface-900":!e.checked},{"border-surface-300 dark:border-surface-700":!e.checked},{"border-primary-500 dark:border-primary-400":e.checked},{"bg-primary-500 dark:bg-primary-400":e.checked},{"hover:border-primary-500 dark:hover:border-primary-400":!e.disabled},{"outline-none outline-offset-0 ring ring-primary-400/50 ring-inset dark:ring-primary-300/50":e.focused},"transition duration-200 ease-in-out",{"cursor-default opacity-60":e.disabled}]}),
    radiobuttonicon: ({context:e})=>({class:["block","rounded-full","w-3 h-3","bg-surface-0 dark:bg-surface-900","transition duration-200 transform",{"backface-hidden scale-10 invisible":e.checked===!1,"transform scale-100 visible":e.checked===!0}]}),
    headercheckboxwrapper: {
      class: ["relative", "inline-flex align-bottom", "w-6 h-6", "cursor-pointer select-none"]
    },
    headercheckbox: ({context:e})=>({class:["flex items-center justify-center","border-2 rounded-lg","w-6 h-6","text-surface-600",{"border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900":!e.checked,"border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400":e.checked},"focus:outline-none focus:outline-offset-0",{"ring ring-primary-400/50 dark:ring-primary-300/50":e.focused},"transition-colors duration-200",{"cursor-default opacity-60":e.disabled}]}),
    headercheckboxicon: {
      class: ["w-4 h-4", "text-base leading-none", "text-white dark:text-surface-900", "transition-all duration-200"]
    },
    checkboxwrapper: {
      class: ["relative", "inline-flex align-bottom", "w-6 h-6", "cursor-pointer select-none"]
    },
    checkbox: ({context:e})=>({class:["flex items-center justify-center","border-2 rounded-lg","w-6 h-6","text-surface-600",{"border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900":!e.checked,"border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400":e.checked},"focus:outline-none focus:outline-offset-0",{"ring ring-primary-400/50 dark:ring-primary-300/50":e.focused},"transition-colors duration-200",{"cursor-default opacity-60":e.disabled}]}),
    checkboxicon: {
      class: ["w-4 h-4", "text-base leading-none", "text-white dark:text-surface-900", "transition-all duration-200"]
    },
    transition: {
      enterFromClass: "opacity-0 scale-y-[0.8]",
      enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
      leaveActiveClass: "transition-opacity duration-100 ease-linear",
      leaveToClass: "opacity-0"
    }
  },
  bodyrow: ({context:e,props:r})=>({class:["dark:text-white/80",{"bg-primary-50 text-primary-700 dark:bg-primary-400/30":e.selected},{"bg-surface-0 text-surface-600 dark:bg-surface-800":!e.selected},{"font-bold bg-surface-0 dark:bg-surface-800":r.frozenRow},{"odd:bg-surface-0 odd:text-surface-600 dark:odd:bg-surface-800 even:bg-surface-50 even:text-surface-600 dark:even:bg-surface-900/50":e.stripedRows},{"focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 ring-inset dark:focus:ring-primary-300/50":e.selectable},{"hover:bg-surface-300/20 hover:text-surface-600":r.selectionMode&&!e.selected},{"transition duration-200":r.selectionMode&&!e.selected||r.rowHover},{"cursor-pointer":r.selectionMode}]}),
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
    class: ["relative", "inline-flex items-center justify-center", "text-left", "m-0 p-0", "w-8 h-8", "border-0 rounded-full", "text-surface-500 dark:text-white/70", "bg-transparent", "focus-visible:outline-none focus-visible:outline-offset-0", "focus-visible:ring focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50", "transition duration-200", "overflow-hidden", "cursor-pointer select-none"]
  },
  rowgrouptogglericon: {
    class: "inline-block w-4 h-4"
  },
  resizehelper: {
    class: "absolute hidden w-[2px] z-20 bg-primary-500 dark:bg-primary-400"
  }
}