export default {
  root: ({props:e})=>({class:["overflow-hidden",{"animate-pulse":e.animation!=="none"},{"rounded-full":e.shape==="circle","rounded-md":e.shape!=="circle"},"bg-surface-200 dark:bg-surface-700"]})
}