export default {
  wrapper: {
    class: ["h-full w-full", "z-[1]", "overflow-hidden", "relative float-left"]
  },
  content: {
    class: ["h-[calc(100%+18px)] w-[calc(100%+18px)] pr-[18px] pb-[18px] pl-0 pt-0", "overflow-scroll scrollbar-none", "box-border", "relative", "[&::-webkit-scrollbar]:hidden"]
  },
  barX: {
    class: ["h-[9px] bottom-0", "bg-surface-50 dark:bg-surface-700 rounded", "cursor-pointer", "invisible z-20", "transition duration-[250ms] ease-linear", "relative"]
  },
  barY: {
    class: ["w-[9px] top-0", "bg-surface-50 dark:bg-surface-700 rounded", "cursor-pointer", "z-20", "transition duration-[250ms] ease-linear", "relative"]
  }
}