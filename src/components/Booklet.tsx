import { Outlet } from 'react-router-dom'

const Booklet = () => {
    return (
        <section className="flex flex-col py-2 w-full">
            <Outlet />
        </section>
    )
}

export default Booklet
