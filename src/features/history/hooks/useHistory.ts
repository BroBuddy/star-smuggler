export const useHistory = () => {
    const addToHistory = (tag: string, title: string) => {
        const history = JSON.parse(
            localStorage.getItem('star-smuggler') || '[]'
        )
        const filtered = history.filter((item: any) => item.tag !== tag)
        const updated = [{ tag, title }, ...filtered].slice(0, 10)
        localStorage.setItem('star-smuggler', JSON.stringify(updated))
    }

    const getHistory = () => {
        return JSON.parse(localStorage.getItem('star-smuggler') || '[]')
    }

    return { addToHistory, getHistory }
}
