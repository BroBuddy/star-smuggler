export interface Rule {
    tag: string
    title: string
    desc?: string[]
    image?: boolean
    tables?: TableType[]
    note?: string[]
}

export type RuleItem = Pick<Rule, 'tag' | 'title'>

export type SimpleListTableType = {
    type: 'simple-list'
    label?: string
    cols?: string[]
    rows: string[][]
}

export type RollTableType = {
    type: 'roll-table'
    label?: string
    cols?: string[]
    rows: string[][]
}

export type TableType = SimpleListTableType | RollTableType
