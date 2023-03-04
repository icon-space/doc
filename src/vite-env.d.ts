/// <reference types="vite/client" />

interface ImportMeta {
    readonly env: ImportMetaEnv
}

declare module 'colorpicker-v3' {
    import ColorPicker from 'colorpicker-v3'
    export default ColorPicker
}
