export default {
  root: ({ props: e, parent: r }) => ({
    class: [
      "inline-flex",
      { "flex-col": e.showButtons && e.buttonLayout == "vertical" },
      {
        "first:rounded-l-md rounded-none last:rounded-r-md":
          r.instance.$name == "InputGroup" && !e.showButtons,
      },
      {
        "border-0 border-y border-l last:border-r border-surface-300 dark:border-surface-600":
          r.instance.$name == "InputGroup" && !e.showButtons,
      },
      {
        "first:ml-0 ml-[-1px]":
          r.instance.$name == "InputGroup" && !e.showButtons,
      },
      { "!w-16": e.showButtons && e.buttonLayout == "vertical" },
    ],
  }),
  input: {
    root: ({ parent: e, context: r }) => {
      var t, o;
      return {
        class: [
          "flex flex-auto",
          "font-sans leading-none",
          {
            "text-center":
              e.props.showButtons && e.props.buttonLayout == "vertical",
          },
          "p-3",
          "m-0",
          "rounded-lg",
          { "rounded-tr-none rounded-br-none": e.props.showButtons },
          {
            "rounded-tl-none rounded-bl-none":
              e.props.showButtons && e.props.buttonLayout == "horizontal",
          },
          {
            "rounded-none":
              e.props.showButtons && e.props.buttonLayout == "vertical",
          },
          {
            "!rounded-none":
              ((t = e.instance.$parentInstance) == null ? void 0 : t.$name) ==
                "InputGroup" && !e.props.showButtons,
          },
          {
            "border-0":
              ((o = e.instance.$parentInstance) == null ? void 0 : o.$name) ==
                "InputGroup" && !e.props.showButtons,
          },
          "text-black dark:text-black",
          "placeholder:text-surface-400 dark:placeholder:text-surface-500",
          "bg-surface-0 dark:bg-surface-900",
          "border border-surface-300 dark:border-surface-600",
          "hover:border-primary-500 dark:hover:border-primary-400",
          "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50",
          {
            "opacity-60 select-none pointer-events-none cursor-default":
              r.disabled,
          },
          {
            "order-2":
              e.props.buttonLayout == "horizontal" ||
              e.props.buttonLayout == "vertical",
          },
        ],
      };
    },
  },
  buttongroup: ({ props: e }) => ({ class: ["flex", "flex-col"] }),
  incrementbutton: {
    root: ({ parent: e }) => ({
      class: [
        "flex flex-auto",
        "items-center",
        "justify-center",
        "text-center align-bottom",
        "relative",
        {
          "order-3":
            e.props.showButtons && e.props.buttonLayout == "horizontal",
        },
        {
          "order-1": e.props.showButtons && e.props.buttonLayout == "vertical",
        },
        "text-white dark:text-surface-900",
        "bg-primary-500 dark:bg-primary-400",
        "border border-primary-500 dark:border-primary-400",
        "w-[3rem]",
        {
          "px-4 py-3":
            e.props.showButtons && e.props.buttonLayout !== "stacked",
        },
        { "p-0": e.props.showButtons && e.props.buttonLayout == "stacked" },
        { "w-full": e.props.showButtons && e.props.buttonLayout == "vertical" },
        "rounded-md",
        {
          "rounded-tl-none rounded-br-none rounded-bl-none":
            e.props.showButtons && e.props.buttonLayout == "stacked",
        },
        {
          "rounded-bl-none rounded-tl-none":
            e.props.showButtons && e.props.buttonLayout == "horizontal",
        },
        {
          "rounded-bl-none rounded-br-none":
            e.props.showButtons && e.props.buttonLayout == "vertical",
        },
        "focus:outline-none focus:outline-offset-0 focus:ring",
        "hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300",
        "cursor-pointer overflow-hidden select-none",
      ],
    }),
    label: {
      class: "h-0 w-0",
    },
  },
  decrementbutton: {
    root: ({ parent: e }) => ({
      class: [
        "flex flex-auto",
        "items-center",
        "justify-center",
        "text-center align-bottom",
        "relative",
        {
          "order-1":
            e.props.showButtons && e.props.buttonLayout == "horizontal",
        },
        {
          "order-3": e.props.showButtons && e.props.buttonLayout == "vertical",
        },
        "text-white dark:text-surface-900",
        "bg-primary-500 dark:bg-primary-400",
        "border border-primary-500 dark:border-primary-400",
        "w-[3rem]",
        {
          "px-4 py-3":
            e.props.showButtons && e.props.buttonLayout !== "stacked",
        },
        { "p-0": e.props.showButtons && e.props.buttonLayout == "stacked" },
        { "w-full": e.props.showButtons && e.props.buttonLayout == "vertical" },
        "rounded-md",
        {
          "rounded-tr-none rounded-tl-none rounded-bl-none":
            e.props.showButtons && e.props.buttonLayout == "stacked",
        },
        {
          "rounded-tr-none rounded-br-none ":
            e.props.showButtons && e.props.buttonLayout == "horizontal",
        },
        {
          "rounded-tr-none rounded-tl-none ":
            e.props.showButtons && e.props.buttonLayout == "vertical",
        },
        "focus:outline-none focus:outline-offset-0 focus:ring",
        "hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300",
        "cursor-pointer overflow-hidden select-none",
      ],
    }),
    label: {
      class: "h-0 w-0",
    },
  },
};
