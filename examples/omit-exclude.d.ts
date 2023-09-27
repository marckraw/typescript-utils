/**
 *
 * Use of Omit<> utility type
 *
 * */
interface Todo {
    title: string
    description: string
    createdAt: Date
}

type WithoutCreatedAt = Omit<Todo, 'createdAt'>


/**
 *
 * Use of Exclude<> utility type
 *
 * */
type Shapes = {
    kind: 'circle'
    radius: number
} | {
    kind: 'square'
    sideLength: number
}


type OnlySquareShape = Exclude<Shapes, {kind: 'circle'}>