export const useHistory = () => {
    const addToHistory = (id: string, title: string) => {
        const history = JSON.parse(
            localStorage.getItem('star-smuggler') || '[]'
        )
        const filtered = history.filter((item: any) => item.id !== id)
        const updated = [{ id, title }, ...filtered].slice(0, 10)
        localStorage.setItem('star-smuggler', JSON.stringify(updated))
    }

    const getHistory = () => {
        return JSON.parse(localStorage.getItem('star-smuggler') || '[]')
    }

    return { addToHistory, getHistory }
}
