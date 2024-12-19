import { useId } from "react"
import {useFilters} from "../src/hooks/useFilters.js"
import "./Filters.css"

export function filters () {
    const {filters, setFilters} = useFilters()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }

        ))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }
    return (
        <section className="filters">

            <div>
                <label htmlFor={minPriceFilterId}>Price</label>
                <span>${filters.minPrice}</span>
                <input type="range"
                id={minPriceFilterId}
                min="0"
                max="1000"
                onChange={handleChangeMinPrice}
                value={filters.minPrice} 
                />
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select name="" id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="laptops">portatiles</option>
                    <option value="fragrances">fragancias</option>t
                </select>
            </div>

        </section>
    )
}