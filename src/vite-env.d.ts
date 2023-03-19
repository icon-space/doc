/// <reference types="vite/client" />

interface ImportMeta {
    readonly env: ImportMetaEnv
}

declare module 'colorpicker-v3' {
    import ColorPicker from 'colorpicker-v3'
    export default ColorPicker
}

declare type BoothMode = 'list' | 'card'

// 大驼峰 | 小驼峰 | 下划线 | 中划线 | 中文
declare type NamedType = 'PascalCase' | 'CamelCase' | 'SnakeCase' | 'KebabCase' | 'Chinese'
