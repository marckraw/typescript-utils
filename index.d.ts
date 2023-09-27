interface MainType {
    name: string
    age: number
}

type NestedType = MainType & {
    isDeveloper: boolean
}

export type Prettify<T> = {
    [K in keyof T]: T[K]
} & {}



type usage = Prettify<NestedType>