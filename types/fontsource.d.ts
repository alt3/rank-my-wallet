// `@fontsource/*` entry points resolve to plain `.css` files through their
// exports map, so they carry no type declarations of their own. TypeScript 6
// rejects a side-effect import of such a module (TS2882) unless one exists.
declare module "@fontsource/*"
