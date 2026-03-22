export const useHistory = () => {
    const addToHistory = (id: string, title: string) => {
        const history = JSON.parse(localStorage.getItem('history') || '[]')
        const filtered = history.filter((item: any) => item.id !== id)
        const updated = [{ id, title }, ...filtered].slice(0, 10)
        localStorage.setItem('history', JSON.stringify(updated))
    }

    const getHistory = () => {
        return JSON.parse(localStorage.getItem('history') || '[]')
    }

    return { addToHistory, getHistory }
}