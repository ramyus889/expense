export default {
  root: ({props:e})=>({class:["inline-block",{"opacity-60 select-none pointer-events-none cursor-default":e.disabled}]}),
  input: {
    class: ["font-sans text-base ", "m-0", "p-3", "rounded-lg w-8 h-8", "bg-surface-0 dark:bg-surface-900", "border border-surface-300 dark:border-surface-700", "hover:border-primary-500 dark:hover:border-primary-400", "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50", "transition-colors duration-200", "cursor-pointer"]
  },
  panel: ({props:e})=>({class:[{"relative h-48 w-52":e.inline,"absolute h-48 w-52":!e.inline},"shadow-md border","bg-surface-800 border-surface-900 dark:border-surface-600"]}),
  selector: {
    class: ["absolute top-2 left-2", "h-44 w-40"]
  },
  color: {
    class: ["h-44 w-40"],
    style: "background: linear-gradient(to top, #000 0%, rgb(0 0 0 / 0) 100%), linear-gradient(to right, #fff 0%, rgb(255 255 255 / 0) 100%)"
  },
  colorhandle: {
    class: ["absolute", "rounded-full border border-solid", "h-3 w-3", "border-white", "cursor-pointer  opacity-85"]
  },
  hue: {
    class: ["absolute top-2 left-44", "h-44 w-6", "opacity-85"],
    style: "background: linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red)"
  },
  huehandle: {
    class: ["absolute left-0 -ml-1 -mt-1", "h-2 w-8", "border-solid border-2", "cursor-pointer opacity-85"]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}