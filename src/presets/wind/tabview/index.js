export default {
  navContainer: ({props:e})=>({class:["relative",{"overflow-hidden":e.scrollable}]}),
  navContent: {
    class: ["overflow-y-hidden overscroll-contain", "overscroll-auto", "scroll-smooth", "[&::-webkit-scrollbar]:hidden"]
  },
  previousButton: {
    class: ["flex items-center justify-center", "!absolute", "top-0 left-0", "z-20", "h-full w-12", "rounded-none", "bg-surface-0 dark:bg-surface-800", "text-primary-500 dark:text-primary-400", "shadow-md"]
  },
  nextButton: {
    class: ["flex items-center justify-center", "!absolute", "top-0 right-0", "z-20", "h-full w-12", "rounded-none", "bg-surface-0 dark:bg-surface-800", "text-primary-500 dark:text-primary-400", "shadow-md"]
  },
  nav: {
    class: ["flex flex-1", "list-none", "p-0 m-0", "bg-surface-0 dark:bg-surface-800", "border-b border-surface-200 dark:border-surface-700", "text-surface-900 dark:text-surface-0/80"]
  },
  tabpanel: {
    header: ({props:e})=>({class:["mr-0",{"opacity-60 cursor-default user-select-none select-none pointer-events-none":e==null?void 0:e.disabled}]}),
    headerAction: ({parent:e,context:r})=>({class:["relative","font-medium","text-md","flex items-center","py-4 px-3","-mb-[1px]","border-b-2","rounded-t-md",{"border-surface-200 dark:border-surface-700":e.state.d_activeIndex!==r.index,"bg-surface-0 dark:bg-surface-800":e.state.d_activeIndex!==r.index,"text-surface-700 dark:text-surface-0/80":e.state.d_activeIndex!==r.index,"bg-surface-0 dark:bg-surface-800":e.state.d_activeIndex===r.index,"border-primary-500 dark:border-primary-400":e.state.d_activeIndex===r.index,"text-primary-500 dark:text-primary-400":e.state.d_activeIndex===r.index},"focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-inset","focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",{"hover:bg-surface-0 dark:hover:bg-surface-800/80":e.state.d_activeIndex!==r.index,"hover:border-surface-400 dark:hover:border-surface-600":e.state.d_activeIndex!==r.index,"hover:text-surface-900 dark:hover:text-surface-0":e.state.d_activeIndex!==r.index},"transition-all duration-200","cursor-pointer select-none text-decoration-none","overflow-hidden","user-select-none","whitespace-nowrap"]}),
    headerTitle: {
      class: ["leading-none", "whitespace-nowrap"]
    },
    content: {
      class: ["p-6", "rounded-b-md", "bg-surface-0 dark:bg-surface-800", "text-surface-700 dark:text-surface-0/80", "border-0"]
    }
  }
}