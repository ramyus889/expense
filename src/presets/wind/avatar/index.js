export default {
  root: ({props:e,parent:r})=>{var t,o,i;return{class:[{"text-sm":e.size==null||e.size=="normal","text-lg":e.size=="large","text-xl":e.size=="xlarge"},"inline-flex items-center justify-center","shrink-0","relative",{"h-8 w-8":e.size==null||e.size=="normal","w-12 h-12":e.size=="large","w-16 h-16":e.size=="xlarge"},{"-ml-4":((t=r.instance.$style)==null?void 0:t.name)=="avatargroup"},{"rounded-lg":e.shape=="square","rounded-full":e.shape=="circle"},{"border-2":((o=r.instance.$style)==null?void 0:o.name)=="avatargroup"},"bg-surface-100 dark:bg-surface-700",{"border-white dark:border-surface-800":((i=r.instance.$style)==null?void 0:i.name)=="avatargroup"}]}},
  image: {
    class: "h-full w-full"
  }
}