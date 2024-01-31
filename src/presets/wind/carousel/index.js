export default {
  root: {
    class: ["flex flex-col"]
  },
  content: {
    class: ["flex flex-col overflow-auto"]
  },
  container: ({props:e})=>({class:["flex",{"flex-row":e.orientation!=="vertical","flex-col":e.orientation=="vertical"}]}),
  previousbutton: {
    class: ["flex justify-center items-center self-center", "overflow-hidden w-8 h-8", "mx-2", "rounded-full", "border-0 bg-transparent", "text-surface-600", "transition duration-200 ease-in-out"]
  },
  nextbutton: {
    class: ["flex justify-center items-center self-center", "overflow-hidden w-8 h-8", "mx-2", "rounded-full", "border-0 bg-transparent", "text-surface-600", "transition duration-200 ease-in-out"]
  },
  itemscontent: {
    class: ["overflow-hidden w-full"]
  },
  itemscontainer: ({props:e})=>({class:["flex",{"flex-row":e.orientation!=="vertical","flex-col h-full":e.orientation=="vertical"}]}),
  item: ({props:e})=>({class:["flex shrink-0 grow",{"w-1/3":e.orientation!=="vertical","w-full":e.orientation=="vertical"}]}),
  indicators: {
    class: ["flex flex-row justify-center flex-wrap"]
  },
  indicator: {
    class: ["mr-2 mb-2"]
  },
  indicatorbutton: ({context:e})=>({class:["w-8 h-2 rounded-0","transition duration-200","focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50",{"bg-surface-200 hover:bg-surface-300 dark:bg-surface-700 dark:hover:bg-surface-600":!e.highlighted,"bg-primary-500 hover:bg-primary-600":e.highlighted}]})
}