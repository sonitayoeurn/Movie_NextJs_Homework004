import Layout from "@/components/layout"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { useMemo } from "react"
import { useState } from "react"
import DataTable from "react-data-table-component"

const product = ({ data }) => {
	const [products, setProducts] = useState([])
	const [filterText, setFilterText] = useState("")
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false)
	const filteredItems = products.filter(
		(item) =>
			item.title && item.title.toLowerCase().includes(filterText.toLowerCase())
	)
	console.log(products)

	const columns = [
		{
			name: "Id",
			selector: (row) => row.id,
            sortable: true,
		},
		{
			name: "Product Name",
			selector: (row) => row.title,
            sortable: true,
		},
		{
			name: "Price",
			selector: (row) => row.price,
            sortable: true,
		},
		{
			name: "Category",
			selector: (row) => row.category.name,
            sortable: true,
		},
		{
			name: "Photos",
			selector: (row) => (
				<img
					src={row.images}
					alt={row.title}
					width='75px'
					height='75px'
				/>
			),
		},

		{
			name: "Actions",
			selector: (row) => (
				<div>
					<button className='btn btn-primary'  style={{marginRight: "10px"}}>Edit</button>
					<button onClick={()=> deleteProduct(row.id)} className='btn btn-danger'>Delete</button>
				</div>
			),
		},
	]
	useEffect(() => {
		fetch("https://api.escuelajs.co/api/v1/products")
			.then((res) => res.json())
			.then((data) => setProducts(data))

		//
	}, [])
	const subHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle)
				setFilterText("")
			}
		}

		return (
			<div className="row">
                <div className="col">
                    <input
                    onChange={(e) => setFilterText(e.target.value)}
                    onClear={handleClear}
                    filterText={filterText}
                    type='text'
                    placeholder='Search Products here'
                    className='form-control me-2'
                     />
                </div>
                

            </div>
		)
	}, [filterText, resetPaginationToggle])
    const rounter = useRouter();

    const deleteProduct = (id) => {
        fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
            method: 'DELETE' 
        })
        rounter.push('/product')
    }

	return (
		<Layout>
            <div className="container">
                <h3 className="m-5 text-center">Product Collection - Table</h3>
            </div>
			<div className="container" style={{boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}>
            <DataTable
				title='All products listing'
				columns={columns}
				data={filteredItems}
				pagination 
                highlightOnHover
				paginationResetDefaultPage={resetPaginationToggle} 
				subHeader
				subHeaderComponent={subHeaderComponentMemo}
				selectableRows
				persistTableHead
               
			/>
            </div>
		</Layout>
	)
}

export default product
