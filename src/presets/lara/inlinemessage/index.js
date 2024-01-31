export default {
  root: ({props:e})=>({class:["inline-flex items-center justify-center align-top gap-2","p-3 m-0 rounded-md dark:border",{"bg-blue-100/70 dark:bg-blue-500/20":e.severity=="info","bg-green-100/70 dark:bg-green-500/20":e.severity=="success","bg-orange-100/70 dark:bg-orange-500/20":e.severity=="warn","bg-red-100/70 dark:bg-red-500/20":e.severity=="error"},{"dark:border-blue-400":e.severity=="info","dark:border-green-400":e.severity=="success","dark:border-orange-400":e.severity=="warn","dark:border-red-400":e.severity=="error"},{"text-blue-700 dark:text-blue-300":e.severity=="info","text-green-700 dark:text-green-300":e.severity=="success","text-orange-700 dark:text-orange-300":e.severity=="warn","text-red-700 dark:text-red-300":e.severity=="error"}]}),
  icon: {
    class: "text-base"
  },
  text: {
    class: ["text-base leading-none", "font-medium"]
  }
}