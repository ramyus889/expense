export default {
  root: ({props:e})=>({class:["text-xs font-bold","inline-flex items-center justify-center","px-2 py-1",{"rounded-md":!e.rounded,"rounded-full":e.rounded},"text-white dark:text-surface-900",{"bg-primary-500 dark:bg-primary-400":e.severity==null||e.severity=="primary","bg-green-500 dark:bg-green-400":e.severity=="success","bg-blue-500 dark:bg-blue-400":e.severity=="info","bg-orange-500 dark:bg-orange-400":e.severity=="warning","bg-red-500 dark:bg-red-400":e.severity=="danger"}]}),
  value: {
    class: "leading-normal"
  },
  icon: {
    class: "mr-1 text-sm"
  }
}