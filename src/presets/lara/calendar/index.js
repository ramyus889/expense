export default {
  root: ({ props: e }) => ({
    class: [
      "inline-flex",
      "max-w-full",
      "relative",
      {
        "opacity-60 select-none pointer-events-none cursor-default": e.disabled,
      },
    ],
  }),
  input: ({ props: e }) => ({
    class: [
      "font-sans leading-none",
      "text-black dark:text-black",
      "placeholder:text-surface-400 dark:placeholder:text-surface-500",
      "bg-surface-0 dark:bg-surface-900",
      "border border-surface-300 dark:border-surface-600",
      "m-0 p-3",
      "appearance-none",
      { "rounded-md": !e.showIcon || e.iconDisplay == "input" },
      { "rounded-l-md  flex-1 pr-9": e.showIcon && e.iconDisplay !== "input" },
      { "rounded-md flex-1 pr-9": e.showIcon && e.iconDisplay === "input" },
      "transition-colors",
      "duration-200",
      "hover:border-primary-500 dark:hover:border-primary-400",
      "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50",
    ],
  }),
  inputicon: {
    class: [
      "absolute top-[50%] -mt-2",
      "text-surface-600 dark:text-surface-200",
      "right-[.75rem]",
    ],
  },
  dropdownbutton: {
    root: {
      class: [
        "relative",
        "items-center inline-flex text-center align-bottom",
        "rounded-r-md",
        "px-4 py-3 leading-none",
        "text-white dark:text-surface-900",
        "bg-primary-500 dark:bg-primary-400",
        "border border-primary-500 dark:border-primary-400",
        "focus:outline-none focus:outline-offset-0 focus:ring",
        "hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300",
        "focus:ring-primary-400/50 dark:focus:ring-primary-300/50",
      ],
    },
  },
  panel: ({ props: e }) => ({
    class: [
      { absolute: !e.inline, "inline-block": e.inline },
      { "w-auto p-2 ": !e.inline },
      { "min-w-[80vw] w-auto p-2 ": e.touchUI },
      { "p-2 min-w-full": e.inline },
      "border rounded-lg",
      { "shadow-md": !e.inline },
      "bg-surface-0 dark:bg-surface-800",
      "border-surface-200 dark:border-surface-700",
      { "overflow-x-auto": e.inline },
    ],
  }),
  datepickerMask: {
    class: [
      "fixed top-0 left-0 w-full h-full",
      "flex items-center justify-center",
      "bg-black bg-opacity-90",
    ],
  },
  header: {
    class: [
      "font-semibold",
      "flex items-center justify-between",
      "p-2",
      "m-0",
      "border-b",
      "rounded-t-md",
      "text-surface-700 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-800",
      "border-surface-200 dark:border-surface-700",
    ],
  },
  previousbutton: {
    class: [
      "relative",
      "inline-flex items-center justify-center",
      "w-8 h-8",
      "p-0 m-0",
      "rounded-full",
      "text-surface-600 dark:text-white/70",
      "border-0",
      "bg-transparent",
      "transition-colors duration-200 ease-in-out",
      "hover:text-surface-700 dark:hover:text-white/80",
      "hover:bg-surface-100 dark:hover:bg-surface-800/80",
      "cursor-pointer overflow-hidden",
    ],
  },
  title: {
    class: ["leading-8", "mx-auto my-0"],
  },
  monthTitle: {
    class: [
      "text-base leading-5",
      "font-semibold",
      "text-surface-700 dark:text-white/80",
      "transition duration-200",
      "p-2",
      "m-0 mr-2",
      "hover:text-primary-500 dark:hover:text-primary-400",
      "cursor-pointer",
    ],
  },
  yearTitle: {
    class: [
      "text-base leading-5",
      "font-semibold",
      "text-surface-700 dark:text-white/80",
      "transition duration-200",
      "p-2",
      "m-0",
      "hover:text-primary-500 dark:hover:text-primary-400",
      "cursor-pointer",
    ],
  },
  nextbutton: {
    class: [
      "relative",
      "inline-flex items-center justify-center",
      "w-8 h-8",
      "p-0 m-0",
      "rounded-full",
      "text-surface-600 dark:text-white/70",
      "border-0",
      "bg-transparent",
      "transition-colors duration-200 ease-in-out",
      "hover:text-surface-700 dark:hover:text-white/80",
      "hover:bg-surface-100 dark:hover:bg-surface-800/80",
      "cursor-pointer overflow-hidden",
    ],
  },
  table: {
    class: ["text-base leading-none", "border-collapse", "w-full", "m-0 my-2"],
  },
  tableheadercell: {
    class: ["p-0 md:p-2"],
  },
  weekheader: {
    class: [
      "leading-5",
      "text-surface-600 dark:text-white/70",
      "opacity-60 cursor-default",
    ],
  },
  weeknumber: {
    class: ["text-surface-600 dark:text-white/70", "opacity-60 cursor-default"],
  },
  weekday: {
    class: ["text-surface-500 dark:text-white/60"],
  },
  day: {
    class: ["p-0 md:p-2"],
  },
  weeklabelcontainer: ({ context: e }) => ({
    class: [
      "flex items-center justify-center",
      "mx-auto",
      "w-10 h-10",
      "rounded-full",
      "border-transparent border",
      {
        "text-surface-600 dark:text-white/70 bg-transparent":
          !e.selected && !e.disabled,
        "text-primary-700 bg-primary-100": e.selected && !e.disabled,
      },
      "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50",
      {
        "hover:bg-surface-100 dark:hover:bg-surface-800/80":
          !e.selected && !e.disabled,
        "hover:bg-primary-200": e.selected && !e.disabled,
      },
      {
        "opacity-60 cursor-default": e.disabled,
        "cursor-pointer": !e.disabled,
      },
    ],
  }),
  daylabel: ({ context: e }) => ({
    class: [
      "flex items-center justify-center",
      "mx-auto",
      "w-10 h-10",
      "rounded-full",
      "border-transparent border",
      {
        "text-primary-500 dark:text-primary-400": e.date.today,
        "text-surface-600 dark:text-white/70 bg-transparent":
          !e.selected && !e.disabled && !e.date.today,
        "text-primary-700 bg-primary-100 dark:text-surface-0 dark:bg-primary-300/40":
          e.selected && !e.disabled,
      },
      "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50",
      {
        "hover:bg-surface-100 dark:hover:bg-surface-600/80":
          !e.selected && !e.disabled,
        "hover:bg-primary-200 dark:hover:bg-primary-200/40":
          e.selected && !e.disabled,
      },
      {
        "opacity-60 cursor-default": e.disabled,
        "cursor-pointer": !e.disabled,
      },
    ],
  }),
  monthpicker: {
    class: ["my-2"],
  },
  month: ({ context: e }) => ({
    class: [
      "inline-flex items-center justify-center",
      "w-1/3",
      "p-2",
      "rounded-md",
      {
        "text-surface-600 dark:text-white/70 bg-transparent":
          !e.selected && !e.disabled,
        "text-primary-700 bg-primary-100 dark:text-surface-0 dark:bg-primary-300/40":
          e.selected && !e.disabled,
      },
      "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50",
      {
        "hover:bg-surface-100 dark:hover:bg-surface-600/80":
          !e.selected && !e.disabled,
        "hover:bg-primary-200 dark:hover:bg-primary-200/40":
          e.selected && !e.disabled,
      },
      "cursor-pointer",
    ],
  }),
  yearpicker: {
    class: ["my-2"],
  },
  year: ({ context: e }) => ({
    class: [
      "inline-flex items-center justify-center",
      "w-1/3",
      "p-2",
      "rounded-md",
      {
        "text-surface-600 dark:text-white/70 bg-transparent":
          !e.selected && !e.disabled,
        "text-primary-700 bg-primary-100 dark:text-surface-0 dark:bg-primary-300/40":
          e.selected && !e.disabled,
      },
      "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50",
      {
        "hover:bg-surface-100 dark:hover:bg-surface-600/80":
          !e.selected && !e.disabled,
        "hover:bg-primary-200 dark:hover:bg-primary-200/40":
          e.selected && !e.disabled,
      },
      "cursor-pointer",
    ],
  }),
  timepicker: {
    class: [
      "flex",
      "justify-center items-center",
      "border-t-1",
      "border-solid border-surface-200",
      "p-2",
    ],
  },
  separatorcontainer: {
    class: ["flex", "items-center", "flex-col", "px-2"],
  },
  separator: {
    class: ["text-xl"],
  },
  hourpicker: {
    class: ["flex", "items-center", "flex-col", "px-2"],
  },
  minutepicker: {
    class: ["flex", "items-center", "flex-col", "px-2"],
  },
  ampmpicker: {
    class: ["flex", "items-center", "flex-col", "px-2"],
  },
  incrementbutton: {
    class: [
      "relative",
      "inline-flex items-center justify-center",
      "w-8 h-8",
      "p-0 m-0",
      "rounded-full",
      "text-surface-600 dark:text-white/70",
      "border-0",
      "bg-transparent",
      "transition-colors duration-200 ease-in-out",
      "hover:text-surface-700 dark:hover:text-white/80",
      "hover:bg-surface-100 dark:hover:bg-surface-800/80",
      "cursor-pointer overflow-hidden",
    ],
  },
  decrementbutton: {
    class: [
      "relative",
      "inline-flex items-center justify-center",
      "w-8 h-8",
      "p-0 m-0",
      "rounded-full",
      "text-surface-600 dark:text-white/70",
      "border-0",
      "bg-transparent",
      "transition-colors duration-200 ease-in-out",
      "hover:text-surface-700 dark:hover:text-white/80",
      "hover:bg-surface-100 dark:hover:bg-surface-800/80",
      "cursor-pointer overflow-hidden",
    ],
  },
  groupcontainer: {
    class: ["flex"],
  },
  group: {
    class: [
      "flex-1",
      "border-l",
      "border-surface-200",
      "pr-0.5",
      "pl-0.5",
      "pt-0",
      "pb-0",
      "first:pl-0",
      "first:border-l-0",
    ],
  },
  buttonbar: {
    class: [
      "flex justify-between items-center",
      "py-3 px-0",
      "border-t border-surface-200 dark:border-surface-700",
    ],
  },
  todaybutton: {
    root: {
      class: [
        "inline-flex items-center justify-center",
        "px-4 py-3 leading-none",
        "rounded-md",
        "bg-transparent border-transparent",
        "text-primary-500 dark:text-primary-400",
        "transition-colors duration-200 ease-in-out",
        "focus:outline-none focus:outline-offset-0 focus:ring",
        "hover:bg-primary-300/20",
        "cursor-pointer",
      ],
    },
  },
  clearbutton: {
    root: {
      class: [
        "inline-flex items-center justify-center",
        "px-4 py-3 leading-none",
        "rounded-md",
        "bg-transparent border-transparent",
        "text-primary-500 dark:text-primary-400",
        "transition-colors duration-200 ease-in-out",
        "focus:outline-none focus:outline-offset-0 focus:ring",
        "hover:bg-primary-300/20",
        "cursor-pointer",
      ],
    },
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass:
      "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0",
  },
};
