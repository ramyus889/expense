export default {
  root: {
    class: ["min-w-[12rem]", "rounded-md", "bg-surface-0 dark:bg-surface-700", "text-surface-700 dark:text-white/80", "ring-1 ring-surface-200 dark:ring-surface-700"]
  },
  wrapper: {
    class: ["overflow-auto"]
  },
  list: {
    class: "py-1 list-none m-0"
  },
  item: ({context:e})=>({class:["sm:text-sm","leading-none",{"font-normal":!e.selected,"font-bold":e.selected},"relative","border-0","rounded-none","m-0","py-2 px-4",{"text-surface-700 dark:text-white/80":!e.focused&&!e.selected},{"bg-surface-200 dark:bg-surface-600/60 text-surface-700 dark:text-white/80":e.focused&&!e.selected},{"bg-primary-500 dark:bg-primary-400 text-white dark:text-surface-700":e.focused&&e.selected},{"bg-surface-100 dark:bg-surface-300/10 text-primary-500 dark:text-primary-400":!e.focused&&e.selected},"hover:bg-primary-500 dark:hover:bg-primary-400 hover:text-white dark:hover:text-surface-700","focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400","cursor-pointer","overflow-hidden","whitespace-nowrap"]}),
  itemgroup: {
    class: ["font-bold", "sm:text-sm", "m-0", "py-2 px-4", "text-surface-800 dark:text-white/80", "bg-surface-0 dark:bg-surface-600/80", "cursor-auto"]
  },
  header: {
    class: ["p-0", "m-0", "rounded-tl-md", "rounded-tr-md", "border-b border-surface-200 dark:border-surface-700", "text-surface-700 dark:text-white/80", "bg-surface-100 dark:bg-surface-800"]
  },
  filtercontainer: {
    class: "relative"
  },
  filterinput: {
    class: ["font-sans", "leading-none", "sm:text-sm", "py-1.5 px-3", "pr-7", "-mr-7", "w-full", "text-surface-700 dark:text-white/80", "bg-surface-0 dark:bg-surface-900", "placeholder:text-surface-400", "border-0", "rounded-tl-md", "rounded-tr-md", "appearance-none", "focus:ring-2 focus:ring-inset focus:outline-none focus:outline-offset-0", "focus:ring-primary-600 dark:focus:ring-primary-500", "appearance-none"]
  },
  filtericon: {
    class: ["absolute", "top-1/2 right-3", "-mt-2"]
  },
  emptymessage: {
    class: ["leading-none", "sm:text-sm", "py-2 px-4", "text-surface-800 dark:text-white/80", "bg-transparent"]
  }
}