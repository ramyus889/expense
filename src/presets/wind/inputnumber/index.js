export default {
  root: ({props:e,parent:r})=>({class:["inline-flex",{"flex-col":e.showButtons&&e.buttonLayout=="vertical"},{"!w-16":e.showButtons&&e.buttonLayout=="vertical"},{"first:rounded-l-md rounded-none last:rounded-r-md":r.instance.$name=="InputGroup"&&!e.showButtons},{"border-0 border-y border-l last:border-r border-surface-300 dark:border-surface-600":r.instance.$name=="InputGroup"&&!e.showButtons},{"ring-1 ring-surface-300 dark:ring-surface-700 ring-offset-0":r.instance.$name!=="InputGroup"},"shadow-sm","rounded-md"]}),
  input: {
    root: ({parent:e})=>({class:["flex flex-auto","sm:text-sm",{"text-center":e.props.showButtons&&e.props.buttonLayout=="vertical"},"m-0","py-1.5 px-3","rounded-md",{"rounded-tr-none rounded-br-none":e.props.showButtons},{"rounded-tl-none rounded-bl-none":e.props.showButtons&&e.props.buttonLayout=="horizontal"},{"rounded-none":e.props.showButtons&&e.props.buttonLayout=="vertical"},"text-surface-900 dark:text-surface-0","placeholder:text-surface-400 dark:placeholder:text-surface-500","bg-surface-0 dark:bg-surface-900",{"border-r border-surface-300 dark:border-surface-700":e.props.showButtons&&e.props.buttonLayout=="stacked"},{"border-x border-surface-300 dark:border-surface-700":e.props.showButtons&&e.props.buttonLayout=="horizontal"},{"border-y border-surface-300 dark:border-surface-700":e.props.showButtons&&e.props.buttonLayout=="vertical"},"outline-none focus:ring-primary-600 dark:focus:ring-primary-500","focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:focus:ring-primary-500",{"order-2":e.props.buttonLayout=="horizontal"||e.props.buttonLayout=="vertical"}]})
  },
  buttongroup: {
    class: ["flex", "flex-col"]
  },
  incrementbutton: {
    root: ({parent:e})=>({class:["flex flex-auto","items-center","justify-center","text-center align-bottom","relative",{"order-3":e.props.showButtons&&e.props.buttonLayout=="horizontal"},{"order-1":e.props.showButtons&&e.props.buttonLayout=="vertical"},"text-surface-600 dark:text-surface-400","bg-surface-0 dark:bg-surface-800","w-[3rem]",{"px-2.5 py-1.5":e.props.showButtons&&e.props.buttonLayout!=="stacked"},{"p-0":e.props.showButtons&&e.props.buttonLayout=="stacked"},{"w-full":e.props.showButtons&&e.props.buttonLayout=="vertical"},"rounded-md",{"rounded-tl-none rounded-br-none rounded-bl-none":e.props.showButtons&&e.props.buttonLayout=="stacked"},{"rounded-bl-none rounded-tl-none":e.props.showButtons&&e.props.buttonLayout=="horizontal"},{"rounded-bl-none rounded-br-none":e.props.showButtons&&e.props.buttonLayout=="vertical"},"focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 focus:dark:ring-primary-500","hover:bg-surface-50 dark:hover:bg-surface-700","cursor-pointer overflow-hidden select-none"]}),
    label: {
      class: "h-0 w-0"
    }
  },
  decrementbutton: {
    root: ({parent:e})=>({class:["flex flex-auto","items-center","justify-center","text-center align-bottom","relative",{"order-1":e.props.showButtons&&e.props.buttonLayout=="horizontal"},{"order-3":e.props.showButtons&&e.props.buttonLayout=="vertical"},"text-surface-600 dark:text-surface-400","bg-surface-0 dark:bg-surface-800","w-[3rem]",{"px-2.5 py-1.5":e.props.showButtons&&e.props.buttonLayout!=="stacked"},{"p-0":e.props.showButtons&&e.props.buttonLayout=="stacked"},{"w-full":e.props.showButtons&&e.props.buttonLayout=="vertical"},"rounded-md",{"rounded-tr-none rounded-tl-none rounded-bl-none":e.props.showButtons&&e.props.buttonLayout=="stacked"},{"rounded-tr-none rounded-br-none ":e.props.showButtons&&e.props.buttonLayout=="horizontal"},{"rounded-tr-none rounded-tl-none ":e.props.showButtons&&e.props.buttonLayout=="vertical"},"focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 focus:dark:ring-primary-500","hover:bg-surface-50 dark:hover:bg-surface-700","cursor-pointer overflow-hidden select-none"]}),
    label: {
      class: "h-0 w-0"
    }
  }
}